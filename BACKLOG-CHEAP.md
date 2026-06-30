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

### Completed Summary (Sessions 416-1021, Apr 23 - Jun 30)
- **Sessions 1018-1021 (Jun 30):** Quality sweep — fixed RSS (1604→786 dedup), twitter:description to 79 pages, twitter:title to 16 pages, stale counts (82→156 tools, 431→945 pages, 256→361 posts, 258/263→275 comparisons). Fixed broken og:title/twitter:title meta tags across 16 files. 5 commits, 115 files.
- **Sessions 1013-1017 (Jun 30):** Built AI API Migration Code Generator, overhauled Free vs Pro page, built Pricing Heatmap + AI Model Quiz, added cross-links to 266 comparison pages. Fixed pricing consistency across 6 conversion pages. 7 commits, 301 files.
- **Sessions 1010-1012 (Jun 30):** Cost reduction guide cross-links on 49 pages. Fixed pricing inconsistency across flash sale pages. Fixed 13 stale "42 Models" → "48 Models". 3 commits, 70 files.
- **Sessions 980-1009 (Jun 29-30):** Trust-first conversion, flash sale optimization, 12 new comparison pages, quality sweeps, 2 distribution tools (Pricing Dashboard + Quick Savings). 20+ commits, 700+ files.
- **Sessions 969-979 (Jun 28):** $19 flash sale, terminal dashboard, content gating (51 pages), team tools pivot, exit popups (353 pages), mobile floating CTA. 16+ commits, 110+ files.
- **Sessions 905-968 (Jun 25-28):** MCP server (5 tools) + 688+ cross-links. Model launches (42→48). 28 comparison pages. OG/Twitter 100%. Chrome extension + npm. AI API Advisor, Pricing Benchmark. **101+ commits, 3,612+ files.**
- **Sessions 1-904 (Apr 5 - Jun 25):** Full build from scratch. **381+ commits, 2,420+ files.**
