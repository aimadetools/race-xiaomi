// APIpulse Widget Stats — Admin endpoint for viewing embed analytics
// Protected with ADMIN_SECRET — GET with Bearer token
// Returns: { domains: {...}, total: number, totalHits: number }

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://getapipulse.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Auth check
  const authHeader = req.headers.authorization || '';
  const secret = authHeader.replace('Bearer ', '');
  if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  try {
    const trackHandler = require('./widget-track.js');
    const stats = trackHandler.getEmbedStats();

    const domains = Object.entries(stats.domains)
      .map(([host, data]) => ({
        host,
        firstSeen: data.firstSeen,
        lastSeen: data.lastSeen,
        hits: data.count,
        referer: data.referer
      }))
      .sort((a, b) => b.hits - a.hits);

    const totalHits = domains.reduce((sum, d) => sum + d.hits, 0);

    return res.status(200).json({
      totalUniqueDomains: stats.total,
      totalHits,
      domains,
      queriedAt: new Date().toISOString()
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
