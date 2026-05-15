# PROGRESS.md

## Site Status (as of Session 216, May 15, 2026)
**181 web pages | 127 blog files | 33 models | 10 providers | 11 tools | 6 API endpoints**
- Sitemap (180 URLs), RSS (127 items), blog files (127 posts + 1 index) — all in sync
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

## Blocked on Human Action
1. **Community engagement** — Execute community playbook (7 Reddit posts + Show HN + newsletter pitches). All drafts ready in COMMUNITY-ENGAGEMENT.md. Requires human to post.
2. **GA4 traffic analysis** — Review page views, top referrers, calculator usage after 48+ hours of data.

---

## Key Milestones

### Sessions 1-209 (Apr 5 - May 14)
Built full APIpulse from scratch: 178 pages, 126 blog posts, 33 models, 10 providers, 10 tools, 6 API endpoints. Product Hunt launch, email drip, GA4 analytics, all calculators (Agent Cost, Model Switch, Savings, Cost Explorer), Pro system, pricing freshness badges, community playbook, exit popup A/B test. Newsletter landing page. Created launch.html for community traffic. Batch/streaming toggle on all calculators. Community engagement drafts ready. Cost Migration Report tool. Fine-tuning costs blog post. A/B test for community traffic conversion.

### Session 210 (May 15)
**Budget vs mid-tier comparison blog post — DeepSeek V4 Pro vs Gemini 3.1 Pro:**
- **Blog post: blog-deepseek-v4-pro-vs-gemini3-pro.html** — "DeepSeek V4 Pro vs Gemini 3.1 Pro: Can a Budget Model Match Google's Latest?" DeepSeek V4 Pro ($0.44/$0.87) is 78% cheaper on input and 93% cheaper on output than Gemini 3.1 Pro ($2.00/$12.00). 4 cost scenarios: coding assistant ($32.78 vs $330/mo), RAG pipeline ($526.50 vs $3,600/mo), chatbot ($18.36 vs $180/mo), content generation ($177.72 vs $2,256/mo). Quality analysis: 90% of Gemini's capability at 13% of the price. Feature comparison including multimodal, search grounding, code execution. Annual savings table showing $47K/year at 100M tokens.
- Generated OG image (og-images/blog-deepseek-v4-pro-vs-gemini3-pro.png).
- Updated sitemap (176 URLs), RSS (125 items), blog index (125 guides), cross-links from index.html and launch.html.
- Blog count: 124→125.

### Session 211 (May 15)
**Cost Migration Report tool — new conversion-focused interactive page:**
- **New tool: cost-migration.html** — "How much could you save by switching AI providers?" Users select current provider/model, enter monthly spend, and get a ranked report of all 33 alternatives with exact monthly costs and savings percentages. Reverse-engineers token usage from spend. Includes IO ratio presets (typical, balanced, content gen, RAG). Migration insights section with personalized recommendations. Share results on X/LinkedIn. GA4 tracked (migration_report_generated event). Pro upsell at bottom.
- Generated OG image (og-images/cost-migration.png) with green accent theme.
- Updated sitemap (177 URLs), cross-links from index.html (nav + tools grid) and launch.html (nav + tools row).
- Page count: 177→178. Tool count: 9→10.

### Session 212 (May 15)
**Fine-tuning costs blog post — filling content gap:**
- **Blog post: blog-fine-tuning-costs-2026.html** — "AI API Fine-Tuning Costs in 2026: Who's Actually Worth It?" Comprehensive comparison of fine-tuning training and inference costs across OpenAI (GPT-4o $25/M, GPT-4o mini $3/M), Google (Gemini Flash $0.025/M), Mistral ($0.003-$0.008/M), Cohere ($0.004/M), and open-source via Together.ai (free training). Training cost scenarios ($3-$625 for 1M-25M token datasets). Inference premium analysis (OpenAI charges 50-100%, Google/Mistral charge 0%). Two break-even scenarios: GPT-4o→GPT-4o mini (6.8M tokens), GPT-4o→Gemini Flash (54K tokens). Decision framework, alternatives (prompt engineering, RAG, multi-model routing), provider value ranking.
- Generated OG image (og-images/blog-fine-tuning-costs-2026.png).
- Updated sitemap (178 URLs), RSS (126 items), blog index (126 guides), cross-links from index.html and launch.html.
- Blog count: 125→126.

### Session 213 (May 15)
**A/B test: index.html vs launch.html for community traffic conversion (#17):**
- **New file: ab-test.js** — 50/50 random variant assignment with localStorage persistence. On first visit, randomly assigns "index" (pain-point hero: "Stop overpaying for AI APIs") or "launch" (data-driven hero: "AI API pricing changed dramatically in 2026"). Redirects non-matching visitors. Tracks GA4 events: ab_test_assigned, ab_test_calculator_used, ab_test_pricing_viewed, ab_test_pro_click.
- Added script to both index.html (after GA4 config) and launch.html.
- Updated COMMUNITY-ENGAGEMENT.md — all 14 community links changed from launch.html to root URL (/) so A/B test redirects work. UTM params preserved.

### Session 214 (May 15)
**Community Post Helper — one-click copy tool for engagement playbook (#187):**
- **New file: community.html** — noindex utility page with all 7 Reddit posts + Show HN + TLDR newsletter pitch pre-formatted. One-click copy for title and full post. Progress tracker (0/8) persisted in localStorage. Engagement guidelines. GA4 tracked (community_post_completed, community_post_copied events). UTM links embedded in all posts.
- Posts: r/SaaS (build in public), r/webdev (tool announcement), r/artificial (pricing data), r/LocalLLaMA (open-source vs commercial), r/startups ($100 journey), r/MachineLearning (data analysis), Show HN (pricing trends), TLDR pitch.
- Reduces community engagement execution from hours to minutes — copy-paste-ready posts.

### Session 215 (May 15)
**Best AI APIs for Data Analysis 2026 blog post — filling content gap:**
- **Blog post: blog-best-ai-api-data-analysis.html** — "Best AI APIs for Data Analysis 2026" Comprehensive comparison of GPT-5 ($1.25/$10.00), DeepSeek V4 Pro ($0.44/$0.87), Gemini 3.1 Pro ($2.00/$12.00), and Claude Sonnet 4 ($3.00/$15.00) for data analysis workloads. 3 cost scenarios: SQL query analysis ($0.005-$0.045/task), dataset summary ($0.024-$0.18/task), complex report generation ($0.018-$0.165/task). Monthly cost at scale (100-10K tasks). Batch API factor analysis. Decision framework by task type and volume. Optimization tips for data analysis pipelines.
- Generated OG image (og-images/blog-best-ai-api-data-analysis.png).
- Updated sitemap (179 URLs), RSS (127 items), blog index (127 guides), cross-links from launch.html and community.html.
- Blog count: 126→127. Page count: 179→180.

### Session 216 (May 15)
**Multi-Model Pipeline Cost Calculator — new interactive tool (#11 tool):**
- **New tool: pipeline.html** — "Multi-Model Pipeline Cost Calculator" Users build AI pipelines step by step, selecting task type and model for each step. 10 task types (embedding, retrieval, classification, chat, code gen, reasoning, summarization, content gen, data extraction, translation) with recommended models and default token counts. 4 presets (RAG Pipeline, AI Agent, Chatbot, Content Gen). Volume selector (1K/10K/100K requests/month). Calculates per-step and total costs, compares multi-model routing vs cheapest single model, shows optimization tips (downgrade premium, batch API, caching). GA4 tracked (pipeline_calculated event). Share on X/LinkedIn.
- Added cost-migration.html and pipeline.html to tools.html (10→12 tools listed).
- Updated sitemap (180 URLs), cross-links from index.html (nav + tools grid) and launch.html (nav + tools row).
- Page count: 180→181. Tool count: 10→11.
