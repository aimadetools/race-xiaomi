/**
 * Product Hunt Launch Badge
 * Adds a "Featured on Product Hunt" badge to the page.
 * Include this script on any page where you want the badge to appear.
 * Usage: <script src="/ph-badge.js"></script>
 * Optional: <div id="ph-badge-mount"></div> to control placement.
 */
(function() {
  'use strict';

  // Only show after launch day (Jul 15, 2026 midnight PT)
  var launchDate = new Date('2026-07-15T00:00:00-07:00');
  if (new Date() < launchDate) return;

  // Don't show if dismissed
  if (localStorage.getItem('apipulse_ph_badge_dismissed')) return;

  var badge = document.createElement('a');
  badge.href = '/ph.html';
  badge.title = 'Featured on Product Hunt';
  badge.setAttribute('aria-label', 'Featured on Product Hunt');
  badge.style.cssText = [
    'display:inline-flex',
    'align-items:center',
    'gap:8px',
    'background:#ff6154',
    'color:white',
    'text-decoration:none',
    'padding:6px 14px',
    'border-radius:8px',
    'font-family:-apple-system,BlinkMacSystemFont,sans-serif',
    'font-size:13px',
    'font-weight:600',
    'transition:all 0.2s',
    'box-shadow:0 2px 8px rgba(255,97,84,0.3)',
    'position:relative'
  ].join(';');

  badge.innerHTML = [
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="flex-shrink:0">',
    '<path d="M13.604 8.4h-3.403V12h3.403c1.002 0 1.801-.799 1.801-1.8s-.799-1.8-1.801-1.8zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.403V18H7.801V6h5.803c2.319 0 4.2 1.881 4.2 4.2s-1.881 4.2-4.2 4.2z" fill="white"/>',
    '</svg>',
    '<span>Featured on Product Hunt</span>'
  ].join('');

  // Hover effect
  badge.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 4px 16px rgba(255,97,84,0.4)';
  });
  badge.addEventListener('mouseleave', function() {
    this.style.transform = '';
    this.style.boxShadow = '0 2px 8px rgba(255,97,84,0.3)';
  });

  // Track clicks
  badge.addEventListener('click', function() {
    if (window.trackEvent) {
      window.trackEvent('ph_badge_clicked', { source: 'ph_badge', page: location.pathname });
    }
  });

  // Mount
  var mount = document.getElementById('ph-badge-mount');
  if (mount) {
    mount.appendChild(badge);
  } else {
    // Default: fixed bottom-right corner
    badge.style.cssText += [
      'position:fixed',
      'bottom:20px',
      'right:20px',
      'z-index:9998'
    ].join(';');
    document.body.appendChild(badge);
  }
})();
