// Vercel Serverless Function: Email Subscription API
// Stores emails in /tmp (persists within same function instance)
// Sends welcome email via Resend (requires RESEND_API_KEY env var)
// For production, upgrade to Upstash Redis or a database

const fs = require('fs');
const path = require('path');

const EMAILS_FILE = path.join('/tmp', 'apipulse_emails.json');

// Simple in-memory rate limiter (resets on cold start)
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 requests per window per IP

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

function loadEmails() {
  try {
    if (fs.existsSync(EMAILS_FILE)) {
      return JSON.parse(fs.readFileSync(EMAILS_FILE, 'utf8'));
    }
  } catch (e) {
    // File corrupted or missing, start fresh
  }
  return [];
}

function saveEmails(emails) {
  fs.writeFileSync(EMAILS_FILE, JSON.stringify(emails, null, 2));
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Generate a simple unsubscribe token from email
function generateUnsubscribeToken(email) {
  const crypto = require('crypto');
  const secret = process.env.ADMIN_SECRET || 'apipulse-default-secret';
  return crypto.createHmac('sha256', secret).update(email).digest('hex').slice(0, 16);
}

// Send welcome email via Resend
async function sendWelcomeEmail(email) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log('[SUBSCRIBE] RESEND_API_KEY not set, skipping welcome email');
    return;
  }

  const from = process.env.EMAIL_FROM || 'APIpulse <onboarding@resend.dev>';
  const unsubscribeToken = generateUnsubscribeToken(email);
  const unsubscribeUrl = `https://getapipulse.com/unsubscribe.html?token=${unsubscribeToken}&email=${encodeURIComponent(email)}`;

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
        subject: 'Welcome to APIpulse — Your AI API Cost Toolkit',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0f172a; color: #e2e8f0;">
            <h1 style="color: #818cf8; font-size: 24px; margin-bottom: 16px;">Welcome to APIpulse!</h1>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
              Thanks for subscribing. You'll get weekly updates on AI API pricing changes, new models, and cost-saving tips.
            </p>
            <div style="background: linear-gradient(135deg, #7c3aed, #818cf8); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center;">
              <p style="font-size: 13px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #e2e8f0; margin-bottom: 8px;">⚡ Flash Sale — Limited Time</p>
              <h2 style="color: white; font-size: 22px; margin-bottom: 8px;">Pro Lifetime Access — $19</h2>
              <p style="color: #e2e8f0; font-size: 14px; margin-bottom: 16px;">49 models, 10 providers. Real-time pricing. One payment, forever. <s style="color: #c4b5fd;">$49</s></p>
              <a href="https://buy.stripe.com/bJecN55OEa5g1VUbcreEo0i" style="display: inline-block; background: white; color: #7c3aed; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px;">Claim Your Deal →</a>
            </div>
            <div style="background: #1e293b; border-radius: 8px; padding: 20px; margin: 20px 0;">
              <h2 style="color: #818cf8; font-size: 18px; margin-bottom: 12px;">Your Migration Checklist</h2>
              <p style="margin-bottom: 12px;">Here's the print-ready cheat sheet you signed up for:</p>
              <p style="margin-bottom: 16px;">
                <a href="https://getapipulse.com/claude-4-migration-checklist.html" style="display: inline-block; background: #818cf8; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">📋 Open Migration Checklist →</a>
              </p>
              <p style="margin-bottom: 8px; font-size: 14px; color: #94a3b8;">Includes: model IDs, pricing comparison, copy-paste code snippets, framework fixes, and post-migration checklist.</p>
              <hr style="border: none; border-top: 1px solid #334155; margin: 16px 0;">
              <h2 style="color: #818cf8; font-size: 18px; margin-bottom: 12px;">Quick Start</h2>
              <p style="margin-bottom: 8px;">Here's what you can do right now:</p>
              <ul style="padding-left: 20px; line-height: 1.8;">
                <li><a href="https://getapipulse.com/claude-4-migration-scanner.html" style="color: #818cf8;">Scan your code for deprecated Claude 4 references</a> — free, instant, private</li>
                <li><a href="https://getapipulse.com/calculator.html" style="color: #818cf8;">Estimate your AI costs</a> — 49 models across 10 providers</li>
                <li><a href="https://getapipulse.com/compare.html" style="color: #818cf8;">Compare models side-by-side</a> — find the cheapest option</li>
                <li><a href="https://getapipulse.com/pricing-index.html" style="color: #818cf8;">Browse all pricing</a> — sortable reference table</li>
              </ul>
            </div>
            <p style="font-size: 14px; color: #94a3b8; margin-top: 24px;">
              Questions? Reply to this email or visit <a href="https://getapipulse.com/about.html" style="color: #818cf8;">our about page</a>.
            </p>
            <hr style="border: none; border-top: 1px solid #334155; margin: 24px 0;">
            <p style="font-size: 12px; color: #64748b;">
              You're receiving this because you signed up at getapipulse.com.
              <a href="${unsubscribeUrl}" style="color: #64748b;">Unsubscribe</a>
            </p>
          </div>
        `
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('[SUBSCRIBE] Resend error:', err);
    } else {
      console.log(`[SUBSCRIBE] Welcome email sent to ${email}`);
    }
  } catch (err) {
    console.error('[SUBSCRIBE] Failed to send welcome email:', err.message);
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

  // Rate limit: max 5 requests per minute per IP
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  if (isRateLimited(clientIp)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { email } = req.body || {};

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const emails = loadEmails();
  const normalizedEmail = email.toLowerCase().trim();

  if (emails.find(e => e.email === normalizedEmail)) {
    return res.status(200).json({
      message: 'Already subscribed!',
      alreadySubscribed: true
    });
  }

  emails.push({
    email: normalizedEmail,
    subscribedAt: new Date().toISOString(),
    source: req.headers.referer || 'unknown',
    drip: {} // tracks which drip emails have been sent
  });

  saveEmails(emails);

  console.log(`[SUBSCRIBE] New subscriber: ${normalizedEmail} (total: ${emails.length})`);

  // Send welcome email (non-blocking — don't fail the subscription if email fails)
  sendWelcomeEmail(normalizedEmail).catch(err => {
    console.error('[SUBSCRIBE] Welcome email error:', err.message);
  });

  return res.status(200).json({
    message: 'Successfully subscribed!',
    totalSubscribers: emails.length
  });
};
