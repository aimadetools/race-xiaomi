// Vercel Serverless Function: Validate Pro Access Code
// Checks code against stored purchases OR hardcoded hashes
// This fixes the critical bug where webhook-generated codes couldn't be validated

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const PURCHASES_FILE = path.join('/tmp', 'apipulse_purchases.json');

// Hardcoded hashes (backward compat with manually distributed codes)
const LEGACY_CODE_HASHES = [
    '4e0301baa2eba1a883e35b2d3a8490aef3c652626e990ea1fbbbd18479298db3',
    'c45a2fb70483597ad0f3fac7159735696b382ae54cdedb4b112845174b2604be',
    '1bcd5c403e30b3dfff63be89a7a27b243dad9eace8931595e6c718471cc97030',
    '8061651ccdeedf412b0f2a4604da52ca46ae822ef824096e50ccdb05cae4d3fb',
    '159b2b12f05d0c2ac21c84b9b2d80d31de2510d2e252e1c4f77c8291e883d714',
];

function loadPurchases() {
    try {
        if (fs.existsSync(PURCHASES_FILE)) {
            return JSON.parse(fs.readFileSync(PURCHASES_FILE, 'utf8'));
        }
    } catch (e) { /* start fresh */ }
    return [];
}

function hashCode(code) {
    return crypto.createHash('sha256').update(code.toUpperCase()).digest('hex');
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

    const { code } = req.body || {};
    if (!code || typeof code !== 'string') {
        return res.status(400).json({ error: 'Code required' });
    }

    const normalized = code.trim().toUpperCase();
    const hash = hashCode(normalized);

    // 1. Check legacy hardcoded hashes
    if (LEGACY_CODE_HASHES.includes(hash)) {
        return res.status(200).json({ valid: true, source: 'legacy' });
    }

    // 2. Check stored purchases
    const purchases = loadPurchases();
    const match = purchases.find(p => p.codeHash === hash);
    if (match) {
        return res.status(200).json({
            valid: true,
            source: 'purchase',
            email: match.email
        });
    }

    return res.status(200).json({ valid: false });
};
