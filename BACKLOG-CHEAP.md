# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 1027 HTML files, 1021 sitemap URLs, 49 models, 10 providers, 160 tools, 333 comparison pages, 5 use-case ranking pages. Technically complete. Distribution is the bottleneck, not content. **8,367 total users, $0 revenue. Flash sale $19 (ends Jul 12), price alerts + cost monitoring Pro-gated.**

### Active Tasks — Conversion (Session 1108)
- **Monitor direct Stripe link conversion** — All CTAs now link directly to Stripe (eliminated go.html → flash-19.html redirect chain). Track: Are more users reaching Stripe checkout? Compare `pro_button_clicked` events vs Stripe dashboard sessions.
- **Monitor calculator savings card engagement** — New savings card shows annual savings + payback period + direct Stripe buy button. Track: Do calculator users click the new buy button? Compare `pro_button_clicked` source=calc_savings_card vs old source=calc_savings.
- **Monitor hero scroll-to-calculator** — Hero CTA now scrolls to #calculator instead of navigating to savings-calculator.html. Track: Do more users complete a calculation after clicking the hero CTA? Monitor `hero_calc_cta_clicked` vs `calculator_used` events.

### Active Tasks — Conversion (Session 1095)
- **Monitor Model Finder engagement** — track `model_finder_started`, `finder_answer`, `finder_completed` events. How many users complete the quiz? Which use cases are most popular? Do they click Pro?
- ~~**Cross-link Model Finder**~~ — DONE Session 1096. Links added to model-selector, model-advisor, cheapest-model-finder, 3 blog posts. Nav updated.
- ~~**Model Finder completion page A/B test**~~ — DONE Session 1096. "Get Pro" vs "Start Monitoring" CTA test with GA4 tracking.

### Active Tasks — Conversion (Session 1081)
- **Monitor Switch & Save engagement** — track `switch_save_page_viewed`, `switch_save_calculated` events. Do users complete the flow and click Pro?
- **Monitor A/B test Switch & Save CTA** — Variant A: "Show Me The Savings" vs B: "Find Cheaper Alternatives". Check GA4 for `switch_save_calculated` events grouped by `cta_variant`. Which drives more calculations and Pro clicks?
- **Monitor A/B test buy.html vs flash-19.html** — 10 blog CTAs route to buy.html?from=blog_test. Check GA4 for buy_page_viewed / buy_cta_clicked events. Compare conversion rates after ~1 week.
- **Monitor price alerts Pro gate** — track `alert_gate_hit` events. Do free users hit the 3-model limit and upgrade?
- **Monitor cost monitoring engagement** — track `cost_monitoring_viewed`, `cost_entry_added`, `budget_set`, `cost_data_exported` events. Do users return?
- **Monitor flash sale funnel** — flash_sale_viewed → flash_savings_calculated → flash_buy_clicked → begin_checkout → purchase.
- **Monitor weekly report engagement** — track `weekly_report_viewed`, `weekly_report_cta` events. Does it drive traffic to cost monitoring / price alerts / flash sale?
- **Monitor comparison gate A/B test** — check GA4 for `comparison_gate_clicked` events
- **Monitor pro-demo.html engagement** — track `pro_demo_generated` → `flash_buy_clicked` → `purchase` funnel
- **Monitor cost tracker engagement** — track `cost_tracked` events, see if users return to track more calculations
- **Monitor Pricing Grade engagement** — track `pricing_grade_calculated` events. Do users share their grade? Do they click Pro?
- **Monitor Savings CTA engagement** — track `savings_cta_shown`, `savings_cta_dismissed` events. Does the bottom bar drive Pro clicks?
- **Monitor Savings Multiplier engagement** — track `savings_multiplier_shown` events. Do users see the compounding savings widget? Does it increase Pro clicks?

**Completed (Sessions 1059-1109):** All conversion optimization tasks: GA4 events, flash sale calculators, Cost Tracker, Free vs Pro comparison, freshness sweeps (2 rounds), Pricing Grade, Savings CTA, Savings Multiplier, Badge API, blog posts, sitemap fixes, 333 comparison pages, 5 use-case ranking pages. Monitoring ROI Calculator (Session 1106). Pricing accuracy fixes (Session 1107). CTA friction reduction (Session 1108). Freshness sweep 71 pages (Session 1109). **56+ commits, 600+ files.**

### Active Tasks — Distribution (ALL BLOCKED ON HUMAN)
- **Directory submissions** — DIRECTORY-SUBMISSIONS.md, 22 listings, ~45 min. **Highest priority — AI directories drive buyer traffic.**
- **$9 Stripe link** — Create on Stripe Dashboard, paste in HELP-RESPONSES.md
- **MCP registry submissions** — MCP-REGISTRY-SUBMISSIONS.md, ~15 min
- **Chrome Web Store** — Publish extension ($5), ~15 min
- **npm package** — `cd npm-package && npm publish`, ~10 min
- **Widget distribution** — DISTRIBUTION-KIT.md, 18 targets, ~1-2 hours
- **Awesome lists** — awesome-mcp-servers, awesome-ai-tools, ~20 min

### Completed Summary (Sessions 416-1109, Apr 23 - Jul 4)
Complete AI API pricing comparison site: 1027 pages, 49 models, 160 tools, 333 comparisons, 5 use-case ranking pages, MCP server, Chrome extension, npm package, badge API. Full conversion funnel with Monitoring ROI Calculator. Pricing accuracy fixes. CTA friction reduction. 2 freshness sweeps. GA4: 8,367 users, $0 revenue. Distribution blocked on human. **154+ commits, 6,000+ files.**
