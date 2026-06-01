// Vercel Serverless Function: Find Cheapest AI Model
// Returns the cheapest model(s) for your use case
// Free to use — data from getapipulse.com
//
// Usage:
//   GET /api/cheapest?budget=50&requests=10000&input_tokens=2000&output_tokens=500
//   GET /api/cheapest?use_case=coding&quality=high
//   GET /api/cheapest?max_cost_per_request=0.01

const API_MODELS = [
    { id: 'openai-gpt55', name: 'GPT-5.5', provider: 'OpenAI', tier: 'Premium', input: 5.00, output: 30.00, context: '1M', strengths: ['reasoning', 'analysis', 'coding'] },
    { id: 'openai-gpt5', name: 'GPT-5', provider: 'OpenAI', tier: 'Premium', input: 1.25, output: 10.00, context: '272K', strengths: ['reasoning', 'coding', 'general'] },
    { id: 'openai-gpt5-mini', name: 'GPT-5 mini', provider: 'OpenAI', tier: 'Budget', input: 0.25, output: 2.00, context: '272K', strengths: ['general', 'chat', 'classification'] },
    { id: 'openai-gpt4o', name: 'GPT-4o', provider: 'OpenAI', tier: 'Mid', input: 2.50, output: 10.00, context: '128K', strengths: ['multimodal', 'general', 'vision'] },
    { id: 'openai-gpt4o-mini', name: 'GPT-4o mini', provider: 'OpenAI', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', strengths: ['chat', 'classification', 'extraction'] },
    { id: 'anthropic-opus48', name: 'Claude Opus 4.8', provider: 'Anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '1M', strengths: ['reasoning', 'analysis', 'coding'] },
    { id: 'anthropic-opus47', name: 'Claude Opus 4.7', provider: 'Anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '1M', strengths: ['reasoning', 'analysis', 'coding'] },
    { id: 'anthropic-opus', name: 'Claude 4 Opus', provider: 'Anthropic', tier: 'Premium', input: 15.00, output: 75.00, context: '200K', strengths: ['reasoning', 'analysis', 'creative'] },
    { id: 'anthropic-sonnet46', name: 'Claude Sonnet 4.6', provider: 'Anthropic', tier: 'Mid', input: 3.00, output: 15.00, context: '1M', strengths: ['coding', 'analysis', 'general'] },
    { id: 'anthropic-sonnet', name: 'Claude Sonnet 4', provider: 'Anthropic', tier: 'Mid', input: 3.00, output: 15.00, context: '200K', strengths: ['coding', 'general', 'analysis'] },
    { id: 'anthropic-haiku', name: 'Claude Haiku 4.5', provider: 'Anthropic', tier: 'Budget', input: 1.00, output: 5.00, context: '200K', strengths: ['chat', 'classification', 'extraction'] },
    { id: 'google-gemini3-pro', name: 'Gemini 3.1 Pro', provider: 'Google', tier: 'Mid', input: 2.00, output: 12.00, context: '1M', strengths: ['reasoning', 'multimodal', 'long-context'] },
    { id: 'google-pro', name: 'Gemini 2.5 Pro', provider: 'Google', tier: 'Mid', input: 1.25, output: 10.00, context: '1M', strengths: ['reasoning', 'coding', 'long-context'] },
    { id: 'google-flash', name: 'Gemini 2.0 Flash', provider: 'Google', tier: 'Budget', input: 0.10, output: 0.40, context: '1M', strengths: ['chat', 'classification', 'speed'] },
    { id: 'google-flash-lite', name: 'Gemini 2.0 Flash Lite', provider: 'Google', tier: 'Budget', input: 0.075, output: 0.30, context: '1M', strengths: ['classification', 'extraction', 'speed'] },
    { id: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro', provider: 'DeepSeek', tier: 'Budget', input: 0.435, output: 0.87, context: '1M', strengths: ['coding', 'reasoning', 'analysis'] },
    { id: 'deepseek-v4-flash', name: 'DeepSeek V4 Flash', provider: 'DeepSeek', tier: 'Budget', input: 0.14, output: 0.28, context: '1M', strengths: ['coding', 'chat', 'speed'] },
    { id: 'mistral-large', name: 'Mistral Large 3', provider: 'Mistral', tier: 'Budget', input: 0.50, output: 1.50, context: '128K', strengths: ['coding', 'reasoning', 'multilingual'] },
    { id: 'mistral-small', name: 'Mistral Small 4', provider: 'Mistral', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', strengths: ['chat', 'classification', 'speed'] },
    { id: 'llama-3.1-70b', name: 'Llama 3.1 70B', provider: 'Meta (Together.ai)', tier: 'Mid', input: 0.88, output: 0.88, context: '128K', strengths: ['general', 'coding', 'analysis'] },
    { id: 'llama-3.1-8b', name: 'Llama 3.1 8B', provider: 'Meta (Together.ai)', tier: 'Budget', input: 0.10, output: 0.10, context: '128K', strengths: ['chat', 'classification', 'speed'] },
    { id: 'xai-grok3', name: 'Grok 4.3', provider: 'xAI', tier: 'Mid', input: 12.50, output: 25.00, context: '1M', strengths: ['reasoning', 'analysis', 'creative'] },
    { id: 'xai-grok3-mini', name: 'Grok Build 0.1', provider: 'xAI', tier: 'Budget', input: 10.00, output: 20.00, context: '256K', strengths: ['general', 'chat', 'coding'] },
];

module.exports = function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.setHeader('X-Powered-By', 'APIpulse — https://getapipulse.com');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed. Use GET.' });

    const { budget, requests, input_tokens, output_tokens, use_case, quality, max_cost_per_request, limit } = req.query;

    const inputTokens = parseInt(input_tokens) || 2000;
    const outputTokens = parseInt(output_tokens) || 500;
    const requestsPerDay = parseInt(requests) || 1000;
    const maxBudget = parseFloat(budget) || null;
    const maxCPR = parseFloat(max_cost_per_request) || null;
    const resultLimit = Math.min(parseInt(limit) || 5, 10);

    let results = API_MODELS.map(m => {
        const cpr = m.input * (inputTokens / 1000000) + m.output * (outputTokens / 1000000);
        const monthly = cpr * requestsPerDay * 30;
        return {
            id: m.id,
            name: m.name,
            provider: m.provider,
            tier: m.tier,
            context: m.context,
            strengths: m.strengths,
            pricing: { input_per_1m: m.input, output_per_1m: m.output },
            cost_per_request: Math.round(cpr * 10000) / 10000,
            monthly_estimate: Math.round(monthly * 100) / 100,
        };
    });

    // Filter by use case
    if (use_case) {
        const uc = use_case.toLowerCase();
        results = results.filter(m => m.strengths.some(s => s.includes(uc) || uc.includes(s)));
    }

    // Filter by quality tier
    if (quality) {
        const q = quality.toLowerCase();
        if (q === 'high') results = results.filter(m => m.tier === 'Premium' || m.tier === 'Mid');
        else if (q === 'budget') results = results.filter(m => m.tier === 'Budget');
    }

    // Filter by budget
    if (maxBudget) {
        results = results.filter(m => m.monthly_estimate <= maxBudget);
    }

    // Filter by max cost per request
    if (maxCPR) {
        results = results.filter(m => m.cost_per_request <= maxCPR);
    }

    // Sort by monthly cost
    results.sort((a, b) => a.monthly_estimate - b.monthly_estimate);

    // Limit results
    results = results.slice(0, resultLimit);

    const cheapest = results[0];

    return res.status(200).json({
        recommendations: results,
        cheapest: cheapest || null,
        query: {
            input_tokens: inputTokens,
            output_tokens: outputTokens,
            requests_per_day: requestsPerDay,
            use_case: use_case || null,
            quality: quality || null,
            max_budget: maxBudget,
        },
        meta: {
            count: results.length,
            total_models_checked: API_MODELS.length,
            source: 'https://getapipulse.com',
            calculator: 'https://getapipulse.com/calculator.html'
        }
    });
};
