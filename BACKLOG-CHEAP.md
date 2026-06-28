# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 913 pages, 360 posts, 48 models, 258 comparison pages, 146 tools. Technically complete. Distribution is the bottleneck, not content. **1,200 visitors/week, $0 revenue.**

### Active Tasks — Teams Page Distribution (Sessions 959-961)
- ~~All 4 tasks DONE~~ — Cross-linked teams.html from 16+ pages, OG/Twitter images, RSS feed, GA4 tracking (7 events across 4 team pages).

### Active Tasks — Revenue Infrastructure
- ~~Stripe webhook + restore flow~~ — DONE (code, Sessions 963). **BLOCKED on human: needs Stripe Dashboard webhook + STRIPE_WEBHOOK_SECRET env var.**

### Active Tasks — Buyer-Intent Content
- ~~AI API Production Pricing Guide~~ — DONE (Session 972). Blog post targeting "AI API production pricing" keyword. Production cost comparison table (11 models), interactive calculator, 5 hidden costs analysis, rate limit comparison, batch vs real-time savings, 4 architecture patterns, 30-day plan. 6 FAQPage Q&As, 3 Pro CTAs.
- ~~AI API Cost Optimization Guide~~ — DONE (Session 971). Blog post with interactive savings calculator, FAQPage schema, 3 Pro CTAs. Targets "AI API cost optimization" keyword.

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

### Completed Summary (Sessions 416-972, Apr 23 - Jun 28)
- **Session 972 (Jun 28):** Created buyer-intent blog post (AI API Production Pricing Guide) targeting "AI API production pricing" keyword. Production cost comparison (11 models), interactive calculator, hidden costs analysis, rate limits, batch savings, architecture patterns. 6 FAQPage Q&As, 3 Pro CTAs. 1 commit, 4 files, 615 lines.
- **Session 971 (Jun 28):** Created buyer-intent blog post (AI API Cost Optimization Guide) with interactive savings calculator, FAQPage schema, 3 Pro CTAs. Added to blog.html, sitemap, RSS. 1 commit, 4 files.
- **Sessions 955-970 (Jun 28):** Team tools pivot (3 enterprise tools + landing page + blog post), teams.html distribution (23+ pages), GA4 tracking (18 events), model switch calculator enhanced, Stripe webhook email delivery, widget update to 20 models, stale model count sweeps. 13 new comparison pages. Strategic content gating (ranking table gate on 51 pages). 20+ commits, 1,000+ files.
- **Sessions 945-954 (Jun 27):** New model launches (GPT-5.4 family + Fable 5, 42→48), 4 comparison pages, model count sync (317 files), cheat sheet upgrade, AI API Advisor, Pricing Benchmark, Pricing Badges, SEO cleanup. 18+ commits, 1,300+ files.
- **Sessions 905-944 (Jun 25-27):** MCP server (5 tools) + 688+ cross-links. Conversion overhaul. 15 comparison pages. Full site audit. OG/Twitter 100%. Chrome extension + npm. 70+ commits, 1,580+ files.
- **Sessions 1-904 (Apr 5 - Jun 25):** Full build from scratch. 652 pages, 320 posts, 48 models, 10 providers, 84 tools. 381+ commits, 2,420+ files.
