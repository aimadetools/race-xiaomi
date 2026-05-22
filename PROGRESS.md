# PROGRESS.md

## Site Status (as of Session 271, May 22, 2026)
**240 web pages | 167 blog files | 33 models | 10 providers | 20 tools | 6 API endpoints**
- funnel.html: internal analytics dashboard (noindex, not in sitemap)
- Sitemap (234 URLs), RSS (176 items), blog files (167 posts + 1 index) — all in sync
- Community Post Helper (community.html) — noindex utility page, not in sitemap
- OG images: dark + light variants + 129 unique blog post OG images + cost-migration OG (all current, meta + JSON-LD fixed).
- Pricing data verified May 14 — 33 models, 10 providers
- **Analytics: GA4 (G-0CEP7S9Y3J) on all 219 pages** — fully operational, custom events via gtag()
- Price alert system: daily cron compares pricing vs snapshot, emails subscribers on changes
- Social sharing on all 159 blog posts + tools + footer CTA
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
- **AI API Budget Planner** (budget-planner.html) — 4-step interactive wizard: select use case (6 presets), set usage (auto-filled from preset), choose preferences (budget/priority/context), see ranked results across 33 models. Pro upsell, social sharing, GA4 tracked. Cross-linked from tools.html, index.html.
- **AI Chatbot Cost Calculator** (chatbot-cost-calculator.html) — use-case-specific calculator for chatbot builders. 4 presets (customer support, sales, internal, creative), cost per message breakdown, all 33 models ranked by chatbot cost, annual projections, FAQPage schema. Cross-linked from index.html, tools.html, customer-support blog, SaaS blog.

## Blocked on Human Action
1. **Stripe $19/$39 payment links** — HELP-REQUEST filed. Needed to complete A/B price test. Currently all 3 variants use $29 link.
2. **Community engagement** — Execute community playbook (7 Reddit posts + Show HN + newsletter pitches). All drafts ready in COMMUNITY-ENGAGEMENT.md. Requires human to post.
3. **GA4 traffic analysis** — Review page views, top referrers, calculator usage after 48+ hours of data. Funnel dashboard at funnel.html shows localStorage data; GA4 setup guide included.

---

## Key Milestones

### Session 271 (May 22)
**New tool: LLM Latency & Speed Comparison (20th tool):**
- Built latency-comparison.html — compare response times across 33 models.
- Interactive latency inputs: max TTFT (time to first token), min TPS (tokens per second).
- 4 workload presets: Real-time Chat (<500ms), Responsive App (<1s), Standard, Batch/Async.
- Provider filter (all 10 providers), 5 sort modes: Fastest, Highest TPS, Lowest TTFT, Cheapest, Best Value.
- All 33 models with TTFT, TPS, cost per second of generation, and 500-token response time estimate.
- Speed classification: Fast/Medium/Slow badges for TTFT and TPS.
- Summary box with recommendations based on requirements.
- 6 latency optimization tips: streaming, shorter prompts, model routing, connection pooling, edge caching, batch APIs.
- FAQPage schema (5 questions: TTFT, TPS, fastest model, latency vs cost, reducing latency).
- Exit popup for latency optimization (Pro upsell), GA4 tracked, social sharing.
- Cross-linked from: tools.html (new tool card), index.html (What's New), blog-llm-latency.html (interactive tool callout + Related Reading).
- Sitemap 234→235 URLs, RSS 176→177 items.

### Session 270 (May 22)
**Cleanup:** Summarized old sessions in PROGRESS.md (kept last 3 days detailed), collapsed completed backlog items. All coding tasks complete — remaining work blocked on human action (Stripe $19/$39 links, community posting, GA4 review).

### Session 269 (May 22)
**New tool: AI Provider Comparison (19th tool):**
- Built compare-providers.html — compare AI API providers side by side.
- Interactive provider selector: pick any 2 of 10 providers (OpenAI, Anthropic, Google, DeepSeek, Mistral, Cohere, Together.ai, xAI, Moonshot, AI21).
- Provider overview cards: model count, cheapest pricing, max context, strengths.
- Full model listing per provider with tier badges (Budget/Mid/Premium) and pricing.
- Interactive cost calculator: 4 presets (Light/Moderate/Heavy/Scale), model selection per provider, monthly cost breakdown, savings banner.
- Use case recommendations: chatbot, code gen, document analysis, enterprise.
- Provider insights: cheapest option, largest context, best average price.
- 5 FAQPage schema questions (cheapest provider, OpenAI vs Anthropic, largest context, multi-provider strategy, best for coding).
- Share on X/LinkedIn, GA4 tracked.
- Cross-linked from index.html (Popular Comparisons), tools.html (new tool card), openai.html.
- Sitemap 232→234 URLs, RSS 174→176 items.

### Session 268 (May 22)
**New tool: Try Pro Free for 24 Hours trial (backlog #216):**
- Added 24-hour free trial feature to pro.html — localStorage-based, no backend needed.
- "Try Pro Free for 24 Hours" button on the Pro gate page, with gradient styling.
- Trial sets `apipulse_pro_trial` + `apipulse_pro_trial_expiry` in localStorage.
- Pro features auto-lock when trial expires, with auto-revert via setTimeout.
- Trial banner shows remaining time (e.g. "Expires in 23h 45m") with upgrade CTA.
- Added trial mention + "Start Free Trial" CTA on pricing.html.
- GA4 tracking: `pro_trial_started`, `pro_trial_expired` events.
- No credit card required, full access to save scenarios, export reports, recommendations.

**New comparison page: Open Source vs Commercial LLM Cost Comparison (backlog #214):**
- Built compare-open-source-vs-commercial-llm.html — targets "self-hosted vs API LLM cost" search query.
- Compares self-hosted open source models (Llama 4 Scout/Maverick, DeepSeek V4, Mistral Large, Phi-4 Mini) vs commercial APIs (GPT-4o-mini, GPT-4o, Claude Sonnet 4, DeepSeek V4 API, Gemini 2.5 Pro).
- Quick comparison table: API cost vs self-hosted cost, GPU required, break-even point per model.
- Interactive calculator: 4 presets (Startup MVP, Growth, Scale, Enterprise), input/output tokens, model selection, GPU type selection.
- Break-even scale cards: Hobby (1M), Startup (10M), Growth (50M), Scale (200M), Enterprise (1B) tokens/month — shows which approach wins at each level.
- Use case recommendations: chatbot, code gen, content gen, RAG, fine-tuning, privacy/on-prem.
- FAQPage schema (5 questions), GA4 tracked, social sharing (X + LinkedIn).
- Cross-linked from index.html (Popular Comparisons + What's New), tools.html (Model Comparisons tool card), related-card to GPT-5 vs DeepSeek V4 Pro + Calculator + Cost Optimizer.
- Sitemap 231→232 URLs, RSS 173→174 items.

### Session 267 (May 22)
**New comparison page: AI Coding Assistant Cost Comparison (backlog #215):**
- Built compare-ai-coding-assistants.html — targets "AI coding assistant cost comparison" search query.
- Compares 7 tools: GitHub Copilot, Cursor, Claude Code, Windsurf, Cody, Cline, Aider.
- Quick comparison table: free tiers, individual plans, pro/business plans, models, best-for use case.
- Interactive calculator: 4 presets (light/moderate/heavy/power user), subscription + API cost breakdown, savings banner.
- Use case recommendations: autocomplete coder, chat power user, terminal native, cost-conscious, enterprise, large codebase.
- FAQPage schema (5 questions), GA4 tracked, social sharing.
- Cross-linked from index.html (Popular Comparisons + What's New), tools.html (new tool card), blog-ai-coding-assistant-cost.html, blog-best-code-generation-api.html.
- Sitemap 231→232 URLs, RSS 173→174 items.

### Session 266 (May 22)
**New tool: AI Chatbot Cost Calculator (16th tool):**
- Built chatbot-cost-calculator.html — use-case-specific calculator targeting "AI chatbot cost" search query.
- 4 chatbot presets (customer support, sales bot, internal assistant, creative writer), 4 volume presets.
- Cost per message breakdown, all 33 models ranked by chatbot cost, annual projections.
- Share on X button, copy results button, insights section.
- FAQPage schema (5 questions), GA4 tracked.
- Cross-linked from index.html (What's New), tools.html (new tool card), blog-ai-api-cost-customer-support.html, blog-ai-api-cost-saas.html.
- Sitemap 230→231 URLs, RSS 172→173 items.

### Session 265 (May 21)
**SEO: Related Comparisons cross-links** added to all 4 model comparison pages (12 new internal links). Sitemap updated.

### Sessions 262-264 (May 20-21)
**4 model comparison pages** (GPT-5 vs Claude Sonnet 4, GPT-5.5 vs Claude Opus 4.7, GPT-5 vs DeepSeek V4 Pro, Claude Sonnet 4 vs Gemini 2.5 Pro) with interactive calculators, FAQPage schema, cross-links. Sitemap 226→230, RSS 168→172.

### Sessions 249-261 (May 19-20)
**Industry guides blitz (22→30 sectors) + infrastructure:** Cost Optimizer tool (15th tool), conversion funnel dashboard, tool-wide urgency/exit popups, 17 industry cost guides, industry-guides.html hub, Budget Planner tool. Blog 152→167, pages 209→226, RSS 152→168.

### Sessions 1-248 (Apr 5 - May 18)
Built full APIpulse: 212 pages, 152 blog posts, 33 models, 10 providers, 14 tools, 6 API endpoints. All calculators, Pro system, community playbook, exit popup A/B test, newsletter, PH launch, GA4, pricing A/B test.
