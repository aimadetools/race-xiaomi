// APIpulse — Usage Gate for Calculator
// Limits free users to 2 unique model calculations per session.
// After 2, shows an upgrade wall with trial/purchase options.
// Pro users and trial users bypass the gate entirely.

(function() {
    var FREE_LIMIT = 2;
    var STORAGE_KEY = 'apipulse_calc_usage';
    var SESSION_KEY = 'apipulse_calc_session';

    function getUsage() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"count":0,"models":[]}');
        } catch(e) {
            return { count: 0, models: [] };
        }
    }

    function saveUsage(usage) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
    }

    function trackCalculation(modelId) {
        // Pro/trial users don't count
        if (typeof isProUser === 'function' && isProUser()) return false;

        var usage = getUsage();
        // Only count unique model calculations (not repeated selects of same model)
        if (usage.models.indexOf(modelId) === -1) {
            usage.models.push(modelId);
            usage.count = usage.models.length;
            saveUsage(usage);
        }
        return usage.count >= FREE_LIMIT;
    }

    function isGated() {
        if (typeof isProUser === 'function' && isProUser()) return false;
        var usage = getUsage();
        return usage.count >= FREE_LIMIT;
    }

    function getRemaining() {
        if (typeof isProUser === 'function' && isProUser()) return Infinity;
        var usage = getUsage();
        return Math.max(0, FREE_LIMIT - usage.count);
    }

    function showUpgradeWall() {
        if (document.getElementById('usage-gate-wall')) return;
        var price = (typeof window !== 'undefined' && window._abPrice) || 19;

        var wall = document.createElement('div');
        wall.id = 'usage-gate-wall';
        wall.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.75);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;animation:fadeIn 0.3s ease;';

        wall.innerHTML = '<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:20px;padding:48px;max-width:520px;width:calc(100% - 48px);text-align:center;box-shadow:0 24px 64px rgba(0,0,0,0.5);position:relative;">' +
            '<button onclick="dismissUsageGate()" style="position:absolute;top:16px;right:20px;background:none;border:none;color:var(--text-muted);font-size:24px;cursor:pointer;padding:4px 8px;" aria-label="Close">×</button>' +
            '<div style="font-size:56px;margin-bottom:16px;">💸</div>' +
            '<h2 style="font-size:24px;font-weight:800;margin-bottom:8px;">Stop overpaying for AI APIs</h2>' +
            '<p style="color:var(--text-secondary);font-size:15px;line-height:1.6;margin-bottom:12px;">You\'ve compared 2 models. <strong>The average user saves $2,400/yr</strong> by finding cheaper alternatives across all 58 models. Pro shows you exactly which ones.</p>' +
            '<div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.3);border-radius:8px;padding:10px 14px;margin-bottom:12px;font-size:13px;color:#22c55e;">💡 Example: Switching from GPT-5 to DeepSeek V4 Flash saves <strong>96% on input costs</strong></div>' +
            '<div style="background:rgba(220,38,38,0.08);border:1px solid rgba(220,38,38,0.3);border-radius:8px;padding:10px 14px;margin-bottom:16px;font-size:13px;color:#dc2626;">⏰ Flash sale ends Jul 12 — <span id="gate-countdown" style="font-weight:700;font-variant-numeric:tabular-nums;"></span></div>' +
            '<div style="display:flex;flex-direction:column;gap:12px;max-width:340px;margin:0 auto;">' +
                '<a href="https://buy.stripe.com/bJecN55OEa5g1VUbcreEo0i" target="_blank" rel="noopener" style="display:block;padding:14px 24px;background:linear-gradient(135deg,#dc2626,#b91c1c);color:white;border-radius:10px;font-size:16px;font-weight:700;text-decoration:none;transition:transform 0.2s;box-shadow:0 4px 16px rgba(220,38,38,0.4);" onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'none\'" onclick="if(window.trackEvent)window.trackEvent(\'usage_gate_upgrade_clicked\',{source:\'wall\',price:19})">⚡ Get Pro — $19 lifetime (was $49)</a>' +
            '</div>' +
            '<p style="font-size:12px;color:var(--text-muted);margin-top:10px;">Join 1,200+ developers · 14-day money-back guarantee · Instant access</p>' +
        '</div>';

        document.body.appendChild(wall);
        if (window.trackEvent) window.trackEvent('usage_gate_wall_shown', { usage_count: getUsage().count });

        // Start countdown timer
        var deadline = new Date('2026-07-12T23:59:59Z').getTime();
        function updateGateCountdown(){
            var el = document.getElementById('gate-countdown');
            if(!el) return;
            var diff = deadline - Date.now();
            if(diff <= 0){ el.textContent = 'EXPIRED'; return; }
            var d = Math.floor(diff / 86400000);
            var h = Math.floor((diff % 86400000) / 3600000);
            var m = Math.floor((diff % 3600000) / 60000);
            var s = Math.floor((diff % 60000) / 1000);
            el.textContent = (d > 0 ? d + 'd ' : '') + h + 'h ' + m + 'm ' + s + 's left';
        }
        updateGateCountdown();
        setInterval(updateGateCountdown, 1000);
    }

    function getStripeId() {
        if (window._abStripeLink) {
            var match = window._abStripeLink.match(/buy\.stripe\.com\/(\w+)/);
            return match ? match[1] : 'bJecN55OEa5g1VUbcreEo0i';
        }
        return 'bJecN55OEa5g1VUbcreEo0i';
    }

    window.dismissUsageGate = function() {
        var wall = document.getElementById('usage-gate-wall');
        if (wall) {
            wall.style.opacity = '0';
            wall.style.transition = 'opacity 0.3s';
            setTimeout(function() { wall.remove(); }, 300);
        }
        if (window.trackEvent) window.trackEvent('usage_gate_wall_dismissed');
    };

    // Export for use by calculator pages
    window.APIpulseGate = {
        track: trackCalculation,
        isGated: isGated,
        getRemaining: getRemaining,
        showWall: showUpgradeWall,
        FREE_LIMIT: FREE_LIMIT
    };
})();
