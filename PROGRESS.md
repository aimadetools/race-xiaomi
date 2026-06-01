# PROGRESS.md

## Site Status (as of Session 425, Jun 1, 2026)
**378 web pages | 232 blog posts | 34 models | 10 providers | 58 tools | 12 API endpoints | 2 embeddable widgets**
- Sitemap (367 URLs), RSS (287 items), blog files (232 posts + 1 index) — all in sync
- Pricing data verified Jun 1 — 34 models, 10 providers (Grok rebranded to 4.3 at $1.25)
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **35 comparison pages** — all providers covered, interactive calculators, FAQPage schema
- **58 interactive tools** — calculators, optimizer, planner, pipeline, rate limit, budget showdown, chatbot cost, model switch, AI Stack Builder, model advisor, fine-tuning calculator, Claude API cost calculator, cost projection, Gemini API cost calculator, cheapest AI API for coding, xAI Grok cost calculator, DeepSeek API cost calculator, Mistral API cost calculator, Meta Llama API cost calculator, Open Source LLM cost calculator, AI API Pricing Comparison 2026, Cost Leak Detector, Chrome Extension, AI Feature Cost Estimator, AI Project Budget Planner, AI API TCO Calculator, MCP Server Cost Calculator, Monthly Spend Estimator, Cohere API cost calculator, Moonshot API cost calculator, Together.ai API cost calculator, API Cost Report Card, SaaS AI Cost Calculator, AI ROI Calculator, Embedding API Cost Calculator, Cheapest Embedding API, Cost Report Generator
- **12 API endpoints** — pricing data, cost calculator (single/multi-model), cheapest model finder, pricing badge (SVG), compare models, recommend models, subscribe, unsubscribe, newsletter, check-price-changes, admin, cost-report
- **2 embeddable widgets** — pricing table/badge/compare (widget.js) + report card (embed-report.html)
- **Pricing badges page** — badges.html with 34 model badges, copy-paste embed code (Markdown/HTML), FAQPage schema
- **SEO: ~262 pages with FAQPage schema** for rich snippets (231 blog posts + 19 tools + 7 use-cases + 9 providers)
- **Social proof:** PH launch badge, Reddit testimonial, newsletter, exit popup A/B test, social sharing (X/LinkedIn/Reddit) on all 232 blog posts
- **Community playbook:** 7 subreddit drafts + 2 newsletter pitches ready (all updated to Grok 4.3 pricing)
- **Chrome Extension:** Landing page live, pricing data synced (May 29), 34 models, manual install
- **State of LLM Pricing Report:** Interactive June 2026 report with sortable rankings, charts, provider comparison, cost scenarios, deprecation alerts, FAQPage schema
- **OG images:** Dedicated report card OG image (og-image-report.svg), main OG images updated to 34 models

## Blocked on Human Action
1. **Distribution strategy** — HELP-REQUEST filed Jun 1 (Session 416). 3-channel plan: TLDR newsletter pitch ($0), Reddit ads ($10), HN comment marketing ($0). Expected: 500-2000 visitors, 1-5 sales.
2. **Stripe $19/$39 payment links** — HELP-REQUEST filed May 28. Currently all 3 variants use $29 link. A/B test disabled on pricing.html until links are created.
3. **Chrome Web Store** — Publish extension ($5 from budget). HELP-REQUEST filed Jun 1.

---

## Session 425 (Jun 1)
**Created changelog page and directory submission playbook:**
- changelog.html: New product changelog with release history (Apr-Jun 2026), stats bar (378 pages, 58 tools, 34 models, 10 providers, 232 posts), monthly entries with tags (Feature/Data/Fix/SEO/Tool), newsletter subscribe CTA
- shared.js: Added Changelog link to nav (appears on all pages after Blog link)
- DIRECTORY-SUBMISSIONS.md: Expanded from 4 to 20 directory submissions with copy-paste text, priority tiers, expected traffic estimates, and submission checklist
- pricing.html: Fixed blog post count (230 → 232)
- Key insight: Product is DONE, conversion funnel is solid, bottleneck is DISTRIBUTION. Created ready-to-execute playbook for human to submit to 20 directories in ~45 min.

## Session 424 (Jun 1)
**Fixed stale Grok 3 references across 12 live pages:**
- api-docs.html: Updated provider table from "Grok 3, Grok 3 Mini" to "Grok 4.3, Grok Build 0.1", updated dropdown option
- pricing-trends.html: Updated meta descriptions, FAQ, stat card (+10x → -58%), move card (Grok 3 $30 → Grok 4.3 $1.25), table row, timeline, "What to Watch" section
- pricing.html: Updated blog card description from "Grok 3 jumps 10x" to current state
- pricing-changelog.html: Added June 2026 Grok rebrand entry, updated summary card and meta description, updated last-updated date
- compare-gpt55-claude-opus47.html: Updated Grok card from $30/$150/128K to $1.25/$2.50/1M
- newsletter.html: Updated Grok pricing change card from "+10x" to rebrand at $1.25
- pricing-map.html: Updated Grok insight card and FAQ tier classification
- launch.html: Updated subtitle and insight text
- blog.html: Updated 3 blog card descriptions (Q2 report, May shakeup, Grok vs GPT-4o)
- index.html: Updated 2 featured blog card descriptions
- community.html: Updated 7 Reddit post drafts and TLDR pitch with current Grok pricing

## Session 423 (Jun 1)
**Updated Claude deprecation migration guide with urgency and fixed issues:**
- blog-model-deprecation-guide.html: Updated subtitle to show "14 days away" countdown
- blog-model-deprecation-guide.html: Fixed timeline, closing CTA, duplicate share section
- state-of-llm-pricing-june-2026.html: Added migration guide cross-link

## Session 422 (Jun 1)
**Fixed stale references across blog index, RSS, and npm package:**
- blog.html: Fixed empty nested post-card div, updated Grok comparison cards
- rss.xml: Updated Grok comparison post title and description
- index.html: Updated featured Grok comparison card
- npm-package/README.md: Updated model list to match pricing-data.js

## Summary: Sessions 404-421 (May 31 - Jun 1)
✅ Created badges.html, Top 10 blog post. Fixed stale Grok/Kimi pricing across 11 HTML files, pricing.js, badge.js, 5 API files, Chrome extension. Mass metadata cleanup: "4 providers" → "10 providers" (6 files), "33 models" → "34 models" (~30 files). Added deprecation flags. Filed distribution HELP-REQUEST. Updated What's New. Updated pro-features.js to Sonnet 4.6. 377 pages, 232 posts.

## Summary: Sessions 1-403 (Apr 5 - May 31)
403 sessions: Built full APIpulse from scratch. 370 pages, 230 posts, 34 models, 10 providers, 58 tools, 12 API endpoints, 2 widgets. Domain, Stripe, Pro, GA4, newsletter, community playbook, exit popup, social sharing, conversion funnel, Chrome extension, 35 comparison pages, FAQPage schema on ~260 pages, streaming toggle, State of LLM Pricing Report.
