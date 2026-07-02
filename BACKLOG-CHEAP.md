# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 977 pages, 49 models, 10 providers, 160 tools, 300 comparison pages. Technically complete. Distribution is the bottleneck, not content. **8,367 total users, $0 revenue. Flash sale $19, enhanced savings calculator + Cost Tracker (Session 1062).**

### Active Tasks — Conversion (Session 1062)
- **Monitor A/B test buy.html vs flash-19.html** — 10 blog CTAs route to buy.html?from=blog_test. Check GA4 for buy_page_viewed / buy_cta_clicked events. Compare conversion rates after ~1 week.
- **Monitor flash sale funnel** — flash_sale_viewed → flash_savings_calculated → flash_buy_clicked → begin_checkout → purchase. New: track alternatives_count and calc_results location clicks.
- **Monitor comparison gate A/B test** — check GA4 for `comparison_gate_clicked` events
- **Monitor pro-demo.html engagement** — track `pro_demo_generated` → `flash_buy_clicked` → `purchase` funnel
- **Monitor cost tracker engagement** — track `cost_tracked` events, see if users return to track more calculations
- ~~**Add GA4 events to buy.html**~~ — DONE (Session 1059)
- ~~**Enhance flash-19 savings calculator**~~ — DONE (Session 1061). Top 3 alternatives with quality tiers, personalized savings.
- ~~**Add Cost Tracker feature**~~ — DONE (Session 1062). localStorage-based tracking with trend visualization, spending dashboard.

### Active Tasks — Distribution (ALL BLOCKED ON HUMAN)
- **Directory submissions** — DIRECTORY-SUBMISSIONS.md, 22 listings, ~45 min. **Highest priority — AI directories drive buyer traffic.**
- **$9 Stripe link** — Create on Stripe Dashboard, paste in HELP-RESPONSES.md
- **MCP registry submissions** — MCP-REGISTRY-SUBMISSIONS.md, ~15 min
- **Chrome Web Store** — Publish extension ($5), ~15 min
- **npm package** — `cd npm-package && npm publish`, ~10 min
- **Widget distribution** — DISTRIBUTION-KIT.md, 18 targets, ~1-2 hours
- **Awesome lists** — awesome-mcp-servers, awesome-ai-tools, ~20 min

### Completed Summary (Sessions 416-1062, Apr 23 - Jul 2)
Built complete AI API pricing comparison site: 977 pages, 49 models, 160 tools, 300 comparison pages, MCP server, Chrome extension, npm package, embeddable pricing badge. Conversion funnel: flash-19.html ($19 flash sale + enhanced savings calculator + cost tracker), buy.html (A/B test), pro-demo.html (try-before-buy), comparison-gate.js (533 pages gated), 48-hour bonus pack, exit popups, mobile sticky CTA. SEO: sitemap, FAQPage schema, OG/Twitter 100%, GA4 on all pages. **Session 1062: Added Cost Tracker feature (localStorage-based tracking + trend visualization + spending dashboard). Session 1061: Enhanced savings calculator with top-3 alternatives + quality tiers. Routed 907 CTA links site-wide to flash-19.html. Fixed 9 blog post CTAs. Session 1060: Removed fake social proof, eliminated go.html redirect. Session 1059: A/B test tracking. Sessions 1055-1058: Pricing bug fixes, buy.html, social proof.** Distribution tools ready but blocked on human action. **119+ commits, 6,000+ files.**
