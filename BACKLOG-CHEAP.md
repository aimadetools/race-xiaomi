# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 945 pages, 361 posts, 48 models, 275 comparison pages (+ 11 redirects), 156 tools. Technically complete. Distribution is the bottleneck, not content. **1,200 visitors/week, $0 revenue.**

### Active Tasks — Conversion Monitoring (need GA4 data)
- Monitor pricing-dashboard engagement — check GA4 for page views, time-on-page, scroll depth
- Monitor quick-savings conversions — check GA4 for `savings_calculated` → `pro_cta_clicked` events
- Monitor $19 flash sale conversions — check GA4 for `flash_buy_clicked` and `flash_sale_viewed` events
- Monitor floating flash sale button — compare CTR vs top banner via GA4
- Monitor terminal page engagement — check GA4 for `terminal_view` events
- Monitor GA4 for conversions — `begin_checkout`, `purchase`, `results_gate_shown`, `results_gate_clicked`
- Track flash sale funnel — flash_sale_viewed → flash_buy_clicked → begin_checkout → purchase
- Monitor compare-plans.html engagement — check GA4 for `free_vs_pro_viewed` and `fvp_cta_clicked` events

### Active Tasks — Content & Conversion
- Monitor GA4 for cost reduction guide traffic and conversions
- Test flash-19.html conversion after trust fixes (compare before/after)
- Monitor GA4 for heatmap and quiz engagement (new tools from Session 1013)

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

### Completed Summary (Sessions 416-1020, Apr 23 - Jun 30)
- **Session 1020 (Jun 30):** Fixed 3 remaining stale tool count refs (155→156) in changelog.html + tools.html meta tags. Fixed HTML syntax error (extra `>` in twitter:title tag). 1 commit, 2 files.
- **Session 1019 (Jun 30):** Stale count sweep — fixed "82 tools" → 156 in 5 pages, "431 pages, 256 posts" → 945/361 in changelog, stale comparison counts 258/263→275 in 6 pages, tool count 155→156 (actual card count). 3 commits, 11 files.
- **Session 1018 (Jun 30):** Quality sweep — fixed RSS feed (1604→786 items, removed 818 duplicates), added twitter:description to 79 pages, twitter:title to 16 pages, fixed stale "87 comparisons" → 275 on migration hub. Cleaned up PROGRESS.md. 5 commits, 97 files.
- **Session 1017 (Jun 30):** Fixed pricing consistency across 6 conversion pages — replaced misleading "was $49" strikethroughs with honest "→ $49 Jul 12" urgency. Fixed stale tool count 82→155. Launched background agent to add og:description to 6 comparison pages. 2 commits, 8 files.
- **Session 1016 (Jun 30):** Built AI API Migration Code Generator — interactive tool generating Python/Node.js/curl code for switching providers. Supports 8 providers, 40+ models. Cost savings calculator, FAQPage + WebApplication schema. Cross-linked from tools, homepage, cost reduction guide, sitemap (+1→927), RSS. 1 commit, 6 files.
- **Session 1015 (Jun 30):** Overhauled Free vs Pro comparison page (compare-plans.html) — replaced stale $29 pricing with $19 flash sale, added interactive live demo showing blurred Pro-only content, "Who should upgrade" section, new FAQPage schema. Cross-linked from flash-19.html + tools.html. 1 commit, 4 files.
- **Session 1014 (Jun 30):** Added pricing heatmap cross-links to 266 comparison pages. Quiz link already on flash-19.html. 1 commit, 266 files.
- **Session 1013 (Jun 30):** New viral tools — Pricing Heatmap (interactive 48-model cost visualization) + AI Model Quiz (personalized recommender). Cross-linked from tools, homepage, sitemap, RSS, cost reduction guide. 2 commits, 13 files.
- **Session 1012 (Jun 30):** Fixed 13 stale "42 Models" stat box references → "48 Models" across quality pages. Credibility fix for social proof sections. 1 commit, 13 files.
- **Session 1011 (Jun 30):** Fixed pricing inconsistency across flash sale pages — 7 files had stale "$49" as "was" price when actual regular price is $29. Trust-impacting fix for conversion funnel. Full site audit: 0 broken links, all 275 comparison pages have FAQPage schema, RSS valid. 1 commit, 7 files.
- **Session 1010 (Jun 30):** Massive cross-link expansion — added cost reduction guide link to 49 premium model comparison pages (GPT-5.5, GPT-5.5 Pro, Opus 4.8, Gemini 3.1 Pro). Fixed stale "258 Comparison Pages" reference. Total cost reduction guide links: 56 pages. 1 commit, 50 files.
- **Session 1009 (Jun 30):** Cross-linked cost reduction guide — added blog card (top position) + internal links from 6 comparison pages (Claude 4 Opus vs DeepSeek V4 Pro, Claude 4 Opus vs GPT-5, Claude 4 Opus vs GPT-5.5 Pro, ChatGPT vs DeepSeek, Anthropic vs DeepSeek, Best AI API for Startups). 1 commit, 7 files.
- **Session 1007 (Jun 29):** Quality sweep — removed 24 duplicate comparison cards from compare.html index (293→269 unique), fixed 5 broken internal links across 6 comparison pages. Full site audit passed: 0 broken links, 0 missing assets. 2 commits, 7 files.
- **Session 1006 (Jun 29):** 4 new high-value comparison pages (GPT-5 Mini vs Haiku 4.5, DeepSeek V4 Pro vs GPT-5, Gemini 3.5 Flash vs DeepSeek V4 Pro, GPT-5 Mini vs GPT-4o). Updated count 271→275, sitemap 919→923, RSS +4 (798). 1 commit, 89 files.
- **Session 1005 (Jun 29):** 4 new comparison pages (GPT-5.5 vs Haiku 4.5, GPT-5 mini vs Opus 4.8, GPT-5 mini vs GPT-5.5, GPT-5 mini vs GPT-5.5 Pro). Fixed 5 broken comparison cards. Added analytics.js to 4 pages. Updated count 267→271, sitemap 915→919, RSS +4. 1 commit, 91 files.
- **Session 1004 (Jun 29):** Site quality audit — fixed 2 broken comparison links, RSS XML error, 2 stale comparison counts. Verified 915 sitemap URLs clean. 4 commits, 5 files.
- **Session 1003 (Jun 29):** Fixed compare.html + calculator.html model selectors — added 6 missing models (GPT-5.4 family, Claude Fable 5, Claude Mythos 5), fixed Sonnet 4 label, updated FAQPage model counts. 2 commits, 2 files.
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
