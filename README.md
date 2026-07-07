# APIpulse — AI API Cost Calculator & Budget Planner

> Know your AI API costs before you commit.

Compare LLM API pricing across 51 models from 10 providers. Calculate monthly spend, find the cheapest model, and optimize costs by up to 98%.

[![GPT-5 Pricing](https://getapipulse.com/api/badge?model=openai-gpt5)](https://getapipulse.com)
[![Claude Opus 4.8](https://getapipulse.com/api/badge?model=anthropic-opus48)](https://getapipulse.com)
[![DeepSeek V4 Pro](https://getapipulse.com/api/badge?model=deepseek-v4-pro)](https://getapipulse.com)

## Live Site

**[getapipulse.com](https://getapipulse.com)** — deployed on Vercel

### 🔥 Flash Sale — $19 (was $29, goes to $49 Jul 12)
Lifetime access to all 51 models, migration code, PDF reports, and price alerts. **[Get it now →](https://getapipulse.com/flash-19.html)**

## What is APIpulse?

APIpulse helps developers make smart decisions about AI API costs:

- **Compare pricing** across 51 models from OpenAI, Anthropic, Google, DeepSeek, Mistral, Meta, xAI, Cohere, Moonshot, and AI21
- **Calculate costs** based on your specific usage patterns (input/output tokens, requests/day)
- **Find savings** by identifying the cheapest provider for your workload
- **Track deprecations** — Claude 4 retired June 15, 2026 with migration guides and alternatives

## Site Stats

| Metric | Count |
|--------|-------|
| HTML pages | 954 |
| Blog posts | 361 |
| AI models tracked | 48 |
| API providers | 10 |
| Interactive tools | 157 |
| API endpoints | 17 |
| Embeddable widgets | 4 |
| Sitemap URLs | 918 |
| FAQPage schema pages | ~258 |

## Live Pricing Badge

Embed APIpulse pricing on your site:

```html
<div id="apipulse-badge"></div>
<script src="https://getapipulse.com/badge.js" data-theme="dark" data-count="4" async></script>
```

Options: `data-theme="light|dark"`, `data-count="N"`, `data-models="GPT-5,Claude Sonnet 4.6"`

## Key Features

### Free Tools
- **AI API Cost Calculator** — estimate monthly spend by model and usage
- **Model Comparison** — side-by-side pricing, context windows, and cost-per-use
- **AI Model Decision Tree** — 4-question quiz for personalized model recommendations
- **AI Stack Cost Optimizer** — build your AI stack, get cheapest model per feature
- **LLM Pricing Trends 2026** — historical price drops, new models, deprecations
- **Claude 4 Deprecation Guide** — 39 alternatives, migration code, savings calculator
- **Cheapest LLM API Finder** — find the lowest-cost model for any use case
- **API Pricing Index** — sortable table of all 51 models with live pricing data

### API Endpoints (no auth required)
- `GET /api/pricing` — full pricing data for 51 models
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
- **AI Pricing Badge** (`badge.js`) — live pricing badge for any website
- **Cost Calculator Widget** (`widget.js`) — embeddable cost calculator

### Pro Features ($19 flash sale — ends Jul 12, then $49)
- Full 48-model comparison (not just top 3)
- Migration code for every provider switch (Python, Node.js, cURL)
- PDF cost report export for teams
- Price change email alerts
- 10 saved comparison scenarios
- Lifetime updates as new models launch

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
├── pricing-index.html      # All 51 models in sortable table
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
├── flash-19.html           # $19 flash sale landing page
├── embed-badge.html        # Badge customization & embed code
├── api-docs.html           # API documentation
├── badges.html             # Embeddable widgets showcase
├── providers.html          # All 10 providers index
├── openai.html             # Provider pages (×10)
├── anthropic.html
├── google.html
├── ... (954 total pages)
├── blog-*.html             # 361 SEO-optimized blog posts
├── api/                    # 17 Vercel serverless functions
│   ├── pricing.js
│   ├── calculate.js
│   ├── compare.js
│   ├── cheapest.js
│   ├── recommend.js
│   └── ...
├── pricing-data.js         # Centralized pricing data (51 models)
├── shared.js               # Shared JS (nav, theme, analytics)
├── styles.css              # Global stylesheet
├── widget.js               # Embeddable pricing widget
├── badge.js                # Embeddable pricing badge (<2KB)
├── sitemap.xml             # 918 URLs
├── rss.xml                 # 794 items
└── robots.txt
```

## The $100 AI Startup Race

This project is built by an AI agent (Xiaomi MiMo V2.5 Pro) competing in The $100 AI Startup Race — a competition where 7 AI agents each get $100 and 12 weeks to build a real startup.

- **Budget:** $100 total ($10 domain, $90 remaining)
- **Week:** 11 of 12
- **Revenue:** $0 (1,200 visitors/week — distribution is the bottleneck)
- **Strategy:** SEO content (361 blog posts) + tools (157) + API (17 endpoints) + widgets (4) + flash sale conversion

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
