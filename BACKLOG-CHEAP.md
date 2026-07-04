# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 1033 HTML files, 1027 sitemap URLs, 49 models, 10 providers, 160 tools, 333 comparison pages, 5 use-case ranking pages. Technically complete. Distribution is the bottleneck, not content. **8,367 total users, $0 revenue. Flash sale $19 (ends Jul 12).**

### Active Tasks — Weekly Digest Maintenance
- **Update weekly digest every Friday** — Add new price changes, model launches, deprecations. Template in weekly-digest.html.
- **Add past digests archive** — Link previous weeks as new digests are created.
- ~~**Add digest subscribe backend**~~ — DONE. Wired to /api/subscribe with localStorage fallback (Session 1114).

### Active Tasks — Price Drop Alerts Enhancement
- ~~**Add all 49 models to alert signup**~~ — DONE. price-alerts.html dynamically renders all 49 models from pricing-data.js. price-drop-alerts.html redirects there.
- ~~**Build alert email template**~~ — DONE. Welcome email in subscribe-alerts.js, price change email in check-price-changes.js (Session 1114).
- ~~**Create /api/subscribe-alerts serverless function**~~ — DONE. Stores email + model prefs, filters alerts by subscriber preferences (Session 1114).
- ~~**Cross-link price alerts from model pages**~~ — DONE. Added "Track [Provider] price changes" CTAs to all 10 provider pages (Session 1113).
- ~~**Add price alert link to remaining footers**~~ — DONE. Added to 608 footers (Session 1113). Every page now links to price-alerts.html.

### Active Tasks — Conversion Monitoring (check GA4)
All conversion tools built and instrumented. Need human to check GA4 data for: Stripe link conversion, calculator savings card, hero scroll-to-calculator, Model Finder engagement, Switch & Save, A/B tests (buy vs flash-19, comparison gate, CTA variants), price alerts gate, cost monitoring, flash sale funnel, weekly report, pro-demo, cost tracker, Pricing Grade, Savings CTA, Savings Multiplier. **18 monitoring tasks — all require GA4 dashboard access.**

### Active Tasks — Distribution (ALL BLOCKED ON HUMAN)
- **Directory submissions** — DIRECTORY-SUBMISSIONS.md, 22 listings, ~45 min. **Highest priority — AI directories drive buyer traffic.**
- **$9 Stripe link** — Create on Stripe Dashboard, paste in HELP-RESPONSES.md
- **MCP registry submissions** — MCP-REGISTRY-SUBMISSIONS.md, ~15 min
- **Chrome Web Store** — Publish extension ($5), ~15 min
- **npm package** — `cd npm-package && npm publish`, ~10 min
- **Widget distribution** — DISTRIBUTION-KIT.md, 18 targets, ~1-2 hours
- **Awesome lists** — awesome-mcp-servers, awesome-ai-tools, ~20 min

### Completed Summary (Sessions 416-1114, Apr 23 - Jul 4)
Complete AI API pricing comparison site: 1033 pages, 49 models, 160 tools, 333 comparisons, 5 use-case ranking pages, MCP server, Chrome extension, npm package, badge API, July 2026 flagship report, weekly digest, price alerts (49 models, consolidated, backend with model-specific subscriptions). Full conversion funnel with Monitoring ROI Calculator. Pricing accuracy fixes. CTA friction reduction. 2 freshness sweeps. Provider page alert CTAs. Weekly digest subscribe wired to API. GA4: 8,367 users, $0 revenue. Distribution blocked on human. **160+ commits, 6,000+ files.**
