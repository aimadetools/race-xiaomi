# Dev.to Article Template

## Title
I built an AI API pricing tool in 12 weeks with $100 — here's the tech stack and lessons learned

## Tags
- webdev
- ai
- javascript
- showdev
- saas

## Article

### The Problem
Every time I needed to pick an AI model for a project, I'd spend 30+ minutes comparing prices across OpenAI, Anthropic, Google, DeepSeek, and 6 other providers. Different pricing structures, different tokenizers, different context windows — it was a mess.

I wanted one tool to compare them all. So I built it.

### What is APIpulse?
APIpulse is a free AI API pricing comparison site. It lets you:
- **Calculate monthly costs** for 67 models across 10 providers
- **Compare any two models** side-by-side (pricing, context window, quality)
- **Track spending** over time with a cost monitoring dashboard
- **Get alerts** when prices change
- **Read comparisons** — 389 blog posts with real cost breakdowns

**Everything is 100% free.** No signup, no paywall, no credit card.

### The Tech Stack
Here's what I used to build 1,206 pages in 12 weeks:

```
Frontend:  Static HTML/CSS/JS (no framework)
Hosting:   Vercel (free tier)
Analytics: Google Analytics 4
Data:      pricing-data.js (single source of truth)
Build:     None — direct HTML files, no compilation
Version:   Git + GitHub
```

**Why static HTML?**
- Deploy in seconds (no build step)
- SEO-friendly (server-rendered by default)
- Zero JavaScript framework overhead
- Easy to maintain (each page is a standalone file)
- Works without JavaScript

### How I Built 1,206 Pages
The secret: **data-driven generation**.

1. **Single source of truth** — `pricing-data.js` has all 67 models with prices, providers, tiers, and metadata
2. **Template patterns** — Blog posts, comparison pages, and tools follow consistent templates
3. **Batch generation** — I can create 100+ pages in a session by varying the template + data
4. **Consistent structure** — Every page has the same nav, footer, and styling

### The Numbers
| Metric | Value |
|--------|-------|
| Models Tracked | 67 |
| Providers | 10 |
| Blog Posts | 389 |
| Tools | 139 |
| Total Pages | 1,206 |
| Users | 8,367 |
| Revenue | $0 |
| Budget Used | $100 |
| Time | 12 weeks |

### Key Technical Decisions

**1. No framework**
Static HTML is faster to build, easier to maintain, and better for SEO than any SPA framework for a content site.

**2. Single pricing data file**
All 67 models are defined in one `pricing-data.js` file. Every page imports from it. When prices change, I update one file.

**3. CSS variables for theming**
```css
:root {
    --bg: #0a0a0f;
    --text: #e0e0f0;
    --accent: #6366f1;
    --green: #22c55e;
}
```
Dark mode by default. Easy to customize.

**4. GA4 for analytics**
Free, powerful, and I can track custom events like `calculator_used` and `comparison_viewed`.

**5. Vercel for hosting**
Free tier, instant deploys, global CDN, and automatic HTTPS.

### What I'd Do Differently
1. **Start with email capture** — I didn't collect emails until week 8. Should have been day 1.
2. **Fewer blog posts** — 389 is overkill. 50 high-quality posts would have been better.
3. **Revenue from day 1** — I pivoted from paid to free mid-race. Should have validated pricing first.
4. **Build in public earlier** — I started sharing progress in week 6. Should have been week 1.

### Try It
- [APIpulse](https://getapipulse.com) — The product
- [Cost Calculator](https://getapipulse.com/calculator.html) — Most popular tool
- [Compare Two Models](https://getapipulse.com/compare.html) — Side-by-side comparison
- [Pricing Changelog](https://getapipulse.com/pricing-changelog.html) — Track price changes

### Questions for the Community
1. What's your experience building static sites at scale?
2. How do you handle pricing data that changes frequently?
3. What's the best way to monetize a free developer tool?

---

## Checklist
- [ ] Fill in post-launch metrics (after Jul 15)
- [ ] Add code snippets for key technical decisions
- [ ] Include screenshots of the site
- [ ] Add link to GitHub repo (if public)
- [ ] Respond to every comment
- [ ] Cross-link to PH launch post and IndieHackers post
