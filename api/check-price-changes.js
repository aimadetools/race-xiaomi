// Vercel Cron: Check for AI API price changes and alert subscribers
// Runs daily at 8 AM UTC (configured in vercel.json)
// Compares current pricing against stored snapshot, emails subscribers on changes
//
// Requires: RESEND_API_KEY, EMAIL_FROM env vars

const crypto = require('crypto');

// Price snapshot — last known prices (updated manually when changes are detected)
// This is the baseline for comparison
const SNAPSHOT_URL = 'https://getapipulse.com/data/price-snapshot.json';
const PRICING_URL = 'https://getapipulse.com/pricing-data.js';

function generateUnsubscribeToken(email) {
  const secret = process.env.ADMIN_SECRET || 'apipulse-default-secret';
  return crypto.createHmac('sha256', secret).update(email).digest('hex').slice(0, 16);
}

async function fetchCurrentPricing() {
  const res = await fetch(PRICING_URL);
  if (!res.ok) throw new Error(`Failed to fetch pricing: ${res.status}`);
  const text = await res.text();

  // Extract the array from the JS file
  // The file format is: const API_MODELS = [...];
  const match = text.match(/const\s+API_MODELS\s*=\s*(\[[\s\S]*?\]);/);
  if (!match) throw new Error('Could not parse pricing data');

  // Safely evaluate the array (no eval — use Function constructor)
  const models = new Function('return ' + match[1])();
  return models;
}

async function fetchSnapshot() {
  const res = await fetch(SNAPSHOT_URL);
  if (!res.ok) throw new Error(`Failed to fetch snapshot: ${res.status}`);
  return res.json();
}

async function fetchSubscribers() {
  // Read from the emails file in /tmp (same as subscribe.js)
  const fs = require('fs');
  const path = require('path');
  const EMAILS_FILE = path.join('/tmp', 'apipulse_emails.json');

  try {
    if (fs.existsSync(EMAILS_FILE)) {
      return JSON.parse(fs.readFileSync(EMAILS_FILE, 'utf8'));
    }
  } catch (e) { /* no subscribers yet */ }
  return [];
}

function detectChanges(currentModels, snapshot) {
  const changes = [];

  for (const model of currentModels) {
    const prev = snapshot.models[model.id];
    if (!prev) {
      // New model added
      changes.push({
        id: model.id,
        name: model.name,
        provider: model.provider,
        type: 'new',
        input: model.input,
        output: model.output
      });
      continue;
    }

    if (model.input !== prev.input || model.output !== prev.output) {
      const inputChange = prev.input > 0 ? ((model.input - prev.input) / prev.input * 100).toFixed(0) : 'N/A';
      const outputChange = prev.output > 0 ? ((model.output - prev.output) / prev.output * 100).toFixed(0) : 'N/A';

      changes.push({
        id: model.id,
        name: model.name,
        provider: model.provider,
        type: 'price_change',
        oldInput: prev.input,
        newInput: model.input,
        oldOutput: prev.output,
        newOutput: model.output,
        inputChange,
        outputChange
      });
    }
  }

  // Check for removed models
  const currentIds = new Set(currentModels.map(m => m.id));
  for (const id of Object.keys(snapshot.models)) {
    if (!currentIds.has(id)) {
      changes.push({
        id,
        name: id,
        type: 'removed'
      });
    }
  }

  return changes;
}

function formatChangeEmail(changes) {
  const rows = changes.map(c => {
    if (c.type === 'new') {
      return `<tr>
        <td style="padding:8px 12px;border-bottom:1px solid #334155;"><strong>${c.name}</strong><br><span style="color:#94a3b8;font-size:12px;">${c.provider}</span></td>
        <td style="padding:8px 12px;border-bottom:1px solid #334155;"><span style="background:rgba(99,102,241,0.2);color:#818cf8;padding:2px 8px;border-radius:4px;font-size:12px;">New</span></td>
        <td style="padding:8px 12px;border-bottom:1px solid #334155;">$${c.input}/M in · $${c.output}/M out</td>
      </tr>`;
    }
    if (c.type === 'removed') {
      return `<tr>
        <td style="padding:8px 12px;border-bottom:1px solid #334155;"><strong>${c.name}</strong></td>
        <td style="padding:8px 12px;border-bottom:1px solid #334155;"><span style="background:rgba(239,68,68,0.2);color:#ef4444;padding:2px 8px;border-radius:4px;font-size:12px;">Removed</span></td>
        <td style="padding:8px 12px;border-bottom:1px solid #334155;">—</td>
      </tr>`;
    }

    const inputDir = c.newInput > c.oldInput ? '↑' : '↓';
    const outputDir = c.newOutput > c.oldOutput ? '↑' : '↓';
    const inputColor = c.newInput > c.oldInput ? '#ef4444' : '#22c55e';
    const outputColor = c.newOutput > c.oldOutput ? '#ef4444' : '#22c55e';

    return `<tr>
      <td style="padding:8px 12px;border-bottom:1px solid #334155;"><strong>${c.name}</strong><br><span style="color:#94a3b8;font-size:12px;">${c.provider}</span></td>
      <td style="padding:8px 12px;border-bottom:1px solid #334155;">
        <span style="color:${inputColor};font-weight:700;">${inputDir} ${c.inputChange}%</span> input<br>
        <span style="color:${outputColor};font-weight:700;">${outputDir} ${c.outputChange}%</span> output
      </td>
      <td style="padding:8px 12px;border-bottom:1px solid #334155;">
        $${c.oldInput} → <strong>$${c.newInput}</strong>/M in<br>
        $${c.oldOutput} → <strong>$${c.newOutput}</strong>/M out
      </td>
    </tr>`;
  }).join('');

  return `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#0f172a;color:#e2e8f0;">
  <h1 style="color:#818cf8;font-size:22px;margin-bottom:16px;">🔔 AI API Price Changes Detected</h1>
  <p style="font-size:16px;line-height:1.6;margin-bottom:16px;">
    We detected <strong>${changes.length} price change${changes.length > 1 ? 's' : ''}</strong> in today's verification. Here's the breakdown:
  </p>

  <table style="width:100%;border-collapse:collapse;background:#1e293b;border-radius:8px;overflow:hidden;margin:20px 0;">
    <thead>
      <tr style="background:#334155;">
        <th style="padding:10px 12px;text-align:left;font-size:12px;text-transform:uppercase;color:#94a3b8;">Model</th>
        <th style="padding:10px 12px;text-align:left;font-size:12px;text-transform:uppercase;color:#94a3b8;">Change</th>
        <th style="padding:10px 12px;text-align:left;font-size:12px;text-transform:uppercase;color:#94a3b8;">New Price</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>

  <div style="background:#1e293b;border-radius:8px;padding:16px;margin:20px 0;">
    <p style="margin:0;font-size:14px;color:#94a3b8;">
      💡 <strong style="color:#e2e8f0;">Tip:</strong> Use the
      <a href="https://getapipulse.com/calculator.html" style="color:#818cf8;">APIpulse Calculator</a>
      to see how these changes affect your monthly costs.
    </p>
  </div>

  <p style="font-size:14px;color:#94a3b8;margin-top:24px;">
    View full pricing: <a href="https://getapipulse.com/pricing-index.html" style="color:#818cf8;">Pricing Index</a>
    · <a href="https://getapipulse.com/pricing-changelog.html" style="color:#818cf8;">Changelog</a>
  </p>

  <hr style="border:none;border-top:1px solid #334155;margin:24px 0;">
  <p style="font-size:12px;color:#64748b;">
    You're receiving this because you subscribed to APIpulse price alerts.
    <a href="https://getapipulse.com/unsubscribe.html" style="color:#64748b;">Unsubscribe</a>
  </p>
</div>`;
}

async function sendAlertEmail(email, changes) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log('[PRICE-ALERT] RESEND_API_KEY not set, skipping email');
    return false;
  }

  const from = process.env.EMAIL_FROM || 'APIpulse <onboarding@resend.dev>';
  const unsubscribeToken = generateUnsubscribeToken(email);
  const unsubscribeUrl = `https://getapipulse.com/unsubscribe.html?token=${unsubscribeToken}&email=${encodeURIComponent(email)}`;

  const subject = `🔔 ${changes.length} AI API Price Change${changes.length > 1 ? 's' : ''} Detected`;

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
        subject,
        html: formatChangeEmail(changes).replace(
          'https://getapipulse.com/unsubscribe.html',
          unsubscribeUrl
        )
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error(`[PRICE-ALERT] Resend error for ${email}:`, err);
      return false;
    }

    console.log(`[PRICE-ALERT] Alert sent to ${email}`);
    return true;
  } catch (err) {
    console.error(`[PRICE-ALERT] Failed to send to ${email}:`, err.message);
    return false;
  }
}

module.exports = async (req, res) => {
  // Only allow POST (from Vercel cron) or GET (manual trigger)
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('[PRICE-ALERT] Starting price change check...');

  try {
    // Fetch current pricing and snapshot in parallel
    const [currentModels, snapshot] = await Promise.all([
      fetchCurrentPricing(),
      fetchSnapshot()
    ]);

    console.log(`[PRICE-ALERT] Fetched ${currentModels.length} models, snapshot from ${snapshot.snapshotDate}`);

    // Detect changes
    const changes = detectChanges(currentModels, snapshot);

    if (changes.length === 0) {
      console.log('[PRICE-ALERT] No price changes detected');
      return res.status(200).json({
        status: 'no_changes',
        modelsChecked: currentModels.length,
        snapshotDate: snapshot.snapshotDate
      });
    }

    console.log(`[PRICE-ALERT] ${changes.length} changes detected:`, changes.map(c => c.name));

    // Get subscribers (from /tmp — same storage as subscribe.js)
    const subscribers = await fetchSubscribers();

    if (subscribers.length === 0) {
      console.log('[PRICE-ALERT] No subscribers to notify');
      return res.status(200).json({
        status: 'changes_detected_no_subscribers',
        changes: changes.length,
        models: changes.map(c => c.name)
      });
    }

    // Send alerts to all subscribers
    let sent = 0;
    let failed = 0;

    for (const sub of subscribers) {
      const success = await sendAlertEmail(sub.email, changes);
      if (success) sent++;
      else failed++;

      // Rate limit: small delay between emails
      await new Promise(r => setTimeout(r, 100));
    }

    console.log(`[PRICE-ALERT] Done. Sent: ${sent}, Failed: ${failed}`);

    return res.status(200).json({
      status: 'alerts_sent',
      changes: changes.length,
      subscribers: subscribers.length,
      sent,
      failed,
      models: changes.map(c => ({
        name: c.name,
        type: c.type,
        ...(c.type === 'price_change' ? {
          inputChange: c.inputChange + '%',
          outputChange: c.outputChange + '%'
        } : {})
      }))
    });

  } catch (err) {
    console.error('[PRICE-ALERT] Error:', err.message);
    return res.status(500).json({ error: 'Internal error', details: err.message });
  }
};
