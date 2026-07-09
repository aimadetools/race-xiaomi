// APIpulse — Centralized Pricing Data (Single Source of Truth)
// Update this file when provider pricing changes. All pages import from here.
// Last verified: Jul 9, 2026 (S1274: OpenAI + Google Gemini verification — all prices confirmed against official docs. 60 entries, 46 active, 14 deprecated)
const PRICING_LAST_UPDATED = 'Jul 9, 2026';

const API_MODELS = [
    // OpenAI
    { id: 'openai-gpt55', name: 'GPT-5.5', provider: 'OpenAI', providerSlug: 'openai', tier: 'Premium', input: 5.00, output: 30.00, context: '1.05M', verified: 'Jul 9, 2026' },
    { id: 'openai-gpt55-pro', name: 'GPT-5.5 Pro', provider: 'OpenAI', providerSlug: 'openai', tier: 'Premium', input: 30.00, output: 180.00, context: '1.05M', verified: 'Jul 9, 2026' },
    { id: 'openai-gpt53-codex', name: 'GPT-5.3 Codex', provider: 'OpenAI', providerSlug: 'openai', tier: 'Mid', input: 1.75, output: 14.00, context: '400K', verified: 'Jul 9, 2026' },
    { id: 'openai-gpt54', name: 'GPT-5.4', provider: 'OpenAI', providerSlug: 'openai', tier: 'Mid', input: 2.50, output: 15.00, context: '400K', verified: 'Jul 9, 2026' },
    { id: 'openai-gpt54-mini', name: 'GPT-5.4 mini', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.75, output: 4.50, context: '400K', verified: 'Jul 9, 2026' },
    { id: 'openai-gpt54-nano', name: 'GPT-5.4 nano', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.20, output: 1.25, context: '400K', verified: 'Jul 9, 2026' },
    { id: 'openai-gpt54-pro', name: 'GPT-5.4 Pro', provider: 'OpenAI', providerSlug: 'openai', tier: 'Premium', input: 30.00, output: 180.00, context: '400K', verified: 'Jul 9, 2026' },
    { id: 'openai-gpt5', name: 'GPT-5', provider: 'OpenAI', providerSlug: 'openai', tier: 'Premium', input: 1.25, output: 10.00, context: '272K', verified: 'Jul 9, 2026', deprecated: true, deprecatedDate: '2026-12-11', replacement: 'openai-gpt55', note: 'Deprecated; shutdown Dec 11 2026, replaced by GPT-5.5' },
    { id: 'openai-gpt5-mini', name: 'GPT-5 mini', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.25, output: 2.00, context: '272K', verified: 'Jul 9, 2026', deprecated: true, deprecatedDate: '2026-12-11', replacement: 'openai-gpt54-mini', note: 'Deprecated; shutdown Dec 11 2026, replaced by GPT-5.4 mini' },
    { id: 'openai-gpt-oss-120b', name: 'GPT-oss 120B', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', verified: 'Jul 9, 2026', note: 'Open-source model (not available via OpenAI API; self-host or use Hugging Face)' },
    { id: 'openai-gpt-oss-20b', name: 'GPT-oss 20B', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.08, output: 0.35, context: '128K', verified: 'Jul 9, 2026', note: 'Open-source model (not available via OpenAI API; self-host or use Hugging Face)' },
    { id: 'openai-gpt4o', name: 'GPT-4o', provider: 'OpenAI', providerSlug: 'openai', tier: 'Mid', input: 2.50, output: 10.00, context: '128K', verified: 'Jul 9, 2026', deprecated: true, deprecatedDate: '2026-04-14', replacement: 'openai-gpt41', note: 'Deprecated Apr 2025; replaced by GPT-4.1 family' },
    { id: 'openai-gpt4o-mini', name: 'GPT-4o mini', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', verified: 'Jul 9, 2026', deprecated: true, deprecatedDate: '2026-04-14', replacement: 'openai-gpt41-nano', note: 'Deprecated Apr 2025; replaced by GPT-4.1 family' },
    { id: 'openai-gpt41', name: 'GPT-4.1', provider: 'OpenAI', providerSlug: 'openai', tier: 'Mid', input: 2.00, output: 8.00, context: '1M', verified: 'Jul 9, 2026' },
    { id: 'openai-gpt41-mini', name: 'GPT-4.1 mini', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.40, output: 1.60, context: '1M', verified: 'Jul 9, 2026' },
    { id: 'openai-gpt41-nano', name: 'GPT-4.1 nano', provider: 'OpenAI', providerSlug: 'openai', tier: 'Budget', input: 0.10, output: 0.40, context: '1M', verified: 'Jul 9, 2026', deprecated: true, deprecatedDate: '2026-10-23', replacement: 'openai-gpt54-nano', note: 'Deprecated; shutdown Oct 23 2026, replaced by GPT-5.4 nano' },
    // Anthropic
    { id: 'anthropic-opus48', name: 'Claude Opus 4.8', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '1M', verified: 'Jul 2026' },
    { id: 'anthropic-opus47', name: 'Claude Opus 4.7', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '1M', verified: 'Jul 2026' },
    { id: 'anthropic-opus46', name: 'Claude Opus 4.6', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '1M', verified: 'Jul 2026', note: 'Legacy model; consider migrating to Opus 4.8' },
    { id: 'anthropic-opus45', name: 'Claude Opus 4.5', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Premium', input: 5.00, output: 25.00, context: '200K', verified: 'Jul 2026', note: 'Legacy model; consider migrating to Opus 4.8' },
    { id: 'anthropic-opus', name: 'Claude 4 Opus', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Premium', input: 15.00, output: 75.00, context: '200K', verified: 'Jul 2026', deprecated: true, deprecatedDate: '2026-06-15', replacement: 'anthropic-opus48' },
    { id: 'anthropic-sonnet5', name: 'Claude Sonnet 5', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Mid', input: 2.00, output: 10.00, context: '1M', verified: 'Jul 2026', note: 'Introductory pricing $2/$10 through Aug 31, 2026 (regular $3/$15)' },
    { id: 'anthropic-sonnet46', name: 'Claude Sonnet 4.6', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Mid', input: 3.00, output: 15.00, context: '1M', verified: 'Jul 2026', note: 'Legacy model; consider migrating to Sonnet 5' },
    { id: 'anthropic-sonnet45', name: 'Claude Sonnet 4.5', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Mid', input: 3.00, output: 15.00, context: '200K', verified: 'Jul 2026', note: 'Legacy model; consider migrating to Sonnet 5' },
    { id: 'anthropic-sonnet', name: 'Claude Sonnet 4', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Mid', input: 2.00, output: 10.00, context: '200K', verified: 'Jul 2026', deprecated: true, deprecatedDate: '2026-06-15', replacement: 'anthropic-sonnet46' },
    { id: 'anthropic-haiku', name: 'Claude Haiku 4.5', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Budget', input: 1.00, output: 5.00, context: '200K', verified: 'Jul 2026' },
    { id: 'anthropic-fable5', name: 'Claude Fable 5', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Premium', input: 10.00, output: 50.00, context: '1M', verified: 'Jul 2026' },
    { id: 'anthropic-mythos5', name: 'Claude Mythos 5', provider: 'Anthropic', providerSlug: 'anthropic', tier: 'Premium', input: 10.00, output: 50.00, context: '1M', verified: 'Jul 2026', note: 'Invitation-only via Project Glasswing — not generally available via standard API' },
    // Google
    { id: 'google-gemini35-flash', name: 'Gemini 3.5 Flash', provider: 'Google', providerSlug: 'google', tier: 'Mid', input: 1.50, output: 9.00, context: '1M', verified: 'Jul 9, 2026' },
    { id: 'google-gemini31-flash-lite', name: 'Gemini 3.1 Flash-Lite', provider: 'Google', providerSlug: 'google', tier: 'Budget', input: 0.25, output: 1.50, context: '1M', verified: 'Jul 9, 2026' },
    { id: 'google-gemini3-pro', name: 'Gemini 3.1 Pro', provider: 'Google', providerSlug: 'google', tier: 'Mid', input: 2.00, output: 12.00, context: '1M', verified: 'Jul 9, 2026' },
    { id: 'google-gemini3-flash', name: 'Gemini 3 Flash', provider: 'Google', providerSlug: 'google', tier: 'Budget', input: 0.50, output: 3.00, context: '1M', verified: 'Jul 9, 2026' },
    { id: 'google-pro', name: 'Gemini 2.5 Pro', provider: 'Google', providerSlug: 'google', tier: 'Mid', input: 1.25, output: 10.00, context: '1M', verified: 'Jul 9, 2026' },
    { id: 'google-25-flash-lite', name: 'Gemini 2.5 Flash-Lite', provider: 'Google', providerSlug: 'google', tier: 'Budget', input: 0.10, output: 0.40, context: '1M', verified: 'Jul 9, 2026' },
    { id: 'google-25-flash', name: 'Gemini 2.5 Flash', provider: 'Google', providerSlug: 'google', tier: 'Mid', input: 0.30, output: 2.50, context: '1M', verified: 'Jul 9, 2026' },
    { id: 'google-flash', name: 'Gemini 2.0 Flash', provider: 'Google', providerSlug: 'google', tier: 'Budget', input: 0.10, output: 0.40, context: '1M', verified: 'Jun 2026', deprecated: true, deprecatedDate: '2026-06-01', replacement: 'google-gemini3-flash', note: 'Shut down Jun 1, 2026; replaced by Gemini 3 Flash' },
    { id: 'google-flash-lite', name: 'Gemini 2.0 Flash Lite', provider: 'Google', providerSlug: 'google', tier: 'Budget', input: 0.075, output: 0.30, context: '1M', verified: 'Jun 2026', deprecated: true, deprecatedDate: '2026-06-01', replacement: 'google-gemini31-flash-lite', note: 'Shut down Jun 1, 2026; replaced by Gemini 3.1 Flash-Lite' },
    // DeepSeek
    { id: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro', provider: 'DeepSeek', providerSlug: 'deepseek', tier: 'Budget', input: 0.435, output: 0.87, context: '1M', verified: 'Jul 2026' },
    { id: 'deepseek-v4-flash', name: 'DeepSeek V4 Flash', provider: 'DeepSeek', providerSlug: 'deepseek', tier: 'Budget', input: 0.14, output: 0.28, context: '1M', verified: 'Jul 2026' },
    { id: 'deepseek-v32', name: 'DeepSeek V3.2', provider: 'DeepSeek', providerSlug: 'deepseek', tier: 'Budget', input: 0.23, output: 0.34, context: '128K', verified: 'Jul 2026', deprecated: true, deprecatedDate: '2026-07-07', replacement: 'deepseek-v4-flash', note: 'No longer listed on DeepSeek pricing page; V4 Flash is the successor' },
    { id: 'deepseek-v3', name: 'DeepSeek V3', provider: 'DeepSeek', providerSlug: 'deepseek', tier: 'Budget', input: 0.27, output: 1.10, context: '128K', verified: 'May 2026', deprecated: true, replacement: 'deepseek-v4-flash' },
    // Mistral
    { id: 'mistral-large', name: 'Mistral Large 3', provider: 'Mistral', providerSlug: 'mistral', tier: 'Budget', input: 0.50, output: 1.50, context: '262K', verified: 'Jul 2026' },
    { id: 'mistral-medium', name: 'Mistral Medium 3.5', provider: 'Mistral', providerSlug: 'mistral', tier: 'Mid', input: 1.50, output: 7.50, context: '128K', verified: 'Jul 2026' },
    { id: 'mistral-small', name: 'Mistral Small 4', provider: 'Mistral', providerSlug: 'mistral', tier: 'Budget', input: 0.15, output: 0.60, context: '128K', verified: 'Jul 2026' },
    { id: 'codestral', name: 'Codestral', provider: 'Mistral', providerSlug: 'mistral', tier: 'Mid', input: 0.30, output: 0.90, context: '256K', verified: 'Jul 2026' },
    // Cohere
    { id: 'cohere-command-a', name: 'Command A', provider: 'Cohere', providerSlug: 'cohere', tier: 'Mid', input: 2.50, output: 10.00, context: '256K', verified: 'Jul 2026' },
    { id: 'cohere-command-r-plus', name: 'Command R+', provider: 'Cohere', providerSlug: 'cohere', tier: 'Mid', input: 2.50, output: 10.00, context: '128K', verified: 'Jul 2026' },
    { id: 'cohere-command-r', name: 'Command R', provider: 'Cohere', providerSlug: 'cohere', tier: 'Budget', input: 0.50, output: 1.50, context: '128K', verified: 'Jul 2026' },
    // Meta (Together.ai)
    { id: 'llama-4-scout', name: 'Llama 4 Scout', provider: 'Meta (Together.ai)', providerSlug: 'together', tier: 'Budget', input: 0.18, output: 0.59, context: '1M', verified: 'Jun 2026', note: 'Delisted from Together.ai serverless Jul 2026 — may only be available via dedicated endpoints' },
    { id: 'llama-4-maverick', name: 'Llama 4 Maverick', provider: 'Meta (Together.ai)', providerSlug: 'together', tier: 'Budget', input: 0.27, output: 0.85, context: '1M', verified: 'Jun 2026', note: 'Delisted from Together.ai serverless Jul 2026 — may only be available via dedicated endpoints' },
    { id: 'llama-33-70b', name: 'Llama 3.3 70B', provider: 'Meta (Together.ai)', providerSlug: 'together', tier: 'Mid', input: 1.04, output: 1.04, context: '128K', verified: 'Jul 2026' },
    { id: 'llama-3.1-70b', name: 'Llama 3.1 70B', provider: 'Meta (Together.ai)', providerSlug: 'together', tier: 'Mid', input: 0.88, output: 0.88, context: '128K', verified: 'May 2026', deprecated: true, deprecatedDate: '2026-07-01', replacement: 'llama-33-70b' },
    { id: 'llama-3.1-8b', name: 'Llama 3.1 8B', provider: 'Meta (Together.ai)', providerSlug: 'together', tier: 'Budget', input: 0.14, output: 0.14, context: '128K', verified: 'Jul 2026', deprecated: true, deprecatedDate: '2026-07-01', replacement: 'llama-33-70b' },
    // Moonshot (Kimi)
    { id: 'kimi-k26', name: 'Kimi K2.6', provider: 'Moonshot', providerSlug: 'moonshot', tier: 'Budget', input: 0.95, output: 4.00, context: '256K', verified: 'Jul 2026' },
    { id: 'kimi-k27-code', name: 'Kimi K2.7 Code', provider: 'Moonshot', providerSlug: 'moonshot', tier: 'Budget', input: 0.96, output: 3.97, context: '256K', verified: 'Jul 2026' },
    // xAI
    { id: 'xai-grok3', name: 'Grok 4.3', provider: 'xAI', providerSlug: 'xai', tier: 'Mid', input: 1.25, output: 2.50, context: '1M', verified: 'Jul 2026' },  // Was Grok 3 at $3/$15 — rebranded & repriced Jun 2026
    { id: 'xai-grok3-mini', name: 'Grok Build 0.1', provider: 'xAI', providerSlug: 'xai', tier: 'Budget', input: 1.00, output: 2.00, context: '256K', verified: 'Jul 2026' },  // Code API pricing (was $0.30/$0.50)
    // AI21
    { id: 'ai21-jamba-mini', name: 'Jamba Mini', provider: 'AI21', providerSlug: 'ai21', tier: 'Budget', input: 0.20, output: 0.40, context: '256K', verified: 'Jul 2026' },
    { id: 'ai21-jamba17', name: 'Jamba 1.7 Large', provider: 'AI21', providerSlug: 'ai21', tier: 'Mid', input: 2.00, output: 8.00, context: '256K', verified: 'Jul 2026' },
    { id: 'ai21-jamba', name: 'Jamba 1.5 Large', provider: 'AI21', providerSlug: 'ai21', tier: 'Mid', input: 2.00, output: 8.00, context: '256K', verified: 'Jul 2026', deprecated: true, replacement: 'ai21-jamba17' },
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
        id: m.id,
        name: m.name,
        provider: m.provider,
        tier: m.tier,
        input: m.input,
        output: m.output,
        context: m.context,
        verified: m.verified,
        deprecated: m.deprecated || false,
        deprecatedDate: m.deprecatedDate || null,
        replacement: m.replacement || null
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

// Helper: Get deprecated models
function getDeprecatedModels() {
    return API_MODELS.filter(m => m.deprecated);
}

// Helper: Check if a model is deprecated
function isModelDeprecated(modelId) {
    const model = getModelById(modelId);
    return model && model.deprecated === true;
}

// Helper: Get days until deprecation (returns null if no date or already past)
function getDaysUntilDeprecation(modelId) {
    const model = getModelById(modelId);
    if (!model || !model.deprecatedDate) return null;
    const now = new Date();
    const depDate = new Date(model.deprecatedDate + 'T00:00:00');
    const diff = Math.ceil((depDate - now) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
}

// Helper: Get replacement model info
function getReplacementModel(modelId) {
    const model = getModelById(modelId);
    if (!model || !model.replacement) return null;
    return getModelById(model.replacement);
}
