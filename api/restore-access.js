// Vercel Serverless Function: Pro Access Restore
// Users enter their email to receive their access code
// Uses Vercel KV (Upstash Redis) when KV_REST_API_URL is set
// Falls back to /tmp file storage for local development
// Requires: RESEND_API_KEY, ADMIN_SECRET env vars

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const PURCHASES_FILE = path.join('/tmp', 'apipulse_purchases.json');
const KV_KEY = 'apipulse:purchases';

// --- Storage abstraction: Vercel KV or /tmp fallback ---

let kvClient = null;

async function getKvClient() {
  if (kvClient) return kvClient;
  if (!process.env.KV_REST_API_URL) return null;
  try {
    const kv = require('@vercel/kv');
    kvClient = kv;
    return kv;
  } catch (e) {
    console.warn('[RESTORE] @vercel/kv not installed, falling back to /tmp');
    return null;
  }
}

async function loadPurchases() {
  const kv = await getKvClient();
  if (kv) {
    try {
      const data = await kv.get(KV_KEY);
      return Array.isArray(data) ? data : [];
    } catch (e) {
      console.error('[RESTORE] KV read error:', e.message);
      return [];
    }
  }
  // /tmp fallback
  try {
    if (fs.existsSync(PURCHASES_FILE)) {
      return JSON.parse(fs.readFileSync(PURCHASES_FILE, 'utf8'));
    }
  } catch (e) { /* start fresh */ }
  return [];
}

// --- End storage abstraction ---

// Simple in-memory rate limiter
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minutes
const RATE_LIMIT_MAX = 3; // max 3 requests per window per IP

function isRateLimited(ip) {
    const now = Date.now();
    const record = rateLimit.get(ip);
    if (!record || now - record.start > RATE_LIMIT_WINDOW) {
        rateLimit.set(ip, { start: now, count: 1 });
        return false;
    }
    record.count++;
    return record.count > RATE_LIMIT_MAX;
}

async function sendRestoreEmail(email, accessCode) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.log('[RESTORE] RESEND_API_KEY not set, skipping email');
        return;
    }

    const from = process.env.EMAIL_FROM || 'APIpulse <onboarding@resend.dev>';

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from,
                to: [email],
                subject: 'Your APIpulse Pro Access Code',
                html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#0f172a;color:#e2e8f0;">
  <h1 style="color:#818cf8;font-size:24px;margin-bottom:16px;">Here's your access code</h1>
  <p style="font-size:16px;line-height:1.6;margin-bottom:16px;">
    You requested your APIpulse Pro access code. Here it is:
  </p>

  <div style="background:#1e293b;border-radius:12px;padding:24px;margin:24px 0;text-align:center;">
    <div style="font-size:28px;font-weight:800;color:#22c55e;font-family:monospace;letter-spacing:2px;padding:12px;background:rgba(34,197,94,0.1);border-radius:8px;border:2px dashed rgba(34,197,94,0.3);">
      ${accessCode}
    </div>
  </div>

  <div style="background:#1e293b;border-radius:8px;padding:20px;margin:20px 0;">
    <h2 style="color:#818cf8;font-size:17px;margin-bottom:12px;">To restore access:</h2>
    <ol style="padding-left:20px;line-height:2;">
      <li>Go to <a href="https://getapipulse.com/pro.html" style="color:#818cf8;">getapipulse.com/pro.html</a></li>
      <li>Click "Already have a code? Enter it here"</li>
      <li>Paste the code above</li>
      <li>Pro features are unlocked!</li>
    </ol>
  </div>

  <hr style="border:none;border-top:1px solid #334155;margin:24px 0;">
  <p style="font-size:12px;color:#64748b;">
    You're receiving this because you requested a code restore at getapipulse.com.
  </p>
</div>`
            })
        });

        if (!response.ok) {
            const err = await response.text();
            console.error('[RESTORE] Resend error:', err);
        }
    } catch (err) {
        console.error('[RESTORE] Failed to send restore email:', err.message);
    }
}

module.exports = async (req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'https://getapipulse.com');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Rate limit
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    if (isRateLimited(clientIp)) {
        return res.status(429).json({ error: 'Too many requests. Please try again in 5 minutes.' });
    }

    const { email } = req.body || {};

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Valid email required' });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const purchases = await loadPurchases();
    const purchase = purchases.find(p => p.email === normalizedEmail);

    if (!purchase) {
        // Don't reveal whether email exists — same response either way
        console.log(`[RESTORE] No purchase found for ${normalizedEmail}`);
        return res.status(200).json({
            message: 'If an account exists with this email, you will receive your access code shortly.'
        });
    }

    console.log(`[RESTORE] Restoring access for ${normalizedEmail}`);

    // Send access code email (non-blocking)
    sendRestoreEmail(normalizedEmail, purchase.accessCode).catch(err => {
        console.error('[RESTORE] Email error:', err.message);
    });

    return res.status(200).json({
        message: 'If an account exists with this email, you will receive your access code shortly.'
    });
};
