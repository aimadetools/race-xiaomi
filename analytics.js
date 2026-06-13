// APIpulse Analytics — GA4 event tracking
// GA4 Measurement ID: G-0CEP7S9Y3J

function logEvent(name, props = {}) {
    // Send to GA4 if available
    if (typeof gtag === 'function') {
        gtag('event', name, props);
    }

    // LocalStorage backup (always works, useful for debugging)
    const events = JSON.parse(localStorage.getItem('apipulse_events') || '[]');
    events.push({ name, props, ts: Date.now(), page: location.pathname });
    if (events.length > 500) events.splice(0, events.length - 500);
    localStorage.setItem('apipulse_events', JSON.stringify(events));
}

// Track page views (GA4 does this automatically with gtag config, but we log for localStorage)
logEvent('page_view', { page_path: location.pathname, page_title: document.title });

// Expose globally
window.trackEvent = logEvent;

// --- Conversion Funnel Tracking ---

// 1. Scroll depth tracking (fires once at each threshold)
(function() {
    var thresholds = [25, 50, 75, 100];
    var fired = {};
    function check() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        var winHeight = window.innerHeight;
        var pct = Math.round(((scrollTop + winHeight) / docHeight) * 100);
        thresholds.forEach(function(t) {
            if (!fired[t] && pct >= t) {
                fired[t] = true;
                logEvent('scroll_depth', { depth: t, page: location.pathname });
            }
        });
    }
    var ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() { check(); ticking = false; });
            ticking = true;
        }
    }, { passive: true });
    // Check on load too (short pages)
    if (document.readyState === 'complete') check();
    else window.addEventListener('load', check);
})();

// 2. Time on page milestones (10s, 30s, 60s, 120s)
(function() {
    var milestones = [10, 30, 60, 120];
    var fired = {};
    milestones.forEach(function(s) {
        setTimeout(function() {
            if (!fired[s]) {
                fired[s] = true;
                logEvent('time_on_page', { seconds: s, page: location.pathname });
            }
        }, s * 1000);
    });
})();

// 3. CTA button hover tracking (for high-intent signals)
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('a[href*="buy.stripe.com"], a[href*="pricing"], button[onclick*="startTrial"]').forEach(function(el) {
            var tracked = false;
            el.addEventListener('mouseenter', function() {
                if (!tracked) {
                    tracked = true;
                    var text = (el.textContent || '').trim().substring(0, 50);
                    logEvent('cta_hover', { text: text, page: location.pathname });
                }
            });
        });
    });
})();
