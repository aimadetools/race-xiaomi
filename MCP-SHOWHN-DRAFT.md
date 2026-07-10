# Show HN: Free MCP Server for AI API Pricing — Works in Claude Code, Cursor, Cline

## Title
Show HN: Free MCP Server for AI API Pricing — works in Claude Code, Cursor, Cline

## URL
https://getapipulse.com/mcp.html

## Comment (first comment, post immediately after submission)

I built an MCP server that gives your AI coding tools live pricing data for 64 LLM models across 10 providers.

Install one command:
```
claude mcp add apipulse --transport http https://getapipulse.com/api/mcp
```

Then ask your AI assistant things like:
- "Find the cheapest model for 10K requests/day"
- "Compare GPT-5 vs Claude Sonnet costs"
- "Calculate my monthly bill for GPT-4o mini at 5K req/day"

It works in Claude Code, Claude Desktop, Cursor, Cline, Continue, and Windsurf. No API key, no signup, no rate limits (60 req/min).

The server uses Streamable HTTP transport (the 2025-03-26 spec). All 5 tools return structured data — not just text, but actual JSON your AI can reason about.

I built [APIpulse](https://getapipulse.com) as a pricing dashboard and added the MCP server because I kept wanting to check model costs without leaving my editor. Figured others might want the same.

Live demo on the landing page if you want to try it without installing anything.

## Notes

- Post on a weekday morning US time (Tue-Thu optimal)
- Title is 74 chars (under 80 limit)
- Lead with the practical use case (pricing in your editor)
- MCP is hot right now — this should get attention
- Mention specific tools (Claude Code, Cursor) since those are what people search for
- The live demo is a strong hook — mention it early
- Respond to comments quickly in first hour
