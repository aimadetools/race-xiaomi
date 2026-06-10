// API Pricing Data — returns all model pricing as JSON
module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Use GET' });
    const q = req.query || {};
    const models = [
        { id: 'openai-gpt55', n: 'GPT-5.5', p: 'OpenAI', ps: 'openai', t: 'Premium', i: 5, o: 30, c: '1M' },
        { id: 'openai-gpt55-pro', n: 'GPT-5.5 Pro', p: 'OpenAI', ps: 'openai', t: 'Premium', i: 30, o: 180, c: '1M' },
        { id: 'openai-gpt53-codex', n: 'GPT-5.3 Codex', p: 'OpenAI', ps: 'openai', t: 'Mid', i: 1.75, o: 14, c: '400K' },
        { id: 'openai-gpt5', n: 'GPT-5', p: 'OpenAI', ps: 'openai', t: 'Premium', i: 1.25, o: 10, c: '272K' },
        { id: 'openai-gpt5-mini', n: 'GPT-5 mini', p: 'OpenAI', ps: 'openai', t: 'Budget', i: 0.25, o: 2, c: '272K' },
        { id: 'openai-gpt-oss-120b', n: 'GPT-oss 120B', p: 'OpenAI', ps: 'openai', t: 'Budget', i: 0.15, o: 0.6, c: '128K' },
        { id: 'openai-gpt-oss-20b', n: 'GPT-oss 20B', p: 'OpenAI', ps: 'openai', t: 'Budget', i: 0.08, o: 0.35, c: '128K' },
        { id: 'openai-gpt4o', n: 'GPT-4o', p: 'OpenAI', ps: 'openai', t: 'Mid', i: 2.5, o: 10, c: '128K' },
        { id: 'openai-gpt4o-mini', n: 'GPT-4o mini', p: 'OpenAI', ps: 'openai', t: 'Budget', i: 0.15, o: 0.6, c: '128K' },
        { id: 'anthropic-opus48', n: 'Claude Opus 4.8', p: 'Anthropic', ps: 'anthropic', t: 'Premium', i: 5, o: 25, c: '1M' },
        { id: 'anthropic-opus47', n: 'Claude Opus 4.7', p: 'Anthropic', ps: 'anthropic', t: 'Premium', i: 5, o: 25, c: '1M' },
        { id: 'anthropic-opus', n: 'Claude 4 Opus', p: 'Anthropic', ps: 'anthropic', t: 'Premium', i: 15, o: 75, c: '200K', dep: true },
        { id: 'anthropic-sonnet46', n: 'Claude Sonnet 4.6', p: 'Anthropic', ps: 'anthropic', t: 'Mid', i: 3, o: 15, c: '1M' },
        { id: 'anthropic-sonnet', n: 'Claude Sonnet 4', p: 'Anthropic', ps: 'anthropic', t: 'Mid', i: 3, o: 15, c: '200K', dep: true },
        { id: 'anthropic-haiku', n: 'Claude Haiku 4.5', p: 'Anthropic', ps: 'anthropic', t: 'Budget', i: 1, o: 5, c: '200K' },
        { id: 'google-gemini3-pro', n: 'Gemini 3.1 Pro', p: 'Google', ps: 'google', t: 'Mid', i: 2, o: 12, c: '1M' },
        { id: 'google-pro', n: 'Gemini 2.5 Pro', p: 'Google', ps: 'google', t: 'Mid', i: 1.25, o: 10, c: '1M' },
        { id: 'google-flash', n: 'Gemini 2.0 Flash', p: 'Google', ps: 'google', t: 'Budget', i: 0.1, o: 0.4, c: '1M' },
        { id: 'google-flash-lite', n: 'Gemini 2.0 Flash Lite', p: 'Google', ps: 'google', t: 'Budget', i: 0.075, o: 0.3, c: '1M' },
        { id: 'google-gemini35-flash', n: 'Gemini 3.5 Flash', p: 'Google', ps: 'google', t: 'Mid', i: 1.5, o: 9, c: '1M' },
        { id: 'deepseek-v4-pro', n: 'DeepSeek V4 Pro', p: 'DeepSeek', ps: 'deepseek', t: 'Budget', i: 0.435, o: 0.87, c: '1M' },
        { id: 'deepseek-v4-flash', n: 'DeepSeek V4 Flash', p: 'DeepSeek', ps: 'deepseek', t: 'Budget', i: 0.14, o: 0.28, c: '1M' },
        { id: 'deepseek-v32', n: 'DeepSeek V3.2', p: 'DeepSeek', ps: 'deepseek', t: 'Budget', i: 0.23, o: 0.34, c: '128K' },
        { id: 'deepseek-v3', n: 'DeepSeek V3', p: 'DeepSeek', ps: 'deepseek', t: 'Budget', i: 0.27, o: 1.1, c: '128K', dep: true },
        { id: 'mistral-large', n: 'Mistral Large 3', p: 'Mistral', ps: 'mistral', t: 'Budget', i: 0.5, o: 1.5, c: '262K' },
        { id: 'mistral-medium', n: 'Mistral Medium 3.5', p: 'Mistral', ps: 'mistral', t: 'Mid', i: 1.5, o: 7.5, c: '128K' },
        { id: 'mistral-small', n: 'Mistral Small 4', p: 'Mistral', ps: 'mistral', t: 'Budget', i: 0.15, o: 0.6, c: '128K' },
        { id: 'cohere-command-a', n: 'Command A', p: 'Cohere', ps: 'cohere', t: 'Mid', i: 2.5, o: 10, c: '128K' },
        { id: 'cohere-command-r-plus', n: 'Command R+', p: 'Cohere', ps: 'cohere', t: 'Mid', i: 2.5, o: 10, c: '128K' },
        { id: 'cohere-command-r', n: 'Command R', p: 'Cohere', ps: 'cohere', t: 'Budget', i: 0.5, o: 1.5, c: '128K' },
        { id: 'llama-4-scout', n: 'Llama 4 Scout', p: 'Meta', ps: 'together', t: 'Budget', i: 0.18, o: 0.59, c: '1M' },
        { id: 'llama-4-maverick', n: 'Llama 4 Maverick', p: 'Meta', ps: 'together', t: 'Budget', i: 0.27, o: 0.85, c: '1M' },
        { id: 'llama-3.1-70b', n: 'Llama 3.1 70B', p: 'Meta', ps: 'together', t: 'Mid', i: 0.88, o: 0.88, c: '128K' },
        { id: 'llama-3.1-8b', n: 'Llama 3.1 8B', p: 'Meta', ps: 'together', t: 'Budget', i: 0.1, o: 0.1, c: '128K' },
        { id: 'kimi-k26', n: 'Kimi K2.6', p: 'Moonshot', ps: 'moonshot', t: 'Budget', i: 0.95, o: 4, c: '256K' },
        { id: 'xai-grok3', n: 'Grok 4.3', p: 'xAI', ps: 'xai', t: 'Mid', i: 1.25, o: 2.5, c: '1M' },
        { id: 'xai-grok3-mini', n: 'Grok Build 0.1', p: 'xAI', ps: 'xai', t: 'Budget', i: 0.3, o: 0.5, c: '256K' },
        { id: 'ai21-jamba', n: 'Jamba 1.5 Large', p: 'AI21', ps: 'ai21', t: 'Mid', i: 2, o: 8, c: '256K' },
        { id: 'ai21-jamba17', n: 'Jamba 1.7 Large', p: 'AI21', ps: 'ai21', t: 'Mid', i: 2, o: 8, c: '256K' }
    ];
    let d = models;
    if (q.provider) d = d.filter(m => m.ps === q.provider.toLowerCase());
    if (q.tier) d = d.filter(m => m.t === q.tier.toLowerCase());
    if (q.model) {
        const f = d.find(m => m.id === q.model);
        if (!f) return res.status(404).json({ error: 'Not found', models: models.map(m => m.id) });
        return res.status(200).json({ model: f, source: 'https://getapipulse.com' });
    }
    return res.status(200).json({
        models: d,
        meta: { count: d.length, lastUpdated: '2026-06-10', source: 'https://getapipulse.com' }
    });
};
