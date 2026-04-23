# DECISIONS.md — Research, Evaluation & Decision

## Phase 1: Brainstorming — 10 Micro-SaaS Ideas

### 1. APIpulse — AI API Cost Calculator & Budget Planner
- **Description:** Interactive tool that helps developers compare pricing across LLM API providers (OpenAI, Anthropic, Google, Mistral) and plan their API spending with budget calculators, scenario modeling, and cost optimization tips.
- **Target Customer:** Developers, CTOs, and technical founders building AI-powered applications
- **Pricing Model:** Free basic calculator + $29 one-time purchase for premium features (saved scenarios, PDF export, optimization recommendations, historical pricing)
- **Why it works:** Developers actively search for "GPT-4 vs Claude pricing" and need cost planning before committing to a provider. No single tool combines multi-provider comparison with budget planning. Fully static (data in JSON, calculations in JS). Clear SEO keywords with buying intent.

### 2. ChangelogKit — Static Changelog Page Generator
- **Description:** Generate beautiful, embeddable changelog/release notes pages from markdown. Outputs static HTML that can be hosted anywhere.
- **Target Customer:** Indie developers, SaaS founders, open-source maintainers
- **Pricing Model:** Free basic templates + $19 one-time for premium templates and customization
- **Why it works:** Every software product needs a changelog. Existing tools are either enterprise-priced ($79+/mo) or basic open-source. Static output = no hosting costs.

### 3. StatusPage.io Alternative — Self-Hosted Status Page Generator
- **Description:** Generate a beautiful status page as static HTML. No monthly fees, no vendor lock-in.
- **Target Customer:** Indie developers, small SaaS teams
- **Pricing Model:** $49 one-time purchase for lifetime access + premium templates
- **Why it works:** Status page SaaS costs $50-300/mo. Developers want self-hosted options. Static HTML = deploy anywhere.

### 4. PromptForge — AI Prompt Template Library & Builder
- **Description:** Curated collection of production-tested prompts for common use cases (summarization, code generation, data extraction, etc.) with a visual prompt builder.
- **Target Customer:** Developers integrating LLMs into their apps
- **Pricing Model:** Free tier (basic prompts) + $19/mo subscription for premium library
- **Why it works:** Prompt engineering is a bottleneck. Developers waste hours crafting prompts. Curated, tested prompts save time.

### 5. WebhookLens — Webhook Testing & Debugging Tool
- **Description:** Get a unique URL, send webhooks to it, inspect payloads in real-time. Like Postman's webhook feature but lighter and faster.
- **Target Customer:** Developers building integrations, payment flows, CI/CD pipelines
- **Pricing Model:** Free (limited history) + $9/mo for persistent history and team features
- **Why it works:** Webhook debugging is painful. Existing tools (Webhook.site, Postman) are either unreliable or bloated. But requires backend for persistence.

### 6. APIspec Writer — OpenAPI Spec Generator from Natural Language
- **Description:** Describe your API in plain English, get a valid OpenAPI 3.1 spec. AI-powered.
- **Target Customer:** Backend developers, API-first companies
- **Pricing Model:** Free (3 specs/month) + $29/mo for unlimited
- **Why it works:** Writing OpenAPI specs manually is tedious. AI can generate structured specs from descriptions. But requires LLM API costs.

### 7. DeployChecklist — Pre-Deploy Verification Tool
- **Description:** Configurable checklist tool for pre-deployment verification. Generates shareable checklists with team collaboration.
- **Target Customer:** DevOps engineers, development teams
- **Pricing Model:** Free (basic) + $19/mo for team features
- **Why it works:** Deployment failures from missing steps cost money. But this is more of a project management tool with lots of competitors.

### 8. RateLimit Calculator — API Rate Limit Planning Tool
- **Description:** Calculate how many API calls you can make within budget, compare rate limits across providers, plan capacity.
- **Target Customer:** Developers scaling API-dependent applications
- **Pricing Model:** Free basic + $19 one-time for advanced planning features
- **Why it works:** Rate limit planning is a real problem but too niche for $20+ revenue.

### 9. LLM Eval Kit — LLM Output Quality Testing Framework
- **Description:** Define test cases, run them against multiple LLM providers, compare quality scores. Browser-based.
- **Target Customer:** Teams evaluating which LLM to use for their application
- **Pricing Model:** $49 one-time for full access
- **Why it works:** LLM evaluation is a growing need. But requires API keys and backend execution.

### 10. TokenCounter — Multi-Model Token Counting Tool
- **Description:** Count tokens across different models (GPT-4, Claude, Gemini) with accurate tokenizers. Compare costs instantly.
- **Target Customer:** Developers optimizing prompts for cost
- **Pricing Model:** Free (basic counting) + $9 one-time for batch processing and export
- **Why it works:** Token counting is a daily need. But existing tools (tiktoken, Tokenizer.dev) are free.

---

## Phase 2: Evaluation & Scoring

| # | Idea | Revenue (1-10) | Technical (1-10) | Acquisition (1-10) | Competition (1-10) | Speed (1-10) | TOTAL |
|---|------|:-:|:-:|:-:|:-:|:-:|:-:|
| 1 | APIpulse | 8 | 9 | 8 | 7 | 9 | **41** |
| 2 | ChangelogKit | 6 | 9 | 7 | 6 | 8 | **36** |
| 3 | StatusPage Gen | 7 | 8 | 6 | 5 | 7 | **33** |
| 4 | PromptForge | 7 | 7 | 7 | 4 | 6 | **31** |
| 5 | WebhookLens | 7 | 5 | 7 | 6 | 5 | **30** |
| 6 | APIspec Writer | 6 | 5 | 6 | 5 | 5 | **27** |
| 7 | DeployChecklist | 5 | 8 | 5 | 4 | 6 | **28** |
| 8 | RateLimit Calc | 4 | 9 | 5 | 7 | 8 | **33** |
| 9 | LLM Eval Kit | 7 | 4 | 6 | 6 | 4 | **27** |
| 10 | TokenCounter | 4 | 8 | 6 | 5 | 7 | **30** |

### Scoring Rationale

**Revenue potential:** Can people pay $20+? Is the problem urgent enough?
**Technical feasibility:** Can it be built with static HTML/JS on Vercel free tier?
**Acquisition ease:** Are there specific search terms people use? Can you reach users organically?
**Competition:** How many existing tools solve this? Lower score = more competition.
**Monetization speed:** How fast can the first dollar come in?

### Eliminated (Bottom 5):

1. **APIspec Writer (#6, 27pts)** — Requires LLM API calls (ongoing cost), unclear monetization, ChatGPT can already do this for free.
2. **LLM Eval Kit (#9, 27pts)** — Requires backend for API execution, complex to build, can't work as static HTML.
3. **DeployChecklist (#7, 28pts)** — Too many project management competitors, not specific enough to developers' pain.
4. **WebhookLens (#5, 30pts)** — Requires backend for persistence, Webhook.site is free and well-known.
5. **TokenCounter (#10, 30pts)** — Existing free tools (tiktoken, Tokenizer.dev), too niche for $20+ pricing.

---

## Phase 3: Top 5 Mini Business Plans

### 1. APIpulse — AI API Cost Calculator & Budget Planner

**Pricing Tiers:**
- Free: Basic cost calculator, provider comparison table, limited to 3 providers
- Pro ($29 one-time): All providers, saved scenarios, PDF export, optimization tips, historical pricing tracker

**First 10 paying customers:**
1. Post on r/webdev, r/ChatGPTDev, r/SaaS with "I built this" post (Week 1)
2. Launch on Product Hunt (Week 2)
3. Write SEO blog posts: "GPT-4 vs Claude 3.5 Cost Comparison" (Week 1-2)
4. Share on Hacker News Show HN (Week 2)
5. Post in AI/ML Discord servers and Slack communities (Week 1)

**Acquisition strategy:**
- Week 1: Reddit posts, Hacker News, SEO blog posts targeting "LLM API pricing"
- Week 4: Product Hunt launch, more blog posts, Twitter/X thread about findings
- Week 8: SEO traffic from blog posts, referral from developer communities

**Revenue projection:** First dollar in Week 2 (Product Hunt launch). $100+ MRR by Week 6.

**Static HTML monetization:** Yes — calculator is pure JS, premium features gated behind Stripe Payment Link. Data in JSON files.

**Competitive landscape:**
- ArtificialAnalysis.ai: Focuses on benchmarks/speed, not budget planning
- OpenRouter: Aggregator, not a planning tool
- Provider-specific calculators: Only show one provider
- **APIpulse gap:** No tool combines multi-provider comparison + budget planning + optimization tips

---

### 2. ChangelogKit — Static Changelog Generator

**Pricing Tiers:**
- Free: 3 basic templates, manual entry
- Pro ($19 one-time): 10+ premium templates, markdown import, custom branding, embed widget

**First 10 paying customers:**
1. Post on r/webdev, r/SaaS (Week 1)
2. SEO: "changelog page template HTML" (Week 1-4)
3. Product Hunt launch (Week 3)
4. Open-source the basic version on GitHub (Week 1)

**Acquisition strategy:**
- Week 1: Reddit, GitHub open-source release
- Week 4: Product Hunt, SEO traffic
- Week 8: SEO + community referrals

**Revenue projection:** First dollar in Week 3-4. Slower because changelog is less urgent than cost planning.

**Static HTML monetization:** Yes — generator outputs static HTML, premium templates are downloadable files.

**Competitive landscape:** LaunchNotes (enterprise), Changelogfy, Headway — all SaaS with monthly fees. GitHub Releases (free but basic). Opportunity for one-time purchase model.

---

### 3. StatusPage Generator — Self-Hosted Status Page

**Pricing Tiers:**
- Free: Basic status page template
- Pro ($49 one-time): Multiple premium templates, incident history, component groups, custom domain support

**First 10 paying customers:**
1. Post on r/selfhosted, r/webdev (Week 1)
2. SEO: "self-hosted status page" (Week 1-4)
3. Product Hunt launch (Week 3)

**Acquisition strategy:**
- Week 1: Reddit (r/selfhosted is perfect), Hacker News
- Week 4: Product Hunt, SEO blog posts
- Week 8: SEO traffic

**Revenue projection:** First dollar in Week 3-4. Higher price point ($49) means fewer sales needed.

**Static HTML monetization:** Yes — status pages are inherently static. Premium = better templates + features.

**Competitive landscape:** Instatus, Better Stack, Atlassian Statuspage — all SaaS with monthly fees ($50-300/mo). Self-hosted options exist but are ugly/complex. Clear gap.

---

### 4. PromptForge — AI Prompt Template Library

**Pricing Tiers:**
- Free: 20 basic prompts
- Pro ($19/mo or $99 one-time): 200+ prompts, prompt builder, custom templates, categories

**First 10 paying customers:**
1. Post on r/ChatGPT, r/artificial, r/PromptEngineering (Week 1)
2. SEO: "best prompts for [use case]" (Week 1-8)
3. Product Hunt launch (Week 3)

**Acquisition strategy:**
- Week 1: Reddit, Twitter/X prompt sharing
- Week 4: Product Hunt, blog posts
- Week 8: SEO traffic from prompt-related searches

**Revenue projection:** First dollar in Week 3-4. Subscription model = recurring revenue but harder to convert.

**Static HTML monetization:** Partially — prompts can be static content, but prompt builder needs JS.

**Competitive landscape:** PromptBase, FlowGPT, various prompt marketplaces. Crowded space. ChatGPT's built-in prompts reduce need.

---

### 5. RateLimit Calculator — API Rate Limit Planning

**Pricing Tiers:**
- Free: Basic calculator for top 5 providers
- Pro ($19 one-time): All providers, capacity planning, comparison reports

**First 10 paying customers:**
1. Post on r/webdev, r/programming (Week 1)
2. SEO: "API rate limit calculator" (Week 1-4)

**Acquisition strategy:**
- Week 1: Reddit, Hacker News
- Week 4: Product Hunt, SEO
- Week 8: SEO traffic

**Revenue projection:** First dollar in Week 4-6. Niche audience, slower conversion.

**Static HTML monetization:** Yes — pure calculation tool.

**Competitive landscape:** No dedicated rate limit comparison tool exists. But niche audience.

---

## Phase 4: Final Decision

### Winner: APIpulse — AI API Cost Calculator & Budget Planner

**Why APIpulse wins:**
1. **Highest total score (41/50)** — best across all dimensions
2. **Fastest to monetize** — developers actively searching for cost comparisons have buying intent
3. **Clear SEO moat** — "GPT-4 vs Claude pricing", "LLM API cost calculator" are high-intent keywords
4. **Fully static** — data in JSON, calculations in JS, no backend needed
5. **Defensible niche** — existing tools focus on benchmarks, not budget planning
6. **$29 one-time** — easy purchase decision for developers, no subscription fatigue
7. **Expandable** — can add more providers, features, and pricing tiers over time

**Elevator Pitch:**
"APIpulse helps developers make smart decisions about AI API costs. Compare pricing across OpenAI, Anthropic, Google, and Mistral in one place. Calculate your monthly spend, model different usage scenarios, and get optimization tips to reduce costs by up to 40%. Stop overpaying for AI APIs — plan your spending with APIpulse."

---

## Budget Allocation ($90 total)

| Item | Cost | When |
|------|------|------|
| Domain (apipulse.dev or similar) | ~$12 | Week 1 |
| Stripe setup | $0 | Week 1 |
| Vercel hosting | $0 | Ongoing |
| Product Hunt launch | $0 | Week 2 |
| Reddit/Twitter marketing | $0 | Ongoing |
| Blog content (self-written) | $0 | Ongoing |
| Reserve for future needs | ~$78 | As needed |
| **Total committed** | **~$12** | |

---

## Risk Assessment

| Risk | Likelihood | Mitigation |
|------|:-:|---|
| ArtificialAnalysis adds budget planning | Medium | Move fast, build community, add unique features |
| API pricing changes frequently | High | Build update system, add community contributions |
| Low organic traffic | Medium | Focus on long-tail keywords, Reddit, Product Hunt |
| Developers use ChatGPT for comparisons | Medium | Offer structured, always-updated data that ChatGPT can't |
| Too niche for $29 pricing | Low | Developers spend on tools that save time/money |
