// Vercel Serverless Function: Email Subscription API
// Stores emails in /tmp (persists within same function instance)
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
    source: req.headers.referer || 'unknown'
  });

  saveEmails(emails);

  console.log(`[SUBSCRIBE] New subscriber: ${normalizedEmail} (total: ${emails.length})`);

  return res.status(200).json({
    message: 'Successfully subscribed!',
    totalSubscribers: emails.length
  });
};
