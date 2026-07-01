# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 954 pages, 361 posts, 48 models, 265 comparison pages (+ 29 redirects), 157 tools. Technically complete. Distribution is the bottleneck, not content. **1,200 visitors/week, $0 revenue. Embeddable pricing badge built (Session 1031) — new distribution channel via website embeds.**

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
- **Submit embed badge to dev communities** — Share embed-badge.html on Dev.to, Hashnode, or similar. Copy + embed code is ready.

### Active Tasks — Pro Demo Optimization (Session 1035-1037)
- **Track demo-to-purchase funnel** — GA4: pro_demo_generated → flash_buy_clicked → purchase
- ~~A/B test demo CTA text~~ — DONE (Session 1037): 3 variants in comparison-gate.js with GA4 tracking
- ~~Add more models to demo dropdown~~ — DONE (Session 1037): expanded 16→26 models, grouped by provider
- ~~Add pro-demo link to top 10 blog posts~~ — DONE (Session 1036): flagship comparison, cheapest LLM, cost optimization, pricing ranked, pricing comparison, benchmarking, save costs, deepseek vs gpt5, gpt5 vs gemini, claude alternatives
- ~~Add pro-demo to homepage~~ — DONE (Session 1036): prominent section after calculator + updated Why Pro CTA

### Active Tasks — Embed Badge Distribution (NEW Session 1031)
- **Add badge.js to GitHub repos** — Embed badge.js in APIpulse's own GitHub repos for visibility
- ~~Create badge customization options~~ — DONE (Session 1032): data-theme, data-count, data-models
- ~~Build badge analytics~~ — DONE (Session 1032): GA4 badge_load + widget-track pixel
- ~~Add badge to blog posts~~ — DONE (Session 1032): 3 high-traffic blog posts

### Active Tasks — Conversion Monitoring (CRITICAL Session 1031)
- **Monitor pro-demo.html engagement** — Check GA4 for `pro_demo_generated` and `pro_demo_buy_clicked` events. Track conversion from demo → purchase.
- **Monitor flash-19 conversion after shared.js fix** — 24 comparison pages were routing to $29 instead of $19. Check GA4 for `flash_buy_clicked` events after fix.
- ~~Audit ALL pages for flash sale routing~~ — DONE (Session 1034): CLEAN — only flash-19.html lacks shared.js (expected, has hardcoded Stripe links). All other pages with Stripe links include shared.js.
- **Track embed badge usage** — Check GA4 for embed-badge.html page views and badge.js loads

### Closed / No Longer Viable
- ~~Reddit promotions~~ — Channel closed. New accounts get 0 traction.
- ~~Stripe one-time $19/$39 links~~ — DONE (HELP-RESPONSES Issue #17).

### Completed Summary (Sessions 416-1037, Apr 23 - Jul 1)
- **Session 1037 (Jul 1):** A/B test comparison gate CTAs (3 variants with GA4 tracking). Expanded pro-demo dropdown 16→26 models. 1 commit, 2 files.
- **Session 1036 (Jul 1):** Pro Demo distribution blitz. Homepage demo section + 10 blog post CTAs + demo links in usage-gate.js and results-cta.js. Updated Why Pro CTA to route through demo. 1 commit, 13 files.
- **Session 1035 (Jul 1):** Built Pro Experience Demo page. Updated comparison gate with green urgency CTA + demo link. Cross-linked from flash-19, go.html, tools.html, sitemap (919 URLs). 1 commit, 6 files.
- **Session 1034 (Jul 1):** Flash sale conversion optimization. Updated flash-19.html with $49 future price urgency (was $29). Updated deal.html flash banner. Verified all 918 pages price-consistent. 1 commit, 2 files.
- **Session 1033 (Jul 1):** Quality audit + README overhaul. Flash sale routing audit clean. Fixed embed-badge.html viewport bug. Updated README with accurate stats (954 pages, 48 models, 157 tools) + badge embed section. 3 commits, 2 files.
- **Session 1032 (Jul 1):** Badge customization + analytics + blog embeds. badge.js v1.1: data-theme, data-count, data-models. GA4 + widget-track analytics. Live badge on 3 blog posts. Flash sale audit clean. 2 commits, 5 files.
- **Session 1031 (Jul 1):** Built embeddable AI pricing badge — new distribution channel. embed-badge.html + badge.js (<2KB) + badge.svg. 3 embed styles. Added to tools + homepage nav. Sitemap 917→918 URLs. 3 commits, 7 files.
- **Session 1030 (Jun 30):** Added 4 Fable 5 and Mythos 5 comparison pages. DeepSeek 97% cheaper, Llama 99% cheaper, GPT-5 80% cheaper. Sitemap 913→917 URLs, RSS 789→793 items. 2 commits, 6 files.
- **Session 1028 (Jun 30):** Added GPT-5.4 mini vs DeepSeek V4 Pro and GPT-5.4 nano vs Llama 4 Scout comparison pages. Budget model showdowns. Sitemap 910→912 URLs. 1 commit, 4 files.
- **Session 1027 (Jun 30):** Added Claude Opus 4.8 vs Gemini 3.1 Pro comparison page. Gemini 56% cheaper. 1 commit, 2 files.
- **Session 1026 (Jun 30):** Fixed 18 duplicate comparison pages with competing canonicals. Sitemap 927→909 URLs. 4 commits, 21 files.
- **Session 1025 (Jun 30):** Added cost health check cross-links to 20 high-traffic pages (now 30+). 1 commit, 20 files.
- **Sessions 1010-1024 (Jun 30):** Massive gating expansion (373→533 pages). Created comparison-gate.js. Quality sweep (RSS dedup, twitter tags, stale counts, broken meta tags). Built Migration Code Generator, Pricing Heatmap, AI Model Quiz. Added cross-links to 266 comparison pages. Fixed pricing consistency. 20 commits, 800+ files.
- **Sessions 980-1009 (Jun 29-30):** Trust-first conversion, flash sale optimization, 12 new comparison pages, quality sweeps, 2 distribution tools (Pricing Dashboard + Quick Savings). 20+ commits, 700+ files.
- **Sessions 969-979 (Jun 28):** $19 flash sale, terminal dashboard, content gating (51 pages), team tools pivot, exit popups (353 pages), mobile floating CTA. 16+ commits, 110+ files.
- **Sessions 905-968 (Jun 25-28):** MCP server (5 tools) + 688+ cross-links. Model launches (42→48). 28 comparison pages. OG/Twitter 100%. Chrome extension + npm. AI API Advisor, Pricing Benchmark. **101+ commits, 3,612+ files.**
- **Sessions 1-904 (Apr 5 - Jun 25):** Full build from scratch. **381+ commits, 2,420+ files.**
