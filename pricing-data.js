// APIpulse — Centralized Pricing Data (Single Source of Truth)
// Update this file when provider pricing changes. All pages import from here.
// Last verified: April 25, 2026

const API_MODELS = [
    // OpenAI
    { id: 'openai-gpt5', name: 'GPT-5', provider: 'OpenAI', providerSlug: 'openai', tier: 'Premium', input: 10.00, output: 30.00, context: '256K', verified: 'Apr 2026' },
    { id: 'openai-gpt5-mini', name: 'GPT-5 mini', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.40, output: 1.60, context: '256K', verified: 'Apr 2026' },
    { id: 'openai-gpt4o', name: 'GPT-4o', provider: 'OpenAI', providerSlug: 'openai', tier: 'Mid', input: 2.50, output: 10.00, context: '128K', verified: 'Apr 2026' },
    { id: 'openai-gpt4o-mini', name: 'GPT-4o mini', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', verified: 'Apr 2026' },
    { id: 'openai-gpt4-turbo', name: 'GPT-4 Turbo', provider: 'OpenAI', providerSlug: 'openai', tier: 'Premium', input: 10.00, output: 30.00, context: '128K', verified: 'Apr 2026' },
    { id: 'openai-gpt35-turbo', name: 'GPT-3.5 Turbo', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.50, output: 1.50, context: '16K', verified: 'Apr 2026' },
    // Anthropic
    { id: 'anthropic-opus', name: 'Claude 4 Opus', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Premium', input: 15.00, output: 75.00, context: '200K', verified: 'Apr 2026' },
    { id: 'anthropic-sonnet', name: 'Claude Sonnet 4', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Premium', input: 3.00, output: 15.00, context: '200K', verified: 'Apr 2026' },
    { id: 'anthropic-haiku', name: 'Claude Haiku 3.5', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Mid', input: 0.80, output: 4.00, context: '200K', verified: 'Apr 2026' },
    // Google
    { id: 'google-pro', name: 'Gemini 2.5 Pro', provider: 'Google', providerSlug: 'google', tier: 'Mid', input: 1.25, output: 10.00, context: '1M', verified: 'Apr 2026' },
    { id: 'google-flash', name: 'Gemini 2.0 Flash', provider: 'Google', providerSlug: 'google', tier: 'Budget', input: 0.10, output: 0.40, context: '1M', verified: 'Apr 2026' },
    // Mistral
    { id: 'mistral-large', name: 'Mistral Large', provider: 'Mistral', providerSlug: 'mistral', tier: 'Mid', input: 2.00, output: 6.00, context: '128K', verified: 'Apr 2026' },
    { id: 'mistral-small', name: 'Mistral Small', provider: 'Mistral', providerSlug: 'mistral', tier: 'Budget', input: 0.10, output: 0.30, context: '32K', verified: 'Apr 2026' },
    // Cohere
    { id: 'cohere-command-r-plus', name: 'Command R+', provider: 'Cohere', providerSlug: 'cohere', tier: 'Mid', input: 2.50, output: 10.00, context: '128K', verified: 'Apr 2026' },
    { id: 'cohere-command-r', name: 'Command R', provider: 'Cohere', providerSlug: 'cohere', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', verified: 'Apr 2026' },
    // Together.ai (Meta Llama)
    { id: 'llama-3.1-70b', name: 'Llama 3.1 70B', provider: 'Meta (Together.ai)', providerSlug: 'together', tier: 'Mid', input: 0.88, output: 0.88, context: '128K', verified: 'Apr 2026' },
    { id: 'llama-3.1-8b', name: 'Llama 3.1 8B', provider: 'Meta (Together.ai)', providerSlug: 'together', tier: 'Budget', input: 0.18, output: 0.18, context: '128K', verified: 'Apr 2026' },
    // AI21
    { id: 'ai21-jamba', name: 'Jamba 1.5 Large', provider: 'AI21', providerSlug: 'ai21', tier: 'Mid', input: 2.00, output: 8.00, context: '256K', verified: 'Apr 2026' },
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
