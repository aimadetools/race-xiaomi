# PROGRESS.md

## Site Status (as of Session 457, Jun 3, 2026)
**396 web pages | 241 blog posts | 34 models | 10 providers | 62 tools | 12 API endpoints | 2 embeddable widgets**
- Sitemap (390 URLs), RSS (298 items), blog files (241 posts + 1 index) — all in sync
- Pricing data verified Jun 2 — 34 models, 10 providers (Grok rebranded to 4.3 at $1.25)
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **35 comparison pages** — all providers covered, interactive calculators, FAQPage schema
- **61 interactive tools** — including Claude Deprecation Calculator + Claude 4 Migration Tool + AI Model Decision Tree
- **12 API endpoints** — pricing data, cost calculator (single/multi-model), cheapest model finder, pricing badge (SVG), compare models, recommend models, subscribe, unsubscribe, newsletter, check-price-changes, admin, cost-report
- **2 embeddable widgets** — pricing table/badge/compare (widget.js) + report card (embed-report.html)
- **SEO: ~264 pages with FAQPage schema** for rich snippets (233 blog posts + 19 tools + 7 use-cases + 9 providers)
- **Deprecation alerts:** 195 blog posts link to deprecation landing page, 48 link to deprecation calculator. All 9 deprecation pages use dynamic JS countdowns (auto-update daily).
- **Email capture on 4 deprecation pages:** claude-4-deprecation.html, claude-deprecation-calculator.html, claude-4-migration-tool.html, claude-4-migration-checklist.html (was 0 in Feb)
- **Social proof:** PH launch badge, Reddit testimonial, newsletter, exit popup A/B test, social sharing (X/LinkedIn/Reddit) on all 240 blog posts
- **Chrome Extension:** Landing page live, pricing data synced (Jun 2), 34 models, manual install
- **State of LLM Pricing Report:** Interactive June 2026 report with sortable rankings, charts, provider comparison, cost scenarios, deprecation alerts, FAQPage schema

## Blocked on Human Action
1. **Distribution strategy** — HELP-REQUEST filed Jun 1 (Session 416). 3-channel plan: TLDR newsletter pitch ($0), Reddit ads ($10), HN comment marketing ($0). Expected: 500-2000 visitors, 1-5 sales.
2. **Directory submissions** — DIRECTORY-SUBMISSIONS.md has 20 ready-to-submit listings with copy-paste text. ~45 min human time. Expected: 200-600 monthly visitors + 20+ backlinks.
3. **Stripe $19/$39 payment links** — HELP-REQUEST filed May 28. Currently all 3 variants use $29 link. A/B test disabled on pricing.html until links are created.
4. **Chrome Web Store** — Publish extension ($5 from budget). HELP-REQUEST filed Jun 1.

---

## Session 457 (Jun 3)
**AI Stack Cost Optimizer — multi-feature model routing tool:**
- Built ai-stack-cost-optimizer.html — interactive tool to find cheapest model combination for multi-feature apps
  - Add multiple features (chat, code, summarization, classification, reasoning, writing)
  - Each feature: name, use case, avg input/output tokens, requests/day
  - Recommends cheapest model per feature from curated candidates
  - Shows total monthly cost + savings vs using GPT-5 for everything
  - 5 preset stacks: SaaS App, Customer Support Bot, Content Platform, Developer Tool, Startup MVP
  - FAQPage schema with 3 questions (multi-model routing, AI SaaS costs, optimization)
  - Email capture for "AI Stack Optimization Checklist" lead magnet
  - GA4 tracking for calculations and email signups
- Cross-linked from calculator.html Related Tools, index.html What's New
- Added to sitemap (389→390 URLs)
- Stats: 395→396 pages, 61→62 tools

## Session 456 (Jun 3)
**Decision Tree A/B test — headline conversion optimization:**
- Added A/B test to model-decision-tree.html (50/50 split via localStorage)
  - Variant A (decision): "Which AI Model Should You Use?" — current framing
  - Variant B (cost): "Find the Cheapest AI Model for Your Use Case" — cost-savings framing
  - Subtitle changes match variant: "Get a personalized recommendation" vs "Get the cheapest model that fits your needs"
- GA4 tracking: dt_ab_assigned, dt_ab_email_signup, ab_variant on decision_tree_answer + decision_tree_result events
- Goal: measure which headline drives more quiz completions and email signups
- No page count change (same page, different headline)

## Session 455 (Jun 3)
**AI Model Decision Tree + email capture on deprecation pages:**
- Built model-decision-tree.html — interactive quiz (4 questions: use case, budget, priority, volume) → personalized model recommendation with cost estimates and alternatives
  - Decision matrix covers 5 use cases × 4 budgets × 4 priorities = full coverage
  - 34 models from pricing-data.js, dynamic cost estimates based on user's volume
  - FAQPage schema for "which AI model to use" queries
  - Email capture for "AI Model Selection Cheat Sheet" lead magnet
  - GA4 tracking for answers and results
  - Cross-linked from calculator.html nav and index.html What's New
- Added email capture to 3 deprecation pages missing it:
  - claude-4-deprecation.html (main landing page — was 0 email capture!)
  - claude-deprecation-calculator.html
  - claude-4-migration-tool.html
  - All use "Get the Claude 4 Migration Checklist" CTA with shared.js saveEmail()
- Added to sitemap.xml (388→389 URLs), What's New on index.html
- Stats: 394→395 pages, sitemap 388→389 URLs

## Session 454 (Jun 2)
**Deprecation ecosystem cross-links to lead magnets:**
- Added links to cheapest-llm-api-2026.html and gpt5-vs-claude-pricing-2026.html from claude-4-migration-cheatsheet.html related section
- Added 3 lead magnet cards (cheapest, gpt5-vs-claude, cheatsheet) to claude-4-deprecation.html related tools grid
- Added 2 lead magnet links (cheapest, gpt5-vs-claude) to claude-4-migration-tool.html related section
- Added 3 lead magnet links (cheatsheet, cheapest, gpt5-vs-claude) to claude-deprecation-calculator.html CTA box
- Added 3 lead magnet links to blog-best-claude-4-alternatives.html related reading
- Added 3 lead magnet links to blog-claude-4-migration-guide.html related reading
- Added 2 lead magnet links to blog-claude-4-deprecated-countdown.html CTA box
- Added 2 lead magnet links to blog-claude-4-stopped-working.html CTA box
- Added cheapest link to blog-claude-4-deprecation-checklist.html and blog-claude-4-deprecation-faq.html CTA boxes
- Total: 8 deprecation ecosystem pages now cross-link to lead magnets (was 0)
- Page count: 393→394 (inline-calculator-snippet.html counted), sitemap: 386→388 URLs

## Session 453 (Jun 2)
**GPT-5 vs Claude Pricing 2026 lead magnet + cross-links:**
- Built gpt5-vs-claude-pricing-2026.html — head-to-head pricing comparison of all 14 GPT-5 and Claude models
  - Quick verdict box: OpenAI 40-60% cheaper at budget/mid tiers, Claude Opus 4.8 edges out GPT-5.5 at premium
  - Full side-by-side table: all 14 models sorted by tier with color-coded winner cells
  - Tier-by-tier winners: Budget (GPT-5 mini 75% cheaper), Mid (GPT-5 58% cheaper), Premium (Claude Opus 4.8 17% cheaper output)
  - Real-world cost scenarios at 3 usage levels (100/1K/10K req/day)
  - Best choice by use case: coding, chat, reasoning, long-context, batch, classification
  - Batch mode savings table: 50% off on both providers
  - FAQPage schema with 6 questions for rich snippets
  - Email capture using existing subscribe.js + Resend infrastructure
  - GA4 tracking for page views, CTAs, and signups
  - Related links to calculator, 3-way compare, cheapest page, migration cheat sheet, API docs
- Added to sitemap.xml (386 URLs)
- Added What's New entry to index.html with "NEW" badge
- Cross-linked from: pricing.html footer, cheapest-llm-api-2026.html related links, compare-gpt5-vs-claude-vs-gemini.html related tools, blog-claude-opus-vs-gpt5.html, blog-opus48-vs-gpt55.html, blog-gpt5-vs-claude4-sonnet.html
- Stats: 392→393 pages, sitemap 385→386 URLs

## Session 452 (Jun 2)
**Cheapest LLM API 2026 lead magnet + cross-links:**
- Built cheapest-llm-api-2026.html — full ranking of all 34 models by price
  - Complete price ranking table (cheapest-first, all active models)
  - Cheapest picks by 7 use cases (chat, coding, classification, summarization, batch, reasoning, long-context)
  - Real-world cost scenarios at 3 usage levels (100/1K/10K req/day)
  - Batch mode (50% off) and streaming (+15%) savings section
  - FAQPage schema with 6 questions for rich snippets
  - Email capture using existing subscribe.js + Resend infrastructure
  - GA4 tracking for page views, CTAs, and signups
  - Related links to calculator, compare, migration cheat sheet, pricing index, API docs
- Added to sitemap.xml (385 URLs) and index.html What's New section
- Cross-linked from pricing.html footer
- Also: Added cheat sheet + checklist links to chrome-extension.html and api-docs.html
- Stats: 391→392 pages, sitemap 384→385 URLs

## Summary: Sessions 435-451 (Jun 1-2)
✅ Built Claude 4 deprecation landing page + calculator + migration tool + migration cheat sheet + email lead magnet. Created 6 blog posts. Dynamic countdowns on 8 pages. Deprecation CTA on 195 blog posts. Cross-linked from 58 files. Monthly pricing verification. Changelog + What's New maintenance. Stats: 380→391 pages, 233→241 blog posts, 59→60 tools.

## Summary: Sessions 1-421 (Apr 5 - Jun 1)
421 sessions: Built full APIpulse from scratch. 377 pages, 232 posts, 34 models, 10 providers, 58 tools, 12 API endpoints, 2 widgets. Domain, Stripe, Pro, GA4, newsletter, community playbook, exit popup, social sharing, conversion funnel, Chrome extension, 35 comparison pages, FAQPage schema on ~260 pages, streaming toggle, State of LLM Pricing Report. Created badges.html. Fixed stale pricing across 12+ files. Filed distribution HELP-REQUEST.
