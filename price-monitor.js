// APIpulse — Browser-Based Price Monitor
// Tracks AI model prices in localStorage, detects changes, shows notifications.
// No email required — works entirely in the browser.

(function() {
    var WATCHED_KEY = 'apipulse_watched_models';
    var SNAPSHOTS_KEY = 'apipulse_price_snapshots';
    var ALERTS_KEY = 'apipulse_price_alerts';
    var NOTIFIED_KEY = 'apipulse_notified_alerts';

    // Get watched model IDs
    function getWatched() {
        try { return JSON.parse(localStorage.getItem(WATCHED_KEY) || '[]'); }
        catch(e) { return []; }
    }

    function setWatched(ids) {
        localStorage.setItem(WATCHED_KEY, JSON.stringify(ids));
    }

    function isWatching(modelId) {
        return getWatched().indexOf(modelId) !== -1;
    }

    function toggleWatch(modelId) {
        var watched = getWatched();
        var idx = watched.indexOf(modelId);
        if (idx === -1) {
            watched.push(modelId);
        } else {
            watched.splice(idx, 1);
        }
        setWatched(watched);
        return idx === -1; // true if now watching
    }

    // Get stored price snapshots (what we last saw)
    function getSnapshots() {
        try { return JSON.parse(localStorage.getItem(SNAPSHOTS_KEY) || '{}'); }
        catch(e) { return {}; }
    }

    function saveSnapshots(snapshots) {
        localStorage.setItem(SNAPSHOTS_KEY, JSON.stringify(snapshots));
    }

    // Get price change alerts history
    function getAlerts() {
        try { return JSON.parse(localStorage.getItem(ALERTS_KEY) || '[]'); }
        catch(e) { return []; }
    }

    function saveAlerts(alerts) {
        // Keep last 50 alerts
        if (alerts.length > 50) alerts = alerts.slice(0, 50);
        localStorage.setItem(ALERTS_KEY, JSON.stringify(alerts));
    }

    function getNotified() {
        try { return JSON.parse(localStorage.getItem(NOTIFIED_KEY) || '[]'); }
        catch(e) { return []; }
    }

    function saveNotified(ids) {
        localStorage.setItem(NOTIFIED_KEY, JSON.stringify(ids));
    }

    // Check for price changes against stored snapshots
    // Returns array of change objects: { modelId, name, provider, oldInput, newInput, oldOutput, newOutput, direction }
    function detectChanges() {
        if (typeof API_MODELS === 'undefined') return [];
        var snapshots = getSnapshots();
        var changes = [];
        var watched = getWatched();

        // Only check watched models (or all if none watched)
        var models = watched.length > 0
            ? API_MODELS.filter(function(m) { return watched.indexOf(m.id) !== -1; })
            : API_MODELS.filter(function(m) { return !m.deprecated; });

        models.forEach(function(model) {
            var prev = snapshots[model.id];
            if (prev) {
                var inputChanged = Math.abs(prev.input - model.input) > 0.001;
                var outputChanged = Math.abs(prev.output - model.output) > 0.001;
                if (inputChanged || outputChanged) {
                    var direction = (model.input + model.output) < (prev.input + prev.output) ? 'price_drop' : 'price_increase';
                    changes.push({
                        modelId: model.id,
                        name: model.name,
                        provider: model.provider,
                        oldInput: prev.input,
                        newInput: model.input,
                        oldOutput: prev.output,
                        newOutput: model.output,
                        direction: direction,
                        timestamp: Date.now()
                    });
                }
            }
        });

        return changes;
    }

    // Save current prices as new snapshots
    function snapshotCurrent() {
        if (typeof API_MODELS === 'undefined') return;
        var snapshots = getSnapshots();
        API_MODELS.forEach(function(model) {
            snapshots[model.id] = { input: model.input, output: model.output, name: model.name, provider: model.provider };
        });
        saveSnapshots(snapshots);
    }

    // Process changes: save alerts, send notifications
    function processChanges(changes) {
        if (!changes.length) return;
        var alerts = getAlerts();
        var notified = getNotified();

        changes.forEach(function(change) {
            // Add to alerts history
            alerts.unshift(change);

            // Send browser notification if permission granted
            var notifKey = change.modelId + '_' + change.timestamp;
            if (Notification && Notification.permission === 'granted' && notified.indexOf(notifKey) === -1) {
                var title = change.direction === 'price_drop'
                    ? '📉 Price Drop: ' + change.name
                    : '📈 Price Increase: ' + change.name;
                var body = change.direction === 'price_drop'
                    ? change.provider + ' ' + change.name + ' dropped from $' + change.oldOutput.toFixed(2) + ' to $' + change.newOutput.toFixed(2) + '/1M output'
                    : change.provider + ' ' + change.name + ' increased from $' + change.oldOutput.toFixed(2) + ' to $' + change.newOutput.toFixed(2) + '/1M output';
                try {
                    new Notification(title, { body: body, icon: '/favicon.svg', tag: notifKey });
                    notified.push(notifKey);
                } catch(e) {}
            }
        });

        saveAlerts(alerts);
        saveNotified(notified);
    }

    // Run a full check: detect changes, process them, update snapshots
    function runCheck() {
        var changes = detectChanges();
        processChanges(changes);
        snapshotCurrent();
        return changes;
    }

    // Request notification permission
    function requestPermission() {
        if (!Notification) return Promise.resolve('unsupported');
        if (Notification.permission === 'granted') return Promise.resolve('granted');
        if (Notification.permission === 'denied') return Promise.resolve('denied');
        return Notification.requestPermission();
    }

    // Get unread alert count
    function getUnreadCount() {
        var alerts = getAlerts();
        var notified = getNotified();
        return alerts.filter(function(a) {
            return notified.indexOf(a.modelId + '_' + a.timestamp) === -1;
        }).length;
    }

    // Mark all as read
    function markAllRead() {
        var alerts = getAlerts();
        var notified = getNotified();
        alerts.forEach(function(a) {
            var key = a.modelId + '_' + a.timestamp;
            if (notified.indexOf(key) === -1) notified.push(key);
        });
        saveNotified(notified);
    }

    // Initialize: snapshot current prices on first visit
    function init() {
        var snapshots = getSnapshots();
        if (Object.keys(snapshots).length === 0) {
            snapshotCurrent();
        }
    }

    // Auto-check on page load
    init();

    // Export public API
    window.PriceMonitor = {
        getWatched: getWatched,
        toggleWatch: toggleWatch,
        isWatching: isWatching,
        detectChanges: detectChanges,
        runCheck: runCheck,
        getAlerts: getAlerts,
        getUnreadCount: getUnreadCount,
        markAllRead: markAllRead,
        requestPermission: requestPermission,
        snapshotCurrent: snapshotCurrent
    };
})();
