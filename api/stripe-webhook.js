// Vercel Serverless Function: Stripe Webhook Handler
// Auto-delivers Pro access after successful payment via email
// Uses Vercel KV (Upstash Redis) when KV_REST_API_URL is set
// Falls back to /tmp file storage for local development
// Requires: STRIPE_WEBHOOK_SECRET, RESEND_API_KEY env vars

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const PURCHASES_FILE = path.join('/tmp', 'apipulse_purchases.json');
const KV_KEY = 'apipulse:purchases';

// Simple access code generator
function generateAccessCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'APIPULSE-';
    for (let i = 0; i < 8; i++) {
        if (i > 0 && i % 4 === 0) code += '-';
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
}

// Hash access code for storage/comparison
function hashCode(code) {
    return crypto.createHash('sha256').update(code.toUpperCase()).digest('hex');
}

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
    console.warn('[WEBHOOK] @vercel/kv not installed, falling back to /tmp');
    return null;
  }
}

async function loadPurchases() {
  const kv = await getKvClient();
  if (kv) {
    try {
      const data = await kv.get(KV_KEY);
      return Array.isArray(data) ? data : [];
    } catch (e) {
      console.error('[WEBHOOK] KV read error:', e.message);
      return [];
    }
  }
  // /tmp fallback
  try {
    if (fs.existsSync(PURCHASES_FILE)) {
      return JSON.parse(fs.readFileSync(PURCHASES_FILE, 'utf8'));
    }
  } catch (e) { /* start fresh */ }
  return [];
}

async function savePurchases(purchases) {
  const kv = await getKvClient();
  if (kv) {
    try {
      await kv.set(KV_KEY, JSON.parse(JSON.stringify(purchases)));
      return;
    } catch (e) {
      console.error('[WEBHOOK] KV write error:', e.message);
      // fall through to /tmp
    }
  }
  // /tmp fallback
  fs.writeFileSync(PURCHASES_FILE, JSON.stringify(purchases, null, 2));
}

// --- End storage abstraction ---

// --- Email sending via Resend ---
async function sendPurchaseEmail(email, accessCode, amount) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.log('[WEBHOOK] RESEND_API_KEY not set, skipping email');
        return;
    }

    const from = process.env.EMAIL_FROM || 'APIpulse <onboarding@resend.dev>';

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from,
                to: [email],
                subject: 'Your APIpulse Pro Access Code',
                html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#0f172a;color:#e2e8f0;">
  <h1 style="color:#818cf8;font-size:24px;margin-bottom:16px;">Welcome to APIpulse Pro! 🎉</h1>
  <p style="font-size:16px;line-height:1.6;margin-bottom:16px;">
    Thanks for your purchase of <strong>$${amount}</strong>. Your Pro access is ready.
  </p>

  <div style="background:#1e293b;border-radius:12px;padding:24px;margin:24px 0;text-align:center;">
    <div style="font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;margin-bottom:8px;">Your Access Code</div>
    <div style="font-size:28px;font-weight:800;color:#22c55e;font-family:monospace;letter-spacing:2px;padding:12px;background:rgba(34,197,94,0.1);border-radius:8px;border:2px dashed rgba(34,197,94,0.3);">
      ${accessCode}
    </div>
    <p style="font-size:13px;color:#94a3b8;margin-top:12px;">
      Save this code — you'll need it if you ever need to restore access.
    </p>
  </div>

  <div style="background:#1e293b;border-radius:8px;padding:20px;margin:20px 0;">
    <h2 style="color:#818cf8;font-size:17px;margin-bottom:12px;">How to activate Pro</h2>
    <ol style="padding-left:20px;line-height:2;">
      <li>Go to <a href="https://getapipulse.com/pro.html" style="color:#818cf8;">getapipulse.com/pro.html</a></li>
      <li>Click "Already have a code? Enter it here"</li>
      <li>Paste your access code above</li>
      <li>Pro features are now unlocked!</li>
    </ol>
    <p style="font-size:13px;color:#94a3b8;margin-top:12px;">
      Your access is also saved in this browser automatically.
      If you clear your browser data, use the code above to restore access.
    </p>
  </div>

  <div style="background:#1e293b;border-radius:8px;padding:20px;margin:20px 0;">
    <h2 style="color:#818cf8;font-size:17px;margin-bottom:12px;">What's included</h2>
    <ul style="padding-left:20px;line-height:2;">
      <li><strong style="color:#22c55e;">Saved scenarios</strong> — compare up to 10 configurations side-by-side</li>
      <li><strong style="color:#22c55e;">Export cost reports</strong> — professional reports for your team or investors</li>
      <li><strong style="color:#22c55e;">Optimization tips</strong> — personalized recommendations to save 20-40%</li>
      <li><strong style="color:#22c55e;">Cost Efficiency Score</strong> — all alternatives ranked</li>
      <li><strong style="color:#22c55e;">Priority support</strong> — email support for any questions</li>
    </ul>
  </div>

  <p style="text-align:center;margin:24px 0;">
    <a href="https://getapipulse.com/pro.html" style="background:#818cf8;color:#0f172a;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px;">Open Pro Dashboard →</a>
  </p>

  <p style="font-size:14px;color:#94a3b8;margin-top:16px;">
    Questions? Reply to this email or visit <a href="https://getapipulse.com/about.html" style="color:#818cf8;">our about page</a>.
  </p>

  <hr style="border:none;border-top:1px solid #334155;margin:24px 0;">
  <p style="font-size:12px;color:#64748b;">
    You're receiving this because you purchased APIpulse Pro at getapipulse.com.
  </p>
</div>`
            })
        });

        if (!response.ok) {
            const err = await response.text();
            console.error('[WEBHOOK] Resend error:', err);
        } else {
            console.log(`[WEBHOOK] Purchase email sent to ${email}`);
        }
    } catch (err) {
        console.error('[WEBHOOK] Failed to send purchase email:', err.message);
    }
}

// --- Stripe signature verification ---
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
            console.error('[WEBHOOK] Stripe webhook signature verification failed');
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
        const amount = (session.amount_total || 0) / 100;
        const sessionId = session.id;

        console.log(`[WEBHOOK] Payment completed: ${customerEmail}, $${amount}, session: ${sessionId}`);

        // Generate Pro access code
        const accessCode = generateAccessCode();
        const codeHash = hashCode(accessCode);

        // Store purchase record
        const purchases = await loadPurchases();
        purchases.push({
            email: customerEmail,
            accessCode,
            codeHash,
            amount,
            sessionId,
            timestamp: new Date().toISOString()
        });
        await savePurchases(purchases);

        const storageType = (await getKvClient()) ? 'vercel-kv' : '/tmp';
        console.log(`[WEBHOOK] Purchase stored. Total purchases: ${purchases.length} (storage: ${storageType})`);
        console.log(`[WEBHOOK] PRO_ACCESS_CODE for ${customerEmail}: ${accessCode}`);

        // Send purchase confirmation email (non-blocking)
        if (customerEmail) {
            sendPurchaseEmail(customerEmail, accessCode, amount).catch(err => {
                console.error('[WEBHOOK] Email send error:', err.message);
            });
        }
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
