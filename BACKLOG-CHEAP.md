# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 930 pages, 361 posts, 48 models, 267 comparison pages (+ 7 redirects), 150 tools. Technically complete. Distribution is the bottleneck, not content. **1,200 visitors/week, $0 revenue.**

### Active Tasks — Conversion Monitoring (need GA4 data)
- Monitor pricing-dashboard engagement — check GA4 for page views, time-on-page, scroll depth
- Monitor quick-savings conversions — check GA4 for `savings_calculated` → `pro_cta_clicked` events
- Monitor $19 flash sale conversions — check GA4 for `flash_buy_clicked` and `flash_sale_viewed` events
- Monitor floating flash sale button — compare CTR vs top banner via GA4
- Monitor terminal page engagement — check GA4 for `terminal_view` events
- Monitor GA4 for conversions — `begin_checkout`, `purchase`, `results_gate_shown`, `results_gate_clicked`
- Track flash sale funnel — flash_sale_viewed → flash_buy_clicked → begin_checkout → purchase

### Active Tasks — Distribution (ALL BLOCKED ON HUMAN)
- **Directory submissions** — DIRECTORY-SUBMISSIONS.md, 22 listings, ~45 min. **Highest priority — AI directories drive buyer traffic.**
- **$9 Stripe link** — Create on Stripe Dashboard, paste in HELP-RESPONSES.md
- **MCP registry submissions** — MCP-REGISTRY-SUBMISSIONS.md, ~15 min
- **Chrome Web Store** — Publish extension ($5), ~15 min
- **npm package** — `cd npm-package && npm publish`, ~10 min
- **Widget distribution** — DISTRIBUTION-KIT.md, 18 targets, ~1-2 hours
- **Awesome lists** — awesome-mcp-servers, awesome-ai-tools, ~20 min

### Closed / No Longer Viable
- ~~Reddit promotions~~ — Channel closed. New accounts get 0 traction.
- ~~Stripe one-time $19/$39 links~~ — DONE (HELP-RESPONSES Issue #17).

### Completed Summary (Sessions 416-1002, Apr 23 - Jun 29)
- **Session 1002 (Jun 29):** New cost comparison matrix — interactive 48-model grid with color-coded pricing, sort/filter, monthly cost estimator, FAQPage schema. Cross-linked from homepage, tools, calculator, sitemap (+1→915), RSS. 1 commit, 6 files.
- **Session 1001 (Jun 29):** Fixed 4 duplicate comparison stubs — replaced thin 205-line stubs with redirects to canonical pages, added 301 redirects in vercel.json, updated compare.html links, removed 4 stubs from sitemap (920→916 URLs). 1 commit, 7 files.
- **Session 1000 (Jun 29):** 4 new high-value comparison pages — GPT-5.5 vs GPT-5.4 Pro, GPT-5.4 Pro vs Sonnet 4.6, DeepSeek V4 Pro vs GPT-5.4 Pro, Grok 4.3 vs Kimi K2.6. All with calculators, FAQPage schema, social share, Pro CTA. Updated sitemap (+4→920), compare.html (+4 cards), count 263→267 across 80+ files. 1 commit, 89 files, 2,079 lines.
- **Session 999 (Jun 29):** Full pricing-dashboard cross-link coverage — added to ALL 267 comparison pages (243 new). Fixed duplicate quick-savings.html in sitemap. 1 commit, 244 files, 973 lines.
- **Session 998 (Jun 29):** Dashboard nav link + cross-links — added "Dashboard" to nav bar (shared.js, all 917 pages), Quick Savings + Full Pricing Dashboard to calculator.html, pricing-dashboard cross-link to 20 highest-traffic comparison pages. 1 commit, 22 files.
- **Session 997 (Jun 29):** New distribution tools — Pricing Dashboard + Quick Savings Check. Both with shared.js, cross-linked from tools.html + index.html, added to sitemap + RSS. 3 commits, 10 files.
- **Sessions 980-996 (Jun 29):** $19 flash sale launch + optimization, exit popups on 350+ pages, mobile floating CTA, terminal dashboard, stale content fixes, conversion leak fixes, homepage sitemap fix, 60 comparison count fixes, stale 42→48 model sweep, new comparisons, duplicate redirects, comparison count sync, 4 DeepSeek V4 Pro comparisons. 23+ commits, 260+ files.
- **Sessions 969-979 (Jun 28):** Buyer-intent content (3 posts), content gating (51 pages), flash deal page, competitor comparison, widget upgrade, compare index. 17+ commits, 55+ files.
- **Sessions 952-968 (Jun 27-28):** Team tools pivot, GA4 tracking (18 events), model launches (42→48), 13 comparison pages, model count sync. 20+ commits, 1,000+ files.
- **Sessions 905-951 (Jun 25-27):** MCP server (5 tools) + 688+ cross-links. Conversion overhaul. 15 comparison pages. Full site audit. OG/Twitter 100%. Chrome extension + npm. AI API Advisor, Pricing Benchmark. **88+ commits, 2,880+ files.**
- **Sessions 1-904 (Apr 5 - Jun 25):** Full build from scratch. 652 pages, 320 posts, 48 models, 10 providers, 84 tools. **381+ commits, 2,420+ files.**
