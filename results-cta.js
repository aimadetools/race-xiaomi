// results-cta.js — Reusable Pro conversion widget
// Injects a personalized CTA after users get results from free tools
// Shows savings amount + Pro features + direct link to go.html
//
// Usage: Include this script on any tool page. It auto-detects results
// by watching for DOM changes in result containers.
//
// Configure by setting window._resultsCtaConfig before including this script:
//   window._resultsCtaConfig = {
//     resultSelector: '.result-container',  // CSS selector for results area
//     savingsSelector: '.savings-amount',    // CSS selector for savings text (optional)
//     toolName: 'Savings Calculator',        // Name shown in CTA
//     proFeatures: ['Full report', 'Migration code', 'PDF export']  // Features to highlight
//   };

(function() {
    'use strict';

    var config = window._resultsCtaConfig || {};
    var resultSelector = config.resultSelector || null;
    var savingsSelector = config.savingsSelector || null;
    var toolName = config.toolName || 'this tool';
    var proFeatures = config.proFeatures || [
        'All 15 alternatives ranked by cost',
        'Copy-paste migration code',
        'PDF report export',
        'Price change alerts'
    ];

    var ctaInjected = false;
    var ctaElement = null;

    // Get current A/B price
    function getPrice() {
        return window._abPrice || 29;
    }

    function getStripeLink() {
        return window._abStripeLink || 'https://buy.stripe.com/bJecN55OEa5g1VUbcreEo0i';
    }

    // Extract savings from page if available
    function detectSavings() {
        // Try configured selector first
        if (savingsSelector) {
            var el = document.querySelector(savingsSelector);
            if (el) {
                var match = el.textContent.match(/\$[\d,]+/);
                if (match) return match[0];
            }
        }
        // Try common patterns
        var patterns = [
            '.savings-amount', '.savings-value', '.save-amount',
            '[data-savings]', '.result-savings', '.annual-savings'
        ];
        for (var i = 0; i < patterns.length; i++) {
            var el = document.querySelector(patterns[i]);
            if (el) {
                var match = el.textContent.match(/\$[\d,]+/);
                if (match) return match[0];
            }
        }
        return null;
    }

    // Build the CTA HTML
    function buildCtaHtml(savingsText) {
        var price = getPrice();
        var stripeLink = getStripeLink();
        var fromPage = location.pathname.replace(/^\//, '').replace(/\.html$/, '') || 'home';

        var featuresHtml = proFeatures.map(function(f) {
            return '<li style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text-secondary);">' +
                '<span style="color:var(--green);font-size:14px;">✓</span> ' + f + '</li>';
        }).join('');

        var savingsLine = savingsText
            ? '<div style="font-size:20px;font-weight:800;color:var(--green);font-family:monospace;margin-bottom:4px;">You could save ' + savingsText + '/yr</div>' +
              '<div style="font-size:13px;color:var(--text-muted);margin-bottom:16px;">Pro shows you exactly how — with migration code for each alternative</div>'
            : '<div style="font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:16px;">See the full analysis with all alternatives ranked by cost</div>';

        // Session 1175: Route directly to Stripe — no intermediate pages during flash sale
        // Removed "Try Free for 24 Hours" trial — it was a conversion leak (users got their answer for free)
        var buyLink = (!window.DEAL_EXPIRED)
            ? 'https://buy.stripe.com/bJecN55OEa5g1VUbcreEo0i'
            : stripeLink;

        return '<div id="results-pro-cta" style="background:linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08));border:2px solid var(--accent);border-radius:16px;padding:28px 24px;margin:24px 0;text-align:center;animation:fadeIn 0.4s ease;">' +
            '<div style="font-size:14px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">🔓 Unlock the full ' + toolName + '</div>' +
            savingsLine +
            '<ul style="list-style:none;margin:0 0 20px;padding:0;text-align:left;max-width:360px;margin-left:auto;margin-right:auto;">' + featuresHtml + '</ul>' +
            '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">' +
            '<a href="' + buyLink + '" target="_blank" rel="noopener" ' +
            'style="display:inline-block;background:linear-gradient(135deg,#22c55e,#16a34a);color:white;padding:16px 40px;border-radius:10px;font-size:17px;font-weight:800;text-decoration:none;transition:all 0.2s;box-shadow:0 4px 16px rgba(34,197,94,0.3);" ' +
            'onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'none\'" ' +
            'onclick="if(window.trackEvent)window.trackEvent(\'results_cta_clicked\',{tool:\'' + toolName + '\',price:' + price + '})">' +
            '⚡ Get Pro — $' + price + ' lifetime</a>' +
            '</div>' +
            '<div style="font-size:12px;color:var(--text-muted);margin-top:8px;">One-time payment · 14-day money-back guarantee · Instant access</div>' +
            '</div>';
    }

    // Inject CTA into page
    function injectCta(savingsText) {
        if (ctaInjected) return;

        // Find insertion point
        var insertAfter = null;

        if (resultSelector) {
            insertAfter = document.querySelector(resultSelector);
        }

        // Fallback: find the last major result element
        if (!insertAfter) {
            var candidates = [
                'table', '.result', '.results', '.recommendation',
                '.savings-result', '.health-result', '.calc-result',
                '[data-result]', '.output', '.report'
            ];
            for (var i = 0; i < candidates.length; i++) {
                var els = document.querySelectorAll(candidates[i]);
                if (els.length > 0) {
                    insertAfter = els[els.length - 1];
                }
            }
        }

        // Last fallback: insert before footer or at end of main
        if (!insertAfter) {
            insertAfter = document.querySelector('footer') || document.querySelector('main') || document.body;
        }

        // Create and insert
        var wrapper = document.createElement('div');
        wrapper.innerHTML = buildCtaHtml(savingsText);
        ctaElement = wrapper.firstElementChild;

        // Insert after the target element
        if (insertAfter.nextSibling) {
            insertAfter.parentNode.insertBefore(ctaElement, insertAfter.nextSibling);
        } else {
            insertAfter.parentNode.appendChild(ctaElement);
        }

        ctaInjected = true;

        // Track impression
        if (window.trackEvent) {
            window.trackEvent('results_cta_shown', {
                tool: toolName,
                savings: savingsText || 'none',
                price: getPrice(),
                page: location.pathname
            });
        }
        if (typeof gtag === 'function') {
            gtag('event', 'results_cta_shown', {
                tool_name: toolName,
                has_savings: !!savingsText,
                price: getPrice()
            });
        }

        // Track CTA click
        var ctaLink = ctaElement.querySelector('a[href*="go.html"]');
        if (ctaLink) {
            ctaLink.addEventListener('click', function() {
                if (window.trackEvent) {
                    window.trackEvent('results_cta_clicked', {
                        tool: toolName,
                        savings: savingsText || 'none',
                        price: getPrice(),
                        page: location.pathname
                    });
                }
                if (typeof gtag === 'function') {
                    gtag('event', 'results_cta_clicked', {
                        tool_name: toolName,
                        has_savings: !!savingsText,
                        price: getPrice()
                    });
                }
            });
        }
    }

    // Watch for results appearing via DOM changes
    function watchForResults() {
        // Try configured selector
        if (resultSelector) {
            var target = document.querySelector(resultSelector);
            if (target) {
                // Check if results already visible
                if (target.offsetHeight > 0 && target.textContent.trim().length > 50) {
                    injectCta(detectSavings());
                    return;
                }
                // Watch for changes
                var observer = new MutationObserver(function() {
                    if (target.offsetHeight > 0 && target.textContent.trim().length > 50) {
                        observer.disconnect();
                        setTimeout(function() {
                            injectCta(detectSavings());
                        }, 300); // Small delay for animation
                    }
                });
                observer.observe(target, { childList: true, subtree: true, attributes: true });
                return;
            }
        }

        // Fallback: watch for any result-like elements appearing
        var checkInterval = setInterval(function() {
            var resultEls = document.querySelectorAll('table, .result, .results, .recommendation, .savings-result');
            for (var i = 0; i < resultEls.length; i++) {
                var el = resultEls[i];
                if (el.offsetHeight > 0 && el.textContent.trim().length > 50) {
                    clearInterval(checkInterval);
                    setTimeout(function() {
                        injectCta(detectSavings());
                    }, 500);
                    return;
                }
            }
        }, 1000);

        // Stop checking after 15 seconds
        setTimeout(function() { clearInterval(checkInterval); }, 15000);
    }

    // Also allow manual trigger: window.showResultsCta(savingsAmount)
    window.showResultsCta = function(savingsText) {
        injectCta(savingsText);
    };

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', watchForResults);
    } else {
        watchForResults();
    }
})();
