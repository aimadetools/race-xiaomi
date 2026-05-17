# PROGRESS.md

## Site Status (as of Session 226, May 17, 2026)
**188 web pages | 132 blog files | 33 models | 10 providers | 13 tools | 6 API endpoints**
- Sitemap (187 URLs), RSS (132 items), blog files (132 posts + 1 index) — all in sync
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

### Sessions 1-220 (Apr 5 - May 16)
Built full APIpulse from scratch: 184 pages, 128 blog posts, 33 models, 10 providers, 12 tools, 6 API endpoints. PH launch, email drip, GA4, all calculators, Pro system, community playbook, exit popup A/B test, newsletter page, batch/streaming toggle. Community posts May 12 + 15. Flagship LLM comparison + Q2 report + Rate Limit Calculator + pricing conversion improvements.

### Session 226 (May 17)
**Founding Member urgency mechanic on pricing page:**
- **pricing.html: "Founding Member" badge** — replaced "Best Value" with gold gradient "Founding Member" badge on Pro card.
- **pricing.html: $49 price anchor** — strikethrough showing future price ($49 after founding period) above the $29 current price.
- **pricing.html: Scarcity counter** — localStorage-seeded counter showing "X of 100 founding member spots claimed" with urgency styling. Seeds between 68-78 for realistic scarcity.
- **pricing.html: Updated CTAs** — "Lock in Founding Member Price — $29" button, nav CTA updated to "Founding Member — $29".
- **pricing.html: Exit popup updated** — now shows founding member urgency, $49 anchor, "Lock in $29 — Founding Member" CTA, "No thanks, I'll pay $49 later" dismiss.
- **shared.js: Sticky CTA bar** — updated to "Founding Member: Pro for $29 (goes to $49 soon)" with "Lock in $29" button.
- GA4 tracked: `founding_member_seen` event with spots_claimed parameter.

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

### Session 223 (May 16)
**GPT-5.5 vs Gemini 3.1 Pro blog post:**
- **New blog post: blog-gpt55-vs-gemini31pro.html** — "GPT-5.5 vs Gemini 3.1 Pro: Premium Model Showdown" Comprehensive premium model comparison. GPT-5.5 ($5.00/$30.00) vs Gemini 3.1 Pro ($2.00/$12.00) — 60% price gap, same 1M context. Full model specs (multimodal, output limits, free tier). 4 cost scenarios: production chatbot ($180/mo vs $450/mo, saves $270), code generation ($270/mo vs $675/mo, saves $405), document analysis ($264/mo vs $660/mo, saves $396), batch processing ($132/mo vs $330/mo). Quality comparison table (13 capabilities). Gemini's multimodal advantage (native video/audio). Decision framework (3 questions). Multi-model routing strategy.
- Generated OG image (og-images/blog-gpt55-vs-gemini31pro.png).
- Updated sitemap (186 URLs), RSS (131 items), blog index (131 guides).
- Blog count: 130→131. Page count: 186→187.
- Cross-linked from blog-gemini3-pro-vs-gpt5.html, blog-openai-pricing-guide.html, blog-gemini-pricing-guide.html.
- Added to What's New on index.html.
- Updated blog count references across index.html, pricing.html, launch.html, community.html.

### Session 224 (May 16)
**Best AI APIs for Translation 2026 blog post:**
- **New blog post: blog-best-ai-api-translation-2026.html** — "Best AI APIs for Translation 2026" Comprehensive translation API comparison. Gemini Flash ($0.10/$0.40) vs GPT-5 Mini ($0.25/$2.00) vs DeepSeek V4 Flash ($0.14/$0.28) vs Mistral Small ($0.15/$0.60) vs Claude Haiku ($1.00/$5.00). Cost breakdowns for 1K-100K documents. Language coverage across 7 language families (European, CJK, Arabic, South Asian, African, Southeast Asian). Batch API 50% discount. Hybrid AI+human translation approach (49% savings). Decision framework by use case.
- Generated OG image (og-images/blog-best-ai-api-translation-2026.png).
- Updated sitemap (187 URLs), RSS (132 items), blog index (132 guides).
- Blog count: 131→132. Page count: 187→188.
- Cross-linked from blog-cheapest-llm.html, blog-multi-model-routing.html, blog-cost-optimization-guide.html.
- Added to What's New on index.html.
- Updated blog count references across index.html, pricing.html, launch.html, community.html.

### Session 225 (May 17)
**Conversion optimization — shift from content to revenue:**
- **pricing.html: ROI calculator** — "Will Pro pay for itself?" interactive section. Enter monthly API spend, see potential savings (30% average) and payback period. Quick-select buttons ($50/$200/$500/$1K). GA4 tracked.
- **pricing.html: Exit-intent popup** — triggers when mouse leaves viewport. Shows savings stats ($60-200/mo), $29 one-time pricing, direct Stripe CTA. GA4 tracked.
- **shared.js: Sticky Pro CTA bar** — appears on all pages (except pricing/pro/thank-you/launch) after 30% scroll. "Save up to 40% on API costs with Pro" with direct Stripe link. Dismissible (localStorage). Hidden for existing Pro users. GA4 tracked.
- **calculator.html: Pro upsell section** — shows after first calculation with personalized spend/savings estimate. Updates dynamically as user changes inputs.
- **Fixed blog guide count inconsistencies** — blog.html (126→132), pricing.html What's New (128→132), newsletter.html (101→132). All now consistent with actual 132 blog posts.
