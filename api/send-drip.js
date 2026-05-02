// Vercel Serverless Function: Email Drip Sequence
// Sends automated follow-up emails based on subscription age
// Triggered by Vercel cron (daily) or manual POST
//
// Drip sequence:
//   Day 0: Welcome email (sent by subscribe.js)
//   Day 2: "5 Tips to Cut Your AI API Bill" — value-add
//   Day 7: "Unlock Pro Features" — conversion
//   Day 14: "What's New at APIpulse" — re-engagement
//
// Requires: RESEND_API_KEY, EMAIL_FROM env vars

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const EMAILS_FILE = path.join('/tmp', 'apipulse_emails.json');

function loadEmails() {
  try {
    if (fs.existsSync(EMAILS_FILE)) {
      return JSON.parse(fs.readFileSync(EMAILS_FILE, 'utf8'));
    }
  } catch (e) { /* start fresh */ }
  return [];
}

function saveEmails(emails) {
  fs.writeFileSync(EMAILS_FILE, JSON.stringify(emails, null, 2));
}

function generateUnsubscribeToken(email) {
  const secret = process.env.ADMIN_SECRET || 'apipulse-default-secret';
  return crypto.createHmac('sha256', secret).update(email).digest('hex').slice(0, 16);
}

function daysSince(isoDate) {
  const diff = Date.now() - new Date(isoDate).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// ── Drip Email Templates ──────────────────────────────────────────

const DRIP_TEMPLATES = {
  day2: {
    subject: '5 tips to cut your AI API bill (from someone who tracked every dollar)',
    html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#0f172a;color:#e2e8f0;">
  <h1 style="color:#818cf8;font-size:22px;margin-bottom:16px;">5 tips to cut your AI API bill</h1>
  <p style="font-size:16px;line-height:1.6;margin-bottom:16px;">
    Hey! You signed up for APIpulse a couple days ago. Here are 5 real strategies
    that developers use to slash their AI API costs — no gimmicks, just math.
  </p>

  <div style="background:#1e293b;border-radius:8px;padding:20px;margin:20px 0;">
    <h2 style="color:#818cf8;font-size:17px;margin-bottom:12px;">The strategies</h2>

    <p style="margin-bottom:12px;"><strong style="color:#22c55e;">1. Route by complexity.</strong>
    Simple tasks (classification, extraction) don't need GPT-5. Use GPT-4o mini at $0.15/1M tokens
    instead of $15 — that's a 100x savings on easy calls.</p>

    <p style="margin-bottom:12px;"><strong style="color:#22c55e;">2. Batch your requests.</strong>
    Most providers offer batch APIs at 50% off. If you can collect requests for 5 minutes
    and send them together, you halve your bill.</p>

    <p style="margin-bottom:12px;"><strong style="color:#22c55e;">3. Cache aggressively.</strong>
    If you're asking the same question twice, you're paying twice. A simple Redis cache
    with a 1-hour TTL can cut repeat costs to zero.</p>

    <p style="margin-bottom:12px;"><strong style="color:#22c55e;">4. Set token limits.</strong>
    Don't let models ramble. Set max_tokens to what you actually need. A 500-token response
    costs 5x less than a 2,500-token response.</p>

    <p style="margin-bottom:0;"><strong style="color:#22c55e;">5. Compare before you commit.</strong>
    Use <a href="https://getapipulse.com/calculator.html" style="color:#818cf8;">APIpulse calculator</a>
    to model your exact workload. Most devs find 20-40% savings just by switching
    models for the right tasks.</p>
  </div>

  <p style="font-size:16px;line-height:1.6;margin-bottom:16px;">
    Want to see these in action? Try the calculator with your real numbers:
  </p>
  <p style="text-align:center;margin:24px 0;">
    <a href="https://getapipulse.com/calculator.html" style="background:#818cf8;color:#0f172a;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:15px;">Open Calculator</a>
  </p>

  <hr style="border:none;border-top:1px solid #334155;margin:24px 0;">
  <p style="font-size:12px;color:#64748b;">
    You're receiving this because you subscribed to APIpulse.
    <a href="${'{{unsubscribeUrl}}'}" style="color:#64748b;">Unsubscribe</a>
  </p>
</div>`
  },

  day7: {
    subject: 'Your APIpulse Pro preview (before everyone else)',
    html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#0f172a;color:#e2e8f0;">
  <h1 style="color:#818cf8;font-size:22px;margin-bottom:16px;">Your APIpulse Pro preview</h1>
  <p style="font-size:16px;line-height:1.6;margin-bottom:16px;">
    You've been using APIpulse for a week now. Here's what Pro unlocks
    if you're doing regular cost planning:
  </p>

  <div style="background:#1e293b;border-radius:8px;padding:20px;margin:20px 0;">
    <h2 style="color:#818cf8;font-size:17px;margin-bottom:12px;">What you get for $29 (one-time)</h2>
    <ul style="padding-left:20px;line-height:2;">
      <li><strong style="color:#22c55e;">Saved scenarios</strong> — compare up to 10 configurations side-by-side</li>
      <li><strong style="color:#22c55e;">Export cost reports</strong> — PDF-ready reports for your team or budget meetings</li>
      <li><strong style="color:#22c55e;">Optimization recommendations</strong> — personalized tips based on your usage patterns</li>
      <li><strong style="color:#22c55e;">Priority email support</strong> — get answers within 24 hours</li>
    </ul>
    <p style="font-size:13px;color:#94a3b8;margin-top:12px;">
      No subscription. No recurring fees. Pay once, use forever.
    </p>
  </div>

  <p style="font-size:16px;line-height:1.6;margin-bottom:16px;">
    Quick math: if Pro helps you save just 10% on a $500/month API bill,
    it pays for itself in the first week.
  </p>

  <p style="text-align:center;margin:24px 0;">
    <a href="https://getapipulse.com/pricing.html" style="background:#818cf8;color:#0f172a;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:15px;">See Pro Features</a>
  </p>

  <p style="font-size:14px;color:#94a3b8;text-align:center;margin-top:8px;">
    Not ready yet? No worries. The free calculator keeps working forever.
  </p>

  <hr style="border:none;border-top:1px solid #334155;margin:24px 0;">
  <p style="font-size:12px;color:#64748b;">
    You're receiving this because you subscribed to APIpulse.
    <a href="${'{{unsubscribeUrl}}'}" style="color:#64748b;">Unsubscribe</a>
  </p>
</div>`
  },

  day14: {
    subject: 'What happened in AI pricing this week (quick update)',
    html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#0f172a;color:#e2e8f0;">
  <h1 style="color:#818cf8;font-size:22px;margin-bottom:16px;">What's new at APIpulse</h1>
  <p style="font-size:16px;line-height:1.6;margin-bottom:16px;">
    It's been two weeks since you joined. Here's what's happened:
  </p>

  <div style="background:#1e293b;border-radius:8px;padding:20px;margin:20px 0;">
    <h2 style="color:#818cf8;font-size:17px;margin-bottom:12px;">Recent updates</h2>
    <ul style="padding-left:20px;line-height:2;">
      <li>71 blog posts comparing specific model pairs (GPT-5 vs Claude 4, Gemini vs GPT-4o, etc.)</li>
      <li>32 models across 10 providers — all pricing verified monthly</li>
      <li>New tools: cost scenarios, model matrix, price alerts</li>
      <li>Chrome extension for quick price checks (coming soon)</li>
    </ul>
  </div>

  <p style="font-size:16px;line-height:1.6;margin-bottom:16px;">
    We're also working on a pricing changes tracker — you'll get an email
    whenever a provider changes their prices.
  </p>

  <p style="text-align:center;margin:24px 0;">
    <a href="https://getapipulse.com/blog.html" style="background:#818cf8;color:#0f172a;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:15px;">Read the Blog</a>
  </p>

  <p style="font-size:14px;color:#94a3b8;text-align:center;">
    Questions? Just reply to this email.
  </p>

  <hr style="border:none;border-top:1px solid #334155;margin:24px 0;">
  <p style="font-size:12px;color:#64748b;">
    You're receiving this because you subscribed to APIpulse.
    <a href="${'{{unsubscribeUrl}}'}" style="color:#64748b;">Unsubscribe</a>
  </p>
</div>`
  }
};

// ── Send Logic ──────────────────────────────────────────────────

async function sendEmail(apiKey, from, to, subject, html) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ from, to: [to], subject, html })
  });
  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Resend error ${response.status}: ${err}`);
  }
  return response.json();
}

function getDripEmails(sub) {
  if (!sub.drip) sub.drip = {};
  const days = daysSince(sub.subscribedAt);
  const due = [];

  if (days >= 2 && !sub.drip.day2) due.push('day2');
  if (days >= 7 && !sub.drip.day7) due.push('day7');
  if (days >= 14 && !sub.drip.day14) due.push('day14');

  return due;
}

// ── Handler ─────────────────────────────────────────────────────

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://getapipulse.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();

  // Allow GET for cron triggers, POST for manual
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Auth: cron secret or admin secret
  const authHeader = req.headers.authorization || '';
  const secret = authHeader.replace('Bearer ', '');
  const cronSecret = req.headers['x-vercel-cron'] || req.query.cron_secret;
  const isCron = !!cronSecret;
  const isAdmin = process.env.ADMIN_SECRET && secret === process.env.ADMIN_SECRET;

  if (!isCron && !isAdmin) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'RESEND_API_KEY not configured' });
  }

  const from = process.env.EMAIL_FROM || 'APIpulse <onboarding@resend.dev>';
  const emails = loadEmails();

  if (emails.length === 0) {
    return res.status(200).json({ message: 'No subscribers', sent: 0 });
  }

  let sent = 0;
  let skipped = 0;
  let failed = 0;
  const details = [];

  for (const sub of emails) {
    const dueEmails = getDripEmails(sub);
    if (dueEmails.length === 0) {
      skipped++;
      continue;
    }

    for (const dripKey of dueEmails) {
      const template = DRIP_TEMPLATES[dripKey];
      if (!template) continue;

      const unsubscribeToken = generateUnsubscribeToken(sub.email);
      const unsubscribeUrl = `https://getapipulse.com/unsubscribe.html?token=${unsubscribeToken}&email=${encodeURIComponent(sub.email)}`;
      const html = template.html.replace(/\{\{unsubscribeUrl\}\}/g, unsubscribeUrl);

      try {
        await sendEmail(apiKey, from, sub.email, template.subject, html);
        // Mark as sent
        if (!sub.drip) sub.drip = {};
        sub.drip[dripKey] = new Date().toISOString();
        sent++;
        details.push({ email: sub.email, drip: dripKey, status: 'sent' });

        // Rate limit: 100ms between sends
        await new Promise(r => setTimeout(r, 100));
      } catch (err) {
        failed++;
        details.push({ email: sub.email, drip: dripKey, status: 'failed', error: err.message });
        console.error(`[DRIP] Failed ${dripKey} to ${sub.email}:`, err.message);
      }
    }
  }

  // Save updated drip state
  saveEmails(emails);

  console.log(`[DRIP] Sent ${sent}, skipped ${skipped}, failed ${failed} (of ${emails.length} subscribers)`);

  return res.status(200).json({
    message: `Drip emails processed: ${sent} sent, ${skipped} skipped, ${failed} failed`,
    sent,
    skipped,
    failed,
    total: emails.length,
    details: details.length > 0 ? details : undefined
  });
};
