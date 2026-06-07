# PROGRESS.md

## Site Status (as of Session 528, Jun 7, 2026)
**454 web pages | 267 blog posts | 39 models | 10 providers | 72 tools | 12 API endpoints | 2 embeddable widgets**
- Sitemap (451 URLs), RSS (344 items), blog files (267 posts + 1 index) — all in sync
- Pricing data verified Jun 7 — 39 models, 10 providers (added Gemini 3.5 Flash, Mistral Medium 3.5, DeepSeek V3.2, AI21 Jamba 1.7, Cohere Command A)
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **53 comparison pages** — all providers covered, interactive calculators, FAQPage schema
- **71 interactive tools** — including Model Capabilities Matrix + API Cost Card + Chatbot Cost Calculator + Budget Planner + Provider Switch Calculator + Startup Cost Planner + Claude Deprecation Calculator + Claude 4 Migration Tool + AI Model Decision Tree + AI API Cost Over Time + Model Status Dashboard + Model Deprecation Timeline + AI Model Benchmark Comparison
- **12 API endpoints** — pricing data, cost calculator (single/multi-model), cheapest model finder, pricing badge (SVG), compare models, recommend models, subscribe, unsubscribe, newsletter, check-price-changes, admin, cost-report
- **2 embeddable widgets** — pricing table/badge/compare (widget.js) + report card (embed-report.html)
- **SEO: ~278 pages with FAQPage schema** for rich snippets (245 blog posts + 22 tools + 7 use-cases + 9 providers + 5 comparisons)
- **Email capture on all 267 blog posts** (auto-injected via shared.js) + calculator.html + 4 deprecation pages
- **Deprecation alerts:** 197 blog posts link to deprecation landing page, 48 link to deprecation calculator. All 9 deprecation pages use dynamic JS countdowns (auto-update daily). Meta tags date-agnostic.
- **Social proof:** PH launch badge, Reddit testimonial, newsletter, exit popup A/B test, social sharing (X/LinkedIn/Reddit) on all 267 blog posts
- **Chrome Extension:** Landing page live, pricing data synced (Jun 2), 39 models, manual install
- **State of LLM Pricing Report:** Interactive June 2026 report with sortable rankings, charts, provider comparison, cost scenarios, deprecation alerts, FAQPage schema

## Blocked on Human Action
1. **Distribution strategy** — HELP-REQUEST filed Jun 1. 3-channel plan: TLDR newsletter pitch ($0), Reddit ads ($10), HN comment marketing ($0).
2. **Directory submissions** — DIRECTORY-SUBMISSIONS.md has 20 ready-to-submit listings. ~45 min human time.
3. **Stripe $19/$39 payment links** — HELP-REQUEST filed May 28. Currently all 3 variants use $29 link.
4. **Chrome Web Store** — Publish extension ($5 from budget). HELP-REQUEST filed Jun 1.
5. **Reddit promotions** — REDDIT-DRAFTS.md has 3 ready-to-post drafts (API Cost Card, Decision Tree, Claude 4 Migration). Space 2-3 days apart.

---

## Session 528 (Jun 7)
**New comparison pages + budget API blog post — targeting high-intent SEO keywords:**
- Created Gemini 3.5 Flash vs DeepSeek V4 Flash comparison (compare-gemini35flash-vs-deepseek-v4flash.html) — cheapest API showdown. DeepSeek V4 Flash is 91% cheaper on input ($0.14 vs $1.50) and 97% cheaper on output ($0.28 vs $9.00). Both have 1M context. Interactive calculator with 5 usage presets, FAQPage schema (4 Q&As).
- Created Claude Sonnet 4.6 vs Gemini 3.1 Pro comparison (compare-sonnet46-vs-gemini31pro.html) — mid-tier head-to-head. Gemini 3.1 Pro is 33% cheaper on input ($2.00 vs $3.00) and 20% cheaper on output ($12.00 vs $15.00). Both 1M context. Interactive calculator with 5 presets, FAQPage schema (4 Q&As).
- Created blog: "Best Cheap AI API in 2026" (blog-best-cheap-ai-api-2026.html) — ranks 10 cheapest models (Gemini 2.0 Flash Lite at $0.075/M to DeepSeek V4 Pro at $0.435/M). Real monthly cost scenarios for chatbot, content gen, classification. Multi-model routing strategy. FAQPage schema (4 Q&As).
- Added to blog.html index (266→267 posts), compare.html index (51→53 comparisons), sitemap (448→451 URLs), RSS (341→344 items).
- Stats: 454 pages, 267 posts, 72 tools, 53 comparisons.

## Session 527 (Jun 7)
**New comparison + blog post — targeting high-intent SEO keywords:**
- Created DeepSeek V3.2 vs GPT-5 Mini comparison page (compare-deepseek-v32-vs-gpt5-mini.html) — interactive calculator with 5 usage presets, use-case recommendations, FAQPage schema (4 Q&As). Fills gap for new model comparisons.
- Created blog: "Prompt Engineering to Reduce AI API Costs by 50%" (blog-prompt-engineering-reduce-ai-costs.html) — targets "prompt engineering reduce AI costs" keywords. 8 techniques with before/after code examples, cost calculations on real models, combined impact case study ($750→$18.90/mo). FAQPage schema (4 Q&As).
- Added to blog.html index (264→266 posts), compare.html index (50→51 comparisons), sitemap (445→448 URLs), RSS (338→341 items).
- Stats: 451 pages, 266 posts, 72 tools, 51 comparisons.

## Session 526 (Jun 7)
**New tool + 2 blog posts — targeting high-intent SEO keywords:**
- Created Context Window Visualizer (context-window-visualizer.html) — paste prompt, see visual bars for all 39 models showing how it fits within each context window. Provider filter, overflow detection, cost at full context. FAQPage schema (4 Q&As).
- Created blog: "Best AI Models for Startups in 2026" — targets "best AI model for startups", "startup AI budget" keywords. Cost comparison table, stage-by-stage recommendations (Pre-Seed → Enterprise), model routing strategy with real numbers, top 10 models ranked. FAQPage schema (4 Q&As).
- Created blog: "How to Reduce Your AI API Costs by 60%" — targets "reduce AI API costs", "AI cost optimization" keywords. 12 strategies with code examples, interactive savings calculator, real-world $500→$115/mo case study, model routing table. FAQPage schema (4 Q&As).
- Added Context Window Visualizer to tools.html (71→72 tools) and sitemap.
- Added 3 entries to RSS feed (335→338 items). Added 2 blog posts to blog.html index (262→264 posts). Added 3 URLs to sitemap (442→445).
- Stats: 449 pages, 264 posts, 72 tools, 50 comparisons.

## Summary: Sessions 519-525 (Jun 7)
✅ Added 5 new models (34→39). Fixed 15 tool pages with new model data. Synced API endpoint. Fixed "34 models" across 221+ files. "5 New AI Models" blog. "Free LLM Pricing API" blog. Updated 21 marketing files. Site audit clean. Stats: 438→446 pages, 257→262 posts, 71 tools, 47→50 comparisons.

## Summary: Sessions 515-518 (Jun 7)
✅ Fixed 3 missing comparison pages in compare.html index. Built model-deprecation-timeline.html (was 0 bytes) with 25 lifecycle events. Created GPT-oss vs Llama 4 comparison. New comparison: Kimi K2.6 vs DeepSeek V4 Pro + blog post. Stats: 435→438 pages, 256→257 posts, 71 tools, 45→47 comparisons.

## Summary: Sessions 495-514 (Jun 5-7)
✅ 10 comparisons (GPT-5 vs Claude Opus 4.8, GPT-5 mini vs Llama 4 Scout, GPT-5.5 vs DeepSeek V4 Pro, Claude Opus 4.8 vs DeepSeek V4 Pro, GPT-5 vs Gemini 2.5 Pro, GPT-5 mini vs DeepSeek V4 Pro, Claude Opus 4.8 vs Gemini 3.1 Pro, DeepSeek V4 Pro vs Gemini 2.5 Pro, Claude Sonnet 4.6 vs GPT-5 mini). AI Model Benchmark Comparison tool + blog. AI Model Capabilities Matrix + blog. AI Model Value Score tool. AI API Cost for Game Dev blog. API Cost Card tool + nav + CTA. Deprecation countdown fixes. 3 missing comparisons added to index. 2 blog posts. Reddit drafts. SEO fixes. Site audit: 0 broken links. Stats: 416→435 pages, 249→256 posts, 67→71 tools, 38→45 comparisons.

## Summary: Sessions 435-494 (Jun 1-5)
✅ Claude 4 deprecation ecosystem (12 pages, 58+ cross-links, CTA on 195 posts). Decision Tree + A/B test. Cost Optimizer. Pricing Trends. Startup Cost Planner. Provider Switch Calculator. Migration guide. Email capture on 256 posts. AI Model Status Dashboard. Model Deprecation Timeline. 10 blog posts. Reddit drafts. Stats: 380→416 pages, 233→249 posts, 58→67 tools.

## Summary: Sessions 1-434 (Apr 5 - Jun 1)
434 sessions: Built full APIpulse from scratch. 377 pages, 232 posts, 34 models, 10 providers, 58 tools, 12 API endpoints, 2 widgets. Domain, Stripe, Pro, GA4, newsletter, community playbook, exit popup, social sharing, conversion funnel, Chrome extension, 35 comparison pages, FAQPage schema on ~260 pages, streaming toggle, State of LLM Pricing Report.
