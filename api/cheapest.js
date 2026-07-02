// Find cheapest AI model for your use case
const M = [
    { id: 'openai-gpt55', n: 'GPT-5.5', p: 'OpenAI', t: 'Premium', i: 5, o: 30, s: ['reasoning', 'coding'] },
    { id: 'openai-gpt55-pro', n: 'GPT-5.5 Pro', p: 'OpenAI', t: 'Premium', i: 30, o: 180, s: ['reasoning', 'coding'] },
    { id: 'openai-gpt53-codex', n: 'GPT-5.3 Codex', p: 'OpenAI', t: 'Mid', i: 1.75, o: 14, s: ['coding', 'reasoning'] },
    { id: 'openai-gpt5', n: 'GPT-5', p: 'OpenAI', t: 'Premium', i: 1.25, o: 10, s: ['reasoning', 'coding'] },
    { id: 'openai-gpt5-mini', n: 'GPT-5 mini', p: 'OpenAI', t: 'Budget', i: 0.25, o: 2, s: ['general', 'chat'] },
    { id: 'openai-gpt54', n: 'GPT-5.4', p: 'OpenAI', t: 'Mid', i: 2.5, o: 15, s: ['coding', 'reasoning'] },
    { id: 'openai-gpt54-mini', n: 'GPT-5.4 mini', p: 'OpenAI', t: 'Budget', i: 0.75, o: 4.5, s: ['chat', 'general'] },
    { id: 'openai-gpt54-nano', n: 'GPT-5.4 nano', p: 'OpenAI', t: 'Budget', i: 0.20, o: 1.25, s: ['chat', 'speed'] },
    { id: 'openai-gpt54-pro', n: 'GPT-5.4 Pro', p: 'OpenAI', t: 'Premium', i: 30, o: 180, s: ['reasoning', 'coding'] },
    { id: 'openai-gpt-oss-120b', n: 'GPT-oss 120B', p: 'OpenAI', t: 'Budget', i: 0.15, o: 0.6, s: ['general', 'coding'] },
    { id: 'openai-gpt-oss-20b', n: 'GPT-oss 20B', p: 'OpenAI', t: 'Budget', i: 0.08, o: 0.35, s: ['chat', 'speed'] },
    { id: 'openai-gpt4o', n: 'GPT-4o', p: 'OpenAI', t: 'Mid', i: 2.5, o: 10, s: ['multimodal', 'vision'] },
    { id: 'openai-gpt4o-mini', n: 'GPT-4o mini', p: 'OpenAI', t: 'Budget', i: 0.15, o: 0.6, s: ['chat', 'extraction'] },
    { id: 'anthropic-opus48', n: 'Claude Opus 4.8', p: 'Anthropic', t: 'Premium', i: 5, o: 25, s: ['reasoning', 'coding'] },
    { id: 'anthropic-opus47', n: 'Claude Opus 4.7', p: 'Anthropic', t: 'Premium', i: 5, o: 25, s: ['reasoning', 'coding'] },
    { id: 'anthropic-opus', n: 'Claude 4 Opus', p: 'Anthropic', t: 'Premium', i: 15, o: 75, s: ['reasoning', 'creative'] },
    { id: 'anthropic-sonnet5', n: 'Claude Sonnet 5', p: 'Anthropic', t: 'Mid', i: 3, o: 15, s: ['coding', 'analysis'] },
    { id: 'anthropic-sonnet46', n: 'Claude Sonnet 4.6', p: 'Anthropic', t: 'Mid', i: 3, o: 15, s: ['coding', 'analysis'] },
    { id: 'anthropic-sonnet', n: 'Claude Sonnet 4', p: 'Anthropic', t: 'Mid', i: 3, o: 15, s: ['coding', 'general'] },
    { id: 'anthropic-haiku', n: 'Claude Haiku 4.5', p: 'Anthropic', t: 'Budget', i: 1, o: 5, s: ['chat', 'classification'] },
    { id: 'anthropic-fable5', n: 'Claude Fable 5', p: 'Anthropic', t: 'Premium', i: 10, o: 50, s: ['creative', 'reasoning'] },
    { id: 'anthropic-mythos5', n: 'Claude Mythos 5', p: 'Anthropic', t: 'Premium', i: 10, o: 50, s: ['creative', 'reasoning'] },
    { id: 'google-gemini3-pro', n: 'Gemini 3.1 Pro', p: 'Google', t: 'Mid', i: 2, o: 12, s: ['reasoning', 'long-context'] },
    { id: 'google-pro', n: 'Gemini 2.5 Pro', p: 'Google', t: 'Mid', i: 1.25, o: 10, s: ['reasoning', 'coding'] },
    { id: 'google-gemini35-flash', n: 'Gemini 3.5 Flash', p: 'Google', t: 'Mid', i: 1.5, o: 9, s: ['chat', 'speed'] },
    { id: 'google-gemini3-flash', n: 'Gemini 3 Flash', p: 'Google', t: 'Budget', i: 0.50, o: 3.00, s: ['chat', 'speed'] },
    { id: 'google-gemini31-flash-lite', n: 'Gemini 3.1 Flash-Lite', p: 'Google', t: 'Budget', i: 0.25, o: 1.50, s: ['classification', 'speed'] },
    { id: 'google-25-flash-lite', n: 'Gemini 2.5 Flash-Lite', p: 'Google', t: 'Budget', i: 0.10, o: 0.40, s: ['classification', 'speed'] },
    { id: 'google-flash', n: 'Gemini 2.0 Flash', p: 'Google', t: 'Budget', i: 0.1, o: 0.4, s: ['chat', 'speed'] },
    { id: 'google-flash-lite', n: 'Gemini 2.0 Flash Lite', p: 'Google', t: 'Budget', i: 0.075, o: 0.3, s: ['classification', 'speed'] },
    { id: 'deepseek-v4-pro', n: 'DeepSeek V4 Pro', p: 'DeepSeek', t: 'Budget', i: 0.435, o: 0.87, s: ['coding', 'reasoning'] },
    { id: 'deepseek-v4-flash', n: 'DeepSeek V4 Flash', p: 'DeepSeek', t: 'Budget', i: 0.14, o: 0.28, s: ['coding', 'chat'] },
    { id: 'deepseek-v32', n: 'DeepSeek V3.2', p: 'DeepSeek', t: 'Budget', i: 0.23, o: 0.34, s: ['coding', 'chat'] },
    { id: 'deepseek-v3', n: 'DeepSeek V3', p: 'DeepSeek', t: 'Budget', i: 0.27, o: 1.1, s: ['coding', 'general'] },
    { id: 'mistral-large', n: 'Mistral Large 3', p: 'Mistral', t: 'Budget', i: 0.5, o: 1.5, s: ['coding', 'multilingual'] },
    { id: 'mistral-medium', n: 'Mistral Medium 3.5', p: 'Mistral', t: 'Mid', i: 1.5, o: 7.5, s: ['coding', 'analysis'] },
    { id: 'mistral-small', n: 'Mistral Small 4', p: 'Mistral', t: 'Budget', i: 0.10, o: 0.30, s: ['chat', 'speed'] },
    { id: 'cohere-command-a', n: 'Command A', p: 'Cohere', t: 'Mid', i: 2.5, o: 10, s: ['reasoning', 'analysis'] },
    { id: 'cohere-command-r-plus', n: 'Command R+', p: 'Cohere', t: 'Mid', i: 2.5, o: 10, s: ['reasoning', 'analysis'] },
    { id: 'cohere-command-r', n: 'Command R', p: 'Cohere', t: 'Budget', i: 0.5, o: 1.5, s: ['chat', 'general'] },
    { id: 'llama-4-scout', n: 'Llama 4 Scout', p: 'Meta', t: 'Budget', i: 0.18, o: 0.59, s: ['general', 'chat'] },
    { id: 'llama-4-maverick', n: 'Llama 4 Maverick', p: 'Meta', t: 'Budget', i: 0.27, o: 0.85, s: ['coding', 'general'] },
    { id: 'llama-3.1-70b', n: 'Llama 3.1 70B', p: 'Meta', t: 'Mid', i: 0.88, o: 0.88, s: ['general', 'coding'] },
    { id: 'llama-3.1-8b', n: 'Llama 3.1 8B', p: 'Meta', t: 'Budget', i: 0.1, o: 0.1, s: ['chat', 'speed'] },
    { id: 'kimi-k26', n: 'Kimi K2.6', p: 'Moonshot', t: 'Budget', i: 0.95, o: 4, s: ['chat', 'general'] },
    { id: 'xai-grok3', n: 'Grok 4.3', p: 'xAI', t: 'Mid', i: 1.25, o: 2.5, s: ['reasoning', 'creative'] },
    { id: 'xai-grok3-mini', n: 'Grok Build 0.1', p: 'xAI', t: 'Budget', i: 0.3, o: 0.5, s: ['general', 'chat'] },
    { id: 'ai21-jamba17', n: 'Jamba 1.7 Large', p: 'AI21', t: 'Mid', i: 2, o: 8, s: ['general', 'long-context'] },
    { id: 'ai21-jamba', n: 'Jamba 1.5 Large', p: 'AI21', t: 'Mid', i: 2, o: 8, s: ['general', 'long-context'] }
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
