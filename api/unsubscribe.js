// Vercel Serverless Function: Unsubscribe API
// Removes an email from the subscriber list
// Uses Vercel KV (Upstash Redis) when KV_REST_API_URL is set
// Falls back to /tmp file storage for local development
// Requires token (HMAC-SHA256 of email) for verification

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const EMAILS_FILE = path.join('/tmp', 'apipulse_emails.json');
const KV_KEY = 'apipulse:emails';

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
    console.warn('[UNSUBSCRIBE] @vercel/kv not installed, falling back to /tmp');
    return null;
  }
}

async function loadEmails() {
  const kv = await getKvClient();
  if (kv) {
    try {
      const data = await kv.get(KV_KEY);
      return Array.isArray(data) ? data : [];
    } catch (e) {
      console.error('[UNSUBSCRIBE] KV read error:', e.message);
      return [];
    }
  }
  // /tmp fallback
  try {
    if (fs.existsSync(EMAILS_FILE)) {
      return JSON.parse(fs.readFileSync(EMAILS_FILE, 'utf8'));
    }
  } catch (e) { /* start fresh */ }
  return [];
}

async function saveEmails(emails) {
  const kv = await getKvClient();
  if (kv) {
    try {
      await kv.set(KV_KEY, JSON.parse(JSON.stringify(emails)));
      return;
    } catch (e) {
      console.error('[UNSUBSCRIBE] KV write error:', e.message);
      // fall through to /tmp
    }
  }
  // /tmp fallback
  fs.writeFileSync(EMAILS_FILE, JSON.stringify(emails, null, 2));
}

// --- End storage abstraction ---

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

  const emails = await loadEmails();
  const normalizedEmail = email.toLowerCase().trim();
  const index = emails.findIndex(e => e.email === normalizedEmail);

  if (index === -1) {
    return res.status(200).json({ message: 'Email not found in subscriber list (already unsubscribed?)' });
  }

  emails.splice(index, 1);
  await saveEmails(emails);

  console.log(`[UNSUBSCRIBE] Removed: ${normalizedEmail} (remaining: ${emails.length})`);

  return res.status(200).json({
    message: 'Successfully unsubscribed',
    remaining: emails.length
  });
};
