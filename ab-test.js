// APIpulse A/B Test — index.html vs launch.html
// Variant A = index.html (pain-point hero: "Stop overpaying for AI APIs")
// Variant B = launch.html (data-driven hero: "AI API pricing changed dramatically in 2026")
// Tracks via GA4: ab_test_assigned, ab_test_calculator_used, ab_test_pricing_viewed, ab_test_pro_click

(function() {
    var STORAGE_KEY = 'ab_variant';
    var assigned = localStorage.getItem(STORAGE_KEY);

    // Assign variant on first visit (50/50 split)
    if (!assigned) {
        assigned = Math.random() < 0.5 ? 'index' : 'launch';
        localStorage.setItem(STORAGE_KEY, assigned);
    }

    // Expose for other scripts and debugging
    window.AB_VARIANT = assigned;

    // Determine current page
    var path = window.location.pathname;
    var isIndex = path === '/' || path === '/index.html';
    var isLaunch = path === '/launch.html';

    // Redirect non-matching visitors (skip admin/preview)
    if (typeof window.VERCEL === 'undefined' && !path.startsWith('/admin') && !path.startsWith('/.well-known')) {
        if (assigned === 'launch' && isIndex) {
            window.location.replace('/launch.html');
            return;
        }
        if (assigned === 'index' && isLaunch) {
            window.location.replace('/');
            return;
        }
    }

    // Track variant assignment (fires on both pages for consistency)
    if (typeof gtag === 'function') {
        gtag('event', 'ab_test_assigned', {
            variant: assigned,
            page: path
        });
    }

    // Track calculator usage (on whichever page they land)
    document.addEventListener('DOMContentLoaded', function() {
        // Track calculator interactions
        var calcInputs = document.querySelectorAll('.calculator input, .calculator select');
        calcInputs.forEach(function(el) {
            el.addEventListener('change', function() {
                if (typeof gtag === 'function') {
                    gtag('event', 'ab_test_calculator_used', {
                        variant: assigned,
                        page: path
                    });
                }
            });
        });

        // Track pricing/tool link clicks
        var proBtns = document.querySelectorAll('a[href*="pricing"], a[href*="pro"]');
        proBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                if (typeof gtag === 'function') {
                    gtag('event', 'ab_test_pro_click', {
                        variant: assigned,
                        page: path
                    });
                }
            });
        });

        // Track pricing page views from this page
        var pricingLinks = document.querySelectorAll('a[href*="pricing"]');
        pricingLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (typeof gtag === 'function') {
                    gtag('event', 'ab_test_pricing_viewed', {
                        variant: assigned,
                        page: path
                    });
                }
            });
        });
    });
})();
