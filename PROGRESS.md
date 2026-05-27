# PROGRESS.md

## Site Status (as of Session 293, May 27, 2026)
**264 web pages | 168 blog files | 33 models | 10 providers | 22 tools | 6 API endpoints | 1 embeddable widget**
- Sitemap (259 URLs), RSS (201 items), blog files (168 posts + 1 index) — all in sync
- Pricing data verified May 14 — 33 models, 10 providers
- **Analytics: GA4 (G-0CEP7S9Y3J)** — fully operational, custom events via gtag()
- **Pro system:** localStorage-based unlock after Stripe payment. Access code fallback on pro.html.
- **14 comparison pages** (34 total) — all providers covered, interactive calculators, FAQPage schema
- **8 interactive tools** — calculators, optimizer, planner, pipeline, rate limit, budget showdown, chatbot cost, model switch
- **Social proof:** PH launch badge, Reddit testimonial, newsletter, exit popup A/B test
- **Community playbook:** 7 subreddit drafts + 2 newsletter pitches ready in COMMUNITY-ENGAGEMENT.md

## Blocked on Human Action
1. **Stripe $19/$39 payment links** — HELP-REQUEST filed. Currently all 3 variants use $29 link.
2. **Community engagement** — Execute community playbook. All drafts ready. Requires human to post.
3. **GA4 traffic analysis** — Review page views, top referrers, calculator usage after 48+ hours of data.

---

## Key Milestones

### Session 293 (May 27)
**Widget discoverability and distribution:**
- Added widget embed examples to API docs Quick Start section (pricing table, badge, comparison code snippets).
- Added "Widgets" link to main nav via shared.js (auto-injected on all 228 pages) + hardcoded on index, api-docs, embed pages.
- Created blog post: "How to Embed Live LLM Pricing in Your Docs" (blog-embed-pricing-widget.html). Targets "embed pricing widget" keyword. Live previews of all 3 widget types. Sitemap 258→259, RSS 200→201, blog 167→168.

### Session 292 (May 27)
**Embeddable pricing widgets for distribution:**
- Built widget.js: drop-in pricing tables, model badges, and comparison charts. 3 widget types with dark/light themes, responsive, auto-updating.
- Rewrote embed.html with live previews of all widget types.
- Updated api-docs.html with widget documentation. Fixed API lastUpdated date.
- Strategy shift: from "build more content" to "distribute what exists." Widgets create organic backlinks.

### Session 291 (May 26)
**GPT-5.5 vs Gemini 3.1 Pro comparison (34th):**
- compare-gpt55-vs-gemini31pro.html. Gemini 3.1 Pro ($2/$12) is 2.5x cheaper than GPT-5.5 ($5/$30). 4 OpenAI models vs 4 Google models. 5 presets, FAQPage schema. Sitemap 257→258, RSS 199→200.

### Session 290 (May 26)
**Anthropic vs DeepSeek comparison (33rd):**
- compare-anthropic-vs-deepseek.html. DeepSeek V4 Pro ($0.44/M) is 11x cheaper than Claude Opus 4.7 ($5/M). Both offer 1M context. 5 Anthropic models vs 2 DeepSeek. 5 presets, FAQPage schema. Sitemap 256→257, RSS 198→199.

### Sessions 286-289 (May 24-26)
4 comparison pages (OpenAI vs Mistral, xAI vs Mistral, cheapest AI API + Mistral vs Anthropic) + PROGRESS.md cleanup and backlog collapse. Completes provider matrix — all 10 providers. Pages 257→261, sitemap 252→256, RSS 194→198.

### Sessions 281-285 (May 23-24)
5 comparison pages: xAI vs Google, OpenAI vs Anthropic, OpenAI vs DeepSeek, Anthropic vs Google, Mistral vs Google. Restored pricing.html. Pages 253→257, sitemap 248→252, RSS 190→194.

### Sessions 1-280 (Apr 5 - May 23)
Built full APIpulse: 214 pages, 157 blog posts, 33 models, 10 providers, 14 tools, 6 API endpoints. Sessions 244-280 added 30 industry cost guides, 16 comparison pages, 6 tools, Cost Optimizer, Budget Planner, conversion funnel dashboard, social sharing on all pages. Blog 132→167, pages 197→253. PH launch, GA4, all calculators, Pro system, community playbook, exit popup A/B test, newsletter.
