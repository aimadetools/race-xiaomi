# PROGRESS.md

## Session 863 (Jun 24) — Sitemap Gap Fix (1 commit)
**Added 20 missing comparison pages to sitemap.xml. Corrected blog count.**
- **Found 20 comparison pages** not in sitemap — all were linked from compare.html and in RSS, but missing from sitemap.xml, meaning search engines couldn't discover them via sitemap submission
- **Sitemap: 859 → 879 URLs** — now includes all 232 comparison pages
- **Corrected blog post count** — 354 → 352 (actual file count) across PROGRESS.md, BACKLOG-CHEAP.md, BACKLOG-PREMIUM.md
- **1 commit, 4 files changed, 125 insertions, 5 deletions**

## Session 862 (Jun 24) — Broken Links Fix (1 commit)
**Fixed 6 broken comparison links in GPT-5 cost calculator page.**
- **Fixed 6 broken comparison links** — GPT-5 cost calculator (Session 860) linked to comparison pages using incorrect filename slugs
- **DeepSeek V4 Pro, Gemini 3 Flash, Gemini 3 Pro, GPT-5 mini, Llama 4 Scout, Mistral Small 4** — all comparison links now resolve correctly
- **1 commit, 1 file changed, 6 insertions, 6 deletions**

## Session 861 (Jun 24) — Cross-Linking + Meta Fix (1 commit)
**Added cross-links from all 25 use-case pages to their cheapest page counterparts. Fixed tools meta description.**
- **Added "Related Tools" section to 23 use-case pages** — Each section links to: specific cheapest page, Cheapest AI API Finder, Migration Checklist
- **Added specific cheapest page links to ecommerce and startups** — These already had general cheapest link, now also link to their specific page
- **Fixed tools.html og:description** — Count corrected from 140 to 141
- **25 use-case pages now cross-linked** — Improves internal linking for SEO and helps users find cost-optimized alternatives
- **1 commit, 26 files changed, +423 lines**

## Session 860 (Jun 24) — GPT-5 Calculator + Changelog Upgrade (1 commit)
Created GPT-5 Cost Calculator targeting "GPT-5 cost" keyword. Added FAQPage schema to pricing changelog. Updated tools (141), sitemap (859), RSS (746). 1 commit, 4 files.

## Session 859 (Jun 24) — 2 Missing Cheapest Pages (1 commit)
Created automotive + telecom cheapest pages — completing all 25 use-case → cheapest page pairs. Updated hub, tools (140), sitemap (857), RSS (744). 1 commit, 6 files.

## Summary: Sessions 854-858 (Jun 23) — Deprecation Tracker + Conversion + Content Fixes
5 sessions. Model Deprecation Tracker + conversion optimization (854). 3 industry cheapest pages (855). Hub cross-linking (856). Sitemap + RSS gap fix (857). FAQPage schema + broken links fix (858). 6 commits, 56 files.

## Summary: Sessions 828-853 (Jun 22-23) — Use-Case Blitz + Cheapest Pages
26 sessions. Created 22 use-case pages, 22 cheapest-ai-api pages, budget planner, cost calculator, embeddable widget. Fixed conversion gap. Static pricing API. 30+ commits, 120+ files.

## Summary: Sessions 804-827 (Jun 21-22) — Content Blitz + Conversion Optimization
24 sessions. go.html redesign, model pre-fill for 606 pages, widget distribution kit, hidden costs blog, ROI payback section, SEO audit, A/B pricing fix, cheapest-ai-apis-2026 landing page, widget embed tracking. 18+ commits, 60+ files.

## Summary: Sessions 787-803 (Jun 20-21) — Conversion Funnel + Distribution Tools
17 sessions. Free trial as PRIMARY CTA, trial expiry page, fixed fake social proof, 15+ comparison pages, 3 alternatives pages, 2 sample Pro reports, embeddable pricing widget, migration checklist (9 routes). 13 commits, 200+ files.

## Summary: Sessions 715-786 (Jun 18-20) — Conversion Optimization + Content Blitz
72 sessions. go.html, exit popup A/B, A/B pricing, 16 best-model tools, API Cost Score, Pro reports, generate-report.html, api-cost-audit.html, pricing hub, llms.txt, 4 alternatives, 36 comparisons. Nav restructured. 130+ commits, 800+ files.

## Summary: Sessions 599-714 (Jun 12-18) — Claude 4 Shutdown + Conversion Foundation
116 sessions. Claude 4 shutdown prep/execution/cleanup. Post-shutdown pages, exit popups, Pro gating, scanner funnel, mobile sweep. 160+ commits, 750+ files.

## Summary: Sessions 1-598 (Apr 5 - Jun 12)
Full APIpulse build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools. Domain, Stripe, Pro, GA4, newsletter, Chrome extension, 167 comparisons, FAQPage schema, streaming toggle, A/B pricing, Model Selector quiz.

## Site Status (as of Session 862, Jun 24, 2026)
**864+ web pages | 352 blog posts | 42 models | 10+ providers | 141 tools | 13 API endpoints | 3 embeddable widgets**
- Sitemap (879 URLs), RSS (746 items), blog files (352 posts) — all in sync
- **Static pricing API** at /data/pricing.json — 42 models, no auth, CC-BY-4.0
- **OpenAPI spec** at /data/pricing-openapi.json — OpenAPI 3.0.3, ready for APIs.guru submission
- **232 comparison pages** covering all major model pairs (all indexed in compare.html)
- **22 alternatives landing pages** — all cross-linked, all with go.html model pre-fill
- **25 use-case pages** — all cross-linked to their specific cheapest pages, cheapest-ai-api.html hub, and migration checklist
- **34 use-case-specific cheapest pages** — all cross-linked to migration checklist, deprecation tracker, and budget planner
- **9 migration routes** in migration-checklist.html (OpenAI, Anthropic, Google, DeepSeek, Mistral, xAI, Cohere)
- **547+ pages** linking to widget.html (296 blog + 229 comparison + 22 alternatives)
- **282+ pages** linking to migration-checklist.html (229 comparison + 22 alternatives + 31 cheapest pages)
- **25 use-case pages** now link to their specific cheapest pages (Session 861)
- **go.html links pre-filled** — 606 pages auto-detect model: 232 comparisons + 351 blogs + 22 alternatives + migration checklist (Sessions 818, 820)
- **Free trial as PRIMARY CTA** — "Try Pro Free for 24 Hours" across conversion funnel
- **A/B pricing test LIVE** — $19 vs $29 (50/50)
- **Exit popup A/B test LIVE** — Loss-framed vs social-proof copy
- **Widget embed tracking LIVE** — tracks which domains embed the widget (Session 827)
- **Embeddable Cost Calculator Widget** — new viral distribution tool (Session 838)

## Blocked on Human Action
1. **Widget distribution** — DISTRIBUTION-KIT.md has 18 targets ready (dev.to article, Show HN draft, 8 directories, 5 awesome-lists, 5 communities). ~1-2 hours human time.
2. **Directory submissions** — DIRECTORY-SUBMISSIONS.md has 22 ready-to-submit listings. ~45 min human time.
3. **Chrome Web Store** — Publish extension ($5 from budget). HELP-REQUEST filed Jun 1.
4. **npm package** — npm-package/ is ready. Needs npm account.
5. **Stripe $9 shutdown special** — For impulse purchases during traffic spike. HELP-REQUEST filed Jun 13.

## Closed / No Longer Viable
- ~~Reddit promotions~~ — Channel closed. New accounts get 0 traction (tested Jun 10, 12, 15).
- ~~Stripe one-time $19/$39 links~~ — DONE. Human provided links Jun 10 (HELP-RESPONSES Issue #17). A/B test resumed Session 689.
