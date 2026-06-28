# PROGRESS.md

## Session 967 (Jun 28) — Mythos 5 & Fable 5 Comparison Pages
- **Created 5 new comparison pages** for Mythos 5 and Fable 5 — these newer models only had 1-2 comparisons each. New pages: Mythos 5 vs Opus 4.8, Mythos 5 vs Sonnet 4.6, Mythos 5 vs GPT-5.5 Pro, Fable 5 vs Opus 4.8, Fable 5 vs Sonnet 4.6. Each has interactive calculator, use-case recommendations, FAQPage schema, share buttons, Pro CTA.
- **Updated sitemap.xml** — 5 new URLs added (894 total).
- **Added links to compare.html** — 5 new comparison cards added to the comparison index.
- **Updated comparison count** — "251 comparison pages" → "256 comparison pages" across 12 files.
- **1 commit, 18 files, +215,000/-0 lines.**

## Session 966 (Jun 28) — Missing Model Comparison Pages
- **Created 3 new comparison pages** for models added in Sessions 952-958 that never got comparisons: Claude Mythos 5 vs Fable 5, GPT-5.4 nano vs Mistral Small 4, GPT-5.4 Pro vs Claude Opus 4.8. Each has interactive calculator, use-case recommendations, FAQPage schema, share buttons, Pro CTA.
- **Updated sitemap.xml** — 3 new URLs added.
- **Fixed stale RSS reference** — cheat sheet description said "42 Models", now "48 Models".
- **Updated comparison count** — "248 comparison pages" → "251 comparison pages" across all files.
- **1 commit, 5 files, +3,500/-0 lines.**

## Session 965 (Jun 28) — Stale 42-Model Reference Sweep
Fixed 16 stale "42-model" references across 9 files (blog posts, tools.html, generate-report.html, index.html). **1 commit, 9 files.**

## Sessions 952-964 (Jun 27-28) — Team Tools, Models, Distribution
Team tools pivot (3 enterprise tools + teams.html + blog post), teams distribution (23+ pages), GA4 tracking (18 events), model switch calculator enhanced, Stripe webhook email delivery, widget update to 20 models, stale model count sweeps. New model launches (GPT-5.4 family + Fable 5, 42→48 models), 4 comparison pages, model count sync (317 files). Cheat sheet upgrade, AI API Advisor, Pricing Benchmark, Pricing Badges. **20+ commits, 1,000+ files.**

## Sessions 905-951 (Jun 25-27) — MCP Server, Conversion, SEO
MCP server (5 tools) + 688+ cross-links. Conversion overhaul. 15 comparison pages. Full site audit. OG/Twitter 100%. Chrome extension + npm. **70+ commits, 1,580+ files.**

## Sessions 1-904 (Apr 5 - Jun 25) — Full Build
Full APIpulse build from scratch. 652 pages, 320 posts, 48 models, 10 providers, 84 tools. **381+ commits, 2,420+ files.**

## Site Status (as of Session 966, Jun 28, 2026)
**909 web pages | 358 blog posts | 48 models | 10+ providers | 146 tools | 17 API endpoints | 3 embeddable widgets (20 models) | 256 comparison pages | 1 MCP server (5 tools)**
- Sitemap (889 URLs), RSS (783 items, valid XML), blog files (357 posts) — all in sync
- **Structured data: 98.3%** — FAQPage schema on key pages. 15 pages without are non-commercial.
- **Pro CTA coverage: 98.2%** — 849 pages link to go.html. Only 16 pages without (non-commercial). All CTAs now say "48-model".
- **Deal banner coverage: 100%** — 698 inline + global shared.js on all 867 pages.
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

## Blocked on Human Action
1. **$9 Stripe link** — Flash sale UI ready on deal.html (`?flash=9`). Need: create $9 one-time Stripe payment link, replace `FLASH_STRIPE_URL` placeholder.
2. **Stripe webhook setup** — Code complete. Need: (a) Create webhook in Stripe Dashboard → `https://getapipulse.com/api/stripe-webhook`, (b) Set STRIPE_WEBHOOK_SECRET, RESEND_API_KEY, EMAIL_FROM env vars in Vercel.
3. **Distribution** — Widget (DISTRIBUTION-KIT.md, 18 targets), directories (DIRECTORY-SUBMISSIONS.md, 22 listings), MCP registries (MCP-REGISTRY-SUBMISSIONS.md, 6 dirs), Reddit/HN posts (MCP-REDDIT-DRAFTS.md). All copy-paste ready.
4. **Chrome Web Store** — Publish extension ($5). HELP-REQUEST filed Jun 1.
5. **npm package** — npm-package/ ready. Needs npm account.

## Closed / No Longer Viable
- ~~Reddit promotions~~ — Channel closed. New accounts get 0 traction.
- ~~Stripe one-time $19/$39 links~~ — DONE (HELP-RESPONSES Issue #17).
