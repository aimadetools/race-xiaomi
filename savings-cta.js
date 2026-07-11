// savings-cta.js — Free tools promotion widget
// Shows a contextual savings message based on the current page's calculator results
// Include on any page with a calculator: <script src="savings-cta.js" defer></script>
//
// Auto-detects savings from:
// - URL parameters (?savings=X&model=Y)
// - DOM elements with data-savings attribute
// - Calculator result containers
// - localStorage from previous calculations

(function() {
    'use strict';

    var SHOWN_KEY = 'apipulse_savings_cta_dismissed';
    var CALC_KEY = 'apipulse_last_calc';

    // Don't show if dismissed in this session
    if (sessionStorage.getItem(SHOWN_KEY)) return;

    // Don't show on flash pages, pricing pages, or thank-you pages
    var path = location.pathname;
    if (path.indexOf('flash') >= 0 || path.indexOf('pricing') >= 0 || path.indexOf('thank') >= 0) return;

    function getSavingsData() {
        // 1. Check URL parameters
        var params = new URLSearchParams(location.search);
        var urlSavings = params.get('savings');
        if (urlSavings && parseFloat(urlSavings) > 0) {
            return { savings: parseFloat(urlSavings), model: params.get('model') || 'your current model', source: 'url' };
        }

        // 2. Check DOM for data-savings elements
        var el = document.querySelector('[data-savings]');
        if (el) {
            var val = parseFloat(el.getAttribute('data-savings'));
            if (val > 0) {
                return { savings: val, model: el.getAttribute('data-model') || 'your current model', source: 'dom' };
            }
        }

        // 3. Check for calculator result patterns in DOM
        var patterns = ['.savings-amount', '.savings-value', '.save-amount', '#savings-num', '.annual-savings'];
        for (var i = 0; i < patterns.length; i++) {
            var elem = document.querySelector(patterns[i]);
            if (elem) {
                var match = elem.textContent.match(/\$([\d,]+)/);
                if (match) {
                    var savings = parseFloat(match[1].replace(/,/g, ''));
                    if (savings > 0) return { savings: savings, model: 'alternative model', source: 'calculator' };
                }
            }
        }

        // 4. Check localStorage from previous calculations
        try {
            var stored = JSON.parse(localStorage.getItem(CALC_KEY) || '{}');
            if (stored.savings && stored.savings > 0) {
                return { savings: stored.savings, model: stored.model || 'cheaper alternative', source: 'stored' };
            }
        } catch(e) {}

        return null;
    }

    function formatSavings(amount) {
        if (amount >= 1000) return '$' + (amount / 1000).toFixed(1) + 'k';
        return '$' + Math.round(amount).toLocaleString();
    }

    function injectCTA(data) {
        // Don't inject if already exists
        if (document.getElementById('savings-cta-bar')) return;

        var annualSavings = data.savings;
        var formatted = formatSavings(annualSavings);

        var bar = document.createElement('div');
        bar.id = 'savings-cta-bar';
        bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:9997;background:linear-gradient(135deg,#0f172a 0%,#1e1b4b 100%);border-top:2px solid rgba(99,102,241,0.4);padding:12px 20px;transform:translateY(100%);transition:transform 0.4s ease;box-shadow:0 -4px 20px rgba(0,0,0,0.3);';

        bar.innerHTML =
            '<div style="max-width:800px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;">' +
                '<div style="display:flex;align-items:center;gap:12px;flex:1;min-width:200px;">' +
                    '<div style="font-size:28px;">💰</div>' +
                    '<div>' +
                        '<div style="font-size:15px;font-weight:700;color:#e2e8f0;">You could save <span style="color:#22c55e;font-family:monospace;font-size:18px;">' + formatted + '/yr</span> by switching</div>' +
                        '<div style="font-size:12px;color:#94a3b8;margin-top:2px;">Explore all 67 models and find the best fit — 100% free</div>' +
                    '</div>' +
                '</div>' +
                '<div style="display:flex;align-items:center;gap:10px;flex-shrink:0;">' +
                    '<a href="index.html#free-tools" style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#22c55e,#16a34a);color:white;border-radius:10px;font-size:15px;font-weight:800;text-decoration:none;white-space:nowrap;box-shadow:0 4px 12px rgba(34,197,94,0.3);" onclick="if(window.trackEvent)window.trackEvent(\'free_tools_clicked\',{source:\'savings_cta\'});">Free Tools →</a>' +
                    '<button onclick="dismissSavingsCTA()" style="background:none;border:none;color:#64748b;cursor:pointer;font-size:18px;padding:4px 8px;" aria-label="Close">✕</button>' +
                '</div>' +
            '</div>';

        document.body.appendChild(bar);

        // Animate in after a delay
        setTimeout(function() { bar.style.transform = 'translateY(0)'; }, 500);

        // Track impression
        if (typeof gtag === 'function') {
            gtag('event', 'savings_cta_shown', {
                savings: annualSavings,
                source: data.source,
                page: path
            });
        }
    }

    function dismissSavingsCTA() {
        var bar = document.getElementById('savings-cta-bar');
        if (bar) {
            bar.style.transform = 'translateY(100%)';
            setTimeout(function() { bar.remove(); }, 400);
        }
        sessionStorage.setItem(SHOWN_KEY, '1');
        if (typeof gtag === 'function') gtag('event', 'savings_cta_dismissed');
    }

    // Expose dismiss function globally
    window.dismissSavingsCTA = dismissSavingsCTA;

    // Store calculator results for cross-page use
    function storeCalcResult(savings, model) {
        try {
            localStorage.setItem(CALC_KEY, JSON.stringify({
                savings: savings,
                model: model,
                timestamp: Date.now()
            }));
        } catch(e) {}
    }

    // Watch for calculator results and store them
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(m) {
            m.addedNodes.forEach(function(node) {
                if (node.nodeType !== 1) return;
                var savingsEl = node.querySelector && (node.querySelector('.savings-amount') || node.querySelector('#savings-num'));
                if (savingsEl) {
                    var match = savingsEl.textContent.match(/\$([\d,]+)/);
                    if (match) {
                        var val = parseFloat(match[1].replace(/,/g, ''));
                        if (val > 0) storeCalcResult(val, 'cheaper model');
                    }
                }
            });
        });
    });

    // Initialize
    function init() {
        // Try to get savings data
        var data = getSavingsData();

        if (data && data.savings >= 12) { // Only show if savings > $12/yr
            // Show after user has had time to read results
            setTimeout(function() { injectCTA(data); }, 3000);
        }

        // Start observing for calculator results
        if (document.body) {
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
