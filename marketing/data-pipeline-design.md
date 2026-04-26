# Multi-Provider Data Pipeline Design

## Problem

APIpulse tracks pricing for 35 models across 10 providers. Pricing data is currently:
- Hardcoded in 9 HTML files (duplicated inline JavaScript)
- Updated manually when providers change prices
- No automated detection of pricing changes
- No single source of truth

## Current State

| Provider | Models | Pricing Page | API? |
|----------|--------|--------------|------|
| OpenAI | 6 | openai.com/api/pricing | Yes (but no public pricing API) |
| Anthropic | 3 | anthropic.com/pricing | No |
| Google | 2 | ai.google.dev/pricing | No |
| Mistral | 2 | mistral.ai/pricing | No |
| Cohere | 2 | cohere.com/pricing | No |
| Together.ai | 2 | together.ai/pricing | No |
| AI21 | 1 | ai21.com/pricing | No |

## Constraints

- Static site on Vercel free tier (no server-side cron jobs)
- $90 budget (mostly spent on domain)
- No paid APIs or services
- Must not violate provider ToS

## Recommended Approach: Hybrid Manual + Community

### Phase 1: Centralized Data File (Immediate)

Create a single `pricing-data.js` file as the source of truth:
- All 35+ models with pricing, context windows, tier classification
- Export functions for different page needs (calculator, comparison, index)
- Pages import from this file instead of inline data
- **Benefit:** Update pricing in ONE file instead of 9

### Phase 2: Monthly Verification Workflow (Ongoing)

Establish a monthly process:
1. **Week 1 of each month:** Check each provider's pricing page
2. Compare against current `pricing-data.js` values
3. Update any changed prices
4. Update `verified` dates in the data file
5. Commit and deploy

**Time estimate:** 30 minutes/month

### Phase 3: Change Detection (Future)

Set up lightweight monitoring:
- Use a free service (e.g., Visualping, Distill.io) to monitor provider pricing pages
- Get email alerts when pages change
- Only investigate when alerted (no false positives from regular checks)

**Cost:** $0 (free tier of monitoring services)

### Phase 4: Community Contributions (Future)

If the site gets significant traffic:
- Add a "Report pricing error" button on pricing pages
- Users can submit corrections via the existing email subscription
- Review and incorporate accurate corrections

## Data Schema

```javascript
// pricing-data.js — Single source of truth for all API pricing
const API_MODELS = [
    {
        id: 'openai-gpt5',
        name: 'GPT-5',
        provider: 'OpenAI',
        providerSlug: 'openai',
        tier: 'Premium',
        input: 10.00,   // per 1M tokens
        output: 30.00,  // per 1M tokens
        context: '256K',
        verified: '2026-04-25',
        notes: 'Latest flagship model'
    },
    // ... all 35 models
];

// Helper functions
function getModelById(id) { ... }
function getModelsByProvider(provider) { ... }
function getModelsByTier(tier) { ... }
function getProviders() { ... }
function getCalculatorData() { ... }  // Returns {name, input, output} format
function getComparisonData() { ... }  // Returns {name, provider, input, output, context} format
```

## Update Checklist (Monthly)

- [ ] Check openai.com/api/pricing for changes
- [ ] Check anthropic.com/pricing for changes
- [ ] Check ai.google.dev/pricing for changes
- [ ] Check mistral.ai/pricing for changes
- [ ] Check cohere.com/pricing for changes
- [ ] Check together.ai/pricing for changes
- [ ] Check ai21.com/pricing for changes
- [ ] Update pricing-data.js with any changes
- [ ] Update verified dates
- [ ] Run site audit to verify consistency
- [ ] Commit and deploy

## Risk Assessment

| Risk | Likelihood | Mitigation |
|------|:-:|---|
| Provider changes price without notice | Medium | Monthly checks + monitoring alerts |
| Pricing page URL changes | Low | Update monitoring targets |
| Provider adds new model | Medium | Check during monthly review |
| Provider removes model | Low | Mark as deprecated, keep for historical reference |
| Inconsistent update across pages | High (now) | Centralized data file eliminates this |

## Decision

**Selected approach:** Phase 1 (centralized data) + Phase 2 (monthly workflow)

**Why:**
- Zero cost
- Immediately actionable
- Eliminates the #1 maintenance risk (data inconsistency)
- Monthly 30-min check is sustainable
- Can add monitoring later if needed

**Not selected:**
- Web scraping: Fragile, may violate ToS, needs backend
- Provider APIs: Don't exist for pricing data
- Community contributions: Too early, not enough users
- Automated monitoring: Can add later, manual is fine for now
