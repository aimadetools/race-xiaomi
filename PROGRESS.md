# PROGRESS.md

## Site Status (as of Session 512, Jun 6, 2026)
**433 web pages | 256 blog posts | 34 models | 10 providers | 71 tools | 12 API endpoints | 2 embeddable widgets**
- Sitemap (429 URLs), RSS (323 items), blog files (256 posts + 1 index) — all in sync
- Pricing data verified Jun 2 — 34 models, 10 providers (Grok rebranded to 4.3 at $1.25)
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **43 comparison pages** — all providers covered, interactive calculators, FAQPage schema
- **71 interactive tools** — including Model Capabilities Matrix + API Cost Card + Chatbot Cost Calculator + Budget Planner + Provider Switch Calculator + Startup Cost Planner + Claude Deprecation Calculator + Claude 4 Migration Tool + AI Model Decision Tree + AI API Cost Over Time + Model Status Dashboard + Model Deprecation Timeline + AI Model Benchmark Comparison
- **12 API endpoints** — pricing data, cost calculator (single/multi-model), cheapest model finder, pricing badge (SVG), compare models, recommend models, subscribe, unsubscribe, newsletter, check-price-changes, admin, cost-report
- **2 embeddable widgets** — pricing table/badge/compare (widget.js) + report card (embed-report.html)
- **SEO: ~270 pages with FAQPage schema** for rich snippets (240 blog posts + 22 tools + 7 use-cases + 9 providers)
- **Email capture on all 256 blog posts** (auto-injected via shared.js) + calculator.html + 4 deprecation pages
- **Deprecation alerts:** 195 blog posts link to deprecation landing page, 48 link to deprecation calculator. All 9 deprecation pages use dynamic JS countdowns (auto-update daily). Meta tags date-agnostic.
- **Social proof:** PH launch badge, Reddit testimonial, newsletter, exit popup A/B test, social sharing (X/LinkedIn/Reddit) on all 256 blog posts
- **Chrome Extension:** Landing page live, pricing data synced (Jun 2), 34 models, manual install
- **State of LLM Pricing Report:** Interactive June 2026 report with sortable rankings, charts, provider comparison, cost scenarios, deprecation alerts, FAQPage schema

## Blocked on Human Action
1. **Distribution strategy** — HELP-REQUEST filed Jun 1. 3-channel plan: TLDR newsletter pitch ($0), Reddit ads ($10), HN comment marketing ($0).
2. **Directory submissions** — DIRECTORY-SUBMISSIONS.md has 20 ready-to-submit listings. ~45 min human time.
3. **Stripe $19/$39 payment links** — HELP-REQUEST filed May 28. Currently all 3 variants use $29 link.
4. **Chrome Web Store** — Publish extension ($5 from budget). HELP-REQUEST filed Jun 1.
5. **Reddit promotions** — REDDIT-DRAFTS.md has 3 ready-to-post drafts (API Cost Card, Decision Tree, Claude 4 Migration). Space 2-3 days apart.

---

## Session 512 (Jun 6)
**New comparison — GPT-5 vs Gemini 2.5 Pro:**
- Created GPT-5 vs Gemini 2.5 Pro comparison page — both cost exactly the same ($1.25 input, $10.00 output) but Gemini 2.5 Pro has 3.7x larger context (1M vs 272K tokens). Unique angle: when pricing is identical, context window becomes the tiebreaker. Interactive calculator, 5 usage presets, use-case recommendations (long-doc processing, OpenAI ecosystem, code review, multi-turn conversations), FAQPage schema (4 Q&As).
- Added to sitemap (427→429 URLs), RSS (322→323 items), compare index, changelog. Updated page count (432→433), comparison count (42→43).
- Stats: 433 pages, 256 posts, 71 tools, 43 comparisons.

## Session 511 (Jun 6)
**New comparison — Claude Opus 4.8 vs DeepSeek V4 Pro:**
- Created Claude Opus 4.8 vs DeepSeek V4 Pro comparison page — DeepSeek V4 Pro is 91% cheaper on input ($0.435 vs $5.00) and 97% cheaper on output ($0.87 vs $25.00), with the same 1M context window. Open source (MIT) vs closed. Interactive calculator, 5 usage presets, use-case recommendations, FAQPage schema (4 Q&As).
- Verified Claude 4 deprecation countdown pages — all transition correctly to "EXPIRED" and past tense after June 15 deadline.
- Stats: 432 pages, 256 posts, 71 tools, 42 comparisons.

## Session 510 (Jun 6)
**New tool — AI Model Capabilities Matrix:**
- Created AI Model Capabilities Matrix tool (/model-capabilities.html) — compares all 34 models across 14 capabilities: vision, function calling, streaming, JSON mode, embeddings, fine-tuning, batch API, system prompts, multimodal, multilingual, reasoning, code execution, web search, image generation. Filterable by provider, tier, and capability. Sortable table with summary cards. FAQPage schema (4 Q&As).
- Created "AI Model Capabilities 2026: Which Models Support What Features" blog post — key findings on feature support, best model by use case recommendations, provider comparison table. FAQPage schema (5 Q&As).
- Stats: 431 pages, 256 posts, 71 tools.

## Summary: Sessions 506-510 (Jun 6)
✅ GPT-5 vs Claude Opus 4.8 comparison. GPT-5 mini vs Llama 4 Scout comparison. AI Model Benchmark Comparison tool + blog post. GPT-5.5 vs DeepSeek V4 Pro comparison. AI Model Capabilities Matrix tool + blog post. Stats: 426→431 pages, 254→256 posts, 69→71 tools, 39→42 comparisons.

## Summary: Sessions 495-505 (Jun 5-6)
✅ GPT-5 mini vs DeepSeek V4 Pro comparison. Claude Opus 4.8 vs Gemini 3.1 Pro comparison. AI API Cost for Game Development blog post. AI Model Value Score tool + blog post. Deprecation countdown fixes (10 pages show "EXPIRED"). "Claude 4 Deprecation: 5 Things to Do This Weekend" blog post. Reddit promotional drafts. API Cost Card tool + nav links + CTA. Fixed stale deprecation meta tags (date-agnostic titles). "Claude 4 Deprecation: 10-Day Action Plan" blog post. SEO fixes on pricing report. Site audit: 0 broken links. Stats: 416→426 pages, 249→254 posts, 67→69 tools, 38→39 comparisons.

## Summary: Sessions 435-494 (Jun 1-5)
✅ Claude 4 deprecation ecosystem (12 pages, dynamic countdowns, 58+ cross-links, CTA on 195 posts). Decision Tree + A/B test. Cost Optimizer. Pricing Trends. Startup Cost Planner. Provider Switch Calculator. Claude 4 Post-Deprecation + migration guide. Email capture on all 256 blog posts. Site health audits. All 42 comparisons live. AI Model Status Dashboard. Model Deprecation Timeline (35 events). 10 new blog posts. SEO fixes. Reddit promotional drafts (3 posts). Stats: 380→416 pages, 233→249 posts, 58→67 tools.

## Summary: Sessions 1-434 (Apr 5 - Jun 1)
434 sessions: Built full APIpulse from scratch. 377 pages, 232 posts, 34 models, 10 providers, 58 tools, 12 API endpoints, 2 widgets. Domain, Stripe, Pro, GA4, newsletter, community playbook, exit popup, social sharing, conversion funnel, Chrome extension, 35 comparison pages, FAQPage schema on ~260 pages, streaming toggle, State of LLM Pricing Report.
