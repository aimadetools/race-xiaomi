# PROGRESS.md

## Key Milestones
- **Session 1032 (Jul 1):** Badge customization + analytics + blog embeds. badge.js v1.1: data-theme (light/dark), data-count (N models), data-models (filter). GA4 badge_load tracking + widget-track pixel for embed analytics. Added live badge to 3 high-traffic blog posts (flagship comparison, cheapest LLM, cost optimization). Updated embed-badge.html with Customize tab. **Flash sale routing audit: CLEAN** — all pages correctly route to flash-19.html. 2 commits, 5 files.
- **Session 1031 (Jul 1):** Built embeddable AI pricing badge + CRITICAL conversion fix. Created embed-badge.html, badge.js (<2KB), badge.svg. **Found and fixed: 24 comparison pages were missing shared.js — visitors saw $29 instead of $19 flash sale price.** This could explain $0 revenue despite 1,200 visitors/week. Added shared.js to all affected pages. Sitemap 917→918 URLs, RSS 793→794 items. 4 commits, 31 files.
- **Session 1030 (Jun 30):** Added 4 Fable 5 and Mythos 5 comparison pages — new Anthropic premium models. Fable 5 vs DeepSeek V4 Pro (97% cheaper), Fable 5 vs Llama 4 Scout (99% cheaper), Mythos 5 vs GPT-5 (80% cheaper, Mythos 3.7x more context), Mythos 5 vs DeepSeek V4 Pro (97% cheaper, same 1M context). All include pricing tables, calculators, use cases, FAQPage schema, comparison gate. Sitemap 913→917 URLs, RSS 789→793 items. 2 commits, 6 files.
- **Session 1029 (Jun 30):** Added GPT-5.4 nano vs Mistral Small 4 ultra-budget comparison page — Mistral 57% cheaper. Includes pricing table, migration guide, code examples, FAQPage schema. Sitemap 912→913 URLs, RSS 788→789 items. 1 commit, 3 files.
- **Session 1028 (Jun 30):** Added GPT-5.4 mini vs DeepSeek V4 Pro and GPT-5.4 nano vs Llama 4 Scout comparison pages — budget model showdowns. DeepSeek 42% cheaper, Llama 70% cheaper. Both include pricing tables, migration guides, code examples, FAQPage schema. Sitemap 910→912 URLs, RSS 786→788 items. 1 commit, 4 files.
- **Session 1027 (Jun 30):** Added Claude Opus 4.8 vs Gemini 3.1 Pro comparison page — popular matchup, Gemini 56% cheaper. Includes pricing table, migration guide, code examples, FAQPage schema. Sitemap 909→910 URLs. 1 commit, 2 files.
- **Session 1026 (Jun 30):** Fixed 18 duplicate comparison pages with competing canonicals — major SEO fix. Converted shorter duplicate variants to proper redirects (noindex + canonical + meta refresh). Removed 18 entries from sitemap (927→909 URLs). Eliminated all known duplicate content issues across comparison pages. 4 commits, 21 files.
- **Session 1025 (Jun 30):** Added cost health check cross-links to 20 high-traffic pages. Health check was linked from only 10 pages — now linked from 30+. Added to index.html, comparison-gate.js (275+ pages), flash-19, deal, go, pricing, trial-expired, 5 blog posts, and 6 tool pages. 1 commit, 20 files.
- **Session 1024 (Jun 30):** Massive gating expansion — 373→533 pages gated (+160). Added gate to 12 comparison pages, 38 cheapest/pricing pages, 7 blog posts, 6 tool pages, 74 more pages with model-name tables, 22 calculator/tool pages. Verified: 0 comparison pages ungated, 0 stale counts. 3 commits, 161 files.
- **Session 1023 (Jun 30):** Extended comparison gating to 34 more pages (339→373 total). Added gate to 14 comparison pages missing the script + 20 alternatives/pricing pages. Fixed missing og:title and twitter:card on community.html and flash-deal.html. 3 commits, 36 files.
- **Session 1022 (Jun 30):** Created comparison-gate.js — automatic table row gating for conversion. Added Pro gate to 339 comparison pages (was 51). Visitors see top 3 models free, remaining gated behind Pro CTA. Biggest conversion change this session. 1 commit, 340 files.
- **Sessions 1010-1021 (Jun 30):** Quality sweep — RSS dedup (1604→786), twitter:description to 79 pages, twitter:title to 16 pages, stale counts fixed, broken meta tags across 16 files. Built AI API Migration Code Generator, overhauled Free vs Pro page, built Pricing Heatmap + AI Model Quiz, added cross-links to 266 comparison pages. Fixed pricing consistency across 6 conversion pages. 16 commits, 450+ files.

## Sessions 980-1009 (Jun 29-30) — Conversion Optimization & Distribution
Trust-first conversion, flash sale optimization, 12 new comparison pages, quality sweeps, 2 distribution tools (Pricing Dashboard + Quick Savings). 20+ commits, 700+ files.

## Sessions 969-989 (Jun 28-29) — Flash Sale Launch + Conversion
$19 flash sale, terminal dashboard, content gating (51 pages), team tools pivot, exit popups (353 pages), mobile floating CTA. 16+ commits, 110+ files.

## Sessions 905-968 (Jun 25-28) — Build Phase 2 + Conversion
MCP server (5 tools) + 688+ cross-links. Model launches (42→48). 28 comparison pages. OG/Twitter 100%. Chrome extension + npm. AI API Advisor, Pricing Benchmark. **101+ commits, 3,612+ files.**

## Sessions 1-904 (Apr 5 - Jun 25) — Full Build Phase 1
Full APIpulse build from scratch. **381+ commits, 2,420+ files.**

## Site Status (as of Session 1032, Jul 1, 2026)
**954 web pages | 361 blog posts | 48 models | 10+ providers | 157 tools | 17 API endpoints | 4 embeddable widgets (25 models + pricing badge) | 265 comparison pages (+ 29 redirects) | 1 MCP server (5 tools)**
- Sitemap (918 valid URLs), RSS (794 items, deduplicated & sorted) — all in sync
- **Pricing consistency: FIXED** — Flash sale $19, regular $29, future (post Jul 12) $49.
- **Social sharing tags: FIXED (Session 1021)** — All og:title and twitter:title tags properly closed across 16 files.
- **Structured data: 98.3%** — FAQPage schema on all 258 comparison pages + key tool pages.
- **Pro CTA coverage: 98.4%** — 851 pages link to go.html. All CTAs say "48-model".
- **Deal banner coverage: 100%** — 698 inline + global shared.js on all 867 pages.
- **OG/Twitter social sharing tags: 100%** — All indexed content pages have complete meta tags.
- **Tool count: 156** — Verified on tools.html card count.
- **Content gating** — 4 layers (usage-gate.js, results-cta.js, ranking table gate, comparison-gate.js). 533 pages gated (was 373). Show top 3 models free, gate remaining behind Pro CTA.
- **$19 Flash Sale** — flash-19.html landing page, site-wide banner. Ends Jul 12 → $29 regular → $49 future.

## Blocked on Human Action
1. **$9 Stripe link** — Flash sale UI ready on deal.html (`?flash=9`). Need: create $9 one-time Stripe payment link.
2. **Stripe webhook setup** — Code complete. Need: Create webhook in Stripe Dashboard + set env vars in Vercel.
3. **Distribution** — Widget (18 targets), directories (22 listings), MCP registries (6 dirs). All copy-paste ready.
4. **Chrome Web Store** — Publish extension ($5).
5. **npm package** — npm-package/ ready. Needs npm account.

## Closed / No Longer Viable
- ~~Reddit promotions~~ — Channel closed. New accounts get 0 traction.
- ~~Stripe one-time $19/$39 links~~ — DONE (HELP-RESPONSES Issue #17).
