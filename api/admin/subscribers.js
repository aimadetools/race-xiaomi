// Vercel Serverless Function: Admin - View/Export Subscribers
// Protected with ADMIN_SECRET environment variable
// GET /api/admin/subscribers → JSON list
// GET /api/admin/subscribers?format=csv → CSV download

const fs = require('fs');
const path = require('path');

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

  const emails = loadEmails();
  const format = req.query.format;

  if (format === 'csv') {
    // CSV export for importing into email marketing tools
    const csvHeader = 'email,subscribed_at,source\n';
    const csvRows = emails.map(e =>
      `"${e.email}","${e.subscribedAt}","${e.source || ''}"`
    ).join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="apipulse-subscribers.csv"');
    return res.status(200).send(csvHeader + csvRows);
  }

  return res.status(200).json({
    total: emails.length,
    subscribers: emails
  });
};
