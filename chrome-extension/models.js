// APIpulse Chrome Extension — Embedded Pricing Data
// Synced with pricing-data.js from getapipulse.com
// Last verified: Jun 27, 2026

const MODELS = [
  // OpenAI
  { name: 'GPT-5.5', provider: 'OpenAI', tier: 'Premium', input: 5.00, output: 30.00, context: '1.05M' },
  { name: 'GPT-5.5 Pro', provider: 'OpenAI', tier: 'Premium', input: 30.00, output: 180.00, context: '1.05M' },
  { name: 'GPT-5.3 Codex', provider: 'OpenAI', tier: 'Mid', input: 1.75, output: 14.00, context: '400K' },
  { name: 'GPT-5', provider: 'OpenAI', tier: 'Premium', input: 1.25, output: 10.00, context: '272K' },
  { name: 'GPT-5 mini', provider: 'OpenAI', tier: 'Budget', input: 0.25, output: 2.00, context: '272K' },
  { name: 'GPT-oss 120B', provider: 'OpenAI', tier: 'Budget', input: 0.15, output: 0.60, context: '128K' },
  { name: 'GPT-oss 20B', provider: 'OpenAI', tier: 'Budget', input: 0.08, output: 0.35, context: '128K' },
  { name: 'GPT-4o', provider: 'OpenAI', tier: 'Mid', input: 2.50, output: 10.00, context: '128K' },
  { name: 'GPT-4o mini', provider: 'OpenAI', tier: 'Budget', input: 0.15, output: 0.60, context: '128K' },
  { name: 'GPT-5.4', provider: 'OpenAI', tier: 'Mid', input: 2.50, output: 15.00, context: '400K' },
  { name: 'GPT-5.4 mini', provider: 'OpenAI', tier: 'Budget', input: 0.75, output: 4.50, context: '400K' },
  { name: 'GPT-5.4 nano', provider: 'OpenAI', tier: 'Budget', input: 0.20, output: 1.25, context: '400K' },
  { name: 'GPT-5.4 Pro', provider: 'OpenAI', tier: 'Premium', input: 30.00, output: 180.00, context: '400K' },
  // Anthropic
  { name: 'Claude Opus 4.8', provider: 'Anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '1M' },
  { name: 'Claude Opus 4.7', provider: 'Anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '1M' },
  { name: 'Claude 4 Opus', provider: 'Anthropic', tier: 'Premium', input: 15.00, output: 75.00, context: '200K', deprecated: true },
  { name: 'Claude Sonnet 4.6', provider: 'Anthropic', tier: 'Mid', input: 3.00, output: 15.00, context: '1M' },
  { name: 'Claude Sonnet 4', provider: 'Anthropic', tier: 'Mid', input: 3.00, output: 15.00, context: '200K', deprecated: true },
  { name: 'Claude Haiku 4.5', provider: 'Anthropic', tier: 'Budget', input: 1.00, output: 5.00, context: '200K' },
  { name: 'Claude Fable 5', provider: 'Anthropic', tier: 'Premium', input: 10.00, output: 50.00, context: '1M' },
  { name: 'Claude Mythos 5', provider: 'Anthropic', tier: 'Premium', input: 10.00, output: 50.00, context: '1M' },
  // Google
  { name: 'Gemini 3.5 Flash', provider: 'Google', tier: 'Mid', input: 1.50, output: 9.00, context: '1M' },
  { name: 'Gemini 3.1 Flash-Lite', provider: 'Google', tier: 'Budget', input: 0.25, output: 1.50, context: '1M' },
  { name: 'Gemini 3.1 Pro', provider: 'Google', tier: 'Mid', input: 2.00, output: 12.00, context: '1M' },
  { name: 'Gemini 3 Flash', provider: 'Google', tier: 'Budget', input: 0.50, output: 3.00, context: '1M' },
  { name: 'Gemini 2.5 Pro', provider: 'Google', tier: 'Mid', input: 1.25, output: 10.00, context: '1M' },
  { name: 'Gemini 2.5 Flash-Lite', provider: 'Google', tier: 'Budget', input: 0.10, output: 0.40, context: '1M' },
  { name: 'Gemini 2.0 Flash', provider: 'Google', tier: 'Budget', input: 0.10, output: 0.40, context: '1M', deprecated: true },
  { name: 'Gemini 2.0 Flash Lite', provider: 'Google', tier: 'Budget', input: 0.075, output: 0.30, context: '1M', deprecated: true },
  // DeepSeek
  { name: 'DeepSeek V4 Pro', provider: 'DeepSeek', tier: 'Budget', input: 0.435, output: 0.87, context: '1M' },
  { name: 'DeepSeek V4 Flash', provider: 'DeepSeek', tier: 'Budget', input: 0.14, output: 0.28, context: '1M' },
  { name: 'DeepSeek V3.2', provider: 'DeepSeek', tier: 'Budget', input: 0.23, output: 0.34, context: '128K' },
  { name: 'DeepSeek V3', provider: 'DeepSeek', tier: 'Budget', input: 0.27, output: 1.10, context: '128K', deprecated: true },
  // Mistral
  { name: 'Mistral Large 3', provider: 'Mistral', tier: 'Budget', input: 0.50, output: 1.50, context: '262K' },
  { name: 'Mistral Medium 3.5', provider: 'Mistral', tier: 'Mid', input: 1.50, output: 7.50, context: '128K' },
  { name: 'Mistral Small 4', provider: 'Mistral', tier: 'Budget', input: 0.10, output: 0.30, context: '128K' },
  // Cohere
  { name: 'Command A', provider: 'Cohere', tier: 'Mid', input: 2.50, output: 10.00, context: '128K' },
  { name: 'Command R+', provider: 'Cohere', tier: 'Mid', input: 2.50, output: 10.00, context: '128K' },
  { name: 'Command R', provider: 'Cohere', tier: 'Budget', input: 0.50, output: 1.50, context: '128K' },
  // Meta (Together.ai)
  { name: 'Llama 4 Scout', provider: 'Meta (Together.ai)', tier: 'Budget', input: 0.18, output: 0.59, context: '1M' },
  { name: 'Llama 4 Maverick', provider: 'Meta (Together.ai)', tier: 'Budget', input: 0.27, output: 0.85, context: '1M' },
  { name: 'Llama 3.1 70B', provider: 'Meta (Together.ai)', tier: 'Mid', input: 0.88, output: 0.88, context: '128K' },
  { name: 'Llama 3.1 8B', provider: 'Meta (Together.ai)', tier: 'Budget', input: 0.10, output: 0.10, context: '128K' },
  // Moonshot (Kimi)
  { name: 'Kimi K2.6', provider: 'Moonshot', tier: 'Budget', input: 0.95, output: 4.00, context: '256K' },
  // xAI
  { name: 'Grok 4.3', provider: 'xAI', tier: 'Mid', input: 1.25, output: 2.50, context: '1M' },
  { name: 'Grok Build 0.1', provider: 'xAI', tier: 'Budget', input: 0.30, output: 0.50, context: '256K' },
  // AI21
  { name: 'Jamba 1.7 Large', provider: 'AI21', tier: 'Mid', input: 2.00, output: 8.00, context: '256K' },
  { name: 'Jamba 1.5 Large', provider: 'AI21', tier: 'Mid', input: 2.00, output: 8.00, context: '256K', deprecated: true },
];
