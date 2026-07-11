// API Pricing Data — returns all model pricing as JSON
// Synced with pricing-data.js — 67 models, 10 providers
// Last synced: Jul 11, 2026
module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Use GET' });
    const q = req.query || {};
    const models = [
        // OpenAI (23)
        { id: 'openai-gpt56-sol', n: 'GPT-5.6 Sol', p: 'OpenAI', ps: 'openai', t: 'Premium', i: 5.00, o: 30.00, c: '1.05M' },
        { id: 'openai-gpt56-terra', n: 'GPT-5.6 Terra', p: 'OpenAI', ps: 'openai', t: 'Mid', i: 2.50, o: 15.00, c: '1.05M' },
        { id: 'openai-gpt56-luna', n: 'GPT-5.6 Luna', p: 'OpenAI', ps: 'openai', t: 'Budget', i: 1.00, o: 6.00, c: '1.05M' },
        { id: 'openai-gpt55', n: 'GPT-5.5', p: 'OpenAI', ps: 'openai', t: 'Premium', i: 5.00, o: 30.00, c: '1.05M' },
        { id: 'openai-gpt55-pro', n: 'GPT-5.5 Pro', p: 'OpenAI', ps: 'openai', t: 'Premium', i: 30.00, o: 180.00, c: '1.05M' },
        { id: 'openai-gpt53-codex', n: 'GPT-5.3 Codex', p: 'OpenAI', ps: 'openai', t: 'Mid', i: 1.75, o: 14.00, c: '400K' },
        { id: 'openai-gpt54', n: 'GPT-5.4', p: 'OpenAI', ps: 'openai', t: 'Mid', i: 2.50, o: 15.00, c: '400K' },
        { id: 'openai-gpt54-mini', n: 'GPT-5.4 mini', p: 'OpenAI', ps: 'openai', t: 'Budget', i: 0.75, o: 4.50, c: '400K' },
        { id: 'openai-gpt54-nano', n: 'GPT-5.4 nano', p: 'OpenAI', ps: 'openai', t: 'Budget', i: 0.20, o: 1.25, c: '400K' },
        { id: 'openai-gpt54-pro', n: 'GPT-5.4 Pro', p: 'OpenAI', ps: 'openai', t: 'Premium', i: 30.00, o: 180.00, c: '400K' },
        { id: 'openai-gpt5', n: 'GPT-5', p: 'OpenAI', ps: 'openai', t: 'Premium', i: 1.25, o: 10.00, c: '272K', dep: true },
        { id: 'openai-gpt5-mini', n: 'GPT-5 mini', p: 'OpenAI', ps: 'openai', t: 'Budget', i: 0.25, o: 2.00, c: '272K', dep: true },
        { id: 'openai-gpt-oss-120b', n: 'GPT-oss 120B', p: 'OpenAI', ps: 'openai', t: 'Budget', i: 0.15, o: 0.60, c: '128K' },
        { id: 'openai-gpt-oss-20b', n: 'GPT-oss 20B', p: 'OpenAI', ps: 'openai', t: 'Budget', i: 0.08, o: 0.35, c: '128K' },
        { id: 'openai-gpt4o', n: 'GPT-4o', p: 'OpenAI', ps: 'openai', t: 'Mid', i: 2.50, o: 10.00, c: '128K', dep: true },
        { id: 'openai-gpt4o-mini', n: 'GPT-4o mini', p: 'OpenAI', ps: 'openai', t: 'Budget', i: 0.15, o: 0.60, c: '128K', dep: true },
        { id: 'openai-gpt41', n: 'GPT-4.1', p: 'OpenAI', ps: 'openai', t: 'Mid', i: 2.00, o: 8.00, c: '1M' },
        { id: 'openai-gpt41-mini', n: 'GPT-4.1 mini', p: 'OpenAI', ps: 'openai', t: 'Budget', i: 0.40, o: 1.60, c: '1M' },
        { id: 'openai-gpt41-nano', n: 'GPT-4.1 nano', p: 'OpenAI', ps: 'openai', t: 'Budget', i: 0.10, o: 0.40, c: '1M', dep: true },
        { id: 'openai-o3', n: 'o3', p: 'OpenAI', ps: 'openai', t: 'Mid', i: 2.00, o: 8.00, c: '200K' },
        { id: 'openai-o3-mini', n: 'o3-mini', p: 'OpenAI', ps: 'openai', t: 'Budget', i: 1.10, o: 4.40, c: '200K' },
        { id: 'openai-o4-mini', n: 'o4-mini', p: 'OpenAI', ps: 'openai', t: 'Budget', i: 1.10, o: 4.40, c: '200K' },
        // Anthropic (12)
        { id: 'anthropic-opus48', n: 'Claude Opus 4.8', p: 'Anthropic', ps: 'anthropic', t: 'Premium', i: 5.00, o: 25.00, c: '1M' },
        { id: 'anthropic-opus47', n: 'Claude Opus 4.7', p: 'Anthropic', ps: 'anthropic', t: 'Premium', i: 5.00, o: 25.00, c: '1M' },
        { id: 'anthropic-opus46', n: 'Claude Opus 4.6', p: 'Anthropic', ps: 'anthropic', t: 'Premium', i: 5.00, o: 25.00, c: '1M' },
        { id: 'anthropic-opus45', n: 'Claude Opus 4.5', p: 'Anthropic', ps: 'anthropic', t: 'Premium', i: 5.00, o: 25.00, c: '200K' },
        { id: 'anthropic-opus', n: 'Claude 4 Opus', p: 'Anthropic', ps: 'anthropic', t: 'Premium', i: 15.00, o: 75.00, c: '200K', dep: true },
        { id: 'anthropic-sonnet5', n: 'Claude Sonnet 5', p: 'Anthropic', ps: 'anthropic', t: 'Mid', i: 2.00, o: 10.00, c: '1M' },
        { id: 'anthropic-sonnet46', n: 'Claude Sonnet 4.6', p: 'Anthropic', ps: 'anthropic', t: 'Mid', i: 3.00, o: 15.00, c: '1M' },
        { id: 'anthropic-sonnet45', n: 'Claude Sonnet 4.5', p: 'Anthropic', ps: 'anthropic', t: 'Mid', i: 3.00, o: 15.00, c: '200K' },
        { id: 'anthropic-sonnet', n: 'Claude Sonnet 4', p: 'Anthropic', ps: 'anthropic', t: 'Mid', i: 2.00, o: 10.00, c: '200K', dep: true },
        { id: 'anthropic-haiku', n: 'Claude Haiku 4.5', p: 'Anthropic', ps: 'anthropic', t: 'Budget', i: 1.00, o: 5.00, c: '200K' },
        { id: 'anthropic-fable5', n: 'Claude Fable 5', p: 'Anthropic', ps: 'anthropic', t: 'Premium', i: 10.00, o: 50.00, c: '1M' },
        { id: 'anthropic-mythos5', n: 'Claude Mythos 5', p: 'Anthropic', ps: 'anthropic', t: 'Premium', i: 10.00, o: 50.00, c: '1M' },
        // Google (10)
        { id: 'google-gemini35-flash', n: 'Gemini 3.5 Flash', p: 'Google', ps: 'google', t: 'Mid', i: 1.50, o: 9.00, c: '1M' },
        { id: 'google-gemini31-flash-lite', n: 'Gemini 3.1 Flash-Lite', p: 'Google', ps: 'google', t: 'Budget', i: 0.25, o: 1.50, c: '1M' },
        { id: 'google-gemini3-pro', n: 'Gemini 3.1 Pro', p: 'Google', ps: 'google', t: 'Mid', i: 2.00, o: 12.00, c: '1M' },
        { id: 'google-gemini3-flash', n: 'Gemini 3 Flash', p: 'Google', ps: 'google', t: 'Budget', i: 0.50, o: 3.00, c: '1M' },
        { id: 'google-pro', n: 'Gemini 2.5 Pro', p: 'Google', ps: 'google', t: 'Mid', i: 1.25, o: 10.00, c: '1M' },
        { id: 'google-25-flash-lite', n: 'Gemini 2.5 Flash-Lite', p: 'Google', ps: 'google', t: 'Budget', i: 0.10, o: 0.40, c: '1M' },
        { id: 'google-25-flash', n: 'Gemini 2.5 Flash', p: 'Google', ps: 'google', t: 'Mid', i: 0.30, o: 2.50, c: '1M' },
        { id: 'google-flash', n: 'Gemini 2.0 Flash', p: 'Google', ps: 'google', t: 'Budget', i: 0.10, o: 0.40, c: '1M', dep: true },
        { id: 'google-flash-lite', n: 'Gemini 2.0 Flash Lite', p: 'Google', ps: 'google', t: 'Budget', i: 0.075, o: 0.30, c: '1M', dep: true },
        // DeepSeek (4)
        { id: 'deepseek-v4-pro', n: 'DeepSeek V4 Pro', p: 'DeepSeek', ps: 'deepseek', t: 'Budget', i: 0.435, o: 0.87, c: '1M' },
        { id: 'deepseek-v4-flash', n: 'DeepSeek V4 Flash', p: 'DeepSeek', ps: 'deepseek', t: 'Budget', i: 0.14, o: 0.28, c: '1M' },
        { id: 'deepseek-v32', n: 'DeepSeek V3.2', p: 'DeepSeek', ps: 'deepseek', t: 'Budget', i: 0.23, o: 0.34, c: '128K', dep: true },
        { id: 'deepseek-v3', n: 'DeepSeek V3', p: 'DeepSeek', ps: 'deepseek', t: 'Budget', i: 0.27, o: 1.10, c: '128K', dep: true },
        // Mistral (4)
        { id: 'mistral-large', n: 'Mistral Large 3', p: 'Mistral', ps: 'mistral', t: 'Budget', i: 0.50, o: 1.50, c: '262K' },
        { id: 'mistral-medium', n: 'Mistral Medium 3.5', p: 'Mistral', ps: 'mistral', t: 'Mid', i: 1.50, o: 7.50, c: '128K' },
        { id: 'mistral-small', n: 'Mistral Small 4', p: 'Mistral', ps: 'mistral', t: 'Budget', i: 0.15, o: 0.60, c: '128K' },
        { id: 'codestral', n: 'Codestral', p: 'Mistral', ps: 'mistral', t: 'Mid', i: 0.30, o: 0.90, c: '256K' },
        // Cohere (3)
        { id: 'cohere-command-a', n: 'Command A', p: 'Cohere', ps: 'cohere', t: 'Mid', i: 2.50, o: 10.00, c: '256K' },
        { id: 'cohere-command-r-plus', n: 'Command R+', p: 'Cohere', ps: 'cohere', t: 'Mid', i: 2.50, o: 10.00, c: '128K' },
        { id: 'cohere-command-r', n: 'Command R', p: 'Cohere', ps: 'cohere', t: 'Budget', i: 0.50, o: 1.50, c: '128K' },
        // Meta (5)
        { id: 'llama-4-scout', n: 'Llama 4 Scout', p: 'Meta', ps: 'together', t: 'Budget', i: 0.18, o: 0.59, c: '1M' },
        { id: 'llama-4-maverick', n: 'Llama 4 Maverick', p: 'Meta', ps: 'together', t: 'Budget', i: 0.27, o: 0.85, c: '1M' },
        { id: 'llama-33-70b', n: 'Llama 3.3 70B', p: 'Meta', ps: 'together', t: 'Mid', i: 1.04, o: 1.04, c: '128K' },
        { id: 'llama-3.1-70b', n: 'Llama 3.1 70B', p: 'Meta', ps: 'together', t: 'Mid', i: 0.88, o: 0.88, c: '128K', dep: true },
        { id: 'llama-3.1-8b', n: 'Llama 3.1 8B', p: 'Meta', ps: 'together', t: 'Budget', i: 0.14, o: 0.14, c: '128K', dep: true },
        // Moonshot (2)
        { id: 'kimi-k26', n: 'Kimi K2.6', p: 'Moonshot', ps: 'moonshot', t: 'Budget', i: 0.95, o: 4.00, c: '256K' },
        { id: 'kimi-k27-code', n: 'Kimi K2.7 Code', p: 'Moonshot', ps: 'moonshot', t: 'Budget', i: 0.95, o: 4.00, c: '256K' },
        // xAI (3)
        { id: 'xai-grok3', n: 'Grok 4.3', p: 'xAI', ps: 'xai', t: 'Mid', i: 1.25, o: 2.50, c: '1M' },
        { id: 'xai-grok3-mini', n: 'Grok Build 0.1', p: 'xAI', ps: 'xai', t: 'Budget', i: 1.00, o: 2.00, c: '256K' },
        { id: 'xai-grok45', n: 'Grok 4.5', p: 'xAI', ps: 'xai', t: 'Mid', i: 2.00, o: 6.00, c: '500K' },
        // AI21 (3)
        { id: 'ai21-jamba-mini', n: 'Jamba Mini', p: 'AI21', ps: 'ai21', t: 'Budget', i: 0.20, o: 0.40, c: '256K' },
        { id: 'ai21-jamba17', n: 'Jamba 1.7 Large', p: 'AI21', ps: 'ai21', t: 'Mid', i: 2.00, o: 8.00, c: '256K' },
        { id: 'ai21-jamba', n: 'Jamba 1.5 Large', p: 'AI21', ps: 'ai21', t: 'Mid', i: 2.00, o: 8.00, c: '256K', dep: true }
    ];
    let d = models;
    if (q.provider) d = d.filter(m => m.ps === q.provider.toLowerCase());
    if (q.tier) d = d.filter(m => m.t === q.tier.toLowerCase());
    if (q.deprecated === 'false') d = d.filter(m => !m.dep);
    if (q.model) {
        const f = d.find(m => m.id === q.model);
        if (!f) return res.status(404).json({ error: 'Not found', models: models.map(m => m.id) });
        return res.status(200).json({ model: f, source: 'https://getapipulse.com' });
    }
    return res.status(200).json({
        models: d,
        meta: { count: d.length, total: models.length, providers: 10, lastUpdated: '2026-07-10', source: 'https://getapipulse.com' }
    });
};
