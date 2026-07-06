// Vercel Serverless Function: AI Model Recommendations
// Get personalized model recommendations based on use case and requirements
//
// Usage:
//   GET /api/recommend?use_case=coding&budget=low&quality=high
//   GET /api/recommend?use_case=chat&max_cost=0.01
//   GET /api/recommend?use_case=reasoning&min_context=1000000

const MODELS = [
    { id: 'openai-gpt55', name: 'GPT-5.5', provider: 'OpenAI', tier: 'Premium', input: 5.00, output: 30.00, context: '1M', useCases: ['reasoning', 'analysis', 'coding', 'creative'], quality: 5 },
    { id: 'openai-gpt55-pro', name: 'GPT-5.5 Pro', provider: 'OpenAI', tier: 'Premium', input: 30.00, output: 180.00, context: '1M', useCases: ['reasoning', 'analysis', 'coding'], quality: 5 },
    { id: 'openai-gpt53-codex', name: 'GPT-5.3 Codex', provider: 'OpenAI', tier: 'Mid', input: 1.75, output: 14.00, context: '400K', useCases: ['coding', 'reasoning', 'analysis'], quality: 4 },
    { id: 'openai-gpt5', name: 'GPT-5', provider: 'OpenAI', tier: 'Premium', input: 1.25, output: 10.00, context: '272K', useCases: ['reasoning', 'coding', 'general', 'analysis'], quality: 5 },
    { id: 'openai-gpt5-mini', name: 'GPT-5 mini', provider: 'OpenAI', tier: 'Budget', input: 0.25, output: 2.00, context: '272K', useCases: ['general', 'chat', 'classification', 'extraction'], quality: 3 },
    { id: 'openai-gpt54', name: 'GPT-5.4', provider: 'OpenAI', tier: 'Mid', input: 2.50, output: 15.00, context: '400K', useCases: ['coding', 'reasoning', 'analysis'], quality: 4 },
    { id: 'openai-gpt54-mini', name: 'GPT-5.4 mini', provider: 'OpenAI', tier: 'Budget', input: 0.75, output: 4.50, context: '400K', useCases: ['chat', 'general', 'coding'], quality: 3 },
    { id: 'openai-gpt54-nano', name: 'GPT-5.4 nano', provider: 'OpenAI', tier: 'Budget', input: 0.20, output: 1.25, context: '400K', useCases: ['chat', 'classification', 'speed'], quality: 3 },
    { id: 'openai-gpt54-pro', name: 'GPT-5.4 Pro', provider: 'OpenAI', tier: 'Premium', input: 30.00, output: 180.00, context: '400K', useCases: ['reasoning', 'coding', 'analysis'], quality: 5 },
    { id: 'openai-gpt-oss-120b', name: 'GPT-oss 120B', provider: 'OpenAI', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', useCases: ['general', 'coding', 'chat'], quality: 3 },
    { id: 'openai-gpt-oss-20b', name: 'GPT-oss 20B', provider: 'OpenAI', tier: 'Budget', input: 0.08, output: 0.35, context: '128K', useCases: ['chat', 'classification', 'speed'], quality: 2 },
    { id: 'openai-gpt4o', name: 'GPT-4o', provider: 'OpenAI', tier: 'Mid', input: 2.50, output: 10.00, context: '128K', useCases: ['multimodal', 'general', 'vision', 'coding'], quality: 4 },
    { id: 'openai-gpt4o-mini', name: 'GPT-4o mini', provider: 'OpenAI', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', useCases: ['chat', 'classification', 'extraction', 'summarization'], quality: 3 },
    { id: 'anthropic-opus48', name: 'Claude Opus 4.8', provider: 'Anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '1M', useCases: ['reasoning', 'analysis', 'coding', 'creative', 'long-context'], quality: 5 },
    { id: 'anthropic-opus47', name: 'Claude Opus 4.7', provider: 'Anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '1M', useCases: ['reasoning', 'analysis', 'coding', 'creative'], quality: 5 },
    { id: 'anthropic-opus', name: 'Claude 4 Opus', provider: 'Anthropic', tier: 'Premium', input: 15.00, output: 75.00, context: '200K', useCases: ['reasoning', 'creative', 'analysis'], quality: 5 },
    { id: 'anthropic-sonnet5', name: 'Claude Sonnet 5', provider: 'Anthropic', tier: 'Mid', input: 2.00, output: 10.00, context: '1M', useCases: ['coding', 'analysis', 'general', 'long-context'], quality: 4 },
    { id: 'anthropic-sonnet46', name: 'Claude Sonnet 4.6', provider: 'Anthropic', tier: 'Mid', input: 2.00, output: 10.00, context: '1M', useCases: ['coding', 'analysis', 'general', 'long-context'], quality: 4 },
    { id: 'anthropic-sonnet', name: 'Claude Sonnet 4', provider: 'Anthropic', tier: 'Mid', input: 2.00, output: 10.00, context: '200K', useCases: ['coding', 'general', 'analysis'], quality: 4 },
    { id: 'anthropic-haiku', name: 'Claude Haiku 4.5', provider: 'Anthropic', tier: 'Budget', input: 1.00, output: 5.00, context: '200K', useCases: ['chat', 'classification', 'extraction', 'speed'], quality: 3 },
    { id: 'anthropic-fable5', name: 'Claude Fable 5', provider: 'Anthropic', tier: 'Premium', input: 10.00, output: 50.00, context: '1M', useCases: ['creative', 'reasoning', 'analysis'], quality: 5 },
    { id: 'anthropic-mythos5', name: 'Claude Mythos 5', provider: 'Anthropic', tier: 'Premium', input: 10.00, output: 50.00, context: '1M', useCases: ['creative', 'reasoning', 'analysis'], quality: 5 },
    { id: 'google-gemini3-pro', name: 'Gemini 3.1 Pro', provider: 'Google', tier: 'Mid', input: 2.00, output: 12.00, context: '1M', useCases: ['reasoning', 'multimodal', 'long-context', 'coding'], quality: 4 },
    { id: 'google-pro', name: 'Gemini 2.5 Pro', provider: 'Google', tier: 'Mid', input: 1.25, output: 10.00, context: '1M', useCases: ['reasoning', 'coding', 'long-context', 'general'], quality: 4 },
    { id: 'google-gemini35-flash', name: 'Gemini 3.5 Flash', provider: 'Google', tier: 'Mid', input: 1.50, output: 9.00, context: '1M', useCases: ['chat', 'speed', 'general'], quality: 3 },
    { id: 'google-gemini3-flash', name: 'Gemini 3 Flash', provider: 'Google', tier: 'Budget', input: 0.50, output: 3.00, context: '1M', useCases: ['chat', 'speed', 'classification'], quality: 3 },
    { id: 'google-gemini31-flash-lite', name: 'Gemini 3.1 Flash-Lite', provider: 'Google', tier: 'Budget', input: 0.25, output: 1.50, context: '1M', useCases: ['classification', 'extraction', 'speed'], quality: 2 },
    { id: 'google-25-flash-lite', name: 'Gemini 2.5 Flash-Lite', provider: 'Google', tier: 'Budget', input: 0.10, output: 0.40, context: '1M', useCases: ['classification', 'extraction', 'speed'], quality: 2 },
    { id: 'google-flash', name: 'Gemini 2.0 Flash', provider: 'Google', tier: 'Budget', input: 0.10, output: 0.40, context: '1M', useCases: ['chat', 'classification', 'speed', 'long-context'], quality: 3 },
    { id: 'google-flash-lite', name: 'Gemini 2.0 Flash Lite', provider: 'Google', tier: 'Budget', input: 0.075, output: 0.30, context: '1M', useCases: ['classification', 'extraction', 'speed'], quality: 2 },
    { id: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro', provider: 'DeepSeek', tier: 'Budget', input: 0.435, output: 0.87, context: '1M', useCases: ['coding', 'reasoning', 'analysis', 'long-context'], quality: 4 },
    { id: 'deepseek-v4-flash', name: 'DeepSeek V4 Flash', provider: 'DeepSeek', tier: 'Budget', input: 0.14, output: 0.28, context: '1M', useCases: ['coding', 'chat', 'speed', 'long-context'], quality: 3 },
    { id: 'deepseek-v32', name: 'DeepSeek V3.2', provider: 'DeepSeek', tier: 'Budget', input: 0.23, output: 0.34, context: '128K', useCases: ['coding', 'chat', 'general'], quality: 3 },
    { id: 'deepseek-v3', name: 'DeepSeek V3', provider: 'DeepSeek', tier: 'Budget', input: 0.27, output: 1.10, context: '128K', useCases: ['coding', 'general', 'chat'], quality: 3 },
    { id: 'mistral-large', name: 'Mistral Large 3', provider: 'Mistral', tier: 'Budget', input: 0.50, output: 1.50, context: '262K', useCases: ['coding', 'reasoning', 'multilingual'], quality: 3 },
    { id: 'mistral-medium', name: 'Mistral Medium 3.5', provider: 'Mistral', tier: 'Mid', input: 1.50, output: 7.50, context: '128K', useCases: ['coding', 'analysis', 'general'], quality: 4 },
    { id: 'mistral-small', name: 'Mistral Small 4', provider: 'Mistral', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', useCases: ['chat', 'classification', 'speed'], quality: 3 },
    { id: 'cohere-command-a', name: 'Command A', provider: 'Cohere', tier: 'Mid', input: 2.50, output: 10.00, context: '128K', useCases: ['reasoning', 'analysis', 'general'], quality: 4 },
    { id: 'cohere-command-r-plus', name: 'Command R+', provider: 'Cohere', tier: 'Mid', input: 2.50, output: 10.00, context: '128K', useCases: ['reasoning', 'analysis', 'general'], quality: 4 },
    { id: 'cohere-command-r', name: 'Command R', provider: 'Cohere', tier: 'Budget', input: 0.50, output: 1.50, context: '128K', useCases: ['chat', 'general', 'classification'], quality: 3 },
    { id: 'llama-4-scout', name: 'Llama 4 Scout', provider: 'Meta (Together.ai)', tier: 'Budget', input: 0.18, output: 0.59, context: '1M', useCases: ['general', 'coding', 'long-context'], quality: 3 },
    { id: 'llama-4-maverick', name: 'Llama 4 Maverick', provider: 'Meta (Together.ai)', tier: 'Budget', input: 0.27, output: 0.85, context: '1M', useCases: ['coding', 'general', 'reasoning'], quality: 3 },
    { id: 'llama-3.1-70b', name: 'Llama 3.1 70B', provider: 'Meta (Together.ai)', tier: 'Mid', input: 0.88, output: 0.88, context: '128K', useCases: ['general', 'coding', 'chat'], quality: 3 },
    { id: 'llama-3.1-8b', name: 'Llama 3.1 8B', provider: 'Meta (Together.ai)', tier: 'Budget', input: 0.10, output: 0.10, context: '128K', useCases: ['chat', 'classification', 'speed'], quality: 2 },
    { id: 'kimi-k26', name: 'Kimi K2.6', provider: 'Moonshot', tier: 'Budget', input: 0.95, output: 4.00, context: '256K', useCases: ['chat', 'general', 'long-context'], quality: 3 },
    { id: 'xai-grok3', name: 'Grok 4.3', provider: 'xAI', tier: 'Mid', input: 1.25, output: 2.50, context: '1M', useCases: ['reasoning', 'analysis', 'creative'], quality: 5 },
    { id: 'xai-grok3-mini', name: 'Grok Build 0.1', provider: 'xAI', tier: 'Budget', input: 1.00, output: 2.00, context: '256K', useCases: ['general', 'chat', 'coding'], quality: 4 },
    { id: 'ai21-jamba17', name: 'Jamba 1.7 Large', provider: 'AI21', tier: 'Mid', input: 2.00, output: 8.00, context: '256K', useCases: ['general', 'long-context', 'chat'], quality: 3 },
    { id: 'ai21-jamba', name: 'Jamba 1.5 Large', provider: 'AI21', tier: 'Mid', input: 2.00, output: 8.00, context: '256K', useCases: ['general', 'long-context', 'chat'], quality: 3 }
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
        results = results.filter(m => m.useCases.some(u => u.includes(uc) || uc.includes(u)));
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
        const q = quality.toLowerCase();
        if (q === 'high') results = results.filter(m => m.quality >= 4);
        else if (q === 'low') results = results.filter(m => m.quality <= 3);
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
        monthlyCost: costPerRequest(m, inp, out) * 10000 * 30,
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