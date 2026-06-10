// Minimal test endpoint to verify Vercel serverless functions work
module.exports = function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({
        status: 'ok',
        message: 'Vercel serverless functions are working',
        timestamp: new Date().toISOString(),
        node: process.version
    });
};
