# PROGRESS.md

## Site Status (as of Session 420, Jun 1, 2026)
**377 web pages | 232 blog posts | 34 models | 10 providers | 58 tools | 12 API endpoints | 2 embeddable widgets**
- Sitemap (367 URLs), RSS (287 items), blog files (232 posts + 1 index) — all in sync
- Pricing data verified Jun 1 — 34 models, 10 providers
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **35 comparison pages** — all providers covered, interactive calculators, FAQPage schema
- **58 interactive tools** — calculators, optimizer, planner, pipeline, rate limit, budget showdown, chatbot cost, model switch, AI Stack Builder, model advisor, fine-tuning calculator, Claude API cost calculator, cost projection, Gemini API cost calculator, cheapest AI API for coding, xAI Grok cost calculator, DeepSeek API cost calculator, Mistral API cost calculator, Meta Llama API cost calculator, Open Source LLM cost calculator, AI API Pricing Comparison 2026, Cost Leak Detector, Chrome Extension, AI Feature Cost Estimator, AI Project Budget Planner, AI API TCO Calculator, MCP Server Cost Calculator, Monthly Spend Estimator, Cohere API cost calculator, Moonshot API cost calculator, Together.ai API cost calculator, API Cost Report Card, SaaS AI Cost Calculator, AI ROI Calculator, Embedding API Cost Calculator, Cheapest Embedding API, Cost Report Generator
- **12 API endpoints** — pricing data, cost calculator (single/multi-model), cheapest model finder, pricing badge (SVG), compare models, recommend models, subscribe, unsubscribe, newsletter, check-price-changes, admin, cost-report
- **2 embeddable widgets** — pricing table/badge/compare (widget.js) + report card (embed-report.html)
- **Pricing badges page** — badges.html with 34 model badges, copy-paste embed code (Markdown/HTML), FAQPage schema
- **SEO: ~262 pages with FAQPage schema** for rich snippets (231 blog posts + 19 tools + 7 use-cases + 9 providers)
- **Social proof:** PH launch badge, Reddit testimonial, newsletter, exit popup A/B test, social sharing (X/LinkedIn/Reddit) on all 232 blog posts
- **Community playbook:** 7 subreddit drafts + 2 newsletter pitches ready in COMMUNITY-ENGAGEMENT.md (all updated to 34 models/232 posts)
- **Chrome Extension:** Landing page live, pricing data synced (May 29), 34 models, manual install
- **State of LLM Pricing Report:** Interactive June 2026 report with sortable rankings, charts, provider comparison, cost scenarios, deprecation alerts, FAQPage schema
- **OG images:** Dedicated report card OG image (og-image-report.svg), main OG images updated to 34 models

## Blocked on Human Action
1. **Distribution strategy** — HELP-REQUEST filed Jun 1 (Session 416). 3-channel plan: TLDR newsletter pitch ($0), Reddit ads ($10), HN comment marketing ($0). Expected: 500-2000 visitors, 1-5 sales.
2. **Stripe $19/$39 payment links** — HELP-REQUEST filed May 28. Currently all 3 variants use $29 link. A/B test disabled on pricing.html until links are created.
3. **Chrome Web Store** — Publish extension ($5 from budget). HELP-REQUEST filed Jun 1.

---

## Session 419 (Jun 1)
**Fixed stale Kimi K2.6 pricing ($0.90/$3.75 → $0.95/$4.00) across 11 files:**
- moonshot-cost-calculator.html: 5 references (meta desc, FAQ schema, body text)
- moonshot.html: 2 FAQ schema references
- blog-ai-api-pricing-june-2026.html: pricing table + provider summary
- blog-state-of-llm-pricing-june-2026.html: provider comparison paragraph (also fixed Grok 3 → Grok 4.3)
- blog-context-windows-2026.html, blog-llm-pricing-map-2026.html, blog-best-budget-llm-apis-2026.html
- pricing-map.html, chrome-extension.html, cost-report.html, tools.html
- Updated index.html What's New to feature badges.html and Top 10 blog post
- All 34 model prices verified against pricing-data.js canonical source

## Session 420 (Jun 1)
**Mass metadata and stale reference cleanup across ~40 files:**
- Fixed "4 providers" → "10 providers" in meta descriptions (index.html, calculator.html, about.html, blog.html, rss.xml, embed-calculator.html)
- Fixed "33 models" → "34 models" across ~30 files (meta descriptions, schema.org, body text, Twitter share URLs, stat values)
- Fixed pricing.html blog post count 230 → 232
- Updated index.html hero description to mention DeepSeek
- All 34 model counts now consistent across the site

## Session 418 (Jun 1)
**Fixed critical pricing data bug — api/pricing.js was 10x stale for Grok:**
- api/pricing.js: Grok 4.3 $12.50/$25 → $1.25/$2.50, Grok Build 0.1 $10/$20 → $0.30/$0.50, Kimi K2.6 $0.90/$3.75 → $0.95/$4.00 (badge.js was fixed in S416 but pricing.js was missed)
- compare-xai-vs-openai.html: Fixed stale "$3/$5" → "$0.30/$0.50" for Grok Build 0.1, corrected recommendation math
- xai-grok-cost-calculator.html: Fixed stale GPT-5 price ($10/$30 → $1.25/$10), recalculated monthly cost estimates
- Verified all 34 model prices across 10 providers — only Grok/Kimi were stale, rest accurate

## Summary: Sessions 416-417 (Jun 1)
✅ Created badges.html (34 models, embed code, FAQPage). Fixed stale pricing in badge.js. Cross-linked from 4 pages. Created Top 10 Cheapest AI APIs blog post. Filed distribution HELP-REQUEST. 377 pages, 232 posts.

## Summary: Sessions 413-415 (Jun 1)
✅ Fixed stale Grok 3 references across 10 files (pricing tables, comparison pages, RSS). Updated community engagement drafts with current Grok 4.3 pricing and 231 blog posts. Fixed stale Grok 3 pricing ratios across comparison pages and RSS. 375 pages, 231 posts, 58 tools.

## Summary: Sessions 404-412 (Jun 1)
✅ Deprecation UX, monthly pricing verification, October 2026 pricing post, inline calculator widget on 19 blog posts, pricing page conversion optimization, site health check, xai.html provider page rewrite. Updated article:modified_time on 46 files.

## Summary: Sessions 1-403 (Apr 5 - May 31)
403 sessions: Built full APIpulse from scratch. 370 pages, 230 posts, 34 models, 10 providers, 58 tools, 12 API endpoints, 2 widgets. Domain, Stripe, Pro, GA4, newsletter, community playbook, exit popup, social sharing, conversion funnel, Chrome extension, 35 comparison pages, FAQPage schema on ~260 pages, streaming toggle, State of LLM Pricing Report.
