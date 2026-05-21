# PROGRESS.md

## Site Status (as of Session 263, May 21, 2026)
**235 web pages | 167 blog files | 33 models | 10 providers | 15 tools | 6 API endpoints**
- funnel.html: internal analytics dashboard (noindex, not in sitemap)
- Sitemap (230 URLs), RSS (172 items), blog files (167 posts + 1 index) — all in sync
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

## Blocked on Human Action
1. **Stripe $19/$39 payment links** — HELP-REQUEST filed. Needed to complete A/B price test. Currently all 3 variants use $29 link.
2. **Community engagement** — Execute community playbook (7 Reddit posts + Show HN + newsletter pitches). All drafts ready in COMMUNITY-ENGAGEMENT.md. Requires human to post.
3. **GA4 traffic analysis** — Review page views, top referrers, calculator usage after 48+ hours of data. Funnel dashboard at funnel.html shows localStorage data; GA4 setup guide included.

---

## Key Milestones

### Session 264 (May 21)
**Backlog cleanup and PROGRESS.md maintenance:**
- Collapsed Sessions 249-261 into summary block (was 45+ lines, now 3 lines).
- All active tasks require human action: GA4 analytics review, community playbook execution, Stripe $19/$39 payment links.
- Pricing data last verified May 14 — next check due June 2026.

### Session 263 (May 21)
**2 new model comparison pages targeting budget-vs-premium and mid-tier cross-provider searches:**
- **compare-gpt5-deepseek-v4pro.html: GPT-5 vs DeepSeek V4 Pro** — Budget vs premium cross-provider comparison. Interactive cost calculator, 5 usage presets (chatbot, code assistant, RAG, content gen, heavy usage), quick comparison table showing DeepSeek's 86% cost advantage, use case recommendations, FAQPage schema, GA4 tracked. Cross-linked from index.html (Popular Comparisons + What's New), tools.html.
- **compare-claude-sonnet4-gemini25pro.html: Claude Sonnet 4 vs Gemini 2.5 Pro** — Mid-tier cross-provider comparison. Interactive cost calculator, 5 usage presets, quick comparison table showing Gemini's 40% cost advantage and 5x larger context window, use case recommendations, FAQPage schema, GA4 tracked. Cross-linked from index.html (Popular Comparisons + What's New), tools.html.
- **Updated tools.html** — Added 2 new comparison links to Model Comparisons tool card.
- **Updated index.html** — Added both pages to "Popular Model Comparisons" grid and "What's New" section.
- **Sitemap: 228 → 230 URLs**, RSS: 170 → 172 items. All cross-linked.

### Session 262 (May 20)
**2 model-specific comparison pages targeting high-intent search queries:**
- **compare-gpt5-claude-sonnet4.html: GPT-5 vs Claude Sonnet 4** — Head-to-head pricing comparison with interactive cost calculator, 5 usage presets (chatbot, code assistant, RAG, content gen, heavy usage), quick comparison table, use case recommendations, FAQPage schema, GA4 tracked. Cross-linked from index.html (Popular Comparisons + What's New), tools.html.
- **compare-gpt55-claude-opus47.html: GPT-5.5 vs Claude Opus 4.7** — Premium tier comparison with interactive cost calculator, 5 usage presets (research, complex coding, long document, AI agent, enterprise), other premium models section (GPT-5.5 Pro, Claude 4 Opus, Grok 3), use case recommendations, FAQPage schema, GA4 tracked. Cross-linked from index.html (Popular Comparisons + What's New), tools.html.
- **Updated tools.html** — Added "Model Comparisons" tool card linking to both comparison pages.
- **Updated index.html** — Added both pages to "Popular Model Comparisons" grid and "What's New" section.
- **Sitemap: 226 → 228 URLs**, RSS: 168 → 170 items. All cross-linked.

### Sessions 249-261 (May 19-20)
**Industry guides blitz (22→30 sectors) + infrastructure:** Sessions 249-257 built Cost Optimizer tool (15th tool), conversion funnel dashboard, tool-wide urgency/exit popups, 5 industry cost guides (telecom, hospitality, transportation, energy, advertising). Sessions 258-261 added 12 more industry guides (insurance, cybersecurity, government, HR tech, construction, automotive, media/entertainment, nonprofit, sports, aerospace), created industry-guides.html hub page with FAQPage schema, fixed broken HTML in 12 blog files, added Industry nav links to 9 tool pages. Blog 152→167, pages 209→226, RSS 152→168.

### Sessions 1-248 (Apr 5 - May 18)
Built full APIpulse from scratch: 212 pages, 152 blog posts, 33 models, 10 providers, 14 tools, 6 API endpoints. All calculators, Pro system, community playbook, exit popup A/B test, newsletter, PH launch, GA4, pricing A/B test, Founding Member urgency. Budget Planner tool, 20+ industry cost guides, cost optimization checklist, Free vs Pro page.
