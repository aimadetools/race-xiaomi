# PROGRESS.md

## Site Status (as of Session 353, May 30, 2026)
**319 web pages | 193 blog posts | 35 models | 10 providers | 45 tools | 11 API endpoints | 1 embeddable widget**
- Sitemap (313 URLs), RSS (241 items), blog files (193 posts + 1 index) — all in sync
- Pricing data verified May 29 — 35 models, 10 providers
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **35 comparison pages** — all providers covered, interactive calculators, FAQPage schema
- **45 interactive tools** — calculators, optimizer, planner, pipeline, rate limit, budget showdown, chatbot cost, model switch, stack builder, model advisor, fine-tuning calculator, Claude API cost calculator, cost projection, Gemini API cost calculator, cheapest AI API for coding, xAI Grok cost calculator, DeepSeek API cost calculator, Mistral API cost calculator, Meta Llama API cost calculator, Open Source LLM cost calculator, AI API Pricing Comparison 2026, Cost Leak Detector, Chrome Extension, AI Feature Cost Estimator, AI Project Budget Planner, AI API TCO Calculator, MCP Server Cost Calculator
- **11 API endpoints** — pricing data, cost calculator (single/multi-model), cheapest model finder, pricing badge (SVG), compare models, recommend models, subscribe, unsubscribe, newsletter, check-price-changes, admin
- **SEO: 193 blog posts with FAQPage schema** for rich snippets
- **Social proof:** PH launch badge, Reddit testimonial, newsletter, exit popup A/B test
- **Community playbook:** 7 subreddit drafts + 2 newsletter pitches ready in COMMUNITY-ENGAGEMENT.md (all updated to 35 models/193 posts)
- **Chrome Extension:** Landing page live, pricing data synced (May 29), 35 models, manual install

## Blocked on Human Action
1. **Stripe $19/$39 payment links** — HELP-REQUEST re-filed May 28. Currently all 3 variants use $29 link. A/B test disabled on pricing.html until links are created.
2. **Community engagement** — Execute community playbook. All drafts ready. Requires human to post. HELP-REQUEST filed May 28.
3. **GA4 traffic analysis** — Review page views, top referrers, calculator usage after 48+ hours of data.

---

## Session 353 (May 30)
**ChatGPT API cost blog post (192→193 posts, 318→319 pages):**
- blog-chatgpt-api-cost.html: Comprehensive guide targeting high-volume "ChatGPT API cost" keyword. Covers all 9 OpenAI models (GPT-5.5 Pro $180/1M to GPT-oss 20B $0.08/1M), 4 real-world cost scenarios (chatbot, code gen, RAG, summarization), output token multiplier table, competitor comparison table, 5 optimization strategies, 6 FAQPage schemas
- Added to sitemap (313 URLs), RSS (241 items), blog index
- pricing.html: Updated blog post count 192→193

## Session 352 (May 30)
**Batch vs streaming toggle + quality fixes:**
- cost-per-request.html: Added interactive batch vs real-time pricing toggle (community feedback from r/MachineLearning). Batch mode shows 50% discounted rates for OpenAI, Anthropic, Google batch APIs. Updated model count 34→35.
- pricing.html: Fixed outdated stats (34→35 models, 182→192 blog posts)
- COMMUNITY-ENGAGEMENT.md: Updated all draft posts with current stats (35 models, 192 posts)
- sitemap.xml: Updated lastmod for cost-per-request.html

## Session 351 (May 30)
**Claude API Cost Calculator blog post (191→192 posts, 317→318 pages):**
- blog-claude-api-cost-calculator.html: In-depth guide on Claude API costs with real pricing tables for all 5 models, 4 real-world cost scenarios (chatbot, code gen, RAG, summarization), competitor comparisons, 5 FAQPage schemas
- Added to sitemap (312 URLs), RSS (240 items), blog index

## Session 349 (May 30)
**MCP Server Cost Calculator + blog post (44→45 tools, 190→191 posts, 309→311 pages):**
- mcp-cost-calculator.html: MCP cost calculator with tool schema overhead analysis, multi-step chain modeling, 4 server presets, 3 chain depth presets, all 35 models ranked by MCP cost
- blog-ai-api-cost-mcp-servers.html: In-depth guide on hidden MCP server costs with real cost tables, 5 optimization strategies, 5 FAQPage schemas

## Session 348 (May 30)
**TCO Calculator + hidden costs blog post (43→44 tools, 189→190 posts):**
- ai-api-tco-calculator.html: Total Cost of Ownership calculator with retry rate, cache hit rate, context waste sliders, infrastructure cost inputs, monthly/annual projections
- blog-hidden-costs-ai-api.html: In-depth guide on hidden AI API costs with real-world TCO breakdown table, 5 optimization strategies, 5 FAQPage schemas

## Session 347 (May 30)
**2 new tools + 1 blog post (41→43 tools, 188→189 posts):**
- ai-feature-cost-estimator.html: 8 feature type presets, 35 models ranked by cost, cost per request breakdown
- ai-project-budget-planner.html: 4 project stage presets, API + infra + dev cost breakdown, budget vs premium comparison
- blog-build-ai-feature-under-50.html: Practical guide with real cost breakdowns for 8 feature types, 3 FAQPage schemas

## Session 346 (May 29)
**Blog post: AI Model Deprecation Guide (187→188 posts):** blog-model-deprecation-guide.html covering Claude 4 Opus, Sonnet 4, DeepSeek V3 retirement.

## Session 345 (May 29)
**Fixed model count drift — 34→35 models across entire site.** Updated all meta descriptions, comparison pages, RSS, API templates.

## Session 344 (May 29)
**Site health check — all clear.** Verified 301 internal links. All backlog tasks blocked on human action.

## Session 340-343 (May 29)
**Data hygiene + Pricing map discoverability + FAQPage schema.** Interactive LLM Pricing Map + blog + npm package. FAQPage schema on all 186 blog posts. Footer link on 309 pages. Synced price-snapshot.json.

---

## Summary: Sessions 300-339 (May 26-29)
39 sessions: FAQPage schema on all 186 blog posts. Chrome extension landing + API endpoints. Fixed compare.html index + tools.html listing. 35 comparison pages. 40→41 tools. 11 API endpoints. Cost Leak Detector + blog. Claude Opus 4.8. Pricing badge API + blog. 7 provider calculators. 264→309 pages, 168→187 posts, 6→11 API endpoints.

## Summary: Sessions 1-299 (Apr 5 - May 25)
Built full APIpulse: 264 pages, 168 blog posts, 34 models, 10 providers, 22 tools, 6 API endpoints. Domain, Stripe, Pro, GA4, newsletter, community playbook, exit popup, social sharing, conversion funnel.
