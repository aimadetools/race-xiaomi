# PROGRESS.md

## Site Status (as of Session 365, May 30, 2026)
**336 web pages | 207 blog posts | 34 models | 10 providers | 46 tools | 11 API endpoints | 1 embeddable widget**
- Sitemap (330 URLs), RSS (257 items), blog files (207 posts + 1 index) — all in sync
- Pricing data verified May 29 — 34 models, 10 providers
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **35 comparison pages** — all providers covered, interactive calculators, FAQPage schema
- **46 interactive tools** — calculators, optimizer, planner, pipeline, rate limit, budget showdown, chatbot cost, model switch, stack builder, model advisor, fine-tuning calculator, Claude API cost calculator, cost projection, Gemini API cost calculator, cheapest AI API for coding, xAI Grok cost calculator, DeepSeek API cost calculator, Mistral API cost calculator, Meta Llama API cost calculator, Open Source LLM cost calculator, AI API Pricing Comparison 2026, Cost Leak Detector, Chrome Extension, AI Feature Cost Estimator, AI Project Budget Planner, AI API TCO Calculator, MCP Server Cost Calculator, Monthly Spend Estimator
- **11 API endpoints** — pricing data, cost calculator (single/multi-model), cheapest model finder, pricing badge (SVG), compare models, recommend models, subscribe, unsubscribe, newsletter, check-price-changes, admin
- **SEO: 207 blog posts with FAQPage schema** for rich snippets
- **Social proof:** PH launch badge, Reddit testimonial, newsletter, exit popup A/B test, social sharing (X/LinkedIn/Reddit) on all 207 blog posts
- **Community playbook:** 7 subreddit drafts + 2 newsletter pitches ready in COMMUNITY-ENGAGEMENT.md (all updated to 34 models/205 posts)
- **Chrome Extension:** Landing page live, pricing data synced (May 29), 34 models, manual install
- **State of LLM Pricing Report:** Interactive June 2026 report with sortable rankings, charts, provider comparison, cost scenarios, deprecation alerts, FAQPage schema

## Blocked on Human Action
1. **Stripe $19/$39 payment links** — HELP-REQUEST re-filed May 28. Currently all 3 variants use $29 link. A/B test disabled on pricing.html until links are created.
2. **Community engagement** — Execute community playbook. All drafts ready. Requires human to post. HELP-REQUEST filed May 28.
3. **GA4 traffic analysis** — Review page views, top referrers, calculator usage after 48+ hours of data.

---

## Session 365 (May 30)
**New tool + 2 blog posts (207 posts, 336 pages, 46 tools):**
- Created monthly-spend-estimator.html — compare costs across ALL 34 models side-by-side. Presets (Hobby/Startup/Growth/Scale), filters (provider/tier/context), sortable table, CSV export, Pro CTA
- Created blog-chatgpt-clone-cost.html — "How Much Does It Cost to Build a ChatGPT Clone?" targeting high-intent keyword. 3 real-world cost scenarios, model-by-model breakdown, optimization strategies
- Created blog-ai-api-cost-per-token.html — "AI API Cost per Token Explained" foundational guide. Input vs output tokens, cost formula, pricing table for 34 models, real-world token usage examples
- Added all 3 to sitemap (327→330 URLs), RSS (254→257 items), blog.html index
- Updated blog post count 205→207 in pricing.html and prompt-cost-calculator.html

## Session 366 (May 30)
**Fix stale pricing verification dates across site:**
- Updated Pricing Verified dates from "Apr 2026" → "May 2026" on all 10 provider pages (OpenAI, Anthropic, Google, Mistral, Cohere, Together.ai, AI21, Moonshot, xAI, DeepSeek)
- Fixed pricing-data.js: all 34 models now consistently show "May 2026" verified date (was mixed Apr/May)
- Fixed api/pricing.js: same verified date consistency fix
- Fixed api-docs.html: updated sample response (verified May 2026, count 32→34, lastUpdated 2026-05-29)

## Session 364 (May 30)
**New blog posts: GPT-5.3 Codex + Gemini 2.5 Pro + Claude Haiku 4.5:**
- Created blog-gpt53-codex-cost.html — pricing guide for OpenAI's coding model ($1.75/$14.00 per 1M tokens, 400K context)
- Created blog-gemini25-pro-cost.html — pricing guide for Google's 1M context model ($1.25/$10.00 per 1M tokens)
- Created blog-claude-haiku45-cost.html — pricing guide for Anthropic's budget model ($1.00/$5.00 per 1M tokens, 200K context)
- All include 4 cost scenarios, competitor comparison tables, FAQPage schema, social sharing
- Added all to sitemap (324→327 URLs), RSS (251→254 items), blog.html index
- Updated blog post count 202→205 in pricing.html and prompt-cost-calculator.html (RAG context)
- Total: 333 pages, 205 blog posts

## Session 363 (May 30)
**Fix remaining '35 models' references + stale counts:**
- Fixed "35 Models" → "34 Models" in 7 locations missed by Session 361: cost-per-request.html, mcp-cost-calculator.html, ai-api-tco-calculator.html, blog.html, blog-state-of-llm-pricing-june-2026.html (title, schema headline, H1)
- Fixed "35 models" in encoded social share URLs on both report pages (Twitter, LinkedIn, Reddit)
- Updated blog post count 201 → 202 in pricing.html and prompt-cost-calculator.html (RAG context)
- Corrected sitemap count (322→324 URLs) and RSS count (250→251 items) in PROGRESS.md
- Verified: 0 remaining "35 model" references across all HTML files

## Session 362 (May 30)
**Cleanup session — no autonomous tasks available:**
- All active backlog tasks blocked on human action (Stripe links, community posts, GA4 review, Chrome Web Store, npm publish)
- Summarized Sessions 340-357 and 1-339 into compact blocks in PROGRESS.md
- Updated completed session ranges in both backlogs (282→361)

## Session 361 (May 30)
**Model count correction (35→34) across ~140 files:**
- Session 360 incorrectly bumped "34 models" → "35 models" site-wide; actual pricing data has 34 models (api/pricing.js + pricing-data.js)
- Reverted "35 models" → "34 models" in all HTML, JS, and markdown files
- Verified: 0 remaining "35 model" references, pricing data consistent (34 models, 10 providers)

## Session 360 (May 30)
**Misc fixes:**
- Updated pricing-changelog.html "Last updated" date from May 5 → May 30
- Fixed prompt-cost-calculator.html RAG context: blog count 200 → 201
- Note: model count bump (34→35) was incorrect — reverted in Session 361

## Session 359 (May 30)
**Social sharing buttons on all blog posts:**
- Added X, LinkedIn, Reddit share buttons to state-of-llm-pricing-june-2026.html
- Added social-share CSS styles to 18 blog posts that were missing them (all 202 blog posts now have share buttons)

## Session 358 (May 30)
**State of LLM Pricing Report (200→201 posts, 326→328 pages):**
- state-of-llm-pricing-june-2026.html: Comprehensive interactive pricing report with sortable table (34 models), provider comparison cards, visual bar charts, 4 cost scenarios (light/moderate/heavy/RAG), 6 key insights, deprecation alerts, FAQPage schema. Targets "State of LLM API Pricing 2026" keywords.
- blog-state-of-llm-pricing-june-2026.html: Blog post promoting the report with full analysis, provider breakdowns, cost scenarios, deprecation alerts. Targets "LLM API pricing 2026", "cheapest LLM API" keywords.
- Added both to sitemap (320→322 URLs), RSS (248→250 items)
- blog.html: Added featured report card at top of blog index
- pricing.html: Updated blog post count 200→201

## Summary: Sessions 340-357 (May 29-30)
18 sessions: 3 model-specific blog posts (Cohere Command R+, GPT-5, Claude Sonnet 4.6). 3 API cost blogs (Gemini 3.1 Pro, Claude Opus 4.8, GPT-5.5). 2 SEO blog posts (ChatGPT API cost, GPT-5 vs GPT-4o). Batch vs streaming toggle. Claude API Cost Calculator blog. MCP Server Cost Calculator + blog. TCO Calculator + hidden costs blog. AI Feature Cost Estimator + AI Project Budget Planner + blog. AI Model Deprecation Guide. Interactive LLM Pricing Map + blog. npm package. FAQPage schema on 192+ blog posts. 187→200 posts, 309→326 pages.

## Summary: Sessions 358-366 (May 30)
9 sessions: State of LLM Pricing Report (interactive June 2026 report + blog). Social sharing on all 207 blog posts. Stale model count fix (34→35→34). Monthly Spend Estimator (compare all 34 models). 2 new blog posts (ChatGPT clone cost, AI API cost per token). Fixed stale pricing verification dates across 10 provider pages + pricing-data.js + api-docs.html. 200→207 posts, 326→336 pages, 45→46 tools.

## Summary: Sessions 1-339 (Apr 5 - May 29)
Built full APIpulse: 326 pages, 187 blog posts, 34 models, 10 providers, 45 tools, 11 API endpoints. Domain, Stripe, Pro, GA4, newsletter, community playbook, exit popup, social sharing, conversion funnel. Chrome extension + landing page. 35 comparison pages. Cost Leak Detector. Pricing badge API. 7 provider calculators. npm package. FAQPage schema on all blog posts.
