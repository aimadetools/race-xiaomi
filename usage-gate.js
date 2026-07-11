// APIpulse — Usage Gate for Calculator
// Session 1332: Increased free limit 1→3, made wall dismissible, replaced
// full-screen overlay with non-blocking bottom banner per business health audit.
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

    // Compute a compelling savings fact — personalized from the page if available, else from pricing data
    function getSavingsFact() {
        try {
            // First try: personalized savings from the calculator page
            var annualEl = document.getElementById('upsell-annual-savings');
            var gradeEl = document.getElementById('upsell-grade-text');
            if (annualEl && annualEl.textContent && annualEl.textContent.indexOf('$') !== -1 && annualEl.textContent.indexOf('$0') === -1) {
                var annual = annualEl.textContent.trim();
                var grade = gradeEl ? gradeEl.textContent.trim() : '';
                return { personalized: true, annual: annual, grade: grade };
            }

            // Fallback: generic savings fact from pricing data
            if (typeof API_MODELS === 'undefined') return null;
            var active = API_MODELS.filter(function(m) { return !m.deprecated && m.input && m.output; });
            if (active.length < 2) return null;

            var premiums = active.filter(function(m) { return m.tier === 'Premium'; });
            var budgets = active.filter(function(m) { return m.tier === 'Budget'; });
            if (premiums.length && budgets.length) {
                premiums.sort(function(a,b) { return b.output - a.output; });
                budgets.sort(function(a,b) { return a.output - b.output; });
                var expensive = premiums[0];
                var cheap = budgets[0];
                var savings = Math.round((1 - cheap.output / expensive.output) * 100);
                if (savings > 80) {
                    return { from: expensive.name, to: cheap.name, pct: savings, fromProvider: expensive.provider, toProvider: cheap.provider };
                }
            }
        } catch(e) {}
        return null;
    }

    function showUpgradeWall() {
        if (document.getElementById('usage-gate-wall')) return;
        // Session 1332: Non-blocking bottom banner (was full-screen overlay)
        // Inject animation keyframes if not already present
        if (!document.getElementById('usage-gate-styles')) {
            var s = document.createElement('style');
            s.id = 'usage-gate-styles';
            s.textContent = '@keyframes slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}';
            document.head.appendChild(s);
        }
        var price = (typeof window !== 'undefined' && window._abPrice) || 19;
        var wall = document.createElement('div');
        wall.id = 'usage-gate-wall';
        wall.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:9999;background:linear-gradient(135deg,#0f172a,#1e293b);border-top:2px solid rgba(99,102,241,0.3);padding:16px 24px;display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;box-shadow:0 -4px 24px rgba(0,0,0,0.4);animation:slideUp 0.3s ease;';

        wall.innerHTML =
            '<div style="flex:1;min-width:200px;">' +
                '<div style="font-size:14px;font-weight:700;color:#f1f5f9;margin-bottom:2px;">You\'ve used ' + FREE_LIMIT + ' free calculations</div>' +
                '<div style="font-size:12px;color:#94a3b8;">Pro gives you unlimited access to all 67 models with migration code.</div>' +
            '</div>' +
            '<a href="https://buy.stripe.com/bJecN55OEa5g1VUbcreEo0i" target="_blank" rel="noopener" style="padding:10px 24px;background:linear-gradient(135deg,#22c55e,#16a34a);color:white;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;white-space:nowrap;box-shadow:0 2px 12px rgba(34,197,94,0.3);" onclick="if(window.trackEvent)window.trackEvent(\'usage_gate_upgrade_clicked\',{source:\'banner\',price:19})">Get Pro — $' + price + '</a>' +
            '<button onclick="var w=document.getElementById(\'usage-gate-wall\');if(w)w.remove();" style="background:none;border:none;color:#64748b;font-size:18px;cursor:pointer;padding:4px 8px;" aria-label="Dismiss">×</button>';

        document.body.appendChild(wall);
        if (window.trackEvent) window.trackEvent('usage_gate_wall_shown', { usage_count: getUsage().count });
    }

    function getStripeId() {
        if (window._abStripeLink) {
            var match = window._abStripeLink.match(/buy\.stripe\.com\/(\w+)/);
            return match ? match[1] : 'bJecN55OEa5g1VUbcreEo0i';
        }
        return 'bJecN55OEa5g1VUbcreEo0i';
    }

    window.dismissUsageGate = function() {
        // Session 1332: Wall is now dismissible (was auto-reshowing)
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
