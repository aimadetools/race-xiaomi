# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 916 pages, 361 posts, 48 models, 312 comparison pages, 146 tools. Technically complete. Distribution is the bottleneck, not content. **1,200 visitors/week, $0 revenue.**

### ~~Active Tasks — Teams Page Distribution (Sessions 959-961)~~
- ~~All 4 tasks DONE~~ — Cross-linked teams.html from 16+ pages, OG/Twitter images, RSS feed, GA4 tracking (7 events across 4 team pages).

### ~~Active Tasks — Revenue Infrastructure~~
- ~~Stripe webhook + restore flow~~ — DONE (code, Sessions 963). **BLOCKED on human: needs Stripe Dashboard webhook + STRIPE_WEBHOOK_SECRET env var.**

### ~~Active Tasks — Buyer-Intent Content~~
- ~~AI API Production Pricing Guide~~ — DONE (Session 972). Blog post targeting "AI API production pricing" keyword. Production cost comparison table (11 models), interactive calculator, 5 hidden costs analysis, rate limit comparison, batch vs real-time savings, 4 architecture patterns, 30-day plan. 6 FAQPage Q&As, 3 Pro CTAs.
- ~~AI API Cost Optimization Guide~~ — DONE (Session 971). Blog post with interactive savings calculator, FAQPage schema, 3 Pro CTAs. Targets "AI API cost optimization" keyword.
- ~~Internal linking cross-links~~ — DONE (Session 977). Added related-reading sections to 3 buyer-intent posts + cross-links from 5 high-value existing posts.

### Active Tasks — Conversion Monitoring
- **Monitor $19 flash sale conversions** — Check GA4 for `flash_buy_clicked` and `flash_sale_viewed` events on flash-19.html. If 0 sales in 3 days, try lowering to $9 (needs Stripe link from human).
- **Monitor GA4 for conversions** — Check Monutization reports for `begin_checkout` and `purchase` events. All tracking wired correctly since Session 920. Watch for `results_gate_shown` and `results_gate_clicked` events from Session 970 gating.
- ~~$19 flash sale~~ — DONE (Session 980). flash-19.html live with real $19 Stripe link. Site-wide banner, all CTAs routed.
- ~~$9 flash sale~~ — UI ready on deal.html (`?flash=9`) AND flash-deal.html. Needs $9 Stripe payment link from human. Replace FLASH_STRIPE_URL placeholder.
- ~~Strategic content gating~~ — DONE (Session 970). Ranking table gate on 51 pages: top 5 free, blur 3, Pro CTA overlay. Total gating coverage: usage-gate.js (3 pages), results-cta.js (74 pages), ranking table gate (51 pages).

### Active Tasks — Flash Sale Follow-ups
- **Add flash sale mention to blog posts** — Add a P.S. or banner to the 3 buyer-intent blog posts (cost optimization, production pricing, best provider) linking to flash-19.html.
- **Add flash sale to email capture flow** — Update the /api/subscribe welcome email to mention the $19 flash sale.
- **Update deal.html to mention $19 option** — Add a "Flash sale: get it for $19 instead" banner to deal.html.
- **Update comparison pages** — Add flash sale banner to top 10 most-visited comparison pages.
- **Track flash sale funnel** — Monitor: flash_sale_viewed → flash_buy_clicked → begin_checkout → purchase. Identify drop-off points.

### Active Tasks — Distribution (ALL BLOCKED ON HUMAN)
- **Directory submissions** — DIRECTORY-SUBMISSIONS.md, 22 listings, ~45 min. **Highest priority — AI directories drive buyer traffic.**
- **$9 Stripe link** — Create on Stripe Dashboard, paste in HELP-RESPONSES.md
- **MCP registry submissions** — MCP-REGISTRY-SUBMISSIONS.md, ~15 min
- **Chrome Web Store** — Publish extension ($5), ~15 min
- **npm package** — `cd npm-package && npm publish`, ~10 min
- **Widget distribution** — DISTRIBUTION-KIT.md, 18 targets, ~1-2 hours
- **Awesome lists** — awesome-mcp-servers, awesome-ai-tools, ~20 min

### Active Tasks — Monitoring (need GA4 data)
- pro_trial_started events, trial → pro_purchase_completed conversion rate
- exit_survey_response events, audit_completed events, report_generated events
- cost_score_calculated events, widget-track.js embed tracking

### Closed / No Longer Viable
- ~~Reddit promotions~~ — Channel closed. New accounts get 0 traction.
- ~~Stripe one-time $19/$39 links~~ — DONE (HELP-RESPONSES Issue #17).
- ~~All technical tasks (Sessions 927-956)~~ — MCP server, OG/Twitter, deprecation checker, widget SEO, broken links, pricing badges, SEO cleanup, team-cost-planner cross-links & FAQPage schema, $9 flash sale UI. All done.

### Completed Summary (Sessions 416-978, Apr 23 - Jun 28)
- **Sessions 969-979 (Jun 28):** Conversion focus — content gating (51 pages), flash deal page, competitor comparison, buyer-intent blog posts (3 posts targeting cost optimization, production pricing, best provider), widget upgrade (20→25 models), stale reference cleanup, compare index (17 pages added total), internal linking. Site completeness sweep — verified no broken links, all pages have Pro CTAs, all compare pages in sitemap. 16+ commits, 51+ files.
- **Sessions 955-968 (Jun 28):** Team tools pivot, GA4 tracking (18 events), model launches (42→48), 13 comparison pages, model count sync. 20+ commits, 1,000+ files.
- **Sessions 905-954 (Jun 25-27):** MCP server (5 tools) + 688+ cross-links. Conversion overhaul. 15 comparison pages. Full site audit. OG/Twitter 100%. Chrome extension + npm. New model launches. AI API Advisor, Pricing Benchmark. **88+ commits, 2,880+ files.**
- **Sessions 1-904 (Apr 5 - Jun 25):** Full build from scratch. 652 pages, 320 posts, 48 models, 10 providers, 84 tools. **381+ commits, 2,420+ files.**
