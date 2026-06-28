// Vercel Serverless Function: Stripe Webhook Handler
// Auto-delivers Pro access after successful payment
// Requires: STRIPE_WEBHOOK_SECRET env var

const crypto = require('crypto');

// Simple access code generator
function generateAccessCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'PRO-';
    for (let i = 0; i < 12; i++) {
        if (i > 0 && i % 4 === 0) code += '-';
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
}

// Hash access code for storage/comparison
function hashCode(code) {
    return crypto.createHash('sha256').update(code.toUpperCase()).digest('hex');
}

// Verify Stripe webhook signature
function verifyStripeSignature(payload, sigHeader, secret) {
    if (!secret || !sigHeader) return false;

    const elements = sigHeader.split(',');
    const signature = {};
    elements.forEach(el => {
        const [key, val] = el.split('=');
        signature[key] = val;
    });

    const timestamp = signature['t'];
    const expectedSig = signature['v1'];

    if (!timestamp || !expectedSig) return false;

    // Check timestamp (reject if older than 5 minutes)
    const now = Math.floor(Date.now() / 1000);
    if (Math.abs(now - parseInt(timestamp)) > 300) return false;

    const payloadToSign = `${timestamp}.${payload}`;
    const computedSig = crypto
        .createHmac('sha256', secret)
        .update(payloadToSign, 'utf8')
        .digest('hex');

    return computedSig === expectedSig;
}

module.exports = async function handler(req, res) {
    // Only accept POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    // Get raw body for signature verification
    const chunks = [];
    for await (const chunk of req) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    const rawBody = Buffer.concat(chunks).toString();

    // Verify signature if secret is configured
    if (webhookSecret) {
        const sigHeader = req.headers['stripe-signature'];
        if (!verifyStripeSignature(rawBody, sigHeader, webhookSecret)) {
            console.error('Stripe webhook signature verification failed');
            return res.status(400).json({ error: 'Invalid signature' });
        }
    }

    let event;
    try {
        event = JSON.parse(rawBody);
    } catch (e) {
        return res.status(400).json({ error: 'Invalid JSON' });
    }

    // Handle checkout.session.completed
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const customerEmail = session.customer_details?.email || session.customer_email;
        const amount = session.amount_total / 100;
        const sessionId = session.id;

        console.log(`Payment completed: ${customerEmail}, $${amount}, session: ${sessionId}`);

        // Generate Pro access code
        const accessCode = generateAccessCode();
        const codeHash = hashCode(accessCode);

        // Log for manual verification (in production, store in database)
        console.log(`PRO_ACCESS_CODE generated for ${customerEmail}: ${accessCode}`);
        console.log(`PRO_ACCESS_HASH: ${codeHash}`);

        // TODO: In production, store in database:
        // - customerEmail
        // - accessCode (hashed)
        // - sessionId
        // - amount
        // - timestamp
        // Then send email with access code via Resend

        // For now, the thank-you page auto-unlocks Pro via localStorage
        // This webhook just logs for manual delivery if needed
    }

    // Always return 200 to acknowledge receipt
    return res.status(200).json({ received: true });
};

// Disable body parsing (need raw body for signature verification)
module.exports.config = {
    api: {
        bodyParser: false,
    },
};
