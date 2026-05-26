# PROGRESS.md

## Site Status (as of Session 286, May 26, 2026)
**259 web pages | 167 blog files | 33 models | 10 providers | 22 tools | 6 API endpoints**
- Sitemap (254 URLs), RSS (196 items), blog files (167 posts + 1 index) — all in sync
- funnel.html: internal analytics dashboard (noindex, not in sitemap)
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

### Session 286 (May 26)
**New landing page + comparison page:**
- **Cheapest AI API landing page** (cheapest-ai-api.html) — targets "cheapest AI API 2026" high-intent search query. Gemini Flash Lite ($0.075/M) highlighted as overall cheapest. Top 5 cheapest models ranked with cards. Interactive calculator sorted cheapest-first. 6 use case recommendations (chatbot, code, RAG, content, startup, enterprise). FAQPage schema (5 questions). Cross-linked from index.html (What's New), tools.html (new card). Sitemap 252→254, RSS 194→196.
- **Mistral vs Anthropic comparison page** (compare-mistral-vs-anthropic.html) — targets "Mistral vs Claude pricing" search query. Mistral Small 4 ($0.15/M) is 7x cheaper than Haiku 4.5 ($1/M). 5 presets (chatbot, coding, RAG, content, heavy), 7 model options. Use case recommendations: budget chatbot (Mistral), code gen (Anthropic), EU sovereignty (Mistral), complex analysis (Anthropic). FAQPage schema (5 questions). Cross-linked from index.html, compare.html, tools.html, 3 related pages.
- Updated index.html (What's New + Popular Comparisons), compare.html (grid), tools.html (tool card + comparison links).

### Session 285 (May 26)
**New comparison page: Mistral vs Google Gemini (29th comparison):**
- Built compare-mistral-vs-google.html — targets "Mistral vs Gemini pricing" and "Mistral vs Google API" search queries.
- All Mistral models (Large 3, Small 4) vs all Google models (Gemini 3.1 Pro, 2.5 Pro, 2.0 Flash, Flash Lite).
- Summary cards: cheapest model (Gemini Flash Lite at $0.075/M, 2x cheaper than Mistral Small 4 at $0.15/M), best context per dollar (Google 1M at $0.075 vs Mistral 128K at $0.15), model variety (Google 4 models vs Mistral 2).
- Interactive calculator with 5 presets (chatbot, coding, RAG, content, heavy) and 6 model options.
- Use case recommendations: chatbot (Google), code gen (Google), long docs (Google), startup MVP (Google), EU data sovereignty (Mistral), high-volume processing (Google).
- FAQPage schema (5 questions).
- Cross-linked from: index.html (Popular Comparisons + What's New), tools.html (Model Comparisons card), compare.html (Popular Comparisons grid), 2 blog posts (mistral-pricing-guide, haiku-vs-flash).
- Sitemap 251→252 URLs, RSS 193→194 items.

### Session 284 (May 26)
**New comparison page: Anthropic vs Google (28th comparison):**
- Built compare-anthropic-vs-google.html — targets "Claude vs Gemini pricing" and "Anthropic vs Google API" search queries.
- All Anthropic models (Opus 4.7, Claude 4 Opus, Sonnet 4.6, Sonnet 4, Haiku 4.5) vs all Google models (Gemini 3.1 Pro, 2.5 Pro, 2.0 Flash, Flash Lite).
- Summary cards: cheapest model (Gemini Flash Lite at $0.075/M, 13x cheaper than Haiku 4.5 at $1/M), best context per dollar (Flash Lite: 1M at $0.075 vs Sonnet 4.6: 1M at $3), premium quality (Anthropic — Opus 4.7 and Sonnet 4.6 lead on reasoning).
- Interactive calculator with 5 presets (chatbot, coding, RAG, content, heavy) and 9 model options.
- Use case recommendations: chatbot (Google), code gen (Anthropic), long docs (Google), startup MVP (Google), enterprise (Anthropic), multi-model pipeline (Google).
- FAQPage schema (5 questions).
- Cross-linked from: index.html (Popular Comparisons + What's New), tools.html (Model Comparisons card), compare.html (Popular Comparisons grid), 5 blog posts (claude-vs-gemini, openai-vs-anthropic-vs-google, claude4-sonnet-vs-gemini3-pro, gemini3-pro-vs-claude-opus47, sonnet46-vs-gemini31pro).
- Sitemap 250→251 URLs, RSS 192→193 items.

### Session 283 (May 26)
**New comparison page: OpenAI vs DeepSeek (27th comparison):**
- Built compare-openai-vs-deepseek.html — targets "OpenAI vs DeepSeek pricing" search query.
- All OpenAI models (GPT-5.5 Pro, GPT-5.5, GPT-5.3 Codex, GPT-5, GPT-5 mini, GPT-oss 120B/20B, GPT-4o, GPT-4o mini) vs all DeepSeek models (V4 Pro, V4 Flash, V3).
- Summary cards: cheapest model (GPT-oss 20B at $0.08/M but 128K context; DeepSeek V4 Flash at $0.14/M with 1M context), best context per dollar (DeepSeek 1M at $0.44 vs OpenAI 1M at $5), model variety (OpenAI 9 models vs DeepSeek 3).
- Interactive calculator with 5 presets (chatbot, coding, RAG, content, heavy) and 12 model options.
- Use case recommendations: chatbot (DeepSeek), code gen (DeepSeek), long docs (DeepSeek), startup MVP (DeepSeek), enterprise (OpenAI), multi-model pipeline (OpenAI).
- FAQPage schema (5 questions).
- Cross-linked from: index.html (Popular Comparisons + What's New), tools.html (Model Comparisons card), compare.html (Popular Comparisons grid), 3 blog posts (deepseek-vs-openai, deepseek-v4-pro-vs-gpt5-mini, deepseek-flash-vs-gpt5-mini).
- Sitemap 249→250 URLs, RSS 191→192 items.

### Session 282 (May 26)
**Critical fix + new comparison page:**
- **Restored pricing.html** — last commit (9d8c0bc) accidentally deleted the entire 718-line pricing page. Recovered from git history and committed fix.
- **New comparison page: xAI Grok vs Google Gemini (26th comparison):**
  - Built compare-xai-vs-google.html — targets "Grok vs Gemini pricing" search query.
  - All xAI models (Grok 3, Grok 3 Mini) vs all Google models (Gemini 2.0 Flash Lite, Flash, 2.5 Pro, 3.1 Pro).
  - Summary cards: cheapest model (Gemini Flash Lite at $0.075/M, 400x cheaper than Grok 3), best context (Google 1M vs Grok 128K), model variety (Google 4 models vs xAI 2).
  - Interactive calculator with 5 presets (chatbot, coding, RAG, content, heavy) and 6 model options.
  - Use case recommendations: chatbot (Google), code gen (Google), long docs (Google), startup MVP (Google), X/Twitter integration (xAI), multi-model pipeline (Google).
  - FAQPage schema (5 questions).
  - Cross-linked from: index.html, tools.html, compare.html, 2 blog posts.
  - Sitemap 248→249 URLs, RSS 190→191 items.

### Session 281 (May 23)
**New comparison page: OpenAI vs Anthropic (25th comparison):**
- Built compare-openai-vs-anthropic.html — targets "OpenAI vs Anthropic pricing" search query.
- All OpenAI models (GPT-5.5, GPT-5.5 Pro, GPT-5.3 Codex, GPT-5, GPT-5 mini, GPT-oss 120B/20B, GPT-4o, GPT-4o mini) vs all Anthropic models (Claude Opus 4.7, Claude 4 Opus, Claude Sonnet 4.6, Claude Sonnet 4, Claude Haiku 4.5).
- Summary cards: cheapest model (GPT-oss 20B at $0.08/M vs Anthropic's cheapest $1/M), best context (tie at 1M for GPT-5.5, Opus 4.7, Sonnet 4.6), premium value (Opus 4.7 $5/$25 is 17% cheaper on output than GPT-5.5 $5/$30).
- Interactive calculator with 5 presets (chatbot, coding, RAG, content, heavy) and 14 model options.
- Use case recommendations: chatbot (OpenAI), code gen (OpenAI), long docs (Anthropic — Sonnet 4.6 1M context at $3/M), startup MVP (OpenAI), enterprise (Anthropic), multi-model pipeline (OpenAI — more tier granularity).
- FAQPage schema (5 questions: cheaper provider, cheapest Anthropic model, context windows, Opus vs GPT-5.5 for coding, free tier).
- Cross-linked from: index.html (Popular Comparisons + What's New), tools.html (Model Comparisons card), compare.html (Popular Comparisons grid), 3 blog posts (openai-vs-anthropic-vs-google, claude4-vs-gpt5, gpt5-vs-claude4-opus).
- Sitemap 247→248 URLs, RSS 189→190 items.

### Sessions 265-281 (May 21-23)
Massive build sprint: 6 tools, 11 comparison pages, social sharing on all pages. Blog 132→167, pages 197→253, sitemap 230→248, RSS 172→190.

### Sessions 1-264 (Apr 5 - May 21)
Built full APIpulse: 214 pages, 157 blog posts, 33 models, 10 providers, 14 tools, 6 API endpoints.
