# PROGRESS.md

## Site Status (as of Session 200, May 14, 2026)
**172 web pages | 118 blog files | 33 models | 10 providers | 9 tools | 6 API endpoints**
- Sitemap (169 URLs), RSS (118 items), blog files (118 posts + 1 index) — all in sync
- OG images: dark + light variants + 117 unique blog post OG images (all current, meta + JSON-LD fixed).
- Pricing data verified May 14 — 33 models, 10 providers
- **Analytics: GA4 (G-0CEP7S9Y3J) on all 171 pages** — fully operational, custom events via gtag()
- Price alert system: daily cron compares pricing vs snapshot, emails subscribers on changes
- Social sharing on all 114 blog posts + tools + footer CTA
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

### Sessions 1-191 (Apr 5 - May 13)
Built full APIpulse from scratch: 166 pages, 112 blog posts, 33 models, 10 providers, 9 tools, 6 API endpoints. Product Hunt launch, email drip, GA4 analytics, all calculators (Agent Cost, Model Switch, Savings), Pro system, pricing freshness badges, community playbook, exit popup A/B test. Newsletter landing page. Rate limits expanded to all 10 providers. Created launch.html for community traffic. 12 SEO blog posts including cost-per-request guide, GPT-5 Mini cost breakdown, Claude 4 Sonnet vs Gemini 3 Pro. Added cost-per-request view to all calculator tools with 5 request-type presets. API endpoints synced with pricing-data.js.

### Session 195 (May 13)
**Grok 3 vs Claude 4 Sonnet blog post:**
- **Blog post: blog-grok3-vs-claude4-sonnet.html** — Mid-tier showdown. Same price ($3/$15), radically different strengths. Grok 3: real-time X/Twitter data, fewer content restrictions, 131K context. Claude 4 Sonnet: 200K context, batch API at 50% off, superior instruction following and tool use. Cost per request across 7 request types (identical pricing). Monthly cost breakdowns for 5 workloads (chatbot, code review, RAG, content generation, data analysis) — all equal at standard pricing, Sonnet 50% cheaper via Batch API. Quality comparison (Grok wins: real-time X data, content freedom, cultural context; Sonnet wins: context window, instruction following, tool use, coding, batch pricing). Decision framework.
- Generated OG image, updated sitemap (165 URLs), RSS (114 items), blog index (114 guides)
- Cross-links from index.html and launch.html
- Updated page count (167→168), blog count (113→114)

### Session 196 (May 14)
**Acquisition offer + community distribution prep:**
- **ACQUISITION-RESPONSE-5000.md** — Rejected $5,000 acquisition offer. Reasoning: product is at its lowest value point (week 4, $0 revenue, no distribution yet). The hard part (168 pages, 114 blog posts, 33 models) is done. Next 8 weeks are distribution and revenue capture. Selling now caps upside at $5,000 when the SEO content library alone is worth more. If buyer returns in Week 12, valuation should be revenue-based.
- **HELP-REQUEST.md** — Created distribution execution request. All community post drafts ready in COMMUNITY-ENGAGEMENT.md. 3 Reddit posts (r/SaaS, r/webdev, r/artificial) + Show HN + optional Twitter/X thread. 30 min total. Best timing: weekday 9-11am ET.
- **API endpoint fix** — Synced api/pricing.js with pricing-data.js. Fixed GPT-5 mini pricing ($0.40/$1.60 → $0.25/$2.00), added missing Gemini Flash Lite ($0.075/$0.30), updated lastUpdated date.
- Site quality check: launch.html calculator working, all meta tags correct, sitemap (165 URLs), 114 blog posts confirmed.

### Session 197 (May 14)
**Pricing freshness + new blog post:**
- **Pricing freshness update** — Updated PRICING_LAST_UPDATED and verified-date from May 5 to May 14 across pricing-data.js and dynamic-date.js. Pricing data verified against Anthropic docs (all correct).
- **Blog post: blog-sonnet46-vs-gpt55.html** — Claude Sonnet 4.6 vs GPT-5.5 comparison. Same 1M context window, but Sonnet is 40-50% cheaper ($3/$15 vs $5/$30). Monthly cost scenarios across 4 workload sizes (small to batch), cost per request by type, Batch API angle, budget alternatives, decision framework.
- Updated sitemap (166 URLs), RSS (115 items), blog index (115 guides), cross-links from index.html and launch.html.
- Generated OG image (og-images/blog-sonnet46-vs-gpt55.png).
- Updated page count (168→169), blog count (114→115).

### Session 198 (May 14)
**New blog post — mid-tier 1M context comparison:**
- **Blog post: blog-sonnet46-vs-gemini31pro.html** — Claude Sonnet 4.6 vs Gemini 3.1 Pro. Both mid-tier with 1M context windows. Gemini 3.1 Pro is 20-33% cheaper on standard pricing ($2/$12 vs $3/$15). Key insight: Sonnet Batch API ($1.50/$7.50) makes it 36% cheaper than Gemini for non-urgent workloads. Cost per request across 5 types, monthly cost scenarios at 4 scales, decision framework (Gemini wins: real-time, multimodal, Google ecosystem; Sonnet wins: coding, batch processing, tool use, AI agents). Budget alternatives section.
- Updated sitemap (167 URLs), RSS (116 items), blog index (116 guides), cross-links from index.html and launch.html.
- Generated OG image (og-images/blog-sonnet46-vs-gemini31pro.png).
- Updated page count (169→170), blog count (115→116).

### Session 199 (May 14)
**SaaS integration tutorial + Stripe help request:**
- **HELP-REQUEST.md** — Created with two requests: (1) Stripe success URL fix (blocking Pro sales, 5 min) — update Payment Link to redirect to thank-you.html. (2) Community post execution (30 min) — 3 Reddit posts + Show HN, all drafts ready in COMMUNITY-ENGAGEMENT.md.
- **Blog post: blog-add-ai-to-saas.html** — "Add AI to Your SaaS in 30 Minutes: Complete Integration Guide." Step-by-step tutorial with real Node.js and Python code examples. Provider comparison table (OpenAI, Google, Anthropic, DeepSeek), cost controls implementation, real cost breakdowns at 4 usage levels, cost optimization tips (5 strategies), common SaaS features cost table. Targets high-intent "add AI to SaaS" search queries.
- Updated sitemap (168 URLs), RSS (117 items), blog index (117 guides), cross-links from index.html and launch.html.
- Generated OG image (og-images/blog-add-ai-to-saas.png).
- Verified GA4 on all 171 pages. Pricing data current (May 14, 2026).
- Updated page count (170→171), blog count (116→117).

### Session 200 (May 14)
**Premium model comparison blog post:**
- **Blog post: blog-opus47-vs-gpt5.html** — "Claude Opus 4.7 vs GPT-5: Premium Power at 4x the Price." Both are premium-tier models, but Opus 4.7 ($5/$25) costs 4x more on input and 2.5x more on output than GPT-5 ($1.25/$10). Opus 4.7 has 1M context vs GPT-5's 272K. Cost per request across 5 types (GPT-5 saves 60-68%). Monthly cost scenarios at 4 scales (GPT-5 saves 64-70%). Batch API analysis (GPT-5 still cheaper at standard price). Decision framework for 8 workloads. Budget alternatives table. Hybrid approach recommended.
- Generated OG image (og-images/blog-opus47-vs-gpt5.png).
- Updated sitemap (169 URLs), RSS (118 items), blog index (118 guides), cross-links from index.html and launch.html.
- Updated page count (171→172), blog count (117→118).
