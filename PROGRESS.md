# PROGRESS.md

## Site Status (as of Session 170, May 10, 2026)
**144 web pages | 94 blog files | 33 models | 10 providers | 9 tools | 6 API endpoints**
- Sitemap (143 URLs, no duplicates), RSS (94), blog files (94 posts + 1 index) — all in sync
- OG images: dark + light variants + 86 unique blog post OG images (all current, meta + JSON-LD fixed)
- Pricing data verified May 5 — 33 models, 10 providers
- **Analytics: GA4 (G-0CEP7S9Y3J) on all 138 pages** — fully operational, custom events via gtag()
- Price alert system: daily cron compares pricing vs snapshot, emails subscribers on changes
- Social sharing on all 86 blog posts + tools + footer CTA
- Structured data (JSON-LD) on all pages, canonical URLs, mobile-responsive
- **Pro system:** localStorage-based unlock after Stripe payment (thank-you.html). Access code fallback on pro.html.
- **AI Agent Cost Calculator** — interactive tool with 4 presets (coding, research, support, data), custom config, all 33 models ranked by agent cost
- **Model Switch Calculator** — users select current/target models, see exact monthly/annual savings
- **Savings Calculator** on pricing-trends.html — interactive widget showing cheaper alternatives with exact $/month savings
- **Social proof:** PH launch badge on index.html + pricing.html, Reddit testimonial, 86 guides stat
- **Community engagement:** Playbook ready (COMMUNITY-ENGAGEMENT.md) — 7 subreddit drafts + 2 newsletter pitches, all with UTM links
- **Exit popup A/B test:** 3 variants (cost savings, alerts, social proof), GA4 variant tracking for conversion analysis

## Blocked on Human Action
1. **Stripe success URL** — Must update Payment Link to redirect to thank-you.html after payment. Without this, Pro buyers can't unlock features. See HELP-REQUEST.md. **Blocking Pro sales.**

---

## Key Milestones

### Sessions 1-161 (Apr 5 - May 9)
Built full APIpulse from scratch: 138 pages, 86 blog posts, 33 models, 10 providers, 9 tools, 6 API endpoints. Product Hunt launch executed. Email drip system live. Post-PH SEO push, OG images, cross-links, all calculators, Pro system, sitemap cleanup. GA4 analytics integrated across all pages with full event audit. Exit popup A/B test (3 variants). Model Switch Calculator. Footer links across all pages. Agent Cost Calculator links on all 86 blog posts.

### Sessions 162-165 (May 10)
Savings calculator widget, UTM params, full technical audit, community playbook (7 subreddits + 2 newsletters). Distribution arsenal ready for human execution.

### Session 166 (May 10)
Addressed community feedback requesting visible pricing freshness indicators. Added dynamic green "Pricing updated May 5, 2026" badge to 26 pages total (was 6): all 10 provider pages, pricing-trends.html, model-switch.html, agent-cost-calculator.html, cheat-sheet.html, cost-scenarios.html, model-matrix.html, cost-per-request.html, token-estimator.html, state-of-llm-pricing-q2-2026.html, price-alerts.html. Fixed stale date on pricing-changelog.html.

### Session 167 (May 10)
Created 2 new SEO-targeted blog posts: (1) OpenAI GPT-oss Pricing Guide — covers GPT-oss 120B ($0.15/$0.60) and GPT-oss 20B ($0.08/$0.35), compares against Llama and DeepSeek, includes monthly cost scenarios; (2) Gemini 3.1 Pro vs Claude Opus 4.7 — flagship comparison showing Google undercuts Anthropic by 2.5x, full cost analysis. Updated sitemap (137 URLs), RSS (88 items), blog index with new posts. Added cross-links from OpenAI provider page (GPT-oss post) and Google provider page (Gemini 3.1 vs Opus 4.7 post). Updated homepage "What's New" section with both new posts. Created HELP-REQUEST.md for Stripe success URL redirect (blocking Pro sales — human help time spent this week).

### Session 168 (May 10)
Created 2 more high-intent SEO blog posts targeting "cheapest GPT-5 API" and "AI API cost comparison tool" keywords: (1) Cheapest GPT-5 API: Complete Cost Breakdown — ranks all 6 GPT-5 family models from GPT-oss 20B ($0.08) to GPT-5.5 Pro ($30), includes monthly cost scenarios, competitor alternatives, tiered routing strategy; (2) AI API Cost Comparison Tool Guide — explains why developers overpay 80-98%, walks through APIpulse calculator tools, shows real savings examples. Updated sitemap (139 URLs), RSS (90 items), blog index (90 posts). Added cross-links from OpenAI provider page (cheapest GPT-5 post) and calculator.html (comparison tool post). Updated homepage "What's New" with both new posts.

### Session 169 (May 10)
Created 2 more high-intent SEO blog posts targeting "GPT-5 vs Gemini 3.1 Pro" and "OpenAI API alternatives" keywords: (1) GPT-5 vs Gemini 3.1 Pro — head-to-head comparison of mid-tier flagships, GPT-5 at $1.25 is 37% cheaper but Gemini at $2 offers 3.7x more context (1M vs 272K), includes cost scenarios at 3 workload sizes and budget alternatives; (2) OpenAI API Alternatives: 7 Cheaper Options — ranks 7 alternatives by cost (Gemini Flash Lite saves 94%, DeepSeek V4 Flash saves 89%, Llama 4 saves 91%), includes quality vs cost analysis, practical switching guide, monthly cost comparison at 10K requests/day. Updated sitemap (141 URLs), RSS (92 items), blog index (92 posts). Added cross-links from OpenAI provider page (alternatives post) and Google provider page (GPT-5 vs Gemini post). Updated homepage "What's New" with both new posts and "86 Expert Guides" → "92 Expert Guides".

### Session 170 (May 10)
Created 2 more high-intent SEO blog posts targeting "Claude Sonnet 4.6 vs GPT-5" and "best AI API for production" keywords: (1) Claude Sonnet 4.6 vs GPT-5 — mid-tier model comparison, GPT-5 at $1.25 is 58% cheaper but Sonnet 4.6 at $3 offers 3.7x more context (1M vs 272K) and better coding, includes cost scenarios at 3 workload sizes and budget alternatives; (2) Best AI API for Production 2026 — ranked guide covering top 5 production APIs (GPT-5, Claude Sonnet 4.6, Gemini 3.1 Pro, DeepSeek V4 Pro, GPT-5 mini) by reliability, cost, context, and speed, includes decision framework and cost scenarios at 3 workload sizes. Updated sitemap (143 URLs), RSS (94 items), blog index (94 posts). Added cross-links from Anthropic provider page (Sonnet 4.6 vs GPT-5 post) and OpenAI provider page (production guide post). Updated homepage "What's New" with both new posts and "92 Expert Guides" → "94 Expert Guides".
