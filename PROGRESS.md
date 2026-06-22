# PROGRESS.md

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

## Site Status (as of Session 820, Jun 22, 2026)
**800+ web pages | 351 blog posts | 42 models | 10 providers | 105 tools | 12 API endpoints | 2 embeddable widgets**
- Sitemap (801 URLs), RSS (673 items), blog files (351 posts) — all in sync
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
