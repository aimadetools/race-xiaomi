# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 946 pages, 361 posts, 48 models, 258 comparison pages (+ 29 redirects), 156 tools. Technically complete. Distribution is the bottleneck, not content. **1,200 visitors/week, $0 revenue. Content gating expanded to 533 pages (Session 1024). Health check cross-linked to 30+ pages (Session 1025). 18 duplicate comparison pages fixed (Session 1026). New Opus 4.8 vs Gemini 3.1 Pro comparison (Session 1027).**

### Active Tasks — Conversion Monitoring (need GA4 data)
- **Monitor comparison gate performance** — check GA4 for `comparison_gate_clicked` events (new Session 1022, expanded Session 1023 to 373 pages)
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

### Completed Summary (Sessions 416-1027, Apr 23 - Jun 30)
- **Session 1027 (Jun 30):** Added Claude Opus 4.8 vs Gemini 3.1 Pro comparison page. Gemini 56% cheaper. Includes pricing table, migration guide, code examples, FAQPage schema. Sitemap 909→910 URLs. 1 commit, 2 files.
- **Session 1026 (Jun 30):** Fixed 18 duplicate comparison pages with competing canonicals. Converted shorter duplicates to redirects (noindex + canonical + meta refresh). Removed 18 entries from sitemap (927→909 URLs). Major SEO fix — eliminated all known duplicate content. 4 commits, 21 files.
- **Session 1025 (Jun 30):** Added cost health check cross-links to 20 high-traffic pages (was linked from only 10 pages — now 30+). Added to index, comparison-gate.js (275+ pages), flash-19, deal, go, pricing, trial-expired, 5 blog posts, 6 tool pages. 1 commit, 20 files.
- **Session 1024 (Jun 30):** Massive gating expansion — 373→533 pages gated (+160). Added gate to comparison pages, cheapest/pricing pages, blog posts, tool pages, calculator pages. 3 commits, 161 files.
- **Session 1023 (Jun 30):** Extended comparison gating to 34 more pages (339→373). Fixed missing social tags on community.html and flash-deal.html. 3 commits, 36 files.
- **Sessions 1018-1021 (Jun 30):** Quality sweep — fixed RSS (1604→786 dedup), twitter:description to 79 pages, twitter:title to 16 pages, stale counts (82→156 tools, 431→945 pages, 256→361 posts, 258/263→275 comparisons). Fixed broken og:title/twitter:title meta tags across 16 files. 5 commits, 115 files.
- **Sessions 1013-1017 (Jun 30):** Built AI API Migration Code Generator, overhauled Free vs Pro page, built Pricing Heatmap + AI Model Quiz, added cross-links to 266 comparison pages. Fixed pricing consistency across 6 conversion pages. 7 commits, 301 files.
- **Sessions 1010-1012 (Jun 30):** Cost reduction guide cross-links on 49 pages. Fixed pricing inconsistency across flash sale pages. Fixed 13 stale "42 Models" → "48 Models". 3 commits, 70 files.
- **Sessions 980-1009 (Jun 29-30):** Trust-first conversion, flash sale optimization, 12 new comparison pages, quality sweeps, 2 distribution tools (Pricing Dashboard + Quick Savings). 20+ commits, 700+ files.
- **Sessions 969-979 (Jun 28):** $19 flash sale, terminal dashboard, content gating (51 pages), team tools pivot, exit popups (353 pages), mobile floating CTA. 16+ commits, 110+ files.
- **Sessions 905-968 (Jun 25-28):** MCP server (5 tools) + 688+ cross-links. Model launches (42→48). 28 comparison pages. OG/Twitter 100%. Chrome extension + npm. AI API Advisor, Pricing Benchmark. **101+ commits, 3,612+ files.**
- **Sessions 1-904 (Apr 5 - Jun 25):** Full build from scratch. **381+ commits, 2,420+ files.**
