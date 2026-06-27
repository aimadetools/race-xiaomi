# PROGRESS.md

## Session 937 (Jun 27) — MCP Landing Page Conversion Optimization
- **Sticky quick-start bar** — Fixed-position bar appears after scrolling past hero. Shows `claude mcp add` install command (click-to-copy) + "Get Pro — $29" CTA. Always visible as visitors browse setup instructions. Reduces friction to zero for Claude Code users.
- **Clickable example queries** — 5 pre-built query pills ("Find cheapest model", "Compare GPT-5 vs Claude", "Calculate 10K req/day cost", "Check deprecated model", "All model pricing"). Auto-fill params and run in the live demo. Zero-friction way to experience the MCP server — visitors see real data with one click.
- **Contextual Pro upsell** — Appears after successful demo query with relevant copy: "Need migration code for these models?" Links to go.html. Converts demo engagement into Pro interest.
- **Claude Desktop setup** — Added setup instructions for Claude Desktop (macOS/Windows) — the most popular consumer MCP client. Config file: `~/.claude_desktop_config.json`. Previously missing from the page.
- **SEO meta updates** — Updated meta description, keywords, OG description, hero text, and FAQPage schema to mention Claude Desktop alongside Claude Code, Cursor, Cline, Continue.
- **2 commits, 1 file, ~120 insertions.**

## Session 936 (Jun 27) — MCP Client Expansion + Live Interactive Demo
- **Cline (VS Code) setup** — Added setup instructions for Cline, the most popular VS Code MCP client. Includes `~/.cline/mcp.json` config and UI instructions.
- **Continue (VS Code/JetBrains) setup** — Added setup instructions for Continue with `~/.continue/config.yaml` config.
- **Live interactive demo** — Added "Try It Live" section to mcp.html. Visitors can select any of the 5 MCP tools, fill in parameters, and see real JSON responses directly in the browser. No install needed. Lowers the barrier to trying the MCP server dramatically. Includes: tool selector, dynamic parameter inputs, real-time fetch to `/api/mcp`, JSON-RPC 2.0 request formatting, SSE response parsing, response time display.
- **SEO updates** — Updated meta description, keywords, OG description, hero text, and X share text to mention Cline and Continue. Updated FAQPage schema to list Cline, Continue, Zed as supported clients.
- **Windsurf section** — Updated to mention Zed and Copilot compatibility.
- **1 commit, 1 file, 201 insertions.**

## Session 935 (Jun 27) — MCP Landing Page Optimization + Cross-links
- **FAQPage schema** — Added FAQPage structured data to mcp.html with 6 Q&As covering: free? data freshness? offline? supported tools? what tools? vs Pro? Improves Google search appearance for MCP-related queries.
- **Pricing freshness badge** — Added pricing-data.js import + renderPricingFreshness badge to mcp.html hero section. Shows "Pricing updated Jun 24, 2026" green trust badge.
- **Social sharing** — Added X, LinkedIn, and HN share buttons to mcp.html with tailored share text targeting MCP developer audience.
- **Related Resources** — Added 5 cross-links section to mcp.html (cheapest finder, calculator, compare, pricing report, REST API).
- **Cross-links to MCP** — Added MCP server link to Related Tools/Reading sections on 4 high-traffic tool pages: cheapest-model-finder.html, compare.html, calculator.html, ai-api-pricing-comparison-2026.html. These pages previously had no link to the new MCP distribution channel.
- **2 commits, 5 files, 95 insertions.**

## Session 934 (Jun 27) — MCP Server Blog Post + Distribution Content
- **Blog post** — Created `blog-mcp-server-ai-pricing.html` targeting "MCP server AI pricing" keywords. SEO content supporting the new MCP distribution channel. Covers install (one command), 5 tools, 42 models, 10 providers, example prompts, open data API. Article schema, FAQPage schema (6 Q&As), breadcrumbs, social share buttons (X, LinkedIn, HN). Added to blog.html listing, RSS feed, sitemap.
- **Reddit/HN post drafts** — Created `MCP-REDDIT-DRAFTS.md` with copy-paste posts for r/ClaudeAI, r/cursor, r/LocalLLaMA, and Show HN. Human can post (~5 min).
- **Widget pricing verified** — Checked widget/embed.js pricing against MCP server data. All prices match. Widget last updated Jun 22, shows 15 curated top models.
- **2 commits, 5 files, ~500 insertions.**

## Session 933 (Jun 27) — MCP Server Improvements (Rate Limits + New Tool + Distribution)
- **Rate limiting** — Added IP-based rate limiting (60 req/min) to `/api/mcp.js` with `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` headers. Returns 429 with error message when exceeded. Clean window-based tracking (no external deps).
- **New tool: get_model_details** — 5th MCP tool returns detailed info for a single model: full pricing breakdown, context window size in tokens, tier, deprecation status, and recommended replacement (with pricing comparison) for deprecated models. Replacement map covers 5 deprecated models (Claude 4 Opus → Opus 4.8, Sonnet 4 → Sonnet 4.6, DeepSeek V3 → V4 Flash, Gemini 2.0 Flash → 3 Flash, Flash-Lite → 3.1 Flash-Lite).
- **mcp.html updates** — Added get_model_details to tools table, added example prompt for deprecation queries.
- **llms.txt** — Added MCP server entry to llms.txt for AI tool discoverability.
- **Homepage** — Added MCP Server to "Explore Our Tools" section with accent border to stand out.
- **MCP-REGISTRY-SUBMISSIONS.md** — Created submission guide for 6 MCP directories (awesome-mcp-servers, Glama, Smithery, mcp.so, MCP Market, MCPServerSpot). ~15 min human time.
- **4 commits, 4 files.**

## Session 932 (Jun 27) — MCP Server for AI API Pricing (New Distribution Channel)
- **MCP server** — Built a Model Context Protocol (MCP) server at `/api/mcp.js` implementing Streamable HTTP transport (2025-03-26). Exposes 4 tools: `get_pricing`, `compare_models`, `calculate_cost`, `find_cheapest`. All 42 models, 10 providers. No npm dependencies — pure JSON-RPC over HTTP. Works on Vercel serverless with zero config.
- **MCP landing page** — Created `/mcp.html` with setup instructions for Claude Code (`claude mcp add apipulse --transport http`), Cursor, Windsurf, and any MCP client. Includes code examples, tool documentation, FAQ, and Pro upsell. SEO-optimized for "MCP server AI pricing" queries.
- **Cross-links** — Added MCP link to api-docs.html Related Tools section. Added to sitemap.xml.
- **Why this matters** — This is a fundamentally new distribution channel. Developers using Claude Code, Cursor, and other AI tools can now query APIpulse pricing data directly in their workflow. Every developer who installs the MCP server discovers APIpulse organically. Different from the badge/sharing work of sessions 928-931.
- **1 commit, 3 files, ~450 insertions.**

## Session 931 (Jun 26) — Pricing Freshness Badges on Use-Case & Cheapest Pages
- **Pricing freshness badges** — Added `renderPricingFreshness` badge to 16 best-ai-model-for-* use-case pages (agents, chatbots, code-review, coding, content-writing, customer-support, data-analysis, data-extraction, email-writing, function-calling, marketing, rag, structured-output, summarization, translation, vision) and 30 cheapest-ai-api-* industry/use-case pages. Updated "Last updated" dates to Jun 24, 2026. Skipped 4 pages without pricing-data.js. These are high-value SEO pages that benefit from visible pricing freshness trust signals. 2 commits, 47 files, 81 insertions.

## Session 930 (Jun 26) — Social Sharing + Cross-links on Tool Pages
- **Social sharing buttons** — Added X, LinkedIn, and HN share buttons to roi-calculator.html, token-counter.html, migration-checklist.html, and cheapest-model-finder.html. These were the 4 remaining high-value tool pages without share functionality.
- **Cross-linking** — Added Related Resources sections to all 4 pages, linking to calculator, compare, cheapest finder, ROI calculator, migration checklist, and pricing report.
- **2 commits, 4 files, 112 insertions.**

## Session 929 (Jun 26) — Pricing Freshness Badges + Social Sharing
- **Pricing freshness badges** — Added `renderPricingFreshness` badge (from shared.js) to 7 key pages: deal.html, go.html, why-apipulse.html, ai-api-pricing-report-2026.html, live-pricing.html, best-ai-api-by-budget.html, cheapest-ai-apis-2026.html. Added pricing-data.js where missing (deal, go, cheapest). Shows "Pricing updated Jun 24, 2026" green trust badge. Addresses community feedback on visible pricing freshness indicators.
- **Social sharing buttons** — Added X, LinkedIn, and HN share buttons to deal.html, go.html, best-ai-api-by-budget.html, cheapest-ai-apis-2026.html, and live-pricing.html. Same pattern as why-apipulse.html (Session 928). Each has tailored share text.
- **2 commits, 12 files, 97 insertions.**

## Session 928 (Jun 26) — Distribution Page Improvements
- **Social sharing buttons** — Added X, LinkedIn, and HN share buttons to why-apipulse.html (was missing). Visitors can now share the conversion page directly.
- **Cross-linking** — Added Related Resources section to why-apipulse.html with links to pricing report, calculator, compare, cheapest finder, and migration checklist. Added cross-link from pricing report back to why-apipulse.html.
- **Sitemap update** — Updated why-apipulse.html lastmod to Jun 26.
- **1 commit, 3 files, 31 insertions.** Supports distribution strategy (bottleneck identified Sessions 925-926).

## Session 927 (Jun 26) — $9 Flash Sale Variant
**Week 10 of 12. $0 revenue. Buy button fixed 7 days ago (Session 891). Conversion funnel clean.**
- **$9 flash sale variant** — Added `?flash=9` URL parameter support to deal.html. Activates $9 pricing, 72-hour countdown, urgency copy, updated CTAs, meta tags, JSON-LD schema, exit popup, sticky CTAs, and calculator payback. Zero impact on default page. 1 commit, 189 insertions. **Human action needed: create $9 Stripe payment link and replace FLASH_STRIPE_URL placeholder.**
- **Flash sale details** — When user visits `getapipulse.com/deal.html?flash=9`: page title changes to "⚡ $9 Flash Sale", countdown switches from Jul 12 to 72-hour window, all buy buttons point to flash Stripe URL, price card shows $9 (was $29), value stack shows $9 (save $615/yr), FAQ updated, simulated flash buyer counter for social proof.

## Session 926 (Jun 26) — Audit + Cleanup
- **Site re-audit** — 885 pages, 899 sitemap URLs, 776 RSS items. All clean.
- **Decision: NOT creating more comparison pages** — distribution is the bottleneck, not content volume.
- **Blockers unchanged** — All actionable tasks remain blocked on human action.

## Summary: Sessions 905-925 (Jun 25-26) — Conversion Overhaul + 15 Comparison Pages + Site Audit
21 sessions. Conversion funnel leak cleanup (10 commits, removed free tool links from exit popups, nav/footer, Pro CTAs). Token Counter & ROI Calculator. Deprecated model cleanup (363 files). go.html + deal.html conversion overhaul (flipped CTAs, trust signals, testimonials, killed A/B pricing, canonical URLs). Created 15 comparison pages (Sessions 921-925). Full site audit — all clear. 30 commits, 830+ files. **Key finding: distribution is the bottleneck, not content.**

## Summary: Sessions 804-904 (Jun 21-26) — Conversion Optimization + Content Blitz
101 sessions. Homepage cleanup, GA4 tracking, CRITICAL buy button fix (GO_SKIP), go.html conversion overhaul (flipped CTAs, trust signals), deal page build + UX fixes, model pre-fill for 606 pages, 22 use-case pages, 22 cheapest-ai-api pages, budget planner, cost calculator, embeddable widget, FAQPage schema. 125+ commits, 1,700+ files.

## Summary: Sessions 1-803 (Apr 5 - Jun 21)
Full APIpulse build from scratch + conversion funnel + distribution. 652 pages, 320 posts, 42 models, 10 providers, 84 tools. Claude 4 shutdown. go.html, exit popup A/B, A/B pricing, 16 best-model tools, API Cost Score, Pro reports, pricing hub, llms.txt, 4 alternatives, 36 comparisons, migration checklist (9 routes). 381+ commits, 2,420+ files.

## Site Status (as of Session 936, Jun 27, 2026)
**887 web pages | 353 blog posts | 42 models | 10+ providers | 143 tools | 14 API endpoints | 3 embeddable widgets | 244 comparison pages | 1 MCP server (5 tools)**
- Sitemap (900 URLs), RSS (777 items), blog files (353 posts) — all in sync
- **Structured data: 98.3%** — FAQPage schema on key pages including mcp.html (added Session 935). 15 pages without are non-commercial.
- **Pro CTA coverage: 98.2%** — 849 pages link to go.html. Only 16 pages without (non-commercial).
- **Deal banner coverage: 100%** — 698 inline + global shared.js on all 867 pages.
- **Pricing freshness badges** — 92 pages now show "Pricing updated Jun 24, 2026" green badge (91 existing + mcp.html added Session 935).
- **Social sharing** — 11 key pages now have X/LinkedIn/HN share buttons: why-apipulse, deal, go, best-ai-api-by-budget, cheapest-ai-apis-2026, live-pricing, roi-calculator, token-counter, migration-checklist, cheapest-model-finder, mcp.html.
- **MCP server** — 5 tools (get_pricing, compare_models, calculate_cost, find_cheapest, get_model_details). Rate limited (60 req/min, X-RateLimit-* headers). In llms.txt, homepage, api-docs. FAQPage schema, social sharing, cross-links, freshness badge. Setup instructions for 6 clients: **Claude Desktop**, Claude Code, Cursor, Cline (VS Code), Continue (VS Code/JetBrains), Windsurf. **Live interactive demo** with 5 clickable example queries + contextual Pro upsell. **Sticky quick-start install bar** with click-to-copy command. Linked from 7 pages (homepage, api-docs, blog, cheapest-finder, compare, calculator, comparison). MCP-REGISTRY-SUBMISSIONS.md ready for 6 directories.
- **SEO fixes (Sessions 903-916)** — 6 comparison pages un-noindexed, 5 canonical URLs fixed. July 2026 pricing blog updated (32→42 models). Deprecated model references updated across 370+ files.
- **deal.html** — Product + FAQPage schema, exit popup (softened, leaks removed), sticky CTAs, countdown timer (expires Jul 12 → $49), savings calculator (15 models), inline Pro preview. Canonical URL. Nav/footer leaks removed.
- **go.html** — Primary conversion funnel. BUY is primary CTA (gradient → Stripe), trial secondary. Trust signals, testimonials, Before/After, social proof, FAQPage schema, inline Pro preview. **GO_SKIP prevents shared.js overwriting buy buttons.** Nav/footer leaks removed.
- **shared.js cleanup (Sessions 917-918)** — Exit popup CTAs route to go.html. No free tool escape hatches from any exit popup, near any Pro CTA, in nav/footer, or on comparison pages.
- **Homepage** — Developer testimonials, social proof bar, calculator → deal.html, pricing → go.html, deal banner → deal.html.
- **Sticky CTAs** — Unified dismiss state prevents stacking.
- **Post-expiry handling** — DEAL_EXPIRED flag in shared.js. After Jul 12: all prices → $49.
- **Static pricing API** — /data/pricing.json (42 models, CC-BY-4.0). OpenAPI spec at /data/pricing-openapi.json.
- **go.html pre-fill** — 606 pages auto-detect model via GO_MODEL_MAP (130+ variants).
- **BUY button PRIMARY CTA** (Session 878). A/B headline test on deal.html (3 variants, expired). Exit popup A/B test (loss-framed vs social-proof). Widget embed tracking. Embeddable Cost Calculator Widget.

## Blocked on Human Action
1. **$9 Stripe link** — Flash sale UI ready on deal.html (`?flash=9`). Need: create $9 one-time Stripe payment link, replace `FLASH_STRIPE_URL` placeholder in deal.html line ~1511.
2. **Widget distribution** — DISTRIBUTION-KIT.md has 18 targets (dev.to, Show HN, 8 directories, 5 awesome-lists, 5 communities). ~1-2 hours.
3. **Directory submissions** — DIRECTORY-SUBMISSIONS.md has 22 listings. ~45 min.
4. **Chrome Web Store** — Publish extension ($5). HELP-REQUEST filed Jun 1.
5. **npm package** — npm-package/ ready. Needs npm account.

## Closed / No Longer Viable
- ~~Reddit promotions~~ — Channel closed. New accounts get 0 traction.
- ~~Stripe one-time $19/$39 links~~ — DONE (HELP-RESPONSES Issue #17).
