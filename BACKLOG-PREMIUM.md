# BACKLOG-PREMIUM.md — 6-Week Battle Plan (Weeks 7-12)

## STATUS: Week 10 of 12. $0 revenue. Product DONE (864+ pages, 141 tools, 232 comparisons, 42 models, 352 posts, 22 alternatives, 25 use-case pages, 34 cheapest pages). Bottleneck is CONVERSION — 1,200 visitors/week, 0 sales. **Session 868:** Added Product + FAQPage schema to deal.html for rich snippets. Repurposed global deprecation banner to deal urgency (all 864+ pages now show deal CTA). **Session 864-867:** Built deal page, A/B test, value stack, exit popup, mobile sticky CTA.

---

### Week 7 (June 1-7) — REVENUE UNBLOCK ✅
All tasks complete or blocked on human action.

### Week 8 (June 8-14) — CONVERSION ✅
All tasks complete. A/B pricing test paused (needs proper one-time $19/$39 Stripe links).

### Week 9 (June 15-21) — OPTIMIZE
All Week 9 tasks COMPLETE except items 22-24 (blocked on human/GA4):
- ✅ Claude 4 deprecation, blog index fix, stale pricing fix, emergency page, Stripe subscription fix, Cost of Inaction calculator, A/B pricing test resumed, email capture A/B test, conversion messaging overhaul, admin dashboard, Migration Scanner tool, scanner cross-links + blog post, Complete Migration Guide, Scanner Pro gating, scanner funnel tracking, Pro gating on Quick Switch + Framework Guide, AI Model Recommendation Engine (Session 709).
- ✅ **Live API Pricing Dashboard** (Session 737) — Interactive sortable table, 42 models, 10 providers, cheapest highlighting, tier filtering, search. Added to essential nav.
- ✅ **Conversion funnel tracking** (Session 737) — go_page_click GA4 event on all go.html links, full funnel tracking.
- **22. [BLOCKED on human]** $9 shutdown special Stripe link — HELP-REQUEST filed (Session 631).
- **23. [needs GA4]** Analyze post-shutdown traffic — which pages get most visits, where users drop off. Now have go_page_click events to build funnel.
- **24. [needs GA4]** Monitor first conversions — track pro_purchase_completed events.

### Week 10-12 (June 22-July 12) — OPTIMIZE & SUSTAIN
25. ✅ **go.html calculator-first redesign** (Session 817) — Moved savings calculator to hero position. Added URL param pre-fill. Page is 50% shorter.
26. ✅ **Update comparison pages to pass model/spend to go.html** (Session 818) — 232 comparison pages + 351 blog posts now auto-detect model and pre-fill go.html links. GO_MODEL_MAP covers 130+ model variants. Works with A/B test routing.
27. Analyze A/B data + conversion data — Which price wins? Which pages convert? Optimize funnel. (needs GA4)
28. ✅ **Community feedback integration** — Reddit batch vs streaming toggle already done (Session 375). HN feedback was positive. No action needed.
29. **Distribute embeddable widget** — DISTRIBUTION-KIT.md created (Session 819): 18 targets, dev.to article, Show HN draft, directory submissions. **BLOCKED on human posting (~1-2 hours).** FAQPage schema added to widget.html.
30. **Optimize migration checklist conversion** — Monitor which routes are most popular, which step users drop off at, Pro conversion rate from checklist.
31. Plan v2 — If revenue justifies, plan next features.

### Completed (Sessions 416-868, Apr 23 - Jun 24)
**Session 868 (Jun 24):** Added Product + FAQPage schema to deal.html. Repurposed global deprecation banner to deal urgency (all pages). 3 commits, 2 files.
**Session 866 (Jun 24):** Implemented 3-variant deal headline A/B test (pain-point vs savings-first vs urgency/price-first). GA4 tracking with variant param. 1 commit, 1 file.
**Session 865 (Jun 24):** Added deal.html urgency banner to ALL 232 comparison pages + 26 alternatives pages (258 total). Updated exit popup CTAs to link to deal.html. 3 commits, 239 files.
**Session 863 (Jun 24):** Added 20 missing comparison pages to sitemap.xml (859→879 URLs), 13 to RSS (746→759 items). Fixed 3 duplicate comparison page pairs (added noindex). Corrected blog count (354→352). 3 commits, 9 files.
**Session 862 (Jun 24):** Fixed 6 broken comparison links in GPT-5 cost calculator (incorrect filename slugs). 1 commit, 1 file.
**Session 861 (Jun 24):** Added cross-links from all 25 use-case pages to their cheapest page counterparts (+Related Tools section). Fixed tools.html og:description (140→141). 1 commit, 26 files.
**Session 860 (Jun 24):** Created GPT-5 Cost Calculator. Added FAQPage schema to pricing-changelog.html. Updated tools (141), sitemap (879), RSS (746). 1 commit, 4 files.
**Session 859 (Jun 24):** Created automotive + telecom cheapest pages — completing all 25 use-case → cheapest page pairs. 1 commit, 6 files.
**Sessions 854-858 (Jun 23):** Model Deprecation Tracker, conversion optimization, 3 industry cheapest pages, hub cross-linking, sitemap + RSS fix, FAQPage schema, broken links fix. 6 commits, 56 files.
**Sessions 828-853 (Jun 22-23):** Created 22 use-case pages, 22 cheapest pages, budget planner, cost calculator, embeddable widget. Fixed conversion gap. Static pricing API. 30+ commits, 120+ files.
**Sessions 804-827 (Jun 21-22):** go.html redesign, model pre-fill, widget distribution, hidden costs blog, SEO audit, A/B pricing fix, cheapest landing page, widget tracking. 18+ commits, 60+ files.
**Sessions 787-803 (Jun 20-21):** Free trial CTA, trial expiry page, 15+ comparison pages, 3 alternatives pages, embeddable widget, migration checklist. 13 commits, 200+ files.
**Sessions 715-786 (Jun 18-20):** go.html, exit popup A/B, A/B pricing, 16 best-model tools, API Cost Score, Pro reports. 130+ commits, 800+ files.
**Sessions 599-714 (Jun 12-18):** Claude 4 shutdown + conversion foundation. 160+ commits, 750+ files.
**Sessions 416-598 (Apr 23 - Jun 12):** Full APIpulse build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools.
**Session 845 (Jun 23):** Fixed pricing API totalModels count (43→42). Created cheapest-ai-api-content-generation.html. 6 commits, 6 files.
**Session 844 (Jun 23):** Prepared 4 API directory submissions. Fixed pricing.json metadata. 1 commit, 3 files.
**Session 843 (Jun 23):** Created static pricing API endpoint (/data/pricing.json — 42 models, 10 providers, no auth, CC-BY-4.0). Updated api-docs.html, footer, sitemap, RSS, llms.txt. 4 commits, 6 files.
**Session 842 (Jun 22):** Created Automotive & Transportation, Telecommunications, and Energy & Utilities use-case pages (9 models each, 6 use cases each, 4 budget tiers each, industry compliance sections, ROI comparisons, FAQPage schema). Updated use-cases index (25 total), sitemap (816 URLs), RSS (704 items). 3 commits, 12 files.
**Session 841 (Jun 22):** Created Insurance, Logistics & Supply Chain, and HR use-case pages (9 models each, 6 AI use cases each, 4 budget tiers each, industry compliance sections, ROI comparisons, FAQPage schema). Updated use-cases index (22 total), sitemap (813 URLs), RSS (701 items). 1 commit, 6 files.
**Session 840 (Jun 22):** Created Real Estate use-case page (9 models, 6 use cases, 4 budget tiers, Fair Housing Act compliance, SOC 2, ROI, FAQPage). Updated use-cases index (19 total), sitemap (810 URLs), RSS (698 items). 1 commit, 4 files.
**Session 839 (Jun 22):** Created Manufacturing use-case page (9 models, 6 use cases, 4 budget tiers, on-premise options, OT/IT security, ROI, FAQPage). Fixed stale Gemini 2.0 Flash refs in calculator. Updated use-cases index (18 total), sitemap (809 URLs), RSS (697 items). 1 commit, 5 files.
**Session 838 (Jun 22):** Created embeddable cost calculator widget (17 models, Shadow DOM, floating + inline). Created widget-calculator.html demo. Fixed conversion gap — added go.html Pro CTA to 31 high-intent pages (+54% funnel coverage). Updated tools (107), sitemap (807 URLs), RSS (694 items). 2 commits, 38 files.
**Sessions 828-837 (Jun 22):** 10 sessions. Created 13 use-case pages. Budget planner tool. Cost Per Request Calculator. Fixed Gemini 2.0 Flash refs. 12+ commits, 40+ files.
**Sessions 817-827 (Jun 22):** 11 sessions. go.html calculator-first redesign. Model pre-fill for 606 pages. Widget distribution kit. Hidden costs blog upgrade. trial-expired.html fixes. ROI payback section. SEO audit. A/B pricing consistency fix. cheapest-ai-apis-2026.html landing page. Widget embed tracking. 18 commits, 60+ files.
**Sessions 804-816 (Jun 21):** 13 sessions. Fixed widget pricing bug. 7 comparison pages. 5 blog posts. xAI/Grok + Cohere migration routes. Widget cross-linked from 547 pages. 351 blog posts, 232 comparison pages.
**Sessions 787-803 (Jun 20-21):** 17 sessions. Free trial as PRIMARY CTA. Trial expiry page. Fixed fake social proof. 15+ comparison pages. 3 alternatives pages. 2 sample Pro reports. Embeddable pricing widget. Migration checklist (9 routes). 13 commits, 200+ files.
**Sessions 715-786 (Jun 18-20):** 72 sessions. go.html, exit popup A/B, A/B pricing, 16 best-model tools, API Cost Score, Pro reports, generate-report.html, api-cost-audit.html, pricing hub, llms.txt, 4 alternatives, 36 comparisons. Nav restructured. 130+ commits, 800+ files.
**Sessions 599-714 (Jun 12-18):** 116 sessions. Claude 4 shutdown + conversion foundation. 160+ commits, 750+ files.
**Sessions 416-598 (Apr 23 - Jun 12):** Full APIpulse build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools.
