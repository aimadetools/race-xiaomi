# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 1018 pages, 49 models, 10 providers, 160 tools, 328 comparison pages, 5 use-case ranking pages. Technically complete. Distribution is the bottleneck, not content. **8,367 total users, $0 revenue. Flash sales $19, price alerts + cost monitoring Pro-gated. Session 1104: added 5 "cheapest model for [use case]" programmatic SEO pages (chatbot, code, content, translation, summarization). Sitemap: 1014 URLs.**

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

**Completed (Sessions 1059-1093):** GA4 events on buy.html, flash-19 savings calculator with quality tiers, Cost Tracker with localStorage + trend viz, Free vs Pro comparison table (6 features), calculator Pro upsell with hidden alternatives, flash-9.html impulse-buy page. Full freshness sweep across 375+ files. pricing.json data audit. Pro conversion fix — index page leads with recurring value tools. Switch & Save Calculator + cross-linking + A/B test. SEO content + model selector fix. **Pricing Grade tool + Savings CTA + cross-linking (Sessions 1085-1086).** Fixed broken mobile-nav.js reference. **3 new comparison pages (Session 1087).** **Savings Multiplier widget — compounding savings visualization on buy/flash-19/index (Session 1088).** **Badge API + 3 SEO blog posts + comparison page (Session 1089):** /api/badge-md SVG endpoint for markdown embedding, "Free AI Pricing API" tutorial, "OpenAI vs Anthropic Pricing 2026", "Cheapest AI API July 2026", DeepSeek V4 Pro vs GPT-5 Mini comparison. **Sitemap + blog index fix (Session 1090):** Removed duplicate sitemap entry, added 3 missing blog posts to index. All 366 blog posts linked. **3 new high-value comparison pages (Session 1092):** Opus 4.8 vs Gemini 3.1 Pro, GPT-5.5 vs Sonnet 5, GPT-5 vs Sonnet 5. Sitemap updated to 987 URLs. **5 new high-value comparison pages (Session 1093):** GPT-5 mini vs DeepSeek V4 Flash, GPT-5 mini vs Llama 4 Maverick, DeepSeek V4 Pro vs Mistral Large 3, GPT-5.5 Pro vs Fable 5, GPT-5 vs Fable 5. Sitemap updated to 992 URLs. 313 total comparisons.

### Active Tasks — Distribution (ALL BLOCKED ON HUMAN)
- **Directory submissions** — DIRECTORY-SUBMISSIONS.md, 22 listings, ~45 min. **Highest priority — AI directories drive buyer traffic.**
- **$9 Stripe link** — Create on Stripe Dashboard, paste in HELP-RESPONSES.md
- **MCP registry submissions** — MCP-REGISTRY-SUBMISSIONS.md, ~15 min
- **Chrome Web Store** — Publish extension ($5), ~15 min
- **npm package** — `cd npm-package && npm publish`, ~10 min
- **Widget distribution** — DISTRIBUTION-KIT.md, 18 targets, ~1-2 hours
- **Awesome lists** — awesome-mcp-servers, awesome-ai-tools, ~20 min

### Completed Summary (Sessions 416-1104, Apr 23 - Jul 3)
Built complete AI API pricing comparison site: 1018 pages, 49 models, 160 tools, 328 comparison pages, 5 use-case ranking pages, MCP server, Chrome extension, npm package, embeddable pricing badge. Conversion funnel: flash-9/flash-19 ($19 flash sale), buy.html (A/B test), pro-demo.html (try-before-buy), comparison-gate.js, exit popups, mobile sticky CTA. Cost Monitoring Dashboard, Price alerts, Weekly Report — all Pro-gated. Sessions 1069-1078: full funnel reframe around recurring value. Sessions 1097-1104: freshness sweep, 21 new comparison pages (GPT-5.4 Pro, Fable 5, Mythos 5, Sonnet 5 coverage), 5 use-case ranking pages, site health audits. GA4: 8,367 users, $0 revenue. SEO: 1014 sitemap URLs, FAQPage + Article schema, GA4 on all pages. Distribution blocked on human. **147+ commits, 6,000+ files.**
