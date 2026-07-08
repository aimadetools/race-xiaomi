// Vercel Serverless Function: Compare AI Models
// Side-by-side comparison of two or more models with cost calculations
//
// Usage:
//   GET /api/compare?models=openai-gpt5,anthropic-sonnet46
//   GET /api/compare?models=openai-gpt5-mini,deepseek-v4-flash&input_tokens=2000&output_tokens=500
//   GET /api/compare?models=openai-gpt5,anthropic-opus48,google-pro

const MODELS = {
    'openai-gpt55': { name: 'GPT-5.5', provider: 'OpenAI', tier: 'Premium', input: 5.00, output: 30.00, context: '1M' },
    'openai-gpt55-pro': { name: 'GPT-5.5 Pro', provider: 'OpenAI', tier: 'Premium', input: 30.00, output: 180.00, context: '1M' },
    'openai-gpt53-codex': { name: 'GPT-5.3 Codex', provider: 'OpenAI', tier: 'Mid', input: 1.75, output: 14.00, context: '400K' },
    'openai-gpt5': { name: 'GPT-5', provider: 'OpenAI', tier: 'Premium', input: 1.25, output: 10.00, context: '272K' },
    'openai-gpt5-mini': { name: 'GPT-5 mini', provider: 'OpenAI', tier: 'Budget', input: 0.25, output: 2.00, context: '272K' },
    'openai-gpt-oss-120b': { name: 'GPT-oss 120B', provider: 'OpenAI', tier: 'Budget', input: 0.15, output: 0.60, context: '128K' },
    'openai-gpt-oss-20b': { name: 'GPT-oss 20B', provider: 'OpenAI', tier: 'Budget', input: 0.08, output: 0.35, context: '128K' },
    'openai-gpt4o': { name: 'GPT-4o', provider: 'OpenAI', tier: 'Mid', input: 2.50, output: 10.00, context: '128K' },
    'openai-gpt4o-mini': { name: 'GPT-4o mini', provider: 'OpenAI', tier: 'Budget', input: 0.15, output: 0.60, context: '128K' },
    'openai-gpt54': { name: 'GPT-5.4', provider: 'OpenAI', tier: 'Mid', input: 2.50, output: 15.00, context: '400K' },
    'openai-gpt54-mini': { name: 'GPT-5.4 mini', provider: 'OpenAI', tier: 'Budget', input: 0.75, output: 4.50, context: '400K' },
    'openai-gpt54-nano': { name: 'GPT-5.4 nano', provider: 'OpenAI', tier: 'Budget', input: 0.20, output: 1.25, context: '400K' },
    'openai-gpt54-pro': { name: 'GPT-5.4 Pro', provider: 'OpenAI', tier: 'Premium', input: 30.00, output: 180.00, context: '400K' },
    'anthropic-opus48': { name: 'Claude Opus 4.8', provider: 'Anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '1M' },
    'anthropic-opus47': { name: 'Claude Opus 4.7', provider: 'Anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '1M' },
    'anthropic-opus': { name: 'Claude 4 Opus', provider: 'Anthropic', tier: 'Premium', input: 15.00, output: 75.00, context: '200K' },
    'anthropic-sonnet46': { name: 'Claude Sonnet 4.6', provider: 'Anthropic', tier: 'Mid', input: 2.00, output: 10.00, context: '1M' },
    'anthropic-sonnet': { name: 'Claude Sonnet 4', provider: 'Anthropic', tier: 'Mid', input: 2.00, output: 10.00, context: '200K' },
    'anthropic-haiku': { name: 'Claude Haiku 4.5', provider: 'Anthropic', tier: 'Budget', input: 1.00, output: 5.00, context: '200K' },
    'anthropic-sonnet5': { name: 'Claude Sonnet 5', provider: 'Anthropic', tier: 'Mid', input: 2.00, output: 10.00, context: '1M' },
    'anthropic-fable5': { name: 'Claude Fable 5', provider: 'Anthropic', tier: 'Premium', input: 10.00, output: 50.00, context: '1M' },
    'anthropic-mythos5': { name: 'Claude Mythos 5', provider: 'Anthropic', tier: 'Premium', input: 10.00, output: 50.00, context: '1M' },
    'google-gemini3-pro': { name: 'Gemini 3.1 Pro', provider: 'Google', tier: 'Mid', input: 2.00, output: 12.00, context: '1M' },
    'google-gemini35-flash': { name: 'Gemini 3.5 Flash', provider: 'Google', tier: 'Mid', input: 1.50, output: 9.00, context: '1M' },
    'google-pro': { name: 'Gemini 2.5 Pro', provider: 'Google', tier: 'Mid', input: 1.25, output: 10.00, context: '1M' },
    'google-flash': { name: 'Gemini 2.0 Flash', provider: 'Google', tier: 'Budget', input: 0.10, output: 0.40, context: '1M' },
    'google-flash-lite': { name: 'Gemini 2.0 Flash Lite', provider: 'Google', tier: 'Budget', input: 0.075, output: 0.30, context: '1M' },
    'google-gemini3-flash': { name: 'Gemini 3 Flash', provider: 'Google', tier: 'Budget', input: 0.50, output: 3.00, context: '1M' },
    'google-gemini31-flash-lite': { name: 'Gemini 3.1 Flash-Lite', provider: 'Google', tier: 'Budget', input: 0.25, output: 1.50, context: '1M' },
    'google-25-flash-lite': { name: 'Gemini 2.5 Flash-Lite', provider: 'Google', tier: 'Budget', input: 0.10, output: 0.40, context: '1M' },
    'deepseek-v4-pro': { name: 'DeepSeek V4 Pro', provider: 'DeepSeek', tier: 'Budget', input: 0.435, output: 0.87, context: '1M' },
    'deepseek-v4-flash': { name: 'DeepSeek V4 Flash', provider: 'DeepSeek', tier: 'Budget', input: 0.14, output: 0.28, context: '1M' },
    'deepseek-v32': { name: 'DeepSeek V3.2', provider: 'DeepSeek', tier: 'Budget', input: 0.23, output: 0.34, context: '128K' },
    'deepseek-v3': { name: 'DeepSeek V3', provider: 'DeepSeek', tier: 'Budget', input: 0.27, output: 1.10, context: '128K' },
    'mistral-large': { name: 'Mistral Large 3', provider: 'Mistral', tier: 'Budget', input: 0.50, output: 1.50, context: '128K' },
    'mistral-medium': { name: 'Mistral Medium 3.5', provider: 'Mistral', tier: 'Mid', input: 1.50, output: 7.50, context: '128K' },
    'mistral-small': { name: 'Mistral Small 4', provider: 'Mistral', tier: 'Budget', input: 0.15, output: 0.60, context: '128K' },
    'cohere-command-a': { name: 'Command A', provider: 'Cohere', tier: 'Mid', input: 2.50, output: 10.00, context: '256K' },
    'cohere-command-r-plus': { name: 'Command R+', provider: 'Cohere', tier: 'Mid', input: 2.50, output: 10.00, context: '128K' },
    'cohere-command-r': { name: 'Command R', provider: 'Cohere', tier: 'Budget', input: 0.50, output: 1.50, context: '128K' },
    'llama-4-scout': { name: 'Llama 4 Scout', provider: 'Meta (Together.ai)', tier: 'Budget', input: 0.18, output: 0.59, context: '1M' },
    'llama-4-maverick': { name: 'Llama 4 Maverick', provider: 'Meta (Together.ai)', tier: 'Budget', input: 0.27, output: 0.85, context: '1M' },
    'llama-3.1-70b': { name: 'Llama 3.1 70B', provider: 'Meta', tier: 'Mid', input: 0.88, output: 0.88, context: '128K' },
    'llama-3.1-8b': { name: 'Llama 3.1 8B', provider: 'Meta', tier: 'Budget', input: 0.10, output: 0.10, context: '128K' },
    'kimi-k26': { name: 'Kimi K2.6', provider: 'Moonshot', tier: 'Budget', input: 0.95, output: 4.00, context: '256K' },
    'xai-grok3': { name: 'Grok 4.3', provider: 'xAI', tier: 'Mid', input: 1.25, output: 2.50, context: '1M' },
    'xai-grok3-mini': { name: 'Grok Build 0.1', provider: 'xAI', tier: 'Budget', input: 1.00, output: 2.00, context: '256K' },
    'ai21-jamba': { name: 'Jamba 1.5 Large', provider: 'AI21', tier: 'Mid', input: 2.00, output: 8.00, context: '256K' },
    'ai21-jamba17': { name: 'Jamba 1.7 Large', provider: 'AI21', tier: 'Mid', input: 2.00, output: 8.00, context: '256K' },
};

module.exports = function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

    const { models: modelStr, input_tokens, output_tokens, requests_per_day } = req.query;

    if (!modelStr) {
        return res.status(400).json({
            error: 'Missing required parameter: models',
            example: '/api/compare?models=openai-gpt5,anthropic-sonnet46',
            available: Object.keys(MODELS)
        });
    }

    const modelIds = modelStr.split(',').map(s => s.trim());
    const inp = parseInt(input_tokens) || 1000;
    const out = parseInt(output_tokens) || 500;
    const rpd = parseInt(requests_per_day) || 1000;

    const comparison = [];
    const errors = [];

    for (const id of modelIds) {
        const model = MODELS[id];
        if (!model) {
            errors.push({ id, error: 'Model not found' });
            continue;
        }

        const costPerReq = (inp / 1e6) * model.input + (out / 1e6) * model.output;
        const daily = costPerReq * rpd;
        const monthly = daily * 30;
        const yearly = monthly * 12;

        comparison.push({
            id,
            ...model,
            costPerRequest: costPerReq,
            dailyCost: daily,
            monthlyCost: monthly,
            yearlyCost: yearly,
            inputTokens: inp,
            outputTokens: out,
        });
    }

    // Find cheapest and most expensive
    if (comparison.length >= 2) {
        comparison.sort((a, b) => a.monthlyCost - b.monthlyCost);
        const cheapest = comparison[0];
        const mostExpensive = comparison[comparison.length - 1];
        const savings = mostExpensive.monthlyCost - cheapest.monthlyCost;
        const savingsPercent = mostExpensive.monthlyCost > 0 ? (savings / mostExpensive.monthlyCost * 100) : 0;

        return res.status(200).json({
            comparison,
            summary: {
                cheapest: cheapest.name,
                mostExpensive: mostExpensive.name,
                monthlySavings: savings,
                savingsPercent: Math.round(savingsPercent),
            },
            params: { input_tokens: inp, output_tokens: out, requests_per_day: rpd },
            source: 'https://getapipulse.com',
            docs: 'https://getapipulse.com/api-docs.html',
            ...(errors.length > 0 && { errors })
        });
    }

    return res.status(200).json({
        comparison,
        params: { input_tokens: inp, output_tokens: out, requests_per_day: rpd },
        source: 'https://getapipulse.com',
        ...(errors.length > 0 && { errors })
    });
};
