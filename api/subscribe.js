// Vercel Serverless Function: Email Subscription API
// Stores emails in /tmp (persists within same function instance)
// For production, upgrade to Upstash Redis or a database

const fs = require('fs');
const path = require('path');

const EMAILS_FILE = path.join('/tmp', 'apipulse_emails.json');

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

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
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
    source: req.headers.referer || 'unknown'
  });

  saveEmails(emails);

  console.log(`[SUBSCRIBE] New subscriber: ${normalizedEmail} (total: ${emails.length})`);

  return res.status(200).json({
    message: 'Successfully subscribed!',
    totalSubscribers: emails.length
  });
};
