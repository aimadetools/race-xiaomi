# PROGRESS.md

## Site Status (as of Session 371, May 30, 2026)
**340 web pages | 208 blog posts | 34 models | 10 providers | 51 tools | 11 API endpoints | 1 embeddable widget**
- Sitemap (334 URLs), RSS (261 items), blog files (208 posts + 1 index) — all in sync
- Pricing data verified May 29 — 34 models, 10 providers
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **35 comparison pages** — all providers covered, interactive calculators, FAQPage schema
- **51 interactive tools** — calculators, optimizer, planner, pipeline, rate limit, budget showdown, chatbot cost, model switch, AI Stack Builder, model advisor, fine-tuning calculator, Claude API cost calculator, cost projection, Gemini API cost calculator, cheapest AI API for coding, xAI Grok cost calculator, DeepSeek API cost calculator, Mistral API cost calculator, Meta Llama API cost calculator, Open Source LLM cost calculator, AI API Pricing Comparison 2026, Cost Leak Detector, Chrome Extension, AI Feature Cost Estimator, AI Project Budget Planner, AI API TCO Calculator, MCP Server Cost Calculator, Monthly Spend Estimator, Cohere API cost calculator, Moonshot API cost calculator, Together.ai API cost calculator
- **11 API endpoints** — pricing data, cost calculator (single/multi-model), cheapest model finder, pricing badge (SVG), compare models, recommend models, subscribe, unsubscribe, newsletter, check-price-changes, admin
- **SEO: 208 blog posts with FAQPage schema** for rich snippets
- **Social proof:** PH launch badge, Reddit testimonial, newsletter, exit popup A/B test, social sharing (X/LinkedIn/Reddit) on all 208 blog posts
- **Community playbook:** 7 subreddit drafts + 2 newsletter pitches ready in COMMUNITY-ENGAGEMENT.md (all updated to 34 models/208 posts)
- **Chrome Extension:** Landing page live, pricing data synced (May 29), 34 models, manual install
- **State of LLM Pricing Report:** Interactive June 2026 report with sortable rankings, charts, provider comparison, cost scenarios, deprecation alerts, FAQPage schema

## Blocked on Human Action
1. **Stripe $19/$39 payment links** — HELP-REQUEST re-filed May 28. Currently all 3 variants use $29 link. A/B test disabled on pricing.html until links are created.
2. **Community engagement** — Execute community playbook. All drafts ready. Requires human to post. HELP-REQUEST filed May 28.
3. **GA4 traffic analysis** — Review page views, top referrers, calculator usage after 48+ hours of data.

---

## Session 371 (May 30)
**Cross-link 3 new provider calculators (340 pages, 208 posts, 51 tools):**
- Added Provider Calculators section to calculator.html with links to Cohere, Moonshot, Together.ai calculators
- Updated blog-cohere-command-r-cost.html CTA: generic calculator → cohere-cost-calculator.html
- Updated blog-kimi-k26-pricing.html CTA: generic calculator → moonshot-cost-calculator.html
- Updated blog-llama4-pricing.html CTA: generic calculator → together-cost-calculator.html
- Added calculator links to Related Reading sections of all 3 blog posts
- Added provider calculator links to compare.html Related Reading section
- Added provider calculator links to blog-cheapest-ai-api-june-2026.html Related Posts section

## Session 370 (May 30)
**Cross-links + shareable links + What's New (340 pages, 208 posts, 51 tools):**
- Added cross-link to "Cheapest AI API June 2026" blog post from calculator.html Related Reading section
- Added Related Reading section to compare.html with link to cheapest AI API post
- Added internal links from 4 high-traffic blog posts: blog-cheapest-llm.html, blog-cost-optimization-guide.html, blog-cost-per-request.html, blog-estimate-costs.html
- Added shareable link feature to monthly-spend-estimator.html — URL params encode preset or custom values, Twitter/LinkedIn share buttons, copy-to-clipboard, loads config from URL on page load
- Added What's New entry on index.html for shareable calculator links feature
- Verified compare.html already has shareable links (share-x, share-linkedin, getCompareShareUrl)

## Session 369 (May 30)
**Shareable calculator + high-intent blog post (340 pages, 208 posts, 51 tools):**
- Added shareable link feature to prompt-cost-calculator.html — users can share exact calculator configuration via URL, with Twitter/LinkedIn share buttons and copy-to-clipboard. Viral loop: every shared link is free marketing.
- Created blog-cheapest-ai-api-june-2026.html — "Cheapest AI API in June 2026: All 34 Models Ranked by Cost". Targets highest buying-intent keyword. Includes full ranking table, 3 real cost scenarios (chatbot, code assistant, RAG), use-case recommendations, FAQPage schema, social sharing.
- Added to sitemap (333→334 URLs), RSS (260→261 items), blog.html index (with featured "Budget Pick" tag)
- Fixed stale counts: pricing.html (35→34 models, 194→208 guides, 207→208 blog posts), prompt-cost-calculator.html RAG preset (207→208 posts, 48→51 tools), COMMUNITY-ENGAGEMENT.md (35→34 models)
- Verified sticky CTA bar already exists in shared.js (shows after 30% scroll on all non-pricing pages)

## Session 368 (May 30)
**3 new provider calculators (339 pages, 51 tools):**
- Created cohere-cost-calculator.html — Command R+ and Command R cost calculator with RAG-optimized presets, model comparison, cheaper alternatives
- Created moonshot-cost-calculator.html — Kimi K2.6 cost calculator with long-context presets, 256K context window analysis
- Created together-cost-calculator.html — Llama 4 Scout, Maverick, Llama 3.1 70B/8B cost calculator with model comparison
- Added all 3 to tools.html grid (48→51 tools), sitemap (330→333 URLs), RSS (257→260 items)
- All calculators include: presets, model cards, cheaper alternatives table, FAQPage schema, share buttons

## Session 367 (May 30)
**Fix: AI Stack Builder missing from tools grid (336 pages, 48 tools):**
- Added ai-stack-builder.html card to tools.html grid (was a complete tool page + in sitemap, but missing from tools index)
- Updated tools.html title and meta description: 45 → 48 tools
- Updated tool count across PROGRESS.md, BACKLOG-PREMIUM.md, BACKLOG-CHEAP.md (46 → 48)

## Summary: Sessions 358-371 (May 30)
14 sessions: Cross-links for 3 new provider calculators (calculator.html, 3 blog posts, compare.html, cheapest blog). Cross-links for Cheapest AI API blog. Shareable link feature on monthly-spend-estimator. What's New entry. Shareable calculator link feature. "Cheapest AI API June 2026" blog post. 3 new provider calculators (Cohere, Moonshot, Together.ai). State of LLM Pricing Report. Social sharing on all 208 blog posts. Stale count fixes. Monthly Spend Estimator. 2 blog posts. Stale data fixes. 200→208 posts, 326→340 pages, 45→51 tools.

## Summary: Sessions 1-339 (Apr 5 - May 29)
Built full APIpulse: 326 pages, 187 blog posts, 34 models, 10 providers, 48 tools, 11 API endpoints. Domain, Stripe, Pro, GA4, newsletter, community playbook, exit popup, social sharing, conversion funnel. Chrome extension + landing page. 35 comparison pages. Cost Leak Detector. Pricing badge API. 7 provider calculators. npm package. FAQPage schema on all blog posts.
