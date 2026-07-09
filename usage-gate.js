// APIpulse — Usage Gate for Calculator
// Limits free users to 1 unique model calculation per session.
// After 1, shows a persistent upgrade wall (no dismiss).
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
        var price = (typeof window !== 'undefined' && window._abPrice) || 19;
        var savings = getSavingsFact();
        var savingsHtml = '';
        if (savings) {
            if (savings.personalized) {
                // Personalized: show the user's actual savings
                savingsHtml = '<div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.25);border-radius:10px;padding:14px 16px;margin-bottom:16px;text-align:left;">' +
                    '<div style="font-size:11px;color:#22c55e;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">💰 Based on your calculation</div>' +
                    '<div style="font-size:14px;color:var(--text-primary);line-height:1.5;">You could save <strong style="color:#22c55e;font-size:20px;">' + savings.annual + '</strong> by switching to cheaper alternatives' + (savings.grade ? ' (your efficiency grade: <strong>' + savings.grade + '</strong>)' : '') + '.</div>' +
                    '<div style="font-size:12px;color:var(--text-muted);margin-top:4px;">Pro shows you exactly which models to switch to — with migration code ready to paste.</div>' +
                '</div>';
            } else {
                // Generic: show the pricing data fact
                savingsHtml = '<div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.25);border-radius:10px;padding:14px 16px;margin-bottom:16px;text-align:left;">' +
                    '<div style="font-size:11px;color:#22c55e;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">💡 Did you know?</div>' +
                    '<div style="font-size:14px;color:var(--text-primary);line-height:1.5;">Switching from <strong>' + savings.from + '</strong> to <strong>' + savings.to + '</strong> saves <strong style="color:#22c55e;font-size:18px;">' + savings.pct + '%</strong> on output costs.</div>' +
                    '<div style="font-size:12px;color:var(--text-muted);margin-top:4px;">Pro shows you all ' + (typeof API_MODELS !== 'undefined' ? API_MODELS.filter(function(m){return !m.deprecated;}).length : '60') + ' active models ranked by cost for your exact workload.</div>' +
                '</div>';
            }
        }

        var wall = document.createElement('div');
        wall.id = 'usage-gate-wall';
        wall.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.80);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;animation:fadeIn 0.3s ease;';

        wall.innerHTML = '<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:20px;padding:40px 36px;max-width:540px;width:calc(100% - 48px);text-align:center;box-shadow:0 24px 64px rgba(0,0,0,0.5);position:relative;">' +
            '<div style="font-size:14px;font-weight:700;color:#ef4444;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px;">⏰ Flash sale — ends Jul 12</div>' +
            '<h2 style="font-size:22px;font-weight:800;margin-bottom:8px;line-height:1.3;">You\'ve used your free calculation.<br>Unlock <span style="color:#22c55e;">all 60 models</span> with Pro.</h2>' +
            '<p style="color:var(--text-secondary);font-size:14px;line-height:1.6;margin-bottom:16px;">Developers who compare 5+ models save an average of <strong>$2,400/yr</strong>. Pro ranks every model by cost for your exact workload — with migration code ready to paste.</p>' +
            savingsHtml +
            '<div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.2);border-radius:10px;padding:14px 16px;margin-bottom:16px;text-align:left;">' +
                '<div style="font-size:11px;color:#818cf8;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">📊 Your calculation was saved</div>' +
                '<div style="font-size:14px;color:var(--text-primary);line-height:1.5;">Track spending trends, set budgets, and export CSV reports in your <a href="/dashboard.html" style="color:#818cf8;font-weight:700;text-decoration:underline;">free cost dashboard</a>.</div>' +
                '<div style="font-size:12px;color:var(--text-muted);margin-top:4px;">No signup required — data stays in your browser.</div>' +
            '</div>' +
            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;text-align:left;">' +
                '<div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:10px 12px;font-size:12px;color:#94a3b8;"><span style="color:#22c55e;font-weight:700;">✓</span> All 60 models ranked by cost</div>' +
                '<div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:10px 12px;font-size:12px;color:#94a3b8;"><span style="color:#22c55e;font-weight:700;">✓</span> Copy-paste migration code</div>' +
                '<div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:10px 12px;font-size:12px;color:#94a3b8;"><span style="color:#22c55e;font-weight:700;">✓</span> Price drop & deprecation alerts</div>' +
                '<div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:10px 12px;font-size:12px;color:#94a3b8;"><span style="color:#22c55e;font-weight:700;">✓</span> Weekly pricing digest</div>' +
            '</div>' +
            '<div style="background:rgba(220,38,38,0.06);border:1px solid rgba(220,38,38,0.2);border-radius:8px;padding:10px 14px;margin-bottom:16px;font-size:13px;color:#dc2626;">Price goes to $49 on Jul 12 — <span id="gate-countdown" style="font-weight:700;font-variant-numeric:tabular-nums;"></span></div>' +
            '<a href="https://buy.stripe.com/bJecN55OEa5g1VUbcreEo0i" target="_blank" rel="noopener" style="display:block;padding:16px 24px;background:linear-gradient(135deg,#22c55e,#16a34a);color:white;border-radius:10px;font-size:17px;font-weight:700;text-decoration:none;transition:transform 0.2s;box-shadow:0 4px 16px rgba(34,197,94,0.4);margin-bottom:8px;" onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'none\'" onclick="if(window.trackEvent)window.trackEvent(\'usage_gate_upgrade_clicked\',{source:\'wall\',price:19})">⚡ Get Pro — $19 lifetime (was $49)</a>' +
            '<p style="font-size:12px;color:var(--text-muted);margin-top:6px;">One-time payment · 14-day money-back guarantee · Instant access</p>' +
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
        // Wall is persistent — removing it via console re-shows after 2s
        var wall = document.getElementById('usage-gate-wall');
        if (wall) {
            wall.style.opacity = '0';
            wall.style.transition = 'opacity 0.3s';
            setTimeout(function() {
                wall.remove();
                // Re-show after brief delay — gate is not dismissible
                setTimeout(function() {
                    if (!document.getElementById('usage-gate-wall')) showUpgradeWall();
                }, 2000);
            }, 300);
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
