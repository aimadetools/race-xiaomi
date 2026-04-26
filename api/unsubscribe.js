// Vercel Serverless Function: Unsubscribe API
// Removes an email from the subscriber list
// Requires token (HMAC-SHA256 of email) for verification

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

function saveEmails(emails) {
  fs.writeFileSync(EMAILS_FILE, JSON.stringify(emails, null, 2));
}

function generateUnsubscribeToken(email) {
  const secret = process.env.ADMIN_SECRET || 'apipulse-default-secret';
  return crypto.createHmac('sha256', secret).update(email).digest('hex').slice(0, 16);
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

  const { email, token } = req.body || {};

  if (!email || !token) {
    return res.status(400).json({ error: 'Email and token required' });
  }

  // Verify token
  const expectedToken = generateUnsubscribeToken(email.toLowerCase().trim());
  if (token !== expectedToken) {
    return res.status(403).json({ error: 'Invalid unsubscribe token' });
  }

  const emails = loadEmails();
  const normalizedEmail = email.toLowerCase().trim();
  const index = emails.findIndex(e => e.email === normalizedEmail);

  if (index === -1) {
    return res.status(200).json({ message: 'Email not found in subscriber list (already unsubscribed?)' });
  }

  emails.splice(index, 1);
  saveEmails(emails);

  console.log(`[UNSUBSCRIBE] Removed: ${normalizedEmail} (remaining: ${emails.length})`);

  return res.status(200).json({
    message: 'Successfully unsubscribed',
    remaining: emails.length
  });
};
