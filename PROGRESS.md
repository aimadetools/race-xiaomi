# PROGRESS.md

## Session 877 (Jun 24) — Post-July-12 Expiry Handling Site-Wide (1 commit)
**Added centralized post-expiry logic so the site gracefully transitions from $29 deal pricing to $49 regular pricing after July 12 deadline.**
- **Centralized expiry flags** — `window.DEAL_EXPIRED`, `window.DEAL_DAYS_LEFT`, `window.DEAL_DEADLINE` in shared.js, available to all pages. Override `_abPrice` to $49 after expiry.
- **Global deal banner** — shared.js post-deprecation banner switches from red urgency ("$29 — price goes up July 12") to indigo regular pricing ("$49 one-time") after expiry. Also adds dynamic countdown ("X days left").
- **693 pages auto-update** — Text walker replaces "price goes up July 12" → "one-time payment" and "expires July 12" → "lifetime access" across all deal banner pages.
- **go.html full post-expiry** — Countdown shows "FOUNDING PRICE ENDED", all CTAs switch from "Try Pro Free" trial to "$49 buy", urgency/FAQ sections update, price displays change from $29→$49/$49→$79.
- **deal.html post-expiry** — Main countdown, mobile sticky CTA, desktop sticky CTA price, exit popup content, headline A/B test variants (3 new expired variants), OG meta tag all update. Desktop countdown hides, exit popup countdown badge hidden.
- **index.html** — "What's New" banner switches from deal urgency to regular Pro messaging.
- **1 commit, 4 files changed**
- **Key insight:** The deal deadline (July 12) was approaching with no auto-expiry logic. 693 pages had hardcoded "$29" and "expires July 12" text that would become misleading after the deadline. Without this fix, visitors after July 12 would see stale pricing, broken urgency messaging, and confused CTAs — a conversion-killing UX bug.

## Session 876 (Jun 24) — Desktop Sticky CTA Bar + Conversion Improvements (1 commit)
**Added persistent desktop sticky CTA bar to deal page, strengthened final CTA.**
- **Desktop sticky CTA bar** — Fixed bottom bar with logo, price ($29 was $49), countdown timer, and buy button. Appears after scrolling past hero CTA via IntersectionObserver. Previously only mobile had a sticky CTA — desktop users who scrolled through the full page (value stack, testimonials, comparison table, FAQ) had no persistent buy button. Major conversion gap.
- **Desktop countdown timer** — Shows days/hours left until July 12 deadline, updates every 60s. Creates urgency without being distracting.
- **GA4 tracking** — `deal_sticky_buy_clicked` with `platform:'desktop'` and `deal_buy_click` with `location:'desktop_sticky'`. Can now measure desktop sticky CTA engagement separately from mobile.
- **Strengthened final CTA** — Added urgency copy: "Every day you wait is money left on the table." Added price increase reminder in footer text: "Price increases to $49 on July 12."
- **1 commit, 1 file changed**
- **Key insight:** The deal page had a mobile sticky CTA (Session 864) but no desktop equivalent. Desktop users who scrolled through 1000+ lines of content (value stack, testimonials, comparison table, FAQ) had to scroll back to the top to buy. The sticky bar keeps the purchase option visible at all times — a standard e-commerce pattern that was missing.

## Session 875 (Jun 24) — Go.html Calculator Expansion (1 commit)
**Expanded go.html calculator from 8 to 15 models, fixed alternatives pricing, added cheapest-model edge case.** Key insight: go.html calculator only covered 8 models while site claims 42 — visitors on GPT-4o Mini, DeepSeek, Mistral, Grok couldn't calculate savings. Expanding to 15 models means ~80% more visitors can calculate personalized savings.

## Session 874 (Jun 24) — Deal Page UX + Conversion Tracking (3 commits)
**Fixed exit popup overlay dismiss, added sample report + FAQ click tracking, faster countdown, post-expiry state.** Key insight: exit popup overlay click-to-dismiss was a real UX bug — on mobile, users naturally tap outside popups to close them.

## Sessions 871-873 (Jun 24) — Deal Page Calculator + Pricing Fixes (5 commits)
**Fixed GPT-5 pricing bug (6x inflated), expanded calculator from 6 to 15 models, fixed mobile grids, added comparison table, improved exit popup triggers, exempted deal.html from shared.js A/B pricing test.** Key insight: shared.js A/B pricing test was silently corrupting deal page pricing — half of visitors saw $19 instead of $29.

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

## Site Status (as of Session 877, Jun 24, 2026)
**864+ web pages | 352 blog posts | 42 models | 10+ providers | 141 tools | 13 API endpoints | 3 embeddable widgets**
- Sitemap (879 URLs), RSS (759 items), blog files (352 posts) — all in sync
- **Deal banner coverage: 698 pages with inline banner + global shared.js banner on all 865 pages (100%)** — 232 comparison + 22 alternatives + 25 use-case + 34 cheapest + 352 blog + 45 tool/other pages
- **deal.html** — Product + FAQPage schema, OG + Twitter Card tags, A/B headline test (3 variants, 3 expired variants), exit popup (overlay dismiss, 1s countdown), mobile + desktop sticky CTA bars, countdown timer (auto-upgrades price post-expiry), value stack, savings calculator (15 models, correct pricing), sample report + FAQ click tracking
- **go.html** — Primary conversion funnel, calculator expanded to 15 models (Session 875), exit survey with tailored responses, social proof notifications, countdown timer, post-expiry CTA updates (Session 877)
- **Post-expiry handling (Session 877)** — Centralized `DEAL_EXPIRED` flag in shared.js. After July 12: all prices → $49, 693 pages auto-update "price goes up July 12" text, deal banners switch to regular pricing, trial CTAs hidden, exit popup updated
- **Static pricing API** at /data/pricing.json — 42 models, no auth, CC-BY-4.0
- **OpenAPI spec** at /data/pricing-openapi.json — OpenAPI 3.0.3, ready for APIs.guru submission
- **232 comparison pages** covering all major model pairs (all indexed in compare.html)
- **22 alternatives landing pages** — all cross-linked, all with go.html model pre-fill
- **25 use-case pages** — all cross-linked to their specific cheapest pages, cheapest-ai-api.html hub, and migration checklist
- **34 use-case-specific cheapest pages** — all cross-linked to migration checklist, deprecation tracker, and budget planner
- **9 migration routes** in migration-checklist.html (OpenAI, Anthropic, Google, DeepSeek, Mistral, xAI, Cohere)
- **go.html links pre-filled** — 606 pages auto-detect model: 232 comparisons + 351 blogs + 22 alternatives + migration checklist
- **Free trial as PRIMARY CTA** — "Try Pro Free for 24 Hours" across conversion funnel
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
