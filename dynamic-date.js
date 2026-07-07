// Sets all .verified-date elements to the actual pricing verification date
document.addEventListener('DOMContentLoaded', function() {
    var els = document.querySelectorAll('.verified-date');
    for (var i = 0; i < els.length; i++) {
        els[i].textContent = 'Jul 7, 2026';
    }
});

// Pricing Freshness Badge — shows "Prices verified Jun 2026" on tool pages
function renderPricingFreshness(containerId) {
    var el = document.getElementById(containerId);
    if (!el || typeof PRICING_LAST_UPDATED === 'undefined') return;
    el.innerHTML = '<span style="display:inline-flex;align-items:center;gap:6px;background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.2);padding:4px 12px;border-radius:100px;font-size:12px;font-weight:600;color:#22c55e;">✓ Prices verified ' + PRICING_LAST_UPDATED + '</span>';
}
