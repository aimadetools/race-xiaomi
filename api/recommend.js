// Vercel Serverless Function: AI Model Recommendations
// Get personalized model recommendations based on use case and requirements
//
// Usage:
//   GET /api/recommend?use_case=coding&budget=low&quality=high
//   GET /api/recommend?use_case=chat&max_cost=0.01
//   GET /api/recommend?use_case=reasoning&min_context=1000000

const MODELS = [
    { id: 'openai-gpt55', name: 'GPT-5.5', provider: 'OpenAI', tier: 'Premium', input: 5.00, output: 30.00, context: '1M', useCases: ['reasoning', 'analysis', 'coding', 'creative'], quality: 5 },
    { id: 'openai-gpt5', name: 'GPT-5', provider: 'OpenAI', tier: 'Premium', input: 1.25, output: 10.00, context: '272K', useCases: ['reasoning', 'coding', 'general', 'analysis'], quality: 5 },
    { id: 'openai-gpt5-mini', name: 'GPT-5 mini', provider: 'OpenAI', tier: 'Budget', input: 0.25, output: 2.00, context: '272K', useCases: ['general', 'chat', 'classification', 'extraction'], quality: 3 },
    { id: 'openai-gpt4o', name: 'GPT-4o', provider: 'OpenAI', tier: 'Mid', input: 2.50, output: 10.00, context: '128K', useCases: ['multimodal', 'general', 'vision', 'coding'], quality: 4 },
    { id: 'openai-gpt4o-mini', name: 'GPT-4o mini', provider: 'OpenAI', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', useCases: ['chat', 'classification', 'extraction', 'summarization'], quality: 3 },
    { id: 'anthropic-opus48', name: 'Claude Opus 4.8', provider: 'Anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '1M', useCases: ['reasoning', 'analysis', 'coding', 'creative', 'long-context'], quality: 5 },
    { id: 'anthropic-opus47', name: 'Claude Opus 4.7', provider: 'Anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '1M', useCases: ['reasoning', 'analysis', 'coding', 'creative'], quality: 5 },
    { id: 'anthropic-sonnet46', name: 'Claude Sonnet 4.6', provider: 'Anthropic', tier: 'Mid', input: 3.00, output: 15.00, context: '1M', useCases: ['coding', 'analysis', 'general', 'long-context'], quality: 4 },
    { id: 'anthropic-haiku', name: 'Claude Haiku 4.5', provider: 'Anthropic', tier: 'Budget', input: 1.00, output: 5.00, context: '200K', useCases: ['chat', 'classification', 'extraction', 'speed'], quality: 3 },
    { id: 'google-gemini3-pro', name: 'Gemini 3.1 Pro', provider: 'Google', tier: 'Mid', input: 2.00, output: 12.00, context: '1M', useCases: ['reasoning', 'multimodal', 'long-context', 'coding'], quality: 4 },
    { id: 'google-pro', name: 'Gemini 2.5 Pro', provider: 'Google', tier: 'Mid', input: 1.25, output: 10.00, context: '1M', useCases: ['reasoning', 'coding', 'long-context', 'general'], quality: 4 },
    { id: 'google-flash', name: 'Gemini 2.0 Flash', provider: 'Google', tier: 'Budget', input: 0.10, output: 0.40, context: '1M', useCases: ['chat', 'classification', 'speed', 'long-context'], quality: 3 },
    { id: 'google-flash-lite', name: 'Gemini 2.0 Flash Lite', provider: 'Google', tier: 'Budget', input: 0.075, output: 0.30, context: '1M', useCases: ['classification', 'extraction', 'speed'], quality: 2 },
    { id: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro', provider: 'DeepSeek', tier: 'Budget', input: 0.435, output: 0.87, context: '1M', useCases: ['coding', 'reasoning', 'analysis', 'long-context'], quality: 4 },
    { id: 'deepseek-v4-flash', name: 'DeepSeek V4 Flash', provider: 'DeepSeek', tier: 'Budget', input: 0.14, output: 0.28, context: '1M', useCases: ['coding', 'chat', 'speed', 'long-context'], quality: 3 },
    { id: 'mistral-large', name: 'Mistral Large 3', provider: 'Mistral', tier: 'Budget', input: 0.50, output: 1.50, context: '128K', useCases: ['coding', 'reasoning', 'multilingual'], quality: 3 },
    { id: 'mistral-small', name: 'Mistral Small 4', provider: 'Mistral', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', useCases: ['chat', 'classification', 'speed'], quality: 3 },
    { id: 'llama-4-scout', name: 'Llama 4 Scout', provider: 'Meta', tier: 'Budget', input: 0.11, output: 0.34, context: '10M', useCases: ['general', 'coding', 'long-context'], quality: 3 },
    { id: 'xai-grok3', name: 'Grok 4.3', provider: 'xAI', tier: 'Mid', input: 1.25, output: 2.50, context: '1M', useCases: ['reasoning', 'analysis', 'creative'], quality: 5 },
    { id: 'xai-grok3-mini', name: 'Grok Build 0.1', provider: 'xAI', tier: 'Budget', input: 0.30, output: 0.50, context: '256K', useCases: ['general', 'chat', 'coding'], quality: 4 },
];

function costPerRequest(model, inputTokens, outputTokens) {
    return (inputTokens / 1e6) * model.input + (outputTokens / 1e6) * model.output;
}

module.exports = function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

    const { use_case, budget, quality, max_cost, min_context, input_tokens, output_tokens } = req.query;

    let results = [...MODELS];

    // Filter by use case
    if (use_case) {
        const uc = use_case.toLowerCase();
        results = results.filter(m => m.useCases.includes(uc));
    }

    // Filter by budget tier
    if (budget) {
        const b = budget.toLowerCase();
        if (b === 'low' || b === 'budget') results = results.filter(m => m.tier === 'Budget');
        else if (b === 'mid' || b === 'medium') results = results.filter(m => m.tier === 'Mid');
        else if (b === 'high' || b === 'premium') results = results.filter(m => m.tier === 'Premium');
    }

    // Filter by quality
    if (quality) {
        const q = parseInt(quality);
        if (!isNaN(q)) results = results.filter(m => m.quality >= q);
    }

    // Filter by max cost per request
    const inp = parseInt(input_tokens) || 1000;
    const out = parseInt(output_tokens) || 500;
    if (max_cost) {
        const mc = parseFloat(max_cost);
        if (!isNaN(mc)) results = results.filter(m => costPerRequest(m, inp, out) <= mc);
    }

    // Filter by min context window
    if (min_context) {
        const mc = parseInt(min_context);
        if (!isNaN(mc)) {
            results = results.filter(m => {
                const ctx = m.context.replace('M', '000000').replace('K', '000');
                return parseInt(ctx) >= mc;
            });
        }
    }

    // Score and sort
    results = results.map(m => ({
        ...m,
        costPerRequest: costPerRequest(m, inp, out),
        monthlyCost: costPerRequest(m, inp, out) * 10000 * 30, // assuming 10K requests/day
    }));

    // Sort by quality first, then by cost
    results.sort((a, b) => {
        if (b.quality !== a.quality) return b.quality - a.quality;
        return a.costPerRequest - b.costPerRequest;
    });

    return res.status(200).json({
        recommendations: results.slice(0, 5),
        total: results.length,
        params: { use_case, budget, quality, max_cost, min_context, input_tokens: inp, output_tokens: out },
        source: 'https://getapipulse.com',
        docs: 'https://getapipulse.com/api-docs.html'
    });
};
