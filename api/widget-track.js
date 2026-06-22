// APIpulse Widget Tracking — lightweight embed analytics
// Tracks which domains embed the widget (for distribution insights)
// Returns a 1x1 transparent GIF

const fs = require('fs');
const path = require('path');

const TRACKING_FILE = path.join('/tmp', 'widget_embeds.json');

// In-memory cache for fast lookups (resets on cold start)
let embedCache = null;

function loadEmbeds() {
  if (embedCache) return embedCache;
  try {
    if (fs.existsSync(TRACKING_FILE)) {
      embedCache = JSON.parse(fs.readFileSync(TRACKING_FILE, 'utf8'));
      return embedCache;
    }
  } catch (e) {
    // File corrupted, start fresh
  }
  embedCache = { domains: {}, total: 0 };
  return embedCache;
}

function saveEmbeds(data) {
  embedCache = data;
  try {
    fs.writeFileSync(TRACKING_FILE, JSON.stringify(data, null, 2));
  } catch (e) {
    console.error('[WIDGET-TRACK] Failed to save:', e.message);
  }
}

module.exports = function handler(req, res) {
  // Allow CORS from any origin (widget is embedded on external sites)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

  // Track the embed
  const host = req.query.host || 'unknown';
  const timestamp = new Date().toISOString();
  const referer = req.headers.referer || 'direct';

  try {
    const data = loadEmbeds();

    if (!data.domains[host]) {
      data.domains[host] = {
        firstSeen: timestamp,
        lastSeen: timestamp,
        count: 1,
        referer: referer
      };
    } else {
      data.domains[host].lastSeen = timestamp;
      data.domains[host].count++;
    }

    data.total = Object.keys(data.domains).length;
    saveEmbeds(data);

    console.log(`[WIDGET-TRACK] Embed from: ${host} (total unique domains: ${data.total}, total hits: ${Object.values(data.domains).reduce((sum, d) => sum + d.count, 0)})`);
  } catch (e) {
    console.error('[WIDGET-TRACK] Tracking error:', e.message);
  }

  // Return 1x1 transparent GIF
  const gif = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');
  res.setHeader('Content-Type', 'image/gif');
  res.setHeader('Content-Length', gif.length);
  res.status(200).send(gif);
};

// Export for admin queries
module.exports.getEmbedStats = function() {
  return loadEmbeds();
};
