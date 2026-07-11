// APIpulse — Usage Gate for Calculator (DISABLED — pivot S1332)
// All tools are now free with unlimited usage. This file is kept for compatibility.
// Usage tracking still works for analytics, but gating is disabled.

(function() {
    var FREE_LIMIT = Infinity; // Unlimited — all tools free
    var STORAGE_KEY = 'apipulse_calc_usage';

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
        // Track for analytics but never gate
        var usage = getUsage();
        if (usage.models.indexOf(modelId) === -1) {
            usage.models.push(modelId);
            usage.count = usage.models.length;
            saveUsage(usage);
        }
        return false; // Never gated
    }

    function isGated() {
        return false; // All tools free
    }

    function getRemaining() {
        return Infinity; // Unlimited
    }

    // Export for use by calculator pages — all free
    window.APIpulseGate = {
        track: trackCalculation,
        isGated: isGated,
        getRemaining: getRemaining,
        showWall: function() {}, // No-op
        FREE_LIMIT: Infinity
    };

    // Legacy compatibility
    window.dismissUsageGate = function() {};
})();
