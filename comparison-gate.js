// APIpulse — Comparison Table Gate (Session 1022)
// Automatically gates comparison table rows on content pages.
// Shows top 3 rows free, gates remaining rows behind Pro CTA.
// Usage: <script src="comparison-gate.js" defer></script>
// Add to comparison pages that have pricing tables.

(function() {
    'use strict';

    // Configuration
    var FREE_ROWS = 3;
    var FLASH_LINK = 'flash-19.html?from=comparison_gate';
    var POST_EXPIRY_LINK = 'go.html?from=comparison_gate';

    document.addEventListener('DOMContentLoaded', function() {
        // Find all pricing tables (tables with model-name cells)
        var tables = document.querySelectorAll('table');
        var gated = false;

        tables.forEach(function(table) {
            var rows = table.querySelectorAll('tbody tr');
            if (rows.length <= FREE_ROWS) return; // Too few rows to gate

            // Check if this is a pricing table (has .model-name cells specifically)
            // This prevents gating feature-comparison tables (compare-*.html) which use
            // generic td:first-child for labels like "Input Price" — not model names.
            var hasModelNames = false;
            rows.forEach(function(row) {
                var nameCell = row.querySelector('.model-name');
                if (nameCell && nameCell.textContent.trim().length > 2) {
                    hasModelNames = true;
                }
            });
            if (!hasModelNames) return;

            gated = true;

            // Hide rows beyond FREE_ROWS
            var hiddenCount = 0;
            rows.forEach(function(row, index) {
                if (index >= FREE_ROWS) {
                    row.style.display = 'none';
                    row.setAttribute('data-gated', 'true');
                    hiddenCount++;
                }
            });

            // Create gate overlay
            var gateRow = document.createElement('tr');
            gateRow.className = 'comparison-gate-row';
            gateRow.setAttribute('data-gate-for', table.id || 'table');
            var colCount = table.querySelector('tr').children.length;
            var gateCell = document.createElement('td');
            gateCell.setAttribute('colspan', colCount);
            gateCell.style.cssText = 'text-align:center;padding:24px 16px;background:linear-gradient(135deg,rgba(99,102,241,0.06),rgba(99,102,241,0.02));border-top:2px dashed rgba(99,102,241,0.3);';

            var link = window.DEAL_EXPIRED ? POST_EXPIRY_LINK : FLASH_LINK;
            var price = window.DEAL_EXPIRED ? '$49' : '$19';
            var priceLabel = window.DEAL_EXPIRED ? 'Pro' : 'Flash Sale';

            gateCell.innerHTML =
                '<div style="margin-bottom:10px;">' +
                '<span style="font-size:14px;color:#94a3b8;">🔒 ' + hiddenCount + ' more model' + (hiddenCount !== 1 ? 's' : '') + ' available with Pro</span>' +
                '</div>' +
                '<a href="' + link + '" style="display:inline-block;padding:12px 24px;background:linear-gradient(135deg,#6366f1,#4f46e5);color:white;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;transition:all 0.2s;box-shadow:0 4px 16px rgba(99,102,241,0.3);" onclick="if(typeof gtag===\'function\')gtag(\'event\',\'comparison_gate_clicked\',{});">' +
                'See All Models — ' + priceLabel + ' ' + price + '</a>' +
                '<div style="font-size:11px;color:#475569;margin-top:8px;">One-time payment · Lifetime access · 14-day refund</div>';

            gateRow.appendChild(gateCell);
            table.querySelector('tbody').appendChild(gateRow);
        });

        // Also gate calculator results if present
        var calcResults = document.getElementById('agentResults') || document.querySelector('.calc-results');
        if (calcResults) {
            gateCalculatorResults(calcResults);
        }

        // Track gate shown
        if (gated && typeof gtag === 'function') {
            gtag('event', 'comparison_gate_shown', { page: location.pathname });
        }
    });

    function gateCalculatorResults(container) {
        // After calculator runs, gate results beyond top 3
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function() {
                var items = container.querySelectorAll('.calc-result-item, .result-row, [class*="result"]');
                if (items.length <= FREE_ROWS) return;

                // Check if already gated
                if (container.querySelector('.calc-gate-cta')) return;

                items.forEach(function(item, index) {
                    if (index >= FREE_ROWS) {
                        item.style.display = 'none';
                        item.setAttribute('data-gated', 'true');
                    }
                });

                var link = window.DEAL_EXPIRED ? POST_EXPIRY_LINK : FLASH_LINK;
                var price = window.DEAL_EXPIRED ? '$49' : '$19';

                var gateDiv = document.createElement('div');
                gateDiv.className = 'calc-gate-cta';
                gateDiv.style.cssText = 'text-align:center;padding:20px;margin-top:12px;background:linear-gradient(135deg,rgba(99,102,241,0.06),rgba(99,102,241,0.02));border:1px dashed rgba(99,102,241,0.3);border-radius:12px;';
                gateDiv.innerHTML =
                    '<div style="font-size:14px;color:#94a3b8;margin-bottom:10px;">🔒 See all results with Pro</div>' +
                    '<a href="' + link + '" style="display:inline-block;padding:10px 20px;background:#6366f1;color:white;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;" onclick="if(typeof gtag===\'function\')gtag(\'event\',\'calc_gate_clicked\',{});">' +
                    'Unlock Full Results — ' + price + '</a>';
                container.appendChild(gateDiv);
            });
        });

        observer.observe(container, { childList: true, subtree: true });
    }
})();
