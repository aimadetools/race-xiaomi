# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 909 pages, 358 posts, 48 models, 256 comparison pages, 146 tools. Technically complete. Distribution is the bottleneck, not content.

### Active Tasks — Teams Page Distribution (Session 959-960)
- ~~**Cross-link teams.html from more pages**~~ — DONE (Session 959). Added to compare.html, savings-calculator.html, startup-cost-planner.html, and 3 high-traffic blog posts (cost optimization guide, ChatGPT cost, Claude Opus cost). Total: 16+ pages.
- ~~**Add OG/Twitter images for teams.html**~~ — DONE (Session 960). Custom SVG OG image with team icon, 3 tool cards, savings stat. PNG generated (76KB). og:image + twitter:image updated.
- ~~**Add teams.html to RSS feed**~~ — DONE (Session 959). Added to rss.xml as new item.
- ~~**Track teams.html in GA4**~~ — DONE (Session 961). Added 7 new events across 4 team pages: ROI calculator, FAQ opens, Pro CTA clicks, related tool clicks. All 4 team pages now have 3-8 GA4 events each.

### Active Tasks — Revenue Infrastructure
- ~~**Configure Stripe webhook**~~ — DONE (code). Webhook sends purchase confirmation email via Resend with access code. **BLOCKED on human: set up webhook in Stripe Dashboard + set STRIPE_WEBHOOK_SECRET env var in Vercel.**
- ~~**Test Stripe webhook flow**~~ — Webhook code complete (Session 963). **BLOCKED on human: needs Stripe Dashboard webhook configured first.**
- ~~**Pro access restore**~~ — DONE (Session 963). /restore.html page + /api/restore-access.js endpoint. Users can request their access code by email.

### Active Tasks — Conversion Monitoring
- **Monitor GA4 for conversions** — Check Monetization reports for `begin_checkout` and `purchase` events. All tracking wired correctly since Session 920.
- **$9 flash sale** — UI ready on deal.html (`?flash=9`). Needs Stripe link from human.

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
- ~~Cross-link team-cost-planner~~ — DONE (Session 956).
- ~~FAQPage schema on team-cost-planner~~ — DONE (Session 956).
- ~~$9 flash sale UI~~ — DONE (Session 927). Needs Stripe link from human.
- ~~MCP server build~~ — DONE (Sessions 932-938). 5 tools, rate limiting, live demo.
- ~~MCP cross-links~~ — DONE (Sessions 939-940). 688+ pages linked.
- ~~OG/Twitter tags~~ — DONE (Session 944). 100% coverage.
- ~~Deprecation checker~~ — DONE (Sessions 941-942). 45+ cross-links.
- ~~Widget pages SEO~~ — DONE (Session 943). OG tags, share buttons, related tools.
- ~~Broken link fixes~~ — DONE (Session 943). All comparison links verified.
- ~~Pricing freshness badges~~ — DONE (Sessions 939-940). 92 pages.
- ~~SEO duplicate cleanup~~ — DONE (Session 946). 7 duplicate pages fixed, sitemap cleaned, RSS validated.

### Completed Summary (Sessions 416-966, Apr 23 - Jun 28)
- **Sessions 955-966 (Jun 28):** Team tools pivot (3 enterprise tools + landing page + blog post), teams.html distribution (23+ pages), GA4 tracking (18 events), model switch calculator enhanced, Stripe webhook email delivery, widget update to 20 models, stale model count sweeps. New comparison pages (Mythos 5 vs Fable 5, GPT-5.4 nano vs Mistral Small 4, GPT-5.4 Pro vs Opus 4.8). 20+ commits, 1,000+ files.
- **Sessions 945-954 (Jun 27):** New model launches (GPT-5.4 family + Fable 5, 42→48), 4 comparison pages, model count sync (317 files), cheat sheet upgrade, AI API Advisor, Pricing Benchmark, Pricing Badges, SEO cleanup. 18+ commits, 1,300+ files.
- **Sessions 905-944 (Jun 25-27):** MCP server (5 tools) + 688+ cross-links. Conversion overhaul. 15 comparison pages. Full site audit. OG/Twitter 100%. Chrome extension + npm. 70+ commits, 1,580+ files.
- **Sessions 1-904 (Apr 5 - Jun 25):** Full build from scratch. 652 pages, 320 posts, 48 models, 10 providers, 84 tools. 381+ commits, 2,420+ files.
