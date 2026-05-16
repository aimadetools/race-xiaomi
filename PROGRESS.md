# PROGRESS.md

## Site Status (as of Session 222, May 16, 2026)
**186 web pages | 130 blog files | 33 models | 10 providers | 13 tools | 6 API endpoints**
- Sitemap (185 URLs), RSS (130 items), blog files (130 posts + 1 index) — all in sync
- Community Post Helper (community.html) — noindex utility page, not in sitemap
- OG images: dark + light variants + 126 unique blog post OG images + cost-migration OG (all current, meta + JSON-LD fixed).
- Pricing data verified May 14 — 33 models, 10 providers
- **Analytics: GA4 (G-0CEP7S9Y3J) on all 178 pages** — fully operational, custom events via gtag()
- Price alert system: daily cron compares pricing vs snapshot, emails subscribers on changes
- Social sharing on all 126 blog posts + tools + footer CTA
- Structured data (JSON-LD) on all pages, canonical URLs, mobile-responsive
- **Pro system:** localStorage-based unlock after Stripe payment (thank-you.html). Access code fallback on pro.html.
- **AI Agent Cost Calculator** — interactive tool with 4 presets (coding, research, support, data), custom config, all 33 models ranked by agent cost
- **Model Switch Calculator** — users select current/target models, see exact monthly/annual savings
- **Savings Calculator** on pricing-trends.html — interactive widget showing cheaper alternatives with exact $/month savings
- **Cost Migration Report** (cost-migration.html) — enter current provider + monthly spend, get ranked alternatives with exact savings. GA4 tracked. Cross-linked from index + launch.
- **Social proof:** PH launch badge on index.html + pricing.html, Reddit testimonial, 100 guides stat
- **Community engagement:** Playbook ready (COMMUNITY-ENGAGEMENT.md) — 7 subreddit drafts + 2 newsletter pitches, all with UTM links
- **Exit popup A/B test:** 3 variants (cost savings, alerts, social proof), GA4 variant tracking for conversion analysis
- **Newsletter landing page** (newsletter.html) — dedicated signup page with benefits grid, recent pricing changes, social proof. Ready for community distribution.
- **Newsletter signup on launch.html** — inline email capture added for community traffic conversion
- **Multi-Model Pipeline Cost Calculator** (pipeline.html) — build AI pipelines step by step, pick models per task, compare multi-model vs single-model costs. 10 task types, 4 presets (RAG, Agent, Chatbot, Content), optimization tips.
- **Rate Limit Calculator** (rate-limit-calculator.html) — enter expected RPM + tokens/request, see which providers can handle your traffic. 33 models with RPM/TPM limits, tier-aware (OpenAI/Anthropic), cost at throughput level, 5 workload presets. Cross-linked from rate limits blog post.
- **Budget LLM Showdown** (budget-llm-showdown.html) — interactive comparison of all budget-tier models. Customizable usage inputs, sort by cost/input/output/context, cost per request breakdown, best-for-use-case labels, summary cards, insights section. Cross-linked from blog-cheapest-llm.html.

## Blocked on Human Action
1. **Community engagement** — Execute community playbook (7 Reddit posts + Show HN + newsletter pitches). All drafts ready in COMMUNITY-ENGAGEMENT.md. Requires human to post.
2. **GA4 traffic analysis** — Review page views, top referrers, calculator usage after 48+ hours of data.

---

## Key Milestones

### Sessions 1-218 (Apr 5 - May 16)
Built full APIpulse from scratch: 182 pages, 128 blog posts, 33 models, 10 providers, 11 tools, 6 API endpoints. Product Hunt launch, email drip, GA4 analytics, all calculators (Agent Cost, Model Switch, Savings, Cost Explorer, Pipeline, Cost Migration), Pro system, pricing freshness badges, community playbook, exit popup A/B test, Community Post Helper, newsletter landing page, batch/streaming toggle. Community engagement posts executed May 12 and May 15. 2026 Flagship LLM Cost Comparison blog post. Cross-linking and blog count consistency fixes.

### Session 219 (May 16)
**State of LLM Pricing Q2 2026 quarterly report:**
- **Blog post: blog-state-of-llm-pricing-q2-2026.html** — "State of LLM Pricing: Q2 2026". Comprehensive quarterly report covering 33 models across 10 providers. Biggest price moves (Mistral Large -75%, DeepSeek V4 Pro -75%, GPT-4o -67%, Grok 3 +10x). Full pricing matrix organized by tier (Premium/Mid/Budget). 5 defining trends: budget models production-viable, context windows exploded, price volatility, multi-model routing, batch APIs. Cost scenarios (coding assistant, RAG pipeline, chatbot, content generation). Provider-by-provider breakdown. Decision framework. Q3 2026 outlook.
- Generated OG image (og-images/blog-state-of-llm-pricing-q2-2026.png).
- Updated sitemap (182 URLs), RSS (129 items), blog index (129 guides).
- Blog count: 128→129. Page count: 182→183.
- Cross-linked from blog-cheapest-llm.html, blog-cost-optimization-guide.html, blog-2026-flagship-llm-cost-comparison.html.
- Added to What's New sections on index.html and launch.html.
- Updated blog count references across index.html, pricing.html, launch.html, community.html.

### Session 220 (May 16)
**Rate Limit Calculator tool:**
- **New tool: rate-limit-calculator.html** — interactive rate limit checker. Enter RPM + tokens/request, see which of 33 models can handle your traffic. Tier-aware for OpenAI (5 tiers) and Anthropic (4 tiers). Google free tier vs pay-as-you-go. Flat limits for DeepSeek, Mistral, Cohere, Together.ai, Moonshot, xAI, AI21. 5 workload presets (Hobby/Startup/Growth/Scale/Enterprise). Sort by Best Match, Cheapest, Highest RPM, or Name. Cost at throughput level. Summary with recommendations. Tips section (queuing, multi-key rotation, model routing, batch API, backoff, caching).
- Added to tools.html grid (12th tool).
- Updated sitemap (183 URLs). Page count: 183→184. Tool count: 11→12.
- Cross-linked from blog-ai-api-rate-limits.html (CTA + related reading).
- **Pricing page conversion improvements** (pricing.html): Added trust badges (14-day guarantee + instant access), FAQ schema for Google rich snippets, updated social proof stat (129 guides).

### Session 221 (May 16)
**Budget LLM Showdown tool:**
- **New tool: budget-llm-showdown.html** — interactive comparison of all budget-tier models (under $0.60/1M input). Customizable monthly requests + input/output tokens. 4 presets (Chatbot, RAG, Batch, Agent). Sort by Cheapest Monthly, Lowest Input $, Lowest Output $, Largest Context, Name. Color-coded cost cells (green/yellow/red). Cost per request breakdown. "Best For" use-case labels per model. Summary cards (Cheapest Overall, Largest Context, Cheapest per Input Token, Average Budget Cost). Insights section with 6 budget model takeaways.
- Added to tools.html grid (13th tool).
- Updated sitemap (184 URLs). Page count: 184→185. Tool count: 12→13.
- Cross-linked from blog-cheapest-llm.html (Related Reading).
- Added to What's New on index.html.

### Session 222 (May 16)
**Llama 4 Scout vs Maverick blog post:**
- **New blog post: blog-llama4-scout-vs-maverick.html** — "Llama 4 Scout vs Maverick: Which Open-Source Model Should You Use?" Comprehensive comparison of Meta's two open-source LLMs. Scout ($0.11/$0.34, 10M context) vs Maverick ($0.20/$0.60, 1M context). 45% cheaper, 10x context vs 3.7x more knowledge. Full model specs (MoE architecture, 109B vs 400B params). 3 cost scenarios: chatbot ($6.06/mo vs $10.80/mo), long-context document processing ($92.70/mo vs $168.00/mo), high-volume classification ($58.50/mo vs $105.00/mo). Quality comparison table. Self-hosting cost analysis (2x H100 vs 8x H100). Multi-model routing strategy (80/20 split for $7.50/mo blended).
- Generated OG image (og-images/blog-llama4-scout-vs-maverick.png).
- Updated sitemap (185 URLs), RSS (130 items), blog index (130 guides).
- Blog count: 129→130. Page count: 185→186.
- Cross-linked from blog-llama4-pricing.html and blog-llama4-scout-vs-deepseek-flash.html.
- Added to What's New on index.html.
- Updated blog count references across index.html, pricing.html, launch.html, community.html.
