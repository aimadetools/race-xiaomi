// AI API Pricing Badge — returns SVG like shields.io
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
    'anthropic-opus48': { n: 'Claude Opus 4.8', p: 'Anthropic', i: 5, o: 25 },
    'anthropic-opus47': { n: 'Claude Opus 4.7', p: 'Anthropic', i: 5, o: 25 },
    'anthropic-opus': { n: 'Claude 4 Opus', p: 'Anthropic', i: 15, o: 75 },
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
const C = { OpenAI: '#10a37f', Anthropic: '#d97706', Google: '#4285f4', DeepSeek: '#6366f1', Mistral: '#f97316', Cohere: '#39d353', Meta: '#0668e1', Moonshot: '#8b5cf6', xAI: '#ef4444', AI21: '#06b6d4' };
const fp = v => v >= 1 ? '$' + v.toFixed(2) : v >= 0.01 ? '$' + v.toFixed(3) : '$' + v.toFixed(4);
const ex = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const svg = (m, st) => {
    const l = ex(m.n), v = ex(fp(m.i) + ' in / ' + fp(m.o) + ' out');
    const lw = l.length * 7.2 + 16, vw = v.length * 7.2 + 16, tw = lw + vw, c = C[m.p] || '#6366f1';
    if (st === 'flat-square') return `<svg xmlns="http://www.w3.org/2000/svg" width="${tw}" height="20"><g shape-rendering="crispEdges"><rect width="${lw}" height="20" fill="#555"/><rect x="${lw}" width="${vw}" height="20" fill="${c}"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,sans-serif" font-size="11"><text x="${lw/2}" y="14" fill="#010101" fill-opacity=".3">${l}</text><text x="${lw/2}" y="13">${l}</text><text x="${lw+vw/2}" y="14" fill="#010101" fill-opacity=".3">${v}</text><text x="${lw+vw/2}" y="13">${v}</text></g></svg>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${tw}" height="20"><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="${tw}" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="${lw}" height="20" fill="#555"/><rect x="${lw}" width="${vw}" height="20" fill="${c}"/><rect width="${tw}" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,sans-serif" font-size="11"><text x="${lw/2}" y="15" fill="#010101" fill-opacity=".3">${l}</text><text x="${lw/2}" y="14">${l}</text><text x="${lw+vw/2}" y="15" fill="#010101" fill-opacity=".3">${v}</text><text x="${lw+vw/2}" y="14">${v}</text></g></svg>`;
};
module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Use GET' });
    const q = req.query || {};
    if (!q.model) return res.status(200).json({ error: 'Missing model param', models: Object.keys(M), usage: 'GET /api/badge?model=openai-gpt5' });
    const m = M[q.model.toLowerCase()];
    if (!m) return res.status(404).json({ error: 'Model not found', models: Object.keys(M) });
    if (q.format === 'md') { res.setHeader('Content-Type', 'text/plain'); return res.status(200).send(`![${m.n}](https://getapipulse.com/api/badge?model=${q.model})`); }
    if (q.format === 'url') { res.setHeader('Content-Type', 'text/plain'); return res.status(200).send(`https://getapipulse.com/api/badge?model=${q.model}`); }
    res.setHeader('Content-Type', 'image/svg+xml');
    return res.status(200).send(svg(m, q.style));
};
