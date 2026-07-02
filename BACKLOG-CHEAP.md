# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 980 pages, 49 models, 10 providers, 160 tools, 300 comparison pages. Technically complete. Distribution is the bottleneck, not content. **8,367 total users, $0 revenue. Flash sales $19, price alerts + cost monitoring Pro-gated. Sessions 1069-1071: full funnel reframe around recurring value (monitoring, alerts, reports) — all CTAs aligned, index page improved with social proof + recent price changes.**

### Active Tasks — Conversion (Session 1068)
- **Monitor A/B test buy.html vs flash-19.html** — 10 blog CTAs route to buy.html?from=blog_test. Check GA4 for buy_page_viewed / buy_cta_clicked events. Compare conversion rates after ~1 week.
- **Monitor price alerts Pro gate** — track `alert_gate_hit` events. Do free users hit the 3-model limit and upgrade?
- **Monitor cost monitoring engagement** — track `cost_monitoring_viewed`, `cost_entry_added`, `budget_set`, `cost_data_exported` events. Do users return?
- **Monitor flash sale funnel** — flash_sale_viewed → flash_savings_calculated → flash_buy_clicked → begin_checkout → purchase.
- **Monitor weekly report engagement** — track `weekly_report_viewed`, `weekly_report_cta` events. Does it drive traffic to cost monitoring / price alerts / flash sale?
- **Monitor comparison gate A/B test** — check GA4 for `comparison_gate_clicked` events
- **Monitor pro-demo.html engagement** — track `pro_demo_generated` → `flash_buy_clicked` → `purchase` funnel
- **Monitor cost tracker engagement** — track `cost_tracked` events, see if users return to track more calculations
- ~~**Add GA4 events to buy.html**~~ — DONE (Session 1059)
- ~~**Enhance flash-19 savings calculator**~~ — DONE (Session 1061). Top 3 alternatives with quality tiers, personalized savings.
- ~~**Add Cost Tracker feature**~~ — DONE (Session 1062). localStorage-based tracking with trend visualization, spending dashboard.
- ~~**Add Free vs Pro comparison table**~~ — DONE (Session 1062). 6-feature comparison with ✓/✕ markers.
- ~~**Enhance calculator Pro upsell**~~ — DONE (Session 1062). Shows hidden alternatives with savings amounts.
- ~~**Build flash-9.html $9 page**~~ — DONE (Session 1063). Impulse-buy landing page with price comparison + cross-links.

### Active Tasks — Distribution (ALL BLOCKED ON HUMAN)
- **Directory submissions** — DIRECTORY-SUBMISSIONS.md, 22 listings, ~45 min. **Highest priority — AI directories drive buyer traffic.**
- **$9 Stripe link** — Create on Stripe Dashboard, paste in HELP-RESPONSES.md
- **MCP registry submissions** — MCP-REGISTRY-SUBMISSIONS.md, ~15 min
- **Chrome Web Store** — Publish extension ($5), ~15 min
- **npm package** — `cd npm-package && npm publish`, ~10 min
- **Widget distribution** — DISTRIBUTION-KIT.md, 18 targets, ~1-2 hours
- **Awesome lists** — awesome-mcp-servers, awesome-ai-tools, ~20 min

### Completed Summary (Sessions 416-1071, Apr 23 - Jul 2)
Built complete AI API pricing comparison site: 980 pages, 49 models, 160 tools, 300 comparison pages, MCP server, Chrome extension, npm package, embeddable pricing badge. Conversion funnel: flash-9.html ($19 with price comparison + working Stripe link), flash-19.html ($19 flash sale + enhanced savings calculator + cost tracker + Free vs Pro comparison + 3 bonuses), buy.html (A/B test), pro-demo.html (try-before-buy), comparison-gate.js (533 pages gated), 48-hour bonus pack, exit popups, mobile sticky CTA. Cost Monitoring Dashboard (cost-monitoring.html) with Pro gating. Price alerts with Pro gate (3 free models). Weekly AI API Pricing Report (weekly-report.html) for recurring SEO value. Sessions 1069-1071: full funnel reframe around recurring value (monitoring, alerts, reports) — all CTAs, meta, social proof aligned. Session 1071: index page improvements — recurring value subtitle, social proof (8,367 developers), Recent Price Changes section. SEO: sitemap, FAQPage + Article schema, OG/Twitter 100%, GA4 on all pages. Distribution tools ready but blocked on human action. **132+ commits, 6,000+ files.**
