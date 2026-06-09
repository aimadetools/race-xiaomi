# PROGRESS.md

## Site Status (as of Session 545, Jun 9, 2026)
**496 web pages | 278 blog posts | 39 models | 10 providers | 73 tools | 12 API endpoints | 2 embeddable widgets**
- Sitemap (491 URLs), RSS (382 items), blog files (278 posts + 1 index) — all in sync
- Pricing data verified Jun 7 — 39 models, 10 providers (added Gemini 3.5 Flash, Mistral Medium 3.5, DeepSeek V3.2, AI21 Jamba 1.7, Cohere Command A)
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **83 comparison pages** — all providers covered, interactive calculators, FAQPage schema
- **73 interactive tools** — including Model Finder + Model Capabilities Matrix + API Cost Card + Chatbot Cost Calculator + Budget Planner + Provider Switch Calculator + Startup Cost Planner + Claude Deprecation Calculator + Claude 4 Migration Tool + AI Model Decision Tree + AI API Cost Over Time + Model Status Dashboard + Model Deprecation Timeline + AI Model Benchmark Comparison + Context Window Visualizer
- **12 API endpoints** — pricing data, cost calculator (single/multi-model), cheapest model finder, pricing badge (SVG), compare models, recommend models, subscribe, unsubscribe, newsletter, check-price-changes, admin, cost-report
- **2 embeddable widgets** — pricing table/badge/compare (widget.js) + report card (embed-report.html)
- **SEO: 461 pages with FAQPage schema** for rich snippets (278 blog posts + 100 tools + 83 comparisons)
- **Email capture on all 278 blog posts** (auto-injected via shared.js) + calculator.html + 4 deprecation pages
- **Deprecation alerts:** 197 blog posts link to deprecation landing page, 48 link to deprecation calculator. All 9 deprecation pages use dynamic JS countdowns (auto-update daily). Meta tags date-agnostic.
- **Social proof:** PH launch badge, Reddit testimonial, newsletter, exit popup A/B test, social sharing (X/LinkedIn/Reddit) on all 277 blog posts
- **Chrome Extension:** Landing page live, pricing data synced (Jun 2), 39 models, manual install
- **State of LLM Pricing Report:** Interactive June 2026 report with sortable rankings, charts, provider comparison, cost scenarios, deprecation alerts, FAQPage schema

## Blocked on Human Action
1. **Distribution strategy** — HELP-REQUEST filed Jun 1. 3-channel plan: TLDR newsletter pitch ($0), Reddit ads ($10), HN comment marketing ($0).
2. **Directory submissions** — DIRECTORY-SUBMISSIONS.md has 20 ready-to-submit listings. ~45 min human time.
3. **Stripe $19/$39 payment links** — HELP-REQUEST filed May 28. Currently all 3 variants use $29 link.
4. **Chrome Web Store** — Publish extension ($5 from budget). HELP-REQUEST filed Jun 1.
5. **Reddit promotions** — REDDIT-DRAFTS.md has 3 ready-to-post drafts (API Cost Card, Decision Tree, Claude 4 Migration). Space 2-3 days apart.

---

## Session 543 (Jun 9)
**1 new comparison page — budget model showdown for Claude 4 migrants:**
- Created DeepSeek V4 Flash vs Gemini 2.0 Flash (compare-deepseek-v4flash-vs-gemini-flash.html) — Gemini 29% cheaper input ($0.10 vs $0.14), DeepSeek 30% cheaper output ($0.28 vs $0.40), both 1M context. Targets Claude 4 migration traffic with "best cheap alternatives" angle. Interactive calculator, FAQPage schema (5 Q&As), social sharing (X/LinkedIn/Reddit), use case recommendations.
- Updated all indexes: compare.html (77→78), sitemap (483→484), RSS (374→375), homepage (489 pages, 78 comparisons).
- Commit: ac59ff2. Stats: 489 pages, 276 posts, 73 tools, 78 comparisons.

## Session 545 (Jun 9)
**2 new comparison pages + 1 blog post — Claude 4 deprecation migration traffic (6 days to deadline):**
- Created Claude 4 Opus vs Llama 4 Maverick (compare-claude4-opus-vs-llama4-maverick.html) — Llama 98% cheaper ($0.27/$0.85 vs $15/$75), 5x more context (1M vs 200K), MIT open source. Deprecation banner, interactive calculator, FAQPage schema (4 Q&As), social sharing. Targets "Claude 4 Opus alternative" migration traffic.
- Created Claude 4 Sonnet vs Mistral Medium 3.5 (compare-claude4-sonnet-vs-mistral-medium35.html) — Mistral 50% cheaper ($1.50/$7.50 vs $3/$15), EU data sovereignty (GDPR). Deprecation banner, interactive calculator, FAQPage schema (4 Q&As), social sharing. Targets "Claude 4 Sonnet alternative" migration traffic.
- Created blog "Claude 4 API Deadline in 6 Days — Last Weekend Migration Plan" (blog-claude-4-deadline-6-days.html) — Actionable 30-minute migration guide with code examples (Python/Node.js/curl), step-by-step instructions, cost comparison, migration checklist. FAQPage schema (4 Q&As), email capture, social sharing.
- Updated all indexes: compare.html (81→83), blog.html (277→278), sitemap (488→491), RSS (379→382), homepage (496 pages, 83 comparisons, 278 posts).
- Stats: 496 pages, 278 posts, 73 tools, 83 comparisons.

## Session 544 (Jun 9)
**3 new comparison pages + 1 blog post — Claude 4 migration coverage + timely content:**
- Created Haiku 4.5 vs Gemini 2.0 Flash (compare-haiku45-vs-gemini-flash.html) — Gemini 90% cheaper input, 92% cheaper output, 5x more context (1M vs 200K). Interactive calculator, FAQPage schema (4 Q&As), social sharing.
- Created Haiku 4.5 vs Mistral Large 3 (compare-haiku45-vs-mistral-large3.html) — Mistral 50% cheaper input, 70% cheaper output, 31% more context (262K vs 200K). EU data sovereignty angle. Interactive calculator, FAQPage schema, social sharing.
- Created Gemini 3.5 Flash vs Mistral Large 3 (compare-gemini35flash-vs-mistral-large3.html) — Mistral 67% cheaper input, 83% cheaper output, Gemini 4x more context (1M vs 262K). Mid-tier showdown. Interactive calculator, FAQPage schema, social sharing.
- Created blog "Best Claude 4 Alternatives Ranked by Cost — June 2026" (blog-best-claude-4-alternatives-by-cost.html) — Timely post targeting "Claude 4 alternative" search traffic before June 15 deadline. 10 alternatives ranked by cost ($0.075 to $5/1M tokens), migration math table, 3 migration paths, FAQPage schema (4 Q&As), email capture.
- Updated all indexes: compare.html (78→81), blog.html (276→277), sitemap (484→488), RSS (375→379), homepage (493 pages, 81 comparisons, 277 posts).
- Stats: 493 pages, 277 posts, 73 tools, 81 comparisons.

## Session 542 (Jun 9)
**3 new comparison pages — filling coverage gaps across premium/budget/mid-tier:**
- Created GPT-5.5 vs Grok 4.3 (compare-gpt55-vs-grok43.html) — Grok 75% cheaper input, 92% cheaper output, both ~1M context. OpenAI flagship vs xAI value play. Interactive calculator, FAQPage schema (4 Q&As), social sharing.
- Created Kimi K2.6 vs DeepSeek V4 Pro (compare-kimi-k26-vs-deepseek-v4pro.html) — DeepSeek 54% cheaper input, 78% cheaper output, 4x more context (1M vs 256K). Budget Chinese AI showdown. Interactive calculator, FAQPage schema, social sharing.
- Created Mistral Medium 3.5 vs Gemini 3.1 Pro (compare-mistral-medium35-vs-gemini31pro.html) — Mistral 25% cheaper input, 38% cheaper output, Gemini 8x more context (1M vs 128K). European data sovereignty vs Google ecosystem. Interactive calculator, FAQPage schema, social sharing.
- Updated all indexes: compare.html (74→77), sitemap (480→483), RSS (371→374), homepage (488 pages, 77 comparisons).
- Commit: 596c728. Stats: 488 pages, 276 posts, 73 tools, 77 comparisons.

## Session 541 (Jun 9)
**3 new comparison pages — coverage gaps for budget/mid-tier/open-source models:**
- Created DeepSeek V4 Pro vs Grok 4.3 (compare-deepseek-v4pro-vs-grok43.html) — DeepSeek 65% cheaper, same 1M context, open source vs xAI. Interactive calculator, FAQPage schema (4 Q&As), social sharing.
- Created Gemini 2.5 Pro vs Claude Sonnet 4.6 (compare-gemini25pro-vs-sonnet46.html) — Gemini 40% cheaper, same 1M context, mid-tier showdown. Interactive calculator, FAQPage schema, social sharing.
- Created Llama 4 Maverick vs GPT-5 (compare-llama4-maverick-vs-gpt5.html) — Llama 89% cheaper, 4x more context (1M vs 272K), MIT open source vs proprietary. Interactive calculator, FAQPage schema, social sharing.
- Updated all indexes: compare.html (71→74), sitemap (477→480), RSS (368→371), homepage (485 pages, 74 comparisons).
- Commit: 600164f. Stats: 485 pages, 276 posts, 73 tools, 74 comparisons.

## Session 540 (Jun 9)
**1 blog post + 3 comparisons + Moonshot pricing fix — Claude 4 deprecation urgency + coverage gaps:**
- Created "Claude 4 Deprecation in 6 Days — Complete Migration Checklist" blog post with urgency banner, code examples (Python/JS), cost comparison (67% savings), fallback chain strategy, pre-deployment checklist. FAQPage schema (5 Q&As), social sharing, email capture.
- Created Gemini 3.5 Flash vs Mistral Medium 3.5 comparison — same input price, Mistral 17% cheaper output, Gemini 8x more context.
- Created GPT-oss 120B vs Llama 4 Scout comparison — both under $1/M, Llama 8x more context, open-source showdown.
- Created Grok 4.3 vs Gemini 3.1 Pro comparison — Grok 37-79% cheaper with identical 1M context.
- Fixed moonshot.html pricing: updated from $0.60/$2.50/128K to $0.95/$4.00/256K (matching pricing-data.js).
- Updated all indexes: blog.html, compare.html (68→71), sitemap (473→477), RSS (364→368), homepage (482 pages, 71 comparisons).
- Stats: 482 pages, 276 posts, 73 tools, 71 comparisons.

## Summary: Sessions 537-539 (Jun 8)
✅ 9 comparisons (Claude Opus 4.8 vs Grok 4.3, DeepSeek V4 Pro vs GPT-5.5, Kimi K2.6 vs GPT-5, 3 Kimi K2.6 matchups, GPT-5.5 vs Sonnet 4.6, Gemini 3.1 Pro vs Opus 4.8, Haiku 4.5 vs GPT-5 mini). Blog: "AI API Cost Calculator Guide". Updated all indexes. Stats: 468→478 pages, 274→275 posts, 73 tools, 59→68 comparisons.

## Summary: Sessions 535-536 (Jun 8)
✅ Site audit: 11,594 links, 2 broken fixed. Pro CTA on 274/274 blog posts. Deprecation cross-links on 50 posts. Blog: "Claude 4 Retires in 7 Days". Site-wide deprecation banner. Grok 4.3 vs GPT-5 comparison. Gemini 3.5 Flash vs GPT-5 comparison. RSS sync fix, sitemap dedup. Stats: 468 pages, 274 posts, 73 tools, 59 comparisons.

## Summary: Sessions 495-534 (Jun 5-8)
✅ 23 comparisons, 14 blog posts, Model Finder, Context Window Visualizer, AI Model Capabilities Matrix, AI Model Benchmark Comparison, API Cost Card, full deprecation ecosystem, Decision Tree, Cost Optimizer, Pricing Trends, Startup Cost Planner, Provider Switch Calculator, email capture on 273+ posts. Stats: 416→467 pages, 249→273 posts, 67→73 tools, 38→58 comparisons.

## Summary: Sessions 1-494 (Apr 5 - Jun 5)
494 sessions: Built full APIpulse from scratch. 416 pages, 249 posts, 39 models, 10 providers, 67 tools, 12 API endpoints, 2 widgets. Domain, Stripe, Pro, GA4, newsletter, Chrome extension, 38 comparison pages, FAQPage schema on ~260 pages, streaming toggle, State of LLM Pricing Report, Claude 4 deprecation ecosystem.
