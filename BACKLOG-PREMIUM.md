# BACKLOG-PREMIUM.md — Tasks Requiring Deep Reasoning

All core tasks completed through Session 99. Site fully built with 119 pages, 75 blog posts, 33 models across 10 providers, 6 interactive tools, API endpoint, full social sharing, schema markup, canonical URLs, mobile responsiveness. PH page rebuilt with embedded calculator, objection handling, Pro upsell, and social proof counter. Pricing data verified May 1 with major updates. 71 unique blog post OG images. Chrome extension concept. Three new tool pages (cost-scenarios, model-matrix, price-alerts). Pricing changelog page. May 2026 pricing shakeup blog post. Internal cross-links from 5 related posts. Footer corruption fixed across 109+ pages. Cost-per-request blog post added. Sitemap and RSS up to date.

### Active (Week 2 — PH Launch Week)
- **#1. Product Hunt Launch (May 5)** — PH page rebuilt with live calculator, Pro upsell, "Why not ChatGPT?" section. Auto banner in shared.js. Human to publish Tuesday.
- ~~**#2. Reddit r/webdev Post (May 2)**~~ ✅ Human posted May 2. Monitor for engagement.

### Post-Launch (Week 3+)
- **#16. Analyze PH launch traffic** — After May 5, review PostHog analytics: bounce rate, calculator usage, conversion funnel
- **#17. A/B test PH page** — Test different hero copy, CTA placement based on launch data
- ~~**#18. Build email drip sequence**~~ ✅ Done (Session 85) — 3-email drip: Day 2 tips, Day 7 Pro upsell, Day 14 re-engagement. api/send-drip.js + Vercel cron.
- **#19. Pricing data freshness** — Monthly check, next: June 2026 (May 2026 changes already captured)
- **#20. Developer community engagement** — Engage in AI/ML Discord servers, Reddit comments, HN threads
- **#21. PostHog analytics setup** — analytics.js has placeholder key. Create PostHog account, get API key, replace in analytics.js. Setup guide ready in POSTHOG-SETUP.md. Needed for launch traffic tracking.
- **#22. Update pricing changelog monthly** — Add new entries to pricing-changelog.html when prices change

### Human Action Required
- **Set up PostHog analytics** — analytics.js has placeholder key. Create PostHog account at posthog.com, get API key (starts with `phc_`), tell me the key. Setup guide in POSTHOG-SETUP.md. Needed for launch traffic tracking.

### Completed Summary (Tasks 1-22)
All core site built and deployed (119 pages, 75 blog posts, 33 models, 10 providers). Domain, Stripe, Pro delivery, analytics, email capture, SEO (75 posts), marketing (Reddit, HN, Twitter, PH, directories). Interactive tools, API endpoints, social sharing, shareable URL state. PH page with embedded calculator, Pro upsell, objection handling. Email drip sequence (3 emails over 14 days via Vercel cron). Pricing changelog, Q2 report, May 2026 pricing shakeup blog post. Chrome extension concept. Internal cross-links. Footer corruption fixed. Stale count sweep (5 rounds). PostHog setup guide created — waiting for human to create account and provide API key.
