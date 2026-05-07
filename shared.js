// Theme toggle
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const theme = document.documentElement.getAttribute('data-theme');
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    // Check if using SVG icons (newer pages)
    const moonSvg = btn.querySelector('.moon');
    const sunSvg = btn.querySelector('.sun');
    if (moonSvg && sunSvg) {
        moonSvg.style.display = theme === 'dark' ? 'block' : 'none';
        sunSvg.style.display = theme === 'light' ? 'block' : 'none';
    } else {
        btn.textContent = theme === 'light' ? '☀️' : '🌙';
    }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon();

// Mobile nav toggle
function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    if (navLinks && hamburger) {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
    }
}

// Close mobile nav when clicking a link
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            if (navLinks) navLinks.classList.remove('open');
            if (hamburger) hamburger.classList.remove('open');
        });
    });
});

// Back to top button
window.addEventListener('scroll', () => {
    const btn = document.querySelector('.back-to-top');
    if (btn) btn.classList.toggle('visible', window.scrollY > 400);
});

// Footer share CTA
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    if (!footer) return;
    const shareDiv = document.createElement('div');
    shareDiv.style.cssText = 'display:flex;align-items:center;justify-content:center;gap:12px;margin-top:16px;padding-top:16px;border-top:1px solid var(--border);flex-wrap:wrap;';
    shareDiv.innerHTML = '<span style="font-size:13px;color:var(--text-muted);font-weight:600;">Share APIpulse:</span>' +
        '<a href="https://twitter.com/intent/tweet?text=Compare%20AI%20API%20pricing%20across%2033%20models%20from%2010%20providers&url=https%3A%2F%2Fgetapipulse.com" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:4px;padding:6px 12px;border-radius:6px;border:1px solid var(--border);background:var(--bg-secondary);color:var(--text-primary);font-size:12px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--border)\'"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>X</a>' +
        '<a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fgetapipulse.com" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:4px;padding:6px 12px;border-radius:6px;border:1px solid var(--border);background:var(--bg-secondary);color:var(--text-primary);font-size:12px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--border)\'"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>LinkedIn</a>';
    footer.insertBefore(shareDiv, footer.firstChild);
});

// Email capture
async function saveEmail(e) {
    e.preventDefault();
    const email = document.getElementById('email-input');
    const msgEl = document.getElementById('email-msg');
    if (!email || !msgEl) return;
    const btn = e.target.querySelector('button[type="submit"]');

    btn.disabled = true;
    btn.textContent = 'Subscribing...';

    try {
        const res = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.value })
        });
        const data = await res.json();

        msgEl.textContent = data.message || 'Thanks! You\'ll be notified of pricing changes.';
        msgEl.style.color = 'var(--green)';
        msgEl.style.display = 'block';
        email.value = '';
        if (window.trackEvent) window.trackEvent('email_signup');
    } catch (err) {
        const emails = JSON.parse(localStorage.getItem('apipulse_emails') || '[]');
        if (!emails.includes(email.value)) {
            emails.push(email.value);
            localStorage.setItem('apipulse_emails', JSON.stringify(emails));
        }
        msgEl.textContent = 'Saved! We\'ll process your subscription when the service is available.';
        msgEl.style.color = 'var(--green)';
        msgEl.style.display = 'block';
        email.value = '';
        if (window.trackEvent) window.trackEvent('email_signup');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Subscribe';
    }
}

// Exit-intent popup for email capture
(function() {
    if (window.location.pathname.includes('unsubscribe') || window.location.pathname.includes('ph.html')) return;
    if (localStorage.getItem('apipulse_popup_dismissed')) return;

    let popupShown = false;
    function showExitPopup() {
        if (popupShown || localStorage.getItem('apipulse_popup_dismissed')) return;
        popupShown = true;

        const overlay = document.createElement('div');
        overlay.id = 'exit-popup-overlay';
        overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn 0.3s ease;';

        const popup = document.createElement('div');
        popup.style.cssText = 'background:var(--bg-card);border:1px solid var(--accent);border-radius:16px;padding:40px;max-width:440px;width:100%;position:relative;box-shadow:0 24px 64px rgba(0,0,0,0.5);';

        popup.innerHTML = `
            <button onclick="document.getElementById('exit-popup-overlay').remove();localStorage.setItem('apipulse_popup_dismissed','1');" style="position:absolute;top:12px;right:12px;background:none;border:none;color:var(--text-muted);font-size:20px;cursor:pointer;padding:4px 8px;border-radius:6px;" onmouseover="this.style.color='var(--text-primary)'" onmouseout="this.style.color='var(--text-muted)'">&times;</button>
            <div style="text-align:center;">
                <div style="font-size:40px;margin-bottom:16px;">🚀</div>
                <h3 style="font-size:22px;font-weight:700;margin-bottom:8px;">Get 40% off AI API costs</h3>
                <p style="font-size:14px;color:var(--text-secondary);margin-bottom:24px;line-height:1.6;">Join 500+ developers who use our free pricing data to optimize their AI spending. Get notified when prices change.</p>
                <form id="exit-popup-form" style="display:flex;gap:8px;margin-bottom:12px;">
                    <input type="email" id="exit-popup-email" placeholder="you@company.com" required aria-label="Email address"
                        style="flex:1;padding:12px 16px;border-radius:8px;border:1px solid var(--border);background:var(--bg-secondary);color:var(--text-primary);font-size:14px;">
                    <button type="submit" style="background:var(--accent);color:white;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:600;border:none;cursor:pointer;white-space:nowrap;">Get Updates</button>
                </form>
                <p id="exit-popup-msg" style="font-size:13px;color:var(--green);margin-top:8px;display:none;"></p>
                <p style="font-size:12px;color:var(--text-muted);margin-top:12px;">No spam. Unsubscribe anytime.</p>
            </div>
        `;

        overlay.appendChild(popup);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.remove();
                localStorage.setItem('apipulse_popup_dismissed', '1');
            }
        });

        document.getElementById('exit-popup-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            const emailInput = document.getElementById('exit-popup-email');
            const msgEl = document.getElementById('exit-popup-msg');
            const btn = e.target.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.textContent = 'Saving...';
            try {
                const res = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: emailInput.value })
                });
                const data = await res.json();
                msgEl.textContent = data.message || 'Thanks! You\'ll get pricing updates.';
                msgEl.style.color = 'var(--green)';
                msgEl.style.display = 'block';
                emailInput.value = '';
                if (window.trackEvent) window.trackEvent('exit_popup_signup');
                setTimeout(function() { overlay.remove(); localStorage.setItem('apipulse_popup_dismissed', '1'); }, 2000);
            } catch (err) {
                const emails = JSON.parse(localStorage.getItem('apipulse_emails') || '[]');
                if (!emails.includes(emailInput.value)) {
                    emails.push(emailInput.value);
                    localStorage.setItem('apipulse_emails', JSON.stringify(emails));
                }
                msgEl.textContent = 'Saved! We\'ll notify you of pricing changes.';
                msgEl.style.color = 'var(--green)';
                msgEl.style.display = 'block';
                emailInput.value = '';
                if (window.trackEvent) window.trackEvent('exit_popup_signup');
                setTimeout(function() { overlay.remove(); localStorage.setItem('apipulse_popup_dismissed', '1'); }, 2000);
            } finally {
                btn.disabled = false;
                btn.textContent = 'Get Updates';
            }
        });
    }

    document.addEventListener('mouseout', function(e) {
        if (e.clientY <= 0 && !popupShown) showExitPopup();
    });

    // Also show after 45 seconds on mobile (no mouseout on mobile)
    setTimeout(function() {
        if (!popupShown && 'ontouchstart' in window) showExitPopup();
    }, 45000);
})();

// Pricing freshness badge — renders "Updated May 5, 2026" badge into target element
function renderPricingFreshness(containerId) {
    var container = document.getElementById(containerId);
    if (!container || typeof PRICING_LAST_UPDATED === 'undefined') return;
    container.innerHTML = '<span style="display:inline-flex;align-items:center;gap:6px;background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.25);padding:5px 14px;border-radius:100px;font-size:12px;font-weight:600;color:var(--green);">' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' +
        'Pricing updated ' + PRICING_LAST_UPDATED + '</span>';
}

// Product Hunt launch banner (auto-shows May 5-7, 2026)
(function() {
    if (localStorage.getItem('apipulse_ph_banner_dismissed')) return;
    var now = new Date();
    var launchStart = new Date('2026-05-05T00:00:00');
    var launchEnd = new Date('2026-05-10T00:00:00');
    if (now < launchStart || now >= launchEnd) return;
    if (window.location.pathname.includes('ph.html')) return;

    var banner = document.createElement('div');
    banner.id = 'ph-launch-banner';
    banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:200;background:linear-gradient(135deg,#6366f1,#818cf8);color:white;padding:10px 16px;display:flex;align-items:center;justify-content:center;gap:12px;font-size:14px;font-weight:600;box-shadow:0 2px 12px rgba(99,102,241,0.3);';
    banner.innerHTML = '<span>We just launched on Product Hunt!</span>' +
        '<a href="ph.html" style="background:white;color:#6366f1;padding:6px 16px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;">See Launch Page</a>' +
        '<a href="https://www.producthunt.com/posts/apipulse" target="_blank" rel="noopener" style="background:rgba(255,255,255,0.2);color:white;padding:6px 16px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;">Upvote on PH</a>' +
        '<button onclick="document.getElementById(\'ph-launch-banner\').remove();localStorage.setItem(\'apipulse_ph_banner_dismissed\',\'1\');" style="background:none;border:none;color:rgba(255,255,255,0.7);font-size:18px;cursor:pointer;padding:0 4px;" aria-label="Dismiss">&times;</button>';
    document.body.appendChild(banner);
    // Push body content down so banner doesn't overlap nav
    document.body.style.paddingTop = '44px';
})();
