# PROGRESS.md

## Key Milestones
- **Session 1133 (Jul 5):** Fixed `-0%` display bug in open-source LLM cost calculator. Default text changed from `-0%` to `0%`. JS savings logic now uses `Math.abs()` and handles 3 cases (cheaper/more expensive/equal vs GPT-5) with correct sign and color. **1 commit, 1 file.**
- **Session 1132 (Jul 5):** PMF pivot — added post-calculator conversion CTA bridging one-time calculator to recurring monitoring features. CTA says "This was a snapshot. What about next month?" with links to Cost Monitoring Dashboard and Price Alerts. Addresses core issue from GA4 analysis: 359 calculator users, 0 conversions — nobody pays for a one-time tool. **1 commit, 1 file.**
- **Session 1131 (Jul 4):** Fixed sitemap — added 83 missing comparison pages, removed 2 duplicate entries, standardized all entries to multi-line XML format. Updated 5 pages with hardcoded $29 to $19 flash sale pricing (claude-4-migration-hub, claude-4-deprecation, claude-4-is-down, claude-4-error, teams). **3 commits, 6 files.**
- **Session 1130 (Jul 4):** Cleaned sitemap.xml — removed 3 non-page entries (data/pricing.json, data/pricing-openapi.json, llms.txt). Sitemap now has 1137 valid page URLs. **1 commit, 1 file.**
- **Session 1129 (Jul 4):** Fixed stale $29 Pro pricing to $19 flash sale price across 12 files. Updated upsell sections in 5 calculator pages, meta tags and A/B variants in deal.html, MCP savings text, terms, trial-expired, and FAQ schema. **1 commit, 12 files.**
- **Session 1128 (Jul 4):** Fixed Claude Haiku 4.5 pricing ($0.80/$4 → $1/$5) and Opus 4.8 pricing (swapped with Claude 4 in terminal.html) across 11 files. Corrected wrong Haiku prices in calculators, blog posts, use-case pages, and comparison content. **1 commit, 11 files.**
- **Session 1127 (Jul 4):** Fixed calculator double-counting bug (tokens counted as both input AND output) across 23 pages. Updated tools.html inline calculator to include all 49 models with provider groups. Fixed non-existent "Claude Sonnet 4.5" → "Claude Sonnet 4.6" in 4 pages. Fixed Mistral Medium 3 → 3.5 name and pricing. **3 commits, 27 files.**
- **Sessions 1119-1126 (Jul 4):** Alternatives page coverage for all 49 models (1068→1140 sitemap entries). Fixed 71 broken internal links, batch-generated 71 comparison pages. Added digest archive, recurring value features to pricing page, fixed outdated model counts. **12 commits, 134 files.**

## Site Status (Jul 5, 2026)
**1146 HTML files | 49 models | 10 providers | 533 comparison/alternatives pages | 1146 sitemap entries**
- **Flash sale: $19** -- flash-19.html. Sale ends Jul 12. All pages now show consistent $19 pricing.
- **Weekly digest:** weekly-digest.html (Jul 4 content). Archive: digest-archive.html.
- **Price alerts:** price-alerts.html (49 models, dynamic). Backend: /api/subscribe-alerts.
- **GA4: G-0CEP7S9Y3J** -- 8,367 users, $0 revenue.
- **PMF pivot (Session 1132):** Post-calculator CTA bridges calculator → monitoring. Value prop shifting from "one-time calculator" to "ongoing cost monitoring."
- **Blocked on human:** Directory submissions (22), Chrome Web Store ($5), npm publish.

## Completed Summary (Sessions 416-1133, Apr 23 - Jul 5)
Complete AI API pricing comparison site: 1146 pages, 49 models, 10 providers, 533 comparison/alternatives pages, 5 use-case ranking pages, MCP server, Chrome extension, npm package, badge API, weekly digest, price alerts with backend. Full conversion funnel. Pricing data accuracy verified and corrected. Sitemap cleaned. Post-calculator CTA bridges calculator → monitoring. Quality fixes: -0% display bug, calculator double-counting, pricing accuracy. **182+ commits, 6,000+ files.**
