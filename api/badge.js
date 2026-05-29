// Vercel Serverless Function: AI API Pricing Badge
// Returns an SVG badge showing model pricing — like shields.io for AI costs
// Embed in READMEs, docs, blogs to show live pricing
//
// Usage:
//   GET /api/badge?model=openai-gpt5
//   GET /api/badge?model=anthropic-sonnet&style=flat
//   GET /api/badge?model=google-flash&format=md  (returns markdown)
//   GET /api/badge?model=deepseek-v4-pro&format=url (returns image URL)
//
// Embed examples:
//   Markdown: ![GPT-5 Price](https://getapipulse.com/api/badge?model=openai-gpt5)
//   HTML: <img src="https://getapipulse.com/api/badge?model=openai-gpt5" alt="GPT-5 Pricing">
//   README: [![GPT-5](https://getapipulse.com/api/badge?model=openai-gpt5)](https://getapipulse.com)

const API_MODELS = {
    'openai-gpt55': { name: 'GPT-5.5', provider: 'OpenAI', input: 5.00, output: 30.00 },
    'openai-gpt55-pro': { name: 'GPT-5.5 Pro', provider: 'OpenAI', input: 30.00, output: 180.00 },
    'openai-gpt53-codex': { name: 'GPT-5.3 Codex', provider: 'OpenAI', input: 1.75, output: 14.00 },
    'openai-gpt5': { name: 'GPT-5', provider: 'OpenAI', input: 1.25, output: 10.00 },
    'openai-gpt5-mini': { name: 'GPT-5 mini', provider: 'OpenAI', input: 0.25, output: 2.00 },
    'openai-gpt-oss-120b': { name: 'GPT-oss 120B', provider: 'OpenAI', input: 0.15, output: 0.60 },
    'openai-gpt-oss-20b': { name: 'GPT-oss 20B', provider: 'OpenAI', input: 0.08, output: 0.35 },
    'openai-gpt4o': { name: 'GPT-4o', provider: 'OpenAI', input: 2.50, output: 10.00 },
    'openai-gpt4o-mini': { name: 'GPT-4o mini', provider: 'OpenAI', input: 0.15, output: 0.60 },
    'anthropic-opus47': { name: 'Claude Opus 4.7', provider: 'Anthropic', input: 5.00, output: 25.00 },
    'anthropic-opus': { name: 'Claude 4 Opus', provider: 'Anthropic', input: 15.00, output: 75.00 },
    'anthropic-sonnet46': { name: 'Claude Sonnet 4.6', provider: 'Anthropic', input: 3.00, output: 15.00 },
    'anthropic-sonnet': { name: 'Claude Sonnet 4', provider: 'Anthropic', input: 3.00, output: 15.00 },
    'anthropic-haiku': { name: 'Claude Haiku 4.5', provider: 'Anthropic', input: 1.00, output: 5.00 },
    'google-gemini3-pro': { name: 'Gemini 3.1 Pro', provider: 'Google', input: 2.00, output: 12.00 },
    'google-pro': { name: 'Gemini 2.5 Pro', provider: 'Google', input: 1.25, output: 10.00 },
    'google-flash': { name: 'Gemini 2.0 Flash', provider: 'Google', input: 0.10, output: 0.40 },
    'google-flash-lite': { name: 'Gemini 2.0 Flash Lite', provider: 'Google', input: 0.075, output: 0.30 },
    'deepseek-v4-pro': { name: 'DeepSeek V4 Pro', provider: 'DeepSeek', input: 0.44, output: 0.87 },
    'deepseek-v4-flash': { name: 'DeepSeek V4 Flash', provider: 'DeepSeek', input: 0.14, output: 0.28 },
    'deepseek-v3': { name: 'DeepSeek V3', provider: 'DeepSeek', input: 0.27, output: 1.10 },
    'mistral-large': { name: 'Mistral Large 3', provider: 'Mistral', input: 0.50, output: 1.50 },
    'mistral-small': { name: 'Mistral Small 4', provider: 'Mistral', input: 0.15, output: 0.60 },
    'cohere-command-r-plus': { name: 'Command R+', provider: 'Cohere', input: 2.50, output: 10.00 },
    'cohere-command-r': { name: 'Command R', provider: 'Cohere', input: 0.50, output: 1.50 },
    'llama-4-scout': { name: 'Llama 4 Scout', provider: 'Meta', input: 0.11, output: 0.34 },
    'llama-4-maverick': { name: 'Llama 4 Maverick', provider: 'Meta', input: 0.20, output: 0.60 },
    'llama-3.1-70b': { name: 'Llama 3.1 70B', provider: 'Meta', input: 0.88, output: 0.88 },
    'llama-3.1-8b': { name: 'Llama 3.1 8B', provider: 'Meta', input: 0.10, output: 0.10 },
    'kimi-k26': { name: 'Kimi K2.6', provider: 'Moonshot', input: 0.90, output: 3.75 },
    'xai-grok3': { name: 'Grok 3', provider: 'xAI', input: 30.00, output: 150.00 },
    'xai-grok3-mini': { name: 'Grok 3 Mini', provider: 'xAI', input: 3.00, output: 5.00 },
    'ai21-jamba': { name: 'Jamba 1.5 Large', provider: 'AI21', input: 2.00, output: 8.00 },
};

function formatPrice(val) {
    if (val >= 1) return '$' + val.toFixed(2);
    if (val >= 0.01) return '$' + val.toFixed(3);
    return '$' + val.toFixed(4);
}

function escapeXml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function generateSVG(model, style) {
    const label = escapeXml(model.name);
    const value = escapeXml(`${formatPrice(model.input)} in / ${formatPrice(model.output)} out`);
    const provider = escapeXml(model.provider);

    // Calculate text widths (approximate)
    const labelWidth = label.length * 7.2 + 16;
    const valueWidth = value.length * 7.2 + 16;
    const totalWidth = labelWidth + valueWidth;
    const height = 20;

    // Color based on provider
    const providerColors = {
        'OpenAI': '#10a37f',
        'Anthropic': '#d97706',
        'Google': '#4285f4',
        'DeepSeek': '#6366f1',
        'Mistral': '#f97316',
        'Cohere': '#39d353',
        'Meta': '#0668e1',
        'Moonshot': '#8b5cf6',
        'xAI': '#ef4444',
        'AI21': '#06b6d4',
    };
    const color = providerColors[model.provider] || '#6366f1';

    if (style === 'flat-square') {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${height}" role="img" aria-label="${label}: ${value}">
  <title>${label}: ${value}</title>
  <g shape-rendering="crispEdges">
    <rect x="0" y="0" width="${labelWidth}" height="${height}" fill="#555"/>
    <rect x="${labelWidth}" y="0" width="${valueWidth}" height="${height}" fill="${color}"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11">
    <text x="${labelWidth / 2}" y="14" fill="#010101" fill-opacity=".3">${label}</text>
    <text x="${labelWidth / 2}" y="13">${label}</text>
    <text x="${labelWidth + valueWidth / 2}" y="14" fill="#010101" fill-opacity=".3">${value}</text>
    <text x="${labelWidth + valueWidth / 2}" y="13">${value}</text>
  </g>
</svg>`;
    }

    // Default: flat style (shields.io compatible)
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${height}" role="img" aria-label="${label}: ${value}">
  <title>${label}: ${value}</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r"><rect width="${totalWidth}" height="${height}" rx="3" fill="#fff"/></clipPath>
  <g clip-path="url(#r)">
    <rect width="${labelWidth}" height="${height}" fill="#555"/>
    <rect x="${labelWidth}" width="${valueWidth}" height="${height}" fill="${color}"/>
    <rect width="${totalWidth}" height="${height}" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11">
    <text x="${labelWidth / 2}" y="15" fill="#010101" fill-opacity=".3">${label}</text>
    <text x="${labelWidth / 2}" y="14">${label}</text>
    <text x="${labelWidth + valueWidth / 2}" y="15" fill="#010101" fill-opacity=".3">${value}</text>
    <text x="${labelWidth + valueWidth / 2}" y="14">${value}</text>
  </g>
</svg>`;
}

module.exports = function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');
    res.setHeader('X-Powered-By', 'APIpulse — https://getapipulse.com');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed. Use GET.' });

    const { model, style, format } = req.query;

    if (!model) {
        // Return available models
        return res.status(200).json({
            error: 'Missing required parameter: model',
            available_models: Object.keys(API_MODELS),
            usage: 'GET /api/badge?model=openai-gpt5',
            embed: {
                markdown: '![GPT-5](https://getapipulse.com/api/badge?model=openai-gpt5)',
                html: '<img src="https://getapipulse.com/api/badge?model=openai-gpt5" alt="GPT-5 Pricing">',
                readme: '[![GPT-5](https://getapipulse.com/api/badge?model=openai-gpt5)](https://getapipulse.com)',
            },
            docs: 'https://getapipulse.com/api-docs.html'
        });
    }

    const modelData = API_MODELS[model.toLowerCase()];
    if (!modelData) {
        return res.status(404).json({
            error: `Model "${model}" not found`,
            available_models: Object.keys(API_MODELS),
            docs: 'https://getapipulse.com/api-docs.html'
        });
    }

    const badgeUrl = `https://getapipulse.com/api/badge?model=${model}`;

    // Return markdown format
    if (format === 'md' || format === 'markdown') {
        const md = `![${modelData.name} Pricing](${badgeUrl})`;
        res.setHeader('Content-Type', 'text/plain');
        return res.status(200).send(md);
    }

    // Return URL format
    if (format === 'url') {
        res.setHeader('Content-Type', 'text/plain');
        return res.status(200).send(badgeUrl);
    }

    // Return JSON with embed snippets
    if (format === 'json') {
        return res.status(200).json({
            model: modelData.name,
            provider: modelData.provider,
            pricing: { input_per_1m: modelData.input, output_per_1m: modelData.output },
            badge_url: badgeUrl,
            embed: {
                markdown: `[![${modelData.name} Pricing](${badgeUrl})](https://getapipulse.com)`,
                html: `<a href="https://getapipulse.com"><img src="${badgeUrl}" alt="${modelData.name} Pricing"></a>`,
                rst: `.. image:: ${badgeUrl}\n   :alt: ${modelData.name} Pricing`,
            },
            source: 'https://getapipulse.com',
            docs: 'https://getapipulse.com/api-docs.html'
        });
    }

    // Default: return SVG image
    const svg = generateSVG(modelData, style);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Content-Disposition', `inline; filename="apipulse-${model}.svg"`);
    return res.status(200).send(svg);
};
