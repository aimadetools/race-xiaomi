// APIpulse — Centralized Pricing Data (Single Source of Truth)
// Update this file when provider pricing changes. All pages import from here.
// Last verified: Jun 1, 2026
const PRICING_LAST_UPDATED = 'Jun 1, 2026';

const API_MODELS = [
    // OpenAI
    { id: 'openai-gpt55', name: 'GPT-5.5', provider: 'OpenAI', providerSlug: 'openai', tier: 'Premium', input: 5.00, output: 30.00, context: '1M', verified: 'May 2026' },
    { id: 'openai-gpt55-pro', name: 'GPT-5.5 Pro', provider: 'OpenAI', providerSlug: 'openai', tier: 'Premium', input: 30.00, output: 180.00, context: '1M', verified: 'May 2026' },
    { id: 'openai-gpt53-codex', name: 'GPT-5.3 Codex', provider: 'OpenAI', providerSlug: 'openai', tier: 'Mid', input: 1.75, output: 14.00, context: '400K', verified: 'May 2026' },
    { id: 'openai-gpt5', name: 'GPT-5', provider: 'OpenAI', providerSlug: 'openai', tier: 'Premium', input: 1.25, output: 10.00, context: '272K', verified: 'May 2026' },
    { id: 'openai-gpt5-mini', name: 'GPT-5 mini', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.25, output: 2.00, context: '272K', verified: 'May 2026' },
    { id: 'openai-gpt-oss-120b', name: 'GPT-oss 120B', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', verified: 'May 2026' },
    { id: 'openai-gpt-oss-20b', name: 'GPT-oss 20B', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.08, output: 0.35, context: '128K', verified: 'May 2026' },
    { id: 'openai-gpt4o', name: 'GPT-4o', provider: 'OpenAI', providerSlug: 'openai', tier: 'Mid', input: 2.50, output: 10.00, context: '128K', verified: 'May 2026' },
    { id: 'openai-gpt4o-mini', name: 'GPT-4o mini', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', verified: 'May 2026' },
    // Anthropic
    { id: 'anthropic-opus48', name: 'Claude Opus 4.8', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '1M', verified: 'May 2026' },
    { id: 'anthropic-opus47', name: 'Claude Opus 4.7', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '1M', verified: 'May 2026' },
    { id: 'anthropic-opus', name: 'Claude 4 Opus', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Premium', input: 15.00, output: 75.00, context: '200K', verified: 'May 2026' },  // Deprecated — retiring June 15, 2026
    { id: 'anthropic-sonnet46', name: 'Claude Sonnet 4.6', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Mid', input: 3.00, output: 15.00, context: '1M', verified: 'May 2026' },
    { id: 'anthropic-sonnet', name: 'Claude Sonnet 4', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Mid', input: 3.00, output: 15.00, context: '200K', verified: 'May 2026' },  // Deprecated — retiring June 15, 2026
    { id: 'anthropic-haiku', name: 'Claude Haiku 4.5', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Budget', input: 1.00, output: 5.00, context: '200K', verified: 'May 2026' },
    // Google
    { id: 'google-gemini3-pro', name: 'Gemini 3.1 Pro', provider: 'Google', providerSlug: 'google', tier: 'Mid', input: 2.00, output: 12.00, context: '1M', verified: 'May 2026' },
    { id: 'google-pro', name: 'Gemini 2.5 Pro', provider: 'Google', providerSlug: 'google', tier: 'Mid', input: 1.25, output: 10.00, context: '1M', verified: 'May 2026' },
    { id: 'google-flash', name: 'Gemini 2.0 Flash', provider: 'Google', providerSlug: 'google', tier: 'Budget', input: 0.10, output: 0.40, context: '1M', verified: 'May 2026' },
    { id: 'google-flash-lite', name: 'Gemini 2.0 Flash Lite', provider: 'Google', providerSlug: 'google', tier: 'Budget', input: 0.075, output: 0.30, context: '1M', verified: 'May 2026' },
    // DeepSeek
    { id: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro', provider: 'DeepSeek', providerSlug: 'deepseek', tier: 'Budget', input: 0.435, output: 0.87, context: '1M', verified: 'Jun 2026' },
    { id: 'deepseek-v4-flash', name: 'DeepSeek V4 Flash', provider: 'DeepSeek', providerSlug: 'deepseek', tier: 'Budget', input: 0.14, output: 0.28, context: '1M', verified: 'May 2026' },
    { id: 'deepseek-v3', name: 'DeepSeek V3', provider: 'DeepSeek', providerSlug: 'deepseek', tier: 'Budget', input: 0.27, output: 1.10, context: '128K', verified: 'May 2026' },  // Deprecated — superseded by V4 Flash
    // Mistral
    { id: 'mistral-large', name: 'Mistral Large 3', provider: 'Mistral', providerSlug: 'mistral', tier: 'Budget', input: 0.50, output: 1.50, context: '128K', verified: 'May 2026' },
    { id: 'mistral-small', name: 'Mistral Small 4', provider: 'Mistral', providerSlug: 'mistral', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', verified: 'May 2026' },
    // Cohere
    { id: 'cohere-command-r-plus', name: 'Command R+', provider: 'Cohere', providerSlug: 'cohere', tier: 'Mid', input: 2.50, output: 10.00, context: '128K', verified: 'May 2026' },
    { id: 'cohere-command-r', name: 'Command R', provider: 'Cohere', providerSlug: 'cohere', tier: 'Budget', input: 0.50, output: 1.50, context: '128K', verified: 'May 2026' },
    // Meta (Together.ai)
    { id: 'llama-4-scout', name: 'Llama 4 Scout', provider: 'Meta (Together.ai)', providerSlug: 'together', tier: 'Budget', input: 0.11, output: 0.34, context: '10M', verified: 'May 2026' },  // Dedicated inference only — not on serverless
    { id: 'llama-4-maverick', name: 'Llama 4 Maverick', provider: 'Meta (Together.ai)', providerSlug: 'together', tier: 'Budget', input: 0.20, output: 0.60, context: '10M', verified: 'May 2026' },  // Dedicated inference only — not on serverless
    { id: 'llama-3.1-70b', name: 'Llama 3.1 70B', provider: 'Meta (Together.ai)', providerSlug: 'together', tier: 'Mid', input: 0.88, output: 0.88, context: '128K', verified: 'May 2026' },
    { id: 'llama-3.1-8b', name: 'Llama 3.1 8B', provider: 'Meta (Together.ai)', providerSlug: 'together', tier: 'Budget', input: 0.10, output: 0.10, context: '128K', verified: 'May 2026' },
    // Moonshot (Kimi)
    { id: 'kimi-k26', name: 'Kimi K2.6', provider: 'Moonshot', providerSlug: 'moonshot', tier: 'Budget', input: 0.90, output: 3.75, context: '256K', verified: 'May 2026' },
    // xAI
    { id: 'xai-grok3', name: 'Grok 4.3', provider: 'xAI', providerSlug: 'xai', tier: 'Mid', input: 12.50, output: 25.00, context: '1M', verified: 'Jun 2026' },  // Was Grok 3 at $30/$150 — rebranded & repriced Jun 2026
    { id: 'xai-grok3-mini', name: 'Grok Build 0.1', provider: 'xAI', providerSlug: 'xai', tier: 'Budget', input: 10.00, output: 20.00, context: '256K', verified: 'Jun 2026' },  // Replaced Grok 3 Mini
    // AI21
    { id: 'ai21-jamba', name: 'Jamba 1.5 Large', provider: 'AI21', providerSlug: 'ai21', tier: 'Mid', input: 2.00, output: 8.00, context: '256K', verified: 'May 2026' },
];

// Helper: Get model by ID
function getModelById(id) {
    return API_MODELS.find(m => m.id === id);
}

// Helper: Get all models for a provider
function getModelsByProvider(providerSlug) {
    return API_MODELS.filter(m => m.providerSlug === providerSlug);
}

// Helper: Get models by tier
function getModelsByTier(tier) {
    return API_MODELS.filter(m => m.tier === tier);
}

// Helper: Get unique providers
function getProviders() {
    const seen = new Set();
    return API_MODELS.filter(m => {
        if (seen.has(m.providerSlug)) return false;
        seen.add(m.providerSlug);
        return true;
    }).map(m => ({ slug: m.providerSlug, name: m.provider }));
}

// Helper: Format for calculator (index.html, calculator.html, pro.html)
function getCalculatorData() {
    const result = {};
    API_MODELS.forEach(m => {
        result[m.id] = { name: m.provider + ' ' + m.name, input: m.input, output: m.output };
    });
    return result;
}

// Helper: Format for comparison tool (compare.html)
function getComparisonData() {
    const result = {};
    API_MODELS.forEach(m => {
        result[m.id] = { name: m.name, provider: m.provider, input: m.input, output: m.output, context: m.context };
    });
    return result;
}

// Helper: Format for pricing index (pricing-index.html)
function getPricingIndexData() {
    return API_MODELS.map(m => ({
        name: m.name,
        provider: m.provider,
        tier: m.tier,
        input: m.input,
        output: m.output,
        context: m.context,
        verified: m.verified
    }));
}

// Helper: Get model count
function getModelCount() {
    return API_MODELS.length;
}

// Helper: Get provider count
function getProviderCount() {
    return new Set(API_MODELS.map(m => m.providerSlug)).size;
}

// Helper: Get calculator data for a specific provider (for provider landing pages)
function getProviderCalculatorData(providerSlug) {
    const result = {};
    API_MODELS.filter(m => m.providerSlug === providerSlug).forEach(m => {
        result[m.id] = { name: m.name, input: m.input, output: m.output };
    });
    return result;
}

// Helper: Get top N cheaper recommendations for a given model and usage
function getRecommendations(currentModelId, inputTokens, outputTokens, requests, days, count) {
    count = count || 3;
    const current = getModelById(currentModelId);
    if (!current) return [];
    const totalInput = inputTokens * requests * days;
    const totalOutput = outputTokens * requests * days;
    const currentCost = (totalInput / 1000000) * current.input + (totalOutput / 1000000) * current.output;

    const alternatives = API_MODELS
        .filter(m => m.id !== currentModelId)
        .map(m => {
            const cost = (totalInput / 1000000) * m.input + (totalOutput / 1000000) * m.output;
            return {
                id: m.id,
                name: m.name,
                provider: m.provider,
                providerSlug: m.providerSlug,
                tier: m.tier,
                input: m.input,
                output: m.output,
                context: m.context,
                cost: cost,
                savings: currentCost - cost,
                savingsPct: currentCost > 0 ? ((currentCost - cost) / currentCost * 100) : 0
            };
        })
        .filter(a => a.savings > 0)
        .sort((a, b) => b.savings - a.savings);

    return alternatives.slice(0, count);
}
