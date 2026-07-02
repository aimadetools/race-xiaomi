// Embeddable AI API Pricing Widget — serves self-contained JS
// Usage: <script src="https://getapipulse.com/api/widget.js" data-model="openai-gpt4o"></script>

const WIDGET_CSS = `
.apipulse-widget{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;display:inline-block;border-radius:12px;padding:16px 20px;min-width:260px;max-width:340px;box-shadow:0 2px 12px rgba(0,0,0,.08);border:1px solid #e2e8f0;background:#fff;color:#0f172a;text-decoration:none;transition:box-shadow .2s,border-color .2s;position:relative;overflow:hidden}
.apipulse-widget:hover{box-shadow:0 4px 20px rgba(0,0,0,.12);border-color:#3b82f6}
.apipulse-widget .aw-provider{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px;opacity:.7}
.apipulse-widget .aw-name{font-size:16px;font-weight:700;margin-bottom:8px;line-height:1.2}
.apipulse-widget .aw-prices{display:flex;gap:12px;margin-bottom:10px}
.apipulse-widget .aw-price{flex:1;text-align:center;padding:8px 4px;border-radius:8px}
.apipulse-widget .aw-price-label{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px}
.apipulse-widget .aw-price-value{font-size:18px;font-weight:800}
.apipulse-widget .aw-footer{display:flex;justify-content:space-between;align-items:center;font-size:11px;color:#94a3b8}
.apipulse-widget .aw-logo{font-weight:700;color:#3b82f6}
.apipulse-widget .aw-badge{position:absolute;top:0;right:0;padding:3px 10px;border-radius:0 12px 0 8px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff}
.apipulse-widget-compact{padding:8px 14px;min-width:180px;max-width:240px}
.apipulse-widget-compact .aw-name{font-size:13px;margin-bottom:4px}
.apipulse-widget-compact .aw-prices{gap:8px;margin-bottom:6px}
.apipulse-widget-compact .aw-price{padding:4px}
.apipulse-widget-compact .aw-price-value{font-size:14px}
.apipulse-widget-mini{padding:6px 10px;min-width:140px;max-width:180px;display:flex;align-items:center;gap:8px}
.apipulse-widget-mini .aw-name{font-size:12px;margin-bottom:0}
.apipulse-widget-mini .aw-prices{margin-bottom:0;gap:6px}
.apipulse-widget-mini .aw-price-value{font-size:12px}
.apipulse-widget-mini .aw-price-label{display:none}
`;

const MODELS = {
    'openai-gpt55': { n: 'GPT-5.5', p: 'OpenAI', i: 5, o: 30, c: '#10a37f' },
    'openai-gpt55-pro': { n: 'GPT-5.5 Pro', p: 'OpenAI', i: 30, o: 180, c: '#10a37f' },
    'openai-gpt53-codex': { n: 'GPT-5.3 Codex', p: 'OpenAI', i: 1.75, o: 14, c: '#10a37f' },
    'openai-gpt5': { n: 'GPT-5', p: 'OpenAI', i: 1.25, o: 10, c: '#10a37f' },
    'openai-gpt5-mini': { n: 'GPT-5 mini', p: 'OpenAI', i: 0.25, o: 2, c: '#10a37f' },
    'openai-gpt4o': { n: 'GPT-4o', p: 'OpenAI', i: 2.5, o: 10, c: '#10a37f' },
    'openai-gpt4o-mini': { n: 'GPT-4o mini', p: 'OpenAI', i: 0.15, o: 0.6, c: '#10a37f' },
    'anthropic-opus48': { n: 'Claude Opus 4.8', p: 'Anthropic', i: 5, o: 25, c: '#d97706' },
    'anthropic-opus47': { n: 'Claude Opus 4.7', p: 'Anthropic', i: 5, o: 25, c: '#d97706' },
    'anthropic-opus': { n: 'Claude 4 Opus', p: 'Anthropic', i: 15, o: 75, c: '#d97706' },
    'anthropic-sonnet46': { n: 'Claude Sonnet 4.6', p: 'Anthropic', i: 3, o: 15, c: '#d97706' },
    'anthropic-sonnet': { n: 'Claude Sonnet 4', p: 'Anthropic', i: 3, o: 15, c: '#d97706' },
    'anthropic-haiku': { n: 'Claude Haiku 4.5', p: 'Anthropic', i: 1, o: 5, c: '#d97706' },
    'google-gemini3-pro': { n: 'Gemini 3.1 Pro', p: 'Google', i: 2, o: 12, c: '#4285f4' },
    'google-pro': { n: 'Gemini 2.5 Pro', p: 'Google', i: 1.25, o: 10, c: '#4285f4' },
    'google-flash': { n: 'Gemini 2.0 Flash', p: 'Google', i: 0.1, o: 0.4, c: '#4285f4' },
    'google-flash-lite': { n: 'Gemini 2.0 Flash Lite', p: 'Google', i: 0.075, o: 0.3, c: '#4285f4' },
    'deepseek-v4-pro': { n: 'DeepSeek V4 Pro', p: 'DeepSeek', i: 0.435, o: 0.87, c: '#6366f1' },
    'deepseek-v4-flash': { n: 'DeepSeek V4 Flash', p: 'DeepSeek', i: 0.14, o: 0.28, c: '#6366f1' },
    'deepseek-v3': { n: 'DeepSeek V3', p: 'DeepSeek', i: 0.27, o: 1.1, c: '#6366f1' },
    'mistral-large': { n: 'Mistral Large 3', p: 'Mistral', i: 0.5, o: 1.5, c: '#f97316' },
    'mistral-small': { n: 'Mistral Small 4', p: 'Mistral', i: 0.15, o: 0.6, c: '#f97316' },
    'cohere-command-r-plus': { n: 'Command R+', p: 'Cohere', i: 2.5, o: 10, c: '#39d353' },
    'cohere-command-r': { n: 'Command R', p: 'Cohere', i: 0.5, o: 1.5, c: '#39d353' },
    'llama-4-scout': { n: 'Llama 4 Scout', p: 'Meta', i: 0.18, o: 0.59, c: '#0668e1' },
    'llama-4-maverick': { n: 'Llama 4 Maverick', p: 'Meta', i: 0.27, o: 0.85, c: '#0668e1' },
    'llama-3.1-70b': { n: 'Llama 3.1 70B', p: 'Meta', i: 0.88, o: 0.88, c: '#0668e1' },
    'llama-3.1-8b': { n: 'Llama 3.1 8B', p: 'Meta', i: 0.1, o: 0.1, c: '#0668e1' },
    'kimi-k26': { n: 'Kimi K2.6', p: 'Moonshot', i: 0.95, o: 4, c: '#8b5cf6' },
    'xai-grok3': { n: 'Grok 4.3', p: 'xAI', i: 1.25, o: 2.5, c: '#ef4444' },
    'xai-grok3-mini': { n: 'Grok Build 0.1', p: 'xAI', i: 0.3, o: 0.5, c: '#ef4444' },
    'ai21-jamba': { n: 'Jamba 1.5 Large', p: 'AI21', i: 2, o: 8, c: '#06b6d4' }
};

const fp = v => v >= 1 ? '$' + v.toFixed(2) : v >= 0.01 ? '$' + v.toFixed(3) : '$' + v.toFixed(4);
const ex = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).end();

    const q = req.query || {};
    const modelKey = (q.model || 'openai-gpt4o').toLowerCase();
    const size = q.size || 'default'; // default, compact, mini
    const m = MODELS[modelKey];
    if (!m) return res.status(404).json({ error: 'Model not found', models: Object.keys(MODELS) });

    const widgetId = 'aw-' + modelKey.replace(/[^a-z0-9]/g, '-');
    const sizeClass = size === 'compact' ? ' apipulse-widget-compact' : size === 'mini' ? ' apipulse-widget-mini' : '';

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${WIDGET_CSS}</style></head><body style="margin:0;padding:20px;background:#f8fafc;">
<a href="https://getapipulse.com?ref=widget" target="_blank" rel="noopener" class="apipulse-widget${sizeClass}" id="${widgetId}" style="border-left:4px solid ${m.c}">
<div class="aw-badge" style="background:${m.c}">LIVE</div>
<div class="aw-provider" style="color:${m.c}">${ex(m.p)}</div>
<div class="aw-name">${ex(m.n)}</div>
<div class="aw-prices">
<div class="aw-price" style="background:${m.c}15">
<div class="aw-price-label" style="color:${m.c}">Input</div>
<div class="aw-price-value" style="color:${m.c}">${fp(m.i)}</div>
</div>
<div class="aw-price" style="background:${m.c}15">
<div class="aw-price-label" style="color:${m.c}">Output</div>
<div class="aw-price-value" style="color:${m.c}">${fp(m.o)}</div>
</div>
</div>
<div class="aw-footer"><span>/ 1M tokens</span><span class="aw-logo">⚡ APIpulse</span></div>
</a>
</body></html>`;

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
};
