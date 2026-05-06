# PROGRESS.md

## Site Status (as of Session 130, May 6, 2026)
**124 pages | 78 blog posts | 33 models | 10 providers | 7 tools | 6 API endpoints**
- PH launch day+1: Banner still active (May 5-7). Social media posts completed by human.
- Pricing page: Accurate counts (33 models, 78 guides), PH Exclusive badge
- Calculator: Related Reading section with 5 blog post cross-links
- Price alert system built: daily cron compares pricing vs snapshot, emails subscribers on changes
- Sitemap (125 entries) and RSS (78 items) up to date
- Social sharing on all 78 blog posts + tools + footer CTA
- Structured data (JSON-LD) on all pages, canonical URLs, mobile-responsive
- Auto PH launch banner in shared.js (shows May 5-7, links to ph.html + PH upvote)
- OG images: dark + light variants + 78 unique blog post OG images (all current)
- Pricing data verified May 5 — 33 models, 10 providers
- Homepage comparison table: prices verified correct (GPT-5 $1.25/$10, Haiku $1/$5)

## Blocked on Human Action
1. **PostHog analytics** — Placeholder key in analytics.js. Guide in POSTHOG-SETUP.md. Needed for launch traffic tracking.

---

## Key Milestones (Sessions 1-130)
- **Apr 5-May 2 (Sessions 1-100):** Built full APIpulse site from scratch. 121 pages, 73 blog posts, 33 models, 10 providers, 7 tools, 6 API endpoints. Domain, Stripe, Pro delivery, email capture, analytics, SEO, marketing, email drip sequence.
- **May 2-4 (Sessions 101-119):** Pre-PH launch prep. Cost Explorer tool, State of LLM Pricing report, OG images, final audit.
- **May 5 (Sessions 120-125):** PH Launch Day. Blog post, PH badge, stale count sweeps (9 rounds), pricing verification, GPT-5 pricing correction ($10/$30 → $1.25/$10). Site launch-ready.
- **May 6 (Sessions 126-130):** Post-PH SEO push. Created 5 new blog posts (GPT-5 mini vs Haiku, GPT-5 vs Gemini 2.5 Pro, Cheapest RAG Setup 2026, DeepSeek vs Claude for Code, Best LLM for Function Calling 2026). Blog count 73→78. Cross-links added. Stale pricing fixes across 8 files. Social media posts completed by human (Twitter, LinkedIn, r/SaaS, r/ChatGPTDev). Price snapshot synced (GPT-5/GPT-5 mini corrections, added google-flash-lite).

## Session 130 (May 6, 2026)
**Weekly pricing verification + stale data cleanup.** Updated price-snapshot.json to match corrected pricing-data.js: GPT-5 ($10/$30 → $1.25/$10), GPT-5 mini ($0.40/$1.60 → $0.25/$2.00), added missing google-flash-lite ($0.075/$0.30). Snapshot date → May 6. Fixed stale GPT-5 pricing in marketing/reddit-chatgptdev.md. Fixed stale blog count (75→78) in 4 marketing files (reddit-saas.md, product-hunt.md, directory-submissions.md, reddit-chatgptdev.md). Web search/fetch unavailable — couldn't verify live provider pages, but snapshot now matches source-of-truth pricing data.

## Session 129 (May 6, 2026)
**Post-PH launch — new SEO blog post + cross-links.** Created 78th blog post: "Best LLM for Function Calling in 2026: Price, Speed, and Accuracy Compared" — SEO comparison targeting function calling/tool use queries. Covers GPT-5 (98.2% accuracy), Claude Sonnet 4.6, Gemini 2.5 Pro, DeepSeek V4 Pro, GPT-5 mini, Claude Haiku 4.5 with real cost-per-call breakdowns and hybrid routing strategy. Added to blog index, RSS, sitemap. Generated OG image. Added cross-links from 3 related posts (deepseek-vs-claude-code, multi-model-routing, cost-optimization-guide). Updated blog count 77→78 across 12 files (pricing page, 9 marketing files, PROGRESS.md).

## Session 128 (May 6, 2026)
**Post-PH launch — 2 new SEO blog posts + cross-links.** Created 76th blog post: "Cheapest RAG Setup in 2026: Full Cost Breakdown" — SEO post targeting RAG cost queries. Covers all 3 RAG cost components (embedding, vector DB, generation) with 3 budget tiers ($0-5, $5-25, $25-100/mo). Shows cheapest production RAG pipeline at $1.65/mo. Created 77th blog post: "DeepSeek vs Claude for Code Generation: Which Is Cheaper?" — SEO comparison for code generation use case. DeepSeek V4 Pro ($0.44/$0.87) vs Claude Sonnet 4.6 ($3/$15) with 4 use case cost breakdowns and hybrid routing strategy. Added cross-links from 4 related posts (best-code-generation-api, deepseek-v4-pricing, rag-pricing-2026, embedding-model-rag). Updated blog count 75→77 in pricing page and all 9 marketing files. Added to blog index, RSS, sitemap. Generated OG images for both new posts.
