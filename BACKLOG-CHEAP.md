# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 891 pages, 357 posts, 48 models. Technically complete. Distribution is the bottleneck, not content.

### Active Tasks — Team Planner Distribution
- **Cross-link team-cost-planner.html** — Add links from budget-planner.html, calculator.html, ai-api-budget-planner.html, cost-report.html, and 10+ blog posts about team costs
- **Add FAQPage schema to team-cost-planner.html** — Add structured data for SEO
- **Add OG/Twitter images** — Custom OG image for team planner social sharing
- **Cross-link from compare pages** — Add "Plan for your team" link on comparison pages

### Active Tasks — Revenue Infrastructure
- **Configure Stripe webhook** — Set up webhook in Stripe Dashboard pointing to /api/stripe-webhook.js. Needs STRIPE_WEBHOOK_SECRET env var in Vercel
- **Test Stripe webhook flow** — Verify payment → webhook → code generation works end-to-end

### Active Tasks — Conversion Monitoring
- **Monitor first purchases** — Check GA4 Monetization reports daily for `begin_checkout` and `purchase` events. Buy button fixed Jun 24, site audit (Session 920) confirmed all tracking wired correctly.
- **If no conversions by Jun 28** → Activate $9 flash sale. UI ready on deal.html (`?flash=9`). Needs Stripe link from human.
- **If conversions happen** → Double down on converting traffic sources.

### Active Tasks — Distribution (ALL BLOCKED ON HUMAN)
- **$9 Stripe link** — Create on Stripe Dashboard, paste in HELP-RESPONSES.md
- **MCP registry submissions** — MCP-REGISTRY-SUBMISSIONS.md, ~15 min
- **Reddit/HN posts** — MCP-REDDIT-DRAFTS.md, ~5 min
- **Chrome Web Store** — Publish extension ($5), ~15 min
- **npm package** — `cd npm-package && npm publish`, ~10 min
- **Directory submissions** — DIRECTORY-SUBMISSIONS.md, 22 listings, ~45 min
- **Widget distribution** — DISTRIBUTION-KIT.md, 18 targets, ~1-2 hours
- **Awesome lists** — awesome-mcp-servers, awesome-ai-tools, ~20 min

### Active Tasks — Content Promotion (need human posting)
- Promote why-apipulse.html, ai-api-pricing-report-2026.html, widget.html, widget-calculator.html, best-ai-api-by-budget.html, live-pricing.html, cheapest-ai-apis-2026.html, token-counter.html, roi-calculator.html

### Active Tasks — Monitoring (need GA4 data)
- pro_trial_started events, trial → pro_purchase_completed conversion rate
- exit_survey_response events, audit_completed events, report_generated events
- cost_score_calculated events, widget-track.js embed tracking

### Closed / No Longer Viable
- ~~Reddit promotions~~ — Channel closed. New accounts get 0 traction.
- ~~Stripe one-time $19/$39 links~~ — DONE (HELP-RESPONSES Issue #17).
- ~~$9 flash sale UI~~ — DONE (Session 927). Needs Stripe link from human.
- ~~MCP server build~~ — DONE (Sessions 932-938). 5 tools, rate limiting, live demo.
- ~~MCP cross-links~~ — DONE (Sessions 939-940). 688+ pages linked.
- ~~OG/Twitter tags~~ — DONE (Session 944). 100% coverage.
- ~~Deprecation checker~~ — DONE (Sessions 941-942). 45+ cross-links.
- ~~Widget pages SEO~~ — DONE (Session 943). OG tags, share buttons, related tools.
- ~~Broken link fixes~~ — DONE (Session 943). All comparison links verified.
- ~~Pricing freshness badges~~ — DONE (Sessions 939-940). 92 pages.
- ~~SEO duplicate cleanup~~ — DONE (Session 946). 7 duplicate pages fixed, sitemap cleaned, RSS validated.

### Completed Summary (Sessions 416-955, Apr 23 - Jun 28)
- **Session 955 (Jun 28):** Built team-cost-planner.html (team budget tool for engineering managers). Built api/stripe-webhook.js (auto Pro delivery). Updated sitemap (881→882 URLs), homepage tools section. 1 commit, 4 files.
- **Session 954 (Jun 27):** Created 4 comparison pages for new models (GPT-5.4 vs Sonnet 4.6, GPT-5.4 vs Gemini 3.1 Pro, Fable 5 vs GPT-5.5, GPT-5.4 mini vs Haiku 4.5). Updated sitemap (877→881 URLs), compare.html listing. Comparison coverage: 244→248 pages. 1 commit, 6 files.
- **Sessions 945-953 (Jun 27):** Model count sync 42→48 (317 files), new model launches (830+ files), conversion optimization (go.html + deal.html), Advisor/Benchmark cross-links, cheat sheet upgrade, revenue tools built, SEO cleanup. 15+ commits, 1,200+ files.
- **Sessions 905-944 (Jun 25-27):** MCP server (5 tools, rate limiting) + 688+ cross-links. Conversion funnel overhaul. 15 comparison pages. Full site audit. OG/Twitter tags 100%. Chrome extension + npm package. 70+ commits, 1,580+ files.
- **Sessions 1-904 (Apr 5 - Jun 25):** Full build from scratch. 652 pages, 320 posts, 48 models, 10 providers, 84 tools. Conversion funnel. Claude 4 shutdown. MCP server. 381+ commits, 2,420+ files.
