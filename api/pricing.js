// Vercel Serverless Function: API Pricing Data
// Returns all model pricing data as JSON
// Developers can use this to programmatically access APIpulse pricing data
// Use cases: tools, dashboards, CI/CD cost checks, budget calculators

const API_MODELS = [
    // OpenAI
    { id: 'openai-gpt55', name: 'GPT-5.5', provider: 'OpenAI', providerSlug: 'openai', tier: 'Premium', input: 5.00, output: 30.00, context: '1M', verified: 'Apr 2026' },
    { id: 'openai-gpt55-pro', name: 'GPT-5.5 Pro', provider: 'OpenAI', providerSlug: 'openai', tier: 'Premium', input: 30.00, output: 180.00, context: '1M', verified: 'Apr 2026' },
    { id: 'openai-gpt53-codex', name: 'GPT-5.3 Codex', provider: 'OpenAI', providerSlug: 'openai', tier: 'Mid', input: 1.75, output: 14.00, context: '400K', verified: 'Apr 2026' },
    { id: 'openai-gpt5', name: 'GPT-5', provider: 'OpenAI', providerSlug: 'openai', tier: 'Premium', input: 10.00, output: 30.00, context: '256K', verified: 'Apr 2026' },
    { id: 'openai-gpt5-mini', name: 'GPT-5 mini', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.40, output: 1.60, context: '256K', verified: 'Apr 2026' },
    { id: 'openai-gpt-oss-120b', name: 'GPT-oss 120B', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', verified: 'Apr 2026' },
    { id: 'openai-gpt-oss-20b', name: 'GPT-oss 20B', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.08, output: 0.35, context: '128K', verified: 'Apr 2026' },
    { id: 'openai-gpt4o', name: 'GPT-4o', provider: 'OpenAI', providerSlug: 'openai', tier: 'Mid', input: 2.50, output: 10.00, context: '128K', verified: 'Apr 2026' },
    { id: 'openai-gpt4o-mini', name: 'GPT-4o mini', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', verified: 'Apr 2026' },
    // Anthropic
    { id: 'anthropic-opus47', name: 'Claude Opus 4.7', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '200K', verified: 'Apr 2026' },
    { id: 'anthropic-opus', name: 'Claude 4 Opus', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Premium', input: 15.00, output: 75.00, context: '200K', verified: 'Apr 2026' },
    { id: 'anthropic-sonnet46', name: 'Claude Sonnet 4.6', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Mid', input: 3.00, output: 15.00, context: '200K', verified: 'Apr 2026' },
    { id: 'anthropic-sonnet', name: 'Claude Sonnet 4', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Mid', input: 3.00, output: 15.00, context: '200K', verified: 'Apr 2026' },
    { id: 'anthropic-haiku', name: 'Claude Haiku 3.5', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Budget', input: 0.80, output: 4.00, context: '200K', verified: 'Apr 2026' },
    // Google
    { id: 'google-gemini3-pro', name: 'Gemini 3 Pro', provider: 'Google', providerSlug: 'google', tier: 'Mid', input: 2.00, output: 12.00, context: '10M', verified: 'Apr 2026' },
    { id: 'google-pro', name: 'Gemini 2.5 Pro', provider: 'Google', providerSlug: 'google', tier: 'Mid', input: 1.25, output: 10.00, context: '1M', verified: 'Apr 2026' },
    { id: 'google-flash', name: 'Gemini 2.0 Flash', provider: 'Google', providerSlug: 'google', tier: 'Budget', input: 0.10, output: 0.40, context: '1M', verified: 'Apr 2026' },
    // DeepSeek
    { id: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro', provider: 'DeepSeek', providerSlug: 'deepseek', tier: 'Mid', input: 2.18, output: 8.72, context: '128K', verified: 'Apr 2026' },
    { id: 'deepseek-v4-flash', name: 'DeepSeek V4 Flash', provider: 'DeepSeek', providerSlug: 'deepseek', tier: 'Budget', input: 0.14, output: 0.28, context: '128K', verified: 'Apr 2026' },
    { id: 'deepseek-v3', name: 'DeepSeek V3', provider: 'DeepSeek', providerSlug: 'deepseek', tier: 'Budget', input: 0.27, output: 1.10, context: '128K', verified: 'Apr 2026' },
    // Mistral
    { id: 'mistral-large', name: 'Mistral Large', provider: 'Mistral', providerSlug: 'mistral', tier: 'Mid', input: 2.00, output: 6.00, context: '128K', verified: 'Apr 2026' },
    { id: 'mistral-small', name: 'Mistral Small', provider: 'Mistral', providerSlug: 'mistral', tier: 'Budget', input: 0.10, output: 0.30, context: '32K', verified: 'Apr 2026' },
    // Cohere
    { id: 'cohere-command-r-plus', name: 'Command R+', provider: 'Cohere', providerSlug: 'cohere', tier: 'Mid', input: 2.50, output: 10.00, context: '128K', verified: 'Apr 2026' },
    { id: 'cohere-command-r', name: 'Command R', provider: 'Cohere', providerSlug: 'cohere', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', verified: 'Apr 2026' },
    // Meta (Together.ai)
    { id: 'llama-4-scout', name: 'Llama 4 Scout', provider: 'Meta (Together.ai)', providerSlug: 'together', tier: 'Budget', input: 0.11, output: 0.34, context: '10M', verified: 'Apr 2026' },
    { id: 'llama-4-maverick', name: 'Llama 4 Maverick', provider: 'Meta (Together.ai)', providerSlug: 'together', tier: 'Budget', input: 0.20, output: 0.60, context: '10M', verified: 'Apr 2026' },
    { id: 'llama-3.1-70b', name: 'Llama 3.1 70B', provider: 'Meta (Together.ai)', providerSlug: 'together', tier: 'Mid', input: 0.88, output: 0.88, context: '128K', verified: 'Apr 2026' },
    { id: 'llama-3.1-8b', name: 'Llama 3.1 8B', provider: 'Meta (Together.ai)', providerSlug: 'together', tier: 'Budget', input: 0.18, output: 0.18, context: '128K', verified: 'Apr 2026' },
    // Moonshot (Kimi)
    { id: 'kimi-k26', name: 'Kimi K2.6', provider: 'Moonshot', providerSlug: 'moonshot', tier: 'Budget', input: 0.60, output: 2.50, context: '128K', verified: 'Apr 2026' },
    // xAI
    { id: 'xai-grok3', name: 'Grok 3', provider: 'xAI', providerSlug: 'xai', tier: 'Mid', input: 3.00, output: 15.00, context: '128K', verified: 'Apr 2026' },
    { id: 'xai-grok3-mini', name: 'Grok 3 Mini', provider: 'xAI', providerSlug: 'xai', tier: 'Budget', input: 0.30, output: 0.50, context: '128K', verified: 'Apr 2026' },
    // AI21
    { id: 'ai21-jamba', name: 'Jamba 1.5 Large', provider: 'AI21', providerSlug: 'ai21', tier: 'Mid', input: 2.00, output: 8.00, context: '256K', verified: 'Apr 2026' },
];

module.exports = function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed. Use GET.' });
    }

    const { provider, tier, model } = req.query;

    let data = API_MODELS;

    // Filter by provider
    if (provider) {
        data = data.filter(m => m.providerSlug === provider.toLowerCase());
    }

    // Filter by tier
    if (tier) {
        data = data.filter(m => m.tier.toLowerCase() === tier.toLowerCase());
    }

    // Get single model
    if (model) {
        const found = data.find(m => m.id === model);
        if (!found) {
            return res.status(404).json({ error: 'Model not found', available: API_MODELS.map(m => m.id) });
        }
        return res.status(200).json({
            model: found,
            source: 'https://getapipulse.com',
            docs: 'https://getapipulse.com/pricing-index.html'
        });
    }

    // Return collection
    const providers = [...new Set(data.map(m => m.provider))];
    const tiers = [...new Set(data.map(m => m.tier))];

    return res.status(200).json({
        models: data,
        meta: {
            count: data.length,
            providers: providers,
            tiers: tiers,
            lastUpdated: '2026-04-27',
            source: 'https://getapipulse.com',
            docs: 'https://getapipulse.com/pricing-index.html'
        }
    });
};
