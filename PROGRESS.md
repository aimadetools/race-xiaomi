# PROGRESS.md

## Session 897 (Jun 25) — Site Health Audit (0 commits)
**Audited site health, sitemap, RSS, A/B test, and post-expiry handling. All systems nominal.**
- **Sitemap:** 880 URLs (865 HTML pages + 15 non-HTML: data files, llms.txt, robots.txt). All current.
- **RSS:** 759 items, lastBuildDate Jun 25. In sync with blog count.
- **Pro CTA coverage:** 849 pages (98.2%) link to go.html. Only 16 non-commercial pages without (404, admin, legal, etc.).
- **Direct buy.stripe.com links:** 336 pages have direct Stripe links — these are the A/B pricing test managed by shared.js (not broken, working as designed).
- **Deal expiry:** July 12 countdown active. Post-expiry price → $49 logic verified in shared.js + deal.html. DEAL_DEADLINE, DEAL_EXPIRED, EXPIRED_VARIANTS all correctly wired.
- **No broken internal links** on homepage or key pages.
- **No critical issues found.** All monitoring tasks in backlog require GA4 data or human action.
- **0 commits, 0 files changed**

## Session 896 (Jun 25) — Pro CTA Coverage: 5 Remaining Indexed Pages (1 commit)
**Added gradient Pro CTA to 5 indexed pages that were missing go.html links.**
- **Conversion leak closure** — pipeline.html (multi-model calculator), wall-of-love.html (testimonials), chrome-extension.html, launch.html, and ph.html (Product Hunt) were all indexed but had ZERO purchase links. Added gradient Pro CTA sections linking to go.html with personalized from-parameter tracking.
- **Total coverage: 849 pages** with go.html links (up from 844). Only 16 pages remain without — all legitimately non-commercial (404, admin, privacy, terms, newsletter, post-purchase, API docs, noindex pages).
- **1 commit, 5 files changed, 40 insertions**

## Session 895 (Jun 25) — FAQPage Schema + Stripe Link Routing (1 commit)
**Added FAQPage structured data to 4 high-value content pages + routed 2 direct Stripe links through go.html.**
- **FAQPage schema** — Added structured data to save-on-ai-apis.html (5 Q&As on savings, cheapest models, switching, accuracy), claude-4-survival-kit.html (5 Q&As on 410 errors, fixes, alternatives, savings, migration time), generate-report.html (4 Q&As on report contents, accuracy, accounts, models), widget-calculator.html (4 Q&As on embedding, models, pricing, customization). Enables rich FAQ snippets in Google search results.
- **Stripe link routing** — Updated about.html and migrate.html Pro CTAs to route through go.html instead of direct buy.stripe.com links. Ensures trust-building checkout funnel (social proof, testimonials, FAQ) before Stripe.
- **Sitemap + RSS** — Updated lastmod dates for all 6 modified pages. Updated RSS lastBuildDate to Jun 25.
- **Total structured data: 851/865 pages (98.4%)** — 14 pages without are non-commercial (404, admin, privacy, terms, etc.)
- **1 commit, 8 files changed, 189 insertions**

## Summary: Sessions 889-894, 896 (Jun 25) — Pro CTA Coverage Blitz (6 commits)
6 sessions. Added gradient Pro CTA to 10 provider hub pages (889). Added Pro CTA to 33 cheapest-ai-api pages (890). Upgraded all 352 blog post Pro CTAs from pro.html to go.html + fixed go.html banner (892). Added gradient Pro CTA to 32 tool/content pages — zero conversion leaks (893). Added gradient Pro CTA to 69 remaining tool/calculator pages (894). Added gradient Pro CTA to 5 remaining indexed pages (896). Total: 849 pages (98.2%) link to go.html. 6 commits, 540+ files.

## Session 891 (Jun 25) — CRITICAL: Fixed Broken Buy Button on go.html (1 commit)
**shared.js was overwriting ALL buy buttons on go.html to link back to go.html instead of Stripe. Every purchase attempt failed.**
- **The bug** — shared.js registers a DOMContentLoaded listener that rewrites ALL buy.stripe.com links to go.html. On go.html itself, this created an infinite loop: buy button → go.html → buy button → go.html...
- **The fix** — Added GO_SKIP to shared.js's A/B pricing IIFE (same pattern as DEAL_SKIP for deal.html). On go.html, shared.js returns before registering the DOMContentLoaded listener that rewrites links. Also added go-sticky-buy to go.html's href update list.
- **Impact** — This is likely THE reason for $0 revenue. Every single click on the primary buy CTA on go.html opened another go.html tab instead of Stripe checkout.
- **1 commit, 2 files changed**

## Session 890 (Jun 25) — Cheapest Pages Pro CTA (1 commit)
**Added Pro buy CTA to 33 industry-specific cheapest-ai-api pages. All had zero purchase links.**
- All 33 industry-specific cheapest pages had ZERO links to go.html or buy.stripe.com. Added gradient Pro CTA section before the existing free tool CTA on each page. Each links to go.html?from=cheapest_<industry> for tracking.
- **1 commit, 33 files changed**

## Session 889 (Jun 25) — Provider Hub Pages Pro CTA Fix (2 commits)
**Added Pro buy CTAs to 10 provider hub pages + claude-4-vs-gpt5.html. All had zero purchase links.**
- All 10 provider hub pages had ZERO links to go.html. Added gradient Pro CTA section before the existing calculator CTA. claude-4-vs-gpt5.html also had zero purchase links — added Pro CTA.
- **2 commits, 11 files changed**

## Summary: Sessions 878-888 (Jun 24) — go.html Conversion Optimization + CTA Coverage
11 sessions. Flipped go.html CTAs — buy primary, trial secondary (878). Fixed calculator overwriting buy CTA (879). Added trust signals, provider bar, checklist, badges (880). Developer testimonials (881). OG/Twitter meta + schema (882). Social proof overhaul + Before/After + homepage improvements (883). Fixed GO_MODEL_MAP for DeepSeek/Mistral/Grok/Gemini (884). Fixed notification overlap, audited deal.html (885). Added Pro CTA to deprecation tracker (886), homepage testimonials + 232 comparison page CTAs (887), migration checklist optimization (888). 18 commits, 250+ files.

## Summary: Sessions 864-870 (Jun 24) — Deal Page Build + UX Fixes
7 sessions. Created deal.html (countdown, calculator, testimonials, FAQ, dual CTAs). Added headline A/B test (3 variants). Added urgency banners to 258 comparison + 26 alternatives pages. Added Product + FAQPage schema, OG tags. Repurposed global deprecation banner to deal urgency. Added value stack, who-section, included checklist, mobile sticky CTA, exit-intent popup. Fixed 5 critical UX bugs: mobile exit popup velocity, double exit popups on deal/go/pricing, triple sticky bars on deal mobile. Free vs Pro comparison table. Exempted deal.html from shared.js A/B pricing test. 28 commits, 450+ files.

## Summary: Sessions 859-863 (Jun 24) — Content Completion + SEO Fixes
5 sessions. GPT-5 Cost Calculator + FAQPage schema on changelog (860). 2 missing cheapest pages completing all 25 pairs (859). Cross-linking 25 use-case pages to cheapest counterparts (861). Fixed 6 broken comparison links in GPT-5 calculator (862). Sitemap 859→879 URLs, RSS 746→759 items, fixed 3 duplicate pairs (863). 6 commits, 42 files.

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

## Site Status (as of Session 897, Jun 25, 2026)
**865 web pages | 352 blog posts | 42 models | 10+ providers | 141 tools | 13 API endpoints | 3 embeddable widgets**
- Sitemap (880 URLs), RSS (759 items), blog files (352 posts) — all in sync
- **Structured data: 851/865 pages (98.4%)** — FAQPage schema on key pages. 14 pages without are non-commercial (404, admin, privacy, terms, etc.)
- **Pro CTA coverage: 98.2% — 849 pages link to go.html** — 232 comparison + 352 blog + 33 cheapest + 10 provider hub + 22 alternatives + 25 use-case + 101 tool/calculator/content pages + deprecation tracker + migration checklist. Only 16 pages without go.html — all non-commercial.
- **Deal banner coverage: 698 pages with inline banner + global shared.js banner on all 865 pages (100%)**
- **deal.html** — Product + FAQPage schema, OG + Twitter Card tags, A/B headline test (3 variants, 3 expired variants), exit popup, mobile + desktop sticky CTA bars, countdown timer (expires Jul 12 → $49), value stack, savings calculator (15 models)
- **go.html** — Primary conversion funnel. BUY is primary CTA (gradient → Stripe), trial is secondary. Trust signals, provider bar, checklist, badges, testimonials, Before/After, social proof, FAQPage schema. Calculator expanded to 15 models.
- **Homepage (index.html)** — Developer testimonials, social proof bar, calculator with savings badge → deal.html, pricing → go.html, deal urgency banner → deal.html.
- **Post-expiry handling (Session 877)** — Centralized `DEAL_EXPIRED` flag in shared.js. After July 12: all prices → $49, pages auto-update, deal banners switch to regular pricing.
- **Static pricing API** at /data/pricing.json — 42 models, no auth, CC-BY-4.0
- **OpenAPI spec** at /data/pricing-openapi.json — OpenAPI 3.0.3, ready for APIs.guru submission
- **22 alternatives landing pages** — all cross-linked, all with go.html model pre-fill
- **25 use-case pages** — all cross-linked to their specific cheapest pages, cheapest-ai-api.html hub, and migration checklist
- **34 use-case-specific cheapest pages** — all cross-linked to migration checklist, deprecation tracker, and budget planner
- **9 migration routes** in migration-checklist.html (OpenAI, Anthropic, Google, DeepSeek, Mistral, xAI, Cohere). **Session 888:** Added OG/Twitter meta tags, trust signals, social proof testimonials, trust badges on CTA. Fixed GO_MODEL_MAP (3→7 providers).
- **go.html links pre-filled** — 606 pages auto-detect model: 232 comparisons + 351 blogs + 22 alternatives + migration checklist. **Session 884: Fixed GO_MODEL_MAP** — DeepSeek/Mistral/Grok/Gemini now map to correct go.html model IDs instead of fallbacks.
- **BUY button as PRIMARY CTA on go.html** (Session 878) — Gradient "Get lifetime access" button → Stripe checkout. Free trial is secondary outlined button.
- **A/B headline test LIVE on deal.html** — 3 variants (pain-point/savings/urgency)
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
