// Vercel Serverless Function: Markdown-friendly Pricing Badge (SVG)
// Generates an SVG badge showing AI model pricing — works in most markdown renderers.
// Usage: <img src="https://getapipulse.com/api/badge-md?model=openai-gpt5" alt="GPT-5 Pricing" />
// Params: model (required), theme (light|dark, default: dark)
// Note: GitHub blocks SVG in img tags. Use this on GitLab, Discord, Slack, Notion, etc.
// For GitHub, use the PNG version: /api/badge-png?model=openai-gpt5

const MODELS = {
  'openai-gpt55': { name: 'GPT-5.5', provider: 'OpenAI', input: 5.00, output: 30.00, tier: 'Premium' },
  'openai-gpt5': { name: 'GPT-5', provider: 'OpenAI', input: 1.25, output: 10.00, tier: 'Premium' },
  'openai-gpt5-mini': { name: 'GPT-5 mini', provider: 'OpenAI', input: 0.25, output: 2.00, tier: 'Budget' },
  'openai-gpt54': { name: 'GPT-5.4', provider: 'OpenAI', input: 2.50, output: 15.00, tier: 'Mid' },
  'openai-gpt54-mini': { name: 'GPT-5.4 mini', provider: 'OpenAI', input: 0.75, output: 4.50, tier: 'Budget' },
  'openai-gpt54-nano': { name: 'GPT-5.4 nano', provider: 'OpenAI', input: 0.20, output: 1.25, tier: 'Budget' },
  'openai-gpt4o': { name: 'GPT-4o', provider: 'OpenAI', input: 2.50, output: 10.00, tier: 'Mid' },
  'openai-gpt4o-mini': { name: 'GPT-4o mini', provider: 'OpenAI', input: 0.15, output: 0.60, tier: 'Budget' },
  'openai-gpt-oss-120b': { name: 'GPT-oss 120B', provider: 'OpenAI', input: 0.15, output: 0.60, tier: 'Budget' },
  'anthropic-opus48': { name: 'Claude Opus 4.8', provider: 'Anthropic', input: 5.00, output: 25.00, tier: 'Premium' },
  'anthropic-sonnet5': { name: 'Claude Sonnet 5', provider: 'Anthropic', input: 2.00, output: 10.00, tier: 'Mid' },
  'anthropic-sonnet46': { name: 'Claude Sonnet 4.6', provider: 'Anthropic', input: 3.00, output: 15.00, tier: 'Mid' },
  'anthropic-haiku': { name: 'Claude Haiku 4.5', provider: 'Anthropic', input: 1.00, output: 5.00, tier: 'Budget' },
  'google-gemini35-flash': { name: 'Gemini 3.5 Flash', provider: 'Google', input: 1.50, output: 9.00, tier: 'Mid' },
  'google-gemini3-pro': { name: 'Gemini 3.1 Pro', provider: 'Google', input: 2.00, output: 12.00, tier: 'Mid' },
  'google-gemini3-flash': { name: 'Gemini 3 Flash', provider: 'Google', input: 0.50, output: 3.00, tier: 'Budget' },
  'google-pro': { name: 'Gemini 2.5 Pro', provider: 'Google', input: 1.25, output: 10.00, tier: 'Mid' },
  'deepseek-v4-pro': { name: 'DeepSeek V4 Pro', provider: 'DeepSeek', input: 0.44, output: 0.87, tier: 'Budget' },
  'deepseek-v4-flash': { name: 'DeepSeek V4 Flash', provider: 'DeepSeek', input: 0.14, output: 0.28, tier: 'Budget' },
  'mistral-large': { name: 'Mistral Large 3', provider: 'Mistral', input: 0.50, output: 1.50, tier: 'Budget' },
  'mistral-small': { name: 'Mistral Small 4', provider: 'Mistral', input: 0.15, output: 0.60, tier: 'Budget' },
  'llama-4-scout': { name: 'Llama 4 Scout', provider: 'Meta', input: 0.18, output: 0.59, tier: 'Budget' },
  'xai-grok3': { name: 'Grok 4.3', provider: 'xAI', input: 1.25, output: 2.50, tier: 'Mid' },
};

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

  const { model, theme = 'dark' } = req.query || {};

  if (!model || !MODELS[model]) {
    return res.status(400).json({
      error: 'Invalid model',
      validModels: Object.keys(MODELS).join(', '),
      usage: 'https://getapipulse.com/api/badge-md?model=openai-gpt5'
    });
  }

  const m = MODELS[model];
  const isDark = theme !== 'light';

  const bg = isDark ? '#0f172a' : '#ffffff';
  const fg = isDark ? '#e2e8f0' : '#1e293b';
  const muted = isDark ? '#94a3b8' : '#64748b';
  const border = isDark ? '#1e293b' : '#e2e8f0';
  const tierBg = m.tier === 'Premium' ? '#7c3aed' : m.tier === 'Mid' ? '#3b82f6' : '#10b981';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="120" viewBox="0 0 400 120">
  <defs>
    <style>
      .bg { fill: ${bg}; stroke: ${border}; stroke-width: 1; rx: 12; }
      .provider { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 11px; fill: ${muted}; text-transform: uppercase; letter-spacing: 1px; }
      .name { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 18px; font-weight: 700; fill: ${fg}; }
      .label { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 10px; fill: ${muted}; text-transform: uppercase; }
      .price { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 15px; font-weight: 700; fill: ${fg}; }
      .unit { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 10px; fill: ${muted}; }
      .tier { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 11px; font-weight: 700; fill: white; }
      .brand { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 9px; fill: ${muted}; }
    </style>
  </defs>
  <rect class="bg" x="0.5" y="0.5" width="399" height="119" />
  <text class="provider" x="20" y="28">${m.provider}</text>
  <text class="name" x="20" y="52">${m.name}</text>
  <text class="label" x="20" y="76">Input</text>
  <text class="price" x="20" y="94">$${m.input.toFixed(2)}</text>
  <text class="label" x="100" y="76">Output</text>
  <text class="price" x="100" y="94">$${m.output.toFixed(2)}</text>
  <text class="unit" x="20" y="110">per 1M tokens</text>
  <rect x="310" y="38" width="70" height="24" rx="12" fill="${tierBg}" />
  <text class="tier" x="345" y="54" text-anchor="middle">${m.tier}</text>
  <text class="brand" x="345" y="80" text-anchor="middle">APIpulse</text>
</svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Content-Length', Buffer.byteLength(svg));
  return res.status(200).send(svg);
};
