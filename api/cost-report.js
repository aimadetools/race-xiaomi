// Cost comparison report for multiple models
const M = {
    'openai-gpt55': { n: 'GPT-5.5', p: 'OpenAI', i: 5, o: 30 },
    'openai-gpt5': { n: 'GPT-5', p: 'OpenAI', i: 1.25, o: 10 },
    'openai-gpt5-mini': { n: 'GPT-5 mini', p: 'OpenAI', i: 0.25, o: 2 },
    'openai-gpt-oss-120b': { n: 'GPT-oss 120B', p: 'OpenAI', i: 0.15, o: 0.6 },
    'openai-gpt-oss-20b': { n: 'GPT-oss 20B', p: 'OpenAI', i: 0.08, o: 0.35 },
    'openai-gpt4o': { n: 'GPT-4o', p: 'OpenAI', i: 2.5, o: 10 },
    'openai-gpt4o-mini': { n: 'GPT-4o mini', p: 'OpenAI', i: 0.15, o: 0.6 },
    'anthropic-opus48': { n: 'Claude Opus 4.8', p: 'Anthropic', i: 5, o: 25 },
    'anthropic-sonnet46': { n: 'Claude Sonnet 4.6', p: 'Anthropic', i: 3, o: 15 },
    'anthropic-sonnet': { n: 'Claude Sonnet 4', p: 'Anthropic', i: 3, o: 15 },
    'anthropic-haiku': { n: 'Claude Haiku 4.5', p: 'Anthropic', i: 1, o: 5 },
    'google-gemini3-pro': { n: 'Gemini 3.1 Pro', p: 'Google', i: 2, o: 12 },
    'google-pro': { n: 'Gemini 2.5 Pro', p: 'Google', i: 1.25, o: 10 },
    'google-flash': { n: 'Gemini 2.0 Flash', p: 'Google', i: 0.1, o: 0.4 },
    'google-flash-lite': { n: 'Gemini 2.0 Flash Lite', p: 'Google', i: 0.075, o: 0.3 },
    'deepseek-v4-pro': { n: 'DeepSeek V4 Pro', p: 'DeepSeek', i: 0.435, o: 0.87 },
    'deepseek-v4-flash': { n: 'DeepSeek V4 Flash', p: 'DeepSeek', i: 0.14, o: 0.28 },
    'deepseek-v3': { n: 'DeepSeek V3', p: 'DeepSeek', i: 0.27, o: 1.1 },
    'mistral-large': { n: 'Mistral Large 3', p: 'Mistral', i: 0.5, o: 1.5 },
    'mistral-small': { n: 'Mistral Small 4', p: 'Mistral', i: 0.15, o: 0.6 },
    'cohere-command-r-plus': { n: 'Command R+', p: 'Cohere', i: 2.5, o: 10 },
    'cohere-command-r': { n: 'Command R', p: 'Cohere', i: 0.5, o: 1.5 },
    'llama-4-scout': { n: 'Llama 4 Scout', p: 'Meta', i: 0.18, o: 0.59 },
    'llama-4-maverick': { n: 'Llama 4 Maverick', p: 'Meta', i: 0.27, o: 0.85 },
    'llama-3.1-70b': { n: 'Llama 3.1 70B', p: 'Meta', i: 0.88, o: 0.88 },
    'llama-3.1-8b': { n: 'Llama 3.1 8B', p: 'Meta', i: 0.1, o: 0.1 },
    'kimi-k26': { n: 'Kimi K2.6', p: 'Moonshot', i: 0.95, o: 4 },
    'xai-grok3': { n: 'Grok 4.3', p: 'xAI', i: 1.25, o: 2.5 },
    'xai-grok3-mini': { n: 'Grok Build 0.1', p: 'xAI', i: 0.3, o: 0.5 },
    'ai21-jamba': { n: 'Jamba 1.5 Large', p: 'AI21', i: 2, o: 8 }
};
module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Use GET' });
    const q = req.query || {};
    const reqs = parseInt(q.requests) || 100000;
    const inp = parseInt(q.input_tokens) || 500;
    const out = parseInt(q.output_tokens) || 200;
    let ids = q.models ? q.models.split(',').map(s => s.trim()).filter(id => M[id]) : Object.keys(M);
    if (!ids.length) return res.status(400).json({ error: 'No valid models', models: Object.keys(M) });
    const r = ids.map(id => {
        const m = M[id];
        const ic = (reqs * inp / 1e6) * m.i, oc = (reqs * out / 1e6) * m.o;
        return { id, name: m.n, provider: m.p, input: m.i, output: m.o, monthly: Math.round((ic + oc) * 100) / 100 };
    }).sort((a, b) => a.monthly - b.monthly);
    const sav = r[r.length - 1].monthly - r[0].monthly;
    return res.status(200).json({
        config: { requests: reqs, input_tokens: inp, output_tokens: out },
        results: r,
        summary: { cheapest: r[0], most_expensive: r[r.length - 1], savings: { monthly: Math.round(sav * 100) / 100, percentage: ((sav / r[r.length - 1].monthly) * 100).toFixed(1) } },
        source: 'https://getapipulse.com'
    });
};
