# APIpulse — AI API Cost Calculator & Budget Planner

> Know your AI API costs before you commit.

Compare LLM API pricing across 42 models from 10 providers. Calculate monthly spend, find the cheapest model, and optimize costs by up to 40%.

## Live Site

**[getapipulse.com](https://getapipulse.com)** — deployed on Vercel

## What is APIpulse?

APIpulse helps developers make smart decisions about AI API costs:

- **Compare pricing** across 42 models from OpenAI, Anthropic, Google, DeepSeek, Mistral, Meta, xAI, Cohere, Moonshot, and AI21
- **Calculate costs** based on your specific usage patterns (input/output tokens, requests/day)
- **Find savings** by identifying the cheapest provider for your workload
- **Track deprecations** — Claude 4 retired June 15, 2026 with migration guides and alternatives

## Site Stats

| Metric | Count |
|--------|-------|
| HTML pages | 657 |
| Blog posts | 324 |
| AI models tracked | 42 |
| API providers | 10 |
| Interactive tools | 84 |
| API endpoints | 12 |
| Embeddable widgets | 2 |
| Sitemap URLs | 651 |
| FAQPage schema pages | ~300 |

## Key Features

### Free Tools
- **AI API Cost Calculator** — estimate monthly spend by model and usage
- **Model Comparison** — side-by-side pricing, context windows, and cost-per-use
- **AI Model Decision Tree** — 4-question quiz for personalized model recommendations
- **AI Stack Cost Optimizer** — build your AI stack, get cheapest model per feature
- **LLM Pricing Trends 2026** — historical price drops, new models, deprecations
- **Claude 4 Deprecation Guide** — 39 alternatives, migration code, savings calculator
- **Cheapest LLM API Finder** — find the lowest-cost model for any use case
- **API Pricing Index** — sortable table of all 42 models with live pricing data

### API Endpoints (no auth required)
- `GET /api/pricing` — full pricing data for 42 models
- `GET /api/calculate` — single-model cost estimation
- `GET /api/calculate-multi` — multi-model cost comparison
- `GET /api/cheapest` — find cheapest model for a workload
- `GET /api/badge` — SVG pricing badge for embedding
- `GET /api/compare` — compare 2+ models
- `GET /api/recommend` — model recommendation engine
- `GET /api/cost-report` — formatted cost report

### Embeddable Widgets
- **Pricing Widget** (`widget.js`) — drop-in pricing table/badge/compare for any site
- **Report Card** (`embed-report.html`) — iframe-embeddable cost report

### Pro Features ($29 one-time)
- Advanced cost projections
- Team usage modeling
- Priority data updates

## Tech Stack

- **Frontend:** Static HTML/CSS/JS (no framework, no build step)
- **Hosting:** Vercel (free tier)
- **Payment:** Stripe Payment Links (one-time $29)
- **Analytics:** GA4 (G-0CEP7S9Y3J) + Vercel Analytics
- **Email:** Resend (newsletter, drip campaigns)
- **Data:** Centralized `pricing-data.js` (single source of truth)

## Project Structure

```
├── index.html              # Landing page with cost calculator
├── calculator.html         # Standalone cost calculator
├── compare.html            # Model comparison tool
├── pricing-index.html      # All 39 models in sortable table
├── pricing.html            # Free vs Pro pricing
├── pro.html                # Pro access gate
├── model-decision-tree.html # Interactive quiz
├── ai-stack-cost-optimizer.html
├── llm-pricing-trends-2026.html
├── claude-4-deprecation.html
├── claude-deprecation-calculator.html
├── claude-4-migration-tool.html
├── claude-4-migration-checklist.html
├── cheapest-llm-api-2026.html
├── api-docs.html           # API documentation
├── badges.html             # Embeddable widgets showcase
├── providers.html          # All 10 providers index
├── openai.html             # Provider pages (×10)
├── anthropic.html
├── google.html
├── ... (651 total pages)
├── blog-*.html             # 319 SEO-optimized blog posts
├── api/                    # 12 Vercel serverless functions
│   ├── pricing.js
│   ├── calculate.js
│   ├── compare.js
│   ├── cheapest.js
│   ├── recommend.js
│   └── ...
├── pricing-data.js         # Centralized pricing data (42 models)
├── shared.js               # Shared JS (nav, theme, analytics)
├── styles.css              # Global stylesheet
├── widget.js               # Embeddable pricing widget
├── sitemap.xml             # 644 URLs
├── rss.xml                 # 519 items
└── robots.txt
```

## The $100 AI Startup Race

This project is built by an AI agent (Xiaomi MiMo V2.5 Pro) competing in The $100 AI Startup Race — a competition where 7 AI agents each get $100 and 12 weeks to build a real startup.

- **Budget:** $100 total ($10 domain, $90 remaining)
- **Week:** 9 of 12
- **Revenue:** $0 (blocked on distribution)
- **Strategy:** SEO content (319 blog posts) + tools (84) + API (12 endpoints) + widgets

## Running Locally

No build step needed. Serve the static files:

```bash
# Any static server works
npx serve .
# or
python3 -m http.server 8000
```

For API endpoints, deploy to Vercel or use `vercel dev`.

## License

Built for the $100 AI Startup Race. All rights reserved.
