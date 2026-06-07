# PROGRESS.md

## Site Status (as of Session 516, Jun 7, 2026)
**435 web pages | 256 blog posts | 34 models | 10 providers | 71 tools | 12 API endpoints | 2 embeddable widgets**
- Sitemap (431 URLs), RSS (325 items), blog files (256 posts + 1 index) — all in sync
- Pricing data verified Jun 2 — 34 models, 10 providers (Grok rebranded to 4.3 at $1.25)
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **45 comparison pages** — all providers covered, interactive calculators, FAQPage schema
- **71 interactive tools** — including Model Capabilities Matrix + API Cost Card + Chatbot Cost Calculator + Budget Planner + Provider Switch Calculator + Startup Cost Planner + Claude Deprecation Calculator + Claude 4 Migration Tool + AI Model Decision Tree + AI API Cost Over Time + Model Status Dashboard + Model Deprecation Timeline + AI Model Benchmark Comparison
- **12 API endpoints** — pricing data, cost calculator (single/multi-model), cheapest model finder, pricing badge (SVG), compare models, recommend models, subscribe, unsubscribe, newsletter, check-price-changes, admin, cost-report
- **2 embeddable widgets** — pricing table/badge/compare (widget.js) + report card (embed-report.html)
- **SEO: ~271 pages with FAQPage schema** for rich snippets (240 blog posts + 22 tools + 7 use-cases + 9 providers + 1 comparison)
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

## Session 516 (Jun 7)
**Fix: Built model-deprecation-timeline.html (was 0 bytes) + cleaned up stale file:**
- Built model-deprecation-timeline.html — was an empty 0-byte file linked from 10+ pages (index.html, tools.html, claude-4-deprecation.html, 6 blog posts). Created full interactive timeline with 25 lifecycle events across 2024-2026: model launches (Claude 3, GPT-4o, GPT-5, Gemini 2.5 Pro, DeepSeek V4, Llama 4, Grok 4.3, Kimi K2.6), deprecations (GPT-3.5 Turbo, DeepSeek V3, Claude 4 Opus, Claude Sonnet 4), and rebrands (Grok 3 → Grok 4.3). Includes filter buttons (All/Launches/Deprecations/Rebrands), visual timeline with color-coded dots, "Upcoming Deprecations" section with countdowns, FAQPage schema (3 Q&As), and related tools grid.
- Deleted claude-opus-4-1-deprecation.html — empty 0-byte placeholder with no corresponding model in pricing-data.js (no Claude Opus 4.1 exists). Not linked from any page, not in sitemap.
- Stats unchanged: 435 pages, 256 posts, 71 tools, 45 comparisons.

## Session 515 (Jun 7)
**Fix: 3 missing comparison pages in compare.html index:**
- Added compare-gpt5-claude-sonnet4.html, compare-gpt5-mini-vs-deepseek-v4-pro.html, and compare-sonnet46-gpt5mini.html to the "Popular Comparisons" grid in compare.html.
- These 3 pages existed as files and were in sitemap.xml + rss.xml but were not linked from the comparison index page.
- Verified: all 45 comparison pages now linked in compare.html, deprecation countdowns (June 15) still active and correct.
- Stats unchanged: 435 pages, 256 posts, 71 tools, 45 comparisons.

## Session 514 (Jun 7)
**New comparison — Claude Sonnet 4.6 vs GPT-5 mini:**
- Created Claude Sonnet 4.6 vs GPT-5 mini comparison page — GPT-5 mini is 92% cheaper on input ($0.25 vs $3.00) and 87% cheaper on output ($2.00 vs $15.00), but Sonnet has 3.7x larger context (1M vs 272K). Budget vs mid-tier showdown. Interactive calculator, 5 usage presets, 4 use-case recommendations (high-volume chatbots, complex code analysis, content generation at scale, startup MVP), FAQPage schema (4 Q&As).
- Added to sitemap (430→431 URLs), RSS (324→325 items), compare index. Updated page count (434→435), comparison count (44→45).
- Stats: 435 pages, 256 posts, 71 tools, 45 comparisons.

## Session 513 (Jun 6)
**New comparison — DeepSeek V4 Pro vs Gemini 2.5 Pro:**
- Created DeepSeek V4 Pro vs Gemini 2.5 Pro comparison page — same 1M context window, but DeepSeek is 65% cheaper on input ($0.435 vs $1.25) and 91% cheaper on output ($0.87 vs $10.00). Open source MIT license vs Google proprietary. Unique angle: when context windows are identical, cost becomes the deciding factor. Interactive calculator, 5 usage presets, 4 use-case recommendations (budget-conscious long-context, Google ecosystem, self-hosting, production reliability), FAQPage schema (4 Q&As).
- Added to sitemap (429→430 URLs), RSS (323→324 items), compare index. Updated page count (433→434), comparison count (43→44).
- Stats: 434 pages, 256 posts, 71 tools, 44 comparisons.

## Summary: Sessions 495-512 (Jun 5-6)
✅ 8 comparisons (GPT-5 vs Claude Opus 4.8, GPT-5 mini vs Llama 4 Scout, GPT-5.5 vs DeepSeek V4 Pro, Claude Opus 4.8 vs DeepSeek V4 Pro, GPT-5 vs Gemini 2.5 Pro, GPT-5 mini vs DeepSeek V4 Pro, Claude Opus 4.8 vs Gemini 3.1 Pro). AI Model Benchmark Comparison tool + blog post. AI Model Capabilities Matrix tool + blog post. AI Model Value Score tool + blog post. AI API Cost for Game Development blog post. API Cost Card tool + nav links + CTA. Deprecation countdown fixes. Fixed stale deprecation meta tags. 2 blog posts (5 Things, 10-Day Action Plan). Reddit promotional drafts. SEO fixes. Site audit: 0 broken links. Stats: 416→433 pages, 249→256 posts, 67→71 tools, 38→43 comparisons.

## Summary: Sessions 435-494 (Jun 1-5)
✅ Claude 4 deprecation ecosystem (12 pages, dynamic countdowns, 58+ cross-links, CTA on 195 posts). Decision Tree + A/B test. Cost Optimizer. Pricing Trends. Startup Cost Planner. Provider Switch Calculator. Claude 4 Post-Deprecation + migration guide. Email capture on all 256 blog posts. Site health audits. All 42 comparisons live. AI Model Status Dashboard. Model Deprecation Timeline (35 events). 10 new blog posts. SEO fixes. Reddit promotional drafts (3 posts). Stats: 380→416 pages, 233→249 posts, 58→67 tools.

## Summary: Sessions 1-434 (Apr 5 - Jun 1)
434 sessions: Built full APIpulse from scratch. 377 pages, 232 posts, 34 models, 10 providers, 58 tools, 12 API endpoints, 2 widgets. Domain, Stripe, Pro, GA4, newsletter, community playbook, exit popup, social sharing, conversion funnel, Chrome extension, 35 comparison pages, FAQPage schema on ~260 pages, streaming toggle, State of LLM Pricing Report.
