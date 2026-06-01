// Vercel Serverless Function: AI API Cost Calculator
// Calculate estimated costs for any LLM model
// Free to use — data from getapipulse.com
//
// Usage:
//   GET /api/calculate?model=openai-gpt5&input_tokens=2000&output_tokens=500&requests=1000&days=30
//   GET /api/calculate?model=anthropic-sonnet&requests=5000
//   GET /api/calculate?models=openai-gpt5,anthropic-sonnet,google-pro&requests=10000
//
// Response includes per-request, daily, monthly, and annual costs

const API_MODELS = {
    'openai-gpt55': { name: 'GPT-5.5', provider: 'OpenAI', input: 5.00, output: 30.00, context: '1M' },
    'openai-gpt55-pro': { name: 'GPT-5.5 Pro', provider: 'OpenAI', input: 30.00, output: 180.00, context: '1M' },
    'openai-gpt53-codex': { name: 'GPT-5.3 Codex', provider: 'OpenAI', input: 1.75, output: 14.00, context: '400K' },
    'openai-gpt5': { name: 'GPT-5', provider: 'OpenAI', input: 1.25, output: 10.00, context: '272K' },
    'openai-gpt5-mini': { name: 'GPT-5 mini', provider: 'OpenAI', input: 0.25, output: 2.00, context: '272K' },
    'openai-gpt-oss-120b': { name: 'GPT-oss 120B', provider: 'OpenAI', input: 0.15, output: 0.60, context: '128K' },
    'openai-gpt-oss-20b': { name: 'GPT-oss 20B', provider: 'OpenAI', input: 0.08, output: 0.35, context: '128K' },
    'openai-gpt4o': { name: 'GPT-4o', provider: 'OpenAI', input: 2.50, output: 10.00, context: '128K' },
    'openai-gpt4o-mini': { name: 'GPT-4o mini', provider: 'OpenAI', input: 0.15, output: 0.60, context: '128K' },
    'anthropic-opus47': { name: 'Claude Opus 4.7', provider: 'Anthropic', input: 5.00, output: 25.00, context: '1M' },
    'anthropic-opus': { name: 'Claude 4 Opus', provider: 'Anthropic', input: 15.00, output: 75.00, context: '200K' },
    'anthropic-sonnet46': { name: 'Claude Sonnet 4.6', provider: 'Anthropic', input: 3.00, output: 15.00, context: '1M' },
    'anthropic-sonnet': { name: 'Claude Sonnet 4', provider: 'Anthropic', input: 3.00, output: 15.00, context: '200K' },
    'anthropic-haiku': { name: 'Claude Haiku 4.5', provider: 'Anthropic', input: 1.00, output: 5.00, context: '200K' },
    'google-gemini3-pro': { name: 'Gemini 3.1 Pro', provider: 'Google', input: 2.00, output: 12.00, context: '1M' },
    'google-pro': { name: 'Gemini 2.5 Pro', provider: 'Google', input: 1.25, output: 10.00, context: '1M' },
    'google-flash': { name: 'Gemini 2.0 Flash', provider: 'Google', input: 0.10, output: 0.40, context: '1M' },
    'google-flash-lite': { name: 'Gemini 2.0 Flash Lite', provider: 'Google', input: 0.075, output: 0.30, context: '1M' },
    'deepseek-v4-pro': { name: 'DeepSeek V4 Pro', provider: 'DeepSeek', input: 0.435, output: 0.87, context: '1M' },
    'deepseek-v4-flash': { name: 'DeepSeek V4 Flash', provider: 'DeepSeek', input: 0.14, output: 0.28, context: '1M' },
    'deepseek-v3': { name: 'DeepSeek V3', provider: 'DeepSeek', input: 0.27, output: 1.10, context: '128K' },
    'mistral-large': { name: 'Mistral Large 3', provider: 'Mistral', input: 0.50, output: 1.50, context: '128K' },
    'mistral-small': { name: 'Mistral Small 4', provider: 'Mistral', input: 0.15, output: 0.60, context: '128K' },
    'cohere-command-r-plus': { name: 'Command R+', provider: 'Cohere', input: 2.50, output: 10.00, context: '128K' },
    'cohere-command-r': { name: 'Command R', provider: 'Cohere', input: 0.50, output: 1.50, context: '128K' },
    'llama-4-scout': { name: 'Llama 4 Scout', provider: 'Meta (Together.ai)', input: 0.11, output: 0.34, context: '10M' },
    'llama-4-maverick': { name: 'Llama 4 Maverick', provider: 'Meta (Together.ai)', input: 0.20, output: 0.60, context: '10M' },
    'llama-3.1-70b': { name: 'Llama 3.1 70B', provider: 'Meta (Together.ai)', input: 0.88, output: 0.88, context: '128K' },
    'llama-3.1-8b': { name: 'Llama 3.1 8B', provider: 'Meta (Together.ai)', input: 0.10, output: 0.10, context: '128K' },
    'kimi-k26': { name: 'Kimi K2.6', provider: 'Moonshot', input: 0.90, output: 3.75, context: '256K' },
    'xai-grok3': { name: 'Grok 4.3', provider: 'xAI', input: 12.50, output: 25.00, context: '1M' },
    'xai-grok3-mini': { name: 'Grok Build 0.1', provider: 'xAI', input: 10.00, output: 20.00, context: '256K' },
    'ai21-jamba': { name: 'Jamba 1.5 Large', provider: 'AI21', input: 2.00, output: 8.00, context: '256K' },
};

function calculateCost(modelId, inputTokens, outputTokens, requestsPerDay, days) {
    const model = API_MODELS[modelId];
    if (!model) return null;

    const totalInput = inputTokens * requestsPerDay * days;
    const totalOutput = outputTokens * requestsPerDay * days;
    const inputCost = (totalInput / 1000000) * model.input;
    const outputCost = (totalOutput / 1000000) * model.output;
    const totalMonthly = inputCost + outputCost;
    const costPerRequest = model.input * (inputTokens / 1000000) + model.output * (outputTokens / 1000000);

    return {
        model: modelId,
        name: model.name,
        provider: model.provider,
        context: model.context,
        pricing: { input_per_1m: model.input, output_per_1m: model.output },
        usage: { input_tokens: inputTokens, output_tokens: outputTokens, requests_per_day: requestsPerDay, days: days },
        costs: {
            per_request: Math.round(costPerRequest * 10000) / 10000,
            per_1k_requests: Math.round(costPerRequest * 1000 * 100) / 100,
            daily: Math.round(totalMonthly / days * 100) / 100,
            monthly: Math.round(totalMonthly * 100) / 100,
            annual: Math.round(totalMonthly * 12 * 100) / 100,
        },
        tokens: { total_input: totalInput, total_output: totalOutput, total: totalInput + totalOutput },
    };
}

module.exports = function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.setHeader('X-Powered-By', 'APIpulse — https://getapipulse.com');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed. Use GET.' });

    const { model, models, input_tokens, output_tokens, requests, days, mode } = req.query;

    const inputTokens = parseInt(input_tokens) || 2000;
    const outputTokens = parseInt(output_tokens) || 500;
    const requestsPerDay = parseInt(requests) || 1000;
    const numDays = parseInt(days) || 30;
    const apiMode = mode || 'standard';

    // Mode adjustments
    const outputMult = apiMode === 'streaming' ? 1.15 : 1;
    const priceMult = apiMode === 'batch' ? 0.5 : 1;

    // Multi-model comparison
    if (models) {
        const modelIds = models.split(',').map(m => m.trim()).slice(0, 10);
        const results = [];
        for (const id of modelIds) {
            const r = calculateCost(id, inputTokens, Math.round(outputTokens * outputMult), requestsPerDay, numDays);
            if (r) {
                if (priceMult !== 1) {
                    r.costs.per_request = Math.round(r.costs.per_request * priceMult * 10000) / 10000;
                    r.costs.per_1k_requests = Math.round(r.costs.per_1k_requests * priceMult * 100) / 100;
                    r.costs.daily = Math.round(r.costs.daily * priceMult * 100) / 100;
                    r.costs.monthly = Math.round(r.costs.monthly * priceMult * 100) / 100;
                    r.costs.annual = Math.round(r.costs.annual * priceMult * 100) / 100;
                }
                r.mode = apiMode;
                results.push(r);
            }
        }
        results.sort((a, b) => a.costs.monthly - b.costs.monthly);
        const cheapest = results[0];
        return res.status(200).json({
            results,
            cheapest: cheapest ? { model: cheapest.model, name: cheapest.name, monthly: cheapest.costs.monthly } : null,
            meta: {
                count: results.length,
                mode: apiMode,
                source: 'https://getapipulse.com',
                calculator: 'https://getapipulse.com/calculator.html'
            }
        });
    }

    // Single model
    if (!model) {
        return res.status(400).json({
            error: 'Missing required parameter: model or models',
            usage: 'GET /api/calculate?model=openai-gpt5&input_tokens=2000&output_tokens=500&requests=1000&days=30',
            available_models: Object.keys(API_MODELS),
            docs: 'https://getapipulse.com/api-docs.html'
        });
    }

    const result = calculateCost(model, inputTokens, Math.round(outputTokens * outputMult), requestsPerDay, numDays);
    if (!result) {
        return res.status(404).json({
            error: `Model "${model}" not found`,
            available_models: Object.keys(API_MODELS),
            docs: 'https://getapipulse.com/api-docs.html'
        });
    }

    if (priceMult !== 1) {
        result.costs.per_request = Math.round(result.costs.per_request * priceMult * 10000) / 10000;
        result.costs.per_1k_requests = Math.round(result.costs.per_1k_requests * priceMult * 100) / 100;
        result.costs.daily = Math.round(result.costs.daily * priceMult * 100) / 100;
        result.costs.monthly = Math.round(result.costs.monthly * priceMult * 100) / 100;
        result.costs.annual = Math.round(result.costs.annual * priceMult * 100) / 100;
    }
    result.mode = apiMode;

    return res.status(200).json({
        ...result,
        source: 'https://getapipulse.com',
        calculator: 'https://getapipulse.com/calculator.html',
        docs: 'https://getapipulse.com/api-docs.html'
    });
};
