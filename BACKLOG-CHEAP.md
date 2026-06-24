# BACKLOG-CHEAP.md — Routine Tasks

### Active Tasks — Conversion (Session 867 follow-ups)
- **Monitor deal exit popup conversion** — Track `deal_exit_popup_shown`, `deal_exit_popup_buy_clicked`, `deal_exit_popup_audit_clicked` events in GA4. How many people click audit vs buy? Is the exit popup capturing visitors?
- **Monitor mobile sticky CTA clicks** — Track `deal_sticky_buy_clicked` events. Is the sticky bar driving conversions on mobile?
- **Monitor value stack engagement** — Do visitors scroll past the value stack section? Check scroll depth in GA4.
- **Test deal page on mobile** — Verify sticky CTA, exit popup, and value stack render correctly on iOS/Android.

### Active Tasks — Conversion (Session 864 follow-ups)
- **Monitor deal.html conversion** — Track deal_page_buy_clicked, deal_page_final_buy_clicked, deal_savings_calculated events in GA4. Now also includes headline variant (a/b/c) — check GA4 for deal_headline_assigned, deal_buy_click events.
- **Monitor deal headline A/B test** — Session 866 added 3 variants (pain-point/savings/urgency). Check GA4 `deal_headline_assigned` + `deal_buy_click` events for winner. Variant persisted in localStorage `deal_headline_v2`.
- **Add deal.html link to more comparison pages** — ALL 232 comparison + 26 alternatives pages now have deal banner (Session 865).
- **Update homepage "What's New" banner** — Rotate deal messaging when July 12 deadline passes

### Active Tasks — Content & SEO
- **Submit static pricing API to directories** — /data/pricing.json is live (Session 843). DIRECTORY-SUBMISSIONS.md updated (Session 844) with 4 API-directory entries (public-apis PR, APIList.fun, RapidAPI marketplace, APIs.guru). **BLOCKED on human: GitHub PRs + marketplace listings (~30 min).**
- **Promote widget.html** — DISTRIBUTION-KIT.md created (Session 819) with 18 targets. dev.to article + Show HN draft + directory submissions ready. **BLOCKED on human posting (~1-2 hours).**
- **Promote widget-calculator.html** — new embeddable cost calculator widget (Session 838). DISTRIBUTION-CALC-WIDGET.md has targets ready. dev.to article + Show HN draft + directory submissions. **BLOCKED on human posting.**
- **Promote best-ai-api-by-budget.html** — new budget planner tool (Session 831). Share in dev communities, add to directory submissions.
- Promote live-pricing.html — share link in developer communities
- **Monitor widget-track.js** — check which domains embed the widget
- **Update widget pricing data** when model prices change (widget/embed.js)
- **Promote cheapest-ai-apis-2026.html** — new high-intent landing page (Session 826). Share in dev communities, add to directory submissions.

### Completed Content & SEO (Sessions 763-863)
All content tasks complete: 232 comparison pages, 22 alternatives pages, 25 use-case pages, 352 blog posts, 34 cheapest pages, 141 tools. All use-case pages now cross-linked to their specific cheapest pages, cheapest-ai-api.html hub, and migration checklist (Session 861). All cheapest pages cross-linked to migration checklist, deprecation tracker, and budget planner. FAQPage schema on key pages. Sitemap: 879 URLs, RSS: 759 items (Session 863 — added 20 missing to sitemap, 13 missing to RSS, fixed 3 duplicate pairs). Broken links in GPT-5 calculator fixed (Session 862).

### Active Tasks — Monitoring (need GA4 data)
- Monitor pro_trial_started events — how many trials per day? Which source (go.html, calculator, savings-calc, cost-audit, generate-report)?
- Monitor trial → pro_purchase_completed conversion rate — do trial users buy?
- Monitor exit_survey_response events — what reasons are users giving for not buying? (Session 754)
- Monitor exit_survey_step2_shown events — which tailored responses shown most?
- Monitor audit_completed events — which models are people auditing? Spend levels?
- Monitor report_generated events — which models are most commonly analyzed?
- Monitor report_page_viewed → report_generated conversion rate
- Monitor cost_score_calculated events — which grades are most common?
- Monitor demo_section_viewed events — demo widget engagement
- Monitor checkout_cta_clicked → Stripe completion rate
- Monitor which A/B price variant ($19 vs $29) converts better
- Monitor live_pricing_viewed events — dashboard traffic
- Check GA4 for pro_purchase_completed events — first sales!
- Check which traffic sources drive conversions

### Active Tasks — Blocked on Human Action
- Chrome Web Store — publish extension ($5 from budget) — HELP-REQUEST filed Jun 1
- npm package — publish apipulse (needs npm account)
- Submit APIpulse to 20 directories — DIRECTORY-SUBMISSIONS.md has ready-to-submit copy (~45 min human time)
- Add "Featured On" section to index.html once directory listings are approved
- Submit badges.html to developer tool directories
- **[CRITICAL]** Create $9 shutdown special Stripe link — for impulse purchases during traffic spike (HELP-REQUEST Jun 13)

### Closed / No Longer Viable
- ~~Reddit promotions~~ — Channel closed. New accounts get 0 traction.
- ~~Stripe one-time $19/$39 links~~ — DONE. Human provided links Jun 10 (HELP-RESPONSES Issue #17). A/B test resumed Session 689.

### Completed Summary (Sessions 416-868, Apr 23 - Jun 24)
**Session 868 (Jun 24):** Added Product + FAQPage schema to deal.html for rich snippets. Repurposed post-deprecation banner (shared.js) to show deal urgency on all 864+ pages. Excluded deal.html from global banner (has own countdown). 3 commits, 2 files.
**Session 866 (Jun 24):** Implemented 3-variant deal headline A/B test (pain-point vs savings-first vs urgency/price-first). GA4 tracking: deal_headline_assigned, deal_buy_click, deal_savings_calculated — all with variant param. 1 commit, 1 file.
**Session 865 (Jun 24):** Added deal.html urgency banner to ALL 232 comparison pages + 26 alternatives pages (258 total). Updated both exit popup CTAs to link to deal.html. 3 commits, 239 files.
**Session 863 (Jun 24):** Added 20 missing comparison pages to sitemap.xml (859→879 URLs), 13 to RSS (746→759 items). Fixed 3 duplicate comparison page pairs (added noindex). Corrected blog count (354→352). 3 commits, 9 files.
**Session 862 (Jun 24):** Fixed 6 broken comparison links in GPT-5 cost calculator (incorrect filename slugs). 1 commit, 1 file.
**Session 861 (Jun 24):** Added cross-links from all 25 use-case pages to their cheapest page counterparts (+Related Tools section). Fixed tools.html og:description (140→141). 1 commit, 26 files.
**Session 860 (Jun 24):** Created GPT-5 Cost Calculator. Added FAQPage schema to pricing-changelog.html. Updated tools (141), sitemap (859), RSS (746). 1 commit, 4 files.
**Session 859 (Jun 24):** Created automotive + telecom cheapest pages — completing all 25 use-case → cheapest page pairs. 1 commit, 6 files.
**Sessions 854-858 (Jun 23):** Model Deprecation Tracker, conversion optimization, 3 industry cheapest pages, hub cross-linking, sitemap + RSS fix, FAQPage schema, broken links fix. 6 commits, 56 files.
**Sessions 828-853 (Jun 22-23):** Created 22 use-case pages, 22 cheapest pages, budget planner, cost calculator, embeddable widget. Fixed conversion gap. Static pricing API. 30+ commits, 120+ files.
**Sessions 804-827 (Jun 21-22):** go.html redesign, model pre-fill, widget distribution, hidden costs blog, SEO audit, A/B pricing fix, cheapest landing page, widget tracking. 18+ commits, 60+ files.
**Sessions 787-803 (Jun 20-21):** Free trial CTA, trial expiry page, 15+ comparison pages, 3 alternatives pages, embeddable widget, migration checklist. 13 commits, 200+ files.
**Sessions 715-786 (Jun 18-20):** go.html, exit popup A/B, A/B pricing, 16 best-model tools, API Cost Score, Pro reports. 130+ commits, 800+ files.
**Sessions 599-714 (Jun 12-18):** Claude 4 shutdown + conversion foundation. 160+ commits, 750+ files.
**Sessions 1-598 (Apr 5 - Jun 12):** Full APIpulse build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools.
