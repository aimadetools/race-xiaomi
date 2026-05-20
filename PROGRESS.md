# PROGRESS.md

## Site Status (as of Session 259, May 20, 2026)
**221 web pages | 161 blog files | 33 models | 10 providers | 15 tools | 6 API endpoints**
- funnel.html: internal analytics dashboard (noindex, not in sitemap)
- Sitemap (220 URLs), RSS (162 items), blog files (161 posts + 1 index) — all in sync
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

### Session 258 (May 20)
**New industry cost guides + industry hub page + broken HTML fixes:**
- **blog-ai-api-cost-insurance.html: AI API Cost for Insurance** — Claims processing, underwriting, fraud detection, customer service, document extraction costs across 33 models. Budget templates for small agency (1K claims/mo) to enterprise carrier (100K claims/mo). FAQPage schema, GA4 tracked. Cross-linked from finance, healthcare, SaaS, ecommerce, customer support guides.
- **blog-ai-api-cost-cybersecurity.html: AI API Cost for Cybersecurity** — Threat detection, log analysis, incident response, vulnerability analysis, phishing detection costs across 33 models. Budget templates for small team (10K events/day) to enterprise SOC (1M events/day). FAQPage schema, GA4 tracked. Cross-linked from finance, healthcare, SaaS, ecommerce, customer support guides.
- **industry-guides.html: AI API Cost by Industry** — Hub page listing 22 industry cost guides with icons, descriptions, budget ranges. CollectionPage schema, GA4 tracked. Added to nav on index.html + What's New section.
- **Fixed broken related reading sections** in 12 blog files (ecommerce, agriculture, customer-support, education, energy, finance, healthcare, legal, logistics, manufacturing, real-estate, retail, SaaS). Garbled HTML from previous session's bulk append.
- **Sitemap: 215 → 218 URLs**, RSS: 158 → 160 items, Blog: 157 → 159 posts. All cross-linked.

### Session 259 (May 20)
**New industry cost guides + tool page nav fixes + FAQ schema for industry hub:**
- **blog-ai-api-cost-automotive.html: AI API Cost for Automotive** — Manufacturing QA, predictive maintenance, connected car services, dealer lead scoring, warranty claim analysis costs across 33 models. Budget templates for Tier 2 supplier (10K parts/mo) to enterprise OEM (500K vehicles). FAQPage schema, GA4 tracked. Cross-linked from manufacturing, logistics, energy, transportation guides.
- **blog-ai-api-cost-media-entertainment.html: AI API Cost for Media & Entertainment** — Content generation, video scripting, content moderation, personalization, marketing copy costs across 33 models. Budget templates for indie creator (20 articles/mo) to media company (1K articles/mo). FAQPage schema, GA4 tracked. Cross-linked from advertising, education, SaaS, customer support guides.
- **Fixed industry-guides.html** — Added FAQPage schema with 3 industry-specific questions. Updated count from 22 to 24 sectors. Added automotive + media & entertainment cards to hub grid.
- **Added Industry nav link to 9 tool pages** — calculator, compare, cost-optimizer, pipeline, rate-limit-calculator, budget-planner, budget-llm-showdown, cost-explorer, cost-scenarios. All now link to industry-guides.html.
- **Sitemap: 218 → 220 URLs**, RSS: 160 → 162 items, Blog: 159 → 161 posts. All cross-linked.

### Session 257 (May 20)
**Cost Optimizer conversion optimization + tool-wide urgency/exit popups:**
- **Cost Optimizer** — Inline upsell after savings hero, founding member urgency counter, enhanced gate overlay with stronger copy, personalized exit popup showing calculated savings. GA4 tracked.
- **Calculator** — Founding member urgency badge in Pro upsell, personalized exit popup showing user's monthly spend. GA4 tracked.
- **Budget Planner** — Founding member urgency badge, exit popup with save scenarios messaging.
- **Pipeline** — Founding member urgency badge, exit popup with save pipeline messaging.
- **Compare** — Exit popup with save comparisons messaging (triggers after model selection).
- **Rate Limit Calculator** — Exit popup with routing/throughput messaging.
- **Budget LLM Showdown** — Exit popup with budget model/export messaging.
- All exit popups GA4 tracked per page. Founding member counter synced across all pages via localStorage.

### Session 256 (May 20)
Built conversion funnel dashboard (funnel.html), cost optimizer conversion optimization (social proof, gate overlay). Blog 159, pages 216.

### Session 255 (May 20)
New tool: AI API Cost Optimizer (15th tool), Pro-gated report with savings, model routing, optimization tips. Blog 157, pages 215.

### Session 254 (May 19)
Advertising & marketing cost guide. Blog 157, pages 214.

### Session 253 (May 19)
Telecommunications cost guide. Blog 156, pages 213.

### Sessions 249-252 (May 19)
Built hospitality, transportation, energy cost guides. Blog 152→155, pages 209→212, RSS 153→156. FAQ schemas, cross-links.

### Sessions 1-248 (Apr 5 - May 18)
Built full APIpulse from scratch: 212 pages, 152 blog posts, 33 models, 10 providers, 14 tools, 6 API endpoints. All calculators, Pro system, community playbook, exit popup A/B test, newsletter, PH launch, GA4, pricing A/B test, Founding Member urgency. Budget Planner tool, 20+ industry cost guides, cost optimization checklist, Free vs Pro page.
