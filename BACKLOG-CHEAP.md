# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 898 pages, 357 posts, 48 models, 146 tools. Technically complete. Distribution is the bottleneck, not content.

### Active Tasks — Teams Page Distribution (Session 959-960)
- ~~**Cross-link teams.html from more pages**~~ — DONE (Session 959). Added to compare.html, savings-calculator.html, startup-cost-planner.html, and 3 high-traffic blog posts (cost optimization guide, ChatGPT cost, Claude Opus cost). Total: 16+ pages.
- ~~**Add OG/Twitter images for teams.html**~~ — DONE (Session 960). Custom SVG OG image with team icon, 3 tool cards, savings stat. PNG generated (76KB). og:image + twitter:image updated.
- ~~**Add teams.html to RSS feed**~~ — DONE (Session 959). Added to rss.xml as new item.
- ~~**Track teams.html in GA4**~~ — DONE (Session 961). Added 7 new events across 4 team pages: ROI calculator, FAQ opens, Pro CTA clicks, related tool clicks. All 4 team pages now have 3-8 GA4 events each.

### Active Tasks — Revenue Infrastructure
- **Configure Stripe webhook** — Set up webhook in Stripe Dashboard pointing to /api/stripe-webhook.js. Needs STRIPE_WEBHOOK_SECRET env var in Vercel
- **Test Stripe webhook flow** — Verify payment → webhook → code generation works end-to-end

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

### Completed Summary (Sessions 416-961, Apr 23 - Jun 28)
- **Session 961 (Jun 28):** Added 7 new GA4 events across all 4 team pages — ROI calculator, FAQ opens, Pro CTA clicks, related tool clicks. All team tools now fully instrumented for conversion funnel analysis. 1 commit, 4 files.
- **Session 960 (Jun 28):** Created custom OG image for teams.html — SVG-based with team icon, 3 tool cards, savings stat. PNG generated (76KB). Updated og:image + twitter:image meta tags. 1 commit, 3 files.
- **Session 959 (Jun 28):** Distributed teams.html — cross-links from 6 more pages (compare, savings-calculator, startup-cost-planner, 3 high-traffic blog posts). Added teams.html to RSS feed. Total: 16+ pages link to teams.html. 1 commit, 7 files.
- **Session 957-958b (Jun 28):** Built 2 team enterprise tools + teams.html landing page + team cost management blog post. Sitemap 882→885. Cross-linked from 20+ pages. 5 commits, 32 files.
- **Session 956 (Jun 28):** Distributed team cost planner — FAQPage schema (5 Q&As), visual FAQ section, cross-links from 13 pages (budget-planner, cost-report, compare, 4 comparison pages, 5 blog posts). 1 commit, 15 files.
- **Session 955 (Jun 28):** Built team-cost-planner.html (team budget tool for engineering managers). Built api/stripe-webhook.js (auto Pro delivery). Updated sitemap (881→882 URLs), homepage tools section. 1 commit, 4 files.
- **Session 954 (Jun 27):** Created 4 comparison pages for new models (GPT-5.4 vs Sonnet 4.6, GPT-5.4 vs Gemini 3.1 Pro, Fable 5 vs GPT-5.5, GPT-5.4 mini vs Haiku 4.5). Updated sitemap (877→881 URLs), compare.html listing. Comparison coverage: 244→248 pages. 1 commit, 6 files.
- **Sessions 945-953 (Jun 27):** Model count sync 42→48 (317 files), new model launches (830+ files), conversion optimization (go.html + deal.html), Advisor/Benchmark cross-links, cheat sheet upgrade, revenue tools built, SEO cleanup. 15+ commits, 1,200+ files.
- **Sessions 905-944 (Jun 25-27):** MCP server (5 tools, rate limiting) + 688+ cross-links. Conversion funnel overhaul. 15 comparison pages. Full site audit. OG/Twitter tags 100%. Chrome extension + npm package. 70+ commits, 1,580+ files.
- **Sessions 1-904 (Apr 5 - Jun 25):** Full build from scratch. 652 pages, 320 posts, 48 models, 10 providers, 84 tools. Conversion funnel. Claude 4 shutdown. MCP server. 381+ commits, 2,420+ files.
