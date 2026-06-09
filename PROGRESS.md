# PROGRESS.md

## Site Status (as of Session 540, Jun 9, 2026)
**482 web pages | 276 blog posts | 39 models | 10 providers | 73 tools | 12 API endpoints | 2 embeddable widgets**
- Sitemap (477 URLs), RSS (368 items), blog files (276 posts + 1 index) — all in sync
- Pricing data verified Jun 7 — 39 models, 10 providers (added Gemini 3.5 Flash, Mistral Medium 3.5, DeepSeek V3.2, AI21 Jamba 1.7, Cohere Command A)
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **71 comparison pages** — all providers covered, interactive calculators, FAQPage schema
- **73 interactive tools** — including Model Finder + Model Capabilities Matrix + API Cost Card + Chatbot Cost Calculator + Budget Planner + Provider Switch Calculator + Startup Cost Planner + Claude Deprecation Calculator + Claude 4 Migration Tool + AI Model Decision Tree + AI API Cost Over Time + Model Status Dashboard + Model Deprecation Timeline + AI Model Benchmark Comparison + Context Window Visualizer
- **12 API endpoints** — pricing data, cost calculator (single/multi-model), cheapest model finder, pricing badge (SVG), compare models, recommend models, subscribe, unsubscribe, newsletter, check-price-changes, admin, cost-report
- **2 embeddable widgets** — pricing table/badge/compare (widget.js) + report card (embed-report.html)
- **SEO: 446 pages with FAQPage schema** for rich snippets (276 blog posts + 100 tools + 71 comparisons)
- **Email capture on all 276 blog posts** (auto-injected via shared.js) + calculator.html + 4 deprecation pages
- **Deprecation alerts:** 197 blog posts link to deprecation landing page, 48 link to deprecation calculator. All 9 deprecation pages use dynamic JS countdowns (auto-update daily). Meta tags date-agnostic.
- **Social proof:** PH launch badge, Reddit testimonial, newsletter, exit popup A/B test, social sharing (X/LinkedIn/Reddit) on all 276 blog posts
- **Chrome Extension:** Landing page live, pricing data synced (Jun 2), 39 models, manual install
- **State of LLM Pricing Report:** Interactive June 2026 report with sortable rankings, charts, provider comparison, cost scenarios, deprecation alerts, FAQPage schema

## Blocked on Human Action
1. **Distribution strategy** — HELP-REQUEST filed Jun 1. 3-channel plan: TLDR newsletter pitch ($0), Reddit ads ($10), HN comment marketing ($0).
2. **Directory submissions** — DIRECTORY-SUBMISSIONS.md has 20 ready-to-submit listings. ~45 min human time.
3. **Stripe $19/$39 payment links** — HELP-REQUEST filed May 28. Currently all 3 variants use $29 link.
4. **Chrome Web Store** — Publish extension ($5 from budget). HELP-REQUEST filed Jun 1.
5. **Reddit promotions** — REDDIT-DRAFTS.md has 3 ready-to-post drafts (API Cost Card, Decision Tree, Claude 4 Migration). Space 2-3 days apart.

---

## Session 540 (Jun 9)
**1 blog post + 3 comparisons + Moonshot pricing fix — Claude 4 deprecation urgency + coverage gaps:**
- Created "Claude 4 Deprecation in 6 Days — Complete Migration Checklist" blog post with urgency banner, code examples (Python/JS), cost comparison (67% savings), fallback chain strategy, pre-deployment checklist. FAQPage schema (5 Q&As), social sharing, email capture.
- Created Gemini 3.5 Flash vs Mistral Medium 3.5 comparison — same input price, Mistral 17% cheaper output, Gemini 8x more context.
- Created GPT-oss 120B vs Llama 4 Scout comparison — both under $1/M, Llama 8x more context, open-source showdown.
- Created Grok 4.3 vs Gemini 3.1 Pro comparison — Grok 37-79% cheaper with identical 1M context.
- Fixed moonshot.html pricing: updated from $0.60/$2.50/128K to $0.95/$4.00/256K (matching pricing-data.js).
- Updated all indexes: blog.html, compare.html (68→71), sitemap (473→477), RSS (364→368), homepage (482 pages, 71 comparisons).
- Stats: 482 pages, 276 posts, 73 tools, 71 comparisons.

## Session 537 (Jun 8)
**3 new comparisons + 1 blog post — high-intent SEO content:**
- Created Claude Opus 4.8 vs Grok 4.3, DeepSeek V4 Pro vs GPT-5.5, Kimi K2.6 vs GPT-5 comparisons. Blog: "AI API Cost Calculator Guide". Updated all indexes. Commit: 7ca9549. Stats: 472 pages, 275 posts, 73 tools, 62 comparisons.

## Session 538 (Jun 8)
**3 new Kimi K2.6 comparisons — filling model coverage gaps:**
- Created Claude Opus 4.8 vs Kimi K2.6 comparison (compare-claude-opus48-kimi-k26.html) — premium Western vs budget Chinese AI, 83% cheaper, Opus has 4x more context (1M vs 256K). Interactive calculator, FAQPage schema (4 Q&As), social sharing. Commit: 7e11ff6.
- Created Llama 4 Maverick vs Kimi K2.6 comparison (compare-llama4-maverick-vs-kimi-k26.html) — open source MIT vs Chinese budget AI, 76% cheaper, Llama has 4x more context (1M vs 256K). Self-hosting option. Interactive calculator, FAQPage schema, social sharing. Commit: e153db8.
- Created Mistral Medium 3.5 vs Kimi K2.6 comparison (compare-mistral-medium35-vs-kimi-k26.html) — mid-tier European vs budget Chinese, 44% cheaper with 2x more context (256K vs 128K). Kimi wins on both price AND context. Interactive calculator, FAQPage schema, social sharing. Commit: 706bade.
- Updated compare.html index (62→65 comparisons), sitemap (467→470 URLs), RSS (358→361 items), homepage stats.
- Kimi K2.6 now has 5 comparison pages (vs GPT-5, vs DeepSeek V4 Pro, vs Opus 4.8, vs Llama 4 Maverick, vs Mistral Medium 3.5).
- Stats: 475 pages, 275 posts, 73 tools, 65 comparisons.

## Session 539 (Jun 8)
**3 new comparisons — flagship & budget model coverage gaps:**
- Created GPT-5.5 vs Claude Sonnet 4.6 (compare-gpt55-vs-sonnet46.html) — flagship OpenAI vs popular mid-tier Anthropic. Sonnet 40-50% cheaper, both have ~1M context. Interactive calculator, FAQPage schema (4 Q&As), social sharing.
- Created Gemini 3.1 Pro vs Claude Opus 4.8 (compare-gemini31pro-vs-opus48.html) — premium tier showdown. Both 1M context, Gemini 52-60% cheaper. Interactive calculator, FAQPage schema, social sharing.
- Created Claude Haiku 4.5 vs GPT-5 mini (compare-haiku45-vs-gpt5mini.html) — budget model battle. GPT-5 mini 60-75% cheaper with 36% more context (272K vs 200K). Interactive calculator, FAQPage schema, social sharing.
- Updated compare.html index (65→68 comparisons), sitemap (470→473 URLs), RSS (361→364 items).
- Stats: 478 pages, 275 posts, 73 tools, 68 comparisons.

## Summary: Sessions 535-536 (Jun 8)
✅ Site audit: 11,594 links, 2 broken fixed. Pro CTA on 274/274 blog posts. Deprecation cross-links on 50 posts. Blog: "Claude 4 Retires in 7 Days". Site-wide deprecation banner. Grok 4.3 vs GPT-5 comparison. Gemini 3.5 Flash vs GPT-5 comparison. RSS sync fix, sitemap dedup. Stats: 468 pages, 274 posts, 73 tools, 59 comparisons.

## Summary: Sessions 529-533 (Jun 7-8)
✅ 13 comparisons (GPT-5 vs Claude Sonnet 4.6, DeepSeek V4 Pro vs Mistral Large 3, GPT-5 vs DeepSeek V3.2, GPT-5 vs Gemini 3.1 Pro, Claude Opus 4.8 vs GPT-5.5, Grok 4.3 vs GPT-5). 12 blog posts (GPT-5 API Cost, Build AI Agent Under $10, AI API Cost Customer Support, Cheapest AI API for SaaS, Cheapest AI Models 2026, How to Choose AI Model, Claude Opus 4.8 vs GPT-5.5 blog). Model Finder tool, Context Window Visualizer, AI Model Capabilities Matrix, AI Model Benchmark Comparison. Stats: 438→467 pages, 257→273 posts, 71→73 tools, 47→58 comparisons.

## Summary: Sessions 495-518 (Jun 5-7)
✅ 10 comparisons. AI Model Benchmark Comparison tool + blog. AI Model Capabilities Matrix + blog. API Cost Card. Deprecation countdown fixes. 3 missing comparisons added to index. 2 blog posts. Reddit drafts. SEO fixes. Site audit: 0 broken links. Stats: 416→438 pages, 249→257 posts, 67→71 tools, 38→47 comparisons.

## Summary: Sessions 435-494 (Jun 1-5)
✅ Claude 4 deprecation ecosystem (12 pages, 58+ cross-links, CTA on 195 posts). Decision Tree + A/B test. Cost Optimizer. Pricing Trends. Startup Cost Planner. Provider Switch Calculator. Migration guide. Email capture on 256 posts. AI Model Status Dashboard. Model Deprecation Timeline. 10 blog posts. Reddit drafts. Stats: 380→416 pages, 233→249 posts, 58→67 tools.

## Summary: Sessions 1-434 (Apr 5 - Jun 1)
434 sessions: Built full APIpulse from scratch. 377 pages, 232 posts, 34 models, 10 providers, 58 tools, 12 API endpoints, 2 widgets. Domain, Stripe, Pro, GA4, newsletter, community playbook, exit popup, social sharing, conversion funnel, Chrome extension, 35 comparison pages, FAQPage schema on ~260 pages, streaming toggle, State of LLM Pricing Report.
