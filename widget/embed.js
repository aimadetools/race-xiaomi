/**
 * APIpulse AI Pricing Widget — Embeddable Version
 *
 * Usage: <script src="https://getapipulse.com/widget/embed.js" defer></script>
 *
 * Shows a floating badge with live AI API pricing for the top models.
 * Click to expand the full pricing table. Links back to APIpulse.
 * Zero dependencies. Self-contained. ~5KB gzipped.
 */
(function() {
  'use strict';

  // Pricing data (per 1M tokens, USD) — last updated 2026-06-28 (25 models, 10 providers)
  var MODELS = [
    // OpenAI
    { name: 'GPT-5.5',           provider: 'OpenAI',     input: 5.00,  output: 30.00, context: '1.05M' },
    { name: 'GPT-5',             provider: 'OpenAI',     input: 1.25,  output: 10.00, context: '272K' },
    { name: 'GPT-5.4',           provider: 'OpenAI',     input: 2.50,  output: 15.00, context: '400K' },
    { name: 'GPT-5.4 mini',      provider: 'OpenAI',     input: 0.75,  output: 4.50,  context: '400K' },
    { name: 'GPT-5 mini',        provider: 'OpenAI',     input: 0.25,  output: 2.00,  context: '272K' },
    { name: 'GPT-4o mini',        provider: 'OpenAI',     input: 0.15,  output: 0.60,  context: '128K' },
    { name: 'GPT-oss 20B',        provider: 'OpenAI',     input: 0.08,  output: 0.35,  context: '128K' },
    // Anthropic
    { name: 'Claude Opus 4.8',   provider: 'Anthropic',  input: 5.00,  output: 25.00, context: '1M' },
    { name: 'Claude Sonnet 5',   provider: 'Anthropic',  input: 3.00,  output: 15.00, context: '1M' },
    { name: 'Claude Sonnet 4.6', provider: 'Anthropic',  input: 3.00,  output: 15.00, context: '1M' },
    { name: 'Claude Haiku 4.5',  provider: 'Anthropic',  input: 1.00,  output: 5.00,  context: '200K' },
    { name: 'Claude Fable 5',    provider: 'Anthropic',  input: 10.00, output: 50.00, context: '1M' },
    { name: 'Claude Mythos 5',   provider: 'Anthropic',  input: 10.00, output: 50.00, context: '1M' },
    // Google
    { name: 'Gemini 3.5 Flash',  provider: 'Google',     input: 1.50,  output: 9.00,  context: '1M' },
    { name: 'Gemini 3.1 Pro',    provider: 'Google',     input: 2.00,  output: 12.00, context: '1M' },
    { name: 'Gemini 3 Flash',    provider: 'Google',     input: 0.50,  output: 3.00,  context: '1M' },
    { name: 'Gemini 2.5 Flash-Lite', provider: 'Google', input: 0.10,  output: 0.40,  context: '1M' },
    // DeepSeek
    { name: 'DeepSeek V4 Pro',   provider: 'DeepSeek',   input: 0.435, output: 0.87,  context: '1M' },
    { name: 'DeepSeek V4 Flash', provider: 'DeepSeek',   input: 0.14,  output: 0.28,  context: '1M' },
    // Mistral
    { name: 'Mistral Large 3',   provider: 'Mistral',    input: 0.50,  output: 1.50,  context: '262K' },
    { name: 'Mistral Small 4',   provider: 'Mistral',    input: 0.10,  output: 0.30,  context: '128K' },
    // Meta
    { name: 'Llama 4 Scout',     provider: 'Meta',       input: 0.18,  output: 0.59,  context: '1M' },
    { name: 'Llama 4 Maverick',  provider: 'Meta',       input: 0.27,  output: 0.85,  context: '1M' },
    // xAI
    { name: 'Grok 4.3',          provider: 'xAI',        input: 1.25,  output: 2.50,  context: '1M' },
    // Cohere
    { name: 'Command R',         provider: 'Cohere',     input: 0.50,  output: 1.50,  context: '128K' },
    // Moonshot
    { name: 'Kimi K2.6',         provider: 'Moonshot',   input: 0.95,  output: 4.00,  context: '256K' }
  ];

  // Sort by output price (cheapest first)
  MODELS.sort(function(a, b) { return a.output - b.output; });

  // State
  var expanded = false;

  // Create shadow host
  var host = document.createElement('div');
  host.id = 'apipulse-widget';
  host.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:2147483647;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;';
  document.body.appendChild(host);

  // Shadow DOM for style isolation
  var shadow = host.attachShadow({ mode: 'open' });

  // Styles
  var style = document.createElement('style');
  style.textContent = [
    '* { margin:0; padding:0; box-sizing:border-box; }',
    '.badge {',
    '  display:flex; align-items:center; gap:8px;',
    '  background:linear-gradient(135deg,#6366f1,#8b5cf6);',
    '  color:white; padding:10px 16px; border-radius:50px;',
    '  cursor:pointer; font-size:13px; font-weight:600;',
    '  box-shadow:0 4px 20px rgba(99,102,241,0.4);',
    '  transition:all 0.2s; user-select:none;',
    '}',
    '.badge:hover { transform:translateY(-2px); box-shadow:0 8px 30px rgba(99,102,241,0.5); }',
    '.badge-icon { font-size:16px; }',
    '.badge-text { white-space:nowrap; }',
    '.panel {',
    '  position:absolute; bottom:52px; right:0;',
    '  width:360px; max-height:440px; overflow-y:auto;',
    '  background:#1a1a2e; border:1px solid rgba(99,102,241,0.3);',
    '  border-radius:16px; padding:0;',
    '  box-shadow:0 12px 40px rgba(0,0,0,0.5);',
    '  animation:slideUp 0.2s ease;',
    '}',
    '@keyframes slideUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }',
    '.panel-header {',
    '  padding:16px 20px; border-bottom:1px solid rgba(99,102,241,0.2);',
    '  display:flex; justify-content:space-between; align-items:center;',
    '  position:sticky; top:0; background:#1a1a2e; z-index:1;',
    '}',
    '.panel-title { font-size:15px; font-weight:700; color:white; }',
    '.panel-sub { font-size:11px; color:#9ca3af; margin-top:2px; }',
    '.panel-close {',
    '  background:none; border:none; color:#9ca3af; cursor:pointer;',
    '  font-size:18px; padding:4px 8px; border-radius:6px;',
    '}',
    '.panel-close:hover { background:rgba(255,255,255,0.1); color:white; }',
    '.model-row {',
    '  display:flex; justify-content:space-between; align-items:center;',
    '  padding:10px 20px; border-bottom:1px solid rgba(255,255,255,0.05);',
    '  transition:background 0.1s;',
    '}',
    '.model-row:hover { background:rgba(99,102,241,0.08); }',
    '.model-row:last-child { border-bottom:none; }',
    '.model-name { font-size:12px; color:#e5e7eb; font-weight:600; }',
    '.model-provider { font-size:10px; color:#6b7280; }',
    '.model-price { text-align:right; }',
    '.model-input { font-size:11px; color:#9ca3af; }',
    '.model-output { font-size:13px; color:#22c55e; font-weight:700; font-family:monospace; }',
    '.cheapest-badge {',
    '  display:inline-block; background:rgba(34,197,94,0.15); color:#22c55e;',
    '  font-size:9px; font-weight:700; padding:2px 6px; border-radius:4px;',
    '  margin-left:6px; text-transform:uppercase; letter-spacing:0.5px;',
    '}',
    '.panel-footer {',
    '  padding:12px 20px; border-top:1px solid rgba(99,102,241,0.2);',
    '  text-align:center; position:sticky; bottom:0; background:#1a1a2e;',
    '}',
    '.panel-link {',
    '  color:#818cf8; font-size:12px; text-decoration:none; font-weight:600;',
    '}',
    '.panel-link:hover { color:#a5b4fc; }',
    '.hidden { display:none!important; }',
    '@media (max-width:400px) { .panel { width:300px; } }'
  ].join('\n');
  shadow.appendChild(style);

  // Badge button
  var badge = document.createElement('div');
  badge.className = 'badge';
  badge.innerHTML = '<span class="badge-icon">⚡</span><span class="badge-text">AI API Pricing</span>';
  shadow.appendChild(badge);

  // Panel
  var panel = document.createElement('div');
  panel.className = 'panel hidden';

  var rows = MODELS.map(function(m, i) {
    var cheapest = i === 0 ? '<span class="cheapest-badge">Cheapest</span>' : '';
    return '<div class="model-row">' +
      '<div><div class="model-name">' + m.name + cheapest + '</div><div class="model-provider">' + m.provider + ' · ' + m.context + ' ctx</div></div>' +
      '<div class="model-price"><div class="model-input">$' + m.input + ' / $' + m.output + ' per 1M</div><div class="model-output">$' + m.output.toFixed(2) + ' /1M out</div></div>' +
      '</div>';
  }).join('');

  panel.innerHTML =
    '<div class="panel-header"><div><div class="panel-title">AI API Pricing — Live</div><div class="panel-sub">' + MODELS.length + ' models · 10 providers · Updated Jun 2026</div></div><button class="panel-close" id="pw-close">✕</button></div>' +
    rows +
    '<div class="panel-footer"><a href="https://getapipulse.com/pricing.html" target="_blank" rel="noopener" class="panel-link">Compare all 51 models on APIpulse →</a></div>';
  shadow.appendChild(panel);

  // Events
  badge.addEventListener('click', function() {
    expanded = !expanded;
    panel.classList.toggle('hidden', !expanded);
    badge.querySelector('.badge-text').textContent = expanded ? 'Close' : 'AI API Pricing';
  });

  panel.querySelector('#pw-close').addEventListener('click', function(e) {
    e.stopPropagation();
    expanded = false;
    panel.classList.add('hidden');
    badge.querySelector('.badge-text').textContent = 'AI API Pricing';
  });

  // Track widget usage
  try {
    var img = new Image();
    img.src = 'https://getapipulse.com/api/widget-track?host=' + encodeURIComponent(window.location.hostname) + '&t=' + Date.now();
  } catch(e) {}
})();
