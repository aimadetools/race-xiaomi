# APIpulse Widget — Quick Start Guide

Drop-in widgets for live AI API pricing. No API key needed. Auto-updating. Free.

## 1. Pricing Table

Shows pricing for all models from selected providers.

```html
<!-- OpenAI + Anthropic pricing table -->
<div class="apipulse-widget" data-type="table" data-providers="openai,anthropic"></div>
<script src="https://getapipulse.com/widget.js" async></script>
```

### Available Providers
| Provider | Slug |
|---|---|
| OpenAI | `openai` |
| Anthropic | `anthropic` |
| Google | `google` |
| DeepSeek | `deepseek` |
| Mistral | `mistral` |
| Cohere | `cohere` |
| Meta (Together.ai) | `together` |
| Moonshot | `moonshot` |
| xAI | `xai` |
| AI21 | `ai21` |

### Options
- `data-providers` — Comma-separated provider slugs
- `data-tier` — Filter by tier: `budget`, `mid`, `premium`
- `data-theme` — `dark` (default) or `light`

## 2. Model Badge

Compact badge showing a single model's input/output price.

```html
<!-- GPT-4o Mini badge -->
<div class="apipulse-widget" data-type="badge" data-model="openai-gpt4o-mini"></div>
<script src="https://getapipulse.com/widget.js" async></script>
```

### Popular Model IDs

**OpenAI**
| Model | ID |
|---|---|
| GPT-5.5 | `openai-gpt55` |
| GPT-5 | `openai-gpt5` |
| GPT-5 mini | `openai-gpt5-mini` |
| GPT-4o | `openai-gpt4o` |
| GPT-4o mini | `openai-gpt4o-mini` |

**Anthropic**
| Model | ID |
|---|---|
| Claude Opus 4.7 | `anthropic-opus47` |
| Claude Sonnet 4.6 | `anthropic-sonnet46` |
| Claude Sonnet 4 | `anthropic-sonnet` |
| Claude Haiku 4.5 | `anthropic-haiku` |

**Google**
| Model | ID |
|---|---|
| Gemini 3.1 Pro | `google-gemini3-pro` |
| Gemini 3.5 Flash | `google-gemini35-flash` |
| Gemini 2.5 Pro | `google-pro` |
| Gemini 2.0 Flash | `google-flash` |

**DeepSeek**
| Model | ID |
|---|---|
| DeepSeek V4 Pro | `deepseek-v4-pro` |
| DeepSeek V4 Flash | `deepseek-v4-flash` |
| DeepSeek V3.2 | `deepseek-v32` |

**Others**
| Model | ID |
|---|---|
| Mistral Large 3 | `mistral-large` |
| Mistral Medium 3.5 | `mistral-medium` |
| Grok 4.3 | `xai-grok3` |
| Llama 4 Maverick | `llama-4-maverick` |
| Cohere Command A | `cohere-command-a` |
| AI21 Jamba 1.7 Large | `ai21-jamba17` |

## 3. Comparison Chart

Side-by-side pricing comparison of multiple models.

```html
<!-- Compare top frontier models -->
<div class="apipulse-widget" data-type="compare" data-models="openai-gpt5,anthropic-sonnet,google-pro,deepseek-v4-pro"></div>
<script src="https://getapipulse.com/widget.js" async></script>
```

## 4. Light Theme

Add `data-theme="light"` to any widget:

```html
<div class="apipulse-widget" data-type="table" data-providers="openai,google" data-theme="light"></div>
<script src="https://getapipulse.com/widget.js" async></script>
```

## 5. Budget Tier Filter

Show only budget-friendly models:

```html
<div class="apipulse-widget" data-type="table" data-providers="openai,anthropic,google" data-tier="budget"></div>
<script src="https://getapipulse.com/widget.js" async></script>
```

## Full Attribute Reference

| Attribute | Values | Used With |
|---|---|---|
| `data-type` | `table`, `badge`, `compare` | All |
| `data-providers` | Comma-separated provider slugs | `table` |
| `data-model` | Single model ID | `badge` |
| `data-models` | Comma-separated model IDs | `compare` |
| `data-theme` | `dark`, `light` | All |
| `data-tier` | `budget`, `mid`, `premium` | `table` |

## Features

- **Zero config** — Just add a div + script tag
- **Auto-updating** — Fetches live pricing from APIpulse API
- **1-hour cache** — Uses localStorage to minimize requests
- **Responsive** — Works on any screen size
- **No API key needed** — Free for everyone
- **39 models** across 10 providers

## Links

- **Widget docs:** https://getapipulse.com/embed.html
- **API docs:** https://getapipulse.com/api-docs.html
- **Live pricing API:** https://getapipulse.com/api/pricing
- **Full model list:** https://getapipulse.com/pricing.html
