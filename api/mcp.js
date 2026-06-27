// APIpulse MCP Server — Model Context Protocol for AI API pricing data
// Implements MCP Streamable HTTP transport (2025-03-26)
// Endpoint: /api/mcp
// Docs: https://getapipulse.com/mcp.html

const crypto = require('crypto');

// ─── Model Data ──────────────────────────────────────────────
const MODELS = [
    { id: 'openai-gpt55', name: 'GPT-5.5', provider: 'OpenAI', tier: 'premium', input: 5, output: 30, context: '1.05M' },
    { id: 'openai-gpt55-pro', name: 'GPT-5.5 Pro', provider: 'OpenAI', tier: 'premium', input: 30, output: 180, context: '1.05M' },
    { id: 'openai-gpt53-codex', name: 'GPT-5.3 Codex', provider: 'OpenAI', tier: 'mid', input: 1.75, output: 14, context: '400K' },
    { id: 'openai-gpt5', name: 'GPT-5', provider: 'OpenAI', tier: 'premium', input: 1.25, output: 10, context: '272K' },
    { id: 'openai-gpt5-mini', name: 'GPT-5 mini', provider: 'OpenAI', tier: 'budget', input: 0.25, output: 2, context: '272K' },
    { id: 'openai-gpt-oss-120b', name: 'GPT-oss 120B', provider: 'OpenAI', tier: 'budget', input: 0.15, output: 0.6, context: '128K' },
    { id: 'openai-gpt-oss-20b', name: 'GPT-oss 20B', provider: 'OpenAI', tier: 'budget', input: 0.08, output: 0.35, context: '128K' },
    { id: 'openai-gpt4o', name: 'GPT-4o', provider: 'OpenAI', tier: 'mid', input: 2.5, output: 10, context: '128K' },
    { id: 'openai-gpt4o-mini', name: 'GPT-4o mini', provider: 'OpenAI', tier: 'budget', input: 0.15, output: 0.6, context: '128K' },
    { id: 'anthropic-opus48', name: 'Claude Opus 4.8', provider: 'Anthropic', tier: 'premium', input: 5, output: 25, context: '1M' },
    { id: 'anthropic-opus47', name: 'Claude Opus 4.7', provider: 'Anthropic', tier: 'premium', input: 5, output: 25, context: '1M' },
    { id: 'anthropic-opus', name: 'Claude 4 Opus', provider: 'Anthropic', tier: 'premium', input: 15, output: 75, context: '200K', deprecated: true },
    { id: 'anthropic-sonnet46', name: 'Claude Sonnet 4.6', provider: 'Anthropic', tier: 'mid', input: 3, output: 15, context: '1M' },
    { id: 'anthropic-sonnet', name: 'Claude Sonnet 4', provider: 'Anthropic', tier: 'mid', input: 3, output: 15, context: '200K', deprecated: true },
    { id: 'anthropic-haiku', name: 'Claude Haiku 4.5', provider: 'Anthropic', tier: 'budget', input: 1, output: 5, context: '200K' },
    { id: 'google-gemini35-flash', name: 'Gemini 3.5 Flash', provider: 'Google', tier: 'mid', input: 1.5, output: 9, context: '1M' },
    { id: 'google-gemini31-flash-lite', name: 'Gemini 3.1 Flash-Lite', provider: 'Google', tier: 'budget', input: 0.25, output: 1.5, context: '1M' },
    { id: 'google-gemini3-pro', name: 'Gemini 3.1 Pro', provider: 'Google', tier: 'mid', input: 2, output: 12, context: '1M' },
    { id: 'google-gemini3-flash', name: 'Gemini 3 Flash', provider: 'Google', tier: 'budget', input: 0.5, output: 3, context: '1M' },
    { id: 'google-pro', name: 'Gemini 2.5 Pro', provider: 'Google', tier: 'mid', input: 1.25, output: 10, context: '1M' },
    { id: 'google-25-flash-lite', name: 'Gemini 2.5 Flash-Lite', provider: 'Google', tier: 'budget', input: 0.1, output: 0.4, context: '1M' },
    { id: 'google-flash', name: 'Gemini 2.0 Flash', provider: 'Google', tier: 'budget', input: 0.1, output: 0.4, context: '1M', deprecated: true },
    { id: 'google-flash-lite', name: 'Gemini 2.0 Flash Lite', provider: 'Google', tier: 'budget', input: 0.075, output: 0.3, context: '1M', deprecated: true },
    { id: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro', provider: 'DeepSeek', tier: 'budget', input: 0.435, output: 0.87, context: '1M' },
    { id: 'deepseek-v4-flash', name: 'DeepSeek V4 Flash', provider: 'DeepSeek', tier: 'budget', input: 0.14, output: 0.28, context: '1M' },
    { id: 'deepseek-v32', name: 'DeepSeek V3.2', provider: 'DeepSeek', tier: 'budget', input: 0.23, output: 0.34, context: '128K' },
    { id: 'deepseek-v3', name: 'DeepSeek V3', provider: 'DeepSeek', tier: 'budget', input: 0.27, output: 1.1, context: '128K', deprecated: true },
    { id: 'mistral-large', name: 'Mistral Large 3', provider: 'Mistral', tier: 'budget', input: 0.5, output: 1.5, context: '262K' },
    { id: 'mistral-medium', name: 'Mistral Medium 3.5', provider: 'Mistral', tier: 'mid', input: 1.5, output: 7.5, context: '128K' },
    { id: 'mistral-small', name: 'Mistral Small 4', provider: 'Mistral', tier: 'budget', input: 0.1, output: 0.3, context: '128K' },
    { id: 'cohere-command-a', name: 'Command A', provider: 'Cohere', tier: 'mid', input: 2.5, output: 10, context: '128K' },
    { id: 'cohere-command-r-plus', name: 'Command R+', provider: 'Cohere', tier: 'mid', input: 2.5, output: 10, context: '128K' },
    { id: 'cohere-command-r', name: 'Command R', provider: 'Cohere', tier: 'budget', input: 0.5, output: 1.5, context: '128K' },
    { id: 'llama-4-scout', name: 'Llama 4 Scout', provider: 'Meta', tier: 'budget', input: 0.18, output: 0.59, context: '1M' },
    { id: 'llama-4-maverick', name: 'Llama 4 Maverick', provider: 'Meta', tier: 'budget', input: 0.27, output: 0.85, context: '1M' },
    { id: 'llama-3.1-70b', name: 'Llama 3.1 70B', provider: 'Meta', tier: 'mid', input: 0.88, output: 0.88, context: '128K' },
    { id: 'llama-3.1-8b', name: 'Llama 3.1 8B', provider: 'Meta', tier: 'budget', input: 0.1, output: 0.1, context: '128K' },
    { id: 'kimi-k26', name: 'Kimi K2.6', provider: 'Moonshot', tier: 'budget', input: 0.95, output: 4, context: '256K' },
    { id: 'xai-grok3', name: 'Grok 4.3', provider: 'xAI', tier: 'mid', input: 1.25, output: 2.5, context: '1M' },
    { id: 'xai-grok3-mini', name: 'Grok Build 0.1', provider: 'xAI', tier: 'budget', input: 0.3, output: 0.5, context: '256K' },
    { id: 'ai21-jamba', name: 'Jamba 1.5 Large', provider: 'AI21', tier: 'mid', input: 2, output: 8, context: '256K' },
    { id: 'ai21-jamba17', name: 'Jamba 1.7 Large', provider: 'AI21', tier: 'mid', input: 2, output: 8, context: '256K' },
];

// ─── Tool Definitions ────────────────────────────────────────
const TOOLS = [
    {
        name: 'get_pricing',
        description: 'Get current pricing for AI API models. Returns input/output costs per 1M tokens. Filter by provider or tier, or get a specific model.',
        inputSchema: {
            type: 'object',
            properties: {
                model: { type: 'string', description: 'Model ID (e.g. "openai-gpt5", "anthropic-opus48"). See full list at getapipulse.com/data/pricing.json' },
                provider: { type: 'string', description: 'Filter by provider: openai, anthropic, google, deepseek, mistral, cohere, together, moonshot, xai, ai21' },
                tier: { type: 'string', description: 'Filter by tier: budget, mid, premium' },
                include_deprecated: { type: 'boolean', description: 'Include deprecated models (default: false)' }
            }
        }
    },
    {
        name: 'compare_models',
        description: 'Compare pricing for 2-5 AI models side by side. Shows cost difference and context window for each.',
        inputSchema: {
            type: 'object',
            properties: {
                models: {
                    type: 'array',
                    items: { type: 'string' },
                    minItems: 2,
                    maxItems: 5,
                    description: 'List of model IDs to compare (e.g. ["openai-gpt5", "anthropic-opus48", "google-gemini3-pro"])'
                }
            },
            required: ['models']
        }
    },
    {
        name: 'calculate_cost',
        description: 'Calculate estimated monthly cost for a model given usage. Returns breakdown by input/output tokens and total.',
        inputSchema: {
            type: 'object',
            properties: {
                model: { type: 'string', description: 'Model ID (e.g. "openai-gpt5")' },
                daily_requests: { type: 'number', description: 'Average requests per day (default: 1000)' },
                input_tokens_per_request: { type: 'number', description: 'Average input tokens per request (default: 500)' },
                output_tokens_per_request: { type: 'number', description: 'Average output tokens per request (default: 200)' }
            },
            required: ['model']
        }
    },
    {
        name: 'find_cheapest',
        description: 'Find the cheapest AI models for a use case. Returns top 5 cheapest non-deprecated models, optionally filtered by provider or minimum context window.',
        inputSchema: {
            type: 'object',
            properties: {
                provider: { type: 'string', description: 'Filter by provider (optional)' },
                min_context: { type: 'number', description: 'Minimum context window in tokens (optional, e.g. 128000 for 128K)' },
                sort_by: { type: 'string', enum: ['input', 'output', 'average'], description: 'Sort by input price, output price, or average (default: average)' }
            }
        }
    }
];

// ─── Helper ──────────────────────────────────────────────────
function textContent(text) {
    return { content: [{ type: 'text', text: text }] };
}

// ─── Tool Implementations ────────────────────────────────────
function handleGetPricing(args) {
    let models = MODELS.filter(function(m) { return !m.deprecated || args.include_deprecated; });
    if (args.model) {
        const found = MODELS.find(function(m) { return m.id === args.model; });
        if (!found) {
            const available = MODELS.map(function(m) { return m.id; }).join(', ');
            return textContent('Model "' + args.model + '" not found. Available: ' + available);
        }
        return textContent(formatModel(found));
    }
    if (args.provider) models = models.filter(function(m) { return m.provider.toLowerCase() === args.provider.toLowerCase(); });
    if (args.tier) models = models.filter(function(m) { return m.tier === args.tier; });
    var lines = models.map(formatModel).join('\n\n');
    return textContent('Found ' + models.length + ' models:\n\n' + lines + '\n\nSource: https://getapipulse.com | Prices per 1M tokens in USD');
}

function handleCompareModels(args) {
    var found = args.models.map(function(id) { return MODELS.find(function(m) { return m.id === id; }); }).filter(Boolean);
    if (found.length < 2) {
        var available = MODELS.map(function(m) { return m.id; }).join(', ');
        return textContent('Need at least 2 valid models. Available: ' + available);
    }
    var cheapest = found.reduce(function(a, b) {
        return ((a.input + a.output) / 2) < ((b.input + b.output) / 2) ? a : b;
    });
    var lines = found.map(function(m) {
        var total = ((m.input + m.output) / 2).toFixed(2);
        var tag = m.id === cheapest.id ? ' ← CHEAPEST' : '';
        return '• ' + m.name + ' (' + m.provider + ') — $' + m.input + '/$' + m.output + ' per 1M tokens (avg $' + total + ')' + tag + '\n  Context: ' + m.context + ' | Tier: ' + m.tier;
    });
    return textContent('Model Comparison:\n\n' + lines.join('\n\n') + '\n\nSource: https://getapipulse.com | Prices per 1M tokens in USD');
}

function handleCalculateCost(args) {
    var m = MODELS.find(function(m) { return m.id === args.model; });
    if (!m) {
        var available = MODELS.map(function(m) { return m.id; }).join(', ');
        return textContent('Model "' + args.model + '" not found. Available: ' + available);
    }
    var daily = args.daily_requests || 1000;
    var inTok = args.input_tokens_per_request || 500;
    var outTok = args.output_tokens_per_request || 200;
    var monthlyInput = (daily * 30 * inTok / 1000000) * m.input;
    var monthlyOutput = (daily * 30 * outTok / 1000000) * m.output;
    var total = monthlyInput + monthlyOutput;
    var text = 'Cost Estimate for ' + m.name + ' (' + m.provider + '):\n\n' +
        'Usage: ' + daily.toLocaleString() + ' req/day × ' + inTok + ' in + ' + outTok + ' out tokens\n' +
        'Monthly input cost:  $' + monthlyInput.toFixed(2) + '\n' +
        'Monthly output cost: $' + monthlyOutput.toFixed(2) + '\n' +
        'Total monthly cost:  $' + total.toFixed(2) + '\n\n' +
        'Model pricing: $' + m.input + '/$' + m.output + ' per 1M tokens\n' +
        'Context window: ' + m.context + '\n\n' +
        'Source: https://getapipulse.com';
    return textContent(text);
}

function handleFindCheapest(args) {
    var models = MODELS.filter(function(m) { return !m.deprecated; });
    if (args.provider) models = models.filter(function(m) { return m.provider.toLowerCase() === args.provider.toLowerCase(); });
    if (args.min_context) {
        models = models.filter(function(m) {
            var ctx = m.context;
            var num = parseFloat(ctx) * (ctx.indexOf('M') >= 0 ? 1000000 : ctx.indexOf('K') >= 0 ? 1000 : 1);
            return num >= args.min_context;
        });
    }
    var sortKey = args.sort_by || 'average';
    models.sort(function(a, b) {
        var aVal = sortKey === 'input' ? a.input : sortKey === 'output' ? a.output : (a.input + a.output) / 2;
        var bVal = sortKey === 'input' ? b.input : sortKey === 'output' ? b.output : (b.input + b.output) / 2;
        return aVal - bVal;
    });
    var top5 = models.slice(0, 5);
    if (!top5.length) return textContent('No models match your criteria.');
    var lines = top5.map(function(m, i) {
        return (i + 1) + '. ' + m.name + ' (' + m.provider + ') — $' + m.input + '/$' + m.output + ' per 1M tokens | ' + m.context + ' context';
    });
    var header = 'Top 5 Cheapest Models' + (args.provider ? ' (' + args.provider + ')' : '') + ':\n\n';
    return textContent(header + lines.join('\n') + '\n\nSource: https://getapipulse.com | Prices per 1M tokens in USD');
}

function formatModel(m) {
    var dep = m.deprecated ? ' [DEPRECATED]' : '';
    return m.name + ' (' + m.provider + ')' + dep + ' — $' + m.input + '/$' + m.output + ' per 1M tokens | ' + m.context + ' context | ' + m.tier + ' tier';
}

// ─── MCP Protocol Handler ────────────────────────────────────
function handleToolCall(name, args) {
    switch (name) {
        case 'get_pricing': return handleGetPricing(args || {});
        case 'compare_models': return handleCompareModels(args || {});
        case 'calculate_cost': return handleCalculateCost(args || {});
        case 'find_cheapest': return handleFindCheapest(args || {});
        default: return { content: [{ type: 'text', text: `Unknown tool: ${name}` }], isError: true };
    }
}

function makeResponse(id, result) {
    return { jsonrpc: '2.0', id, result };
}

function makeError(id, code, message) {
    return { jsonrpc: '2.0', id, error: { code, message } };
}

// ─── Vercel Serverless Handler ────────────────────────────────
module.exports = (req, res) => {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Mcp-Session-Id, Mcp-Protocol-Version');
    res.setHeader('Access-Control-Expose-Headers', 'Mcp-Session-Id');
    if (req.method === 'OPTIONS') return res.status(200).end();

    // GET returns info page
    if (req.method === 'GET') {
        res.setHeader('Content-Type', 'text/plain');
        return res.status(200).send('APIpulse MCP Server\n\nEndpoint: POST /api/mcp\nDocs: https://getapipulse.com/mcp.html\nTools: get_pricing, compare_models, calculate_cost, find_cheapest\n');
    }

    if (req.method !== 'POST') return res.status(405).json({ error: 'Use POST' });

    let body;
    try {
        body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    } catch (e) {
        return res.status(400).json(makeError(null, -32700, 'Parse error'));
    }

    if (!body || !body.method) return res.status(400).json(makeError(null, -32600, 'Invalid request'));

    const { id, method, params } = body;

    // Handle notifications (no id)
    if (id === undefined || id === null) {
        if (method === 'notifications/initialized') return res.status(200).end();
        return res.status(200).end();
    }

    switch (method) {
        case 'initialize':
            return res.status(200).json(makeResponse(id, {
                protocolVersion: '2025-03-26',
                capabilities: { tools: {} },
                serverInfo: { name: 'apipulse', version: '1.0.0' }
            }));

        case 'tools/list':
            return res.status(200).json(makeResponse(id, { tools: TOOLS }));

        case 'tools/call': {
            const toolName = params?.name;
            const args = params?.arguments;
            if (!toolName) return res.status(200).json(makeError(id, -32602, 'Missing tool name'));
            try {
                const result = handleToolCall(toolName, args);
                return res.status(200).json(makeResponse(id, result));
            } catch (e) {
                return res.status(200).json(makeResponse(id, { content: [{ type: 'text', text: `Error: ${e.message}` }], isError: true }));
            }
        }

        case 'ping':
            return res.status(200).json(makeResponse(id, {}));

        default:
            return res.status(200).json(makeError(id, -32601, `Method not found: ${method}`));
    }
};
