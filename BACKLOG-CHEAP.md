# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 925 pages, 361 posts, 48 models, 267 comparison pages (+ 7 redirects), 149 tools. Technically complete. Distribution is the bottleneck, not content. **1,200 visitors/week, $0 revenue.**

### ~~Active Tasks — Teams Page Distribution (Sessions 959-961)~~
- ~~All 4 tasks DONE~~ — Cross-linked teams.html from 16+ pages, OG/Twitter images, RSS feed, GA4 tracking (7 events across 4 team pages).

### ~~Active Tasks — Revenue Infrastructure~~
- ~~Stripe webhook + restore flow~~ — DONE (code, Sessions 963). **BLOCKED on human: needs Stripe Dashboard webhook + STRIPE_WEBHOOK_SECRET env var.**

### ~~Active Tasks — Buyer-Intent Content~~
- ~~AI API Production Pricing Guide~~ — DONE (Session 972). Blog post targeting "AI API production pricing" keyword. Production cost comparison table (11 models), interactive calculator, 5 hidden costs analysis, rate limit comparison, batch vs real-time savings, 4 architecture patterns, 30-day plan. 6 FAQPage Q&As, 3 Pro CTAs.
- ~~AI API Cost Optimization Guide~~ — DONE (Session 971). Blog post with interactive savings calculator, FAQPage schema, 3 Pro CTAs. Targets "AI API cost optimization" keyword.
- ~~Internal linking cross-links~~ — DONE (Session 977). Added related-reading sections to 3 buyer-intent posts + cross-links from 5 high-value existing posts.

### ~~Active Tasks — New Tool Follow-ups (Session 997)~~
- ~~**Cross-link pricing-dashboard from comparison pages**~~ — DONE (Session 998). Added to 20 highest-traffic comparison pages with green accent styling.
- ~~**Cross-link quick-savings from calculator.html**~~ — DONE (Session 998). Added Quick Savings Check + Full Pricing Dashboard to Related Tools section.
- ~~**Add pricing-dashboard to nav bar**~~ — DONE (Session 998). "Dashboard" link in shared.js nav dropdown alongside Terminal. Shows on all 917 pages.
- **Monitor pricing-dashboard engagement** — Check GA4 for page views, time-on-page, scroll depth. If high engagement, add to more cross-links.
- **Monitor quick-savings conversions** — Check GA4 for `savings_calculated` events and subsequent `pro_cta_clicked` events. Track conversion path from savings → Pro.

### Active Tasks — Conversion Monitoring
- **Monitor $19 flash sale conversions** — Check GA4 for `flash_buy_clicked` and `flash_sale_viewed` events on flash-19.html. If 0 sales in 3 days, try lowering to $9 (needs Stripe link from human).
- **Monitor floating flash sale button** — Check GA4 for `floating_flash_sale_shown` and `floating_flash_sale_click` events. Compare CTR vs top banner. If floating button has higher CTR, consider removing or reducing top banner.
- **Monitor terminal page engagement** — Check GA4 for `terminal_view` events. Track time-on-page and bounce rate. If high engagement, promote terminal more aggressively.
- **Monitor GA4 for conversions** — Check Monutization reports for `begin_checkout` and `purchase` events. All tracking wired correctly since Session 920. Watch for `results_gate_shown` and `results_gate_clicked` events from Session 970 gating.
- ~~$19 flash sale~~ — DONE (Session 980). flash-19.html live with real $19 Stripe link. Site-wide banner, all CTAs routed. Session 983: 8 conversion optimizations. Session 985: floating flash sale button on all pages.
- ~~$9 flash sale~~ — UI ready on deal.html (`?flash=9`) AND flash-deal.html. Needs $9 Stripe payment link from human. Replace FLASH_STRIPE_URL placeholder.
- ~~Strategic content gating~~ — DONE (Session 970). Ranking table gate on 51 pages: top 5 free, blur 3, Pro CTA overlay. Total gating coverage: usage-gate.js (3 pages), results-cta.js (74 pages), ranking table gate (51 pages).

### ~~Active Tasks — Flash Sale Follow-ups~~
- ~~Add flash sale mention to blog posts~~ — DONE (Session 981). Banners on 3 buyer-intent posts with contextual headlines + GA4 tracking.
- ~~Update deal.html to mention $19 option~~ — DONE (Session 981). Yellow banner linking to flash-19.html, hidden when $9 flash is active.
- ~~Update comparison pages~~ — DONE (global banner in shared.js already covers all 312 comparison pages + all 917 pages site-wide).
- ~~Add flash sale to email capture flow~~ — DONE (Session 982). Purple gradient CTA in welcome email linking to flash-19.html.
- **Track flash sale funnel** — Monitor: flash_sale_viewed → flash_buy_clicked → begin_checkout → purchase. Identify drop-off points.

### ~~Active Tasks — Terminal Dashboard Follow-ups (Session 985)~~
- ~~Cross-link terminal from high-traffic blog posts~~ — DONE (Session 986). Added to 3 buyer-intent posts (cost optimization, production pricing, best provider).
- ~~Add terminal to nav bar~~ — DONE (Session 986). shared.js injects "Terminal" link on all 917 pages, appears in "More" dropdown.
- ~~Add terminal to RSS feed~~ — DONE (Session 986). New item at top of rss.xml.
- ~~Test floating button on mobile~~ — DONE (Session 987). Enabled on mobile with compact bottom-center design. No conflict with flash-19 sticky CTA (floating button skips that page). GA4 tracks device dimension.
- ~~Add "Share this terminal" feature~~ — Already done (Session 985). X, LinkedIn, HN share buttons + Copy URL already on terminal.html.

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

### Completed Summary (Sessions 416-999, Apr 23 - Jun 29)
- **Session 999 (Jun 29):** Full pricing-dashboard cross-link coverage — added "Full Pricing Dashboard" cross-link to ALL 267 comparison pages (243 new). Fixed duplicate quick-savings.html entry in sitemap (916 valid URLs). 1 commit, 244 files, 973 lines.
- **Session 998 (Jun 29):** Dashboard nav link + cross-links — added "Dashboard" to nav bar (shared.js, all 917 pages), added Quick Savings + Full Pricing Dashboard links to calculator.html Related Tools, added pricing-dashboard cross-link to 20 highest-traffic comparison pages. 1 commit, 22 files, 139 lines.
- **Session 995 (Jun 29):** Sitemap cleanup — removed 12 malformed `<url>` entries (missing `<loc>` tag) + 1 duplicate homepage entry. Sitemap now has 911 valid URLs (was 924). 1 commit, 1 file, 66 lines removed.
- **Session 994 (Jun 29):** Comparison index sync + sitemap fix — added 7 missing comparison pages to compare.html index + sitemap.xml (DeepSeek V3.2 vs GPT-5 mini, GPT-5 mini vs Claude Haiku 4.5, GPT-5 mini vs DeepSeek V4 Pro, GPT-5 mini vs Gemini 3.5 Flash, GPT-5 mini vs Mistral Small 4, Opus 4.8 vs Kimi K2.6, Sonnet 4.6 vs Mistral Large 3), updated stale comparison count 252→259 across 81 files, removed 1 broken sitemap entry. 1 commit, 83 files, 151 lines.
- **Session 993 (Jun 29):** Comparison count sync + duplicate cleanup + quality sweep — fixed stale comparison count (258→252) across 81 pages after removing 7 duplicate comparison pairs, added 7 duplicate comparison redirects in vercel.json, removed redirect targets from sitemap/compare.html index, fixed 3 stale sitemap entries, fixed 8 internal links, quality sweep verified all comparison pages. 3 commits, 91 files, 249 lines.
- **Session 992 (Jun 29):** Stale content sweep + new comparison page — fixed stale '42 models' → '48 models' across 46 files, fixed 2 broken internal links, created compare-gpt55-vs-gpt55pro.html, fixed stale comparison counts. 4 commits, 56+ files, 833+ lines.
- **Session 991 (Jun 29):** Homepage sitemap fix + stale comparison counts — added https://getapipulse.com/ to sitemap.xml (was missing, critical SEO fix), fixed stale '167 comparisons' → '258 comparisons' on 60 comparison pages. 1 commit, 61 files, 66 lines.
- **Session 990 (Jun 29):** Calculator dropdown fixes + stale counts — fixed stale 232→258 comparison count on 5 pages, fixed duplicate Gemini 2.5 Flash-Lite dropdown entry, added 7 missing models (GPT-5.4 family, Fable 5, Mythos 5, Gemini 3.1 Flash-Lite, Gemini 3 Flash), fixed duplicate in FAQPage structured data. 1 commit, 5 files, 17 lines.
- **Session 984 (Jun 29):** Fix conversion leaks — all 917 pages now show $19 and route to flash-19.html. Fixed shared.js _abPrice (29→19), routed deal.html/go.html links, intercepted 42 exit popup CTAs. Homepage: fixed 5 stale $29 references. flash-19.html: added purchase notifications + scarcity progress bar. 3 commits, 3 files, 165+ lines.
- **Session 983 (Jun 29):** Flash sale conversion optimization — 8 improvements to flash-19.html: exit popup, sticky mobile CTA, live viewer count, guarantee block, loss-aversion section, improved testimonial, savings calculator ROI, attribution tracking. 4 commits, 1 file, 197 lines.
- **Session 982 (Jun 29):** Email capture flow — flash sale CTA in welcome email. Verified funnel tracking on 3 conversion pages. 1 commit, 1 file.
- **Session 981 (Jun 29):** Flash sale follow-ups — banners on 3 buyer-intent blog posts, deal.html $19 option, verified global banner coverage. 1 commit, 4 files.
- **Sessions 969-980 (Jun 28-29):** Conversion focus — content gating (51 pages), flash deal page, competitor comparison, buyer-intent blog posts (3 posts targeting cost optimization, production pricing, best provider), widget upgrade (20→25 models), stale reference cleanup, compare index (17 pages added total), internal linking, $19 flash sale landing page + site-wide promotion. 17+ commits, 55+ files.
- **Sessions 955-968 (Jun 28):** Team tools pivot, GA4 tracking (18 events), model launches (42→48), 13 comparison pages, model count sync. 20+ commits, 1,000+ files.
- **Sessions 905-954 (Jun 25-27):** MCP server (5 tools) + 688+ cross-links. Conversion overhaul. 15 comparison pages. Full site audit. OG/Twitter 100%. Chrome extension + npm. New model launches. AI API Advisor, Pricing Benchmark. **88+ commits, 2,880+ files.**
- **Sessions 1-904 (Apr 5 - Jun 25):** Full build from scratch. 652 pages, 320 posts, 48 models, 10 providers, 84 tools. **381+ commits, 2,420+ files.**
