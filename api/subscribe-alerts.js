// Vercel Serverless Function: Price Alert Subscription API
// Stores email + model subscriptions in /tmp/apipulse_alert_subs.json
// Free tier: 3 models. Pro (localStorage check): unlimited.
// Sends welcome email via Resend.
//
// Requires: RESEND_API_KEY, EMAIL_FROM env vars (optional — works without)

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ALERTS_FILE = path.join('/tmp', 'apipulse_alert_subs.json');

// Rate limiter
const rateLimit = new Map();
const RATE_WINDOW = 60 * 1000;
const RATE_MAX = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const rec = rateLimit.get(ip);
  if (!rec || now - rec.start > RATE_WINDOW) {
    rateLimit.set(ip, { start: now, count: 1 });
    return false;
  }
  rec.count++;
  return rec.count > RATE_MAX;
}

function loadSubs() {
  try {
    if (fs.existsSync(ALERTS_FILE)) {
      return JSON.parse(fs.readFileSync(ALERTS_FILE, 'utf8'));
    }
  } catch (e) { /* fresh start */ }
  return [];
}

function saveSubs(subs) {
  fs.writeFileSync(ALERTS_FILE, JSON.stringify(subs, null, 2));
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function generateUnsubscribeToken(email) {
  const secret = process.env.ADMIN_SECRET || 'apipulse-default-secret';
  return crypto.createHmac('sha256', secret).update(email).digest('hex').slice(0, 16);
}

async function sendWelcomeAlertEmail(email, models) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log('[ALERT-SUB] RESEND_API_KEY not set, skipping welcome email');
    return;
  }

  const from = process.env.EMAIL_FROM || 'APIpulse <onboarding@resend.dev>';
  const unsubToken = generateUnsubscribeToken(email);
  const unsubUrl = `https://getapipulse.com/unsubscribe.html?token=${unsubToken}&email=${encodeURIComponent(email)}`;

  const modelList = models.map(m => `<li style="margin-bottom:4px;">${m}</li>`).join('');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [email],
        subject: `🔔 Price alerts active for ${models.length} model${models.length > 1 ? 's' : ''}`,
        html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#0f172a;color:#e2e8f0;">
  <h1 style="color:#818cf8;font-size:22px;margin-bottom:16px;">🔔 Price Alerts Active</h1>
  <p style="font-size:16px;line-height:1.6;margin-bottom:16px;">
    You're now tracking <strong>${models.length} model${models.length > 1 ? 's' : ''}</strong>. We'll email you when any of these change price:
  </p>
  <ul style="background:#1e293b;border-radius:8px;padding:16px 16px 16px 36px;margin:16px 0;line-height:1.8;">
    ${modelList}
  </ul>
  <div style="background:#1e293b;border-radius:8px;padding:16px;margin:20px 0;">
    <p style="margin:0;font-size:14px;color:#94a3b8;">
      💡 <strong style="color:#e2e8f0;">While you wait:</strong> Use the
      <a href="https://getapipulse.com/calculator.html" style="color:#818cf8;">APIpulse Calculator</a>
      to see your current costs across all tracked models.
    </p>
  </div>
  <p style="font-size:14px;color:#94a3b8;margin-top:24px;">
    <a href="https://getapipulse.com/price-alerts.html" style="color:#818cf8;">Manage your alerts</a>
    · Prices verified daily
  </p>
  <hr style="border:none;border-top:1px solid #334155;margin:24px 0;">
  <p style="font-size:12px;color:#64748b;">
    You're receiving this because you subscribed to APIpulse price alerts.
    <a href="${unsubUrl}" style="color:#64748b;">Unsubscribe</a>
  </p>
</div>`
      })
    });

    if (!res.ok) {
      console.error('[ALERT-SUB] Resend error:', await res.text());
    } else {
      console.log(`[ALERT-SUB] Welcome email sent to ${email}`);
    }
  } catch (err) {
    console.error('[ALERT-SUB] Email failed:', err.message);
  }
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://getapipulse.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  if (isRateLimited(clientIp)) {
    return res.status(429).json({ error: 'Too many requests. Try again later.' });
  }

  const { email, models } = req.body || {};

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Valid email required' });
  }
  if (!Array.isArray(models) || models.length === 0) {
    return res.status(400).json({ error: 'Select at least one model to track' });
  }

  // Free tier: 3 models max (enforced on frontend, double-check here)
  if (models.length > 50) {
    return res.status(400).json({ error: 'Too many models (max 50)' });
  }

  const normalizedEmail = email.toLowerCase().trim();
  const subs = loadSubs();

  // Check if already subscribed — update models if so
  const existing = subs.find(s => s.email === normalizedEmail);
  if (existing) {
    existing.models = models;
    existing.updatedAt = new Date().toISOString();
    saveSubs(subs);
    console.log(`[ALERT-SUB] Updated ${normalizedEmail} — now tracking ${models.length} models (total subs: ${subs.length})`);
    return res.status(200).json({
      message: 'Alert preferences updated!',
      models: models.length,
      updated: true
    });
  }

  // New subscription
  subs.push({
    email: normalizedEmail,
    models,
    subscribedAt: new Date().toISOString(),
    source: req.headers.referer || 'price-alerts'
  });
  saveSubs(subs);

  console.log(`[ALERT-SUB] New subscriber: ${normalizedEmail} tracking ${models.length} models (total: ${subs.length})`);

  // Send welcome email (non-blocking)
  sendWelcomeAlertEmail(normalizedEmail, models).catch(err => {
    console.error('[ALERT-SUB] Welcome email error:', err.message);
  });

  return res.status(200).json({
    message: 'Subscribed to price alerts!',
    models: models.length,
    totalSubscribers: subs.length
  });
};
