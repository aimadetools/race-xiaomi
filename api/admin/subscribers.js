// Vercel Serverless Function: Admin - View Subscribers
// Protected with ADMIN_SECRET environment variable
// Access: /api/admin/subscribers?secret=YOUR_SECRET

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
  const { secret } = req.query || {};

  if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  const emails = loadEmails();

  return res.status(200).json({
    total: emails.length,
    subscribers: emails
  });
};
