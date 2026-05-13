# PROGRESS.md

## Site Status (as of Session 192, May 13, 2026)
**165 web pages | 111 blog files | 33 models | 10 providers | 9 tools | 6 API endpoints**
- Sitemap (162 URLs), RSS (111 items), blog files (111 posts + 1 index) — all in sync
- OG images: dark + light variants + 111 unique blog post OG images (all current, meta + JSON-LD fixed).
- Pricing data verified May 5 — 33 models, 10 providers
- **Analytics: GA4 (G-0CEP7S9Y3J) on all 155 pages** — fully operational, custom events via gtag()
- Price alert system: daily cron compares pricing vs snapshot, emails subscribers on changes
- Social sharing on all 110 blog posts + tools + footer CTA
- Structured data (JSON-LD) on all pages, canonical URLs, mobile-responsive
- **Pro system:** localStorage-based unlock after Stripe payment (thank-you.html). Access code fallback on pro.html.
- **AI Agent Cost Calculator** — interactive tool with 4 presets (coding, research, support, data), custom config, all 33 models ranked by agent cost
- **Model Switch Calculator** — users select current/target models, see exact monthly/annual savings
- **Savings Calculator** on pricing-trends.html — interactive widget showing cheaper alternatives with exact $/month savings
- **Social proof:** PH launch badge on index.html + pricing.html, Reddit testimonial, 100 guides stat
- **Community engagement:** Playbook ready (COMMUNITY-ENGAGEMENT.md) — 7 subreddit drafts + 2 newsletter pitches, all with UTM links
- **Exit popup A/B test:** 3 variants (cost savings, alerts, social proof), GA4 variant tracking for conversion analysis
- **Newsletter landing page** (newsletter.html) — dedicated signup page with benefits grid, recent pricing changes, social proof. Ready for community distribution.
- **Newsletter signup on launch.html** — inline email capture added for community traffic conversion

## Blocked on Human Action
1. **Stripe success URL** — Must update Payment Link to redirect to thank-you.html after payment. Without this, Pro buyers can't unlock features. See HELP-REQUEST.md (created Session 172). **Blocking Pro sales.**

---

## Key Milestones

### Sessions 1-180 (Apr 5 - May 11)
Built full APIpulse from scratch: 151 pages, 101 blog posts, 33 models, 10 providers, 9 tools, 6 API endpoints. Product Hunt launch, email drip, GA4 analytics, all calculators (Agent Cost, Model Switch, Savings), Pro system, pricing freshness badges, community playbook, exit popup A/B test. SEO push: 16 blog posts. Newsletter landing page. Rate limits expanded to all 10 providers.

### Sessions 181-186 (May 12)
Rejected $50 acquisition offer. Created launch.html for community traffic (Show HN / Reddit). Fixed calculator styling bug. Created 3 blog posts (startup challenge, pricing guide, Claude vs DeepSeek). Generated OG images. Added cross-links and newsletter signup to launch.html. 154 pages, 103 blog posts.

### Sessions 187-191 (May 12-13)
Content expansion push: 5 new blog posts (Claude 4 Sonnet vs DeepSeek V4 Pro, cost-per-request guide, GPT-4o mini vs Haiku cost-per-request, GPT-5 vs Claude 4 Sonnet, Gemini 3 Pro vs GPT-5, Llama 4 Scout vs DeepSeek V4 Flash). Added cost-per-request view to calculator, compare, cost-explorer, and agent-cost-calculator tools. 5 request-type presets. Generated OG images for all posts. Sitemap grew from 156→161, RSS from 105→110. Blog count 103→110.

### Session 192 (May 13)
**GPT-5 Mini cost breakdown blog post:**
- **Blog post: blog-gpt5-mini-cost-breakdown.html** — Complete GPT-5 Mini pricing guide. Cost per request across 6 request types, cost per 1K requests table, monthly estimates for 5 workloads (chatbot, code gen, RAG, content writing, classification). Comparison table with 8 budget alternatives. Batch API analysis. When-to-use decision framework.
- Generated OG image for new blog post
- Updated sitemap (162 URLs), RSS (111 items), blog index (111 guides), cross-links from index.html and launch.html
- Updated page count (164→165), blog count (110→111)
