// AI API Cost Calculator
const M = {
    'openai-gpt55': { n: 'GPT-5.5', p: 'OpenAI', i: 5, o: 30 },
    'openai-gpt55-pro': { n: 'GPT-5.5 Pro', p: 'OpenAI', i: 30, o: 180 },
    'openai-gpt53-codex': { n: 'GPT-5.3 Codex', p: 'OpenAI', i: 1.75, o: 14 },
    'openai-gpt5': { n: 'GPT-5', p: 'OpenAI', i: 1.25, o: 10 },
    'openai-gpt5-mini': { n: 'GPT-5 mini', p: 'OpenAI', i: 0.25, o: 2 },
    'openai-gpt-oss-120b': { n: 'GPT-oss 120B', p: 'OpenAI', i: 0.15, o: 0.6 },
    'openai-gpt-oss-20b': { n: 'GPT-oss 20B', p: 'OpenAI', i: 0.08, o: 0.35 },
    'openai-gpt4o': { n: 'GPT-4o', p: 'OpenAI', i: 2.5, o: 10 },
    'openai-gpt4o-mini': { n: 'GPT-4o mini', p: 'OpenAI', i: 0.15, o: 0.6 },
    'openai-gpt54': { n: 'GPT-5.4', p: 'OpenAI', i: 2.5, o: 15 },
    'openai-gpt54-mini': { n: 'GPT-5.4 mini', p: 'OpenAI', i: 0.75, o: 4.5 },
    'openai-gpt54-nano': { n: 'GPT-5.4 nano', p: 'OpenAI', i: 0.20, o: 1.25 },
    'openai-gpt54-pro': { n: 'GPT-5.4 Pro', p: 'OpenAI', i: 30, o: 180 },
    'anthropic-opus48': { n: 'Claude Opus 4.8', p: 'Anthropic', i: 5, o: 25 },
    'anthropic-opus47': { n: 'Claude Opus 4.7', p: 'Anthropic', i: 5, o: 25 },
    'anthropic-opus': { n: 'Claude 4 Opus', p: 'Anthropic', i: 15, o: 75 },
    'anthropic-sonnet46': { n: 'Claude Sonnet 4.6', p: 'Anthropic', i: 3, o: 15 },
    'anthropic-sonnet': { n: 'Claude Sonnet 4', p: 'Anthropic', i: 3, o: 15 },
    'anthropic-haiku': { n: 'Claude Haiku 4.5', p: 'Anthropic', i: 1, o: 5 },
    'anthropic-sonnet5': { n: 'Claude Sonnet 5', p: 'Anthropic', i: 3, o: 15 },
    'anthropic-fable5': { n: 'Claude Fable 5', p: 'Anthropic', i: 10, o: 50 },
    'anthropic-mythos5': { n: 'Claude Mythos 5', p: 'Anthropic', i: 10, o: 50 },
    'google-gemini3-pro': { n: 'Gemini 3.1 Pro', p: 'Google', i: 2, o: 12 },
    'google-pro': { n: 'Gemini 2.5 Pro', p: 'Google', i: 1.25, o: 10 },
    'google-flash': { n: 'Gemini 2.0 Flash', p: 'Google', i: 0.1, o: 0.4 },
    'google-flash-lite': { n: 'Gemini 2.0 Flash Lite', p: 'Google', i: 0.075, o: 0.3 },
    'google-gemini35-flash': { n: 'Gemini 3.5 Flash', p: 'Google', i: 1.5, o: 9 },
    'google-gemini3-flash': { n: 'Gemini 3 Flash', p: 'Google', i: 0.50, o: 3.00 },
    'google-gemini31-flash-lite': { n: 'Gemini 3.1 Flash-Lite', p: 'Google', i: 0.25, o: 1.50 },
    'google-25-flash-lite': { n: 'Gemini 2.5 Flash-Lite', p: 'Google', i: 0.10, o: 0.40 },
    'deepseek-v4-pro': { n: 'DeepSeek V4 Pro', p: 'DeepSeek', i: 0.435, o: 0.87 },
    'deepseek-v4-flash': { n: 'DeepSeek V4 Flash', p: 'DeepSeek', i: 0.14, o: 0.28 },
    'deepseek-v32': { n: 'DeepSeek V3.2', p: 'DeepSeek', i: 0.23, o: 0.34 },
    'deepseek-v3': { n: 'DeepSeek V3', p: 'DeepSeek', i: 0.27, o: 1.1 },
    'mistral-large': { n: 'Mistral Large 3', p: 'Mistral', i: 0.5, o: 1.5 },
    'mistral-medium': { n: 'Mistral Medium 3.5', p: 'Mistral', i: 1.5, o: 7.5 },
    'mistral-small': { n: 'Mistral Small 4', p: 'Mistral', i: 0.15, o: 0.6 },
    'cohere-command-a': { n: 'Command A', p: 'Cohere', i: 2.5, o: 10 },
    'cohere-command-r-plus': { n: 'Command R+', p: 'Cohere', i: 2.5, o: 10 },
    'cohere-command-r': { n: 'Command R', p: 'Cohere', i: 0.5, o: 1.5 },
    'llama-4-scout': { n: 'Llama 4 Scout', p: 'Meta', i: 0.18, o: 0.59 },
    'llama-4-maverick': { n: 'Llama 4 Maverick', p: 'Meta', i: 0.27, o: 0.85 },
    'llama-3.1-70b': { n: 'Llama 3.1 70B', p: 'Meta', i: 0.88, o: 0.88 },
    'llama-3.1-8b': { n: 'Llama 3.1 8B', p: 'Meta', i: 0.1, o: 0.1 },
    'kimi-k26': { n: 'Kimi K2.6', p: 'Moonshot', i: 0.95, o: 4 },
    'xai-grok3': { n: 'Grok 4.3', p: 'xAI', i: 1.25, o: 2.5 },
    'xai-grok3-mini': { n: 'Grok Build 0.1', p: 'xAI', i: 0.3, o: 0.5 },
    'ai21-jamba': { n: 'Jamba 1.5 Large', p: 'AI21', i: 2, o: 8 },
    'ai21-jamba17': { n: 'Jamba 1.7 Large', p: 'AI21', i: 2, o: 8 }
};

module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Use GET' });
    const q = req.query || {};
    const inp = parseInt(q.input_tokens) || 2000;
    const out = parseInt(q.output_tokens) || 500;
    const reqs = parseInt(q.requests) || 1000;
    const days = parseInt(q.days) || 30;
    const mode = q.mode || 'standard';
    const oM = mode === 'streaming' ? 1.15 : 1;
    const pM = mode === 'batch' ? 0.5 : 1;
    if (q.models) {
        const ids = q.models.split(',').map(s => s.trim()).slice(0, 10);
        const r = ids.map(id => {
            const m = M[id];
            if (!m) return null;
            const tIn = inp * reqs * days;
            const tOut = Math.round(out * oM) * reqs * days;
            const mo = Math.round(((tIn / 1e6) * m.i + (tOut / 1e6) * m.o) * pM * 100) / 100;
            return { id, name: m.n, provider: m.p, monthly: mo };
        }).filter(Boolean).sort((a, b) => a.monthly - b.monthly);
        return res.status(200).json({ results: r, source: 'https://getapipulse.com' });
    }
    if (!q.model) return res.status(400).json({ error: 'Missing model param', models: Object.keys(M) });
    const m = M[q.model];
    if (!m) return res.status(404).json({ error: 'Model not found', models: Object.keys(M) });
    const tIn = inp * reqs * days;
    const tOut = Math.round(out * oM) * reqs * days;
    const cReq = m.i * (inp / 1e6) + m.o * (out / 1e6);
    const mo = Math.round(((tIn / 1e6) * m.i + (tOut / 1e6) * m.o) * pM * 100) / 100;
    return res.status(200).json({
        model: q.model, name: m.n, provider: m.p,
        costs: { per_request: Math.round(cReq * pM * 1e4) / 1e4, monthly: mo, annual: Math.round(mo * 12 * 100) / 100 },
        mode, source: 'https://getapipulse.com'
    });
};
