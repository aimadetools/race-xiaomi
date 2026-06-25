# PROGRESS.md

## Session 905 (Jun 25) — Fix Deprecated Model References (1 commit)
**Updated 7 files: replaced deprecated model names with current versions in blog content, FAQ structured data, and comparison links.**
- **Deprecated model cleanup** — Several blog posts and comparison pages referenced deprecated models (Claude Sonnet 4, Claude 4 Opus, Gemini 2.0 Flash, DeepSeek V3) as current recommendations. Updated to current equivalents: Claude Sonnet 4.6, Claude Opus 4.8, Gemini 2.5 Flash-Lite, DeepSeek V4 Flash.
- **glossary.html** — Foundation Model example updated from Claude Sonnet 4 to 4.6.
- **blog-multi-model-routing.html** — Fixed 5 deprecated references in FAQ structured data + body content (Claude Sonnet 4 → 4.6, Claude 4 Opus → Opus 4.8, Gemini 2.0 Flash → Gemini 3 Flash).
- **blog-best-ai-api-data-analysis-2026.html** — Fixed 8 deprecated references: Claude Sonnet 4 → 4.6 in FAQ, Gemini 2.0 Flash → Gemini 2.5 Flash-Lite in model card, pricing table, cost examples, and recommendations.
- **blog-claude-sonnet46-cost.html** — Added "(deprecated)" label to Claude Sonnet 4 in comparison table, updated Gemini 2.0 Flash → 2.5 Flash-Lite in cost example.
- **blog-gpt5-vs-gemini-25-pro.html** — Updated broken comparison link from deprecated claude-sonnet4 page to current sonnet46 page.
- **compare-gemini35flash-vs-mistral-large3.html** — Gemini 2.0 Flash → Gemini 2.5 Flash-Lite in FAQ structured data + body.
- **cheapest-ai-api-chatbots.html** — DeepSeek V3 → DeepSeek V4 Flash in cost example.
- **1 commit, 7 files changed, 24 insertions, 24 deletions**

## Session 904 (Jun 25) — Fix Outdated Model Counts (1 commit)
**Updated "32 models" → "42 models" across 4 files (35 lines).**
- **August/September 2026 pricing blogs** — Both future-dated posts (noindexed) had 11 occurrences each of "32 models" in titles, meta descriptions, OG tags, Twitter cards, structured data, stat cards, and body text. Updated all to 42 (matching pricing.json: 36 active + 6 deprecated).
- **blog.html** — 3 entries for July/Aug/Sep pricing reports still said "32 models" in titles and summaries. July blog file was already correct (Session 903) but the blog.html card wasn't updated.
- **tools.html** — Free API Cost Audit card said "28 models across 8 providers" → "42 models across 10 providers."
- **1 commit, 4 files changed, 35 insertions, 35 deletions**

## Session 903 (Jun 25) — SEO Fixes + July 2026 Pricing Blog Update (1 commit)
**Un-noindexed 6 comparison pages + updated July 2026 pricing blog from 32→42 models.**
- **Comparison page SEO fix** — 6 comparison pages with full content had `noindex` tags wasting crawl budget. Removed noindex, fixed 3 broken canonical URLs (were pointing to redirect targets). Pages now indexable by Google.
- **July 2026 pricing blog update** — Blog said "32 models" but pricing.json has 42 (36 active + 6 deprecated). Added 7 missing models (Gemini 2.5 Flash-Lite, Gemini 3 Flash, Gemini 3.5 Flash, DeepSeek V3.2, Mistral Medium 3.5, Jamba 1.7 Large, Command A). Marked 3 deprecated models. Fixed 5 pricing errors (Llama 4 Scout, Kimi K2.6, Mistral Small 4, Llama 4 Maverick, Llama 4 Scout context). Updated FAQ answers, meta descriptions, structured data. Made page indexable.
- **1 commit, 7 files changed, 95 insertions, 46 deletions**

## Session 902 (Jun 25) — Sticky Bar Fix + Homepage Cleanup (1 commit)
**Fixed competing sticky CTA bars + removed duplicate testimonials from homepage.**
- **Sticky bar stacking fix** — `sticky-bottom-bar` (email capture, 45s timer) and `sticky-pro-cta` (Pro purchase, scroll-triggered) could stack on top of each other on blog/tool pages. Added unified dismiss state (`apipulse_pro_cta_dismissed` + `apipulse_sticky_bar_dismissed`) so dismissing either bar dismisses both. Bottom bar now checks for Pro CTA before showing. Pro CTA removes bottom bar if present.
- **Duplicate testimonials removed** — Homepage had two identical testimonials sections (Session 883 + Session 887). Removed the redundant second section, reducing page length by ~40 lines.
- **1 commit, 2 files changed, 12 insertions, 42 deletions**

## Summary: Sessions 889-901 (Jun 25) — Conversion Optimization + Site Health
13 sessions. Homepage cleanup (857 lines removed from What's New + comparison table updated with current models). Social proof page (why-apipulse.html). GA4 ecommerce tracking. "State of AI API Pricing 2026" report. Pro CTA coverage 98.2%. CRITICAL buy button fix (GO_SKIP). Site health audit. FAQPage schema + Stripe link routing. 25 commits, 540+ files.

## Summary: Sessions 878-888 (Jun 24-25) — go.html Conversion Overhaul
11 sessions. Flipped CTAs (buy primary, trial secondary). Trust signals, provider bar, checklist, badges, developer testimonials, Before/After comparison, social proof. GO_MODEL_MAP fix for DeepSeek/Mistral/Grok/Gemini. 232 comparison page CTAs. Homepage testimonials. Migration checklist optimization. 18 commits, 250+ files.

## Summary: Sessions 864-877 (Jun 24) — Deal Page Build + UX Fixes
14 sessions. Created deal.html (countdown, calculator, testimonials, FAQ, dual CTAs). Headline A/B test (3 variants). Urgency banners to 258 comparison + 26 alternatives pages. Product + FAQPage schema, OG tags. Post-expiry handling: centralized DEAL_EXPIRED flag. 28 commits, 450+ files.

## Summary: Sessions 804-863 (Jun 21-24) — Content Blitz + Conversion Optimization
60 sessions. go.html redesign, model pre-fill for 606 pages, widget distribution kit, hidden costs blog, ROI payback section, SEO audit, A/B pricing fix, cheapest-ai-apis-2026 landing page, widget embed tracking. Embeddable Cost Calculator Widget. 22 use-case pages, 22 cheapest-ai-api pages, budget planner, cost calculator, embeddable widget. Model Deprecation Tracker. 3 industry cheapest pages. Hub cross-linking. Sitemap + RSS gap fix. FAQPage schema + broken links fix. GPT-5 Cost Calculator. Content completion + SEO fixes. 50+ commits, 220+ files.

## Summary: Sessions 715-803 (Jun 18-21) — Conversion Funnel + Distribution Tools
89 sessions. go.html, exit popup A/B, A/B pricing, 16 best-model tools, API Cost Score, Pro reports, generate-report.html, api-cost-audit.html, pricing hub, llms.txt, 4 alternatives, 36 comparisons. Nav restructured. Free trial as PRIMARY CTA, trial expiry page, fixed fake social proof, 15+ comparison pages, 3 alternatives pages, 2 sample Pro reports, embeddable pricing widget, migration checklist (9 routes). 143+ commits, 1000+ files.

## Summary: Sessions 599-714 (Jun 12-18) — Claude 4 Shutdown + Conversion Foundation
116 sessions. Claude 4 shutdown prep/execution/cleanup. Post-shutdown pages, exit popups, Pro gating, scanner funnel, mobile sweep. 160+ commits, 750+ files.

## Summary: Sessions 1-598 (Apr 5 - Jun 12)
Full APIpulse build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools. Domain, Stripe, Pro, GA4, newsletter, Chrome extension, 167 comparisons, FAQPage schema, streaming toggle, A/B pricing, Model Selector quiz.

## Site Status (as of Session 904, Jun 25, 2026)
**867 web pages | 352 blog posts | 42 models | 10+ providers | 141 tools | 13 API endpoints | 3 embeddable widgets**
- Sitemap (882 URLs), RSS (761 items), blog files (352 posts) — all in sync
- **Structured data: 852/867 pages (98.3%)** — FAQPage schema on key pages. 15 pages without are non-commercial.
- **Pro CTA coverage: 98.2% — 849 pages link to go.html** — Only 16 pages without — all non-commercial.
- **Deal banner coverage: 698 pages with inline banner + global shared.js banner on all 867 pages (100%)**
- **SEO fixes (Session 903-904)** — 6 comparison pages un-noindexed, 3 canonical URLs fixed. July 2026 pricing blog updated (32→42 models) and made indexable. Aug/Sep blogs + blog index + tools page model counts corrected (32/28→42).
- **deal.html** — Product + FAQPage schema, A/B headline test (3 variants, 3 expired), exit popup, sticky CTAs, countdown timer (expires Jul 12 → $49), savings calculator (15 models)
- **go.html** — Primary conversion funnel. BUY is primary CTA (gradient → Stripe), trial is secondary. Trust signals, testimonials, Before/After, social proof, FAQPage schema. **CRITICAL FIX: GO_SKIP prevents shared.js from overwriting buy buttons.**
- **Homepage (index.html)** — Developer testimonials (single section), social proof bar, calculator with savings badge → deal.html, pricing → go.html, deal urgency banner → deal.html. Duplicate testimonials removed (Session 902).
- **Sticky CTA bars (Session 902)** — Unified dismiss state prevents sticky-bottom-bar and sticky-pro-cta from stacking. Both use shared `apipulse_pro_cta_dismissed` + `apipulse_sticky_bar_dismissed` keys.
- **Post-expiry handling (Session 877)** — Centralized `DEAL_EXPIRED` flag in shared.js. After July 12: all prices → $49, pages auto-update, deal banners switch to regular pricing.
- **Static pricing API** at /data/pricing.json — 42 models, no auth, CC-BY-4.0
- **OpenAPI spec** at /data/pricing-openapi.json — OpenAPI 3.0.3, ready for APIs.guru submission
- **22 alternatives landing pages** — all cross-linked, all with go.html model pre-fill
- **25 use-case pages** — all cross-linked to their specific cheapest pages, cheapest-ai-api.html hub, and migration checklist
- **34 use-case-specific cheapest pages** — all cross-linked to migration checklist, deprecation tracker, and budget planner
- **9 migration routes** in migration-checklist.html (OpenAI, Anthropic, Google, DeepSeek, Mistral, xAI, Cohere). OG/Twitter meta tags, trust signals, social proof testimonials, trust badges on CTA. GO_MODEL_MAP covers 7 providers.
- **go.html links pre-filled** — 606 pages auto-detect model: 232 comparisons + 351 blogs + 22 alternatives + migration checklist. GO_MODEL_MAP covers 130+ model variants.
- **BUY button as PRIMARY CTA on go.html** (Session 878) — Gradient "Get lifetime access" button → Stripe checkout. Free trial is secondary outlined button.
- **A/B headline test LIVE on deal.html** — 3 variants (pain-point/savings/urgency)
- **Exit popup A/B test LIVE** — Loss-framed vs social-proof copy
- **Widget embed tracking LIVE** — tracks which domains embed the widget (Session 827)
- **Embeddable Cost Calculator Widget** — new viral distribution tool (Session 838)

## Blocked on Human Action
1. **Widget distribution** — DISTRIBUTION-KIT.md has 18 targets ready (dev.to article, Show HN draft, 8 directories, 5 awesome-lists, 5 communities). ~1-2 hours human time.
2. **Directory submissions** — DIRECTORY-SUBMISSIONS.md has 22 ready-to-submit listings. ~45 min human time.
3. **Chrome Web Store** — Publish extension ($5 from budget). HELP-REQUEST filed Jun 1.
4. **npm package** — npm-package/ is ready. Needs npm account.
5. **Stripe $9 shutdown special** — For impulse purchases during traffic spike. HELP-REQUEST filed Jun 13.

## Closed / No Longer Viable
- ~~Reddit promotions~~ — Channel closed. New accounts get 0 traction (tested Jun 10, 12, 15).
- ~~Stripe one-time $19/$39 links~~ — DONE. Human provided links Jun 10 (HELP-RESPONSES Issue #17). A/B test resumed Session 689.
