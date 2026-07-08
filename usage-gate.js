// APIpulse — Usage Gate for Calculator
// Limits free users to 2 unique model calculations per session.
// After 2, shows an upgrade wall with trial/purchase options.
// Pro users and trial users bypass the gate entirely.

(function() {
    var FREE_LIMIT = 1;
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

        wall.innerHTML = '<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:20px;padding:40px 36px;max-width:540px;width:calc(100% - 48px);text-align:center;box-shadow:0 24px 64px rgba(0,0,0,0.5);position:relative;">' +
            '<button onclick="dismissUsageGate()" style="position:absolute;top:14px;right:18px;background:none;border:none;color:var(--text-muted);font-size:22px;cursor:pointer;padding:4px 8px;" aria-label="Close">×</button>' +
            '<div style="font-size:14px;font-weight:700;color:#ef4444;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px;">⏰ Flash sale — 4 days left</div>' +
            '<h2 style="font-size:22px;font-weight:800;margin-bottom:8px;line-height:1.3;">You\'ve seen 1 model.<br>There are <span style="color:#22c55e;">57 more</span> you should compare.</h2>' +
            '<p style="color:var(--text-secondary);font-size:14px;line-height:1.6;margin-bottom:16px;">Developers who compare 5+ models save an average of <strong>$2,400/yr</strong>. Pro unlocks all 60 models ranked by cost — with migration code ready to paste.</p>' +
            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;text-align:left;">' +
                '<div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:10px 12px;font-size:12px;color:#94a3b8;"><span style="color:#22c55e;font-weight:700;">✓</span> All 60 models ranked</div>' +
                '<div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:10px 12px;font-size:12px;color:#94a3b8;"><span style="color:#22c55e;font-weight:700;">✓</span> Copy-paste migration code</div>' +
                '<div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:10px 12px;font-size:12px;color:#94a3b8;"><span style="color:#22c55e;font-weight:700;">✓</span> Price drop alerts</div>' +
                '<div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:10px 12px;font-size:12px;color:#94a3b8;"><span style="color:#22c55e;font-weight:700;">✓</span> Cost monitoring dashboard</div>' +
            '</div>' +
            '<div style="background:rgba(220,38,38,0.06);border:1px solid rgba(220,38,38,0.2);border-radius:8px;padding:10px 14px;margin-bottom:16px;font-size:13px;color:#dc2626;">Price goes to $49 on Jul 12 — <span id="gate-countdown" style="font-weight:700;font-variant-numeric:tabular-nums;"></span></div>' +
            '<a href="https://buy.stripe.com/bJecN55OEa5g1VUbcreEo0i" target="_blank" rel="noopener" style="display:block;padding:14px 24px;background:linear-gradient(135deg,#22c55e,#16a34a);color:white;border-radius:10px;font-size:16px;font-weight:700;text-decoration:none;transition:transform 0.2s;box-shadow:0 4px 16px rgba(34,197,94,0.4);margin-bottom:8px;" onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'none\'" onclick="if(window.trackEvent)window.trackEvent(\'usage_gate_upgrade_clicked\',{source:\'wall\',price:19})">⚡ Get Pro — $19 lifetime</a>' +
            '<p style="font-size:12px;color:var(--text-muted);margin-top:6px;">One-time payment · 14-day refund · Instant access</p>' +
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
