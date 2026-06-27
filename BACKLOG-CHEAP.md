# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 887 pages, 353 posts, 42 models. Technically complete. Distribution is the bottleneck, not content.

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

### Completed Summary (Sessions 416-946, Apr 23 - Jun 28)
- **Session 946 (Jun 28):** SEO duplicate cleanup — 7 duplicate comparison pages fixed (canonical+noindex), orphan page resolved, sitemap cleaned (8 empty + 21 dupe entries removed), RSS XML validated (22 unescaped & chars), 2 duplicate page titles fixed, 23 internal links updated. 4 commits, 29 files.
- **Session 945 (Jun 28):** Documentation cleanup — rewrote PROGRESS.md, FINAL-2-WEEKS.md, BACKLOG-CHEAP.md, BACKLOG-PREMIUM.md. 1 commit, 4 files.
- **Sessions 941-944 (Jun 27):** OG/Twitter tags (100%), widget page SEO, broken link fix, deprecation checker (45+ links), Chrome extension (42 models), npm package update, API docs corrected. 9 commits, 38 files.
- **Sessions 927-940 (Jun 26-27):** MCP server (5 tools, rate limiting, live demo, 6 client setups, blog post) + MCP cross-linked from 688+ pages + pricing freshness badges + social sharing + $9 flash sale variant + deprecation checker page + data consistency fixes. 35+ commits, 750+ files.
- **Sessions 921-926 (Jun 25-26):** 15 comparison pages, full site audit, strategy shift (distribution > content). 10 commits.
- **Sessions 908-919 (Jun 24-25):** Conversion funnel overhaul + leak cleanup. 18 commits, 2,803 lines removed.
- **Sessions 889-907 (Jun 23-24):** Homepage cleanup, GA4 tracking, CRITICAL buy button fix, SEO fixes, deprecated model cleanup. 30 commits, 580+ files.
- **Sessions 878-888 (Jun 23):** go.html conversion overhaul. 18 commits, 250+ files.
- **Sessions 804-877 (Jun 21-23):** Deal page + content blitz + conversion optimization. 78+ commits, 670+ files.
- **Sessions 1-803 (Apr 5 - Jun 21):** Full build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools. Conversion funnel. Claude 4 shutdown. 381+ commits, 2,420+ files.
