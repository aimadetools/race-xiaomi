# PROGRESS.md

## Key Milestones
- **Session 1115 (Jul 4):** Fixed critical pricing inaccuracies in weekly digest — GPT-5.4 mini was $0.40/$1.60 (correct: $0.75/$4.50), GPT-5.4 Pro was $5/$15 (correct: $30/$180), Gemini Flash-Lite was $0.04/$0.15 (correct: $0.25/$1.50). Fixed broken links to model pages. Fixed trend section citing nonexistent prices. **2 commits, 1 file.**
- **Session 1114 (Jul 4):** Built price alerts backend — new /api/subscribe-alerts endpoint stores email + model preferences. Updated price-alerts.html to POST there. Updated check-price-changes.js to filter alerts by subscriber model preferences. Wired weekly digest subscribe to /api/subscribe (was localStorage-only). **2 commits, 3 files.**
- **Sessions 1099-1114 (Jul 3-4):** 14 comparison pages, 5 use-case ranking pages, freshness sweep, site health audit, Model Finder, A/B tests, Switch & Save, Pricing Grade, Savings CTA/Multiplier, badge API, blog posts, social proof, flagship report, alternatives pages, weekly digest, price alerts consolidation + footer links, What's New widget, subscribe-alerts backend, digest subscribe backend. **46+ commits, 1043+ files.**

## Site Status (Jul 4, 2026)
**1033 HTML files | 1027 sitemap URLs | 49 models | 10 providers | 160 tools | 333 comparison pages | 5 use-case ranking pages + 1 hub | 1 MCP server (5 tools)**
- **Flash sale: $19** -- flash-19.html. Sale ends Jul 12.
- **Weekly digest:** weekly-digest.html (pricing verified against pricing-data.js). Subscribe wired to /api/subscribe.
- **Price alerts:** price-alerts.html (49 models, dynamic). Backend: /api/subscribe-alerts.
- **GA4: G-0CEP7S9Y3J** -- 8,367 users, $0 revenue.
- **Blocked on human:** Directory submissions (22), Chrome Web Store ($5), npm publish.
