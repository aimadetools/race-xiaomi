// Find cheapest AI model for your use case
const M = [
    { id: 'openai-gpt55', n: 'GPT-5.5', p: 'OpenAI', t: 'Premium', i: 5, o: 30, s: ['reasoning', 'coding'] },
    { id: 'openai-gpt5', n: 'GPT-5', p: 'OpenAI', t: 'Premium', i: 1.25, o: 10, s: ['reasoning', 'coding'] },
    { id: 'openai-gpt5-mini', n: 'GPT-5 mini', p: 'OpenAI', t: 'Budget', i: 0.25, o: 2, s: ['general', 'chat'] },
    { id: 'openai-gpt4o', n: 'GPT-4o', p: 'OpenAI', t: 'Mid', i: 2.5, o: 10, s: ['multimodal', 'vision'] },
    { id: 'openai-gpt4o-mini', n: 'GPT-4o mini', p: 'OpenAI', t: 'Budget', i: 0.15, o: 0.6, s: ['chat', 'extraction'] },
    { id: 'anthropic-opus48', n: 'Claude Opus 4.8', p: 'Anthropic', t: 'Premium', i: 5, o: 25, s: ['reasoning', 'coding'] },
    { id: 'anthropic-opus47', n: 'Claude Opus 4.7', p: 'Anthropic', t: 'Premium', i: 5, o: 25, s: ['reasoning', 'coding'] },
    { id: 'anthropic-opus', n: 'Claude 4 Opus', p: 'Anthropic', t: 'Premium', i: 15, o: 75, s: ['reasoning', 'creative'] },
    { id: 'anthropic-sonnet46', n: 'Claude Sonnet 4.6', p: 'Anthropic', t: 'Mid', i: 3, o: 15, s: ['coding', 'analysis'] },
    { id: 'anthropic-sonnet', n: 'Claude Sonnet 4', p: 'Anthropic', t: 'Mid', i: 3, o: 15, s: ['coding', 'general'] },
    { id: 'anthropic-haiku', n: 'Claude Haiku 4.5', p: 'Anthropic', t: 'Budget', i: 1, o: 5, s: ['chat', 'classification'] },
    { id: 'google-gemini3-pro', n: 'Gemini 3.1 Pro', p: 'Google', t: 'Mid', i: 2, o: 12, s: ['reasoning', 'long-context'] },
    { id: 'google-pro', n: 'Gemini 2.5 Pro', p: 'Google', t: 'Mid', i: 1.25, o: 10, s: ['reasoning', 'coding'] },
    { id: 'google-flash', n: 'Gemini 2.0 Flash', p: 'Google', t: 'Budget', i: 0.1, o: 0.4, s: ['chat', 'speed'] },
    { id: 'google-flash-lite', n: 'Gemini 2.0 Flash Lite', p: 'Google', t: 'Budget', i: 0.075, o: 0.3, s: ['classification', 'speed'] },
    { id: 'deepseek-v4-pro', n: 'DeepSeek V4 Pro', p: 'DeepSeek', t: 'Budget', i: 0.435, o: 0.87, s: ['coding', 'reasoning'] },
    { id: 'deepseek-v4-flash', n: 'DeepSeek V4 Flash', p: 'DeepSeek', t: 'Budget', i: 0.14, o: 0.28, s: ['coding', 'chat'] },
    { id: 'mistral-large', n: 'Mistral Large 3', p: 'Mistral', t: 'Budget', i: 0.5, o: 1.5, s: ['coding', 'multilingual'] },
    { id: 'mistral-small', n: 'Mistral Small 4', p: 'Mistral', t: 'Budget', i: 0.15, o: 0.6, s: ['chat', 'speed'] },
    { id: 'llama-3.1-70b', n: 'Llama 3.1 70B', p: 'Meta', t: 'Mid', i: 0.88, o: 0.88, s: ['general', 'coding'] },
    { id: 'llama-3.1-8b', n: 'Llama 3.1 8B', p: 'Meta', t: 'Budget', i: 0.1, o: 0.1, s: ['chat', 'speed'] },
    { id: 'xai-grok3', n: 'Grok 4.3', p: 'xAI', t: 'Mid', i: 1.25, o: 2.5, s: ['reasoning', 'creative'] },
    { id: 'xai-grok3-mini', n: 'Grok Build 0.1', p: 'xAI', t: 'Budget', i: 0.3, o: 0.5, s: ['general', 'chat'] }
];

module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Use GET' });
    const q = req.query || {};
    const inp = parseInt(q.input_tokens) || 2000;
    const out = parseInt(q.output_tokens) || 500;
    const reqs = parseInt(q.requests) || 1000;
    const bud = parseFloat(q.budget) || null;
    const uc = q.use_case || null;
    const lim = Math.min(parseInt(q.limit) || 5, 10);
    let r = M.map(m => {
        const cpr = m.i * (inp / 1e6) + m.o * (out / 1e6);
        const mo = Math.round(cpr * reqs * 30 * 100) / 100;
        return { id: m.id, name: m.n, provider: m.p, tier: m.t, cost_per_request: Math.round(cpr * 1e4) / 1e4, monthly: mo };
    });
    if (uc) r = r.filter(m => M.find(x => x.id === m.id).s.some(s => s.includes(uc) || uc.includes(s)));
    if (bud) r = r.filter(m => m.monthly <= bud);
    r.sort((a, b) => a.monthly - b.monthly).splice(lim);
    return res.status(200).json({ results: r, cheapest: r[0] || null, source: 'https://getapipulse.com' });
};
