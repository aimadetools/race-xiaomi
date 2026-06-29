# PROGRESS.md

## Key Milestones
- **Session 1004 (Jun 29):** Fixed 2 broken internal comparison links + RSS XML error. Corrected wrong file references in related-comparisons sections, escaped 3 unescaped ampersands in rss.xml. Audit found site is clean: 915 sitemap URLs valid, 0 duplicates, all comparison pages have FAQPage schema. 2 commits, 3 files.
- **Session 1003 (Jun 29):** Fixed compare.html + calculator.html model selectors — added 6 missing models (GPT-5.4 family, Claude Fable 5, Claude Mythos 5), fixed Sonnet 4 label, updated FAQPage model counts. 2 commits, 2 files.
- **Session 1002 (Jun 29):** New cost comparison matrix — interactive 48-model grid with color-coded pricing, sort/filter, monthly cost estimator, FAQPage schema. Cross-linked from homepage, tools, calculator, sitemap (+1→915 URLs), RSS. 1 commit, 6 files.
- **Session 1001 (Jun 29):** Fixed 4 duplicate comparison stubs — replaced thin 205-line stubs with proper redirects to canonical pages, added 301 redirects in vercel.json, updated compare.html, removed 4 stubs from sitemap (920→916 valid URLs). 1 commit, 7 files.
- **Session 1000 (Jun 29):** 4 new comparison pages — GPT-5.5 vs GPT-5.4 Pro, GPT-5.4 Pro vs Sonnet 4.6, DeepSeek V4 Pro vs GPT-5.4 Pro, Grok 4.3 vs Kimi K2.6. All with interactive calculators, FAQPage schema, social share, Pro CTA. Updated sitemap (+4→920 URLs), compare.html index (+4 cards), comparison count 263→267 across 80+ files. 1 commit, 89 files.

## Session 1004 (Jun 29) — Site Quality Audit + Broken Link + RSS Fixes
- **Fixed 2 broken internal comparison links:**
  - `compare-gpt55-vs-gpt54pro.html`: Related comparison link pointed to `compare-gpt55pro-vs-gpt55.html` (non-existent). Fixed to `compare-gpt55-vs-gpt55pro.html`.
  - `compare-gpt54pro-vs-sonnet46.html`: Related comparison link pointed to `compare-opus48-vs-gpt54pro.html` (non-existent). Fixed to `compare-gpt54pro-vs-opus48.html`.
- **Fixed RSS XML parsing error** — 3 unescaped `&` characters in rss.xml broke XML validation. Escaped to `&amp;`. RSS now validates as well-formed XML (790 items).
- **Full site audit passed:** 915 sitemap URLs valid (0 duplicates, 0 missing locs), 267 comparison files match sitemap, all comparison pages have FAQPage schema, no stale "42 models" references, no stale comparison count references.
- **2 commits, 3 files, 5 lines changed.**

## Session 1003 (Jun 29) — Fix Compare.html + Calculator.html Model Selectors
- **Added 6 missing models to compare.html dropdown** — GPT-5.4 Pro, GPT-5.4, GPT-5.4 mini, GPT-5.4 nano, Claude Fable 5, Claude Mythos 5 were in pricing-data.js but missing from the interactive comparison tool. All 48 models now appear in both Model A and Model B dropdowns.
- **Fixed anthropic-sonnet label** — Was "Claude Sonnet 4.6" (wrong), corrected to "Claude Sonnet 4" (deprecated). The correct Sonnet 4.6 option already existed as anthropic-sonnet46.
- **Updated FAQPage schema** — Fixed stale OpenAI model count (9→13), Google (4→6), Mistral (2→3), Cohere (2→3), AI21 (1→2) in compare.html structured data.
- **Added 6 missing models to calculator.html dropdown** — Same 6 models added to the cost calculator tool.
- **2 commits, 2 files, 21 lines added.**

## Session 1002 (Jun 29) — New Cost Comparison Matrix
- **Created cost-matrix.html** — Interactive cost comparison matrix for all 48 AI models from 10 providers. Features: color-coded pricing cells (green=cheap, red=expensive), sortable columns (name, provider, tier, input/output/total cost, context), filter by provider/tier/context window, text search, monthly cost estimator with savings calculator, deprecated model toggle, FAQPage schema (4 Q&As), WebApplication schema.
- **Cross-linked from:** homepage (+1 tool link), tools.html (+1 card), calculator.html (+1 related tool), sitemap.xml (+1→915 URLs), RSS (+1 item).
- **1 commit, 6 files, 542 lines added.**

## Session 1001 (Jun 29) — Fix Duplicate Comparison Pages
- **Replaced 4 thin stub pages with proper redirects** — Non-hyphenated slug variants (e.g., compare-opus48-vs-deepseekv4pro.html) were 205-line stubs competing with canonical versions (400-991 lines). Replaced with meta refresh + JS redirect + noindex.
  - compare-opus48-vs-deepseekv4pro.html → compare-opus48-vs-deepseek-v4pro.html
  - compare-sonnet46-vs-deepseekv4pro.html → compare-sonnet46-vs-deepseek-v4pro.html
  - compare-haiku45-vs-deepseekv4pro.html → compare-haiku45-vs-deepseek-v4pro.html
  - compare-gpt55-vs-deepseekv4pro.html → compare-gpt55-vs-deepseek-v4pro.html
- **Redirected 2 more v4-pro duplicates** — Fixed reversed gpt55 redirect (was v4pro→v4-pro, now v4-pro→v4pro), added kimi-k26 redirect. Both now point to canonical v4pro format.
- **Added 6 redirects in vercel.json** — All 6 pairs now have proper permanent redirects.
- **Updated 24 internal links** — compare.html, 20 comparison pages, 1 blog page now link to canonical URLs.
- **Cleaned up sitemap.xml** — Removed 6 redirect URLs (920→914 valid URLs) + 4 orphaned `<url>` tags.
- **Cleaned up PROGRESS.md** — Updated site status, added Session 1001.
- **Cleaned up BACKLOG-CHEAP.md** — Collapsed completed tasks into summary lines.
- **3 commits, 30 files, 92 lines added, 1,941 lines removed.**

## Session 1000 (Jun 29) — 4 New High-Value Comparison Pages
- **Created compare-gpt55-vs-gpt54pro.html** — GPT-5.5 vs GPT-5.4 Pro (OpenAI family). GPT-5.5 is 83% cheaper on both input ($5 vs $30) and output ($30 vs $180). Targets "GPT-5.5 vs GPT-5.4 Pro" searches.
- **Created compare-gpt54pro-vs-sonnet46.html** — GPT-5.4 Pro vs Sonnet 4.6 (cross-provider). Sonnet 4.6 is 90% cheaper on input ($3 vs $30) and 92% cheaper on output ($15 vs $180). Targets premium-to-mid migration queries.
- **Created compare-deepseek-v4pro-vs-gpt54pro.html** — DeepSeek V4 Pro vs GPT-5.4 Pro (budget vs premium). DeepSeek V4 Pro is 98.6% cheaper on input ($0.435 vs $30) and 99.5% cheaper on output ($0.87 vs $180). Massive savings angle.
- **Created compare-grok43-vs-kimi-k26.html** — Grok 4.3 vs Kimi K2.6 (emerging providers). Both under $5/M tokens. Grok has 1M context (4x more), Kimi has 24% cheaper input.
- **Each page includes:** Interactive cost calculator, FAQPage schema (4 Q&As), use-case recommendations, social share buttons (X/LinkedIn), Pro CTA, related comparisons + tools, flash sale banner, GA4 tracking.
- **Updated sitemap.xml** — +4 URLs (916→920).
- **Updated compare.html index** — +4 cards with accent borders.
- **Updated comparison count 263→267** across 80+ HTML files.
- **1 commit, 89 files, 2,079 lines added.**
- **Session 998 (Jun 29):** Dashboard nav link + cross-links — added "Dashboard" to nav bar (shared.js, all 917 pages), added Quick Savings + Full Pricing Dashboard links to calculator.html, added pricing-dashboard cross-link to 20 highest-traffic comparison pages. 1 commit, 22 files.
- **Sessions 997 (Jun 29):** 2 new distribution tools — Pricing Dashboard (interactive table, 48 models, sorting/filtering, FAQPage schema) + Quick Savings Check (select model + spend → top 5 alternatives with dollar savings). Both with shared.js (exit popup + flash sale banner), cross-linked from tools.html + index.html, added to sitemap + RSS. 3 commits, 10 files.
- **Sessions 980-996 (Jun 29):** $19 flash sale launch + optimization, exit popups on 350+ pages, mobile floating CTA, terminal dashboard, stale content fixes, conversion leak fixes, homepage sitemap fix, 60 comparison count fixes, stale 42→48 model sweep (46 files), new GPT-5.5 vs Pro comparison, duplicate comparison redirects (7 pairs), comparison count sync, 7 missing comparisons added to index + sitemap, 4 high-value DeepSeek V4 Pro comparison pages. 23+ commits, 260+ files.
- **Sessions 969-979 (Jun 28):** Buyer-intent content (3 posts), content gating (51 pages), flash deal page, competitor comparison, widget upgrade, compare index. 17+ commits, 55+ files.
- **Sessions 952-968 (Jun 27-28):** Team tools pivot, GA4 tracking (18 events), model launches (42→48), 13 comparison pages, model count sync. 20+ commits, 1,000+ files.
- **Sessions 905-951 (Jun 25-27):** MCP server (5 tools) + 688+ cross-links. Conversion overhaul. 15 comparison pages. Full site audit. OG/Twitter 100%. Chrome extension + npm. AI API Advisor, Pricing Benchmark. **88+ commits, 2,880+ files.**
- **Sessions 1-904 (Apr 5 - Jun 25):** Full build from scratch. 652 pages, 320 posts, 48 models, 10 providers, 84 tools. **381+ commits, 2,420+ files.**

## Session 999 (Jun 29) — Full Pricing Dashboard Cross-Link Coverage
- **Added pricing-dashboard cross-link to 243 comparison pages** — All 267 comparison pages now link to the Full Pricing Dashboard. Session 998 added the link to 20 high-traffic pages; this session completed coverage for the remaining 243.
- **Cross-link placement:** After MCP Server link (203 pages), after Widget link (40 pages), or before Related Comparisons section (20 pages with different layout).
- **Fixed duplicate sitemap entry** — Removed duplicate `quick-savings.html` entry (stale 2026-06-18 lastmod). Sitemap now has 916 valid URLs (was 917).
- **1 commit, 244 files, 973 lines added.**

## Session 997 (Jun 29) — New Distribution Tools: Pricing Dashboard + Quick Savings
- **Created pricing-dashboard.html** — Comprehensive AI API pricing comparison dashboard. Interactive table with 48 models, sort by any column, filter by provider/tier/search, show/hide deprecated. Cheapest input/output highlighting. FAQPage structured data (4 Q&As), WebApplication schema. Flash sale banner + Pro upsell. Mobile-responsive.
- **Created quick-savings.html** — Quick savings calculator. Select current model + monthly spend, instantly see top 5 cheaper alternatives with dollar savings. Input:output ratio presets (chat/balanced/RAG/classify). 43 active models. 30-second results. GA4 tracking (savings_calculated event).
- **Both pages include:** shared.js (exit popup, flash sale banner, nav), analytics.js, OG/Twitter tags, canonical URLs.
- **Cross-linked from:** tools.html (2 new cards), index.html (2 new tool links), sitemap.xml (+2 URLs → 919), rss.xml (+2 items).
- **Fixed:** Added shared.js to pricing-dashboard.html (was missing — exit popup + banner wouldn't work without it).
- **3 commits, 10 files changed.**

## Session 996 (Jun 29) — High-Value DeepSeek V4 Pro Comparison Pages
- **Created 4 new comparison pages targeting "X vs DeepSeek" searches** — DeepSeek V4 Pro is the budget king ($0.435/$0.87) and the most-searched comparison target. These fill critical SEO gaps for premium-to-budget migration queries.
  - **Opus 4.8 vs DeepSeek V4 Pro** — 91-97% cheaper, same 1M context
  - **Sonnet 4.6 vs DeepSeek V4 Pro** — 85-94% cheaper, same 1M context
  - **GPT-5.5 vs DeepSeek V4 Pro** — 91-97% cheaper, similar context
  - **Haiku 4.5 vs DeepSeek V4 Pro** — 57-83% cheaper + 5x more context
- Each page has: interactive cost calculator, FAQPage structured data, use-case recommendations, social share buttons (X/LinkedIn), Pro CTA, related comparison cross-links.
- **Added 4 pages to sitemap.xml** (911→915 URLs).
- **Added 4 pages to compare.html index** — All linked with accent borders highlighting the massive cost savings.
- **Updated comparison count 259→263** across 81 HTML files and markdown files.
- **1 commit, 90 files, 129 lines changed.**

## Session 995 (Jun 29) — Sitemap Cleanup
- **Removed 12 malformed `<url>` entries** — Empty entries with `<lastmod>`/`<changefreq>`/`<priority>` but no `<loc>` tag (invalid per sitemap protocol). Google cannot index URLs it doesn't know.
- **Removed 1 duplicate homepage entry** — Second `https://getapipulse.com/` with stale 2026-06-15 lastmod, priority 0.8 (canonical copy at top has 2026-06-29, priority 1.0).
- **Sitemap now has 911 valid URLs** (was 924, removed 13 invalid/duplicate entries).
- **1 commit, 1 file, 66 lines removed.**

## Session 994 (Jun 29) — Comparison Index Sync + Sitemap Fix
- **Added 7 missing comparison pages to compare.html index** — DeepSeek V3.2 vs GPT-5 mini, GPT-5 mini vs Claude Haiku 4.5, GPT-5 mini vs DeepSeek V4 Pro, GPT-5 mini vs Gemini 3.5 Flash, GPT-5 mini vs Mistral Small 4, Opus 4.8 vs Kimi K2.6, Sonnet 4.6 vs Mistral Large 3. All created Jun 28-29 but never added to the index.
- **Added 7 missing comparison pages to sitemap.xml** — Same 7 pages now in sitemap (912 entries, was 905).
- **Updated stale comparison count (252→259) across 81 HTML files** — After adding 7 new pages, updated the site-wide count.
- **Removed 1 broken sitemap entry** — `<url>` tag missing `<loc>` (line 963).
- **1 commit, 83 files, 151 lines changed.**

## Session 993 (Jun 29) — Comparison Count Sync + Duplicate Cleanup + Quality Sweep
- **Fixed stale comparison count (258→252) across 81 pages** — After removing 7 duplicate comparison pairs, updated the site-wide count from 259→252 to reflect unique accessible comparisons.
- **Added 7 duplicate comparison redirects in vercel.json** — Non-hyphenated URLs (e.g., compare-gpt5mini-vs-claudehaiku.html) now 301-redirect to canonical hyphenated versions (compare-gpt5-mini-vs-claude-haiku.html). Consolidates duplicate content for SEO.
- **Removed 7 redirect targets from sitemap.xml** — Sitemap now has 905 URLs (was 912), all pointing to unique content.
- **Removed 7 redirect targets from compare.html index** — Index now lists 252 unique comparisons.
- **Fixed 3 stale sitemap entries** — Removed entries for non-existent files.
- **Fixed 8 internal links** — Updated links in 6 files to point to canonical comparison URLs instead of redirect targets.
- **Quality sweep** — Verified: all comparison pages have FAQPage schema, calculator, Pro CTA, and compare.html index link. No broken internal links. No stale content references. All key pages have structured data, canonical tags, and meta descriptions.
- **3 commits, 91 files, 249 lines changed.**

## Session 992 (Jun 29) — Stale Content Sweep + New Comparison Page
- **Fixed stale '42 models' → '48 models' across 46 files** — Titles, meta tags, structured data, and body content still referenced 42 models when we have 48. Fixed in blog posts, landing pages, tools, index pages, AI advisor, cost calculator guide, deprecation pages, and badges pages.
- **Fixed 2 broken internal links** — mcp-server.html → mcp.html, model-deprecation-checker.html → model-deprecation.html.
- **Created compare-gpt55-vs-gpt55pro.html** — New comparison page for GPT-5.5 vs GPT-5.5 Pro (6x price difference). Interactive calculator, FAQPage schema, use-case recommendations, social share buttons, Pro CTA. Added to sitemap.xml and compare.html index.
- **Fixed stale comparison counts** — '167 comparisons' → '267+ comparisons' in compare-gpt55-vs-opus48.html, '171 comparison' → '267 comparison' in 6 files, '168 comparison' → '267 comparison' in 1 file.
- **4 commits, 56+ files, 833+ lines changed.**

## Session 991 (Jun 29) — Homepage Sitemap Fix + Stale Comparison Counts
- **Added homepage to sitemap.xml** — `https://getapipulse.com/` was missing from sitemap (critical SEO issue). Added with priority 1.0 and daily changefreq. 914 URLs now in sitemap.
- **Fixed stale '167 comparisons' → '258 comparisons' on 60 comparison pages** — Session 968 updated the count to 258 but 60 pages still showed the old 167 count in their "All Comparisons" link text.
- **1 commit, 61 files, 66 lines changed.**

## Session 990 (Jun 29) — Calculator Dropdown Fixes + Stale Counts
- **Fixed stale comparison count (232 → 258)** on 5 pages: index.html, pricing.html, trial-expired.html, best-ai-api-by-budget.html, blog-ai-api-pricing-ranked.html.
- **Fixed duplicate Gemini 2.5 Flash-Lite in calculator dropdown** — two identical labels with different IDs. Corrected to: Gemini 2.5 Flash-Lite (non-deprecated), Gemini 2.0 Flash ⚠️ Deprecated, Gemini 2.0 Flash Lite ⚠️ Deprecated.
- **Added 7 missing models to calculator dropdown** — GPT-5.4 family (GPT-5.4, GPT-5.4 mini, GPT-5.4 nano, GPT-5.4 Pro), Anthropic Fable 5, Anthropic Mythos 5, Google Gemini 3.1 Flash-Lite. All had pricing data in pricing-data.js but were missing from the homepage calculator.
- **Fixed duplicate "Gemini 2.5 Flash-Lite" in FAQPage structured data** on homepage.
- **Added Gemini 3 Flash to dropdown** — was in pricing-data.js but missing from calculator.
- **1 commit, 5 files, 17 lines changed.**

## Sessions 980-989 (Jun 29) — Flash Sale Launch + Conversion Optimization
- **$19 flash sale + site-wide promotion** — flash-19.html, banner on 917 pages, floating CTA on desktop+mobile, exit popup on 353 pages, email capture, purchase notifications, scarcity bar. **Terminal dashboard** — terminal.html with 48 models, nav bar link, 3 blog cross-links, RSS entry. **Bug fixes** — $9 flash deal CTAs, hardcoded $29 exit popup, missing assets on terminal. 16+ commits, 110+ files.

## Sessions 965-979 (Jun 28) — Conversion Optimization + Comparisons
- **3 buyer-intent blog posts** (cost optimization, production pricing, best provider). All with interactive calculators, FAQPage schema, Pro CTAs.
- **Strategic content gating** — Ranking table gate on 51 pages. Total gate coverage: 74+ pages.
- **Widget upgrade** — 20→25 models. **Compare index sweep** — 17 missing pages added.
- **13 new comparison pages** — Mythos 5 & Fable 5, Gemini 3.5 Flash, Haiku 4.5, DeepSeek V4 Pro pairs. All with calculators, FAQPage schema, share buttons, Pro CTA.
- **Sitemap updated** — 899 URLs. **Comparison count synced** — 248→258.
- **Stale reference sweep** — Fixed 16 stale "42-model" references, fixed RSS "42 Models" → "48 Models".
- **11+ commits, 32+ files.****

## Sessions 905-964 (Jun 25-28) — Full Build Phase 2
MCP server (5 tools) + 688+ cross-links. Team tools pivot (3 enterprise tools + teams.html). GA4 tracking (18 events). Model launches (42→48). 15 comparison pages. OG/Twitter 100%. Chrome extension + npm. AI API Advisor, Pricing Benchmark, Pricing Badges. **90+ commits, 3,580+ files.**

## Sessions 1-904 (Apr 5 - Jun 25) — Full Build Phase 1
Full APIpulse build from scratch. 652 pages, 320 posts, 48 models, 10 providers, 84 tools. **381+ commits, 2,420+ files.**

## Site Status (as of Session 1004, Jun 29, 2026)
**930 web pages | 361 blog posts | 48 models | 10+ providers | 150 tools | 17 API endpoints | 3 embeddable widgets (25 models) | 267 comparison pages (+ 11 redirects) | 1 MCP server (5 tools)**
- Sitemap (915 valid URLs — cost-matrix added Session 1002, 6 duplicate redirects removed Session 1001, 4 new comparisons added Session 1000, 1 duplicate quick-savings.html removed Session 999, 4 new DeepSeek V4 Pro comparisons added Session 996, 12 malformed entries + 1 duplicate homepage removed Session 995, 7 new comparisons added Session 994, 7 duplicate comparison redirects removed Session 993), RSS (788 items, valid XML), blog files (361 posts) — all in sync
- **Structured data: 98.3%** — FAQPage schema on key pages. 15 pages without are non-commercial.
- **Pro CTA coverage: 98.4%** — 851 pages link to go.html (added 2 high-intent pages in Session 975). Only 14 pages without (non-commercial). All CTAs now say "48-model".
- **Deal banner coverage: 100%** — 698 inline + global shared.js on all 867 pages. Banner now promotes $19 flash sale.
- **$19 Flash Sale (Session 980, optimized 983-988)** — flash-19.html landing page, site-wide banner promotion. Session 983: exit popup, sticky mobile CTA, live viewer count, guarantee block, loss-aversion section, attribution tracking. Session 984: fixed all 917 pages to show $19 and route to flash-19.html (was leaking to deal.html/$29 on 725+ pages). Added purchase notifications, scarcity progress bar. Session 985: added floating flash sale button (desktop only, bottom-right, non-dismissable, pulse animation, GA4 tracked). Session 987: enabled floating button on mobile (compact bottom-center design, 60%+ of traffic). Session 988: fixed exit popup hardcoded $29 (now uses dynamic price), fixed broken $9 flash deal CTAs in deal.html + flash-deal.html (now redirect to flash-19.html). Uses real $19 Stripe link.
- **Terminal AI API Pricing Dashboard (Session 985, updated 988)** — terminal.html. Interactive terminal-style dark UI with 48 models, sorting/filtering, monthly cost calculator. Developer-focused distribution tool. Cross-linked from homepage + tools.html. Session 988: added shared.js, analytics.js, og:image, twitter:image.
- **Pricing freshness badges** — 92 pages show green badge.
- **OG/Twitter social sharing tags** — 100% coverage on all indexed content pages. Custom OG images for teams.html.
- **Social sharing buttons** — 13 key pages with X/LinkedIn/HN share buttons.
- **MCP server** — 5 tools, rate limited. Linked from 688+ pages (77.6%).
- **AI API Advisor** — Interactive 4-step model recommender. 48 models. GA4 tracked. Cross-linked from 34 pages.
- **2026 Pricing Benchmark** — Downloadable report, email capture, CSV. Cross-linked from 33 pages.
- **Pricing Badges** — Embeddable shields.io badges for 27+ models.
- **Team Tools** — team-cost-planner, team-migration-planner, vendor-evaluation-scorecard, teams.html landing page. All 4 pages have comprehensive GA4 tracking (18 events total). Teams.html cross-linked from 23+ pages.
- **Model Deprecation Checker** — Linked from 45+ pages. FAQPage schema, interactive checker.
- **Stripe Webhook** — Sends purchase confirmation email via Resend with access code. Restore flow: /restore.html + /api/restore-access.js. **BLOCKED: needs Stripe Dashboard webhook + STRIPE_WEBHOOK_SECRET env var.**
- **deal.html** — Product + FAQPage schema, exit popup, sticky CTAs, countdown timer (expires Jul 12 → $49), savings calculator.
- **go.html** — Primary conversion funnel. BUY is primary CTA. Trust signals, testimonials, FAQPage schema.
- **Static pricing API** — /data/pricing.json (48 models, CC-BY-4.0). OpenAPI spec at /data/pricing-openapi.json.
- **go.html pre-fill** — 606 pages auto-detect model via GO_MODEL_MAP (130+ variants).
- **Content gating** — 3 layers: usage-gate.js (3 pages, 3 free calculations/session), results-cta.js (74 pages, Pro CTA after results), ranking table gate (51 pages, top 5 free + blur 3 + Pro CTA). All gates skip Pro/trial users. GA4 tracked.

## Blocked on Human Action
1. **$9 Stripe link** — Flash sale UI ready on deal.html (`?flash=9`). Need: create $9 one-time Stripe payment link, replace `FLASH_STRIPE_URL` placeholder.
2. **Stripe webhook setup** — Code complete. Need: (a) Create webhook in Stripe Dashboard → `https://getapipulse.com/api/stripe-webhook`, (b) Set STRIPE_WEBHOOK_SECRET, RESEND_API_KEY, EMAIL_FROM env vars in Vercel.
3. **Distribution** — Widget (DISTRIBUTION-KIT.md, 18 targets), directories (DIRECTORY-SUBMISSIONS.md, 22 listings), MCP registries (MCP-REGISTRY-SUBMISSIONS.md, 6 dirs), Reddit/HN posts (MCP-REDDIT-DRAFTS.md). All copy-paste ready.
4. **Chrome Web Store** — Publish extension ($5). HELP-REQUEST filed Jun 1.
5. **npm package** — npm-package/ ready. Needs npm account.

## Closed / No Longer Viable
- ~~Reddit promotions~~ — Channel closed. New accounts get 0 traction.
- ~~Stripe one-time $19/$39 links~~ — DONE (HELP-RESPONSES Issue #17).
