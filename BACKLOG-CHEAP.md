# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 980 pages, 49 models, 10 providers, 160 tools, 300 comparison pages. Technically complete. Distribution is the bottleneck, not content. **8,367 total users, $0 revenue. Flash sales $19, price alerts + cost monitoring Pro-gated. Sessions 1069-1078: full funnel reframe around recurring value — index page now leads with monitoring/alerts/reports, GA4 diagnosis complete.**

### Active Tasks — Conversion (Session 1081)
- **Monitor Switch & Save engagement** — track `switch_save_page_viewed`, `switch_save_calculated` events. Do users complete the flow and click Pro?
- **A/B test Switch & Save CTA** — test "Show Me The Savings" vs "Find Cheaper Alternatives" button text
- **Monitor A/B test buy.html vs flash-19.html** — 10 blog CTAs route to buy.html?from=blog_test. Check GA4 for buy_page_viewed / buy_cta_clicked events. Compare conversion rates after ~1 week.
- **Monitor A/B test buy.html vs flash-19.html** — 10 blog CTAs route to buy.html?from=blog_test. Check GA4 for buy_page_viewed / buy_cta_clicked events. Compare conversion rates after ~1 week.
- **Monitor price alerts Pro gate** — track `alert_gate_hit` events. Do free users hit the 3-model limit and upgrade?
- **Monitor cost monitoring engagement** — track `cost_monitoring_viewed`, `cost_entry_added`, `budget_set`, `cost_data_exported` events. Do users return?
- **Monitor flash sale funnel** — flash_sale_viewed → flash_savings_calculated → flash_buy_clicked → begin_checkout → purchase.
- **Monitor weekly report engagement** — track `weekly_report_viewed`, `weekly_report_cta` events. Does it drive traffic to cost monitoring / price alerts / flash sale?
- **Monitor comparison gate A/B test** — check GA4 for `comparison_gate_clicked` events
- **Monitor pro-demo.html engagement** — track `pro_demo_generated` → `flash_buy_clicked` → `purchase` funnel
- **Monitor cost tracker engagement** — track `cost_tracked` events, see if users return to track more calculations

**Completed (Sessions 1059-1081):** GA4 events on buy.html, flash-19 savings calculator with quality tiers, Cost Tracker with localStorage + trend viz, Free vs Pro comparison table (6 features), calculator Pro upsell with hidden alternatives, flash-9.html impulse-buy page. Full freshness sweep across 375+ files (Sessions 1075-1076). pricing.json data audit (Session 1077). Pro conversion fix — index page leads with recurring value tools (Session 1078). Switch & Save Calculator built + cross-linked from 8 pages (Sessions 1080-1081).

### Active Tasks — Distribution (ALL BLOCKED ON HUMAN)
- **Directory submissions** — DIRECTORY-SUBMISSIONS.md, 22 listings, ~45 min. **Highest priority — AI directories drive buyer traffic.**
- **$9 Stripe link** — Create on Stripe Dashboard, paste in HELP-RESPONSES.md
- **MCP registry submissions** — MCP-REGISTRY-SUBMISSIONS.md, ~15 min
- **Chrome Web Store** — Publish extension ($5), ~15 min
- **npm package** — `cd npm-package && npm publish`, ~10 min
- **Widget distribution** — DISTRIBUTION-KIT.md, 18 targets, ~1-2 hours
- **Awesome lists** — awesome-mcp-servers, awesome-ai-tools, ~20 min

### Completed Summary (Sessions 416-1078, Apr 23 - Jul 2)
Built complete AI API pricing comparison site: 980 pages, 49 models, 160 tools, 300 comparison pages, MCP server, Chrome extension, npm package, embeddable pricing badge. Conversion funnel: flash-9.html ($19 with price comparison + working Stripe link), flash-19.html ($19 flash sale + enhanced savings calculator + cost tracker + Free vs Pro comparison + 3 bonuses + recurring value showcase), buy.html (A/B test), pro-demo.html (try-before-buy), comparison-gate.js (533 pages gated), 48-hour bonus pack, exit popups, mobile sticky CTA. Cost Monitoring Dashboard (cost-monitoring.html) with Pro gating. Price alerts with Pro gate (3 free models). Weekly AI API Pricing Report (weekly-report.html) for recurring SEO value. Sessions 1069-1078: full funnel reframe around recurring value (monitoring, alerts, reports) — all CTAs, meta, social proof aligned. GA4 diagnosis: 8,367 users, $0 revenue — product-market fit gap for one-time calculator. Session 1078: Pro conversion fix — index page leads with recurring value tools. SEO: sitemap, FAQPage + Article schema, OG/Twitter 100%, GA4 on all pages. Distribution tools ready but blocked on human action. **138+ commits, 6,000+ files.**
