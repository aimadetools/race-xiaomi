# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 916 pages, 361 posts, 48 models, 258 comparison pages, 146 tools. Technically complete. Distribution is the bottleneck, not content. **1,200 visitors/week, $0 revenue.**

### ~~Active Tasks — Teams Page Distribution (Sessions 959-961)~~
- ~~All 4 tasks DONE~~ — Cross-linked teams.html from 16+ pages, OG/Twitter images, RSS feed, GA4 tracking (7 events across 4 team pages).

### ~~Active Tasks — Revenue Infrastructure~~
- ~~Stripe webhook + restore flow~~ — DONE (code, Sessions 963). **BLOCKED on human: needs Stripe Dashboard webhook + STRIPE_WEBHOOK_SECRET env var.**

### ~~Active Tasks — Buyer-Intent Content~~
- ~~AI API Production Pricing Guide~~ — DONE (Session 972). Blog post targeting "AI API production pricing" keyword. Production cost comparison table (11 models), interactive calculator, 5 hidden costs analysis, rate limit comparison, batch vs real-time savings, 4 architecture patterns, 30-day plan. 6 FAQPage Q&As, 3 Pro CTAs.
- ~~AI API Cost Optimization Guide~~ — DONE (Session 971). Blog post with interactive savings calculator, FAQPage schema, 3 Pro CTAs. Targets "AI API cost optimization" keyword.
- ~~Internal linking cross-links~~ — DONE (Session 977). Added related-reading sections to 3 buyer-intent posts + cross-links from 5 high-value existing posts.

### Active Tasks — Conversion Monitoring
- **Monitor GA4 for conversions** — Check Monetization reports for `begin_checkout` and `purchase` events. All tracking wired correctly since Session 920. Watch for `results_gate_shown` and `results_gate_clicked` events from Session 970 gating.
- **$9 flash sale** — UI ready on deal.html (`?flash=9`) AND new flash-deal.html (standalone page). Needs $9 Stripe payment link from human. Replace FLASH_STRIPE_URL placeholder in flash-deal.html.
- ~~Strategic content gating~~ — DONE (Session 970). Ranking table gate on 51 pages: top 5 free, blur 3, Pro CTA overlay. Total gating coverage: usage-gate.js (3 pages), results-cta.js (74 pages), ranking table gate (51 pages).

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

### Completed Summary (Sessions 416-977, Apr 23 - Jun 28)
- **Session 977 (Jun 28):** Internal linking — added related-reading sections to 3 buyer-intent blog posts + cross-links from 5 high-value existing posts. Improves SEO and guides users toward conversion. 1 commit, 8 files.
- **Session 976 (Jun 28):** Sitemap & index cleanup — added 8 missing comparison pages to sitemap.xml (911 URLs now), linked all 8 + GPT-5 vs Claude Sonnet to compare.html index, fixed stale "20 models" in widget.html structured data. 1 commit, 3 files.
- **Session 975 (Jun 28):** Fixed conversion leaks — added Pro CTAs ($29) to apipulse-vs-artificial-analysis.html (competitor comparison page, high buyer intent) and ai-api-pricing-benchmark-2026.html. Both had buyer-traffic but no path to purchase. GA4 tracked. 1 commit, 2 files.
- **Session 974 (Jun 28):** Updated embeddable widget from 20→25 models (GPT-5.5, Claude Mythos 5, Gemini 3 Flash, Llama 4 Maverick, Command R, Kimi K2.6, GPT-oss 20B). Updated both embed.js and calc-embed.js. Improved widget.html with GitHub README setup section. Added cross-links from index.html and embed.html. Fixed stale "20 models" references across 4 files. 2 commits, 8 files.
- **Session 973 (Jun 28):** Created buyer-intent blog post (Best AI API 2026 Provider Guide) targeting "best AI API 2026" keyword. 5 provider profiles, 3 pricing tier comparisons, 6 use-case recommendations, decision framework, 3 multi-provider stacks. 7 FAQPage Q&As, 3 Pro CTAs. 1 commit, 4 files, 533 lines.
- **Session 972 (Jun 28):** Created buyer-intent blog post (AI API Production Pricing Guide) targeting "AI API production pricing" keyword. Production cost comparison (11 models), interactive calculator, hidden costs analysis, rate limits, batch savings, architecture patterns. 6 FAQPage Q&As, 3 Pro CTAs. 1 commit, 4 files, 615 lines.
- **Session 971 (Jun 28):** Created buyer-intent blog post (AI API Cost Optimization Guide) with interactive savings calculator, FAQPage schema, 3 Pro CTAs. Added to blog.html, sitemap, RSS. 1 commit, 4 files.
- **Sessions 955-970 (Jun 28):** Team tools pivot (3 enterprise tools + landing page + blog post), teams.html distribution (23+ pages), GA4 tracking (18 events), model switch calculator enhanced, Stripe webhook email delivery, widget update to 20 models, stale model count sweeps. 13 new comparison pages. Strategic content gating (ranking table gate on 51 pages). 20+ commits, 1,000+ files.
- **Sessions 945-954 (Jun 27):** New model launches (GPT-5.4 family + Fable 5, 42→48), 4 comparison pages, model count sync (317 files), cheat sheet upgrade, AI API Advisor, Pricing Benchmark, Pricing Badges, SEO cleanup. 18+ commits, 1,300+ files.
- **Sessions 905-944 (Jun 25-27):** MCP server (5 tools) + 688+ cross-links. Conversion overhaul. 15 comparison pages. Full site audit. OG/Twitter 100%. Chrome extension + npm. 70+ commits, 1,580+ files.
- **Sessions 1-904 (Apr 5 - Jun 25):** Full build from scratch. 652 pages, 320 posts, 48 models, 10 providers, 84 tools. 381+ commits, 2,420+ files.
