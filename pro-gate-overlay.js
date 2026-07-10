// APIpulse Pro Gate Overlay — Universal paywall for free tools
// Include AFTER shared.js on any page that should be gated.
// Usage: call showProGate(containerSelector) when gate should activate.
//
// Users who already have Pro (localStorage.apipulse_pro === 'true') skip the gate.

(function() {
    'use strict';

    var STRIPE_LINK = window._abStripeLink || 'https://buy.stripe.com/bJecN55OEa5g1VUbcreEo0i';
    var PRICE = window._abPrice || 19;
    var DEAL_DEADLINE = window.DEAL_DEADLINE || new Date('2026-07-12T23:59:59Z').getTime();

    function isPro() {
        try { return localStorage.getItem('apipulse_pro') === 'true'; } catch(e) { return false; }
    }

    function getTimeLeft() {
        return Math.max(0, DEAL_DEADLINE - Date.now());
    }

    function trackGateEvent(name, extra) {
        if (window.trackEvent) {
            window.trackEvent(name, Object.assign({ price: PRICE, page: location.pathname }, extra || {}));
        }
    }

    // Show the gate on a container element
    // containerSelector: CSS selector for the element to gate (results, dashboard content, etc.)
    window.showProGate = function(containerSelector, opts) {
        if (isPro()) return;
        opts = opts || {};

        var container = document.querySelector(containerSelector);
        if (!container) return;
        if (container.querySelector('#pro-gate-overlay')) return;

        var timeLeft = getTimeLeft();
        var hoursLeft = Math.floor(timeLeft / 3600000);
        var daysLeft = Math.floor(timeLeft / 86400000);
        var showUrgency = timeLeft > 0 && timeLeft < 72 * 3600000;

        // Position the container relatively so we can overlay
        var pos = getComputedStyle(container).position;
        if (pos === 'static') container.style.position = 'relative';
        container.style.overflow = 'hidden';

        // Build overlay wrapper
        var wrapper = document.createElement('div');
        wrapper.id = 'pro-gate-overlay';
        wrapper.style.cssText = 'position:absolute;bottom:0;left:0;right:0;z-index:100;';

        // Gradient fade from transparent to background
        var bg = getComputedStyle(document.body).backgroundColor || '#0a0a0f';
        var gradient = document.createElement('div');
        gradient.style.cssText = 'height:120px;background:linear-gradient(to bottom, transparent, ' + bg + ');';
        wrapper.appendChild(gradient);

        // CTA panel
        var panel = document.createElement('div');
        panel.style.cssText = 'background:' + bg + ';padding:0 24px 32px;text-align:center;';

        var html = '';
        if (showUrgency && timeLeft > 0) {
            var timeStr = hoursLeft < 12
                ? hoursLeft + 'h ' + (Math.floor((timeLeft % 3600000) / 60000)) + 'm left — ENDS TONIGHT!'
                : hoursLeft < 24
                ? hoursLeft + 'h left — FINAL DAY!'
                : daysLeft <= 2
                ? 'LAST ' + (daysLeft === 2 ? '48' : '24') + ' HOURS!'
                : daysLeft + ' day' + (daysLeft !== 1 ? 's' : '') + ' left';
            html += '<div style="background:linear-gradient(135deg,rgba(239,68,68,0.15),rgba(249,115,22,0.1));border:1px solid rgba(239,68,68,0.3);color:#ef4444;font-size:13px;font-weight:700;padding:8px 18px;border-radius:20px;display:inline-block;margin-bottom:16px;letter-spacing:0.5px;">⚡ FLASH SALE — ' + timeStr + '</div>';
        }

        html += '<div style="font-size:28px;font-weight:900;margin-bottom:10px;background:linear-gradient(135deg,#f1f5f9,#94a3b8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.2;">Unlock Full Access</div>';
        html += '<div style="font-size:15px;color:#94a3b8;max-width:420px;line-height:1.5;margin-bottom:20px;margin-left:auto;margin-right:auto;">Get lifetime Pro for <strong style="color:#e2e8f0;">$' + PRICE + '</strong> — monitor 64 models, get alerts, export reports, save up to 40%.</div>';
        html += '<a href="' + STRIPE_LINK + '" target="_blank" rel="noopener" ';
        html += 'onclick="if(window.trackEvent)window.trackEvent(\'pro_gate_cta_clicked\',{price:' + PRICE + ',page:\'' + location.pathname + '\'});if(window.trackBeginCheckout)window.trackBeginCheckout(' + PRICE + ',\'pro_gate_overlay\');" ';
        html += 'style="display:inline-flex;align-items:center;gap:8px;padding:14px 36px;background:linear-gradient(135deg,#22c55e,#16a34a);color:white;border-radius:12px;font-size:16px;font-weight:800;text-decoration:none;box-shadow:0 4px 24px rgba(34,197,94,0.4);">';
        html += '🔓 Get Pro — $' + PRICE + ' lifetime</a>';
        html += '<div style="margin-top:10px;font-size:12px;color:#475569;">30-day money-back guarantee · One-time payment · No subscription</div>';

        panel.innerHTML = html;
        wrapper.appendChild(panel);
        container.appendChild(wrapper);

        trackGateEvent('pro_gate_shown', { container: containerSelector });
    };

    // Utility: gate on page load
    window.gateOnLoad = function(gateSelector, opts) {
        if (isPro()) return;
        document.addEventListener('DOMContentLoaded', function() {
            showProGate(gateSelector, opts);
        });
    };

})();
