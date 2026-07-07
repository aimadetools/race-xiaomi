// Vercel Serverless Function: Admin - View/Export Subscribers
// Protected with ADMIN_SECRET environment variable
// GET /api/admin/subscribers → JSON list
// GET /api/admin/subscribers?format=csv → CSV download
//
// Uses Vercel KV (Upstash Redis) when KV_REST_API_URL is set
// Falls back to /tmp file storage for local development

const fs = require('fs');
const path = require('path');

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
    console.warn('[ADMIN] @vercel/kv not installed, falling back to /tmp');
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
      console.error('[ADMIN] KV read error:', e.message);
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

// --- End storage abstraction ---

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://getapipulse.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const authHeader = req.headers.authorization || '';
  const secret = authHeader.replace('Bearer ', '');

  if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  const emails = await loadEmails();
  const format = req.query.format;

  if (format === 'csv') {
    // CSV export for importing into email marketing tools
    const csvHeader = 'email,subscribed_at,source,drip_day2,drip_day7,drip_day14\n';
    const csvRows = emails.map(e => {
      const d = e.drip || {};
      return `"${e.email}","${e.subscribedAt}","${e.source || ''}","${d.day2 || ''}","${d.day7 || ''}","${d.day14 || ''}"`;
    }).join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="apipulse-subscribers.csv"');
    return res.status(200).send(csvHeader + csvRows);
  }

  return res.status(200).json({
    total: emails.length,
    subscribers: emails
  });
};
