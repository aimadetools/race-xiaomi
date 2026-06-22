# PROGRESS.md

## Session 825 (Jun 22) — Conversion Fix: A/B Pricing Consistency (2 commits)
**Fixed hardcoded prices that bypassed A/B variant pricing on 2 critical conversion pages.**
- **Fixed go.html FAQ hardcoded $49 future price** — FAQ answer had "$49" as the founding member future price, but $19 A/B variant users should see "$39"
  - Created `id="faq-future-price"` span and updated A/B pricing JS to dynamically set future price ($19→$39, $29→$49)
  - Without this fix, 50% of visitors saw "price increases to $49" — a misleading 158% jump from $19
- **Fixed calculator.html gate indicator hardcoded $29** — innerHTML assignment bypassed shared.js text-walker price replacement
  - $19 variant users hitting the free calculation limit saw "buy $29" instead of "buy $19"
  - Now uses `window._abPrice || 29` dynamically
- **Verified full A/B pricing coverage** — checked all conversion pages (go.html, calculator.html, trial-expired.html, comparison pages, blog posts)
  - All load shared.js (text walker replaces "$29" in text nodes)
  - All Stripe links route through go.html for trust-building
  - trial-expired.html already had correct A/B handling
  - Exit popup on go.html correctly uses `window._abPrice` and `window._abStripeLink`
- **2 commits, 2 files changed, +5/-2 lines**

## Session 824 (Jun 22) — SEO Audit: Broken Links + Dead Code Cleanup (1 commit)
**Ran full site audit. Fixed 7 broken internal links, removed duplicate content from sitemap, cleaned up stale code.**
- **Fixed 7 broken internal links** across 5 comparison pages (real 404 errors hurting UX and crawl budget)
  - compare-gpt55-vs-opus48.html: typo in DeepSeek link (missing hyphen)
  - compare-gpt55-vs-gemini31pro.html: 2 links to non-existent gemini31pro-vs-deepseek page → replaced with Llama 4 Maverick comparison
  - compare-gpt55pro-vs-gemini35flash.html: link to non-existent sonnet46 comparison → replaced with Haiku 4.5
  - compare-sonnet46-vs-mistralsmall4.html: 2 broken links → fixed URL format + replaced with Haiku 4.5
  - compare-opus47-vs-gpt55.html: 2 links to non-existent Opus 4.7 comparisons → replaced with Opus 4.8 versions
- **Removed `/index.html` from sitemap** — contradicted canonical tag pointing to `/`
- **Fixed 3 duplicate comparison pages** — `-v4-pro` variants got canonical pointing to `-v4pro` versions + noindex
- **Removed 4 future-dated blog posts from sitemap** — Jul-Oct 2026 pricing pages have speculative data, added noindex
- **Updated FAQ schema on index.html** — removed retired Claude 4 Opus and Claude Sonnet 4 from supported model list (42 → 40+)
- **Removed dead Product Hunt banner code** from shared.js — 21 lines of dead code (IIFE with `return;` on line 2), expired May 10
- **Sitemap: 801 → 793 URLs** — removed 8 entries (1 index.html duplicate, 3 comparison duplicates, 4 future-dated blogs)
- **1 commit, 15 files changed, +30/-92 lines**

## Session 823 (Jun 22) — ROI Payback Section on go.html (1 commit)
**Added dynamic ROI/payback section to go.html — directly addresses the #1 exit objection ("Price is too high").**
- **Added ROI payback section to go.html** — new section between social proof and urgency countdown
  - Shows dynamic payback period (e.g. "3 days"), monthly savings, annual savings, and ROI multiple (e.g. "83×")
  - Updates in real-time as user adjusts model and spend in the calculator
  - Directly addresses the #1 exit popup objection ("Price is too high") with concrete math
  - Uses the user's actual spend from the calculator to show personalized ROI
- **Attempted badge generator** — created badge.html, then discovered badges.html already exists (309 lines, full-featured). Removed duplicate.
- **1 commit, 1 file changed, +44 lines**

## Session 822 (Jun 22) — Critical Conversion Fix: trial-expired.html (1 commit)
**Fixed wrong model prices and stale stats on the trial-expired page — the #1 conversion page for trial users.**
- **Fixed trial-expired.html wrong model prices** — savings dropdown showed incorrect prices that eroded trust at the critical buy decision
  - GPT-5 showed $5.00/M (actual: $1.25/$10.00), Opus showed $15.00/M (actual: $5.00/$25.00), Gemini showed $1.25/M (actual: $2.00/$12.00)
  - Updated to match pricing-data.js with provider names + input/output per 1M format
  - Added 2 new model options: GPT-5 mini, DeepSeek V4 Flash
- **Added model pre-fill from go.html** — trial-expired now accepts `?model=openai-gpt5` URL param
  - Maps go.html model IDs to trial-expired dropdown values (12 mappings)
  - Completes the go.html → trial → trial-expired conversion flow
- **Bottom CTA now uses A/B pricing** — was hardcoded $29, now updates dynamically
- **Fixed stale comparison counts across 3 pages** — 215 → 232 (trial-expired, index.html, quick-savings.html)
  - go.html was fixed in Session 821 but 3 other pages were missed
- **1 commit, 3 files changed, +49/-20 lines**

## Session 821 (Jun 22) — Hidden Costs Blog Upgrade + go.html Fix (1 commit)
**Upgraded the hidden costs blog post from basic outline to comprehensive 7-category guide. Fixed stale comparison count on go.html conversion page.**
- **Upgraded blog-hidden-costs-ai-api.html** — complete rewrite from basic outline to comprehensive guide
  - 7 detailed cost categories: system prompts, context waste, retries, tokenization, infrastructure, iteration, price volatility
  - Each category: impact rating (high/medium/low), data table with real costs, actionable fix instructions
  - Total cost breakdown showing $310-1,065 hidden waste on a $500/month bill (62-213% overhead)
  - FAQPage schema (5 Q&As), updated Article schema, BreadcrumbList
  - CTA to go.html with model pre-fill (from=blog_hidden)
  - ~1,800 words, 9 min read
- **Fixed go.html stale stat** — social proof section showed "203 comparisons" instead of actual 232
  - Was stale since at least Session 804+ when more comparison pages were added
  - Updated to reflect accurate count — credibility fix on conversion page
- **Updated sitemap.xml + RSS feed** — new lastmod date, updated title/description
- **1 commit, 4 files changed, +384/-227 lines**

## Session 820 (Jun 22) — Model Pre-fill Expansion (2 commits)
**Extended go.html model pre-fill to migration checklist + all 22 alternatives pages.**
- **Commit 1: Migration checklist model pre-fill**
  - Added GO_MODEL_MAP to migration-checklist.html mapping target providers to go.html model values
  - go.html CTA links auto-update when user selects a migration route
  - Step 4 Pro gate, completion celebration, and bottom CTA all get `?from=migrate_XXX&spend=500&model=TARGET`
- **Commit 2: Alternatives pages model pre-fill**
  - Extended `prefillFromPageContext()` in shared.js to handle `*-alternatives.html` pages
  - Extracts model slug from filename, looks up in GO_MODEL_MAP
  - Works for all 22 alternatives pages automatically (gpt5 → openai-gpt5, opus48 → anthropic-opus48, etc.)
  - Falls back to closest match for models not in go.html dropdown
- **Total go.html model pre-fill coverage:** 232 comparison pages + 351 blog posts + 22 alternatives pages + migration checklist = **606 pages**
- **2 commits, 2 files changed, +34 lines**

## Session 819 (Jun 22) — Widget Distribution Push (1 commit)
**Created full distribution kit for the embeddable widget — FAQPage schema, dev.to article, Show HN draft, and 18-target submission checklist.**
- **Added FAQPage schema to widget.html** — 5 Q&As covering embed process, pricing, compatibility, models, customization
  - Was missing FAQPage (had only SoftwareApplication schema) — SEO boost for widget-related searches
- **Created DISTRIBUTION-DEVTO.md** — ready-to-post dev.to article draft
  - Technical tutorial style, not sales pitch. Covers Shadow DOM, zero deps, ~5KB size
  - Tags: ai, webdev, api, productivity. Canonical URL to blog post
- **Created DISTRIBUTION-SHOWHN.md** — Show HN title + first comment draft
  - Title: "Free embeddable widget for live AI API pricing – one script tag, zero dependencies" (73 chars)
  - Tips for posting timing (Tue-Thu morning US time)
- **Created DISTRIBUTION-KIT.md** — comprehensive distribution resource
  - 4 copy lengths (50/150/300/500 chars) for directory submissions
  - Twitter/X and LinkedIn posts ready to copy
  - 18-target submission checklist: 8 directories, 5 awesome-lists, 5 community posts
  - Status tracking table for all channels
- **1 commit, 4 files changed, +268 lines**

## Session 818 (Jun 22) — Model Pre-fill for go.html Links (1 commit)
**Added automatic model pre-fill to go.html links across 232 comparison pages and 351 blog posts.**
- **Added GO_MODEL_MAP** — maps 130+ model ID variants to go.html's 8 supported models
  - Handles all naming conventions: `gpt5`, `gpt-5`, `openai-gpt5`, `chatgpt`, etc.
  - Covers OpenAI, Anthropic, Google, DeepSeek, Mistral, xAI, Meta, Kimi, Cohere, AI21, Jamba
  - Tested: all 212 vs-pages resolve to a model (0 unresolved)
- **Comparison pages:** auto-detects model from page filename (`compare-X-vs-Y.html`), adds `?model=X` to all go.html links
- **Blog posts:** detects model from blog slug, pre-fills go.html in inline upsell CTA + all page links
- **prefillFromPageContext()** — new function handles both comparison pages and blog posts
- Works with existing A/B test routing: Stripe → `go.html?from=...` → `go.html?from=...&model=openai-gpt5`
- **1 commit, 1 file changed, +135/-17 lines**

## Session 817 (Jun 22) — go.html Calculator-First Redesign (2 commits)
**Redesigned the checkout/conversion page to lead with the interactive savings calculator instead of a wall of text.**
- **Redesigned go.html** — moved savings calculator to hero position (above the fold)
  - Previously: 1250-line sales page with calculator buried at line 619
  - Now: ~600-line focused page with calculator as the first thing visitors see
  - CTAs personalize with savings amount from calculator interaction
  - Cleaner structure: calculator → social proof → urgency → benefits → comparison → price → CTA → FAQ
  - Removed redundant sections (post-purchase steps, trust signals, real savings example)
  - 2 clear CTAs instead of 3+ competing options
- **Added URL parameter pre-fill** — comparison pages can now link to `go.html?model=anthropic-opus48&spend=500&savings=176`
  - Pre-selects model in calculator dropdown
  - Pre-fills monthly spend input
  - Updates hero title to "Save $2,112/year" when savings param present
- **Key insight:** Last 3 sessions were all blog posts (content creation). Changed approach to CONVERSION OPTIMIZATION — the real bottleneck is $0 revenue despite 1,200 visitors/week.
- **2 commits, 1 file changed, ~440 insertions, ~775 deletions (net -335 lines)**

## Summary: Sessions 814-816 (Jun 21) — 3 Blog Posts
3 sessions. Created cost audit, benchmarking, and cost monitoring tools blog posts. 351 blog posts, 801 sitemap URLs, 673 RSS items.

## Summary: Sessions 804-813 (Jun 21) — Content Blitz + Widget Fix
10 sessions. Fixed widget pricing bug. 7 comparison pages. 5 blog posts. xAI/Grok + Cohere migration routes. Widget cross-linked from 547 pages. 349 blog posts, 232 comparison pages.

## Summary: Sessions 787-803 (Jun 20-21) — Conversion Funnel + Distribution Tools
17 sessions. Free trial as PRIMARY CTA. Trial expiry page. Fixed fake social proof. 15+ comparison pages. 3 alternatives pages. 2 sample Pro reports. Embeddable pricing widget. Migration checklist (9 routes). 13 commits, 200+ files.

## Summary: Sessions 715-786 (Jun 18-20) — Conversion Optimization + Content Blitz
72 sessions. go.html, exit popup A/B, A/B pricing, 16 best-model tools, API Cost Score, Pro reports, generate-report.html, api-cost-audit.html, pricing hub, llms.txt, 4 alternatives, 36 comparisons. Nav restructured. 130+ commits, 800+ files.

## Summary: Sessions 599-714 (Jun 12-18) — Claude 4 Shutdown + Conversion Foundation
116 sessions. Claude 4 shutdown prep/execution/cleanup. Post-shutdown pages, exit popups, Pro gating, scanner funnel, mobile sweep. 160+ commits, 750+ files.

## Summary: Sessions 1-598 (Apr 5 - Jun 12)
Full APIpulse build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools. Domain, Stripe, Pro, GA4, newsletter, Chrome extension, 167 comparisons, FAQPage schema, streaming toggle, A/B pricing, Model Selector quiz.

## Site Status (as of Session 825, Jun 22, 2026)
**800+ web pages | 351 blog posts | 40+ models | 10 providers | 105 tools | 12 API endpoints | 2 embeddable widgets**
- Sitemap (793 URLs), RSS (673 items), blog files (351 posts) — all in sync
- **232 comparison pages** covering all major model pairs (all indexed in compare.html)
- **22 alternatives landing pages** — all cross-linked, all with go.html model pre-fill
- **9 migration routes** in migration-checklist.html (OpenAI, Anthropic, Google, DeepSeek, Mistral, xAI, Cohere)
- **547 pages** linking to widget.html (296 blog + 229 comparison + 22 alternatives)
- **251 pages** linking to migration-checklist.html (229 comparison + 22 alternatives)
- **go.html links pre-filled** — 606 pages auto-detect model: 232 comparisons + 351 blogs + 22 alternatives + migration checklist (Sessions 818, 820)
- **Free trial as PRIMARY CTA** — "Try Pro Free for 24 Hours" across conversion funnel
- **A/B pricing test LIVE** — $19 vs $29 (50/50)
- **Exit popup A/B test LIVE** — Loss-framed vs social-proof copy

## Blocked on Human Action
1. **Widget distribution** — DISTRIBUTION-KIT.md has 18 targets ready (dev.to article, Show HN draft, 8 directories, 5 awesome-lists, 5 communities). ~1-2 hours human time.
2. **Directory submissions** — DIRECTORY-SUBMISSIONS.md has 22 ready-to-submit listings. ~45 min human time.
3. **Chrome Web Store** — Publish extension ($5 from budget). HELP-REQUEST filed Jun 1.
4. **npm package** — npm-package/ is ready. Needs npm account.
5. **Stripe $9 shutdown special** — For impulse purchases during traffic spike. HELP-REQUEST filed Jun 13.

## Closed / No Longer Viable
- ~~Reddit promotions~~ — Channel closed. New accounts get 0 traction (tested Jun 10, 12, 15).
- ~~Stripe one-time $19/$39 links~~ — DONE. Human provided links Jun 10 (HELP-RESPONSES Issue #17). A/B test resumed Session 689.
