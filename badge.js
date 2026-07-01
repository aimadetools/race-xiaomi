// APIpulse Pricing Badge v1.0
// Embeddable AI API pricing badge — shows live pricing for top models.
// Usage: <div id="apipulse-badge"></div><script src="https://getapipulse.com/badge.js" async></script>
// Compact: add data-compact="true" to the script tag for inline style.
(function() {
  'use strict';

  // Pricing data — updated when providers change rates
  var MODELS = [
    { name: 'DeepSeek V4 Pro', input: 0.44, output: 0.87, provider: 'DeepSeek' },
    { name: 'DeepSeek V4 Flash', input: 0.14, output: 0.28, provider: 'DeepSeek' },
    { name: 'GPT-5', input: 1.25, output: 10.00, provider: 'OpenAI' },
    { name: 'Gemini 3.1 Pro', input: 2.00, output: 12.00, provider: 'Google' },
    { name: 'Claude Sonnet 4.6', input: 3.00, output: 15.00, provider: 'Anthropic' },
    { name: 'Mistral Small 4', input: 0.20, output: 0.60, provider: 'Mistral' },
    { name: 'Llama 4 Scout', input: 0.10, output: 0.30, provider: 'Meta' },
    { name: 'GPT-5.4 mini', input: 0.40, output: 1.60, provider: 'OpenAI' }
  ];

  // Sort by input price
  MODELS.sort(function(a, b) { return a.input - b.input; });

  var TOP_N = 4;
  var top = MODELS.slice(0, TOP_N);

  function fmt(n) {
    return n < 1 ? '$' + n.toFixed(2) : '$' + n.toFixed(n < 10 ? 2 : 0);
  }

  // Find the script tag to determine mode
  var scripts = document.querySelectorAll('script[src*="badge.js"]');
  var script = scripts[scripts.length - 1];
  var isCompact = script && script.getAttribute('data-compact') === 'true';

  // Find parent container
  var container = script ? script.parentElement : null;
  if (!container) return;

  if (isCompact) {
    // Compact inline badge
    var el = document.createElement('div');
    el.style.cssText = 'font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;display:inline-flex;align-items:center;gap:8px;background:#0f172a;border:1px solid #1e293b;border-radius:8px;padding:8px 14px;font-size:12px;';
    el.innerHTML = '<span style="font-size:14px;">⚡</span>' +
      '<span style="color:#94a3b8;">' + top[0].name + ' from <strong style="color:#22c55e;">' + fmt(top[0].input) + '/M</strong> · ' + top[1].name + ' from <strong style="color:#22c55e;">' + fmt(top[1].input) + '/M</strong></span>' +
      '<a href="https://getapipulse.com" target="_blank" rel="noopener" style="color:#6366f1;text-decoration:none;margin-left:4px;font-size:11px;">APIpulse</a>';
    container.insertBefore(el, script);
  } else {
    // Card badge
    var card = document.createElement('div');
    card.style.cssText = 'font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;background:#0f172a;border:1px solid #1e293b;border-radius:12px;padding:16px;max-width:320px;';

    var header = '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">' +
      '<span style="font-size:16px;">⚡</span>' +
      '<span style="font-size:12px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.5px;">AI API Pricing</span></div>';

    var rows = '';
    top.forEach(function(m) {
      rows += '<div style="display:flex;justify-content:space-between;padding:6px 8px;background:#111827;border-radius:6px;margin-bottom:6px;font-size:12px;">' +
        '<span style="color:#e2e8f0;font-weight:600;">' + m.name + '</span>' +
        '<span style="color:#22c55e;font-weight:700;font-family:monospace;">' + fmt(m.input) + ' / ' + fmt(m.output) + '</span></div>';
    });

    var footer = '<div style="margin-top:10px;text-align:center;">' +
      '<a href="https://getapipulse.com" target="_blank" rel="noopener" style="font-size:11px;color:#6366f1;text-decoration:none;">Powered by APIpulse →</a></div>';

    card.innerHTML = header + rows + footer;
    container.insertBefore(card, script);
  }
})();
