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
