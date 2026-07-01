// APIpulse Pricing Badge v1.1
// Embeddable AI API pricing badge — shows live pricing for top models.
// Usage: <div id="apipulse-badge"></div><script src="https://getapipulse.com/badge.js" async></script>
// Attributes on the script tag:
//   data-compact="true"  — inline style (slim)
//   data-theme="light"   — light theme (default: dark)
//   data-count="6"       — number of models to show (default: 4)
//   data-models="GPT-5,Claude Sonnet 4.6"  — show only these models (comma-separated)
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

  // Find the script tag to read config
  var scripts = document.querySelectorAll('script[src*="badge.js"]');
  var script = scripts[scripts.length - 1];
  if (!script) return;

  var isCompact = script.getAttribute('data-compact') === 'true';
  var theme = script.getAttribute('data-theme') || 'dark';
  var countAttr = parseInt(script.getAttribute('data-count'), 10);
  var modelsAttr = script.getAttribute('data-models');

  // Filter models if data-models is specified
  var models = MODELS;
  if (modelsAttr) {
    var names = modelsAttr.split(',').map(function(s) { return s.trim().toLowerCase(); });
    models = MODELS.filter(function(m) {
      return names.some(function(n) {
        return m.name.toLowerCase().indexOf(n) !== -1 || n.indexOf(m.name.toLowerCase()) !== -1;
      });
    });
    // Keep original order if explicit list
    if (models.length === 0) models = MODELS; // fallback
  }

  // Determine how many to show
  var TOP_N = isNaN(countAttr) ? 4 : Math.max(1, Math.min(countAttr, models.length));
  var top = models.slice(0, TOP_N);

  function fmt(n) {
    return n < 1 ? '$' + n.toFixed(2) : '$' + n.toFixed(n < 10 ? 2 : 0);
  }

  // Theme colors
  var isLight = theme === 'light';
  var colors = isLight ? {
    bg: '#ffffff', border: '#e2e8f0', rowBg: '#f8fafc',
    title: '#64748b', model: '#1e293b', price: '#16a34a', link: '#4f46e5'
  } : {
    bg: '#0f172a', border: '#1e293b', rowBg: '#111827',
    title: '#94a3b8', model: '#e2e8f0', price: '#22c55e', link: '#6366f1'
  };

  // Find parent container
  var container = script.parentElement;
  if (!container) return;

  // Track badge load via GA4 if available
  try {
    if (typeof gtag === 'function') {
      gtag('event', 'badge_load', {
        badge_theme: theme,
        badge_count: TOP_N,
        badge_compact: isCompact ? '1' : '0',
        badge_models: modelsAttr || 'default',
        badge_host: location.hostname
      });
    }
    // Also track via existing widget-track endpoint (1x1 pixel, no CORS issues)
    new Image().src = 'https://getapipulse.com/api/widget-track?host=' + encodeURIComponent(location.hostname) + '&badge=1&theme=' + theme + '&count=' + TOP_N;
  } catch(e) {}

  if (isCompact) {
    // Compact inline badge
    var el = document.createElement('div');
    el.style.cssText = 'font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;display:inline-flex;align-items:center;gap:8px;background:' + colors.bg + ';border:1px solid ' + colors.border + ';border-radius:8px;padding:8px 14px;font-size:12px;';
    el.innerHTML = '<span style="font-size:14px;">⚡</span>' +
      '<span style="color:' + colors.title + ';">' + top[0].name + ' from <strong style="color:' + colors.price + ';">' + fmt(top[0].input) + '/M</strong>' +
      (top.length > 1 ? ' · ' + top[1].name + ' from <strong style="color:' + colors.price + ';">' + fmt(top[1].input) + '/M</strong>' : '') +
      '</span>' +
      '<a href="https://getapipulse.com" target="_blank" rel="noopener" style="color:' + colors.link + ';text-decoration:none;margin-left:4px;font-size:11px;">APIpulse</a>';
    container.insertBefore(el, script);
  } else {
    // Card badge
    var card = document.createElement('div');
    card.style.cssText = 'font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;background:' + colors.bg + ';border:1px solid ' + colors.border + ';border-radius:12px;padding:16px;max-width:320px;';

    var header = '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">' +
      '<span style="font-size:16px;">⚡</span>' +
      '<span style="font-size:12px;font-weight:700;color:' + colors.title + ';text-transform:uppercase;letter-spacing:0.5px;">AI API Pricing</span></div>';

    var rows = '';
    top.forEach(function(m) {
      rows += '<div style="display:flex;justify-content:space-between;padding:6px 8px;background:' + colors.rowBg + ';border-radius:6px;margin-bottom:6px;font-size:12px;">' +
        '<span style="color:' + colors.model + ';font-weight:600;">' + m.name + '</span>' +
        '<span style="color:' + colors.price + ';font-weight:700;font-family:monospace;">' + fmt(m.input) + ' / ' + fmt(m.output) + '</span></div>';
    });

    var footer = '<div style="margin-top:10px;text-align:center;">' +
      '<a href="https://getapipulse.com" target="_blank" rel="noopener" style="font-size:11px;color:' + colors.link + ';text-decoration:none;">Powered by APIpulse →</a></div>';

    card.innerHTML = header + rows + footer;
    container.insertBefore(card, script);
  }
})();
