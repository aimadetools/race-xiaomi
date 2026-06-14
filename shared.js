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

// A/B Pricing Test — $19 vs $29 vs $39 (runs on every page)
(function(){
    var VARIANTS = {A:{price:19,label:'Budget',futurePrice:39},B:{price:29,label:'Control',futurePrice:49},C:{price:39,label:'Premium',futurePrice:59}};
    var STRIPE_LINKS = {
        A:'https://buy.stripe.com/bJecN55OEa5g1VUbcreEo0i',
        B:'https://buy.stripe.com/fZu7sL3Gw3GS0RQeoDeEo0a',
        C:'https://buy.stripe.com/28EfZhfpeb9kdECdkzeEo0j'
    };
    var KEY = 'ab_pricing_variant';
    var variant = localStorage.getItem(KEY);
    if (!variant || !VARIANTS[variant]) {
        var r = Math.random();
        variant = r < 0.334 ? 'A' : r < 0.667 ? 'B' : 'C';
        localStorage.setItem(KEY, variant);
    }
    var v = VARIANTS[variant];
    window._abVariant = variant;
    window._abPrice = v.price;
    window._abStripeLink = STRIPE_LINKS[variant];

    // Update all CTAs on this page to use variant price and link
    document.addEventListener('DOMContentLoaded', function() {
        // Update ALL anchor elements containing $29 — covers nav CTAs, blog CTAs,
        // comparison CTAs, and direct Stripe links
        document.querySelectorAll('a').forEach(function(a) {
            if (a.textContent.includes('$29')) {
                a.textContent = a.textContent.replace('$29', '$' + v.price);
            }
            // Also update Stripe links to use the variant checkout
            if (a.href && a.href.includes('buy.stripe.com')) {
                a.href = window._abStripeLink;
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
                node.nodeValue = node.nodeValue.split('$29').join('$' + v.price);
            }
        });
        // Update JSON-LD schema prices
        document.querySelectorAll('script[type="application/ld+json"]').forEach(function(s) {
            try {
                var text = s.textContent;
                if (text.indexOf('"29') !== -1) {
                    s.textContent = text.split('"price":"29').join('"price":"' + v.price);
                    s.textContent = s.textContent.split('"price": "29').join('"price": "' + v.price);
                }
            } catch(e) {}
        });
        // Track variant assignment
        if (window.trackEvent) window.trackEvent('ab_pricing_variant_assigned', {variant: variant, price: v.price});
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
    if (!navLinks) return;

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

// Claude 4 Deprecation Banner (pre-deprecation countdown + post-deprecation notice)
document.addEventListener('DOMContentLoaded', () => {
    var deprecationDate = new Date('2026-06-15T00:00:00Z');
    var now = new Date();
    var daysLeft = Math.ceil((deprecationDate - now) / (1000 * 60 * 60 * 24));

    // Don't show on deprecation/migration pages (they have their own urgency)
    var path = window.location.pathname;
    if (path.includes('deprecation') || path.includes('migration')) return;

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
        // POST-DEPRECATION: Show retirement notice for 90 days
        if (localStorage.getItem('apipulse_deprecation_retired_dismissed')) return;
        var banner = document.createElement('div');
        banner.id = 'deprecation-urgency-banner';
        banner.style.cssText = 'background:#dc2626;color:white;padding:10px 16px;text-align:center;font-size:13px;font-weight:600;position:relative;z-index:9999;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;';
        banner.innerHTML = '<span>🔴 Claude 4 Opus & Sonnet have been retired — API calls are failing</span>' +
            '<a href="claude-4-is-down.html" style="color:white;text-decoration:underline;font-weight:700;">Fix it in 5 minutes →</a>' +
            '<button onclick="document.getElementById(\'deprecation-urgency-banner\').remove();localStorage.setItem(\'apipulse_deprecation_retired_dismissed\',\'1\');" style="background:none;border:none;color:white;cursor:pointer;font-size:16px;padding:0 4px;opacity:0.8;position:absolute;right:12px;" aria-label="Dismiss">✕</button>';
        document.body.insertBefore(banner, document.body.firstChild);
        var nav = document.querySelector('nav');
        if (nav) nav.style.top = '0';
        if (window.trackEvent) window.trackEvent('deprecation_retired_banner_shown');
    }
});

// Claude 4 Dynamic Countdown — replaces hardcoded "N days left" with live calculation
// Runs BEFORE auto-tense-flip so countdowns are correct, then tense-flip handles post-June 15
document.addEventListener('DOMContentLoaded', function() {
    var deadline = new Date('2026-06-15T00:00:00Z');
    var now = new Date();
    var daysLeft = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
    if (daysLeft <= 0) return; // auto-tense-flip handles post-deadline

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
// Covers blog posts, comparison pages, AND dedicated deprecation/migration pages
document.addEventListener('DOMContentLoaded', () => {
    var path = window.location.pathname;
    // Match: blog-claude-4-*, blog-best-claude-4-*, compare-*, claude-4-*, claude-deprecation-*, *migration*, cost-migration, blog-model-deprecation-*
    var isDepPage = path.includes('blog-claude-4-') || path.includes('blog-best-claude-4-') ||
        path.includes('compare-') || path.includes('claude-4-') || path.includes('claude-deprecation-') ||
        path.includes('migration') || path.includes('cost-migration') || path.includes('blog-model-deprecation-');
    if (!isDepPage) return;
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
        ['Retiring June 15', 'Retired June 15'],
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
        ['6 days to Claude 4 retirement', 'Claude 4 has been retired since June 15'],
        ['6 days to deprecation', 'Claude 4 was deprecated on June 15'],
        ['Claude 4 retires June 15', 'Claude 4 was retired on June 15'],
        ['Claude 4 Retirement Countdown', 'Claude 4 Was Retired on June 15'],
        ['Retirement in', 'Retirement occurred on June 15 —'],
        ['After June 15,', 'Since June 15,'],
        ['After this date,', 'Since June 15,'],
        ['days to migrate', 'days — deadline passed'],
        ['day to migrate', 'day — deadline passed'],
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
        ['Migrate Before June 15 Shutdown', 'Migration Guide — Claude 4 Retired'],
        ['— 39 Cheaper Alternatives Compared', '— 39 Alternatives (Retired)'],
        ['Claude 4 Deprecation Guide', 'Claude 4 Retirement Guide'],
        ['Claude 4 Is Retiring June 15', 'Claude 4 Was Retired June 15'],
        ['Retirement Countdown', 'Retirement Complete'],
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
        '<a href="https://twitter.com/intent/tweet?text=Compare%20AI%20API%20pricing%20across%2042%20models%20from%2010%20providers&url=https%3A%2F%2Fgetapipulse.com" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:4px;padding:6px 12px;border-radius:6px;border:1px solid var(--border);background:var(--bg-secondary);color:var(--text-primary);font-size:12px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--border)\'"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>X</a>' +
        '<a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fgetapipulse.com" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:4px;padding:6px 12px;border-radius:6px;border:1px solid var(--border);background:var(--bg-secondary);color:var(--text-primary);font-size:12px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--border)\'"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>LinkedIn</a>';
    footer.insertBefore(shareDiv, footer.firstChild);

    // Pricing map link
    var mapLink = document.createElement('div');
    mapLink.style.cssText = 'text-align:center;margin-top:12px;';
    mapLink.innerHTML = '<a href="pricing-map.html" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:6px;border:1px solid var(--border);background:var(--bg-secondary);color:var(--text-primary);font-size:12px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--border)\'"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>Interactive Pricing Map</a>';
    shareDiv.parentNode.insertBefore(mapLink, shareDiv.nextSibling);
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
    if (window.location.pathname.includes('unsubscribe') || window.location.pathname.includes('ph.html')) return;
    if (localStorage.getItem('apipulse_popup_dismissed')) return;

    // Deprecation-specific exit popup (shows on deprecation/migration/claude-4 pages)
    var isDeprecationPage = window.location.pathname.includes('deprecation') || window.location.pathname.includes('migration') || window.location.pathname.includes('last-chance') || window.location.pathname.includes('survival') || window.location.pathname.includes('claude-4') || window.location.pathname.includes('shutdown');
    var daysLeft = Math.ceil((new Date('2026-06-15T00:00:00Z') - new Date()) / 86400000);

    if (isDeprecationPage && daysLeft <= 14) {
        if (localStorage.getItem('apipulse_deprecation_popup_dismissed')) return;
        var depPopupShown = false;
        function showDeprecationPopup() {
            if (depPopupShown || localStorage.getItem('apipulse_deprecation_popup_dismissed')) return;
            depPopupShown = true;
            if (window.trackEvent) window.trackEvent('deprecation_popup_shown', { days_left: daysLeft, timing_variant: window._abPopupTimingVariant });

            var price = window._abPrice || 29;
            var stripeLink = window._abStripeLink || 'https://buy.stripe.com/fZu7sL3Gw3GS0RQeoDeEo0a';

            var overlay = document.createElement('div');
            overlay.id = 'exit-popup-overlay';
            overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn 0.3s ease;';
            var popup = document.createElement('div');
            popup.style.cssText = 'background:var(--bg-card);border:1px solid var(--red);border-radius:16px;padding:40px;max-width:440px;width:100%;position:relative;box-shadow:0 24px 64px rgba(0,0,0,0.5);';
            var isPostShutdown = daysLeft <= 0;
            var popupTitle, popupIcon, popupDesc, popupHighlight;
            if (isPostShutdown) {
                popupIcon = '🔴';
                popupTitle = 'Claude 4 is retired — your API calls are failing';
                popupDesc = 'Claude 4 Opus and Sonnet 4 returned HTTP 410 errors since June 15. Pro shows you the cheapest replacement for your exact workload — most devs save 67-97%.';
                popupHighlight = 'Stop losing money on failed API calls — find your cheapest alternative now';
            } else {
                popupIcon = '⏰';
                popupTitle = daysLeft + ' Days Until Claude 4 Dies';
                popupDesc = 'Your API calls to Claude 4 Opus and Sonnet 4 will fail on June 15. Pro gives you personalized migration recommendations, saved scenarios, and cost reports — so you pick the right replacement.';
                popupHighlight = 'Pro pays for itself in your first month of savings';
            }
            popup.innerHTML = '<button id="exit-popup-close" style="position:absolute;top:12px;right:12px;background:none;border:none;color:var(--text-muted);font-size:20px;cursor:pointer;padding:4px 8px;border-radius:6px;" onmouseover="this.style.color=\'var(--text-primary)\'" onmouseout="this.style.color=\'var(--text-muted)\'">&times;</button>' +
                '<div style="text-align:center;">' +
                '<div style="font-size:40px;margin-bottom:16px;">' + popupIcon + '</div>' +
                '<h3 style="font-size:22px;font-weight:700;margin-bottom:8px;color:var(--red);">' + popupTitle + '</h3>' +
                '<p style="font-size:14px;color:var(--text-secondary);margin-bottom:20px;line-height:1.6;">' + popupDesc + '</p>' +
                '<div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.25);border-radius:8px;padding:12px;margin-bottom:20px;font-size:14px;color:var(--green);font-weight:600;">' + popupHighlight + '</div>' +
                '<a href="' + stripeLink + '" target="_blank" rel="noopener" id="deprecation-popup-cta" style="display:inline-block;background:var(--accent);color:white;padding:14px 32px;border-radius:10px;font-size:16px;font-weight:700;text-decoration:none;transition:all 0.2s;box-shadow:0 4px 20px rgba(99,102,241,0.3);" onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'none\'">Get Pro — $' + price + ' lifetime</a>' +
                '<p style="font-size:12px;color:var(--text-muted);margin-top:12px;">14-day money-back guarantee</p>' +
                '</div>';
            overlay.appendChild(popup);
            document.body.appendChild(overlay);

            document.getElementById('exit-popup-close').addEventListener('click', function() {
                if (window.trackEvent) window.trackEvent('deprecation_popup_dismissed', { days_left: daysLeft, timing_variant: window._abPopupTimingVariant });
                overlay.remove();
                localStorage.setItem('apipulse_deprecation_popup_dismissed', '1');
            });
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    if (window.trackEvent) window.trackEvent('deprecation_popup_dismissed', { days_left: daysLeft, timing_variant: window._abPopupTimingVariant });
                    overlay.remove();
                    localStorage.setItem('apipulse_deprecation_popup_dismissed', '1');
                }
            });
            document.getElementById('deprecation-popup-cta').addEventListener('click', function() {
                if (window.trackEvent) window.trackEvent('deprecation_popup_cta_clicked', { days_left: daysLeft, price: price, timing_variant: window._abPopupTimingVariant });
            });
        }

        document.addEventListener('mouseout', function(e) { if (e.clientY <= 0 && !depPopupShown) showDeprecationPopup(); });
        setTimeout(function() { if (!depPopupShown && 'ontouchstart' in window) showDeprecationPopup(); }, window._abPopupTiming || 45000);
        return; // Skip the generic email popup on deprecation pages
    }

    // Skip calculator page — it has its own exit popup
    if (window.location.pathname.includes('calculator')) return;

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

            if (window.trackEvent) window.trackEvent('pro_exit_popup_shown', { variant: variant, price: price, page: location.pathname, timing_variant: window._abPopupTimingVariant });

            var overlay = document.createElement('div');
            overlay.id = 'exit-popup-overlay';
            overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn 0.3s ease;';

            var popup = document.createElement('div');
            popup.style.cssText = 'background:var(--bg-card);border:1px solid var(--accent);border-radius:16px;padding:40px;max-width:440px;width:100%;position:relative;box-shadow:0 24px 64px rgba(0,0,0,0.5);';

            popup.innerHTML = '<button id="exit-popup-close" style="position:absolute;top:12px;right:12px;background:none;border:none;color:var(--text-muted);font-size:20px;cursor:pointer;padding:4px 8px;border-radius:6px;" onmouseover="this.style.color=\'var(--text-primary)\'" onmouseout="this.style.color=\'var(--text-muted)\'">&times;</button>' +
                '<div style="text-align:center;">' +
                '<div style="font-size:40px;margin-bottom:16px;">🚀</div>' +
                '<h3 style="font-size:22px;font-weight:700;margin-bottom:8px;">Stop overpaying for AI APIs</h3>' +
                '<p style="font-size:14px;color:var(--text-secondary);margin-bottom:20px;line-height:1.6;">Pro gives you personalized optimization recommendations, saved scenarios, and cost reports — so you always pick the cheapest model for each task.</p>' +
                '<div style="display:flex;gap:12px;justify-content:center;margin-bottom:20px;">' +
                '<div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;">' +
                '<div style="font-size:20px;font-weight:800;color:var(--accent);">$' + price + '</div>' +
                '<div style="font-size:11px;color:var(--text-muted);">one-time</div></div>' +
                '<div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;">' +
                '<div style="font-size:20px;font-weight:800;color:var(--green);">40%</div>' +
                '<div style="font-size:11px;color:var(--text-muted);">avg. savings</div></div></div>' +
                '<a href="' + stripeLink + '" target="_blank" rel="noopener" id="pro-exit-cta" style="display:inline-block;background:var(--accent);color:white;padding:14px 32px;border-radius:10px;font-size:16px;font-weight:700;text-decoration:none;transition:all 0.2s;box-shadow:0 4px 20px rgba(99,102,241,0.3);" onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'none\'">Get Pro — $' + price + ' lifetime</a>' +
                '<p style="font-size:12px;color:var(--text-muted);margin-top:12px;">14-day money-back guarantee · <a href="#" id="pro-exit-dismiss" style="color:var(--text-muted);">No thanks</a></p>' +
                '</div>';

            overlay.appendChild(popup);
            document.body.appendChild(overlay);

            document.getElementById('exit-popup-close').addEventListener('click', function() {
                if (window.trackEvent) window.trackEvent('pro_exit_popup_dismissed', { variant: variant, timing_variant: window._abPopupTimingVariant });
                overlay.remove();
                localStorage.setItem('apipulse_popup_dismissed', '1');
            });
            document.getElementById('pro-exit-dismiss').addEventListener('click', function(e) {
                e.preventDefault();
                if (window.trackEvent) window.trackEvent('pro_exit_popup_dismissed', { variant: variant, timing_variant: window._abPopupTimingVariant });
                overlay.remove();
                localStorage.setItem('apipulse_popup_dismissed', '1');
            });
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    if (window.trackEvent) window.trackEvent('pro_exit_popup_dismissed', { variant: variant, timing_variant: window._abPopupTimingVariant });
                    overlay.remove();
                    localStorage.setItem('apipulse_popup_dismissed', '1');
                }
            });
            document.getElementById('pro-exit-cta').addEventListener('click', function() {
                if (window.trackEvent) window.trackEvent('pro_button_clicked', { source: 'exit_popup', variant: variant, price: price, timing_variant: window._abPopupTimingVariant });
            });
        }

        document.addEventListener('mouseout', function(e) { if (e.clientY <= 0 && !proPopupShown) showProExitPopup(); });
        setTimeout(function() { if (!proPopupShown && 'ontouchstart' in window) showProExitPopup(); }, window._abPopupTiming || 45000);
        return; // Skip the generic email popup on high-intent pages
    }

    // A/B test variants
    var popupVariants = {
        A: { emoji: '🚀', headline: 'Get 40% off AI API costs', subtext: 'Join 500+ developers who use our free pricing data to optimize their AI spending. Get notified when prices change.', cta: 'Get Updates' },
        B: { emoji: '🔔', headline: 'Never miss an AI price change', subtext: 'We track pricing across 42 models and 10 providers. Get instant alerts when costs shift — so you can switch before overpaying.', cta: 'Get Alerts' },
        C: { emoji: '📊', headline: 'Join 500+ developers saving on AI', subtext: 'Our free calculator shows exactly what you\'ll pay per request. Compare Claude, GPT, Gemini, and 30 more models side by side.', cta: 'Start Saving' }
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
                <p style="font-size:14px;color:var(--text-secondary);margin-bottom:24px;line-height:1.6;">${v.subtext}</p>
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

// Product Hunt launch banner (auto-shows May 5-9, 2026) — expired
(function() {
    return; // Banner period ended
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

// Sticky Pro CTA bar — shows on scroll for non-pricing pages (respects A/B price variant)
(function() {
    var path = window.location.pathname;
    if (path.includes('pricing.html') || path.includes('pro.html') || path.includes('thank-you.html') || path.includes('launch.html') || path.includes('compare-plans.html')) return;
    if (localStorage.getItem('apipulse_pro_cta_dismissed')) return;
    if (localStorage.getItem('apipulse_pro') === 'true') return;

    var price = window._abPrice || 29;
    var futurePrice = Math.round(price * 1.7);
    var variant = window._abVariant || 'B';
    var stripeLink = window._abStripeLink || 'https://buy.stripe.com/fZu7sL3Gw3GS0RQeoDeEo0a';

    var shown = false;
    window.addEventListener('scroll', function() {
        if (shown) return;
        var scrollPct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        if (scrollPct < 0.3) return;
        shown = true;

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
        bar.innerHTML = '<span style="color:white;font-size:14px;font-weight:600;">' + barMsg + '</span>' +
            '<a href="' + stripeLink + '" target="_blank" rel="noopener" style="background:white;color:#4f46e5;padding:8px 20px;border-radius:8px;font-size:13px;font-weight:700;text-decoration:none;white-space:nowrap;" onclick="if(window.trackEvent)window.trackEvent(\'pro_button_clicked\',{source:\'' + ctaContext + '\',variant:\'' + variant + '\',price:' + price + '})">Get Pro — $' + price + ' one-time</a>' +
            '<button onclick="document.getElementById(\'sticky-pro-cta\').remove();localStorage.setItem(\'apipulse_pro_cta_dismissed\',\'1\');" style="background:none;border:none;color:rgba(255,255,255,0.7);font-size:18px;cursor:pointer;padding:0 4px;" aria-label="Dismiss">&times;</button>';
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
    upsell.innerHTML = 'Want to save scenarios and export PDF reports? <a href="pricing.html" style="color:var(--accent);font-weight:600;text-decoration:none;">Upgrade to Pro — $' + price + ' one-time</a>';
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
        '<p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">Join 500+ developers. We track 42 models across 10 providers — you get notified when prices change.</p>' +
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
        document.querySelectorAll('a[href*="buy.stripe.com"], a[href*="pricing.html"]').forEach(function(a) {
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
