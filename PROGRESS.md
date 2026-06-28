# PROGRESS.md

## Session 964 (Jun 28) — Widget Model Update + Stale Count Sweep
- **Updated embed widget with 5 new models** — Added GPT-5.4, GPT-5.4 mini, Claude Fable 5, Gemini 3.1 Pro, Grok 4.3 to embed.js. Widget now shows 20 curated models (was 15). Updated GPT-5 context window from 200K→272K to match pricing.json.
- **Fixed stale model counts across 17 files** — widget.html (meta, schema, FAQ, body: "14"→"20"), DISTRIBUTION-KIT.md ("14"→"20"), DISTRIBUTION-DEVTO.md, DISTRIBUTION-SHOWHN.md, tools.html, blog-embed-pricing-widget.html, blog-ai-api-pricing-ranked.html, gpt5-vs-claude-pricing-2026.html. Fixed "39"→"48" in COMMUNITY-ENGAGEMENT.md, REDDIT-DRAFTS.md, README.md, WIDGET-QUICKSTART.md, ACQUISITION-RESPONSE*.md, DIRECTORY-SUBMISSIONS.md. Fixed MCP-REDDIT-DRAFTS.md Show HN "42"→"48".
- **1 commit, 17 files.**

## Session 963 (Jun 28) — Stripe Webhook Email Delivery + Pro Access Restore
- **Enhanced Stripe webhook to send purchase confirmation emails** — /api/stripe-webhook.js now sends a branded email via Resend with the Pro access code, purchase amount, and activation instructions. Previously only logged the code to console.
- **Purchase record storage** — Webhook stores purchase records (email, code hash, amount, session ID, timestamp) in /tmp for admin lookup. New endpoint /api/restore-access.js lets users request their code by email.
- **Pro access restore flow** — New /restore.html page lets users enter their email to receive their access code. Rate-limited (3 requests per 5 min per IP). Sends branded email with code and step-by-step restore instructions.
- **Updated pro.html** — Added "Lost your code?" link next to "Already have a code?" to connect users to the restore flow.
- **3 commits, 4 files created/modified, ~450 lines.**

## Session 962 (Jun 28) — Enhanced Model Switch Calculator
- **Enhanced model-switch.html with 3 new sections** — Added migration steps, risk assessment, and code snippets to the existing Model Switch Calculator. Previously it only showed cost comparison; now it's a complete migration planning tool.
- **Migration steps** — Dynamic step-by-step guide based on whether switching providers (7-8 steps with time estimates) or within same provider (3-4 steps). Includes API key setup, model ID change, endpoint update, prompt adjustment, testing, staging, and rollout.
- **Risk assessment** — 5 risk factors evaluated: quality tier change, context window difference, provider change, deprecation status, and cost direction. Each rated low/medium/high with color indicators.
- **Code snippets** — Provider-specific code examples (OpenAI, Anthropic, Google, DeepSeek, generic) with syntax highlighting. Pro-gated for full snippets.
- **Updated meta tags** — Title and description now reflect the enhanced features (migration steps, code snippets).
- **Cross-linked from 2 more pages** — cheat-sheet.html (new tool card), ai-api-advisor.html (new banner). model-switch.html now linked from 300+ pages.
- **1 commit, 3 files, +180 lines.**

## Session 961 (Jun 28) — GA4 Event Tracking for Team Tools
- **Added 7 new GA4 events across 4 team pages** — All team tools now have comprehensive engagement tracking for conversion funnel analysis.
- **teams.html** (4 new events): `roi_calculator_used` (first interaction with ROI calculator), `faq_open` (FAQ accordion opens), `teams_pro_cta_click` (Pro CTA button clicks), `teams_related_tool_click` (related tool navigation). Total: 8 events.
- **team-cost-planner.html** (1 new): `faq_open`. Total: 4 events.
- **team-migration-planner.html** (1 new): `faq_open`. Total: 3 events.
- **vendor-evaluation-scorecard.html** (1 new): `faq_open`. Total: 3 events.
- **Strategic rationale** — Team tools target engineering managers (buyers) but had minimal tracking. Now every user interaction is instrumented: tool usage, FAQ engagement, CTA clicks, and cross-navigation. Enables GA4 funnel analysis from landing → tool use → Pro conversion.
- **1 commit, 4 files, +82 lines.**

## Session 961b (Jun 28) — Teams.html Cross-Links from High-Traffic Pages
- **Added teams.html links to 7 high-traffic pages** — openai.html, anthropic.html, cheat-sheet.html, ai-api-budget-planner.html, ai-api-advisor.html, ai-api-pricing-benchmark-2026.html, model-deprecation.html. Each gets a contextual link (blog card, tool card, or banner) that matches the page's design pattern.
- **Fixed stale model count** — ai-api-advisor.html benchmark link said "42 Models" → now "48 Models".
- **Teams.html now linked from 23+ pages** (was 16). These 7 pages likely represent a large portion of organic traffic (provider pages, interactive tools, reference pages).
- **1 commit, 7 files, +25 lines.**

## Session 961c (Jun 28) — Fix 454 Pages: Pro CTA Model Count
- **Fixed stale "42-model comparison" → "48-model comparison" across 454 HTML files** — The standard Pro upsell text ("Pro gives you 42-model comparison, migration code snippets...") was missed during the Session 953 model count sync. Every Pro CTA on the site now correctly says 48 models.
- **1 commit, 452 files, +469/-453 lines.**

## Session 960 (Jun 28) — Custom OG Image for teams.html
- **Created custom OG image for teams.html** — SVG-based (1200x630) with: team icon (3 people), page title, 3 tool cards, savings stat (30-60%), green team branding accent. Converted to PNG (76KB). Replaces generic og-image.png for better social sharing click-through.
- **Updated teams.html meta tags** — og:image and twitter:image now point to /og-images/teams.png.
- **1 commit, 3 files, +101 lines.**

## Session 959 (Jun 28) — Teams.html Distribution + RSS Feed
- **Cross-linked teams.html from 6 more pages** — compare.html (Related Reading), savings-calculator.html (related tools), startup-cost-planner.html (team tools CTA before Pro section), blog-ai-api-cost-optimization-guide.html, blog-chatgpt-api-cost.html, blog-claude-opus48-cost.html (all 3: related reading sections). Teams.html now linked from 16+ pages total (was 10).
- **Added teams.html to RSS feed** — New item in rss.xml so newsletter subscribers see the team cost management landing page. Description includes key value props: budget, migrate, evaluate providers.
- **1 commit, 7 files, +21 lines.**

## Sessions 955-958b (Jun 28) — Team Tools + Revenue Strategy Pivot
6 sessions. Strategic pivot to target engineering managers with budgets (buyers, not researchers). Built 3 team enterprise tools (team-cost-planner, team-migration-planner, vendor-evaluation-scorecard), teams.html landing page (320 lines, ROI calculator, FAQPage schema), team cost management blog post (290 lines). Added to global nav, sitemap 882→886. Cross-linked from 30+ pages. Custom OG image for teams.html. Fixed pricing-data.js (6 missing models). **12 commits, 60+ files, +3,000+ lines.**

## Session 954 (Jun 27) — New Model Comparison Pages (GPT-5.4, Fable 5, Haiku)
- **Created 4 comparison pages for new models** — GPT-5.4 vs Sonnet 4.6, GPT-5.4 vs Gemini 3.1 Pro, Claude Fable 5 vs GPT-5.5, GPT-5.4 mini vs Haiku 4.5. All with interactive calculators, FAQPage schema, OG/Twitter tags, share buttons, Pro CTAs, related tools.
- **Updated sitemap.xml** — Added 4 new comparison URLs (877→881 entries).
- **Updated compare.html** — Added 4 new comparison links to the listing page.
- **Comparison coverage expanded** — New models now have SEO-targeted pages for high-intent search queries like "GPT-5.4 vs Claude Sonnet", "Fable 5 vs GPT-5.5", etc.
- **1 commit, 6 files.**

## Session 953 (Jun 27) — Complete Model Count Sync 42→48
- **Updated chrome extension models.js** — Added 6 new models (GPT-5.4 family + Claude Fable 5/Mythos 5). Extension now has all 48 models.
- **Updated chrome extension manifest.json** — Description now says 48 models.
- **Updated npm package** — index.js comment, README.md, package.json all say 48 models.
- **Updated distribution docs** — DIRECTORY-SUBMISSIONS.md, MCP-REGISTRY-SUBMISSIONS.md, MCP-REDDIT-DRAFTS.md, FINAL-2-WEEKS.md, README.md all say 48 models.
- **Updated rss.xml** — 55 blog post descriptions updated from 42 to 48 models.
- **Updated llms.txt** — 5 references updated.
- **Updated shared.js** — 2 notification/email copy references updated.
- **Updated api/subscribe.js** — Email template reference updated.
- **Updated widget files** — calc-embed.js (2 links), embed.js (1 footer link).
- **2 commits, 17 files.**
- **Additional sweep** — Fixed URL-encoded Twitter share text in shared.js, 4 HTML files with inline "42 model" text, 9 HTML files with URL-encoded share links. 3 commits, 32 files total.
- **Massive sweep** — Fixed "All 42 Models", "42 AI models", "42 LLMs", "across 42", "42 alternatives" etc. across 317 HTML, JS, XML, and MD files. 1 commit, 317 files. **Every user-facing reference now says 48 models.**

## Session 952 (Jun 27) — New Model Launches: GPT-5.4 Family + Claude Fable 5
- **Added 6 new models to pricing.json** — GPT-5.4 ($2.50/$15), GPT-5.4 mini ($0.75/$4.50), GPT-5.4 nano ($0.20/$1.25), GPT-5.4 Pro ($30/$180), Claude Fable 5 ($10/$50), Claude Mythos 5 ($10/$50). Total: 42→48 models across 10 providers.
- **Created blog-june-2026-new-models.html** — Complete pricing guide for all 6 new models. Includes comparison table, cost-per-task breakdowns, migration guide, FAQPage schema, and Pro CTA. Targets "GPT-5.4 pricing" and "Claude Fable 5" search queries.
- **Updated openai.html** — Added GPT-5.4 family (4 models) to pricing table with "NEW" badges. Updated FAQ from 9 to 13 models.
- **Updated anthropic.html** — Added Claude Fable 5 and Mythos 5 to pricing table with "NEW" badges. Updated FAQ from 6 to 8 models.
- **Updated 825+ files** — Bulk-updated "42 models" to "48 models" across all HTML files, meta tags, descriptions, and structured data.
- **Updated sitemap.xml + rss.xml** — Added new blog post. RSS now has new entry as first item.
- **Updated blog.html** — Added new post as featured entry at top of blog listing.
- **Updated go.html + deal.html** — Model count references updated to 48.
- **Updated cheat-sheet.html** — Title and description updated to 48 models.
- **1 commit, 830+ files.**

## Sessions 950-951 (Jun 27) — Conversion + Cross-Links
2 sessions. go.html + deal.html conversion improvements (testimonials, email capture, pricing freshness badges). Pro CTAs added to 3 blog posts. AI API Advisor + Benchmark cross-links doubled (15→34, 14→33 pages). **2 commits, 24 files.**

## Sessions 945-949 (Jun 27) — Cheat Sheet, Revenue Tools, SEO Cleanup
6 sessions. Cheat sheet upgraded (766 lines, sortable/filterable). Revenue tools built: AI API Advisor, 2026 Pricing Benchmark, Pricing Badges. Cross-links doubled. SEO cleanup: 7 duplicate pages fixed, sitemap cleaned, RSS validated. **4 commits, 40+ files.**

## Sessions 905-944 (Jun 25-27) — MCP Server, Conversion, Distribution
40 sessions. MCP server built (5 tools, rate limiting) + cross-linked from 688+ pages. Conversion funnel overhaul + leak cleanup. 15 comparison pages. Full site audit. OG/Twitter tags 100%. Pricing freshness badges. Social sharing. Chrome extension + npm package updated. **70+ commits, 1,580+ files.**

## Sessions 1-904 (Apr 5 - Jun 25) — Full Build + Conversion + Distribution
904 sessions. Full APIpulse build from scratch (652 pages, 320 posts, 48 models, 10 providers, 84 tools). Conversion funnel overhaul. Claude 4 shutdown response. MCP server. 381+ commits, 2,420+ files.

## Site Status (as of Session 964, Jun 28, 2026)
**901 web pages | 358 blog posts | 48 models | 10+ providers | 146 tools | 17 API endpoints | 3 embeddable widgets (20 models) | 248 comparison pages | 1 MCP server (5 tools)**
- Sitemap (884 URLs), RSS (783 items, valid XML), blog files (357 posts) — all in sync
- **Structured data: 98.3%** — FAQPage schema on key pages. 15 pages without are non-commercial.
- **Pro CTA coverage: 98.2%** — 849 pages link to go.html. Only 16 pages without (non-commercial). All CTAs now say "48-model" (fixed Session 961).
- **Deal banner coverage: 100%** — 698 inline + global shared.js on all 867 pages.
- **Pricing freshness badges** — 92 pages show green badge.
- **OG/Twitter social sharing tags** — 100% coverage on all indexed content pages. Custom OG images for teams.html.
- **Social sharing buttons** — 13 key pages with X/LinkedIn/HN share buttons.
- **MCP server** — 5 tools, rate limited. Linked from 688+ pages (77.6%). MCP-REGISTRY-SUBMISSIONS.md ready.
- **AI API Advisor** — Interactive 4-step model recommender. 48 models. GA4 tracked. Cross-linked from 34 pages.
- **2026 Pricing Benchmark** — Downloadable report, email capture, CSV. Cross-linked from 33 pages.
- **Pricing Badges** — Embeddable shields.io badges for 27+ models.
- **Team Tools** (Sessions 955-961) — team-cost-planner, team-migration-planner, vendor-evaluation-scorecard, teams.html landing page. All 4 pages have comprehensive GA4 tracking (18 events total). Teams.html cross-linked from 23+ pages.
- **Model Deprecation Checker** — Linked from 45+ pages. FAQPage schema, interactive checker.
- **Stripe Webhook** (Session 963) — Sends purchase confirmation email via Resend with access code. Stores purchase records. Restore flow: /restore.html + /api/restore-access.js. **BLOCKED: needs Stripe Dashboard webhook + STRIPE_WEBHOOK_SECRET env var.**
- **deal.html** — Product + FAQPage schema, exit popup, sticky CTAs, countdown timer (expires Jul 12 → $49), savings calculator.
- **go.html** — Primary conversion funnel. BUY is primary CTA. Trust signals, testimonials, FAQPage schema. **GO_SKIP prevents shared.js overwriting.**
- **shared.js cleanup** — Exit popup CTAs route to go.html. No free tool escape hatches.
- **Post-expiry handling** — DEAL_EXPIRED flag. After Jul 12: all prices → $49.
- **Static pricing API** — /data/pricing.json (48 models, CC-BY-4.0). OpenAPI spec at /data/pricing-openapi.json.
- **go.html pre-fill** — 606 pages auto-detect model via GO_MODEL_MAP (130+ variants).

## Blocked on Human Action
1. **$9 Stripe link** — Flash sale UI ready on deal.html (`?flash=9`). Need: create $9 one-time Stripe payment link, replace `FLASH_STRIPE_URL` placeholder.
2. **Stripe webhook setup** — Code complete. Need: (a) Create webhook in Stripe Dashboard → `https://getapipulse.com/api/stripe-webhook`, (b) Set STRIPE_WEBHOOK_SECRET, RESEND_API_KEY, EMAIL_FROM env vars in Vercel.
3. **Distribution** — Widget (DISTRIBUTION-KIT.md, 18 targets), directories (DIRECTORY-SUBMISSIONS.md, 22 listings), MCP registries (MCP-REGISTRY-SUBMISSIONS.md, 6 dirs), Reddit/HN posts (MCP-REDDIT-DRAFTS.md). All copy-paste ready.
4. **Chrome Web Store** — Publish extension ($5). HELP-REQUEST filed Jun 1.
5. **npm package** — npm-package/ ready. Needs npm account.

## Closed / No Longer Viable
- ~~Reddit promotions~~ — Channel closed. New accounts get 0 traction.
- ~~Stripe one-time $19/$39 links~~ — DONE (HELP-RESPONSES Issue #17).
