/**
 * APIpulse Cost Calculator Widget — Embeddable Version
 *
 * Usage (floating):
 *   <script src="https://getapipulse.com/widget/calc-embed.js" defer></script>
 *
 * Usage (inline):
 *   <div id="apipulse-calc" data-model="openai-gpt4o" data-tokens="100000"></div>
 *   <script src="https://getapipulse.com/widget/calc-embed.js" defer></script>
 *
 * Shows an interactive cost calculator. Users select a model, enter token counts,
 * and see per-request and monthly cost estimates. Links back to APIpulse.
 * Zero dependencies. Self-contained. ~8KB gzipped.
 */
(function() {
  'use strict';

  var MODELS = [
    { id: 'openai-gpt55', name: 'GPT-5.5', provider: 'OpenAI', input: 5.00, output: 30.00 },
    { id: 'openai-gpt5', name: 'GPT-5', provider: 'OpenAI', input: 1.25, output: 10.00 },
    { id: 'openai-gpt54', name: 'GPT-5.4', provider: 'OpenAI', input: 2.50, output: 15.00 },
    { id: 'openai-gpt54-mini', name: 'GPT-5.4 mini', provider: 'OpenAI', input: 0.75, output: 4.50 },
    { id: 'openai-gpt5-mini', name: 'GPT-5 mini', provider: 'OpenAI', input: 0.25, output: 2.00 },
    { id: 'openai-gpt4o-mini', name: 'GPT-4o mini', provider: 'OpenAI', input: 0.15, output: 0.60 },
    { id: 'openai-gpt-oss-20b', name: 'GPT-oss 20B', provider: 'OpenAI', input: 0.08, output: 0.35 },
    { id: 'anthropic-opus48', name: 'Claude Opus 4.8', provider: 'Anthropic', input: 5.00, output: 25.00 },
    { id: 'anthropic-sonnet5', name: 'Claude Sonnet 5', provider: 'Anthropic', input: 3.00, output: 15.00 },
    { id: 'anthropic-sonnet46', name: 'Claude Sonnet 4.6', provider: 'Anthropic', input: 3.00, output: 15.00 },
    { id: 'anthropic-haiku', name: 'Claude Haiku 4.5', provider: 'Anthropic', input: 1.00, output: 5.00 },
    { id: 'anthropic-fable5', name: 'Claude Fable 5', provider: 'Anthropic', input: 10.00, output: 50.00 },
    { id: 'anthropic-mythos5', name: 'Claude Mythos 5', provider: 'Anthropic', input: 10.00, output: 50.00 },
    { id: 'google-gemini35-flash', name: 'Gemini 3.5 Flash', provider: 'Google', input: 1.50, output: 9.00 },
    { id: 'google-gemini31-pro', name: 'Gemini 3.1 Pro', provider: 'Google', input: 2.00, output: 12.00 },
    { id: 'google-gemini3-flash', name: 'Gemini 3 Flash', provider: 'Google', input: 0.50, output: 3.00 },
    { id: 'google-25-flash-lite', name: 'Gemini 2.5 Flash-Lite', provider: 'Google', input: 0.10, output: 0.40 },
    { id: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro', provider: 'DeepSeek', input: 0.435, output: 0.87 },
    { id: 'deepseek-v4-flash', name: 'DeepSeek V4 Flash', provider: 'DeepSeek', input: 0.14, output: 0.28 },
    { id: 'mistral-large', name: 'Mistral Large 3', provider: 'Mistral', input: 0.50, output: 1.50 },
    { id: 'mistral-small', name: 'Mistral Small 4', provider: 'Mistral', input: 0.10, output: 0.30 },
    { id: 'llama-4-scout', name: 'Llama 4 Scout', provider: 'Meta', input: 0.18, output: 0.59 },
    { id: 'llama-4-maverick', name: 'Llama 4 Maverick', provider: 'Meta', input: 0.27, output: 0.85 },
    { id: 'xai-grok3', name: 'Grok 4.3', provider: 'xAI', input: 1.25, output: 2.50 },
    { id: 'cohere-command-r', name: 'Command R', provider: 'Cohere', input: 0.50, output: 1.50 },
    { id: 'kimi-k26', name: 'Kimi K2.6', provider: 'Moonshot', input: 0.95, output: 4.00 }
  ];

  function fmt(n) {
    if (n < 0.000001) return '$' + n.toFixed(8);
    if (n < 0.01) return '$' + n.toFixed(6);
    if (n < 1) return '$' + n.toFixed(4);
    if (n < 100) return '$' + n.toFixed(2);
    return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 });
  }

  function calcCost(model, inTok, outTok) {
    return (model.input * inTok / 1e6) + (model.output * outTok / 1e6);
  }

  function buildInline(container) {
    var defaultModel = container.getAttribute('data-model') || 'openai-gpt4o';
    var defaultTokens = parseInt(container.getAttribute('data-tokens') || '1000', 10);

    var shadow = container.attachShadow({ mode: 'open' });

    var style = document.createElement('style');
    style.textContent = [
      '* { margin:0; padding:0; box-sizing:border-box; }',
      '.calc-wrap { font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; background:#1a1a2e; border:1px solid rgba(99,102,241,0.3); border-radius:16px; padding:24px; max-width:400px; color:#e2e8f0; }',
      '.calc-title { font-size:16px; font-weight:700; margin-bottom:16px; display:flex; align-items:center; gap:8px; }',
      '.calc-title span { background:linear-gradient(135deg,#6366f1,#8b5cf6); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }',
      '.calc-row { margin-bottom:12px; }',
      '.calc-row label { display:block; font-size:12px; color:#9ca3af; font-weight:600; margin-bottom:4px; text-transform:uppercase; letter-spacing:0.5px; }',
      '.calc-row select, .calc-row input { width:100%; padding:10px 12px; background:#0f0f23; border:1px solid rgba(99,102,241,0.2); border-radius:8px; color:#e2e8f0; font-size:14px; font-family:inherit; }',
      '.calc-row select:focus, .calc-row input:focus { outline:none; border-color:#6366f1; }',
      '.calc-row select option { background:#0f0f23; color:#e2e8f0; }',
      '.calc-result { background:rgba(34,197,94,0.08); border:1px solid rgba(34,197,94,0.2); border-radius:12px; padding:16px; margin-top:16px; }',
      '.calc-result-label { font-size:11px; color:#9ca3af; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px; }',
      '.calc-result-amount { font-size:28px; font-weight:800; color:#22c55e; font-family:monospace; }',
      '.calc-result-sub { font-size:12px; color:#9ca3af; margin-top:4px; }',
      '.calc-row2 { display:grid; grid-template-columns:1fr 1fr; gap:8px; }',
      '.calc-link { display:block; text-align:center; margin-top:12px; font-size:12px; color:#6366f1; text-decoration:none; font-weight:600; }',
      '.calc-link:hover { color:#8b5cf6; }',
      '.calc-branding { text-align:center; margin-top:8px; font-size:10px; color:#4b5563; }'
    ].join('\n');
    shadow.appendChild(style);

    var modelOptions = MODELS.map(function(m) {
      return '<option value="' + m.id + '"' + (m.id === defaultModel ? ' selected' : '') + '>' + m.name + ' (' + m.provider + ')</option>';
    }).join('');

    var html = [
      '<div class="calc-wrap">',
      '  <div class="calc-title">⚡ <span>APIpulse</span> Cost Calculator</div>',
      '  <div class="calc-row">',
      '    <label>Model</label>',
      '    <select id="ap-calc-model">' + modelOptions + '</select>',
      '  </div>',
      '  <div class="calc-row calc-row2">',
      '    <div>',
      '      <label>Input tokens</label>',
      '      <input id="ap-calc-in" type="number" min="0" value="' + defaultTokens + '">',
      '    </div>',
      '    <div>',
      '      <label>Output tokens</label>',
      '      <input id="ap-calc-out" type="number" min="0" value="' + Math.round(defaultTokens * 0.3) + '">',
      '    </div>',
      '  </div>',
      '  <div class="calc-result" id="ap-calc-result">',
      '    <div class="calc-result-label">Cost per request</div>',
      '    <div class="calc-result-amount" id="ap-calc-cost">$0.00</div>',
      '    <div class="calc-result-sub">Est. monthly cost at 1K req/day: <strong id="ap-calc-monthly">$0.00</strong></div>',
      '  </div>',
      '  <a class="ap-calc-link" href="https://getapipulse.com/calculator.html?model=' + defaultModel + '" target="_blank" rel="noopener">Compare all 49 models →</a>',
      '  <div class="calc-branding">Powered by APIpulse</div>',
      '</div>'
    ].join('\n');

    var div = document.createElement('div');
    div.innerHTML = html;
    shadow.appendChild(div);

    var sel = shadow.getElementById('ap-calc-model');
    var inEl = shadow.getElementById('ap-calc-in');
    var outEl = shadow.getElementById('ap-calc-out');
    var costEl = shadow.getElementById('ap-calc-cost');
    var monthlyEl = shadow.getElementById('ap-calc-monthly');
    var linkEl = shadow.querySelector('.ap-calc-link');

    function update() {
      var m = MODELS.find(function(x) { return x.id === sel.value; });
      if (!m) return;
      var inTok = parseInt(inEl.value || '0', 10);
      var outTok = parseInt(outEl.value || '0', 10);
      var cost = calcCost(m, inTok, outTok);
      var monthly = cost * 1000 * 30;
      costEl.textContent = fmt(cost);
      monthlyEl.textContent = fmt(monthly) + '/mo';
      linkEl.href = 'https://getapipulse.com/calculator.html?model=' + m.id;
    }

    sel.addEventListener('change', update);
    inEl.addEventListener('input', update);
    outEl.addEventListener('input', update);
    update();
  }

  function buildFloating() {
    var host = document.createElement('div');
    host.id = 'apipulse-calc-widget';
    host.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:2147483647;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;';
    document.body.appendChild(host);

    var shadow = host.attachShadow({ mode: 'open' });

    var style = document.createElement('style');
    style.textContent = [
      '* { margin:0; padding:0; box-sizing:border-box; }',
      '.trigger {',
      '  width:56px; height:56px; border-radius:50%;',
      '  background:linear-gradient(135deg,#22c55e,#16a34a);',
      '  color:white; display:flex; align-items:center; justify-content:center;',
      '  cursor:pointer; font-size:24px;',
      '  box-shadow:0 4px 20px rgba(34,197,94,0.4);',
      '  transition:all 0.2s;',
      '}',
      '.trigger:hover { transform:scale(1.1); box-shadow:0 8px 30px rgba(34,197,94,0.5); }',
      '.panel {',
      '  position:absolute; bottom:64px; right:0;',
      '  width:340px;',
      '  background:#1a1a2e; border:1px solid rgba(99,102,241,0.3);',
      '  border-radius:16px; padding:0;',
      '  box-shadow:0 12px 40px rgba(0,0,0,0.5);',
      '  animation:slideUp 0.2s ease; display:none;',
      '}',
      '.panel.open { display:block; }',
      '@keyframes slideUp { from { opacity:0; transform:translate8px; } to { opacity:1; transform:translateY(0); } }',
      '.panel-head { padding:14px 18px; border-bottom:1px solid rgba(99,102,241,0.2); display:flex; justify-content:space-between; align-items:center; }',
      '.panel-title { font-size:14px; font-weight:700; color:white; display:flex; align-items:center; gap:6px; }',
      '.panel-title span { background:linear-gradient(135deg,#6366f1,#8b5cf6); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }',
      '.panel-close { background:none; border:none; color:#9ca3af; cursor:pointer; font-size:16px; padding:4px 8px; border-radius:6px; }',
      '.panel-close:hover { background:rgba(255,255,255,0.1); }',
      '.panel-body { padding:16px 18px; }',
      '.calc-row { margin-bottom:10px; }',
      '.calc-row label { display:block; font-size:11px; color:#9ca3af; font-weight:600; margin-bottom:3px; text-transform:uppercase; letter-spacing:0.5px; }',
      '.calc-row select, .calc-row input { width:100%; padding:8px 10px; background:#0f0f23; border:1px solid rgba(99,102,241,0.2); border-radius:8px; color:#e2e8f0; font-size:13px; font-family:inherit; }',
      '.calc-row select:focus, .calc-row input:focus { outline:none; border-color:#6366f1; }',
      '.calc-row select option { background:#0f0f23; }',
      '.row2 { display:grid; grid-template-columns:1fr 1fr; gap:8px; }',
      '.result { background:rgba(34,197,94,0.08); border:1px solid rgba(34,197,94,0.2); border-radius:10px; padding:12px; margin-top:12px; text-align:center; }',
      '.result-label { font-size:10px; color:#9ca3af; text-transform:uppercase; letter-spacing:0.5px; }',
      '.result-amount { font-size:24px; font-weight:800; color:#22c55e; font-family:monospace; }',
      '.result-sub { font-size:11px; color:#9ca3af; margin-top:2px; }',
      '.result-sub strong { color:#22c55e; }',
      '.cta-link { display:block; text-align:center; margin-top:10px; padding:8px; background:rgba(99,102,241,0.15); border:1px solid rgba(99,102,241,0.3); border-radius:8px; color:#818cf8; font-size:12px; font-weight:600; text-decoration:none; }',
      '.cta-link:hover { background:rgba(99,102,241,0.25); color:#a5b4fc; }',
      '.branding { text-align:center; padding:8px 18px 12px; font-size:9px; color:#4b5563; }'
    ].join('\n');
    shadow.appendChild(style);

    var modelOpts = MODELS.map(function(m) {
      return '<option value="' + m.id + '">' + m.name + '</option>';
    }).join('');

    var html = [
      '<div class="trigger" id="ap-trigger">🧮</div>',
      '<div class="panel" id="ap-panel">',
      '  <div class="panel-head">',
      '    <div class="panel-title">🧮 <span>APIpulse</span> Calculator</div>',
      '    <button class="panel-close" id="ap-close">✕</button>',
      '  </div>',
      '  <div class="panel-body">',
      '    <div class="calc-row">',
      '      <label>Model</label>',
      '      <select id="fp-model">' + modelOpts + '</select>',
      '    </div>',
      '    <div class="calc-row row2">',
      '      <div><label>Input tokens</label><input id="fp-in" type="number" min="0" value="1000"></div>',
      '      <div><label>Output tokens</label><input id="fp-out" type="number" min="0" value="300"></div>',
      '    </div>',
      '    <div class="result">',
      '      <div class="result-label">Cost per request</div>',
      '      <div class="result-amount" id="fp-cost">$0.00</div>',
      '      <div class="result-sub">Monthly at 1K req/day: <strong id="fp-monthly">$0.00</strong></div>',
      '    </div>',
      '    <a class="cta-link" href="https://getapipulse.com/calculator.html" target="_blank" rel="noopener">Compare all 49 models →</a>',
      '  </div>',
      '  <div class="branding">Powered by APIpulse</div>',
      '</div>'
    ].join('\n');

    var div = document.createElement('div');
    div.innerHTML = html;
    shadow.appendChild(div);

    var trigger = shadow.getElementById('ap-trigger');
    var panel = shadow.getElementById('ap-panel');
    var closeBtn = shadow.getElementById('ap-close');
    var sel = shadow.getElementById('fp-model');
    var inEl = shadow.getElementById('fp-in');
    var outEl = shadow.getElementById('fp-out');
    var costEl = shadow.getElementById('fp-cost');
    var monthlyEl = shadow.getElementById('fp-monthly');
    var ctaLink = shadow.querySelector('.cta-link');

    trigger.addEventListener('click', function() {
      panel.classList.toggle('open');
    });
    closeBtn.addEventListener('click', function() {
      panel.classList.remove('open');
    });

    function update() {
      var m = MODELS.find(function(x) { return x.id === sel.value; });
      if (!m) return;
      var inTok = parseInt(inEl.value || '0', 10);
      var outTok = parseInt(outEl.value || '0', 10);
      var cost = calcCost(m, inTok, outTok);
      var monthly = cost * 1000 * 30;
      costEl.textContent = fmt(cost);
      monthlyEl.textContent = fmt(monthly) + '/mo';
      ctaLink.href = 'https://getapipulse.com/calculator.html?model=' + m.id;
    }

    sel.addEventListener('change', update);
    inEl.addEventListener('input', update);
    outEl.addEventListener('input', update);
    update();
  }

  // Auto-init: floating if no #apipulse-calc container, inline if found
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      var container = document.getElementById('apipulse-calc');
      if (container) buildInline(container);
      else buildFloating();
    });
  } else {
    var container = document.getElementById('apipulse-calc');
    if (container) buildInline(container);
    else buildFloating();
  }
})();
