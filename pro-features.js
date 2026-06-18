// APIpulse Pro — Access code validation and premium features
// Access codes are distributed manually by the APIpulse team after purchase.
// Codes are stored as SHA-256 hashes to prevent casual extraction from source.

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

async function hashString(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

const VALID_CODE_HASHES = [
    '4e0301baa2eba1a883e35b2d3a8490aef3c652626e990ea1fbbbd18479298db3',
    'c45a2fb70483597ad0f3fac7159735696b382ae54cdedb4b112845174b2604be',
    '1bcd5c403e30b3dfff63be89a7a27b243dad9eace8931595e6c718471cc97030',
    '8061651ccdeedf412b0f2a4604da52ca46ae822ef824096e50ccdb05cae4d3fb',
    '159b2b12f05d0c2ac21c84b9b2d80d31de2510d2e252e1c4f77c8291e883d714',
];

async function validateCode(code) {
    const normalized = code.trim().toUpperCase();
    const hash = await hashString(normalized);
    if (VALID_CODE_HASHES.includes(hash)) {
        localStorage.setItem('apipulse_pro', 'true');
        localStorage.setItem('apipulse_pro_code', normalized);
        return true;
    }
    return false;
}

function isProUser() {
    if (localStorage.getItem('apipulse_pro') === 'true') {
        // Check if trial has expired
        const trialExpiry = localStorage.getItem('apipulse_pro_trial_expiry');
        if (trialExpiry) {
            const expiry = new Date(trialExpiry);
            if (new Date() > expiry) {
                // Trial expired — lock and clear
                localStorage.removeItem('apipulse_pro');
                localStorage.removeItem('apipulse_pro_trial_expiry');
                localStorage.removeItem('apipulse_pro_trial');
                return false;
            }
        }
        return true;
    }
    return false;
}

function isTrialUser() {
    return localStorage.getItem('apipulse_pro_trial') === 'true';
}

function getTrialTimeRemaining() {
    const expiry = localStorage.getItem('apipulse_pro_trial_expiry');
    if (!expiry) return null;
    const remaining = new Date(expiry) - new Date();
    if (remaining <= 0) return null;
    const hours = Math.floor(remaining / 3600000);
    const mins = Math.floor((remaining % 3600000) / 60000);
    return { hours, mins, ms: remaining };
}

function startTrial() {
    const expiry = new Date(Date.now() + 24 * 60 * 60 * 1000);
    localStorage.setItem('apipulse_pro', 'true');
    localStorage.setItem('apipulse_pro_trial', 'true');
    localStorage.setItem('apipulse_pro_trial_expiry', expiry.toISOString());
    localStorage.setItem('apipulse_pro_date', new Date().toISOString());
    try { unlockProFeatures(); } catch(e) {}
    if (typeof calculate === 'function') calculate();
    if (window.trackEvent) window.trackEvent('pro_trial_started');
    // Show trial activated message
    showTrialMessage();
}

function showTrialMessage() {
    if (document.getElementById('trial-activated-msg')) return;
    var msg = document.createElement('div');
    msg.id = 'trial-activated-msg';
    msg.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#22c55e,#16a34a);color:white;padding:16px 28px;border-radius:12px;font-size:15px;font-weight:700;z-index:10000;box-shadow:0 8px 30px rgba(34,197,94,0.4);animation:fadeIn 0.3s ease;max-width:90vw;text-align:center;';
    msg.innerHTML = '✅ Free trial activated! Pro features unlocked for 24 hours. <a href="pricing.html" style="color:white;text-decoration:underline;">Get lifetime access →</a>';
    document.body.appendChild(msg);
    setTimeout(function() { msg.style.opacity = '0'; msg.style.transition = 'opacity 0.5s'; setTimeout(function() { msg.remove(); }, 500); }, 5000);
}

function unlockProFeatures() {
    var gate = document.getElementById('pro-gate');
    var content = document.getElementById('pro-content');
    if (gate) gate.style.display = 'none';
    if (content) content.style.display = 'block';
}

function lockProFeatures() {
    document.getElementById('pro-gate').style.display = 'block';
    document.getElementById('pro-content').style.display = 'none';
}

// --- Saved Scenarios ---
function getScenarios() {
    return JSON.parse(localStorage.getItem('apipulse_scenarios') || '[]');
}

function saveScenario(name) {
    const scenarios = getScenarios();
    if (scenarios.length >= 10) {
        alert('You can save up to 10 scenarios. Delete some first.');
        return false;
    }
    const scenario = {
        id: Date.now(),
        name: name,
        provider: document.getElementById('provider').value,
        inputTokens: document.getElementById('input-tokens').value,
        outputTokens: document.getElementById('output-tokens').value,
        requests: document.getElementById('requests').value,
        days: document.getElementById('days').value,
        savedAt: new Date().toISOString()
    };
    scenarios.push(scenario);
    localStorage.setItem('apipulse_scenarios', JSON.stringify(scenarios));
    renderScenarios();
    if (window.trackEvent) window.trackEvent('scenario_saved', { name });
    return true;
}

function deleteScenario(id) {
    const scenarios = getScenarios().filter(s => s.id !== id);
    localStorage.setItem('apipulse_scenarios', JSON.stringify(scenarios));
    renderScenarios();
}

function loadScenario(id) {
    const scenario = getScenarios().find(s => s.id === id);
    if (!scenario) return;
    document.getElementById('provider').value = scenario.provider;
    document.getElementById('input-tokens').value = scenario.inputTokens;
    document.getElementById('output-tokens').value = scenario.outputTokens;
    document.getElementById('requests').value = scenario.requests;
    document.getElementById('days').value = scenario.days;
    if (typeof calculate === 'function') calculate();
    if (window.trackEvent) window.trackEvent('scenario_loaded', { name: scenario.name });
}

function renderScenarios() {
    const container = document.getElementById('scenarios-list');
    if (!container) return;
    const scenarios = getScenarios();
    if (scenarios.length === 0) {
        container.innerHTML = '<p style="color:var(--text-muted);font-size:14px;">No saved scenarios yet. Use the calculator above and click "Save Scenario" to start.</p>';
        return;
    }
    container.innerHTML = scenarios.map(s => `
        <div class="scenario-card">
            <div class="scenario-info">
                <strong>${escapeHtml(s.name)}</strong>
                <span style="color:var(--text-muted);font-size:12px;">${escapeHtml(s.provider)} · ${escapeHtml(String(s.requests))} req/day · Saved ${new Date(s.savedAt).toLocaleDateString()}</span>
            </div>
            <div class="scenario-actions">
                <button class="btn-small" onclick="loadScenario(${s.id})">Load</button>
                <button class="btn-small btn-danger" onclick="deleteScenario(${s.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

// --- Report Export ---
function exportReport() {
    const provider = document.getElementById('provider');
    const providerName = provider.options[provider.selectedIndex].text;
    const inputTokens = parseInt(document.getElementById('input-tokens').value) || 0;
    const outputTokens = parseInt(document.getElementById('output-tokens').value) || 0;
    const requests = parseInt(document.getElementById('requests').value) || 0;
    const days = parseInt(document.getElementById('days').value) || 30;
    const total = document.getElementById('monthly-total').textContent;

    const key = provider.value;
    const p = providers[key];
    const inputCost = (inputTokens * requests * days / 1000000) * p.input;
    const outputCost = (outputTokens * requests * days / 1000000) * p.output;
    const totalTokens = (inputTokens + outputTokens) * requests * days;
    const annualCost = (inputCost + outputCost) * 12;

    // Find cheapest alternative
    let cheapest = null, cheapestCost = Infinity;
    for (const [k, v] of Object.entries(providers)) {
        if (k === key) continue;
        const c = (inputTokens * requests * days / 1000000) * v.input + (outputTokens * requests * days / 1000000) * v.output;
        if (c < cheapestCost) { cheapestCost = c; cheapest = { key: k, cost: c, name: v.name || k }; }
    }
    const savings = cheapest ? (((inputCost + outputCost) - cheapestCost) / (inputCost + outputCost) * 100).toFixed(0) : 0;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>APIpulse Cost Report — ${escapeHtml(providerName)}</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a2e; background: #fff; padding: 40px; max-width: 800px; margin: 0 auto; }
  .header { text-align: center; margin-bottom: 40px; padding-bottom: 24px; border-bottom: 2px solid #6366f1; }
  .header h1 { font-size: 28px; color: #6366f1; margin-bottom: 4px; }
  .header p { color: #6b7280; font-size: 14px; }
  .section { margin-bottom: 32px; }
  .section h2 { font-size: 18px; color: #374151; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #e5e7eb; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .card { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; }
  .card-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; margin-bottom: 4px; }
  .card-value { font-size: 24px; font-weight: 700; color: #1a1a2e; }
  .card-value.accent { color: #6366f1; }
  .highlight { background: #eef2ff; border: 2px solid #6366f1; border-radius: 8px; padding: 20px; text-align: center; margin: 24px 0; }
  .highlight .big { font-size: 36px; font-weight: 800; color: #6366f1; }
  .highlight p { color: #6b7280; font-size: 14px; margin-top: 4px; }
  table { width: 100%; border-collapse: collapse; margin-top: 12px; }
  th, td { text-align: left; padding: 10px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; }
  th { background: #f9fafb; font-weight: 600; color: #374151; }
  .footer { text-align: center; margin-top: 48px; padding-top: 24px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px; }
  .footer a { color: #6366f1; text-decoration: none; }
  @media print { body { padding: 20px; } }
</style>
</head>
<body>
<div class="header">
  <h1>APIpulse Cost Report</h1>
  <p>Generated ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
</div>

<div class="section">
  <h2>Configuration</h2>
  <div class="grid">
    <div class="card"><div class="card-label">Provider / Model</div><div class="card-value">${escapeHtml(providerName)}</div></div>
    <div class="card"><div class="card-label">Input Tokens / Request</div><div class="card-value">${inputTokens.toLocaleString()}</div></div>
    <div class="card"><div class="card-label">Output Tokens / Request</div><div class="card-value">${outputTokens.toLocaleString()}</div></div>
    <div class="card"><div class="card-label">Requests / Day</div><div class="card-value">${requests.toLocaleString()}</div></div>
  </div>
</div>

<div class="highlight">
  <div class="big">${total}</div>
  <p>Estimated Monthly Cost</p>
</div>

<div class="section">
  <h2>Cost Breakdown</h2>
  <table>
    <tr><th>Item</th><th>Rate</th><th>Monthly Cost</th></tr>
    <tr><td>Input tokens</td><td>$${p.input}/1M tokens</td><td>$${inputCost.toFixed(2)}</td></tr>
    <tr><td>Output tokens</td><td>$${p.output}/1M tokens</td><td>$${outputCost.toFixed(2)}</td></tr>
    <tr><td><strong>Total</strong></td><td></td><td><strong>${total}</strong></td></tr>
  </table>
</div>

<div class="section">
  <h2>Annual Projection</h2>
  <div class="grid">
    <div class="card"><div class="card-label">Annual Cost</div><div class="card-value accent">$${annualCost.toFixed(2)}</div></div>
    <div class="card"><div class="card-label">Total Tokens / Month</div><div class="card-value">${(totalTokens / 1000000).toFixed(1)}M</div></div>
  </div>
</div>

${cheapest ? `<div class="section">
  <h2>Savings Opportunity</h2>
  <div class="card" style="background:#f0fdf4;border-color:#22c55e;">
    <div class="card-label">Cheaper Alternative</div>
    <div class="card-value">${escapeHtml(cheapest.name)}</div>
    <p style="color:#6b7280;font-size:14px;margin-top:4px;">$${cheapestCost.toFixed(2)}/mo — saves ${savings}% ($${(annualCost - cheapestCost * 12).toFixed(2)}/yr)</p>
  </div>
</div>` : ''}

<div class="section">
  <h2>Optimization Tips</h2>
  <table>
    <tr><td>Response caching</td><td>Reduce costs 10-30%</td></tr>
    <tr><td>Prompt compression</td><td>Reduce input costs 20-40%</td></tr>
    <tr><td>Model routing</td><td>Use cheaper models for simple tasks</td></tr>
    <tr><td>Batch processing</td><td>Reduce API calls 30-50%</td></tr>
  </table>
</div>

<div class="footer">
  <p>Report generated by <a href="https://getapipulse.com">APIpulse</a> — Know your AI API costs before you commit.</p>
</div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `apipulse-cost-report-${Date.now()}.html`;
    a.click();
    URL.revokeObjectURL(url);
    if (window.trackEvent) window.trackEvent('pdf_exported', { provider: key });
}

// --- Optimization Recommendations ---
function getRecommendations() {
    const provider = document.getElementById('provider').value;
    const inputTokens = parseInt(document.getElementById('input-tokens').value) || 0;
    const outputTokens = parseInt(document.getElementById('output-tokens').value) || 0;
    const requests = parseInt(document.getElementById('requests').value) || 0;
    const days = parseInt(document.getElementById('days').value) || 30;

    const recs = [];

    // Model recommendations
    if (provider.includes('gpt5') && !provider.includes('mini')) {
        recs.push({
            title: 'Consider GPT-5 over GPT-4o for better value',
            impact: 'GPT-5 is now 50% cheaper on input',
            detail: 'GPT-5 costs $1.25/M input vs $2.50/M for GPT-4o. GPT-5 is now cheaper on input with better capabilities.'
        });
    }
    if (provider.includes('gpt4o') && !provider.includes('mini')) {
        recs.push({
            title: 'Consider GPT-4o mini for simpler tasks',
            impact: 'Save ~94% on input costs',
            detail: 'GPT-4o mini costs $0.15/M input vs $2.50/M for GPT-4o. Use it for chatbots, summaries, and simple Q&A.'
        });
    }
    if (provider.includes('opus')) {
        recs.push({
            title: 'Consider Claude Sonnet 4.6 for most workloads',
            impact: 'Save ~80% on input costs',
            detail: 'Claude Sonnet 4.6 costs $3.00/M input vs $15.00/M for Opus. Sonnet handles most tasks with comparable quality and supports 1M context.'
        });
    }
    if (provider.includes('sonnet') && !provider.includes('haiku')) {
        recs.push({
            title: 'Consider Claude Haiku 4.5 for high-volume tasks',
            impact: 'Save ~67% on input costs',
            detail: 'Haiku costs $1.00/M input vs $3.00/M for Sonnet. Great for classification, extraction, and simple generation.'
        });
    }
    if (provider.includes('google-pro') && !provider.includes('flash')) {
        recs.push({
            title: 'Consider Gemini 2.0 Flash for speed-critical tasks',
            impact: 'Save ~92% on input costs',
            detail: 'Flash costs $0.10/M input vs $1.25/M for Pro. Ideal for high-throughput, low-latency use cases.'
        });
    }

    // Volume recommendations
    if (requests > 10000) {
        recs.push({
            title: 'Enable request batching',
            impact: 'Reduce API calls by 30-50%',
            detail: 'Batch multiple small requests into single API calls. Most providers support batching for reduced costs.'
        });
    }

    // Prompt optimization
    if (inputTokens > 3000) {
        recs.push({
            title: 'Optimize prompt length',
            impact: 'Reduce input costs by 20-40%',
            detail: 'Long prompts increase costs. Use system prompts efficiently, remove redundant context, and use prompt compression.'
        });
    }

    // Caching
    recs.push({
        title: 'Implement response caching',
        impact: 'Reduce costs by 10-30%',
        detail: 'Cache identical or similar requests. Many queries are repetitive — caching eliminates redundant API calls.'
    });

    // Output optimization
    if (outputTokens > 1000) {
        recs.push({
            title: 'Limit max output tokens',
            impact: 'Prevent runaway costs',
            detail: 'Set max_tokens to the minimum needed. Long outputs are expensive — constrain generation length.'
        });
    }

    return recs;
}

function renderRecommendations() {
    const container = document.getElementById('recommendations-list');
    if (!container) return;
    const recs = getRecommendations();
    container.innerHTML = recs.map(r => `
        <div class="rec-card">
            <div class="rec-header">
                <strong>${escapeHtml(r.title)}</strong>
                <span class="rec-impact">${escapeHtml(r.impact)}</span>
            </div>
            <p style="font-size:13px;color:var(--text-secondary);margin-top:6px;">${escapeHtml(r.detail)}</p>
        </div>
    `).join('');
    if (window.trackEvent) window.trackEvent('recommendations_viewed', { count: recs.length });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (isProUser()) {
        unlockProFeatures();
        // Show trial banner if in trial mode
        if (isTrialUser()) {
            const remaining = getTrialTimeRemaining();
            if (remaining) {
                const content = document.getElementById('pro-content');
                if (content) {
                    const banner = document.createElement('div');
                    banner.id = 'trial-banner';
                    banner.style.cssText = 'background:linear-gradient(135deg,rgba(99,102,241,0.1),rgba(34,197,94,0.1));border:1px solid var(--accent);border-radius:12px;padding:16px 20px;margin-bottom:24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;';
                    banner.innerHTML = `
                        <div>
                            <div style="font-weight:700;font-size:15px;">Free Trial Active</div>
                            <div style="font-size:13px;color:var(--text-secondary);">Expires in ${remaining.hours}h ${remaining.mins}m · <a href="pricing.html" style="color:var(--accent);font-weight:600;">Get lifetime access for $${window._abPrice || 29}</a></div>
                        </div>
                    `;
                    content.insertBefore(banner, content.firstChild);
                }
                // Auto-lock when trial expires
                setTimeout(() => {
                    localStorage.removeItem('apipulse_pro');
                    localStorage.removeItem('apipulse_pro_trial');
                    localStorage.removeItem('apipulse_pro_trial_expiry');
                    localStorage.setItem('apipulse_trial_expired', '1');
                    lockProFeatures();
                    if (window.trackEvent) window.trackEvent('pro_trial_expired');
                    // Show conversion message to expired trial users
                    if (!document.getElementById('trial-expired-msg')) {
                        var price = window._abPrice || 29;
                        var msg = document.createElement('div');
                        msg.id = 'trial-expired-msg';
                        msg.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,rgba(239,68,68,0.95),rgba(220,38,38,0.95));color:white;padding:16px 28px;border-radius:12px;font-size:15px;font-weight:700;z-index:10000;box-shadow:0 8px 30px rgba(239,68,68,0.4);max-width:90vw;text-align:center;';
                        msg.innerHTML = '⏰ Your 24-hour Pro trial has ended. <a href="pricing.html" style="color:white;text-decoration:underline;">Get lifetime access for $' + price + ' →</a>';
                        document.body.appendChild(msg);
                        setTimeout(function() { msg.style.opacity = '0'; msg.style.transition = 'opacity 0.5s'; setTimeout(function() { msg.remove(); }, 500); }, 8000);
                    }
                }, remaining.ms);

                // Urgency banner when < 2 hours remain
                if (remaining.ms < 2 * 60 * 60 * 1000) {
                    var urgencyBanner = document.createElement('div');
                    urgencyBanner.id = 'trial-urgency-banner';
                    var minsLeft = Math.ceil(remaining.ms / 60000);
                    var price = window._abPrice || 29;
                    urgencyBanner.style.cssText = 'background:linear-gradient(135deg,#dc2626,#b91c1c);color:white;padding:12px 20px;border-radius:12px;margin-bottom:16px;text-align:center;font-size:14px;font-weight:600;';
                    urgencyBanner.innerHTML = '⏰ Trial expires in <strong>' + minsLeft + ' minutes</strong> — <a href="pricing.html" style="color:white;text-decoration:underline;">Lock in Pro for $' + price + ' lifetime →</a>';
                    content.insertBefore(urgencyBanner, content.firstChild);
                    if (window.trackEvent) window.trackEvent('trial_urgency_shown', { minutes_left: minsLeft, price: price });
                }
            }
        }
    }
    renderScenarios();
});

// Returning expired trial users — show conversion message on first page view after trial ends
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('apipulse_trial_expired') !== '1') return;
    if (localStorage.getItem('apipulse_trial_expired_dismissed')) return;
    if (typeof isProUser === 'function' && isProUser()) { localStorage.removeItem('apipulse_trial_expired'); return; }
    var price = window._abPrice || 29;
    setTimeout(function() {
        if (document.getElementById('trial-return-msg')) return;
        var msg = document.createElement('div');
        msg.id = 'trial-return-msg';
        msg.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:var(--bg-card);border:1px solid var(--accent);padding:14px 24px;border-radius:12px;font-size:14px;z-index:9998;box-shadow:0 4px 20px rgba(0,0,0,0.2);max-width:90vw;text-align:center;display:flex;align-items:center;gap:12px;flex-wrap:wrap;justify-content:center;';
        msg.innerHTML = '<span style="color:var(--text-secondary);">👋 Enjoyed Pro? Get lifetime access for <strong style="color:var(--accent);">$' + price + '</strong></span>' +
            '<a href="pricing.html" style="display:inline-block;background:var(--accent);color:white;padding:6px 16px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:700;white-space:nowrap;" onclick="if(window.trackEvent)window.trackEvent(\'pro_button_clicked\',{source:\'trial_return_msg\'})">Upgrade →</a>' +
            '<button onclick="document.getElementById(\'trial-return-msg\').remove();localStorage.setItem(\'apipulse_trial_expired_dismissed\',\'1\');" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:16px;padding:2px 6px;" aria-label="Close">×</button>';
        document.body.appendChild(msg);
        if (window.trackEvent) window.trackEvent('trial_return_msg_shown', { price: price });
    }, 5000);
});
