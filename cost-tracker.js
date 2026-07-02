// APIpulse — Cost Tracker (Session 1062)
// localStorage-based cost tracking for Pro users.
// Tracks API spending over time, shows trends, and highlights savings opportunities.
// Usage: <script src="cost-tracker.js" defer></script>

(function() {
    'use strict';

    var STORAGE_KEY = 'ap_cost_tracker';
    var MAX_ENTRIES = 90; // 90 days of history

    // Get stored data
    function getData() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : { entries: [], models: {}, lastCalc: null };
        } catch(e) {
            return { entries: [], models: {}, lastCalc: null };
        }
    }

    // Save data
    function saveData(data) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch(e) {}
    }

    // Record a cost calculation
    function recordCalculation(modelKey, modelName, provider, monthlySpend, alternatives) {
        var data = getData();
        var now = new Date();
        var entry = {
            date: now.toISOString(),
            model: modelKey,
            modelName: modelName,
            provider: provider,
            spend: monthlySpend,
            alternatives: alternatives ? alternatives.slice(0, 3).map(function(a) {
                return { name: a.name, provider: a.provider, cost: a.cost, saveMo: a.saveMo };
            }) : [],
            bestSaving: alternatives && alternatives.length > 0 ? alternatives[0].saveMo : 0
        };

        data.entries.push(entry);
        if (data.entries.length > MAX_ENTRIES) {
            data.entries = data.entries.slice(-MAX_ENTRIES);
        }

        // Track model usage
        if (!data.models[modelKey]) {
            data.models[modelKey] = { name: modelName, provider: provider, count: 0, totalSpend: 0 };
        }
        data.models[modelKey].count++;
        data.models[modelKey].totalSpend += monthlySpend;

        data.lastCalc = now.toISOString();
        saveData(data);
        return data;
    }

    // Get trend data (last 30 days)
    function getTrend() {
        var data = getData();
        var now = new Date();
        var thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        return data.entries.filter(function(e) {
            return new Date(e.date) >= thirtyDaysAgo;
        });
    }

    // Get summary stats
    function getSummary() {
        var data = getData();
        if (data.entries.length === 0) return null;

        var latest = data.entries[data.entries.length - 1];
        var totalTracked = data.entries.length;
        var totalPotentialSavings = 0;
        var modelsUsed = Object.keys(data.models).length;

        data.entries.forEach(function(e) {
            totalPotentialSavings += e.bestSaving;
        });

        // Calculate monthly trend
        var monthlySpend = latest.spend;
        var cheapestAlternative = latest.alternatives.length > 0 ? latest.alternatives[0] : null;
        var monthlySaving = cheapestAlternative ? cheapestAlternative.saveMo : 0;

        return {
            totalTracked: totalTracked,
            modelsUsed: modelsUsed,
            currentSpend: monthlySpend,
            monthlySaving: monthlySaving,
            annualSaving: monthlySaving * 12,
            cheapestModel: cheapestAlternative ? cheapestAlternative.name : null,
            lastCalc: latest.date,
            recentEntries: data.entries.slice(-7)
        };
    }

    // Render trend chart (ASCII-style mini chart)
    function renderTrendChart(containerId) {
        var container = document.getElementById(containerId);
        if (!container) return;

        var trend = getTrend();
        if (trend.length < 2) {
            container.innerHTML = '<div style="text-align:center;color:#64748b;font-size:13px;padding:20px;">Track 2+ calculations to see your spending trend</div>';
            return;
        }

        // Group by day
        var dailySpend = {};
        trend.forEach(function(e) {
            var day = e.date.split('T')[0];
            dailySpend[day] = e.spend;
        });

        var days = Object.keys(dailySpend).sort();
        var spends = days.map(function(d) { return dailySpend[d]; });
        var maxSpend = Math.max.apply(null, spends);
        var minSpend = Math.min.apply(null, spends);

        // Build mini chart
        var chartHtml = '<div style="display:flex;align-items:flex-end;gap:3px;height:60px;padding:8px 0;">';
        var barWidth = Math.max(8, Math.floor(200 / days.length));
        for (var i = 0; i < days.length; i++) {
            var h = maxSpend > minSpend ?
                Math.max(8, ((spends[i] - minSpend) / (maxSpend - minSpend)) * 50 + 10) :
                30;
            var color = i === days.length - 1 ? '#22c55e' : '#6366f1';
            chartHtml += '<div style="width:' + barWidth + 'px;height:' + h + 'px;background:' + color + ';border-radius:3px 3px 0 0;transition:height 0.3s;" title="' + days[i] + ': $' + Math.round(spends[i]) + '"></div>';
        }
        chartHtml += '</div>';

        // Trend indicator
        var firstHalf = spends.slice(0, Math.floor(spends.length / 2));
        var secondHalf = spends.slice(Math.floor(spends.length / 2));
        var avgFirst = firstHalf.reduce(function(a, b) { return a + b; }, 0) / firstHalf.length;
        var avgSecond = secondHalf.reduce(function(a, b) { return a + b; }, 0) / secondHalf.length;
        var trendDir = avgSecond < avgFirst ? '↓' : avgSecond > avgFirst ? '↑' : '→';
        var trendColor = avgSecond < avgFirst ? '#22c55e' : avgSecond > avgFirst ? '#ef4444' : '#94a3b8';
        var trendPct = avgFirst > 0 ? Math.abs(Math.round(((avgSecond - avgFirst) / avgFirst) * 100)) : 0;

        chartHtml += '<div style="text-align:center;font-size:12px;color:' + trendColor + ';margin-top:4px;">';
        chartHtml += 'Spending trend: <strong>' + trendDir + ' ' + trendPct + '%</strong>';
        chartHtml += '</div>';

        container.innerHTML = chartHtml;
    }

    // Render summary dashboard
    function renderDashboard(containerId) {
        var container = document.getElementById(containerId);
        if (!container) return;

        var summary = getSummary();
        if (!summary) {
            container.innerHTML = '<div style="text-align:center;color:#64748b;font-size:13px;padding:20px;">No cost data tracked yet. Use the calculator above to start tracking.</div>';
            return;
        }

        var html = '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:16px;">';
        html += '<div style="background:#0f172a;border:1px solid #1e293b;border-radius:8px;padding:12px;text-align:center;">';
        html += '<div style="font-size:20px;font-weight:800;color:#22c55e;">$' + Math.round(summary.currentSpend).toLocaleString() + '</div>';
        html += '<div style="font-size:11px;color:#64748b;">current monthly spend</div></div>';

        html += '<div style="background:#0f172a;border:1px solid #1e293b;border-radius:8px;padding:12px;text-align:center;">';
        html += '<div style="font-size:20px;font-weight:800;color:#6366f1;">$' + Math.round(summary.monthlySaving).toLocaleString() + '</div>';
        html += '<div style="font-size:11px;color:#64748b;">potential monthly saving</div></div>';

        html += '<div style="background:#0f172a;border:1px solid #1e293b;border-radius:8px;padding:12px;text-align:center;">';
        html += '<div style="font-size:20px;font-weight:800;color:#f59e0b;">$' + Math.round(summary.annualSaving).toLocaleString() + '</div>';
        html += '<div style="font-size:11px;color:#64748b;">annual savings opportunity</div></div>';

        html += '<div style="background:#0f172a;border:1px solid #1e293b;border-radius:8px;padding:12px;text-align:center;">';
        html += '<div style="font-size:20px;font-weight:800;color:#e2e8f0;">' + summary.totalTracked + '</div>';
        html += '<div style="font-size:11px;color:#64748b;">calculations tracked</div></div>';
        html += '</div>';

        if (summary.cheapestModel) {
            html += '<div style="text-align:center;padding:10px;background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.2);border-radius:8px;font-size:13px;color:#94a3b8;">';
            html += 'Best alternative: <strong style="color:#22c55e;">' + summary.cheapestModel + '</strong>';
            html += '</div>';
        }

        container.innerHTML = html;
    }

    // Hook into flash-19 calculator
    function hookCalculator() {
        var origCalcSavings = window.calcSavings;
        if (typeof origCalcSavings !== 'function') return;

        window.calcSavings = function() {
            origCalcSavings();

            // After calculator runs, record the calculation with alternatives
            var modelKey = document.getElementById('calc-model');
            var spend = document.getElementById('calc-spend');
            if (!modelKey || !spend) return;

            var key = modelKey.value;
            var amount = parseFloat(spend.value) || 500;
            var models = window.MODELS || {};
            var cur = models[key];
            if (!cur) return;

            // Calculate alternatives from MODELS data (same logic as flash-19 calculator)
            var curBlended = cur.input * 0.85 + cur.output * 0.15;
            var totalTokens = (amount / curBlended) * 1000000;
            var alternatives = [];

            for (var k in models) {
                if (k === key) continue;
                var m = models[k];
                var cost = (totalTokens * (m.input * 0.85 + m.output * 0.15)) / 1000000;
                var saveMo = amount - cost;
                if (saveMo > 0) {
                    alternatives.push({
                        name: m.name, provider: m.provider, cost: cost, saveMo: saveMo
                    });
                }
            }
            alternatives.sort(function(a, b) { return b.saveMo - a.saveMo; });

            recordCalculation(key, cur.name, cur.provider, amount, alternatives);
            renderDashboard('cost-tracker-dashboard');
            renderTrendChart('cost-tracker-trend');

            // Track event
            if (typeof gtag === 'function') {
                gtag('event', 'cost_tracked', { model: key, spend: amount, alternatives: alternatives.length });
            }
        };
    }

    // Auto-init on flash-19 page
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            if (document.getElementById('cost-tracker-dashboard')) {
                renderDashboard('cost-tracker-dashboard');
                renderTrendChart('cost-tracker-trend');
                hookCalculator();
            }
        });
    } else {
        if (document.getElementById('cost-tracker-dashboard')) {
            renderDashboard('cost-tracker-dashboard');
            renderTrendChart('cost-tracker-trend');
            hookCalculator();
        }
    }

    // Expose API
    window.APcostTracker = {
        record: recordCalculation,
        getSummary: getSummary,
        getTrend: getTrend,
        renderDashboard: renderDashboard,
        renderTrendChart: renderTrendChart
    };
})();
