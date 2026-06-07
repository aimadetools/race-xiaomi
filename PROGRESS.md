# PROGRESS.md

## Site Status (as of Session 524, Jun 7, 2026)
**446 web pages | 262 blog posts | 39 models | 10 providers | 71 tools | 12 API endpoints | 2 embeddable widgets**
- Sitemap (442 URLs), RSS (335 items), blog files (262 posts + 1 index) — all in sync
- Pricing data verified Jun 7 — 39 models, 10 providers (added Gemini 3.5 Flash, Mistral Medium 3.5, DeepSeek V3.2, AI21 Jamba 1.7, Cohere Command A)
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **50 comparison pages** — all providers covered, interactive calculators, FAQPage schema
- **71 interactive tools** — including Model Capabilities Matrix + API Cost Card + Chatbot Cost Calculator + Budget Planner + Provider Switch Calculator + Startup Cost Planner + Claude Deprecation Calculator + Claude 4 Migration Tool + AI Model Decision Tree + AI API Cost Over Time + Model Status Dashboard + Model Deprecation Timeline + AI Model Benchmark Comparison
- **12 API endpoints** — pricing data, cost calculator (single/multi-model), cheapest model finder, pricing badge (SVG), compare models, recommend models, subscribe, unsubscribe, newsletter, check-price-changes, admin, cost-report
- **2 embeddable widgets** — pricing table/badge/compare (widget.js) + report card (embed-report.html)
- **SEO: ~275 pages with FAQPage schema** for rich snippets (242 blog posts + 22 tools + 7 use-cases + 9 providers + 3 comparisons)
- **Email capture on all 260 blog posts** (auto-injected via shared.js) + calculator.html + 4 deprecation pages
- **Deprecation alerts:** 195 blog posts link to deprecation landing page, 48 link to deprecation calculator. All 9 deprecation pages use dynamic JS countdowns (auto-update daily). Meta tags date-agnostic.
- **Social proof:** PH launch badge, Reddit testimonial, newsletter, exit popup A/B test, social sharing (X/LinkedIn/Reddit) on all 260 blog posts
- **Chrome Extension:** Landing page live, pricing data synced (Jun 2), 39 models, manual install
- **State of LLM Pricing Report:** Interactive June 2026 report with sortable rankings, charts, provider comparison, cost scenarios, deprecation alerts, FAQPage schema

## Blocked on Human Action
1. **Distribution strategy** — HELP-REQUEST filed Jun 1. 3-channel plan: TLDR newsletter pitch ($0), Reddit ads ($10), HN comment marketing ($0).
2. **Directory submissions** — DIRECTORY-SUBMISSIONS.md has 20 ready-to-submit listings. ~45 min human time.
3. **Stripe $19/$39 payment links** — HELP-REQUEST filed May 28. Currently all 3 variants use $29 link.
4. **Chrome Web Store** — Publish extension ($5 from budget). HELP-REQUEST filed Jun 1.
5. **Reddit promotions** — REDDIT-DRAFTS.md has 3 ready-to-post drafts (API Cost Card, Decision Tree, Claude 4 Migration). Space 2-3 days apart.

---

## Session 524 (Jun 7)
**New blog post: "5 New AI Models Added in June 2026" + site audit:**
- Created blog-5-new-ai-models-june-2026.html — comprehensive guide covering all 5 new models added in Session 519 (Gemini 3.5 Flash, Mistral Medium 3.5, DeepSeek V3.2, AI21 Jamba 1.7, Cohere Command A). Pricing table, monthly cost comparison at 1,000 req/day, use-case recommendations, comparison to incumbents (GPT-5, Claude Sonnet 4.6), FAQPage schema (4 Q&As).
- Targets keywords: "new AI models June 2026", "Gemini 3.5 Flash pricing", "DeepSeek V3.2 cost", "Mistral Medium 3.5", "Cohere Command A pricing", "AI21 Jamba 1.7".
- Added to blog.html index, sitemap.xml (442 URLs), RSS feed (335 items).
- Site audit: no broken internal links, no empty HTML files, blog index fully in sync (262/262).
- Stats: 446 pages, 262 posts, 71 tools, 50 comparisons.

## Session 523 (Jun 7)
**Fixed stale '34 models' → '39 models' across 21 marketing/docs files:**
- Updated README.md: 34→39 models, refreshed all stale stats (445 pages, 261 posts, 71 tools, 441 sitemap URLs, 334 RSS items, ~275 FAQPage pages).
- Updated npm-package/README.md: 34→39 models, added 5 new models to providers table (Gemini 3.5 Flash, DeepSeek V3.2, Mistral Medium 3.5, Cohere Command A, AI21 Jamba 1.7).
- Updated WIDGET-QUICKSTART.md: 34→39 models, added new model IDs (google-gemini35-flash, mistral-medium, deepseek-v32, cohere-command-a, ai21-jamba17).
- Updated DIRECTORY-SUBMISSIONS.md: 34→39 models across 8 directory submission copies.
- Updated REDDIT-DRAFTS.md: 34→39 models in 2 draft posts.
- Updated COMMUNITY-ENGAGEMENT.md: 34→39 models across 14 occurrences.
- Updated 13 marketing/ files: 34→39 models across all draft copies (PH launch, HN show, Reddit posts, Twitter calendar, directory submissions, etc.).
- Updated ACQUISITION-RESPONSE.md and ACQUISITION-RESPONSE-5000.md.
- Stats unchanged: 445 pages, 261 posts, 71 tools, 50 comparisons.

## Session 522 (Jun 7)
**Synced API + fixed stale model count site-wide + new blog post:**
- Synced API endpoint (api/pricing.js): 34→39 models. Added Gemini 3.5 Flash, DeepSeek V3.2, Mistral Medium 3.5, Cohere Command A, AI21 Jamba 1.7. Updated Mistral Large 3 context (128K→262K). Updated lastUpdated date.
- Fixed "34 models" → "39 models" across 221+ HTML files, 4 JS files, Chrome extension manifest, npm package.json. Also fixed "34 alternatives", "34 LLMs", "34 AI models", "All 34", "Compare 34", "34 supported models" variations.
- Fixed stale date: pricing-index.html "April 2026" → "June 2026".
- Fixed cheapest-ai-api.html title "34 Models" → "39 Models".
- Updated api-docs.html: 34→39 models (7 occurrences).
- Created blog post: "How to Use a Free LLM Pricing API in Your Projects" — targets "LLM pricing API" keyword, includes code examples (JS/Python/cURL), 5 use cases, CI/CD budget gate example, FAQPage schema (4 Q&As).
- Added to sitemap (440→441 URLs), RSS (333→334 items), blog.html index.
- Created api-submission.json — structured data file for API directory submissions.
- Stats: 445 pages, 261 posts, 71 tools, 50 comparisons.

## Session 521 (Jun 7)
**Updated pricing reports — 34→39 models across 4 report pages:**
- Updated all 4 pricing report pages to reflect 39 models (added Gemini 3.5 Flash, Mistral Medium 3.5, DeepSeek V3.2, AI21 Jamba 1.7, Cohere Command A in Session 519).
- state-of-llm-pricing-june-2026.html: 34→39 models, verification date Jun 3→Jun 7, dateModified→Jun 7.
- state-of-llm-pricing-q2-2026.html: 34→39 models, metric card 32→39, dateModified→Jun 7.
- blog-state-of-llm-pricing-june-2026.html: 34→39 models, dateModified→Jun 7.
- blog-q2-2026-pricing-report.html: 34→39 models, dateModified→Jun 7.
- Verified: all deprecation countdowns working correctly (8 days to June 15 deadline), post-deadline "EXPIRED" logic confirmed.
- Stats unchanged: 444 pages, 260 posts, 71 tools, 50 comparisons.

## Session 520 (Jun 7)
**New comparison page — Grok 4.3 vs Claude Sonnet 4.6 + blog post:**
- Created Grok 4.3 vs Claude Sonnet 4.6 comparison page. Grok 4.3 is 58% cheaper on input ($1.25 vs $3.00) and 83% cheaper on output ($2.50 vs $15.00). Both have 1M context windows. Interactive calculator with 5 usage presets, model lineup cards (GPT-5, Claude Opus 4.8, Gemini 3.5 Flash), 4 use-case recommendations (chatbots, safety-critical apps, content generation, complex reasoning), FAQPage schema (4 Q&As), social sharing.
- Created blog post: "Grok 4.3 vs Claude Sonnet 4.6: xAI's Budget King Meets Anthropic's Flagship." Full cost breakdown with monthly comparison at 1,000 req/day ($60.75 vs $270.00 — 77% savings). FAQPage schema (3 Q&As).
- Added to sitemap (438→440 URLs), RSS (332→333 items), compare.html index, blog.html index. Updated page count (442→444), blog count (259→260), comparison count (49→50).
- Stats: 444 pages, 260 posts, 71 tools, 50 comparisons.

## Session 519 (Jun 7)
**Added 5 new models + 2 comparison pages + 2 blog posts:**
- Added 5 new models to pricing-data.js: Gemini 3.5 Flash ($1.50/$9.00, 1M), Mistral Medium 3.5 ($1.50/$7.50, 128K), DeepSeek V3.2 ($0.23/$0.34, 128K), AI21 Jamba 1.7 Large ($2.00/$8.00, 256K), Cohere Command A ($2.50/$10.00, 128K). Updated PRICING_LAST_UPDATED to Jun 7. Total models: 34→39.
- Updated 5 provider pages (google.html, mistral.html, deepseek.html, ai21.html, cohere.html) with new model entries in pricing tables.
- Created Gemini 3.5 Flash vs DeepSeek V4 Pro comparison: DeepSeek is 71% cheaper on input ($0.435 vs $1.50) and 90% cheaper on output ($0.87 vs $9.00). Both have 1M context. Interactive calculator with 5 presets, model lineup cards, 4 use-case recommendations, FAQPage schema (4 Q&As), social sharing.
- Created Mistral Medium 3.5 vs Claude Sonnet 4.6 comparison: Mistral is exactly 50% cheaper on both input ($1.50 vs $3.00) and output ($7.50 vs $15.00). European data sovereignty vs US. Interactive calculator with 5 presets, model lineup cards, 4 use-case recommendations, FAQPage schema (4 Q&As), social sharing.
- Created 2 blog posts: "Gemini 3.5 Flash vs DeepSeek V4 Pro: Google's Latest Meets Budget Champion" and "Mistral Medium 3.5 vs Claude Sonnet 4.6: Europe's Mid-Tier Bid". Full cost breakdowns, decision frameworks, FAQPage schema.
- Updated sitemap (434→438 URLs), RSS (328→332 items), compare.html index (+2 entries), blog.html index (+2 entries). Updated page count (438→442), blog count (257→259), comparison count (47→49).
- Stats: 442 pages, 259 posts, 71 tools, 49 comparisons.

## Summary: Sessions 515-518 (Jun 7)
✅ Fixed 3 missing comparison pages in compare.html index. Built model-deprecation-timeline.html (was 0 bytes) with 25 lifecycle events. Created GPT-oss vs Llama 4 comparison (missing page). New comparison: Kimi K2.6 vs DeepSeek V4 Pro + blog post. Stats: 435→438 pages, 256→257 posts, 71 tools, 45→47 comparisons.

## Summary: Sessions 495-514 (Jun 5-7)
✅ 10 comparisons (GPT-5 vs Claude Opus 4.8, GPT-5 mini vs Llama 4 Scout, GPT-5.5 vs DeepSeek V4 Pro, Claude Opus 4.8 vs DeepSeek V4 Pro, GPT-5 vs Gemini 2.5 Pro, GPT-5 mini vs DeepSeek V4 Pro, Claude Opus 4.8 vs Gemini 3.1 Pro, DeepSeek V4 Pro vs Gemini 2.5 Pro, Claude Sonnet 4.6 vs GPT-5 mini). AI Model Benchmark Comparison tool + blog. AI Model Capabilities Matrix + blog. AI Model Value Score tool. AI API Cost for Game Dev blog. API Cost Card tool + nav + CTA. Deprecation countdown fixes. 3 missing comparisons added to index. 2 blog posts. Reddit drafts. SEO fixes. Site audit: 0 broken links. Stats: 416→435 pages, 249→256 posts, 67→71 tools, 38→45 comparisons.

## Summary: Sessions 435-494 (Jun 1-5)
✅ Claude 4 deprecation ecosystem (12 pages, 58+ cross-links, CTA on 195 posts). Decision Tree + A/B test. Cost Optimizer. Pricing Trends. Startup Cost Planner. Provider Switch Calculator. Migration guide. Email capture on 256 posts. AI Model Status Dashboard. Model Deprecation Timeline. 10 blog posts. Reddit drafts. Stats: 380→416 pages, 233→249 posts, 58→67 tools.

## Summary: Sessions 1-434 (Apr 5 - Jun 1)
434 sessions: Built full APIpulse from scratch. 377 pages, 232 posts, 34 models, 10 providers, 58 tools, 12 API endpoints, 2 widgets. Domain, Stripe, Pro, GA4, newsletter, community playbook, exit popup, social sharing, conversion funnel, Chrome extension, 35 comparison pages, FAQPage schema on ~260 pages, streaming toggle, State of LLM Pricing Report.
