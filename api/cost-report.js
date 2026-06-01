// Vercel Serverless Function: Cost Report API
// Generate a cost comparison report for multiple models
//
// Usage:
//   GET /api/cost-report?requests=100000&input_tokens=500&output_tokens=200&models=openai-gpt5-mini,anthropic-haiku,google-flash
//
// Response includes sorted cost breakdown, cheapest option, and savings

const API_MODELS = {
    'openai-gpt55': { name: 'GPT-5.5', provider: 'OpenAI', input: 5.00, output: 30.00 },
    'openai-gpt5': { name: 'GPT-5', provider: 'OpenAI', input: 1.25, output: 10.00 },
    'openai-gpt5-mini': { name: 'GPT-5 mini', provider: 'OpenAI', input: 0.25, output: 2.00 },
    'openai-gpt-oss-120b': { name: 'GPT-oss 120B', provider: 'OpenAI', input: 0.15, output: 0.60 },
    'openai-gpt-oss-20b': { name: 'GPT-oss 20B', provider: 'OpenAI', input: 0.08, output: 0.35 },
    'openai-gpt4o': { name: 'GPT-4o', provider: 'OpenAI', input: 2.50, output: 10.00 },
    'openai-gpt4o-mini': { name: 'GPT-4o mini', provider: 'OpenAI', input: 0.15, output: 0.60 },
    'anthropic-opus48': { name: 'Claude Opus 4.8', provider: 'Anthropic', input: 5.00, output: 25.00 },
    'anthropic-sonnet46': { name: 'Claude Sonnet 4.6', provider: 'Anthropic', input: 3.00, output: 15.00 },
    'anthropic-sonnet': { name: 'Claude Sonnet 4', provider: 'Anthropic', input: 3.00, output: 15.00 },
    'anthropic-haiku': { name: 'Claude Haiku 4.5', provider: 'Anthropic', input: 1.00, output: 5.00 },
    'google-gemini3-pro': { name: 'Gemini 3.1 Pro', provider: 'Google', input: 2.00, output: 12.00 },
    'google-pro': { name: 'Gemini 2.5 Pro', provider: 'Google', input: 1.25, output: 10.00 },
    'google-flash': { name: 'Gemini 2.0 Flash', provider: 'Google', input: 0.10, output: 0.40 },
    'google-flash-lite': { name: 'Gemini 2.0 Flash Lite', provider: 'Google', input: 0.075, output: 0.30 },
    'deepseek-v4-pro': { name: 'DeepSeek V4 Pro', provider: 'DeepSeek', input: 0.435, output: 0.87 },
    'deepseek-v4-flash': { name: 'DeepSeek V4 Flash', provider: 'DeepSeek', input: 0.14, output: 0.28 },
    'deepseek-v3': { name: 'DeepSeek V3', provider: 'DeepSeek', input: 0.27, output: 1.10 },
    'mistral-large': { name: 'Mistral Large 3', provider: 'Mistral', input: 0.50, output: 1.50 },
    'mistral-small': { name: 'Mistral Small 4', provider: 'Mistral', input: 0.15, output: 0.60 },
    'cohere-command-r-plus': { name: 'Command R+', provider: 'Cohere', input: 2.50, output: 10.00 },
    'cohere-command-r': { name: 'Command R', provider: 'Cohere', input: 0.50, output: 1.50 },
    'llama-4-scout': { name: 'Llama 4 Scout', provider: 'Meta (Together.ai)', input: 0.11, output: 0.34 },
    'llama-4-maverick': { name: 'Llama 4 Maverick', provider: 'Meta (Together.ai)', input: 0.20, output: 0.60 },
    'llama-3.1-70b': { name: 'Llama 3.1 70B', provider: 'Meta (Together.ai)', input: 0.88, output: 0.88 },
    'llama-3.1-8b': { name: 'Llama 3.1 8B', provider: 'Meta (Together.ai)', input: 0.10, output: 0.10 },
    'kimi-k26': { name: 'Kimi K2.6', provider: 'Moonshot', input: 0.90, output: 3.75 },
    'xai-grok3': { name: 'Grok 4.3', provider: 'xAI', input: 12.50, output: 25.00 },
    'xai-grok3-mini': { name: 'Grok Build 0.1', provider: 'xAI', input: 10.00, output: 20.00 },
    'ai21-jamba': { name: 'Jamba 1.5 Large', provider: 'AI21', input: 2.00, output: 8.00 },
};

module.exports = function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.setHeader('X-Powered-By', 'APIpulse — https://getapipulse.com');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed. Use GET.' });

    const requests = parseInt(req.query.requests) || 100000;
    const inputTokens = parseInt(req.query.input_tokens) || 500;
    const outputTokens = parseInt(req.query.output_tokens) || 200;
    const modelParam = req.query.models;

    let modelIds = modelParam ? modelParam.split(',').map(s => s.trim()) : Object.keys(API_MODELS);
    modelIds = modelIds.filter(id => API_MODELS[id]);

    if (modelIds.length === 0) {
        return res.status(400).json({ error: 'No valid models found', available: Object.keys(API_MODELS) });
    }

    const results = modelIds.map(id => {
        const m = API_MODELS[id];
        const inputCost = (requests * inputTokens / 1000000) * m.input;
        const outputCost = (requests * outputTokens / 1000000) * m.output;
        const monthly = inputCost + outputCost;
        return { id, name: m.name, provider: m.provider, input: m.input, output: m.output, inputCost, outputCost, monthly, annual: monthly * 12 };
    }).sort((a, b) => a.monthly - b.monthly);

    const cheapest = results[0];
    const mostExpensive = results[results.length - 1];
    const savings = mostExpensive.monthly - cheapest.monthly;

    return res.status(200).json({
        config: { requests, inputTokens, outputTokens },
        results,
        summary: {
            cheapest: { name: cheapest.name, provider: cheapest.provider, monthly: cheapest.monthly, annual: cheapest.annual },
            mostExpensive: { name: mostExpensive.name, monthly: mostExpensive.monthly },
            savings: { monthly: savings, annual: savings * 12, percentage: ((savings / mostExpensive.monthly) * 100).toFixed(1) }
        },
        meta: {
            modelsCompared: results.length,
            source: 'https://getapipulse.com',
            tool: 'https://getapipulse.com/cost-report.html'
        }
    });
};
