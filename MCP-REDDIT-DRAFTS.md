# MCP Server Reddit/HN Post Drafts
Draft promotional posts for the APIpulse MCP server. Human can copy-paste to post.
Created: Jun 27, 2026 (Session 934)

---

## r/ClaudeAI

**Title:** I built a free MCP server so Claude Code can check live AI API pricing

**Body:**
I got tired of my AI assistant hallucinating pricing data when I ask "which model should I use?" or "how much will this cost?"

So I built a free MCP server that gives Claude Code (and any MCP client) live access to real pricing data for 48 AI models across 10 providers.

**One command to install:**
```
claude mcp add apipulse --transport http https://getapipulse.com/api/mcp
```

**5 tools available:**
- `get_pricing` — pricing for any model (GPT-5.5, Claude Opus 4.8, Gemini, DeepSeek, etc.)
- `compare_models` — side-by-side comparison
- `calculate_cost` — estimate cost for a specific workload
- `find_cheapest` — cheapest model for your needs
- `get_model_details` — deprecation status, replacements, context windows

No API key. No signup. Free.

**Example prompts after installing:**
- "What's the cheapest model for code generation?"
- "Compare Claude Sonnet 4.6 vs GPT-5 pricing"
- "Is Claude 4 Opus deprecated? What replaces it?"

Full docs: https://getapipulse.com/mcp.html

---

## r/cursor

**Title:** Free MCP server for AI API pricing — 48 models in Cursor

**Body:**
Built a free MCP server that lets Cursor (and Claude Code, Windsurf, etc.) query live AI API pricing data.

**Setup for Cursor** — add to `.cursor/mcp.json`:
```json
{
  "mcpServers": {
    "apipulse": {
      "url": "https://getapipulse.com/api/mcp"
    }
  }
}
```

**What you get:**
- Live pricing for 48 models (OpenAI, Anthropic, Google, DeepSeek, Mistral, Meta, etc.)
- 5 tools: get_pricing, compare_models, calculate_cost, find_cheapest, get_model_details
- Deprecation tracking — know which models are sunsetting

No API key, no signup, completely free.

Example: ask "What's the cheapest model with a 1M context window?" and get a real answer with current prices.

Docs: https://getapipulse.com/mcp.html

---

## r/LocalLLaMA

**Title:** Free MCP server for comparing AI API pricing — 48 models including Llama, DeepSeek, Mistral

**Body:**
Built a free MCP server that gives your AI coding tools live access to pricing data across 48 models — including Llama 4 Scout/Maverick, DeepSeek V4 Pro/Flash, Mistral Small/Large, and all the usual suspects.

**Install (Claude Code):**
```
claude mcp add apipulse --transport http https://getapipulse.com/api/mcp
```

**Why this matters for this sub:** The `find_cheapest` tool can filter by tier, context window, and provider. You can ask "what's the cheapest model with 1M context?" and get Llama 4 Scout ($0.18/$0.59) vs DeepSeek V4 Flash ($0.14/$0.28) vs Gemini 2.5 Flash-Lite ($0.10/$0.40) with actual current prices.

Also tracks deprecations — DeepSeek V3 is deprecated in favor of V4 Flash, Gemini 2.0 Flash → 3 Flash, etc.

5 tools total: get_pricing, compare_models, calculate_cost, find_cheapest, get_model_details.

Free, no API key: https://getapipulse.com/mcp.html

---

## Show HN

**Title:** Show HN: Free MCP Server for AI API Pricing – 42 Models in Claude Code and Cursor

**URL:** https://getapipulse.com/mcp.html

**Comment (first):**
I built an MCP (Model Context Protocol) server that gives AI coding tools live access to real pricing data for 48 AI models across 10 providers.

**The problem:** When you ask Claude Code or Cursor "which model should I use?", they hallucinate prices or give outdated info. Model pricing changes fast — Claude 4 was just shut down, DeepSeek V4 launched at 97% cheaper than GPT-5.5, etc.

**The solution:** A free MCP server hosted on Vercel that returns current pricing data. One command to install:
```
claude mcp add apipulse --transport http https://getapipulse.com/api/mcp
```

**5 tools:** get_pricing, compare_models, calculate_cost, find_cheapest, get_model_details

Covers OpenAI (GPT-5.5, GPT-5, GPT-4o), Anthropic (Claude Opus 4.8, Sonnet 4.6, Haiku 4.5), Google (Gemini 3.5 Flash, 3.1 Pro), DeepSeek (V4 Pro/Flash), Mistral, Cohere, Meta (Llama 4), and more.

No API key, no signup, free. The pricing data is also available as a static JSON API under CC-BY-4.0.

Built this as part of APIpulse (https://getapipulse.com) — a site that tracks AI API pricing across providers.
