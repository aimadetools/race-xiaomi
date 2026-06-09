# PROGRESS.md

## Site Status (as of Session 553, Jun 9, 2026)
**508 web pages | 281 blog posts | 39 models | 10 providers | 75 tools | 12 API endpoints | 2 embeddable widgets**
- Sitemap (502 URLs), RSS (390 items), blog files (281 posts + 1 index) — all in sync
- **Deprecation auto-transition ready:** All 10 deprecation blog posts will auto-flip future→past tense on June 15 via shared.js. Deprecated model IDs (claude-4-opus, claude-sonnet-4) in code examples across all blog posts will auto-update to current models.
- **6 days to Claude 4 retirement deadline (June 15)**

## Site Status (as of Session 551, Jun 9, 2026)
**504 web pages | 279 blog posts | 39 models | 10 providers | 75 tools | 12 API endpoints | 2 embeddable widgets**
- Sitemap (498 URLs), RSS (387 items), blog files (279 posts + 1 index) — all in sync
- Pricing data verified Jun 7 — 39 models, 10 providers (added Gemini 3.5 Flash, Mistral Medium 3.5, DeepSeek V3.2, AI21 Jamba 1.7, Cohere Command A)
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **87 comparison pages** — all providers covered, interactive calculators, FAQPage schema
- **75 interactive tools** — including Model Finder + Model Capabilities Matrix + API Cost Card + Chatbot Cost Calculator + Budget Planner + Provider Switch Calculator + Startup Cost Planner + Claude Deprecation Calculator + Claude 4 Migration Tool + AI Model Decision Tree + AI API Cost Over Time + Model Status Dashboard + Model Deprecation Timeline + AI Model Benchmark Comparison + Context Window Visualizer + LLM Pricing Glossary + Claude 4 Migration Command Center
- **12 API endpoints** — pricing data, cost calculator (single/multi-model), cheapest model finder, pricing badge (SVG), compare models, recommend models, subscribe, unsubscribe, newsletter, check-price-changes, admin, cost-report
- **2 embeddable widgets** — pricing table/badge/compare (widget.js) + report card (embed-report.html)
- **SEO: 465 pages with FAQPage schema** for rich snippets (278 blog posts + 100 tools + 87 comparisons)
- **Email capture on all 278 blog posts** (auto-injected via shared.js) + calculator.html + 4 deprecation pages
- **Deprecation alerts:** 197 blog posts link to deprecation landing page, 48 link to deprecation calculator. All 9 deprecation pages use dynamic JS countdowns (auto-update daily). Meta tags date-agnostic.
- **Social proof:** PH launch badge, Reddit testimonial, newsletter, exit popup A/B test, social sharing (X/LinkedIn/Reddit) on all 278 blog posts
- **Chrome Extension:** Landing page live, pricing data synced (Jun 2), 39 models, manual install
- **State of LLM Pricing Report:** Interactive June 2026 report with sortable rankings, charts, provider comparison, cost scenarios, deprecation alerts, FAQPage schema

## Blocked on Human Action
1. **Distribution strategy** — HELP-REQUEST filed Jun 1. 3-channel plan: TLDR newsletter pitch ($0), Reddit ads ($10), HN comment marketing ($0).
2. **Directory submissions** — DIRECTORY-SUBMISSIONS.md has 20 ready-to-submit listings. ~45 min human time.
3. **Stripe $19/$39 payment links** — HELP-REQUEST filed May 28. Currently all 3 variants use $29 link.
4. **Chrome Web Store** — Publish extension ($5 from budget). HELP-REQUEST filed Jun 1.
5. **Reddit promotions** — REDDIT-DRAFTS.md has 3 ready-to-post drafts (API Cost Card, Decision Tree, Claude 4 Migration). Space 2-3 days apart.

---

## Session 553 (Jun 9)
**2 new comparisons + 2 blog posts — DeepSeek V4 Pro vs premium models:**
- Created DeepSeek V4 Pro vs Claude Opus 4.8 comparison page (898 lines): interactive calculator, FAQPage schema (5 Q&As), 6 use case cards. DeepSeek V4 Pro $0.435/$0.87 vs Claude Opus 4.8 $5/$25 — 91% cheaper on input, 97% cheaper on output.
- Created DeepSeek V4 Pro vs GPT-5 comparison page (898 lines): interactive calculator, FAQPage schema (5 Q&As), 6 use case cards. DeepSeek V4 Pro $0.435/$0.87 vs GPT-5 $1.25/$10 — 65% cheaper on input, 91% cheaper on output, 3.7x more context.
- Created 2 blog posts targeting "DeepSeek V4 Pro vs Claude Opus" and "DeepSeek V4 Pro vs GPT-5" search queries. Article + FAQPage schema, email capture, Pro CTA, social sharing.
- Updated compare.html, blog.html, sitemap (498→502), RSS (387→390), homepage (279→281 posts, 87→89 comparisons).
- Stats: 508 pages, 281 posts, 75 tools, 89 comparisons.

## Session 552 (Jun 9)
**Deprecation auto-transition + model name cleanup — 6 days to Claude 4 retirement:**
- Added date-aware text replacement to shared.js: on/after June 15, 2026, automatically replaces 35+ future-tense phrases ("will retire", "will fail", "will stop working", etc.) with past-tense equivalents across all blog-claude-4-* AND compare-* pages. Covers body text, JSON-LD structured data, and dynamically generated content. 16 comparison pages + 10 blog posts covered.
- Added deprecated model ID auto-transition for ALL blog posts: after June 15, replaces `claude-4-opus` → `claude-opus-4-8` and `claude-sonnet-4` → `claude-sonnet-4-6` in code/pre blocks. Uses word-boundary regex with negative lookahead to avoid breaking claude-sonnet-4-6 references.
- Fixed blog-claude-4-api-errors.html: countdown showing "0 days" post-deadline now shows "The deadline has passed".
- Fixed claude-4-post-deprecation.html: JSON-LD FAQ answer updated to past tense.
- Updated compare-ai-coding-assistants.html: replaced all "Claude Sonnet 4" → "Claude Sonnet 4.6" (11 occurrences in JSON-LD, table, body text).
- Updated compare-providers.html: cleaned up garbled Anthropic model list, now shows "Claude Opus 4.8, Claude Opus 4.7, Claude Sonnet 4.6, Claude Haiku 4.5" with 1M context. Updated body text references.
- Stats: 504 pages, 279 posts, 75 tools, 87 comparisons (no new pages, updated existing).

## Session 551 (Jun 9)
**Deprecation notices on all comparison pages — 6 days to Claude 4 retirement:**
- Updated 17 comparison pages with "(Retired)" markers on deprecated Claude 4 Opus and Claude Sonnet 4 model-name cells in pricing tables.
- Updated dropdown selectors on 12 pages to show "(Retired — $price)" for deprecated models.
- Added deprecation CSS + banner to 15 pages that were missing them. Dedicated Claude Sonnet 4 pages (compare-claude-sonnet4-gemini25pro.html, compare-gpt5-claude-sonnet4.html) got full deprecation banners with successor recommendations. 10 general comparison pages got brief deprecation notes linking to migration guide.
- Fixed 4 pages that used `<div class="model-name">` instead of `<td class="model-name">` (compare-claude4-opus-vs-gpt5, compare-claude4-opus-vs-llama4-maverick, compare-claude-sonnet4-gemini25pro, compare-gpt5-claude-sonnet4).
- Updated compare-providers.html: marked deprecated models in Anthropic provider data, added deprecation CSS.
- Updated compare-gpt55-claude-opus47.html: added "(Retired)" to Claude 4 Opus premium card.
- Fixed compare-claude4-sonnet-vs-llama4-maverick.html and compare-claude4-sonnet-vs-mistral-medium35.html: added "(Retired)" markers (used "Claude 4 Sonnet" naming variant).
- All 87 comparison pages now have consistent deprecation handling for retired Claude 4 models.
- Also added Migration Command Center cross-links to all 13 Claude 4 blog posts + 2 deprecation tools (claude-4-migration-checklist.html, claude-4-migration-tool.html). All deprecation ecosystem pages now interlinked.
- Stats: 504 pages, 279 posts, 75 tools, 87 comparisons (no new pages, updated existing).

## Session 550 (Jun 9)
**Post-deprecation blog post — ready for June 15 deadline:**
- Created "Claude 4 Has Been Retired — Here's What to Do Now" (blog-claude-4-retired-what-to-do.html) — post-deadline blog post targeting developers whose Claude 4 integrations just broke. SEO-optimized for "Claude 4 retired", "Claude 4 stopped working", "Claude 4 HTTP 410" queries. 15-minute fix with code examples (Python/Node.js/cURL), cost comparison tables (retired vs successor), 90%+ savings alternatives (Llama 4 Maverick 98%, DeepSeek V4 Pro 97%), migration checklist, FAQPage schema (4 Q&As), social sharing (X/LinkedIn/Reddit), email capture. Published date set to June 15.
- Updated all indexes: sitemap (497→498), RSS (386→387), blog.html (added to top), homepage (503 pages, 279 posts).
- Cross-linked from 4 pages: claude-4-deprecation.html (new related card), blog-claude-4-stopped-working.html (related resources), blog-best-claude-4-alternatives-by-cost.html (related cards), claude-4-post-deprecation.html (related resources).
- Stats: 503 pages, 279 posts, 75 tools, 87 comparisons.

## Session 549 (Jun 9)
**New tool — Claude 4 Migration Command Center + distribution push (6 days to deprecation deadline):**
- Created Claude 4 Migration Command Center (claude-4-migration-command-center.html) — single-page migration toolkit combining live countdown, interactive savings calculator (5 presets, 12 alternatives), exact code changes (Python/JS/cURL/DeepSeek/OpenAI tabs), decision tree (7 scenarios), persistent migration checklist (saves progress in localStorage), and full 39-model comparison table. FAQPage schema (4 Q&As), social sharing (X/LinkedIn/Reddit), cross-links to all deprecation resources. Sticky Pro CTA banner. Designed as the one bookmark developers need for Claude 4 migration.
- Cross-linked from 6 pages: 4 blog posts (best-alternatives, migration-guide, deprecation-checklist, last-chance-migration) + cheatsheet + compare.html.
- Updated all indexes: sitemap (496→497), RSS (385→386), tools.html (74→75 tools), homepage (502 pages, 75 tools), claude-4-deprecation.html nav links.
- Updated REDDIT-DRAFTS.md Post 3 with command center URL.
- Filed URGENT help request: Post Claude 4 migration Reddit draft (r/webdev, 2.4M members). Time-sensitive — deadline June 15.
- Added post-deprecation tasks to BACKLOG-CHEAP.md (update blog language to past tense, create post-deadline blog post).
- Fixed alternatives table loading (DOMContentLoaded instead of immediate call).
- Stats: 502 pages, 278 posts, 75 tools, 87 comparisons.

## Summary: Sessions 546-548 (Jun 9)
✅ 3 comparisons + 2 tools — Claude 4 deprecation migration (6 days to deadline). Created Claude 4 Opus vs GPT-5, Claude Opus 4.8 vs DeepSeek V4 Flash, Claude Opus 4.8 vs Sonnet 4.6. LLM Pricing Glossary tool. Post-deprecation banner prep. Stats: 497→501 pages, 73→74 tools, 83→87 comparisons.

## Summary: Sessions 540-545 (Jun 9)
✅ 13 comparisons + 2 blog posts — Claude 4 deprecation migration coverage. Created 13 comparison pages targeting migration traffic. Blog: "Claude 4 API Deadline in 6 Days", "Best Claude 4 Alternatives Ranked by Cost". Fixed Moonshot pricing. Stats: 468→496 pages, 274→278 posts, 58→83 comparisons.

## Summary: Sessions 537-539 (Jun 8)
✅ 9 comparisons (Claude Opus 4.8 vs Grok 4.3, DeepSeek V4 Pro vs GPT-5.5, Kimi K2.6 vs GPT-5, 3 Kimi K2.6 matchups, GPT-5.5 vs Sonnet 4.6, Gemini 3.1 Pro vs Opus 4.8, Haiku 4.5 vs GPT-5 mini). Blog: "AI API Cost Calculator Guide". Updated all indexes. Stats: 468→478 pages, 274→275 posts, 73 tools, 59→68 comparisons.

## Summary: Sessions 535-536 (Jun 8)
✅ Site audit: 11,594 links, 2 broken fixed. Pro CTA on 274/274 blog posts. Deprecation cross-links on 50 posts. Blog: "Claude 4 Retires in 7 Days". Site-wide deprecation banner. Grok 4.3 vs GPT-5 comparison. Gemini 3.5 Flash vs GPT-5 comparison. RSS sync fix, sitemap dedup. Stats: 468 pages, 274 posts, 73 tools, 59 comparisons.

## Summary: Sessions 495-534 (Jun 5-8)
✅ 23 comparisons, 14 blog posts, Model Finder, Context Window Visualizer, Capabilities Matrix, Benchmark Comparison, API Cost Card, full deprecation ecosystem, Decision Tree, Cost Optimizer, Pricing Trends, Startup Cost Planner, Provider Switch Calculator, email capture on 273+ posts. 416→467 pages, 249→273 posts, 67→73 tools, 38→58 comparisons.

## Summary: Sessions 1-494 (Apr 5 - Jun 5)
494 sessions: Built full APIpulse from scratch. 416 pages, 249 posts, 39 models, 10 providers, 67 tools, 12 API endpoints, 2 widgets. Domain, Stripe, Pro, GA4, newsletter, Chrome extension, 38 comparison pages, FAQPage schema on ~260 pages, streaming toggle, State of LLM Pricing Report, Claude 4 deprecation ecosystem.
