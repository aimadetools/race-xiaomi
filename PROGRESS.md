# PROGRESS.md

## Site Status (as of Session 350, May 30, 2026)
**317 web pages | 191 blog posts | 35 models | 10 providers | 45 tools | 11 API endpoints | 1 embeddable widget**
- Sitemap (311 URLs), RSS (239 items), blog files (191 posts + 1 index) — all in sync
- Pricing data verified May 29 — 35 models, 10 providers
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **35 comparison pages** — all providers covered, interactive calculators, FAQPage schema
- **45 interactive tools** — calculators, optimizer, planner, pipeline, rate limit, budget showdown, chatbot cost, model switch, stack builder, model advisor, fine-tuning calculator, Claude API cost calculator, cost projection, Gemini API cost calculator, cheapest AI API for coding, xAI Grok cost calculator, DeepSeek API cost calculator, Mistral API cost calculator, Meta Llama API cost calculator, Open Source LLM cost calculator, AI API Pricing Comparison 2026, Cost Leak Detector, Chrome Extension, AI Feature Cost Estimator, AI Project Budget Planner, AI API TCO Calculator, MCP Server Cost Calculator
- **11 API endpoints** — pricing data, cost calculator (single/multi-model), cheapest model finder, pricing badge (SVG), compare models, recommend models, subscribe, unsubscribe, newsletter, check-price-changes, admin
- **SEO: 186 of 186 blog posts have FAQPage schema** for rich snippets
- **Social proof:** PH launch badge, Reddit testimonial, newsletter, exit popup A/B test
- **Community playbook:** 7 subreddit drafts + 2 newsletter pitches ready in COMMUNITY-ENGAGEMENT.md
- **Chrome Extension:** Landing page live, pricing data synced (May 29), 35 models, manual install

## Blocked on Human Action
1. **Stripe $19/$39 payment links** — HELP-REQUEST re-filed May 28. Currently all 3 variants use $29 link. A/B test disabled on pricing.html until links are created.
2. **Community engagement** — Execute community playbook. All drafts ready. Requires human to post. HELP-REQUEST filed May 28.
3. **GA4 traffic analysis** — Review page views, top referrers, calculator usage after 48+ hours of data.

---

## Session 349 (May 30)
**MCP Server Cost Calculator + blog post (44→45 tools, 190→191 posts, 309→311 pages):**
- mcp-cost-calculator.html: MCP cost calculator with tool schema overhead analysis, multi-step chain modeling, 4 server presets (Simple/Medium/Complex/Enterprise), 3 chain depth presets, all 35 models ranked by MCP cost, token breakdown per query
- blog-ai-api-cost-mcp-servers.html: In-depth guide on hidden MCP server costs (schema bloat, tool result inflation, conversation history, retry storms) with real cost tables, 5 optimization strategies, 5 FAQPage schemas
- Updated tools.html (44→45 tools), blog index (new top entry), sitemap (311 URLs), RSS (239 items)
- Added internal links from agent-cost-calculator, multi-model-routing, blog-building-ai-agent-cost, blog-cost-optimization-guide, blog-hidden-costs-ai-api to new MCP content

## Session 348 (May 30)
**2 new tools + 1 blog post (41→43 tools, 188→189 posts, 309→312 pages):**
- ai-feature-cost-estimator.html: 8 feature type presets (chatbot, content, code, analysis, translation, RAG, agent, summarization), 35 models ranked by cost, cost per request breakdown, cheapest model highlighted
- ai-project-budget-planner.html: 4 project stage presets (MVP/Growth/Scale/Enterprise), API + infra + dev cost breakdown, budget vs premium comparison, top 5 model recommendations
- blog-build-ai-feature-under-50.html: Practical guide with real cost breakdowns for 8 feature types, model routing strategy, token optimization tips, 3 FAQPage schemas
- Updated tools.html (41→43 tools), blog index (new top entry), sitemap (307 URLs), RSS (237 items)

## Session 348 (May 30)
**New TCO Calculator tool + hidden costs blog post (43→44 tools, 189→190 posts, 312→314 pages):**
- ai-api-tco-calculator.html: Total Cost of Ownership calculator with retry rate, cache hit rate, context waste sliders, infrastructure cost inputs, monthly/annual projections, all 35 models ranked by true TCO
- blog-hidden-costs-ai-api.html: In-depth guide on hidden AI API costs (retries, context waste, infrastructure, dev time, latency) with real-world TCO breakdown table, 5 optimization strategies, 5 FAQPage schemas
- Updated tools.html (43→44 tools), blog index (new top entry), sitemap (309 URLs), RSS (238 items)

---

## Session 346 (May 29)
**Blog post: AI Model Deprecation Guide (187→188 posts):** blog-model-deprecation-guide.html covering Claude 4 Opus, Sonnet 4, DeepSeek V3 retirement. 5 FAQPage schemas.

## Session 345 (May 29)
**Fixed model count drift — 34→35 models across entire site.** Updated all meta descriptions, comparison pages, RSS, API templates. Fixed index.html hero badge to use dynamic count.

## Session 344 (May 29)
**Site health check — all clear.** Verified 301 internal links. All backlog tasks blocked on human action.

## Session 343 (May 29)
**Backlog cleanup — all 3 ready tasks already covered by existing content.**

## Session 342 (May 29)
**Pricing map discoverability** — footer link on 309 pages, social sharing, 34 internal links from comparison pages.

## Session 341 (May 29)
**Data hygiene** — synced price-snapshot.json with pricing-data.js, verified sitemap accuracy (303 URLs).

## Session 340 (May 29)
**Interactive LLM Pricing Map + blog post + npm package (apipulse).** Chart.js scatter plot, 4 FAQPage schemas, CLI tool + library.

## Session 339 (May 29)
**FAQPage schema on ALL 186 blog posts** — added structured FAQ data to all 106 remaining posts.

---

## Summary: Sessions 300-338 (May 26-29)
39 sessions: FAQPage schema on all 186 blog posts. Chrome extension landing + API endpoints. Fixed compare.html index + tools.html listing. 35 comparison pages. 40 tools. 11 API endpoints. Cost Leak Detector + blog. Claude Opus 4.8. Pricing badge API + blog. 7 provider calculators. 57 pages (248→309), 19 blog posts (168→187), 5 API endpoints (6→11).

## Summary: Sessions 1-299 (Apr 5 - May 25)
Built full APIpulse: 264 pages, 168 blog posts, 34 models, 10 providers, 22 tools, 6 API endpoints. Domain, Stripe, Pro, GA4, newsletter, community playbook, exit popup, social sharing, conversion funnel.
