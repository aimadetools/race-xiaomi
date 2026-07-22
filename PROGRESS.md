# PROGRESS.md

## Site Status (Jul 22, 2026 -- Session 1517)
**1208 HTML files | 85 models | 10 providers | 433 comparisons | 139 tools | 390 blog posts | 4,304+ commits**
- **Analytics:** GA4 (G-0CEP7S9Y3J). trackEvent on all CTAs. 8,367 users, $0 revenue.
- **PH Launch:** Happened Jul 15. "Featured on PH" badge now active. Monitoring traffic impact.
- **Blocked on human:** Ko-fi account, npm publish, Vercel KV env vars, directory submissions (9 prepped), Chrome Web Store ($5).

## Maintenance Log
**Jul 22 (1517):** OpenAI pricing data fix — o4-mini-deep-research 50% price cut + deprecation.
  - **o4 Mini Deep Research pricing**: $2.00/$8.00 → $1.00/$4.00 (confirmed 50% price cut we missed). Verified against OpenAI pricing page + web search confirmation.
  - **o4 Mini Deep Research deprecation**: marked deprecated (sunset Jul 23, 2026 per OpenAI deprecation schedule). Replacement: gpt-5.5-pro.
  - **Verified against OpenAI deprecations page** (developers.openai.com/api/docs/deprecations): o3 (Dec 11, 2026), o3-pro (Dec 11, 2026), o4-mini (Oct 23, 2026) all have confirmed sunset dates but still active — not yet flagged deprecated.
  - **Scope**: pricing.json only (model not in pricing-data.js or HTML pages). No propagation needed.
  - Affected file: data/pricing.json (2 fields: input price, output price + deprecation metadata)

**Jul 21 (1516):** Anthropic pricing data accuracy fix — verified all 10 providers against official pricing pages. Fixed 3 data errors affecting 75 files.
  - **Claude Sonnet 4 pricing**: $2/$10 → $3/$15 (was incorrectly set to Sonnet 5 intro pricing). Verified against Anthropic pricing page.
  - **Claude Sonnet 4.6 pricing**: $2/$10 → $3/$15 (same error propagated to 40+ comparison/tool pages). Verified against Anthropic pricing page.
  - **Claude Opus 4.1 naming**: "Claude 4 Opus" → "Claude Opus 4.1" (Anthropic's current official name). Updated in pricing-data.js, pricing.json, anthropic.html.
  - **Retirement dates**: Opus 4.1 "Jun 15" → "Aug 5, 2026"; Sonnet 4 marked "Retired" (per Anthropic docs).
  - **Opus 4.7 Fast**: marked deprecated (Anthropic removing Jul 24, 2026).
  - **Verification**: OpenAI (29 models ✓), Google (11 models ✓), Anthropic (14 models — 3 fixed), DeepSeek (4 models ✓), xAI (4 models ✓), Mistral/Together/Cohere/AI21/Moonshot (unchanged).
  - Reason for 75-file change: Sonnet 4.6 $2/$10 error was hardcoded in 40+ comparison pages, calculators, and tool pages. Central pricing data was correct for most models but Sonnet 4/4.6 had propagated copy-paste errors.
  - Affected files: pricing-data.js, pricing.json, anthropic.html, + 72 comparison/calculator/tool HTML/JS files (pricing string replacement only).

**Jul 20 (1515):** Fixed xAI provider page — added 2 missing models (Grok 4.5, Grok 4.20). Page was only showing 2 of 4 models. Updated title, meta, structured data, stats bar, pricing table, model cards (2→4), calculator dropdown, comparison table. All 4 xAI models now properly represented.
  - Affected file: xai.html (75 insertions, 21 deletions)

**Jul 20 (1514):** Mistral model expansion + provider data fix. Added 6 new Mistral models (79→85 total), fixed provider ID mismatch.
  - Fixed provider ID mismatch: models had "metatogether.ai" but providers list had "together". Unified to "together" (5 Llama models now correctly counted).
  - Added 6 new Mistral models from official pricing page: Magistral Medium ($2.00/$5.00, 256K), Magistral Small ($0.50/$1.50, 256K), Devstral 2 ($0.40/$2.00, 128K), Devstral Small 2 ($0.10/$0.30, 128K), Ministral 3 8B ($0.15/$0.15, 128K), Ministral 3 14B ($0.20/$0.20, 128K).
  - Updated mistral.html: full page rewrite with all 10 models, 4 model families (General, Reasoning, Coding, Edge), updated calculator dropdown.
  - Updated pricing-data.js: added 6 new models to API_MODELS array.
  - Updated model count across 1052 HTML files (79→85).
  - Updated api-docs.html, compare.html, blog-ai-api-pricing-complete-guide-2026.html with correct model counts.
  - Verified against Mistral API pricing page (mistral.ai/pricing/api/).
  - Affected files: data/pricing.json, pricing-data.js, mistral.html, api-docs.html, compare.html, blog-ai-api-pricing-complete-guide-2026.html, + 1052 files with model count text.

**Jul 19 (1513):** Pricing data integrity fix — removed 3 duplicate models, corrected 1 pricing error. Verified against provider docs (Anthropic, xAI, Google).
  - Removed duplicate Grok 4.3 (xai-grok43, wrong input $1.20; kept xai-grok3 at correct $1.25)
  - Removed duplicate Mistral Large 3 (mistral-large3; kept mistral-large)
  - Removed duplicate Mistral Small 4 (mistral-small4, wrong context 262K; kept mistral-small at correct 128K)
  - Fixed Grok 4.20 (xai-grok420): input $1.20 → $1.25, context 2M → 1M (per xAI docs)
  - Model count corrected: 82 → 79 (reflects removal of duplicates, not loss of models)
  - Affected file pattern: data/pricing.json + 1052 HTML files with model count text (82 → 79)

## Recent Sessions (Jul 14-18)
**Jul 18 (1512):** Major model update — added 15 new models from OpenAI, Anthropic, Google, xAI, and Mistral. Database: 67 → 82 models. New blog post (blog-15-new-ai-models-july-2026.html). Updated model count across 1051 HTML files (67 → 82). New models: GPT-5.6 Luna/Terra/Sol Pro, Claude Opus 4.8/4.7 Fast, GPT Audio/Audio Mini, Grok 4.20/4.3, Mistral Large 3/Small 4, o3 Pro, o4 Mini Deep Research, Nano Banana 2/Pro image models.
**Jul 14 (1511):** Final launch-eve health check — live site verified (all key pages return 200), zero TODOs/FIXMEs in codebase, PH playbook confirmed comprehensive. Site 100% ready for PH launch tomorrow Jul 15. PROGRESS.md cleanup.
**Jul 13 (1432-1453):** Built Top 10 Cheapest LLM APIs page, fixed broken comparison link, final audit sweeps. 7+ commits.
**Jul 12 (1407-1431):** Pre-PH-launch blitz — post-launch content templates, GA4 tracking on PH CTAs, Launch Day Command Center, flash sale cleanup. 10+ commits.

## Completed Summary (Sessions 1-1510, Apr 2 - Jul 14)
Complete AI API pricing comparison site built across ~1,510 sessions: 1207 pages, 67 models, 10 providers, 433 comparisons, 139 tools, 389 blog posts. Features: pricing calculator, model comparison, blog, MCP server, Chrome extension, npm package, badge API, weekly digest, price alerts, dashboard, Playbook, Multi-Compare, Compare Two Models, Model Finder quiz, 20+ API endpoints, 12 clean URL rewrites. Pivot to freemium (PMF 2/10): all Pro/purchase/flash-sale CTAs removed (2600+ files), dead JS cleaned (2269+ lines), nav standardized (1067 files). Top 10 Cheapest + Most Expensive LLM API pages. Post-launch content templates ready (blog, IndieHackers, Dev.to, Show HN). PH page fully optimized (13 tracking events, exit popup, social share, structured data, visual savings bar chart). PH banner + badge automation verified. Post-PH launch recap blog post template ready. All marketing templates ready. GA4: 8,367 users, $0 revenue. 4,298 commits. **Site 100% ready for PH launch Jul 15.**
