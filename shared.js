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

// Deal expiry check — July 12, 2026 23:59:59 UTC
// After expiry: price goes to $49, trial CTAs hidden, deal banners switched
window.DEAL_DEADLINE = new Date('2026-07-12T23:59:59Z').getTime();
window.DEAL_EXPIRED = Date.now() > window.DEAL_DEADLINE;
window.DEAL_DAYS_LEFT = Math.max(0, Math.ceil((window.DEAL_DEADLINE - Date.now()) / 86400000));

// Pricing — standardized on $29 (Session 910: killed A/B test, $19 variant never converted)
// NOTE: deal.html is EXCLUDED — it has its own $29-only conversion flow with countdown,
// value stack, and savings calculator. Overriding the price there breaks the messaging.
// Session 877: After July 12 expiry, all prices become $49.
(function(){
    var DEAL_SKIP = location.pathname.indexOf('deal.html') !== -1;
    var GO_SKIP = location.pathname.indexOf('go.html') !== -1;
    var FLASH19_SKIP = location.pathname.indexOf('flash-19.html') !== -1;
    var CONFIRMED_STRIPE_LINK = 'https://buy.stripe.com/fZu7sL3Gw3GS0RQeoDeEo0a'; // $29 one-time

    // Post-expiry: $49; flash sale (before July 12): $19; fallback $29
    if (window.DEAL_EXPIRED) {
        window._abPrice = 49;
    } else {
        window._abPrice = 19; // Session 984: flash sale price
    }
    window._abStripeLink = CONFIRMED_STRIPE_LINK;
    window._abVariant = 'B'; // standardized

    // Skip price overrides on deal.html, go.html, and flash-19.html
    // deal.html has its own $29 conversion flow
    // go.html has its own A/B pricing + Stripe link handling (Session 891 fix)
    // flash-19.html has its own $19 flash sale pricing (Session 980)
    if (DEAL_SKIP || GO_SKIP || FLASH19_SKIP) return;

    // Update all CTAs on this page to use variant price and link
    document.addEventListener('DOMContentLoaded', function() {
        // Update ALL anchor elements containing $29 — covers nav CTAs, blog CTAs,
        // comparison CTAs, and direct Stripe links
        document.querySelectorAll('a').forEach(function(a) {
            if (a.textContent.includes('$29')) {
                a.textContent = a.textContent.replace('$29', '$' + window._abPrice);
            }
            // Route Stripe checkout links: flash sale → flash-19.html, otherwise → go.html
            // Session 980: $19 flash sale for first revenue
            if (a.href && a.href.includes('buy.stripe.com') && !a.href.includes('go.html') && !a.href.includes('flash-19.html')) {
                var pageName = location.pathname.replace(/^\//, '').replace(/\.html$/, '') || 'home';
                if (!window.DEAL_EXPIRED) {
                    a.href = 'flash-19.html?from=' + encodeURIComponent(pageName);
                } else {
                    a.href = 'go.html?from=' + encodeURIComponent(pageName);
                }
                a.target = '_blank';
                a.rel = 'noopener';
            }
            // Route nav CTAs: flash sale → flash-19.html, otherwise → go.html
            if (a.classList.contains('nav-cta') && a.href && !a.href.includes('go.html') && !a.href.includes('flash-19.html')) {
                if (a.href.includes('pricing.html') || a.href.includes('pro.html') || a.href.includes('compare-plans.html')) {
                    // Session 980: $19 flash sale active — route to flash page
                    if (!window.DEAL_EXPIRED) {
                        a.href = 'flash-19.html?from=nav_cta';
                    } else {
                        a.href = 'go.html?from=nav_cta';
                    }
                    a.target = '_blank';
                    a.rel = 'noopener';
                }
            }
            // Route inline "Go Pro" CTAs: flash sale → flash-19.html, otherwise → go.html
            if (a.href && (a.href.includes('pricing.html') || a.href.includes('pro.html')) && a.textContent.match(/APIpulse Pro|Get Pro|Unlock Pro|Buy Pro/i)) {
                var pageName = location.pathname.replace(/^\//, '').replace(/\.html$/, '') || 'home';
                // Session 980: $19 flash sale active
                if (!window.DEAL_EXPIRED) {
                    a.href = 'flash-19.html?from=' + encodeURIComponent(pageName);
                } else {
                    a.href = 'go.html?from=' + encodeURIComponent(pageName);
                }
                a.target = '_blank';
                a.rel = 'noopener';
            }
            // Session 984: Route go.html CTA links to flash-19.html during flash sale
            if (a.href && a.href.includes('go.html') && !window.DEAL_EXPIRED) {
                var from = new URL(a.href, location.href).searchParams.get('from') || location.pathname.replace(/^\//, '').replace(/\.html$/, '') || 'home';
                a.href = 'flash-19.html?from=' + encodeURIComponent(from);
            }
            // Session 984: Route deal.html banner links to flash-19.html during flash sale
            if (a.href && a.href.includes('deal.html') && !window.DEAL_EXPIRED) {
                a.href = 'flash-19.html?from=banner';
            }
        });

        // Session 984: Intercept exit popup CTAs that link to Stripe during flash sale
        // ~42 pages have exit popups that set href to _abStripeLink ($29 checkout).
        // During flash sale, redirect these to flash-19.html instead.
        if (!window.DEAL_EXPIRED) {
            document.addEventListener('click', function(e) {
                var cta = e.target.closest('#exit-popup-cta, .exit-cta');
                if (!cta) return;
                // If the exit popup links to Stripe, redirect to flash-19.html
                if (cta.href && cta.href.includes('buy.stripe.com')) {
                    e.preventDefault();
                    var from = location.pathname.replace(/^\//, '').replace(/\.html$/, '') || 'home';
                    window.location.href = 'flash-19.html?from=exit_popup_' + encodeURIComponent(from);
                }
            }, true); // Use capture phase to run before the exit popup handler
        }

        // Funnel tracking: Track all clicks on go.html and flash-19.html links
        // This tells us which pages send users to the checkout funnel
        document.addEventListener('click', function(e) {
            var link = e.target.closest('a[href*="go.html"], a[href*="flash-19.html"]');
            if (!link) return;
            var from = new URL(link.href, location.href).searchParams.get('from') || 'unknown';
            var price = window._abPrice || 29;
            var isFlash = link.href.includes('flash-19.html');
            if (typeof gtag === 'function') {
                gtag('event', isFlash ? 'flash_page_click' : 'go_page_click', {
                    from_page: from,
                    link_text: (link.textContent || '').trim().substring(0, 50),
                    ab_price: price,
                    ab_variant: window._abVariant || 'unknown'
                });
            }
        });
        // Update ALL text nodes containing $29 (paragraphs, spans, etc.)
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: function(n) {
                return n.parentNode.tagName === 'SCRIPT' || n.parentNode.tagName === 'STYLE'
                    ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
            }
        });
        var nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(function(node) {
            if (node.nodeValue.indexOf('$29') !== -1) {
                node.nodeValue = node.nodeValue.split('$29').join('$' + window._abPrice);
            }
        });
        // Session 877: Post-expiry — replace "price goes up July 12" across 693 pages
        if (window.DEAL_EXPIRED) {
            nodes.forEach(function(node) {
                var val = node.nodeValue;
                if (val.indexOf('price goes up July 12') !== -1) {
                    node.nodeValue = val.replace(/price goes up July 12/g, 'one-time payment');
                }
                if (val.indexOf('expires July 12') !== -1) {
                    node.nodeValue = val.replace(/expires July 12/g, 'lifetime access');
                }
                // Replace urgency markers that no longer apply
                if (val.indexOf('Limited time:') !== -1) {
                    node.nodeValue = val.replace('Limited time:', 'APIpulse Pro:');
                }
            });
        }
        // Update JSON-LD schema prices
        document.querySelectorAll('script[type="application/ld+json"]').forEach(function(s) {
            try {
                var text = s.textContent;
                if (text.indexOf('"29') !== -1) {
                    s.textContent = text.split('"price":"29').join('"price":"' + window._abPrice);
                    s.textContent = s.textContent.split('"price": "29').join('"price": "' + window._abPrice);
                }
            } catch(e) {}
        });
        // Track pricing view (Session 910: A/B test killed, standardized on $29)
        if (window.trackEvent) window.trackEvent('pricing_view', {price: window._abPrice});
    });
})();

// A/B Test: Exit popup mobile timing — 30s vs 45s vs 60s (runs on every page)
(function(){
    var KEY = 'ab_popup_timing';
    var VARIANTS = {fast: 30000, medium: 45000, slow: 60000};
    var variant = localStorage.getItem(KEY);
    if (!variant || !VARIANTS[variant]) {
        var r = Math.random();
        variant = r < 0.334 ? 'fast' : r < 0.667 ? 'medium' : 'slow';
        localStorage.setItem(KEY, variant);
    }
    window._abPopupTiming = VARIANTS[variant];
    window._abPopupTimingVariant = variant;
    document.addEventListener('DOMContentLoaded', function() {
        if (window.trackEvent) window.trackEvent('ab_popup_timing_assigned', {variant: variant, ms: VARIANTS[variant]});
    });
})();

// A/B Test: Gated recommendations — show 1 free alternative vs 0 free (calculator only)
(function(){
    var KEY = 'ab_gated_recs';
    var VARIANTS = {show_1: 1, show_0: 0};
    var variant = localStorage.getItem(KEY);
    if (!variant || !VARIANTS[variant]) {
        variant = Math.random() < 0.5 ? 'show_1' : 'show_0';
        localStorage.setItem(KEY, variant);
    }
    window._abGatedRecs = VARIANTS[variant];
    window._abGatedRecsVariant = variant;
    document.addEventListener('DOMContentLoaded', function() {
        if (window.trackEvent) window.trackEvent('ab_gated_recs_assigned', {variant: variant, free_count: VARIANTS[variant]});
    });
})();

// Mobile nav toggle
function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    if (navLinks && hamburger) {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
    }
}

// Add Widget and Badges links to nav if missing
document.addEventListener('DOMContentLoaded', () => {
    var navLinks = document.querySelector('.nav-links');
    if (!navLinks || navLinks.querySelector('.nav-more')) return; // Skip if already restructured

    // Add "Model Finder" link after Calculator link
    var hasFinder = navLinks.querySelector('a[href="cheapest-model-finder.html"]');
    if (!hasFinder) {
        var calcLink = navLinks.querySelector('a[href="calculator.html"]');
        if (calcLink) {
            var finderLink = document.createElement('a');
            finderLink.href = 'cheapest-model-finder.html';
            finderLink.textContent = 'Model Finder';
            calcLink.parentNode.insertBefore(finderLink, calcLink.nextSibling);
        }
    }

    // Add "Cost Audit" link after Model Finder link
    var hasAudit = navLinks.querySelector('a[href="cost-audit.html"]');
    if (!hasAudit) {
        var finderLinkEl = navLinks.querySelector('a[href="cheapest-model-finder.html"]');
        if (finderLinkEl) {
            var auditLink = document.createElement('a');
            auditLink.href = 'cost-audit.html';
            auditLink.textContent = 'Cost Audit';
            finderLinkEl.parentNode.insertBefore(auditLink, finderLinkEl.nextSibling);
        }
    }

    // Add Badges link after API link
    var hasBadges = navLinks.querySelector('a[href="badges.html"]');
    if (!hasBadges) {
        var apiLink = navLinks.querySelector('a[href="api-docs.html"]');
        if (apiLink) {
            var badgesLink = document.createElement('a');
            badgesLink.href = 'badges.html';
            badgesLink.textContent = 'Badges';
            apiLink.parentNode.insertBefore(badgesLink, apiLink.nextSibling);
        }
    }

    // Add Widget link after Badges link
    var hasWidget = navLinks.querySelector('a[href="embed.html"]');
    if (!hasWidget) {
        var badgesLinkEl = navLinks.querySelector('a[href="badges.html"]');
        if (badgesLinkEl) {
            var widgetLink = document.createElement('a');
            widgetLink.href = 'embed.html';
            widgetLink.textContent = 'Widgets';
            badgesLinkEl.parentNode.insertBefore(widgetLink, badgesLinkEl.nextSibling);
        }
    }

    // Add Changelog link after Blog link
    var hasChangelog = navLinks.querySelector('a[href="changelog.html"]');
    if (!hasChangelog) {
        var blogLink = navLinks.querySelector('a[href="blog.html"]');
        if (blogLink) {
            var changelogLink = document.createElement('a');
            changelogLink.href = 'changelog.html';
            changelogLink.textContent = 'Changelog';
            blogLink.parentNode.insertBefore(changelogLink, blogLink.nextSibling);
        }
    }

    // Add Teams link after Calculator link
    var hasTeams = navLinks.querySelector('a[href="teams.html"]');
    if (!hasTeams) {
        var calcLink2 = navLinks.querySelector('a[href="calculator.html"]');
        if (calcLink2) {
            var teamsLink = document.createElement('a');
            teamsLink.href = 'teams.html';
            teamsLink.textContent = 'Teams';
            calcLink2.parentNode.insertBefore(teamsLink, calcLink2.nextSibling);
        }
    }

    // Add Terminal link after Live Prices link
    var hasTerminal = navLinks.querySelector('a[href="terminal.html"]');
    if (!hasTerminal) {
        var livePricesLink = navLinks.querySelector('a[href="live-pricing.html"]');
        if (livePricesLink) {
            var terminalLink = document.createElement('a');
            terminalLink.href = 'terminal.html';
            terminalLink.textContent = 'Terminal';
            livePricesLink.parentNode.insertBefore(terminalLink, livePricesLink.nextSibling);
        }
    }
});

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

// Nav Restructuring: Collapse secondary links into "More" dropdown
// Keeps nav clean and CTA prominent for better conversion
(function() {
    var style = document.createElement('style');
    style.textContent = '.nav-more{position:relative;display:inline-block}.nav-more-btn{background:none;border:1px solid var(--border);color:var(--text-secondary);padding:6px 12px;border-radius:6px;font-size:13px;font-weight:500;cursor:pointer;display:flex;align-items:center;gap:4px;transition:all .2s;font-family:inherit}.nav-more-btn:hover{border-color:var(--accent);color:var(--accent)}.nav-more-btn .arrow{font-size:10px;transition:transform .2s}.nav-more.open .nav-more-btn .arrow{transform:rotate(180deg)}.nav-more-dropdown{display:none;position:absolute;top:calc(100% + 6px);right:0;background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:8px 0;min-width:220px;max-height:400px;overflow-y:auto;z-index:1000;box-shadow:0 8px 24px rgba(0,0,0,.2)}.nav-more.open .nav-more-dropdown{display:block}.nav-more-dropdown a{display:block;padding:8px 16px;font-size:13px;color:var(--text-secondary);text-decoration:none;transition:all .15s;white-space:nowrap}.nav-more-dropdown a:hover{background:var(--bg-secondary);color:var(--accent)}.nav-more-divider{height:1px;background:var(--border);margin:4px 0}.nav-cta{display:inline-block!important;padding:8px 18px!important;background:linear-gradient(135deg,var(--accent),#8b5cf6)!important;color:white!important;border-radius:8px!important;font-weight:700!important;font-size:14px!important;border:none!important;text-decoration:none!important;transition:all .2s!important;box-shadow:0 2px 8px rgba(99,102,241,.3)!important}.nav-cta:hover{opacity:.9!important;transform:translateY(-1px)!important;box-shadow:0 4px 12px rgba(99,102,241,.4)!important}@media(max-width:900px){.nav-more-dropdown{right:0;left:auto}}@media(max-width:768px){.nav-more{width:100%}.nav-more-btn{width:100%;justify-content:center;padding:14px 0;font-size:16px;border-bottom:1px solid var(--border);border-radius:0;border-left:none;border-right:none;border-top:none}.nav-more-dropdown{position:static;display:none;box-shadow:none;border:none;border-radius:0;max-height:none;width:100%}.nav-more.open .nav-more-dropdown{display:block}.nav-more-dropdown a{padding:12px 24px;font-size:15px;border-bottom:1px solid var(--border)}}';
    document.head.appendChild(style);

    var ESSENTIAL_HREFS = {
        'calculator.html': 1,
        'live-pricing.html': 1,
        'compare.html': 1,
        'pricing.html': 1,
        'blog.html': 1
    };

    function restructureNav() {
        var navLinks = document.querySelector('.nav-links');
        if (!navLinks) return;
        // Skip if already restructured
        if (navLinks.querySelector('.nav-more')) return;

        var cta = navLinks.querySelector('.nav-cta');
        var themeBtn = navLinks.querySelector('.theme-toggle');
        var links = Array.from(navLinks.querySelectorAll('a:not(.nav-cta)'));
        var essential = [];
        var secondary = [];
        var seen = {};

        links.forEach(function(a) {
            var href = a.getAttribute('href');
            if (!href || seen[href]) { a.remove(); return; }
            seen[href] = 1;
            if (ESSENTIAL_HREFS[href]) {
                essential.push(a);
            } else {
                secondary.push(a);
            }
        });

        if (secondary.length === 0) return;

        // Sort secondary alphabetically
        secondary.sort(function(a, b) {
            return (a.textContent || '').localeCompare(b.textContent || '');
        });

        // Build More dropdown
        var more = document.createElement('div');
        more.className = 'nav-more';
        var btn = document.createElement('button');
        btn.className = 'nav-more-btn';
        btn.innerHTML = 'More <span class="arrow">▾</span>';
        btn.setAttribute('aria-label', 'More navigation links');
        btn.setAttribute('aria-expanded', 'false');
        var dropdown = document.createElement('div');
        dropdown.className = 'nav-more-dropdown';

        secondary.forEach(function(a, i) {
            if (i > 0 && a.textContent.trim().charAt(0).toUpperCase() === a.textContent.trim().charAt(0)) {
                // Add visual grouping for capital-letter starts (tools vs resources)
            }
            dropdown.appendChild(a);
        });

        more.appendChild(btn);
        more.appendChild(dropdown);

        // Rebuild nav: essential links, More dropdown, CTA, theme
        navLinks.innerHTML = '';
        essential.forEach(function(a) { navLinks.appendChild(a); });
        navLinks.appendChild(more);
        if (cta) navLinks.appendChild(cta);
        if (themeBtn) navLinks.appendChild(themeBtn);

        // Toggle dropdown
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            var isOpen = more.classList.toggle('open');
            btn.setAttribute('aria-expanded', isOpen);
        });

        // Close dropdown on outside click
        document.addEventListener('click', function() {
            more.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        });

        // Close mobile nav when clicking More links
        dropdown.querySelectorAll('a').forEach(function(a) {
            a.addEventListener('click', function() {
                var nl = document.querySelector('.nav-links');
                var hm = document.querySelector('.hamburger');
                if (nl) nl.classList.remove('open');
                if (hm) hm.classList.remove('open');
                more.classList.remove('open');
            });
        });
    }

    // Run after all JS-injected links are added
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(restructureNav, 50);
        });
    } else {
        setTimeout(restructureNav, 50);
    }
})();

// Claude 4 Deprecation Banner (pre-deprecation countdown + post-deprecation notice)
document.addEventListener('DOMContentLoaded', () => {
    var deprecationDate = new Date('2026-06-15T00:00:00Z');
    var now = new Date();
    var daysLeft = Math.ceil((deprecationDate - now) / (1000 * 60 * 60 * 24));

    // Don't show on deprecation/migration/emergency pages (they have their own urgency)
    var path = window.location.pathname;
    if (path.includes('deprecation') || path.includes('migration') || path.includes('claude-4-is-down') || path.includes('deal.html') || path.includes('go.html') || path.includes('flash-19.html')) return;

    if (daysLeft > 0 && daysLeft <= 14) {
        // PRE-DEPRECATION: Show countdown banner
        if (localStorage.getItem('apipulse_deprecation_banner_dismissed')) return;
        var urgencyText = daysLeft <= 1 ? 'FINAL DAY' : daysLeft + ' days left';
        var urgencyColor = daysLeft <= 3 ? '#dc2626' : daysLeft <= 7 ? '#ea580c' : '#d97706';
        var bannerLink = daysLeft <= 5 ? 'claude-4-last-chance.html' : 'claude-4-deprecation.html';
        var bannerLinkText = daysLeft <= 5 ? 'Act now — see what to do →' : 'See migration guide →';
        var banner = document.createElement('div');
        banner.id = 'deprecation-urgency-banner';
        banner.style.cssText = 'background:' + urgencyColor + ';color:white;padding:10px 16px;text-align:center;font-size:13px;font-weight:600;position:relative;z-index:9999;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;';
        banner.innerHTML = '<span>⚠️ Claude 4 Opus & Sonnet retire June 15 — <strong>' + urgencyText + '</strong></span>' +
            '<a href="' + bannerLink + '" style="color:white;text-decoration:underline;font-weight:700;">' + bannerLinkText + '</a>' +
            '<button onclick="document.getElementById(\'deprecation-urgency-banner\').remove();localStorage.setItem(\'apipulse_deprecation_banner_dismissed\',\'1\');" style="background:none;border:none;color:white;cursor:pointer;font-size:16px;padding:0 4px;opacity:0.8;position:absolute;right:12px;" aria-label="Dismiss">✕</button>';
        document.body.insertBefore(banner, document.body.firstChild);
        var nav = document.querySelector('nav');
        if (nav) nav.style.top = '0';
        if (window.trackEvent) window.trackEvent('deprecation_banner_shown', { days_left: daysLeft });
    } else if (daysLeft <= 0 && daysLeft > -90) {
        // POST-DEPRECATION: Show $19 flash sale banner (Week 11 special)
        // Session 980: $19 flash sale drives first revenue — lower impulse-buy price
        if (localStorage.getItem('apipulse_deprecation_retired_dismissed')) return;
        var banner = document.createElement('div');
        banner.id = 'deprecation-urgency-banner';
        var dealExpired = window.DEAL_EXPIRED;
        if (dealExpired) {
            // Post-expiry: show regular pricing, no urgency
            banner.style.cssText = 'background:linear-gradient(135deg,#6366f1,#4f46e5);color:white;padding:10px 16px;text-align:center;font-size:13px;font-weight:600;position:relative;z-index:9999;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;';
            banner.innerHTML = '<span>📊 APIpulse Pro — lifetime access, $49 one-time</span>' +
                '<a href="go.html" style="color:white;text-decoration:underline;font-weight:700;">Get Pro →</a>' +
                '<button onclick="document.getElementById(\'deprecation-urgency-banner\').remove();localStorage.setItem(\'apipulse_deprecation_retired_dismissed\',\'1\');" style="background:none;border:none;color:white;cursor:pointer;font-size:16px;padding:0 4px;opacity:0.8;position:absolute;right:12px;" aria-label="Dismiss">✕</button>';
        } else {
            // Pre-expiry: $19 flash sale (Session 980)
            banner.style.cssText = 'background:linear-gradient(135deg,#dc2626,#b91c1c);color:white;padding:10px 16px;text-align:center;font-size:13px;font-weight:600;position:relative;z-index:9999;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;';
            var urgencyText = window.DEAL_DAYS_LEFT <= 1 ? 'FINAL DAY' : window.DEAL_DAYS_LEFT + ' days left';
            banner.innerHTML = '<span>⚡ FLASH SALE: Pro lifetime access <strong>$19</strong> — <strong>' + urgencyText + '</strong></span>' +
                '<a href="flash-19.html" style="color:white;text-decoration:underline;font-weight:700;">Get $19 deal →</a>' +
                '<button onclick="document.getElementById(\'deprecation-urgency-banner\').remove();localStorage.setItem(\'apipulse_deprecation_retired_dismissed\',\'1\');" style="background:none;border:none;color:white;cursor:pointer;font-size:16px;padding:0 4px;opacity:0.8;position:absolute;right:12px;" aria-label="Dismiss">✕</button>';
        }
        document.body.insertBefore(banner, document.body.firstChild);
        var nav = document.querySelector('nav');
        if (nav) nav.style.top = '0';
        if (window.trackEvent) window.trackEvent('deal_banner_shown', { source: 'deprecation_banner', expired: dealExpired });
    }
});

// Claude 4 Dynamic Countdown — replaces hardcoded "N days left" with live calculation
// Runs BEFORE auto-tense-flip so countdowns are correct, then tense-flip handles post-June 15
document.addEventListener('DOMContentLoaded', function() {
    var deadline = new Date('2026-06-15T00:00:00Z');
    var now = new Date();
    var daysLeft = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
    if (daysLeft <= 0) {
        // Post-deadline: replace countdown elements without inline JS handlers
        // Elements with id="countdown-display" have their own JS — skip those
        document.querySelectorAll('.countdown:not(#countdown-display)').forEach(function(el) {
            el.textContent = 'DEADLINE PASSED';
            el.style.color = '#94a3b8';
        });
        return;
    }

    // Replace countdown class elements: <span class="countdown">N days left</span>
    document.querySelectorAll('.countdown').forEach(function(el) {
        el.textContent = daysLeft + ' day' + (daysLeft === 1 ? '' : 's') + ' left';
    });

    // Replace hardcoded countdown patterns in all text nodes (skip script/style)
    // Skip elements with id="daysLeft", "daysLeftText", "ctaDeadline" — those have inline JS
    var SKIP_IDS = {'daysLeft':1, 'daysLeftText':1, 'ctaDeadline':1};
    var patterns = [
        [/You have (\d+) days/gi, 'You have ' + daysLeft + ' days'],
        [/(\d+) days left/gi, daysLeft + ' days left'],
        [/(\d+) DAYS LEFT/g, daysLeft + ' DAYS LEFT'],
        [/(\d+) days until deadline/gi, daysLeft + ' days until deadline'],
        [/(\d+) days until Claude 4/gi, daysLeft + ' days until Claude 4'],
        [/(\d+) days until the/gi, daysLeft + ' days until the'],
        [/(\d+) days until/gi, daysLeft + ' days until'],
        [/retires? in (\d+) days/gi, 'retire' + (daysLeft === 1 ? 's' : '') + ' in ' + daysLeft + ' days'],
        [/deprecates? in (\d+) days/gi, 'deprecate' + (daysLeft === 1 ? 's' : '') + ' in ' + daysLeft + ' days'],
        [/just (\d+) days from now/gi, 'just ' + daysLeft + ' days from now'],
        [/(\d+) days from now/gi, daysLeft + ' days from now'],
        [/(\d+) days away/gi, daysLeft + ' days away'],
        [/(\d+) days to Claude 4/gi, daysLeft + ' days to Claude 4'],
        [/(\d+) days to deprecation/gi, daysLeft + ' days to deprecation'],
        [/- (\d+) days left:/gi, '- ' + daysLeft + ' days left:'],
        [/- (\d+) days until deadline:/gi, '- ' + daysLeft + ' days until deadline:'],
        [/(\d+) days from June/gi, daysLeft + ' days remaining'],
        [/If you're reading this on June \d+, you have (\d+) days/gi, 'You have ' + daysLeft + ' days remaining'],
    ];
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: function(n) {
            if (n.parentNode.tagName === 'SCRIPT' || n.parentNode.tagName === 'STYLE')
                return NodeFilter.FILTER_REJECT;
            // Skip elements with IDs already handled by inline JS
            var p = n.parentNode;
            while (p && p !== document.body) {
                if (p.id && SKIP_IDS[p.id]) return NodeFilter.FILTER_REJECT;
                p = p.parentNode;
            }
            return NodeFilter.FILTER_ACCEPT;
        }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function(node) {
        var text = node.nodeValue;
        var changed = false;
        patterns.forEach(function(p) {
            if (p[0].test(text)) { text = text.replace(p[0], p[1]); changed = true; }
        });
        if (changed) node.nodeValue = text;
    });
    // Also update JSON-LD structured data
    document.querySelectorAll('script[type="application/ld+json"]').forEach(function(s) {
        try {
            var text = s.textContent;
            var changed = false;
            patterns.forEach(function(p) {
                if (p[0].test(text)) { text = text.replace(p[0], p[1]); changed = true; }
            });
            if (changed) s.textContent = text;
        } catch(e) {}
    });
    // Update meta tags (not caught by TreeWalker — they're in <head>)
    document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"], meta[property="og:title"], meta[name="twitter:title"]').forEach(function(m) {
        var content = m.getAttribute('content');
        if (!content) return;
        var changed = false;
        patterns.forEach(function(p) {
            if (p[0].test(content)) { content = content.replace(p[0], p[1]); changed = true; }
        });
        if (changed) m.setAttribute('content', content);
    });
});

// Claude 4 Deprecation Text Auto-Transition (flips future→past tense on June 15)
// Runs on ALL pages — replacements are string-match based and harmless on pages without deprecation text
document.addEventListener('DOMContentLoaded', () => {
    var deadline = new Date('2026-06-15T00:00:00Z');
    if (new Date() < deadline) return;
    var replacements = [
        ['will be retired on June 15, 2026', 'were retired on June 15, 2026'],
        ['will be retired', 'have been retired'],
        ['will stop working on June 15, 2026', 'stopped working on June 15, 2026'],
        ['will stop working', 'have stopped working'],
        ['will stop accepting API calls on June 15, 2026', 'stopped accepting API calls on June 15, 2026'],
        ['will stop accepting API calls', 'have stopped accepting API calls'],
        ['will fail after June 15, 2026', 'are failing — June 15, 2026 has passed'],
        ['will fail', 'now fail'],
        ['will return HTTP 410 Gone errors', 'now return HTTP 410 Gone errors'],
        ['will return errors', 'now return errors'],
        ['will break immediately', 'have broken — the deadline passed'],
        ['will break on June 15', 'broke on June 15'],
        ['will break June 15', 'broke on June 15'],
        ['will break', 'have broken'],
        ['will start returning', 'are now returning'],
        ['is retiring on June 15', 'retired on June 15'],
        ['are retiring on June 15', 'retired on June 15'],
        ['are being retired on June 15, 2026', 'were retired on June 15, 2026'],
        ['are being retired on June 15', 'were retired on June 15'],
        ['are being retired', 'were retired'],
        ['is being retired on June 15, 2026', 'was retired on June 15, 2026'],
        ['is being retired on June 15', 'was retired on June 15'],
        ['is being retired', 'was retired'],
        ['deprecates on June 15, 2026', 'was deprecated on June 15, 2026'],
        ['deprecates on June 15', 'was deprecated on June 15'],
        ['deprecates June 15', 'was deprecated on June 15'],
        ['retire June 15', 'retired June 15'],
        ['retire on June 15', 'retired on June 15'],
        ['retire on', 'retired on'],
        ['retires Claude', 'retired Claude'],
        ['Retiring June 15', 'Retired June 15'],
        ['will start on June 15', 'started on June 15'],
        ['will fail after this date', 'are failing — the June 15 deadline has passed'],
        ['Migrate now to', 'Migrate to — Claude 4 is retired, migrate to'],
        ['Migrate now', 'Migrate now — Claude 4 is retired'],
        ['must migrate before June 15', 'should have migrated before June 15'],
        ['must migrate', 'should have migrated'],
        ['Bookmark before June 15', 'The deadline has passed — bookmark for reference'],
        ['Save 67-97% before June 15', 'Save 67-97% — Claude 4 has been retired'],
        ['Get the checklist before June 15', 'Get the checklist — the deadline has passed'],
        ['Migrate Before June 15', 'Migrated — June 15 has passed'],
        ['migrate before June 15', 'migrated — June 15 has passed'],
        ['before June 15, 2026', '— June 15, 2026 has passed'],
        ['before June 15', '— the June 15 deadline has passed'],
        ['before the June 15', '— the June 15 deadline has passed'],
        ['You have 10 days', 'The deadline has passed'],
        ['You have 9 days', 'The deadline has passed'],
        ['You have 8 days', 'The deadline has passed'],
        ['You have 7 days', 'The deadline has passed'],
        ['You have 6 days', 'The deadline has passed'],
        ['You have 5 days', 'The deadline has passed'],
        ['You have 4 days', 'The deadline has passed'],
        ['You have 3 days', 'The deadline has passed'],
        ['You have 2 days', 'The deadline has passed'],
        ['You have 1 day', 'The deadline has passed'],
        ['you have days', 'The deadline has passed'],
        ['4 days left', 'deadline has passed'],
        ['3 days left', 'deadline has passed'],
        ['2 days left', 'deadline has passed'],
        ['1 day left', 'deadline has passed'],
        ['0 days left', 'deadline has passed'],
        ['0 days', 'deadline has passed'],
        ['6 Days Left', 'Deadline Passed'],
        ['5 Days Left', 'Deadline Passed'],
        ['4 Days Left', 'Deadline Passed'],
        ['3 Days Left', 'Deadline Passed'],
        ['2 Days Left', 'Deadline Passed'],
        ['1 Day Left', 'Deadline Passed'],
        ['6 DAYS LEFT', 'DEADLINE PASSED'],
        ['5 DAYS LEFT', 'DEADLINE PASSED'],
        ['4 DAYS LEFT', 'DEADLINE PASSED'],
        ['3 DAYS LEFT', 'DEADLINE PASSED'],
        ['2 DAYS LEFT', 'DEADLINE PASSED'],
        ['1 DAY LEFT', 'DEADLINE PASSED'],
        ['6 DAYS REMAINING', 'DEADLINE PASSED'],
        ['5 DAYS REMAINING', 'DEADLINE PASSED'],
        ['4 DAYS REMAINING', 'DEADLINE PASSED'],
        ['3 DAYS REMAINING', 'DEADLINE PASSED'],
        ['2 DAYS REMAINING', 'DEADLINE PASSED'],
        ['1 DAY REMAINING', 'DEADLINE PASSED'],
        ['4 days until deadline', 'deadline has passed'],
        ['4 days until Claude 4', 'Claude 4 has been retired since June 15'],
        ['3 days until Claude 4', 'Claude 4 has been retired since June 15'],
        ['2 days until Claude 4', 'Claude 4 has been retired since June 15'],
        ['1 day until Claude 4', 'Claude 4 has been retired since June 15'],
        ['retires in 4 days', 'was retired on June 15'],
        ['retires in 3 days', 'was retired on June 15'],
        ['retires in 2 days', 'was retired on June 15'],
        ['retires in 1 day', 'was retired on June 15'],
        ['retires in 10 days', 'was retired on June 15'],
        ['retires in 9 days', 'was retired on June 15'],
        ['retires in 8 days', 'was retired on June 15'],
        ['retires in 7 days', 'was retired on June 15'],
        ['retires in 6 days', 'was retired on June 15'],
        ['retires in 5 days', 'was retired on June 15'],
        ['shuts down in ~48 hours', 'shut down on June 15'],
        ['shuts down in 48 hours', 'shut down on June 15'],
        ['shuts down in 1 day', 'shut down on June 15'],
        ['shuts down in 2 days', 'shut down on June 15'],
        ['shuts down in 3 days', 'shut down on June 15'],
        ['shuts down in 4 days', 'shut down on June 15'],
        ['shuts down in 5 days', 'shut down on June 15'],
        ['shuts down in 6 days', 'shut down on June 15'],
        ['shuts down in 7 days', 'shut down on June 15'],
        ['shuts down in 10 days', 'shut down on June 15'],
        ['Deadline in 6 Days', 'Deadline Has Passed — Claude 4 Is Retired'],
        ['Deadline in 5 Days', 'Deadline Has Passed — Claude 4 Is Retired'],
        ['Deadline in 4 Days', 'Deadline Has Passed — Claude 4 Is Retired'],
        ['Deadline in 3 Days', 'Deadline Has Passed — Claude 4 Is Retired'],
        ['Deadline in 2 Days', 'Deadline Has Passed — Claude 4 Is Retired'],
        ['Deadline in 1 Day', 'Deadline Has Passed — Claude 4 Is Retired'],
        ['shuts down on June 15', 'shut down on June 15'],
        ['is shutting down June 15', 'shut down on June 15'],
        ['is shutting down on June 15', 'shut down on June 15'],
        ['is shutting down', 'has shut down'],
        ['are shutting down June 15', 'shut down on June 15'],
        ['are shutting down on June 15', 'shut down on June 15'],
        ['are shutting down', 'have shut down'],
        ['stop working June 15', 'stopped working on June 15'],
        ['stop working on June 15', 'stopped working on June 15'],
        ['stop working after June 15', 'stopped working after June 15'],
        ['stop working', 'stopped working'],
        ['6 days to Claude 4 retirement', 'Claude 4 has been retired since June 15'],
        ['6 days to deprecation', 'Claude 4 was deprecated on June 15'],
        ['Claude 4 retires June 15', 'Claude 4 was retired on June 15'],
        ['retires tomorrow', 'was retired on June 15'],
        ['Retires tomorrow', 'Was retired on June 15'],
        ['retires within the hour', 'was retired on June 15'],
        ['retires in ', 'was retired on June 15 — '],
        ['Claude 4 Retirement Countdown', 'Claude 4 Was Retired on June 15'],
        ['Retirement in', 'Retirement occurred on June 15 —'],
        ['After June 15,', 'Since June 15,'],
        ['After this date,', 'Since June 15,'],
        ['days to migrate', 'days — deadline passed'],
        ['day to migrate', 'day — deadline passed'],
        ['June 15 deadline', 'June 15 has passed — Claude 4 is retired'],
        ['June 15 Deadline', 'June 15 Has Passed — Claude 4 Is Retired'],
        ['JUNE 15 DEADLINE', 'JUNE 15 HAS PASSED — CLAUDE 4 RETIRED'],
        ['by June 15, 2026', '— June 15, 2026 has passed'],
        ['by June 15', '— the June 15 deadline has passed'],
        ['Until June 15, 2026', '— June 15, 2026 Has Passed'],
        ['Until June 15', '— the June 15 Deadline Has Passed'],
        ['until June 15, 2026', '— June 15, 2026 has passed'],
        ['until June 15', '— the June 15 deadline has passed'],
        ['prior to June 15, 2026', '— June 15, 2026 has passed'],
        ['prior to June 15', '— the June 15 deadline has passed'],
        ['starting tomorrow', '— the deadline has passed'],
        ['Claude 4 dies', 'Claude 4 is retired'],
        ['Claude 4 dies —', 'Claude 4 is retired —'],
    ];
    // Update text nodes in body (skip script/style tags)
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: function(n) {
            return n.parentNode.tagName === 'SCRIPT' || n.parentNode.tagName === 'STYLE'
                ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function(node) {
        var text = node.nodeValue;
        var changed = false;
        replacements.forEach(function(r) {
            if (text.indexOf(r[0]) !== -1) { text = text.split(r[0]).join(r[1]); changed = true; }
        });
        if (changed) node.nodeValue = text;
    });
    // Update JSON-LD FAQ structured data
    document.querySelectorAll('script[type="application/ld+json"]').forEach(function(s) {
        try {
            var text = s.textContent;
            var changed = false;
            replacements.forEach(function(r) {
                if (text.indexOf(r[0]) !== -1) { text = text.split(r[0]).join(r[1]); changed = true; }
            });
            if (changed) s.textContent = text;
        } catch(e) {}
    });
    // Update <title> tag for SEO — flip "Retiring" → "Retired", "Last Chance" → etc.
    var titleReplacements = [
        ['Retiring June 15', 'Retired June 15'],
        ['Last Chance — Migrate Before June 15', 'Retired — Migrate Now'],
        ['Last Chance — 6 Days', 'Retirement Complete'],
        ['Last Chance — 5 Days', 'Retirement Complete'],
        ['Last Chance — 4 Days', 'Retirement Complete'],
        ['Last Chance — 3 Days', 'Retirement Complete'],
        ['Last Chance — 2 Days', 'Retirement Complete'],
        ['Last Chance — 1 Day', 'Retirement Complete'],
        ['Last Chance — 1 Day Until API Shutdown', 'Retired — API Shutdown Complete'],
        ['Last Chance — 2 Days Until API Shutdown', 'Retired — API Shutdown Complete'],
        ['Last Chance — 3 Days Until API Shutdown', 'Retired — API Shutdown Complete'],
        ['Last Chance — 4 Days Until API Shutdown', 'Retired — API Shutdown Complete'],
        ['Last Chance — 5 Days Until API Shutdown', 'Retired — API Shutdown Complete'],
        ['Last Chance — 6 Days Until API Shutdown', 'Retired — API Shutdown Complete'],
        ['Migrate Before June 15 Shutdown', 'Migration Guide — Claude 4 Retired'],
        ['— 39 Cheaper Alternatives Compared', '— 39 Alternatives (Retired)'],
        ['Claude 4 Deprecation Guide', 'Claude 4 Retirement Guide'],
        ['Claude 4 Is Retiring June 15', 'Claude 4 Was Retired June 15'],
        ['Retirement Countdown', 'Retirement Complete'],
        ['API Deadline in 6 Days', 'API Deadline Has Passed'],
        ['API Deadline in 5 Days', 'API Deadline Has Passed'],
        ['API Deadline in 4 Days', 'API Deadline Has Passed'],
        ['API Deadline in 3 Days', 'API Deadline Has Passed'],
        ['API Deadline in 2 Days', 'API Deadline Has Passed'],
        ['API Deadline in 1 Day', 'API Deadline Has Passed'],
        ['Last Weekend Migration Plan', 'Migration Guide — Claude 4 Retired'],
        ['5 Things to Do This Weekend (Before June 15)', 'What to Do After Claude 4 Retired'],
        ['5 Things to Do This Weekend', 'What to Do After Claude 4 Retired'],
    ];
    var title = document.title;
    var titleChanged = false;
    titleReplacements.forEach(function(r) {
        if (title.indexOf(r[0]) !== -1) { title = title.split(r[0]).join(r[1]); titleChanged = true; }
    });
    if (titleChanged) document.title = title;
    // Update meta descriptions for SEO (attributes can't be reached by TreeWalker)
    document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]').forEach(function(m) {
        var content = m.getAttribute('content');
        if (!content) return;
        var changed = false;
        replacements.forEach(function(r) {
            if (content.indexOf(r[0]) !== -1) { content = content.split(r[0]).join(r[1]); changed = true; }
        });
        // Also apply title-specific meta fixes
        titleReplacements.forEach(function(r) {
            if (content.indexOf(r[0]) !== -1) { content = content.split(r[0]).join(r[1]); changed = true; }
        });
        if (changed) m.setAttribute('content', content);
    });
});

// Update deprecated Claude 4 model IDs in code examples across ALL blog posts (after June 15)
document.addEventListener('DOMContentLoaded', () => {
    var path = window.location.pathname;
    if (!path.includes('blog-')) return;
    if (path.includes('blog-claude-4-') || path.includes('blog-best-claude-4-')) return; // already handled above
    var deadline = new Date('2026-06-15T00:00:00Z');
    if (new Date() < deadline) return;
    // Also flip Claude 4 deprecation text on non-claude-4 blog posts
    var depReplacements = [
        ['Claude 4 retires June 15', 'Claude 4 was retired on June 15'],
        ['Claude 4 retires on June 15', 'Claude 4 was retired on June 15'],
        ['Claude 4 retirement', 'Claude 4 retirement (completed)'],
        ['retires June 15, 2026', 'was retired on June 15, 2026'],
        ['retire June 15, 2026', 'were retired on June 15, 2026'],
        ['API calls will fail after that date', 'API calls now return 410 errors'],
        ['API calls will fail after this date', 'API calls now return 410 errors'],
        ['API calls will fail', 'API calls now fail'],
        ['will fail after June 15', 'are failing — June 15 has passed'],
        ['days left:', 'days left (past deadline):'],
        ['days until deadline', 'deadline has passed'],
        ['days until Claude 4', 'Claude 4 has been retired since June 15'],
    ];
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: function(n) {
            return n.parentNode.tagName === 'SCRIPT' || n.parentNode.tagName === 'STYLE'
                ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function(node) {
        var text = node.nodeValue;
        var changed = false;
        depReplacements.forEach(function(r) {
            if (text.indexOf(r[0]) !== -1) { text = text.split(r[0]).join(r[1]); changed = true; }
        });
        if (changed) node.nodeValue = text;
    });
    // Replace deprecated model IDs in code blocks and inline code
    // Use word-boundary-aware replacements to avoid breaking claude-sonnet-4-6
    document.querySelectorAll('code, pre').forEach(function(el) {
        var text = el.textContent;
        var replaced = text
            .replace(/\bclaude-4-opus\b/g, 'claude-opus-4-8')
            .replace(/\bclaude-sonnet-4\b(?!-)/g, 'claude-sonnet-4-6');
        if (replaced !== text) el.textContent = replaced;
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
        '<a href="https://twitter.com/intent/tweet?text=Compare%20AI%20API%20pricing%20across%2048%20models%20from%2010%20providers&url=https%3A%2F%2Fgetapipulse.com" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:4px;padding:6px 12px;border-radius:6px;border:1px solid var(--border);background:var(--bg-secondary);color:var(--text-primary);font-size:12px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--border)\'"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>X</a>' +
        '<a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fgetapipulse.com" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:4px;padding:6px 12px;border-radius:6px;border:1px solid var(--border);background:var(--bg-secondary);color:var(--text-primary);font-size:12px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--border)\'"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>LinkedIn</a>';
    footer.insertBefore(shareDiv, footer.firstChild);

    // Pricing map link
    var mapLink = document.createElement('div');
    mapLink.style.cssText = 'text-align:center;margin-top:12px;';
    mapLink.innerHTML = '<a href="pricing-map.html" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:6px;border:1px solid var(--border);background:var(--bg-secondary);color:var(--text-primary);font-size:12px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--border)\'"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>Interactive Pricing Map</a>';
    shareDiv.parentNode.insertBefore(mapLink, shareDiv.nextSibling);

    // Footer tools row — migration code generator
    var toolsRow = document.createElement('div');
    toolsRow.style.cssText = 'display:flex;align-items:center;justify-content:center;gap:12px;margin-top:12px;flex-wrap:wrap;';
    toolsRow.innerHTML = '<a href="ai-api-advisor.html" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:6px;border:1px solid rgba(99,102,241,0.4);background:rgba(99,102,241,0.08);color:var(--accent);font-size:12px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'rgba(99,102,241,0.4)\'">🎯 AI API Advisor</a>' +
        '<a href="ai-api-pricing-benchmark-2026.html" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:6px;border:1px solid rgba(99,102,241,0.4);background:rgba(99,102,241,0.08);color:var(--accent);font-size:12px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'rgba(99,102,241,0.4)\'">📊 2026 Pricing Benchmark</a>' +
        '<a href="api-badge.html" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:6px;border:1px solid rgba(99,102,241,0.4);background:rgba(99,102,241,0.08);color:var(--accent);font-size:12px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'rgba(99,102,241,0.4)\'">🏷️ Pricing Badges</a>' +
        '<a href="migrate.html" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:6px;border:1px solid rgba(217,119,6,0.4);background:rgba(217,119,6,0.08);color:#f59e0b;font-size:12px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'#f59e0b\'" onmouseout="this.style.borderColor=\'rgba(217,119,6,0.4)\'">🔄 Claude 4 Migration</a>' +
        '<a href="migration-code.html" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:6px;border:1px solid var(--border);background:var(--bg-secondary);color:var(--text-primary);font-size:12px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--border)\'"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>Migration Code Generator</a>' +
        '<a href="cost-health-check.html" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:6px;border:1px solid var(--border);background:var(--bg-secondary);color:var(--text-primary);font-size:12px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--border)\'"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>Cost Health Check</a>' +
        '<a href="api-docs.html" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:6px;border:1px solid rgba(34,197,94,0.4);background:rgba(34,197,94,0.08);color:var(--green);font-size:12px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--green)\'" onmouseout="this.style.borderColor=\'rgba(34,197,94,0.4)\'"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>Free Pricing API</a>';
    mapLink.parentNode.insertBefore(toolsRow, mapLink.nextSibling);
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

// Exit-intent popup for email capture — A/B test with 3 variants
(function() {
    var skipPages = ['unsubscribe', 'ph.html', 'deal.html', 'go.html', 'pricing.html'];
    var pathname = window.location.pathname;
    for (var i = 0; i < skipPages.length; i++) { if (pathname.includes(skipPages[i])) return; }
    if (localStorage.getItem('apipulse_popup_dismissed')) return;

    // Limited-time pricing exit popup (replaces stale deprecation popup)
    var isDeprecationPage = window.location.pathname.includes('deprecation') || window.location.pathname.includes('migration') || window.location.pathname.includes('last-chance') || window.location.pathname.includes('survival') || window.location.pathname.includes('claude-4') || window.location.pathname.includes('shutdown');
    var dealDeadline = new Date('2026-07-12T23:59:59Z');
    var daysUntilDealEnd = Math.ceil((dealDeadline - new Date()) / 86400000);

    if (isDeprecationPage && daysUntilDealEnd > 0) {
        if (localStorage.getItem('apipulse_deprecation_popup_dismissed')) return;
        var depPopupShown = false;
        function showDeprecationPopup() {
            if (depPopupShown || localStorage.getItem('apipulse_deprecation_popup_dismissed')) return;
            depPopupShown = true;
            if (window.trackEvent) window.trackEvent('urgency_popup_shown', { days_left: daysUntilDealEnd, timing_variant: window._abPopupTimingVariant });

            var price = window._abPrice || 29;
            var futurePrice = Math.round(price * 1.7);
            var stripeLink = window._abStripeLink || 'https://buy.stripe.com/fZu7sL3Gw3GS0RQeoDeEo0a';

            var overlay = document.createElement('div');
            overlay.id = 'exit-popup-overlay';
            overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn 0.3s ease;';
            var popup = document.createElement('div');
            popup.style.cssText = 'background:var(--bg-card);border:1px solid var(--red);border-radius:16px;padding:40px;max-width:440px;width:100%;position:relative;box-shadow:0 24px 64px rgba(0,0,0,0.5);';
            var popupTitle, popupIcon, popupDesc, popupHighlight;
            popupIcon = '⏰';
            popupTitle = daysUntilDealEnd + ' Day' + (daysUntilDealEnd === 1 ? '' : 's') + ' Left at Early Adopter Price';
            popupDesc = 'Early adopter pricing ends July 12. Pro shows you the cheapest model for your exact workload — most devs save 40-80% on their AI API costs.';
            popupHighlight = 'Get lifetime access at $' + price + ' before the price increases to $' + futurePrice;
            popup.innerHTML = '<button id="exit-popup-close" style="position:absolute;top:12px;right:12px;background:none;border:none;color:var(--text-muted);font-size:20px;cursor:pointer;padding:4px 8px;border-radius:6px;" onmouseover="this.style.color=\'var(--text-primary)\'" onmouseout="this.style.color=\'var(--text-muted)\'">&times;</button>' +
                '<div style="text-align:center;">' +
                '<div style="font-size:40px;margin-bottom:16px;">' + popupIcon + '</div>' +
                '<h3 style="font-size:22px;font-weight:700;margin-bottom:8px;color:var(--red);">' + popupTitle + '</h3>' +
                '<p style="font-size:14px;color:var(--text-secondary);margin-bottom:12px;line-height:1.6;">' + popupDesc + '</p>' +
                '<div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;padding:10px 16px;margin-bottom:12px;font-size:13px;color:var(--text-secondary);font-style:italic;line-height:1.5;">Switching from GPT-5 to DeepSeek V4 Flash saves <strong style="font-style:normal;color:var(--green);">96% on input costs</strong> — see your exact savings with Pro.</div>' +
                '<div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.25);border-radius:8px;padding:12px;margin-bottom:16px;font-size:14px;color:var(--green);font-weight:600;">' + popupHighlight + '</div>' +
                '<a href="go.html?from=exit_popup_deprecation" id="deprecation-popup-cta" style="display:inline-block;background:var(--accent);color:white;padding:14px 32px;border-radius:10px;font-size:16px;font-weight:700;text-decoration:none;transition:all 0.2s;box-shadow:0 4px 20px rgba(99,102,241,0.3);" onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'none\'">Get Pro — $' + price + ' lifetime</a>' +
                '<p style="font-size:12px;color:var(--text-muted);margin-top:12px;">⚠️ Early adopter price — increases to $' + futurePrice + ' on July 12 · 14-day money-back guarantee</p>' +
                '</div>';
            overlay.appendChild(popup);
            document.body.appendChild(overlay);

            document.getElementById('exit-popup-close').addEventListener('click', function() {
                if (window.trackEvent) window.trackEvent('urgency_popup_dismissed', { days_left: daysUntilDealEnd, timing_variant: window._abPopupTimingVariant });
                overlay.remove();
                localStorage.setItem('apipulse_deprecation_popup_dismissed', '1');
            });
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    if (window.trackEvent) window.trackEvent('urgency_popup_dismissed', { days_left: daysUntilDealEnd, timing_variant: window._abPopupTimingVariant });
                    overlay.remove();
                    localStorage.setItem('apipulse_deprecation_popup_dismissed', '1');
                }
            });
            document.getElementById('deprecation-popup-cta').addEventListener('click', function() {
                if (window.trackEvent) window.trackEvent('urgency_popup_cta_clicked', { days_left: daysUntilDealEnd, price: price, timing_variant: window._abPopupTimingVariant });
            });
        }

        document.addEventListener('mouseout', function(e) { if (e.clientY <= 0 && !depPopupShown) showDeprecationPopup(); });
        setTimeout(function() { if (!depPopupShown && 'ontouchstart' in window) showDeprecationPopup(); }, window._abPopupTiming || 45000);
        return; // Skip the generic email popup on deprecation pages
    }

    // Skip calculator page — it has its own exit popup
    if (window.location.pathname.includes('calculator')) return;

    // CTA button color A/B test — persisted across sessions (shared by all popup paths)
    var buttonColorVariant = localStorage.getItem('apipulse_button_color');
    if (!buttonColorVariant || !['purple', 'red', 'green'].includes(buttonColorVariant)) {
        buttonColorVariant = ['purple', 'red', 'green'][Math.floor(Math.random() * 3)];
        localStorage.setItem('apipulse_button_color', buttonColorVariant);
    }
    var buttonColorMap = {
        purple: { bg: 'var(--accent)', shadow: 'rgba(99,102,241,0.3)', label: 'purple' },
        red:    { bg: '#dc2626', shadow: 'rgba(220,38,38,0.3)', label: 'red' },
        green:  { bg: '#16a34a', shadow: 'rgba(22,163,74,0.3)', label: 'green' }
    };
    var btnColor = buttonColorMap[buttonColorVariant];

    // Exit popup copy A/B test — loss-framed vs social-proof (persisted across sessions)
    var copyVariant = localStorage.getItem('apipulse_copy_variant');
    if (!copyVariant || !['loss', 'social'].includes(copyVariant)) {
        copyVariant = ['loss', 'social'][Math.floor(Math.random() * 2)];
        localStorage.setItem('apipulse_copy_variant', copyVariant);
    }

    // High-intent pages: show Pro CTA instead of email capture
    var isHighIntent = window.location.pathname.includes('compare') || window.location.pathname.includes('cost-') || window.location.pathname.includes('model-') || window.location.pathname.includes('cheapest') || window.location.pathname.includes('pricing') || window.location.pathname.includes('switch') || window.location.pathname.includes('optimizer') || window.location.pathname.includes('explorer') || window.location.pathname.includes('finder');

    if (isHighIntent) {
        var proPopupShown = false;
        function showProExitPopup() {
            if (proPopupShown || localStorage.getItem('apipulse_popup_dismissed')) return;
            proPopupShown = true;

            var price = window._abPrice || 29;
            var futurePrice = Math.round(price * 1.7);
            var stripeLink = window._abStripeLink || 'https://buy.stripe.com/fZu7sL3Gw3GS0RQeoDeEo0a';
            var variant = window._abVariant || 'B';

            // Copy variant content — loss-framed vs social-proof
            var copyContent = {
                loss: {
                    emoji: '💸',
                    headline: 'You\'re losing money every day you wait',
                    desc: 'Most developers overpay 40-80% on AI APIs. Pro shows you exactly which model to switch to — with migration code, cost projections, and a personalized optimization plan.',
                    cta: 'Stop the leak — $' + price + ' lifetime'
                },
                social: {
                    emoji: '🚀',
                    headline: 'Join 1,247+ developers saving on AI',
                    desc: 'See exactly which model to switch to — with migration code, cost projections, and a personalized optimization plan. Used by developers at startups and enterprises worldwide.',
                    cta: 'Get Pro Access — $' + price + ' lifetime'
                }
            };
            // Add personalized savings estimate based on page context
            var pagePath = location.pathname;
            var savingsHint = '';
            if (pagePath.includes('claude') || pagePath.includes('anthropic')) {
                savingsHint = '<div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:10px 16px;margin-bottom:12px;font-size:13px;color:var(--green);font-weight:600;text-align:center;">💡 Claude users save $60–200/mo by routing to cheaper models for 80% of tasks</div>';
            } else if (pagePath.includes('gpt') || pagePath.includes('openai')) {
                savingsHint = '<div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:10px 16px;margin-bottom:12px;font-size:13px;color:var(--green);font-weight:600;text-align:center;">💡 GPT users save $50–180/mo by switching simple tasks to GPT-5 Mini or DeepSeek</div>';
            } else if (pagePath.includes('gemini') || pagePath.includes('google')) {
                savingsHint = '<div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:10px 16px;margin-bottom:12px;font-size:13px;color:var(--green);font-weight:600;text-align:center;">💡 Gemini users save $40–150/mo by using Flash for simple tasks and Pro for complex ones</div>';
            } else if (pagePath.includes('deepseek')) {
                savingsHint = '<div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:10px 16px;margin-bottom:12px;font-size:13px;color:var(--green);font-weight:600;text-align:center;">💡 Already using DeepSeek? Pro can still save 20-40% with routing & caching strategies</div>';
            } else if (pagePath.includes('compare')) {
                savingsHint = '<div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:10px 16px;margin-bottom:12px;font-size:13px;color:var(--green);font-weight:600;text-align:center;">💡 Pro shows your exact savings with migration code for the switch you\'re considering</div>';
            }
            var cc = copyContent[copyVariant] || copyContent.loss;

            if (window.trackEvent) window.trackEvent('pro_exit_popup_shown', { variant: variant, price: price, page: location.pathname, timing_variant: window._abPopupTimingVariant, button_color: buttonColorVariant, copy_variant: copyVariant });

            var overlay = document.createElement('div');
            overlay.id = 'exit-popup-overlay';
            overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn 0.3s ease;';

            var popup = document.createElement('div');
            popup.style.cssText = 'background:var(--bg-card);border:1px solid var(--accent);border-radius:16px;padding:40px;max-width:440px;width:100%;position:relative;box-shadow:0 24px 64px rgba(0,0,0,0.5);';

            popup.innerHTML = '<button id="exit-popup-close" style="position:absolute;top:12px;right:12px;background:none;border:none;color:var(--text-muted);font-size:20px;cursor:pointer;padding:4px 8px;border-radius:6px;" onmouseover="this.style.color=\'var(--text-primary)\'" onmouseout="this.style.color=\'var(--text-muted)\'">&times;</button>' +
                '<div style="text-align:center;">' +
                '<div style="font-size:40px;margin-bottom:16px;">' + cc.emoji + '</div>' +
                '<h3 style="font-size:22px;font-weight:700;margin-bottom:8px;">' + cc.headline + '</h3>' +
                savingsHint +
                '<p style="font-size:14px;color:var(--text-secondary);margin-bottom:12px;line-height:1.6;">' + cc.desc + '</p>' +
                '<div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;padding:10px 16px;margin-bottom:16px;font-size:13px;color:var(--text-secondary);font-style:italic;line-height:1.5;">Switching from GPT-5 to DeepSeek V4 Flash saves <strong style="font-style:normal;color:var(--green);">96% on input costs</strong> — see your exact savings with Pro.</div>' +
                '<div style="display:flex;gap:12px;justify-content:center;margin-bottom:16px;">' +
                '<div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;">' +
                '<div style="font-size:20px;font-weight:800;color:var(--accent);">$' + price + '</div>' +
                '<div style="font-size:11px;color:var(--text-muted);">one-time</div></div>' +
                '<div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;">' +
                '<div style="font-size:20px;font-weight:800;color:var(--green);">40%</div>' +
                '<div style="font-size:11px;color:var(--text-muted);">avg. savings</div></div></div>' +
                '<a href="go.html?from=exit_popup_pro" id="pro-exit-cta" style="display:inline-block;background:' + btnColor.bg + ';color:white;padding:14px 32px;border-radius:10px;font-size:16px;font-weight:700;text-decoration:none;transition:all 0.2s;box-shadow:0 4px 20px ' + btnColor.shadow + ';" onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'none\'">' + cc.cta + '</a>' +
                '<p style="font-size:12px;color:var(--text-muted);margin-top:12px;">⚠️ Early adopter price — increases to $' + futurePrice + ' on July 12 · 14-day money-back guarantee · <a href="#" id="pro-exit-dismiss" style="color:var(--text-muted);">No thanks</a></p>' +
                '</div>';

            overlay.appendChild(popup);
            document.body.appendChild(overlay);

            document.getElementById('exit-popup-close').addEventListener('click', function() {
                if (window.trackEvent) window.trackEvent('pro_exit_popup_dismissed', { variant: variant, timing_variant: window._abPopupTimingVariant, button_color: buttonColorVariant, copy_variant: copyVariant });
                overlay.remove();
                localStorage.setItem('apipulse_popup_dismissed', '1');
            });
            document.getElementById('pro-exit-dismiss').addEventListener('click', function(e) {
                e.preventDefault();
                if (window.trackEvent) window.trackEvent('pro_exit_popup_dismissed', { variant: variant, timing_variant: window._abPopupTimingVariant, button_color: buttonColorVariant, copy_variant: copyVariant });
                overlay.remove();
                localStorage.setItem('apipulse_popup_dismissed', '1');
            });
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    if (window.trackEvent) window.trackEvent('pro_exit_popup_dismissed', { variant: variant, timing_variant: window._abPopupTimingVariant, button_color: buttonColorVariant, copy_variant: copyVariant });
                    overlay.remove();
                    localStorage.setItem('apipulse_popup_dismissed', '1');
                }
            });
            document.getElementById('pro-exit-cta').addEventListener('click', function() {
                if (window.trackEvent) window.trackEvent('pro_button_clicked', { source: 'exit_popup', variant: variant, price: price, timing_variant: window._abPopupTimingVariant, button_color: buttonColorVariant, copy_variant: copyVariant });
            });
        }

        document.addEventListener('mouseout', function(e) { if (e.clientY <= 0 && !proPopupShown) showProExitPopup(); });
        setTimeout(function() { if (!proPopupShown && 'ontouchstart' in window) showProExitPopup(); }, window._abPopupTiming || 45000);
        return; // Skip the generic email popup on high-intent pages
    }

    // A/B test variants
    var popupVariants = {
        A: { emoji: '🚀', headline: 'Get 40% off AI API costs', subtext: 'Join 1,200+ developers who use our free pricing data to optimize their AI spending. Get notified when prices change.', cta: 'Get Updates' },
        B: { emoji: '🔔', headline: 'Never miss an AI price change', subtext: 'We track pricing across 48 models and 10 providers. Get instant alerts when costs shift — so you can switch before overpaying.', cta: 'Get Alerts' },
        C: { emoji: '📊', headline: 'Join 1,200+ developers saving on AI', subtext: 'Our free calculator shows exactly what you\'ll pay per request. Compare Claude, GPT, Gemini, and 30 more models side by side.', cta: 'Start Saving' }
    };

    // Assign or retrieve variant
    var variant = localStorage.getItem('apipulse_popup_variant');
    if (!variant || !popupVariants[variant]) {
        variant = ['A', 'B', 'C'][Math.floor(Math.random() * 3)];
        localStorage.setItem('apipulse_popup_variant', variant);
    }
    var v = popupVariants[variant];

    let popupShown = false;
    function showExitPopup() {
        if (popupShown || localStorage.getItem('apipulse_popup_dismissed')) return;
        popupShown = true;

        // Track which variant was shown
        if (window.trackEvent) window.trackEvent('exit_popup_variant_shown', { variant: variant, timing_variant: window._abPopupTimingVariant });

        const overlay = document.createElement('div');
        overlay.id = 'exit-popup-overlay';
        overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn 0.3s ease;';

        const popup = document.createElement('div');
        popup.style.cssText = 'background:var(--bg-card);border:1px solid var(--accent);border-radius:16px;padding:40px;max-width:440px;width:100%;position:relative;box-shadow:0 24px 64px rgba(0,0,0,0.5);';

        popup.innerHTML = `
            <button id="exit-popup-close" style="position:absolute;top:12px;right:12px;background:none;border:none;color:var(--text-muted);font-size:20px;cursor:pointer;padding:4px 8px;border-radius:6px;" onmouseover="this.style.color='var(--text-primary)'" onmouseout="this.style.color='var(--text-muted)'">&times;</button>
            <div style="text-align:center;">
                <div style="font-size:40px;margin-bottom:16px;">${v.emoji}</div>
                <h3 style="font-size:22px;font-weight:700;margin-bottom:8px;">${v.headline}</h3>
                <p style="font-size:14px;color:var(--text-secondary);margin-bottom:12px;line-height:1.6;">${v.subtext}</p>
                <div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;padding:10px 16px;margin-bottom:16px;font-size:13px;color:var(--text-secondary);font-style:italic;line-height:1.5;">Switching from GPT-5 to DeepSeek V4 Flash saves <strong style="font-style:normal;color:var(--green);">96% on input costs</strong> — see your exact savings with Pro.</div>
                <form id="exit-popup-form" style="display:flex;gap:8px;margin-bottom:12px;">
                    <input type="email" id="exit-popup-email" placeholder="you@company.com" required aria-label="Email address"
                        style="flex:1;padding:12px 16px;border-radius:8px;border:1px solid var(--border);background:var(--bg-secondary);color:var(--text-primary);font-size:14px;">
                    <button type="submit" style="background:var(--accent);color:white;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:600;border:none;cursor:pointer;white-space:nowrap;">${v.cta}</button>
                </form>
                <p id="exit-popup-msg" style="font-size:13px;color:var(--green);margin-top:8px;display:none;"></p>
                <p style="font-size:12px;color:var(--text-muted);margin-top:12px;">No spam. Unsubscribe anytime.</p>
            </div>
        `;

        overlay.appendChild(popup);
        document.body.appendChild(overlay);

        document.getElementById('exit-popup-close').addEventListener('click', function() {
            if (window.trackEvent) window.trackEvent('exit_popup_dismissed', { variant: variant, timing_variant: window._abPopupTimingVariant });
            overlay.remove();
            localStorage.setItem('apipulse_popup_dismissed', '1');
        });

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                if (window.trackEvent) window.trackEvent('exit_popup_dismissed', { variant: variant, timing_variant: window._abPopupTimingVariant });
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
                if (window.trackEvent) window.trackEvent('exit_popup_signup', { variant: variant, timing_variant: window._abPopupTimingVariant });
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
                if (window.trackEvent) window.trackEvent('exit_popup_signup', { variant: variant, timing_variant: window._abPopupTimingVariant });
                setTimeout(function() { overlay.remove(); localStorage.setItem('apipulse_popup_dismissed', '1'); }, 2000);
            } finally {
                btn.disabled = false;
                btn.textContent = v.cta;
            }
        });
    }

    document.addEventListener('mouseout', function(e) {
        if (e.clientY <= 0 && !popupShown) showExitPopup();
    });

    // Also show on mobile (no mouseout) — timing A/B tested (30s vs 45s vs 60s)
    setTimeout(function() {
        if (!popupShown && 'ontouchstart' in window) showExitPopup();
    }, window._abPopupTiming || 45000);
})();

// Time-based sticky bottom CTA bar — catches passive visitors who don't trigger exit intent
// Shows after 45s on content pages (blog, tools, guides) — not on pricing/pro/checkout
// Session 902: Skip if scroll-triggered sticky-pro-cta is already visible (prevents stacking)
(function() {
    if (localStorage.getItem('apipulse_sticky_bar_dismissed')) return;
    if (localStorage.getItem('apipulse_pro_cta_dismissed')) return; // Session 902: unified dismiss
    if (typeof isProUser === 'function' && isProUser()) return;
    var path = window.location.pathname;
    // Skip high-intent pages (they already have strong CTAs) and admin pages
    var skipPages = ['pricing', 'pro', 'thank-you', 'checkout', 'admin', 'embed', 'unsubscribe', 'go', 'deal'];
    for (var i = 0; i < skipPages.length; i++) {
        if (path.indexOf(skipPages[i]) !== -1) return;
    }
    var price = window._abPrice || 29;
    setTimeout(function() {
        if (localStorage.getItem('apipulse_sticky_bar_dismissed')) return;
        if (localStorage.getItem('apipulse_pro_cta_dismissed')) return; // Session 902: unified dismiss
        if (document.getElementById('sticky-bottom-bar')) return;
        if (document.getElementById('sticky-pro-cta')) return; // Session 902: don't stack
        var bar = document.createElement('div');
        bar.id = 'sticky-bottom-bar';
        bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:9999;background:linear-gradient(135deg,rgba(15,15,20,0.97),rgba(25,25,35,0.97));backdrop-filter:blur(12px);border-top:1px solid rgba(99,102,241,0.3);padding:12px 20px;display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;box-shadow:0 -4px 20px rgba(0,0,0,0.3);animation:stickySlideUp 0.4s ease;';
        var stickyPageName = location.pathname.replace(/^\//, '').replace(/\.html$/, '') || 'home';
        bar.innerHTML = '<span style="font-size:14px;color:var(--text-secondary);">💡 Developers using APIpulse save an average of <strong style="color:var(--green);">40% on API costs</strong></span>' +
            '<a href="go.html?from=sticky_bottom_bar_' + encodeURIComponent(stickyPageName) + '" target="_blank" rel="noopener" style="display:inline-block;background:var(--accent);color:white;padding:8px 20px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:700;white-space:nowrap;" onclick="if(window.trackEvent)window.trackEvent(\'pro_button_clicked\',{source:\'sticky_bottom_bar\'})">Get Pro — $' + price + ' One-Time</a>' +
            '<button onclick="document.getElementById(\'sticky-bottom-bar\').remove();localStorage.setItem(\'apipulse_sticky_bar_dismissed\',\'1\');localStorage.setItem(\'apipulse_pro_cta_dismissed\',\'1\');if(window.trackEvent)window.trackEvent(\'sticky_bar_dismissed\');" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:18px;padding:4px 8px;line-height:1;" aria-label="Close">×</button>';
        document.body.appendChild(bar);
        if (window.trackEvent) window.trackEvent('sticky_bar_shown', { page: path, price: price });
    }, 45000);
})();

// Pro badge in nav — show "Pro ✓" indicator for returning Pro users
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('apipulse_pro') !== 'true') return;
    var navCta = document.querySelector('.nav-cta');
    if (!navCta) return;
    navCta.textContent = 'Pro ✓';
    navCta.href = 'pro.html';
    navCta.style.background = 'rgba(34,197,94,0.15)';
    navCta.style.borderColor = 'var(--green)';
    navCta.style.color = 'var(--green)';
});

// Pricing freshness badge — renders "Updated May 5, 2026" badge into target element
function renderPricingFreshness(containerId) {
    var container = document.getElementById(containerId);
    if (!container || typeof PRICING_LAST_UPDATED === 'undefined') return;
    container.innerHTML = '<span style="display:inline-flex;align-items:center;gap:6px;background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.25);padding:5px 14px;border-radius:100px;font-size:12px;font-weight:600;color:var(--green);">' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' +
        'Pricing updated ' + PRICING_LAST_UPDATED + '</span>';
}


// Sticky Pro CTA bar — shows on scroll for non-pricing pages (respects A/B price variant)
// Session 902: Uses unified dismiss state with sticky-bottom-bar to prevent stacking
(function() {
    var path = window.location.pathname;
    if (path.includes('pricing.html') || path.includes('pro.html') || path.includes('thank-you.html') || path.includes('launch.html') || path.includes('compare-plans.html') || path.includes('go.html') || path.includes('deal.html')) return;
    if (localStorage.getItem('apipulse_pro_cta_dismissed')) return;
    if (localStorage.getItem('apipulse_sticky_bar_dismissed')) return; // Session 902: unified dismiss
    if (localStorage.getItem('apipulse_pro') === 'true') return;

    var price = window._abPrice || 29;
    var futurePrice = Math.round(price * 1.7);
    var variant = window._abVariant || 'B';

    var shown = false;
    window.addEventListener('scroll', function() {
        if (shown) return;
        var scrollPct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        if (scrollPct < 0.3) return;
        shown = true;

        // Session 902: Remove sticky-bottom-bar if it exists (prevent stacking)
        var existingBottomBar = document.getElementById('sticky-bottom-bar');
        if (existingBottomBar) existingBottomBar.remove();

        var bar = document.createElement('div');
        bar.id = 'sticky-pro-cta';
        bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:9999;background:linear-gradient(135deg,#4f46e5,#6366f1);padding:12px 20px;display:flex;align-items:center;justify-content:center;gap:16px;box-shadow:0 -4px 20px rgba(0,0,0,0.3);transform:translateY(100%);transition:transform 0.3s ease;';
        var isDepPage = path.includes('deprecation') || path.includes('migration') || path.includes('last-chance') || path.includes('shutdown') || path.includes('claude-4') || path.includes('survival');
        var isCalcPage = path.includes('calculator');
        var isComparePage = path.includes('compare');
        var isCostPage = path.includes('cost-') || path.includes('optimizer') || path.includes('explorer') || path.includes('finder');
        var barMsg, ctaContext;
        if (isDepPage) {
            var postDep = new Date() >= new Date('2026-06-15T00:00:00Z');
            barMsg = postDep ? 'Claude 4 is down — Pro finds your cheapest replacement in 30 seconds' : 'Migrating off Claude 4? Pro shows the cheapest path';
            ctaContext = 'sticky_bar_deprecation';
        } else if (isCalcPage) {
            barMsg = 'Done calculating? Pro shows how to cut those costs by 40%';
            ctaContext = 'sticky_bar_calculator';
        } else if (isComparePage) {
            barMsg = 'Comparing models? Pro picks the cheapest for your exact workload';
            ctaContext = 'sticky_bar_compare';
        } else if (isCostPage) {
            barMsg = 'Stop guessing — Pro gives data-driven cost optimization';
            ctaContext = 'sticky_bar_cost_tools';
        } else {
            barMsg = 'Founding Member: Pro for $' + price + ' one-time <span style="opacity:0.7;font-weight:400;font-size:12px;">(goes to $' + futurePrice + ' soon)</span>';
            ctaContext = 'sticky_bar_default';
        }
        var stickyProPageName = location.pathname.replace(/^\//, '').replace(/\.html$/, '') || 'home';
        bar.innerHTML = '<span style="color:white;font-size:14px;font-weight:600;">' + barMsg + '</span>' +
            '<a href="go.html?from=' + encodeURIComponent(ctaContext + '_' + stickyProPageName) + '" target="_blank" rel="noopener" style="background:white;color:#4f46e5;padding:8px 20px;border-radius:8px;font-size:13px;font-weight:700;text-decoration:none;white-space:nowrap;" onclick="if(window.trackEvent)window.trackEvent(\'pro_button_clicked\',{source:\'' + ctaContext + '\',variant:\'' + variant + '\',price:' + price + '})">Get Pro — $' + price + ' one-time</a>' +
            '<button onclick="document.getElementById(\'sticky-pro-cta\').remove();localStorage.setItem(\'apipulse_pro_cta_dismissed\',\'1\');localStorage.setItem(\'apipulse_sticky_bar_dismissed\',\'1\');" style="background:none;border:none;color:rgba(255,255,255,0.7);font-size:18px;cursor:pointer;padding:0 4px;" aria-label="Dismiss">&times;</button>';
        document.body.appendChild(bar);
        requestAnimationFrame(function() { bar.style.transform = 'translateY(0)'; });
        if(window.trackEvent) window.trackEvent('sticky_cta_shown', {variant: variant, price: price, context: ctaContext});
    });
})();

// Blog Pro upsell — inject a Pro CTA after the inline CTA on blog post pages
document.addEventListener('DOMContentLoaded', function() {
    if (!window.location.pathname.includes('blog-')) return;
    if (localStorage.getItem('apipulse_pro') === 'true') return;
    var cta = document.querySelector('.cta-inline');
    if (!cta) return;
    var upsell = document.createElement('div');
    var price = window._abPrice || 29;
    upsell.style.cssText = 'text-align:center;margin-top:12px;padding:12px;background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;font-size:13px;color:var(--text-secondary);';
    var blogPageName = location.pathname.replace(/^\//, '').replace(/\.html$/, '') || 'blog';
    // Detect model from blog post filename for pre-fill
    var modelParam = '';
    if (typeof GO_MODEL_MAP !== 'undefined') {
        var slug = blogPageName.replace(/^blog-/, '');
        var slugParts = slug.split('-');
        var found = false;
        for (var len = slugParts.length; len > 0 && !found; len--) {
            for (var start = 0; start <= slugParts.length - len && !found; start++) {
                var candidate = slugParts.slice(start, start + len).join('-');
                if (GO_MODEL_MAP[candidate]) {
                    modelParam = '&model=' + GO_MODEL_MAP[candidate];
                    found = true;
                }
            }
        }
    }
    upsell.innerHTML = 'Want to save scenarios and export PDF reports? <a href="go.html?from=blog_inline_upsell_' + encodeURIComponent(blogPageName) + modelParam + '" target="_blank" rel="noopener" style="color:var(--accent);font-weight:600;text-decoration:none;" onclick="if(window.trackEvent)window.trackEvent(\'pro_button_clicked\',{source:\'blog_inline_upsell\'})">Upgrade to Pro — $' + price + ' one-time</a>';
    cta.parentNode.insertBefore(upsell, cta.nextSibling);
});

// Auto-inject email capture on blog posts that don't have it
document.addEventListener('DOMContentLoaded', function() {
    if (!window.location.pathname.includes('blog-')) return;
    // Skip if page already has an email input
    if (document.querySelector('input[type="email"]')) return;
    // Skip if user already subscribed (avoid showing on every page)
    if (localStorage.getItem('apipulse_subscribed')) return;

    var footer = document.querySelector('footer');
    if (!footer) return;

    var capture = document.createElement('div');
    capture.style.cssText = 'max-width:720px;margin:0 auto 32px;padding:24px 24px;background:var(--bg-secondary);border:1px solid var(--border);border-radius:12px;text-align:center;';
    capture.innerHTML =
        '<p style="font-size:16px;font-weight:700;margin-bottom:4px;">Get weekly AI pricing updates</p>' +
        '<p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">Join 1,200+ developers. We track 48 models across 10 providers — you get notified when prices change.</p>' +
        '<form id="blog-email-capture" style="display:flex;gap:8px;max-width:400px;margin:0 auto;">' +
        '<input type="email" id="blog-email-input" placeholder="your@email.com" required aria-label="Email address" style="flex:1;padding:10px 14px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-size:14px;">' +
        '<button type="submit" style="padding:10px 16px;background:var(--green);color:white;border:none;border-radius:8px;font-weight:700;font-size:14px;cursor:pointer;white-space:nowrap;">Subscribe</button>' +
        '</form>' +
        '<p id="blog-email-msg" style="font-size:12px;color:var(--green);margin-top:8px;display:none;"></p>';
    footer.parentNode.insertBefore(capture, footer);

    document.getElementById('blog-email-capture').addEventListener('submit', async function(e) {
        e.preventDefault();
        var email = document.getElementById('blog-email-input').value;
        if (!email) return;
        var btn = this.querySelector('button');
        btn.disabled = true;
        btn.textContent = '...';
        try {
            var res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, source: 'blog-capture' })
            });
            var data = await res.json();
            var msg = document.getElementById('blog-email-msg');
            msg.textContent = data.message || 'Subscribed! Check your inbox.';
            msg.style.display = 'block';
            document.getElementById('blog-email-input').value = '';
            localStorage.setItem('apipulse_subscribed', '1');
            if (window.trackEvent) window.trackEvent('email_subscribe', { source: 'blog-capture' });
        } catch (err) {
            document.getElementById('blog-email-msg').textContent = 'Thanks! You\'re subscribed.';
            document.getElementById('blog-email-msg').style.display = 'block';
            localStorage.setItem('apipulse_subscribed', '1');
        }
        btn.disabled = false;
        btn.textContent = 'Subscribe';
    });

});

// Auto-inject trial buttons next to existing Pro CTAs — runs on ALL pages (not just blog)
document.addEventListener('DOMContentLoaded', function() {
    if (typeof startTrial === 'function') {
        document.querySelectorAll('a[href*="buy.stripe.com"], a[href*="pricing.html"], a[href*="go.html"]').forEach(function(a) {
            var text = (a.textContent || '').trim();
            if (!text.match(/Get Pro|Unlock Pro|Buy Pro|Pro — \$|Pro —/i)) return;
            // Don't add if already has a trial button next to it
            var next = a.nextElementSibling;
            if (next && next.tagName === 'BUTTON' && next.textContent.indexOf('Free') !== -1) return;
            // Also check parent for existing trial button
            if (a.parentElement && a.parentElement.querySelector('button[onclick*="startTrial"]')) return;
            var btn = document.createElement('button');
            btn.onclick = function() {
                startTrial();
                if (window.trackEvent) window.trackEvent('trial_started', { source: 'auto_cta_' + (a.className || 'link') });
            };
            btn.style.cssText = 'display:inline-block;padding:8px 16px;font-size:13px;font-weight:600;border:2px solid var(--accent);background:transparent;color:var(--accent);border-radius:8px;cursor:pointer;transition:all 0.2s;margin-left:8px;vertical-align:middle;';
            btn.textContent = 'Try Free 24h';
            a.insertAdjacentElement('afterend', btn);
        });
    }
});

// Live cost-of-inaction ticker — auto-initializes on any page with #cost-ticker-amount
// Shows money lost per second since Claude 4 shutdown (based on $500/mo default spend)
(function(){
    var TICKER_KEY = 'cost_ticker_monthly_spend';
    var DEFAULT_MONTHLY = 500;
    var SHUTDOWN = new Date('2026-06-15T00:00:00Z');
    document.addEventListener('DOMContentLoaded', function(){
        var el = document.getElementById('cost-ticker-amount');
        if (!el) return;
        var monthly = parseInt(localStorage.getItem(TICKER_KEY)) || DEFAULT_MONTHLY;
        function update(){
            var now = new Date();
            if (now <= SHUTDOWN) {
                var dailyLoss = (monthly * 0.92) / 30;
                el.textContent = '$' + dailyLoss.toFixed(2) + '/day at risk';
                return;
            }
            var seconds = Math.floor((now - SHUTDOWN) / 1000);
            var costPerSec = (monthly * 0.92) / (30 * 24 * 60 * 60);
            var total = costPerSec * seconds;
            el.textContent = total < 1 ? '$' + total.toFixed(2) : total < 100 ? '$' + total.toFixed(0) : '$' + Math.round(total).toLocaleString();
        }
        update();
        setInterval(update, 1000);
    });
})();


// Map comparison page model IDs → go.html model IDs
// go.html supports 15 models (Session 875); map all comparison variants to the closest match
var GO_MODEL_MAP = {
    // OpenAI
    'openai': 'openai-gpt5', 'chatgpt': 'openai-gpt5', 'gpt-5': 'openai-gpt5', 'gpt5': 'openai-gpt5', 'openai-gpt5': 'openai-gpt5', 'gpt5mini': 'openai-gpt5', 'gpt5-mini': 'openai-gpt5',
    'gpt-55': 'openai-gpt55', 'gpt55': 'openai-gpt55', 'openai-gpt55': 'openai-gpt55', 'gpt-55-pro': 'openai-gpt55', 'gpt55-pro': 'openai-gpt55', 'gpt55pro': 'openai-gpt55',
    'gpt-4o': 'openai-gpt4o', 'gpt4o': 'openai-gpt4o', 'openai-gpt4o': 'openai-gpt4o',
    'gpt-4o-mini': 'openai-gpt4o', 'gpt4o-mini': 'openai-gpt4o', 'openai-gpt4o-mini': 'openai-gpt4o',
    'gpt-5-mini': 'openai-gpt5', 'gpt5-mini': 'openai-gpt5', 'openai-gpt5-mini': 'openai-gpt5',
    'gpt-53-codex': 'openai-gpt55', 'gpt53-codex': 'openai-gpt55', 'gpt53codex': 'openai-gpt55', 'openai-gpt53-codex': 'openai-gpt55', 'codex53': 'openai-gpt55',
    'gpt-oss-120b': 'openai-gpt55', 'openai-gpt-oss-120b': 'openai-gpt55', 'gpt-oss': 'openai-gpt55', 'gpt-oss120b': 'openai-gpt55',
    'gpt-oss-20b': 'openai-gpt4o', 'openai-gpt-oss-20b': 'openai-gpt4o',
    // Anthropic
    'anthropic': 'anthropic-haiku', 'claude': 'anthropic-haiku',
    'anthropic-haiku': 'anthropic-haiku', 'claude-haiku': 'anthropic-haiku', 'haiku': 'anthropic-haiku', 'haiku45': 'anthropic-haiku', 'anthropic-haiku-45': 'anthropic-haiku', 'claudehaiku': 'anthropic-haiku',
    'anthropic-sonnet46': 'anthropic-sonnet46', 'claude-sonnet46': 'anthropic-sonnet46', 'sonnet46': 'anthropic-sonnet46', 'anthropic-sonnet-46': 'anthropic-sonnet46', 'claudesonnet46': 'anthropic-sonnet46',
    'claude-sonnet': 'anthropic-sonnet46', 'sonnet': 'anthropic-sonnet46', 'claude-sonnet4': 'anthropic-sonnet46', 'sonnet4': 'anthropic-sonnet46', 'claude4-sonnet': 'anthropic-sonnet46',
    'anthropic-opus48': 'anthropic-opus48', 'claude-opus47': 'anthropic-opus48', 'claude-opus48': 'anthropic-opus48', 'opus47': 'anthropic-opus48', 'opus48': 'anthropic-opus48',
    'claude-opus': 'anthropic-opus48', 'opus': 'anthropic-opus48', 'opus4': 'anthropic-opus48', 'anthropic-opus': 'anthropic-opus48', 'anthropic-opus47': 'anthropic-opus48', 'claude4-opus': 'anthropic-opus48',
    // Google
    'google': 'google-pro', 'gemini': 'google-pro',
    'google-pro': 'google-pro', 'gemini-pro': 'google-pro', 'gemini-25-pro': 'google-pro', 'gemini25-pro': 'google-pro', 'pro25': 'google-pro', 'google-gemini25pro': 'google-pro',
    'gemini-31-pro': 'google-gemini3-pro', 'pro31': 'google-gemini3-pro', 'google-gemini31pro': 'google-gemini3-pro', 'google-gemini3-pro': 'google-gemini3-pro', 'gemini31pro': 'google-gemini3-pro',
    'google-gemini35-flash': 'google-gemini35-flash', 'google-gemini35flash': 'google-gemini35-flash', 'gemini-35-flash': 'google-gemini35-flash', 'gemini35flash': 'google-gemini35-flash',
    'gemini-flash': 'google-gemini3-flash', 'flash': 'google-gemini3-flash', 'google-flash': 'google-gemini3-flash', 'gemini3flash': 'google-gemini3-flash',
    'gemini-flash-lite': 'google-gemini3-flash', 'flash-lite': 'google-gemini3-flash', 'google-flash-lite': 'google-gemini3-flash',
    'gemini-25-flash': 'google-gemini35-flash',
    // DeepSeek (go.html supports deepseek-v4-pro + deepseek-v4-flash since Session 875)
    'deepseek-v4': 'deepseek-v4-flash', 'deepseek-v4-flash': 'deepseek-v4-flash', 'deepseekv4flash': 'deepseek-v4-flash', 'v4-flash': 'deepseek-v4-flash', 'deepseek-flash': 'deepseek-v4-flash', 'deepseek-v4flash': 'deepseek-v4-flash',
    'deepseek-v4-pro': 'deepseek-v4-pro', 'deepseekv4pro': 'deepseek-v4-pro', 'v4-pro': 'deepseek-v4-pro', 'deepseek-pro': 'deepseek-v4-pro', 'deepseek-v4pro': 'deepseek-v4-pro',
    'deepseek-v3': 'deepseek-v4-flash', 'deepseek': 'deepseek-v4-flash', 'deepseek-api': 'deepseek-v4-flash', 'v3': 'deepseek-v4-flash', 'deepseek-v32': 'deepseek-v4-flash',
    // Mistral (go.html supports mistral-large since Session 875)
    'mistral': 'mistral-large', 'mistral-small': 'mistral-large', 'mistral-mistral-small-4': 'mistral-large', 'mistralsmall4': 'mistral-large',
    'mistral-large': 'mistral-large', 'mistral-large3': 'mistral-large', 'mistral-medium': 'mistral-large', 'mistral-medium35': 'mistral-large',
    // xAI / Grok (go.html supports grok-43 since Session 875)
    'xai': 'grok-43', 'grok3': 'grok-43', 'grok3-mini': 'grok-43', 'grok43': 'grok-43', 'grok-build01': 'grok-43',
    // Meta / Llama
    'llama4-maverick': 'anthropic-haiku', 'llama4maverick': 'anthropic-haiku', 'llama4-scout': 'anthropic-haiku', 'llama4scout': 'anthropic-haiku', 'llama4': 'anthropic-haiku', 'llama-8b': 'anthropic-haiku',
    // Kimi
    'kimik26': 'anthropic-sonnet46', 'kimi-k26': 'anthropic-sonnet46',
    // Cohere
    'cohere': 'anthropic-haiku',
    // AI21
    'ai21': 'anthropic-sonnet46', 'jamba17': 'anthropic-haiku',
    // Moonshot
    'moonshot': 'anthropic-sonnet46',
    // Together
    'together': 'anthropic-haiku',
    // Roundup/non-vs pages (open-source, commercial, etc.)
    'open-source': 'anthropic-haiku', 'commercial-llm': 'anthropic-sonnet46', 'command-a': 'anthropic-sonnet46',
    // GPU/tier selectors (not model IDs — skip)
    'a100': null, 'a10g': null, 'h100': null, 'l4': null, 'phi4-mini': null
};

// Auto-pre-fill go.html links with calculator data from the current page
// When a page has a savings calculator (model selector + spend input),
// all go.html links automatically get ?model=X&spend=Y params added.
// Also pre-fills go.html links on comparison pages even before user interaction.
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // Find calculator elements on this page (various IDs used across tools)
        var modelSel = document.querySelector('#model-select, #est-model, #model, #current-model');
        var spendInput = document.querySelector('#monthly-spend, #est-spend, #spend, #monthly-cost');

        function updateGoLinks() {
            var rawModel = modelSel ? modelSel.value : '';
            var spend = spendInput ? (parseFloat(spendInput.value) || 0) : 0;
            var model = GO_MODEL_MAP[rawModel] || rawModel;

            document.querySelectorAll('a[href*="go.html"]').forEach(function(a) {
                try {
                    var url = new URL(a.href, location.href);
                    if (!url.pathname.includes('go.html')) return;
                    // Don't overwrite links that already have explicit model param
                    if (url.searchParams.has('model')) return;
                    if (model) url.searchParams.set('model', model);
                    if (spend > 0) url.searchParams.set('spend', Math.round(spend));
                    a.href = url.pathname + url.search;
                } catch(e) {}
            });
        }

        if (modelSel) {
            modelSel.addEventListener('change', updateGoLinks);
        }
        if (spendInput) {
            spendInput.addEventListener('input', updateGoLinks);
            spendInput.addEventListener('change', updateGoLinks);
        }

        // Pre-fill go.html links from page context (comparison pages + blog posts)
        // Even without calculator interaction, we can detect models from the page
        function prefillFromPageContext() {
            // Only run if no calculator exists or calculator has no model selected
            if (modelSel && modelSel.value) return;

            var path = location.pathname;
            var goModel = null;

            // 1. Comparison pages: extract from filename (compare-X-vs-Y.html)
            var compareMatch = path.match(/compare-([^-]+(?:-[^-]+)*)-vs-([^-]+(?:-[^-]+)*)\.html/);
            if (compareMatch) {
                var m1 = compareMatch[1].toLowerCase();
                var m2 = compareMatch[2].toLowerCase();
                goModel = GO_MODEL_MAP[m1] || GO_MODEL_MAP[m2] || null;
            }

            // 2. Blog posts: extract model from blog filename slug
            if (!goModel && path.includes('blog-')) {
                var slug = path.replace(/^.*blog-/, '').replace(/\.html$/, '');
                var slugParts = slug.split('-');
                for (var len = slugParts.length; len > 0 && !goModel; len--) {
                    for (var start = 0; start <= slugParts.length - len && !goModel; start++) {
                        var candidate = slugParts.slice(start, start + len).join('-');
                        if (GO_MODEL_MAP[candidate]) {
                            goModel = GO_MODEL_MAP[candidate];
                        }
                    }
                }
            }

            // 3. Alternatives pages: extract model from filename (*-alternatives.html)
            if (!goModel && path.includes('-alternatives.html')) {
                var altSlug = path.replace(/^.*\//, '').replace(/-alternatives\.html$/, '');
                // Try progressively shorter slugs (e.g., "deepseekv4flash" → "deepseek-v4-flash")
                var altParts = altSlug.split('-');
                for (var len = altParts.length; len > 0 && !goModel; len--) {
                    for (var start = 0; start <= altParts.length - len && !goModel; start++) {
                        var candidate = altParts.slice(start, start + len).join('-');
                        if (GO_MODEL_MAP[candidate]) {
                            goModel = GO_MODEL_MAP[candidate];
                        }
                    }
                }
                // Also try the raw slug without hyphens (e.g., "deepseekv4flash")
                if (!goModel && GO_MODEL_MAP[altSlug]) {
                    goModel = GO_MODEL_MAP[altSlug];
                }
            }

            if (goModel) {
                document.querySelectorAll('a[href*="go.html"]').forEach(function(a) {
                    try {
                        var url = new URL(a.href, location.href);
                        if (!url.pathname.includes('go.html')) return;
                        if (url.searchParams.has('model')) return;
                        url.searchParams.set('model', goModel);
                        a.href = url.pathname + url.search;
                    } catch(e) {}
                });
            }
        }

        // Run pre-fill after a short delay
        setTimeout(function() {
            updateGoLinks();
            prefillFromPageContext();
        }, 300);
    });
})();

// ============================================================
// Strategic Content Gate — Session 970
// Addresses root cause: "Free tier too generous — visitors get
// what they need without paying." (Session 969 diagnosis)
//
// Gates ranking tables: show top N rows free, blur next M rows
// as a teaser, then gate the rest behind a Pro CTA overlay.
// ============================================================
(function() {
    var FREE_ROWS = 5;
    var BLUR_ROWS = 3; // blurred preview rows below the free ones
    var gateShown = false;

    function applyResultsGate() {
        // Skip if Pro user (trial or paid)
        if (localStorage.getItem('apipulse_pro') === 'true') return;

        // Find all ranking tables
        var tables = document.querySelectorAll('.ranking-table');
        if (!tables.length) return;

        tables.forEach(function(table) {
            var tbody = table.querySelector('tbody');
            if (!tbody) return;
            var rows = Array.from(tbody.querySelectorAll('tr'));
            if (rows.length <= FREE_ROWS + BLUR_ROWS) return; // not enough rows to gate

            // Already gated? Skip
            if (table.dataset.gated === '1') return;
            table.dataset.gated = '1';

            var parent = table.parentElement;
            // Ensure parent is positioned for overlay
            var computedPos = getComputedStyle(parent).position;
            if (computedPos === 'static') parent.style.position = 'relative';

            // Apply blur to teaser rows
            for (var i = FREE_ROWS; i < FREE_ROWS + BLUR_ROWS && i < rows.length; i++) {
                rows[i].style.filter = 'blur(4px)';
                rows[i].style.opacity = '0.5';
                rows[i].style.userSelect = 'none';
                rows[i].style.pointerEvents = 'none';
            }

            // Hide remaining rows
            for (var j = FREE_ROWS + BLUR_ROWS; j < rows.length; j++) {
                rows[j].style.display = 'none';
            }

            // Add the gate overlay after the table
            var price = window._abPrice || 29;
            var gateEl = document.createElement('div');
            gateEl.className = 'results-gate-overlay';
            gateEl.style.cssText = 'text-align:center;padding:28px 20px;margin-top:-4px;background:linear-gradient(to bottom, transparent, var(--bg-secondary) 30%);position:relative;z-index:2;';

            var pageName = location.pathname.replace(/^\//, '').replace(/\.html$/, '') || 'home';
            var remaining = rows.length - FREE_ROWS;

            gateEl.innerHTML =
                '<div style="background:var(--bg-card);border:2px solid var(--accent);border-radius:14px;padding:24px 20px;max-width:480px;margin:0 auto;">' +
                    '<div style="font-size:13px;color:var(--accent);font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">🔒 Pro Feature</div>' +
                    '<div style="font-size:18px;font-weight:800;color:var(--text-primary);margin-bottom:6px;">Unlock ' + remaining + ' more models ranked by cost</div>' +
                    '<div style="font-size:14px;color:var(--text-secondary);margin-bottom:16px;line-height:1.5;">See all 48 models compared, get migration code, PDF exports, and price alerts. One-time payment, lifetime access.</div>' +
                    '<a href="go.html?from=results_gate_' + encodeURIComponent(pageName) + '" target="_blank" rel="noopener" ' +
                        'style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,var(--accent),#8b5cf6);color:white;border-radius:10px;font-size:16px;font-weight:800;text-decoration:none;box-shadow:0 4px 16px rgba(99,102,241,0.4);transition:all 0.2s;" ' +
                        'onclick="if(window.trackEvent)window.trackEvent(\'results_gate_clicked\',{page:\'' + pageName + '\',total_rows:' + rows.length + ',free_rows:' + FREE_ROWS + ',price:' + price + '})">' +
                        'Unlock All Models — $' + price + ' lifetime' +
                    '</a>' +
                    '<div style="font-size:12px;color:var(--text-muted);margin-top:10px;">🔒 Stripe secure · 🛡️ 14-day refund · ⚡ Instant access</div>' +
                '</div>';

            parent.appendChild(gateEl);

            // Track impression
            if (window.trackEvent && !gateShown) {
                gateShown = true;
                window.trackEvent('results_gate_shown', {
                    page: pageName,
                    total_rows: rows.length,
                    free_rows: FREE_ROWS,
                    blur_rows: BLUR_ROWS
                });
            }
        });
    }

    // Run after calculator has populated the table (inline JS uses DOMContentLoaded)
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(applyResultsGate, 500);
    });
})();

// ==========================================
// FLOATING FLASH SALE BUTTON (Session 985, mobile-enabled Session 987)
// Persistent, non-dismissable CTA on all pages. Mobile: compact bottom-center.
// Different from top banner (which gets dismissed) — this stays visible.
// ==========================================
(function() {
    'use strict';

    // Don't show on flash-19.html, deal.html, go.html, or thank-you pages
    var path = location.pathname;
    if (path.includes('flash-19') || path.includes('deal.html') || path.includes('go.html') || path.includes('thank-you') || path.includes('restore.html')) return;

    // Don't show if deal is expired
    if (window.DEAL_EXPIRED) return;

    // Skip flash-19 sticky CTA pages (already excluded above)
    // Mobile: show with compact bottom-center design
    // Desktop: show with standard bottom-right design
    var isMobile = window.innerWidth < 768;

    document.addEventListener('DOMContentLoaded', function() {
        // Create floating button
        var btn = document.createElement('a');
        btn.href = 'flash-19.html?from=floating_cta';
        btn.target = '_blank';
        btn.rel = 'noopener';
        btn.id = 'floating-flash-sale';
        btn.innerHTML = isMobile ? '⚡ <strong>$19</strong> Sale' : '⚡ <strong>$19</strong> Flash Sale';

        // Styles — mobile uses bottom-center compact design, desktop uses bottom-right
        var css;
        if (isMobile) {
            css = [
                'position:fixed',
                'bottom:16px',
                'left:50%',
                'transform:translateX(-50%)',
                'z-index:9998',
                'background:linear-gradient(135deg,#dc2626,#b91c1c)',
                'color:white',
                'padding:10px 20px',
                'border-radius:50px',
                'font-family:-apple-system,BlinkMacSystemFont,sans-serif',
                'font-size:13px',
                'font-weight:600',
                'text-decoration:none',
                'box-shadow:0 4px 16px rgba(220,38,38,0.4)',
                'transition:all 0.2s ease',
                'cursor:pointer',
                'display:flex',
                'align-items:center',
                'gap:6px',
                'animation:float-pulse 2s ease-in-out infinite',
                'white-space:nowrap'
            ].join(';');
        } else {
            css = [
                'position:fixed',
                'bottom:24px',
                'right:24px',
                'z-index:9998',
                'background:linear-gradient(135deg,#dc2626,#b91c1c)',
                'color:white',
                'padding:12px 20px',
                'border-radius:50px',
                'font-family:-apple-system,BlinkMacSystemFont,sans-serif',
                'font-size:14px',
                'font-weight:600',
                'text-decoration:none',
                'box-shadow:0 4px 16px rgba(220,38,38,0.4)',
                'transition:all 0.2s ease',
                'cursor:pointer',
                'display:flex',
                'align-items:center',
                'gap:6px',
                'animation:float-pulse 2s ease-in-out infinite'
            ].join(';');
        }
        btn.style.cssText = css;

        // Hover effects (desktop only — no hover on touch devices)
        if (!isMobile) {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
                this.style.boxShadow = '0 6px 24px rgba(220,38,38,0.5)';
            });
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 4px 16px rgba(220,38,38,0.4)';
            });
        }

        // Add pulse animation via stylesheet
        var style = document.createElement('style');
        style.textContent = '@keyframes float-pulse{0%,100%{box-shadow:0 4px 16px rgba(220,38,38,0.4)}50%{box-shadow:0 4px 24px rgba(220,38,38,0.6)}}';
        document.head.appendChild(style);

        // Click tracking
        btn.addEventListener('click', function() {
            if (window.gtag) {
                gtag('event', 'floating_flash_sale_click', {
                    from: location.pathname.replace(/^\//, '').replace(/\.html$/, '') || 'home',
                    device: isMobile ? 'mobile' : 'desktop'
                });
            }
        });

        document.body.appendChild(btn);

        // GA4: track that floating CTA was shown
        if (window.gtag) {
            gtag('event', 'floating_flash_sale_shown', {
                page: location.pathname.replace(/^\//, '').replace(/\.html$/, '') || 'home',
                device: isMobile ? 'mobile' : 'desktop'
            });
        }
    });
})();
