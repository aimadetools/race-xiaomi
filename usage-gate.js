// APIpulse — Usage Gate for Calculator
// Limits free users to 3 unique model calculations per session.
// After 3, shows an upgrade wall with trial/purchase options.
// Pro users and trial users bypass the gate entirely.

(function() {
    var FREE_LIMIT = 3;
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
        var price = (typeof window !== 'undefined' && window._abPrice) || 29;

        var wall = document.createElement('div');
        wall.id = 'usage-gate-wall';
        wall.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.75);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;animation:fadeIn 0.3s ease;';

        wall.innerHTML = '<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:20px;padding:48px;max-width:520px;width:calc(100% - 48px);text-align:center;box-shadow:0 24px 64px rgba(0,0,0,0.5);position:relative;">' +
            '<button onclick="dismissUsageGate()" style="position:absolute;top:16px;right:20px;background:none;border:none;color:var(--text-muted);font-size:24px;cursor:pointer;padding:4px 8px;" aria-label="Close">×</button>' +
            '<div style="font-size:56px;margin-bottom:16px;">🔒</div>' +
            '<h2 style="font-size:24px;font-weight:800;margin-bottom:8px;">You\'ve used all 3 free calculations</h2>' +
            '<p style="color:var(--text-secondary);font-size:15px;line-height:1.6;margin-bottom:24px;">Upgrade to <strong>Pro</strong> for unlimited calculations, saved scenarios, cost reports, and optimization recommendations that save you up to 40%.</p>' +
            '<div style="display:flex;flex-direction:column;gap:12px;max-width:340px;margin:0 auto;">' +
                '<a href="' + (!window.DEAL_EXPIRED ? 'flash-19.html?from=usage_gate' : 'go.html?from=usage_gate') + '" style="display:block;padding:14px 24px;background:var(--accent);color:white;border-radius:10px;font-size:16px;font-weight:700;text-decoration:none;transition:transform 0.2s;" onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'none\'" onclick="if(window.trackEvent)window.trackEvent(\'usage_gate_upgrade_clicked\',{source:\'wall\',price:' + price + '})">Get Pro — $' + price + ' lifetime</a>' +
                '<button onclick="if(typeof startTrial===\'function\')startTrial();dismissUsageGate();" style="padding:12px 24px;background:transparent;border:2px solid var(--accent);color:var(--accent);border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background=\'rgba(99,102,241,0.1)\'" onmouseout="this.style.background=\'transparent\'">Try Free for 24 Hours</button>' +
            '</div>' +
            '<p style="font-size:13px;color:var(--text-muted);margin-top:20px;">No credit card needed for trial · 14-day money-back guarantee</p>' +
        '</div>';

        document.body.appendChild(wall);
        if (window.trackEvent) window.trackEvent('usage_gate_wall_shown', { usage_count: getUsage().count });
    }

    function getStripeId() {
        if (window._abStripeLink) {
            var match = window._abStripeLink.match(/buy\.stripe\.com\/(\w+)/);
            return match ? match[1] : 'fZu7sL3Gw3GS0RQeoDeEo0a';
        }
        return 'fZu7sL3Gw3GS0RQeoDeEo0a';
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
