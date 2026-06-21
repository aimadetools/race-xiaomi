// APIpulse Widget Tracking — lightweight embed analytics
// Tracks which domains embed the widget (for distribution insights)
// Returns a 1x1 transparent GIF

module.exports = function handler(req, res) {
  // Allow CORS from any origin (widget is embedded on external sites)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

  // Return 1x1 transparent GIF
  const gif = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');
  res.setHeader('Content-Type', 'image/gif');
  res.setHeader('Content-Length', gif.length);
  res.status(200).send(gif);
};
