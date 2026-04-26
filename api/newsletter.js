// Vercel Serverless Function: Newsletter Digest Sender
// Sends a weekly pricing digest to all subscribers via Resend
// Protected with ADMIN_SECRET — POST with { subject, html } body
// Rate: Resend free tier = 100 emails/day

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const EMAILS_FILE = path.join('/tmp', 'apipulse_emails.json');

function loadEmails() {
  try {
    if (fs.existsSync(EMAILS_FILE)) {
      return JSON.parse(fs.readFileSync(EMAILS_FILE, 'utf8'));
    }
  } catch (e) {
    // File corrupted or missing
  }
  return [];
}

function generateUnsubscribeToken(email) {
  const secret = process.env.ADMIN_SECRET || 'apipulse-default-secret';
  return crypto.createHmac('sha256', secret).update(email).digest('hex').slice(0, 16);
}

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

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://getapipulse.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Auth check
  const authHeader = req.headers.authorization || '';
  const secret = authHeader.replace('Bearer ', '');
  if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'RESEND_API_KEY not configured' });
  }

  const { subject, html } = req.body || {};
  if (!subject || !html) {
    return res.status(400).json({ error: 'Subject and HTML body required' });
  }

  const emails = loadEmails();
  if (emails.length === 0) {
    return res.status(200).json({ message: 'No subscribers to send to', sent: 0 });
  }

  const from = process.env.EMAIL_FROM || 'APIpulse <onboarding@resend.dev>';
  let sent = 0;
  let failed = 0;
  const errors = [];

  // Send in batches to respect rate limits (Resend free: 100/day)
  for (const sub of emails) {
    try {
      const unsubscribeToken = generateUnsubscribeToken(sub.email);
      const unsubscribeUrl = `https://getapipulse.com/unsubscribe.html?token=${unsubscribeToken}&email=${encodeURIComponent(sub.email)}`;

      // Add unsubscribe footer to each email
      const personalizedHtml = html.replace(
        '</div>',
        `
        <hr style="border: none; border-top: 1px solid #334155; margin: 24px 0;">
        <p style="font-size: 12px; color: #64748b;">
          You're receiving this because you subscribed to APIpulse pricing updates.
          <a href="${unsubscribeUrl}" style="color: #64748b;">Unsubscribe</a>
        </p>
        </div>`
      );

      await sendEmail(apiKey, from, sub.email, subject, personalizedHtml);
      sent++;

      // Small delay between emails to avoid rate limiting
      if (sent < emails.length) {
        await new Promise(r => setTimeout(r, 100));
      }
    } catch (err) {
      failed++;
      errors.push({ email: sub.email, error: err.message });
      console.error(`[NEWSLETTER] Failed to send to ${sub.email}:`, err.message);
    }
  }

  console.log(`[NEWSLETTER] Sent ${sent}/${emails.length} emails (${failed} failed)`);

  return res.status(200).json({
    message: `Newsletter sent to ${sent} subscribers`,
    sent,
    failed,
    total: emails.length,
    errors: errors.length > 0 ? errors : undefined
  });
};
