/**
 * APIpulse Embeddable Widget v1.0
 * Drop-in pricing tables and badges for any website.
 *
 * Usage:
 *   <div class="apipulse-widget" data-type="table" data-providers="openai,anthropic,google"></div>
 *   <script src="https://getapipulse.com/widget.js" async></script>
 *
 *   <div class="apipulse-widget" data-type="badge" data-model="openai-gpt4o-mini"></div>
 *   <script src="https://getapipulse.com/widget.js" async></script>
 *
 *   <div class="apipulse-widget" data-type="compare" data-models="openai-gpt5,anthropic-sonnet,google-pro"></div>
 *   <script src="https://getapipulse.com/widget.js" async></script>
 *
 * Options:
 *   data-type: "table" | "badge" | "compare" (default: "table")
 *   data-providers: comma-separated provider slugs (for "table" type)
 *   data-models: comma-separated model IDs (for "compare" type)
 *   data-model: single model ID (for "badge" type)
 *   data-theme: "dark" | "light" (default: "dark")
 *   data-tier: "budget" | "mid" | "premium" (filter for "table" type)
 */
(function() {
    'use strict';

    var API_URL = 'https://getapipulse.com/api/pricing';
    var SITE_URL = 'https://getapipulse.com';

    var STYLES = {
        dark: {
            bg: '#0f0f1a', card: '#1a1a2e', border: '#2a2a3e',
            text: '#e2e8f0', muted: '#94a3b8', accent: '#6366f1',
            green: '#22c55e', badge_bg: '#6366f1'
        },
        light: {
            bg: '#ffffff', card: '#f8fafc', border: '#e2e8f0',
            text: '#1e293b', muted: '#64748b', accent: '#4f46e5',
            green: '#16a34a', badge_bg: '#4f46e5'
        }
    };

    function fetchPricing(callback) {
        // Cache for 1 hour
        var cached = null;
        try {
            cached = JSON.parse(localStorage.getItem('apipulse_widget_cache'));
            if (cached && Date.now() - cached.ts < 3600000) {
                callback(null, cached.data);
                return;
            }
        } catch(e) {}

        var xhr = new XMLHttpRequest();
        xhr.open('GET', API_URL, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        var data = JSON.parse(xhr.responseText);
                        try {
                            localStorage.setItem('apipulse_widget_cache', JSON.stringify({ts: Date.now(), data: data}));
                        } catch(e) {}
                        callback(null, data);
                    } catch(e) { callback(e); }
                } else { callback(new Error('API request failed: ' + xhr.status)); }
            }
        };
        xhr.send();
    }

    function formatPrice(n) {
        if (n < 0.01) return '$' + n.toFixed(3);
        if (n < 1) return '$' + n.toFixed(2);
        return '$' + n.toFixed(2);
    }

    function injectStyles(theme) {
        if (document.getElementById('apipulse-widget-styles')) return;
        var s = STYLES[theme] || STYLES.dark;
        var css = [
            '.apipulse-widget{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;line-height:1.5;}',
            '.apipulse-widget *{box-sizing:border-box;margin:0;padding:0;}',
            '.apw-table{width:100%;border-collapse:collapse;border-radius:8px;overflow:hidden;font-size:14px;}',
            '.apw-table th,.apw-table td{padding:10px 14px;text-align:left;border-bottom:1px solid ' + s.border + ';}',
            '.apw-table th{background:' + s.card + ';font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:' + s.muted + ';}',
            '.apw-table tr:last-child td{border-bottom:none;}',
            '.apw-table td{color:' + s.text + ';background:' + s.bg + ';}',
            '.apw-price{font-variant-numeric:tabular-nums;font-weight:600;}',
            '.apw-tier{display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600;}',
            '.apw-tier-budget{background:rgba(34,197,94,0.15);color:' + s.green + ';}',
            '.apw-tier-mid{background:rgba(99,102,241,0.15);color:' + s.accent + ';}',
            '.apw-tier-premium{background:rgba(245,158,11,0.15);color:#f59e0b;}',
            '.apw-footer{display:flex;justify-content:space-between;align-items:center;margin-top:8px;font-size:11px;color:' + s.muted + ';}',
            '.apw-footer a{color:' + s.accent + ';text-decoration:none;font-weight:600;}',
            '.apw-footer a:hover{text-decoration:underline;}',
            '.apw-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:8px;border:1px solid ' + s.border + ';background:' + s.card + ';font-size:13px;color:' + s.text + ';}',
            '.apw-badge-price{font-weight:700;font-size:16px;color:' + s.accent + ';}',
            '.apw-badge-model{font-weight:600;}',
            '.apw-badge-provider{color:' + s.muted + ';font-size:12px;}',
            '.apw-compare{width:100%;border-collapse:collapse;font-size:13px;}',
            '.apw-compare th,.apw-compare td{padding:8px 12px;text-align:center;border-bottom:1px solid ' + s.border + ';}',
            '.apw-compare th{background:' + s.card + ';font-weight:600;font-size:11px;text-transform:uppercase;color:' + s.muted + ';}',
            '.apw-compare td{background:' + s.bg + ';color:' + s.text + ';}',
            '.apw-compare td:first-child{text-align:left;font-weight:600;}',
            '.apw-compare .apw-cheapest{background:rgba(34,197,94,0.08);}',
            '.apw-loading{text-align:center;padding:20px;color:' + s.muted + ';font-size:13px;}',
            '.apw-error{padding:12px;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);border-radius:8px;color:#ef4444;font-size:13px;}'
        ].join('\n');
        var style = document.createElement('style');
        style.id = 'apipulse-widget-styles';
        style.textContent = css;
        document.head.appendChild(style);
    }

    function renderTable(container, data, options) {
        var models = data.models || [];
        var providers = options.providers ? options.providers.split(',').map(function(s){return s.trim().toLowerCase();}) : null;
        var tier = options.tier ? options.tier.toLowerCase() : null;

        if (providers) {
            models = models.filter(function(m) { return providers.indexOf(m.providerSlug) !== -1; });
        }
        if (tier) {
            models = models.filter(function(m) { return m.tier.toLowerCase() === tier; });
        }

        if (models.length === 0) {
            container.innerHTML = '<div class="apw-error">No models match your filter.</div>';
            return;
        }

        var html = '<table class="apw-table"><thead><tr>';
        html += '<th>Model</th><th>Provider</th><th>Input / 1M</th><th>Output / 1M</th><th>Context</th><th>Tier</th>';
        html += '</tr></thead><tbody>';

        models.forEach(function(m) {
            var tierClass = 'apw-tier-' + m.tier.toLowerCase();
            html += '<tr>';
            html += '<td><strong>' + m.name + '</strong></td>';
            html += '<td>' + m.provider + '</td>';
            html += '<td class="apw-price">' + formatPrice(m.input) + '</td>';
            html += '<td class="apw-price">' + formatPrice(m.output) + '</td>';
            html += '<td>' + m.context + '</td>';
            html += '<td><span class="apw-tier ' + tierClass + '">' + m.tier + '</span></td>';
            html += '</tr>';
        });

        html += '</tbody></table>';
        html += '<div class="apw-footer"><span>Last verified: ' + (data.meta ? data.meta.lastUpdated : 'N/A') + '</span>';
        html += '<a href="' + SITE_URL + '">Powered by APIpulse</a></div>';
        container.innerHTML = html;
    }

    function renderBadge(container, data, options) {
        var modelId = options.model;
        var model = (data.models || []).find(function(m) { return m.id === modelId; });

        if (!model) {
            container.innerHTML = '<div class="apw-error">Model not found: ' + modelId + '</div>';
            return;
        }

        var html = '<div class="apw-badge">';
        html += '<div><div class="apw-badge-model">' + model.name + '</div>';
        html += '<div class="apw-badge-provider">' + model.provider + ' &middot; ' + model.context + ' context</div></div>';
        html += '<div class="apw-badge-price">' + formatPrice(model.input) + ' / ' + formatPrice(model.output) + '</div>';
        html += '</div>';
        html += '<div class="apw-footer"><span>per 1M tokens &middot; ' + (data.meta ? data.meta.lastUpdated : '') + '</span>';
        html += '<a href="' + SITE_URL + '">APIpulse</a></div>';
        container.innerHTML = html;
    }

    function renderCompare(container, data, options) {
        var modelIds = options.models ? options.models.split(',').map(function(s){return s.trim();}) : [];
        var models = (data.models || []).filter(function(m) { return modelIds.indexOf(m.id) !== -1; });

        if (models.length === 0) {
            container.innerHTML = '<div class="apw-error">No matching models found.</div>';
            return;
        }

        // Find cheapest
        var cheapest = models.reduce(function(min, m) {
            return (m.input + m.output) < (min.input + min.output) ? m : min;
        });

        var html = '<table class="apw-compare"><thead><tr>';
        html += '<th>Model</th><th>Provider</th><th>Input / 1M</th><th>Output / 1M</th><th>Total / 1M</th><th>Context</th>';
        html += '</tr></thead><tbody>';

        models.forEach(function(m) {
            var isCheapest = m.id === cheapest.id;
            var total = m.input + m.output;
            html += '<tr' + (isCheapest ? ' class="apw-cheapest"' : '') + '>';
            html += '<td>' + m.name + (isCheapest ? ' ' + String.fromCharCode(9989) : '') + '</td>';
            html += '<td>' + m.provider + '</td>';
            html += '<td class="apw-price">' + formatPrice(m.input) + '</td>';
            html += '<td class="apw-price">' + formatPrice(m.output) + '</td>';
            html += '<td class="apw-price">' + formatPrice(total) + '</td>';
            html += '<td>' + m.context + '</td>';
            html += '</tr>';
        });

        html += '</tbody></table>';
        html += '<div class="apw-footer"><span>Last verified: ' + (data.meta ? data.meta.lastUpdated : 'N/A') + '</span>';
        html += '<a href="' + SITE_URL + '/compare.html">Full comparison &rarr;</a> &middot; ';
        html += '<a href="' + SITE_URL + '">Powered by APIpulse</a></div>';
        container.innerHTML = html;
    }

    function init() {
        var containers = document.querySelectorAll('.apipulse-widget');
        if (containers.length === 0) return;

        // Determine theme from first widget
        var theme = (containers[0].getAttribute('data-theme') || 'dark').toLowerCase();
        injectStyles(theme);

        containers.forEach(function(container) {
            var type = container.getAttribute('data-type') || 'table';
            container.innerHTML = '<div class="apw-loading">Loading pricing data...</div>';

            fetchPricing(function(err, data) {
                if (err) {
                    container.innerHTML = '<div class="apw-error">Failed to load pricing data.</div>';
                    return;
                }

                var options = {
                    providers: container.getAttribute('data-providers'),
                    models: container.getAttribute('data-models'),
                    model: container.getAttribute('data-model'),
                    tier: container.getAttribute('data-tier'),
                    theme: theme
                };

                switch(type) {
                    case 'badge': renderBadge(container, data, options); break;
                    case 'compare': renderCompare(container, data, options); break;
                    default: renderTable(container, data, options); break;
                }

                if (window.gtag) {
                    gtag('event', 'widget_rendered', { widget_type: type });
                }
            });
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
