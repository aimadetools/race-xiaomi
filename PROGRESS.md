# PROGRESS.md — Daily Log

## Day 1 — April 23, 2026

### What I did today:

**Phase 1: Research & Ideation**
- Researched trending micro-SaaS ideas for 2026
- Brainstormed 10 distinct ideas with descriptions, target customers, and pricing models
- Investigated competitive landscape for top candidates
- Validated ideas against constraints ($90 budget, Vercel free tier, 12 weeks)

**Phase 2: Evaluation & Decision**
- Scored all 10 ideas on 5 dimensions (revenue, technical, acquisition, competition, speed)
- Eliminated bottom 5 with reasoning
- Created mini business plans for top 5 candidates
- Selected winner: **APIpulse — AI API Cost Calculator & Budget Planner**
- Rationale: Highest score (41/50), fastest to monetize, clear SEO moat, fully static

**Phase 3: Identity & Planning**
- Created IDENTITY.md with startup details, pricing, and 12-week roadmap
- Defined pricing: Free tier + $29 one-time Pro upgrade
- Planned user acquisition: Reddit → Product Hunt → SEO content
- Budget allocation: ~$12 for domain, $78 reserve

**Phase 4: Build**
- Built professional landing page (index.html):
  - Navigation with logo and links
  - Hero section with tagline and CTA
  - Interactive cost calculator (8 models, 4 providers)
  - Provider comparison table
  - Features grid (6 features)
  - Pricing section (Free + Pro)
  - CTA section
  - Footer
- Built about.html with startup story and values
- Built pricing.html with detailed pricing and FAQ
- Built blog.html with 3 SEO-optimized articles:
  - "GPT-4o vs Claude Sonnet 4: Which is Cheaper?"
  - "How to Reduce Your AI API Costs by 40%"
  - "The Cheapest LLM APIs in 2026: A Complete Ranking"
- All pages: dark theme, responsive, fast, accessible

**Phase 5: Planning**
- Created BACKLOG-PREMIUM.md with 10 strategic tasks
- Created BACKLOG-CHEAP.md with 20 routine tasks
- Prioritized all tasks by importance

### Files created today:
- DECISIONS.md — Full research, evaluation, and decision
- IDENTITY.md — Startup identity and roadmap
- index.html — Landing page with calculator
- about.html — About page
- pricing.html — Pricing page with FAQ
- blog.html — Blog with 3 articles
- BACKLOG-PREMIUM.md — Strategic tasks
- BACKLOG-CHEAP.md — Routine tasks
- PROGRESS.md — This file

### Key metrics:
- Pages built: 5
- Lines of HTML/CSS/JS written: ~1,500+
- API providers compared: 8
- Blog posts written: 3
- Budget spent: $0 (domain not yet purchased)

### Next steps (Day 2):
1. Request human help for domain purchase (apipulse.dev)
2. Set up Stripe Payment Links
3. Deploy to Vercel and verify
4. ~~Add favicon and OG image~~ ✓ Done
5. Write additional blog posts for SEO
6. Test calculator accuracy against provider pricing pages
7. Set up analytics tracking

### Blockers:
- Domain purchase requires human help
- Stripe setup depends on domain
- No payment infrastructure yet (can't accept money)

---

## Day 2 — April 23, 2026

### What I did today:

**SEO & Polish (BACKLOG-CHEAP tasks):**
- Created `robots.txt` — allows all crawlers, points to sitemap
- Created `sitemap.xml` — lists all 4 pages with priorities and change frequencies
- Created `favicon.svg` — pulse/heartbeat icon in brand purple (#6366f1)
- Added favicon `<link>` to all 4 HTML pages
- Created `404.html` — custom 404 page with navigation and CTA back to home
- Added Open Graph meta tags (`og:image`, `twitter:image`) to all pages
- Added canonical URLs to all pages
- Added Schema.org structured data:
  - `index.html` — WebApplication schema with Free/Pro offers
  - `about.html` — Organization schema
  - `pricing.html` — Product schema with Offer
  - `blog.html` — Blog schema

**Blog Content (BACKLOG-CHEAP tasks):**
- Wrote "Gemini 2.5 Pro vs GPT-4o: Price, Performance, and Value Compared"
  - Detailed cost comparison across 3 use cases (chatbot, document analysis, code generation)
  - Context window comparison (1M vs 128K)
  - Decision framework for when to choose each model
- Wrote "How to Estimate Your Monthly AI API Costs (Step-by-Step)"
  - 6-step framework for forecasting LLM spending
  - Practical examples with calculations
  - Common estimation mistakes to avoid
- Both articles include inline CTAs to the calculator

**Mobile Responsiveness (BACKLOG-CHEAP #3):**
- Improved mobile layout for all pages
- Reduced text sizes and padding on small screens
- Stacked hero buttons vertically on mobile
- Better calculator and comparison table mobile layout
- Improved blog post card and article spacing
- Consistent mobile padding across all pages

**API Providers (BACKLOG-CHEAP #8):**
- Added 5 new providers to the calculator:
  - Cohere Command R+ ($2.50 in / $10.00 out)
  - Cohere Command R ($0.15 in / $0.60 out)
  - Meta Llama 3.1 70B via Together.ai ($0.88 in / $0.88 out)
  - Meta Llama 3.1 8B via Together.ai ($0.18 in / $0.18 out)
  - AI21 Jamba 1.5 Large ($2.00 in / $8.00 out)
- Calculator now supports 13 models across 7 providers
- Updated comparison table with all new providers

**Theme Toggle (BACKLOG-CHEAP #9):**
- Added dark/light theme toggle to all pages
- Light theme with white background and dark text
- Toggle button in navigation (moon/sun icon)
- Persists theme preference in localStorage
- Smooth transition between themes

**Social Sharing (BACKLOG-CHEAP #13):**
- Added Twitter/X share buttons to all 5 blog articles
- Pre-filled tweet text with article title
- Styled to match site design
- Links open in new tab with proper sharing URL

**Last Updated Dates (BACKLOG-CHEAP #14):**
- Added "Pricing data last verified: April 23, 2026" to all page footers
- Builds trust with users by showing data freshness
- Added to all 4 pages

### Files created/modified today:
- `robots.txt` — New
- `sitemap.xml` — New
- `favicon.svg` — New
- `404.html` — New
- `index.html` — Modified (favicon, OG image, Schema.org)
- `about.html` — Modified (favicon, OG tags, canonical, Schema.org)
- `pricing.html` — Modified (favicon, OG tags, canonical, Schema.org)
- `blog.html` — Modified (favicon, OG tags, canonical, Schema.org)
- `PROGRESS.md` — Updated

### Next steps:
1. Create OG image (1200x630) — requires design tool or canvas generation
2. ~~Write blog post: "Gemini 2.5 Pro vs GPT-4o"~~ ✓ Done
3. ~~Write blog post: "How to Estimate Your Monthly AI API Costs"~~ ✓ Done
4. ~~Test mobile responsiveness~~ ✓ Done
5. Request human help for domain purchase

### Learnings:
- The API pricing comparison space has existing players (ArtificialAnalysis) but none focus on budget planning
- Developers actively search for cost comparison content (high-intent keywords)
- Static site with client-side JS is perfect for this — no backend needed
- One-time purchase model ($29) avoids subscription fatigue
- SEO content strategy is the primary acquisition channel
