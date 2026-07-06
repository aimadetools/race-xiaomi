// APIpulse — Comparison Table Gate (Session 1022, A/B test Session 1037, savings preview Session 1041)
// Automatically gates comparison table rows on content pages.
// Shows top 3 rows free, gates remaining rows behind Pro CTA.
// Session 1041: Extracts pricing from hidden rows to show specific savings in gate CTA.
// Usage: <script src="comparison-gate.js" defer></script>
// Add to comparison pages that have pricing tables.

(function() {
    'use strict';

    // Configuration
    var FREE_ROWS = 3;
    var FLASH_LINK = 'flash-19.html?from=comparison_gate';
    var POST_EXPIRY_LINK = 'go.html?from=comparison_gate';

    // A/B test: 3 CTA text variants (Session 1037)
    // Persisted in localStorage so returning visitors see the same variant
    var CTA_VARIANTS = [
        { id: 'a', text: 'See All Models + 3 Bonuses — {priceLabel} {price}' },
        { id: 'b', text: 'Find Your Biggest Savings + Bonuses — {priceLabel} {price}' },
        { id: 'c', text: 'Unlock All {count} Models + 3 Bonuses — {priceLabel} {price}' }
    ];

    function getCTAVariant() {
        try {
            var stored = localStorage.getItem('ap_cta_variant');
            if (stored) {
                for (var i = 0; i < CTA_VARIANTS.length; i++) {
                    if (CTA_VARIANTS[i].id === stored) return CTA_VARIANTS[i];
                }
            }
        } catch(e) {}
        // Random assignment (seeded by session for consistency)
        var idx = Math.floor(Math.random() * CTA_VARIANTS.length);
        var variant = CTA_VARIANTS[idx];
        try { localStorage.setItem('ap_cta_variant', variant.id); } catch(e) {}
        return variant;
    }

    var activeVariant = getCTAVariant();

    document.addEventListener('DOMContentLoaded', function() {
        // Find all pricing tables (tables with model-name cells)
        var tables = document.querySelectorAll('table');
        var gated = false;
        var savingsHintShown = false;

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

            // Extract pricing data from ALL rows (visible + hidden) before hiding
            var allRowData = [];
            rows.forEach(function(row, index) {
                var nameCell = row.querySelector('.model-name');
                if (!nameCell) return;
                var cells = row.querySelectorAll('td');
                var inputPrice = null;
                // Input price is typically in the 4th cell (index 3)
                if (cells.length >= 4) {
                    var priceText = cells[3].textContent.trim();
                    var match = priceText.match(/\$([\d.]+)/);
                    if (match) inputPrice = parseFloat(match[1]);
                }
                allRowData.push({
                    name: nameCell.textContent.trim(),
                    price: inputPrice,
                    index: index,
                    hidden: index >= FREE_ROWS
                });
            });

            // Hide rows beyond FREE_ROWS
            var hiddenCount = 0;
            rows.forEach(function(row, index) {
                if (index >= FREE_ROWS) {
                    row.style.display = 'none';
                    row.setAttribute('data-gated', 'true');
                    hiddenCount++;
                }
            });

            // Calculate savings preview from hidden rows
            var hiddenData = allRowData.filter(function(r) { return r.hidden && r.price !== null; });
            var visibleData = allRowData.filter(function(r) { return !r.hidden && r.price !== null; });
            var savingsHint = '';

            if (hiddenData.length > 0 && visibleData.length > 0) {
                // Sort hidden by price ascending to find cheapest
                hiddenData.sort(function(a, b) { return a.price - b.price; });
                // Sort visible by price descending to find most expensive
                visibleData.sort(function(a, b) { return b.price - a.price; });

                var cheapestHidden = hiddenData[0];
                var mostExpensiveVisible = visibleData[0];

                if (cheapestHidden.price < mostExpensiveVisible.price) {
                    var savingsPct = Math.round((1 - cheapestHidden.price / mostExpensiveVisible.price) * 100);
                    savingsHint = '<div style="margin-bottom:8px;font-size:13px;color:#22c55e;font-weight:600;">💡 ' +
                        cheapestHidden.name + ' ($' + cheapestHidden.price.toFixed(2) + '/1M) is ' +
                        savingsPct + '% cheaper than ' + mostExpensiveVisible.name + '</div>';
                    savingsHintShown = true;
                } else {
                    // Hidden models are all more expensive — show value of seeing ALL models
                    var hiddenRange = hiddenData[0].price.toFixed(2) + '–$' + hiddenData[hiddenData.length-1].price.toFixed(2);
                    savingsHint = '<div style="margin-bottom:8px;font-size:13px;color:#94a3b8;">📊 Hidden models range: $' + hiddenRange + '/1M — find the best fit for your workload</div>';
                    savingsHintShown = true;
                }
            }

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

            var ctaText = activeVariant.text
                .replace('{priceLabel}', priceLabel)
                .replace('{price}', price)
                .replace('{count}', '49');

            gateCell.innerHTML =
                '<div style="margin-bottom:10px;">' +
                '<span style="font-size:14px;color:#94a3b8;">🔒 ' + hiddenCount + ' more model' + (hiddenCount !== 1 ? 's' : '') + ' — ranked by cost, with migration code</span>' +
                '</div>' +
                savingsHint +
                (window.DEAL_EXPIRED ? '' : '<div style="margin-bottom:8px;font-size:12px;color:#ef4444;font-weight:600;">⏰ Flash sale ends in <span class="gate-countdown" data-variant="' + activeVariant.id + '">loading...</span> — then $49</div>') +
                (window.DEAL_EXPIRED ? '' : '<div style="margin-bottom:10px;font-size:11px;color:#a5b4fc;font-weight:600;">🎁 Includes 3 bonuses ($49 value) — bonus timer: <span class="gate-bonus-timer">loading...</span></div>') +
                '<a href="' + link + '" style="display:inline-block;padding:12px 24px;background:linear-gradient(135deg,#22c55e,#16a34a);color:white;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;transition:all 0.2s;box-shadow:0 4px 16px rgba(34,197,94,0.3);" onclick="if(typeof gtag===\'function\')gtag(\'event\',\'comparison_gate_clicked\',{variant:\'' + activeVariant.id + '\'});">' +
                ctaText + '</a>' +
                '<div style="font-size:11px;color:#475569;margin-top:6px;">One-time payment · Lifetime access · 14-day refund</div>';

            gateRow.appendChild(gateCell);
            table.querySelector('tbody').appendChild(gateRow);
        });

        // Also gate calculator results if present
        var calcResults = document.getElementById('agentResults') || document.querySelector('.calc-results');
        if (calcResults) {
            gateCalculatorResults(calcResults);
        }

        // Track gate shown with A/B variant + savings preview
        if (gated && typeof gtag === 'function') {
            gtag('event', 'comparison_gate_shown', {
                page: location.pathname,
                variant: activeVariant.id,
                has_savings_hint: savingsHintShown
            });
        }

        // Update countdown timers in gate CTAs
        if (gated && !window.DEAL_EXPIRED) {
            var deadline = new Date('2026-07-12T23:59:59Z');
            function updateGateCountdowns() {
                var diff = deadline - new Date();
                var countdowns = document.querySelectorAll('.gate-countdown');
                if (diff <= 0) {
                    countdowns.forEach(function(el) { el.textContent = 'EXPIRED'; });
                    return;
                }
                var d = Math.floor(diff / 86400000);
                var h = Math.floor((diff % 86400000) / 3600000);
                var m = Math.floor((diff % 3600000) / 60000);
                var timeStr = d + 'd ' + h.toString().padStart(2,'0') + 'h ' + m.toString().padStart(2,'0') + 'm';
                countdowns.forEach(function(el) { el.textContent = timeStr; });
            }
            updateGateCountdowns();
            setInterval(updateGateCountdowns, 60000); // Update every minute

            // 48-hour bonus timer (Session 1040)
            var BONUS_KEY = 'flash19_bonus_deadline';
            var bonusDeadline = localStorage.getItem(BONUS_KEY);
            var now = Date.now();
            if (!bonusDeadline || parseInt(bonusDeadline) < now) {
                bonusDeadline = now + (48 * 60 * 60 * 1000);
                localStorage.setItem(BONUS_KEY, bonusDeadline.toString());
            } else {
                bonusDeadline = parseInt(bonusDeadline);
            }
            function updateGateBonusTimers() {
                var diff = bonusDeadline - Date.now();
                var timers = document.querySelectorAll('.gate-bonus-timer');
                if (diff <= 0) {
                    timers.forEach(function(el) { el.textContent = 'EXPIRED'; });
                    return;
                }
                var h = Math.floor(diff / 3600000);
                var m = Math.floor((diff % 3600000) / 60000);
                var s = Math.floor((diff % 60000) / 1000);
                var timeStr = h.toString().padStart(2,'0') + 'h ' + m.toString().padStart(2,'0') + 'm ' + s.toString().padStart(2,'0') + 's';
                timers.forEach(function(el) { el.textContent = timeStr; });
            }
            updateGateBonusTimers();
            setInterval(updateGateBonusTimers, 1000);
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
                var calcCTA = 'Unlock Full Results — ' + price;
                gateDiv.innerHTML =
                    '<div style="font-size:14px;color:#94a3b8;margin-bottom:10px;">🔒 See all results with Pro</div>' +
                    '<a href="' + link + '" style="display:inline-block;padding:10px 20px;background:#6366f1;color:white;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;" onclick="if(typeof gtag===\'function\')gtag(\'event\',\'calc_gate_clicked\',{variant:\'' + activeVariant.id + '\'});">' +
                    calcCTA + '</a>';
                container.appendChild(gateDiv);
            });
        });

        observer.observe(container, { childList: true, subtree: true });
    }
})();
