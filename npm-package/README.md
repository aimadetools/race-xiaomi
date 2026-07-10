# apipulse

LLM API pricing data from [APIpulse](https://getapipulse.com). Compare costs across **64 models** from **10 providers**.

## Quick Start

```bash
npx apipulse
```

Shows all 64 LLM models sorted by cost, right in your terminal. (Excludes deprecated models.)

## CLI Usage

```bash
# Show all models
npx apipulse

# Find cheapest model for your usage
npx apipulse cheapest --input 2000 --output 1000 --rpd 5000

# Calculate cost for a specific model
npx apipulse cost openai-gpt4o-mini --rpd 10000
```

## Library Usage

```js
const { getPricing, getCheapest, calculateCost, compare } = require('apipulse');

// Get all pricing data
const data = await getPricing();
console.log(data.models.length); // 64

// Find cheapest model for your workload
const cheapest = await getCheapest({
  inputTokens: 2000,
  outputTokens: 1000,
  requestsPerDay: 5000
});

// Calculate cost for a specific model
const cost = await calculateCost({
  model: 'anthropic-sonnet46',
  inputTokens: 3000,
  outputTokens: 800,
  requestsPerDay: 1000
});
console.log(`$${cost.monthlyCost}/month`);

// Compare multiple models
const comparison = await compare({
  models: ['openai-gpt4o-mini', 'anthropic-haiku', 'google-flash'],
  inputTokens: 1500,
  outputTokens: 500,
  requestsPerDay: 2000
});
```

## Supported Providers

| Provider | Models |
|----------|--------|
| OpenAI | GPT-5.5, GPT-5.5 Pro, GPT-5.3 Codex, GPT-5, GPT-5 mini, GPT-oss 120B, GPT-oss 20B, GPT-4o, GPT-4o mini |
| Anthropic | Claude Opus 4.8, Claude Opus 4.7, Claude Sonnet 4.6, Claude Haiku 4.5 |
| Google | Gemini 3.1 Pro, Gemini 3.5 Flash, Gemini 2.5 Pro, Gemini 2.0 Flash, Gemini 2.0 Flash Lite |
| DeepSeek | V4 Pro, V4 Flash, V3.2 |
| Mistral | Large 3, Medium 3.5, Small 4 |
| Cohere | Command A, Command R+, Command R |
| Meta | Llama 4 Scout, Llama 4 Maverick, Llama 3.1 70B, Llama 3.1 8B |
| Moonshot | Kimi K2.6 |
| xAI | Grok 4.3, Grok Build 0.1 |
| AI21 | Jamba 1.7 Large, Jamba 1.5 Large |

## API

This package wraps the [APIpulse API](https://getapipulse.com/api-docs.html). No API key required.

### `getPricing()`
Returns all 64 models with pricing data.

### `getCheapest({ inputTokens, outputTokens, requestsPerDay })`
Returns models ranked by monthly cost for your workload.

### `calculateCost({ model, inputTokens, outputTokens, requestsPerDay })`
Returns detailed cost breakdown for a specific model.

### `compare({ models, inputTokens, outputTokens, requestsPerDay })`
Compare multiple models side by side.

### `getBadge(modelId)`
Returns an SVG pricing badge for embedding.

## Links

- [APIpulse](https://getapipulse.com) — Compare AI API pricing
- [Cost Calculator](https://getapipulse.com/calculator.html) — Interactive calculator
- [Pricing Map](https://getapipulse.com/pricing-map.html) — Visual comparison
- [API Docs](https://getapipulse.com/api-docs.html) — Full API reference

## License

MIT
