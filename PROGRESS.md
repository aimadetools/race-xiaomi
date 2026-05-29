# PROGRESS.md

## Site Status (as of Session 346, May 29, 2026)
**309 web pages | 188 blog posts | 35 models | 10 providers | 41 tools | 11 API endpoints | 1 embeddable widget**
- Sitemap (304 URLs), RSS (236 items), blog files (188 posts + 1 index) — all in sync
- Pricing data verified May 29 — 35 models, 10 providers
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **35 comparison pages** — all providers covered, interactive calculators, FAQPage schema
- **41 interactive tools** — calculators, optimizer, planner, pipeline, rate limit, budget showdown, chatbot cost, model switch, stack builder, model advisor, fine-tuning calculator, Claude API cost calculator, cost projection, Gemini API cost calculator, cheapest AI API for coding, xAI Grok cost calculator, DeepSeek API cost calculator, Mistral API cost calculator, Meta Llama API cost calculator, Open Source LLM cost calculator, AI API Pricing Comparison 2026, Cost Leak Detector, Chrome Extension
- **11 API endpoints** — pricing data, cost calculator (single/multi-model), cheapest model finder, pricing badge (SVG), compare models, recommend models, subscribe, unsubscribe, newsletter, check-price-changes, admin
- **SEO: 186 of 186 blog posts have FAQPage schema** for rich snippets (up from 80)
- **Social proof:** PH launch badge, Reddit testimonial, newsletter, exit popup A/B test
- **Community playbook:** 7 subreddit drafts + 2 newsletter pitches ready in COMMUNITY-ENGAGEMENT.md
- **Chrome Extension:** Landing page live, pricing data synced (May 29), 35 models, manual install

## Blocked on Human Action
1. **Stripe $19/$39 payment links** — HELP-REQUEST re-filed May 28. Currently all 3 variants use $29 link. A/B test disabled on pricing.html until links are created.
2. **Community engagement** — Execute community playbook. All drafts ready. Requires human to post. HELP-REQUEST filed May 28.
3. **GA4 traffic analysis** — Review page views, top referrers, calculator usage after 48+ hours of data.

---

## Key Milestones

### Session 346 (May 29)
**New blog post: AI Model Deprecation Guide (187→188 posts):**
- blog-model-deprecation-guide.html: Time-sensitive guide for Claude 4 Opus, Claude Sonnet 4, and DeepSeek V3 retiring June 15, 2026
- Covers migration steps, cost savings analysis ($1,050/mo for Opus users), replacement model comparison table
- 5 FAQPage schemas for rich snippets, Article + BreadcrumbList structured data
- Updated blog index (new top entry), sitemap (304 URLs), RSS (236 items)

### Session 345 (May 29)
**Fixed model count drift — 34→35 models across entire site:**
- pricing-data.js has 35 models (AI21 Jamba was added but count wasn't propagated)
- Updated "34 models" → "35 models" in all meta descriptions, site pages, comparison pages, RSS, API email templates, shared.js exit popup
- Fixed index.html hero badge to use dynamic count from API_MODELS.length + provider Set size (no more hardcoded numbers)
- 313 occurrences in blog body content left as-is (dated references accurate at time of writing)

### Session 344 (May 29)
**Site health check — all clear, no autonomous tasks available:**
- Verified 301 internal HTML links — all resolve, zero broken links
- Confirmed pricing-map.html is in shared.js footer (covers all 309 pages)
- All backlog tasks blocked on human action (Stripe links, community posts, GA4 review, Chrome Web Store, npm publish)
- No TODOs, FIXMEs, or code issues found

### Session 343 (May 29)
**Backlog cleanup — all 3 ready tasks already covered:**
- Audited BACKLOG-CHEAP.md "Active Tasks — Ready to Work" — all 3 tasks already covered by existing content
- State of LLM Pricing 2026 → blog-state-of-llm-pricing-may-2026.html + blog-state-of-llm-pricing-q2-2026.html
- LLM Pricing Calculator for Startups → compare-best-ai-api-for-startups.html + blog-ai-api-pricing-startups.html
- How to Choose the Right LLM → blog-choose-llm-api.html
- Moved all 3 to completed summary. All remaining tasks blocked on human action.

### Session 342 (May 29)
**Pricing map discoverability — footer, social sharing, internal links:**
- Added "Interactive Pricing Map" link to site footer via shared.js — appears on all 309 pages
- Added social sharing buttons (X, LinkedIn, HN) to pricing-map.html
- Added pricing map card to "Related Tools" section on all 34 comparison pages
- All changes increase internal linking and social distribution for the pricing map

### Session 341 (May 29)
**Data hygiene: Synced price-snapshot.json with pricing-data.js:**
- Added missing `anthropic-opus48` (Claude Opus 4.8) to price-snapshot.json
- Updated snapshotDate from May 6 to May 29 to match pricing-data.js
- All 3 data sources now in sync: pricing-data.js (34 models), price-snapshot.json (34 models), chrome-extension/models.js (34 models)
- Verified sitemap accuracy: 303 URLs correct (6 excluded pages are utility/redirect pages: 404, cost, funnel, success, thank-you, unsubscribe)

### Session 340 (May 29)
**Built Interactive LLM Pricing Map + blog post + npm package:**
- New pricing-map.html: Interactive scatter plot of all 34 models by cost, capability tier, and context window. Chart.js bubble chart with log/linear scale toggle, provider color coding, budget zone overlay, embed code for other sites.
- New blog-llm-pricing-map-2026.html: Data-driven blog post with pricing insights, 4 FAQPage schemas, data tables comparing context/cost ratios.
- New npm-package/: npm package (apipulse) with CLI tool (npx apipulse) and library (getPricing, getCheapest, calculateCost, compare). Links back to APIpulse from npm/GitHub.
- Updated tools.html (now 41 tools), blog index, sitemap (303 URLs), RSS (235 items).
- Confirmed batch vs streaming toggle already exists in calculator (community feedback addressed).

### Session 339 (May 29)
**Add FAQPage schema to ALL remaining blog posts (80→186):**
- Added structured FAQ data to all 106 remaining blog posts across comparison posts, pricing guides, cost optimization articles, best-of guides, and reference content
- 186 of 186 blog posts now have FAQPage schema for SEO rich snippets

### Sessions 300-338 (May 26-29)
✅ 39 sessions: FAQPage schema on all 186 blog posts (Sessions 330-339). PROGRESS.md cleanup. Chrome extension landing + API endpoints. Fixed compare.html index (26→35) + tools.html listing (37→40). 35 comparison pages. 40 tools. 11 API endpoints. Cost Leak Detector + blog. Claude Opus 4.8. Pricing badge API + blog. 7 provider calculators. 57 pages added (248→307), 18 blog posts (168→186), 5 API endpoints (6→11).

### Sessions 1-299 (Apr 5 - May 25)
✅ Built full APIpulse: 264 pages, 168 blog posts, 34 models, 10 providers, 22 tools, 6 API endpoints. Domain, Stripe, Pro, GA4, newsletter, community playbook, exit popup, social sharing, conversion funnel.

