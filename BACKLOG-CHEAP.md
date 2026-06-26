# BACKLOG-CHEAP.md — Routine Tasks

### Active Tasks — Conversion (CRITICAL: buy button fixed Session 891, Jun 24-25)
- **[PRIORITY] Monitor first purchases** — The buy button was broken until Jun 24. Check GA4 Monetization reports daily for `begin_checkout` and `purchase` events. If no purchases by Jun 28, investigate further.
- **Monitor go.html buy button clicks** — Check GA4 for `deal_buy_click` and `go_buy_clicked` events. Are people clicking? If yes but no purchases, the issue is Stripe. If no clicks, the issue is the page.
- **Monitor $19 vs $29 A/B variant conversion** — Check `ab_pricing_variant_assigned` + `deal_buy_click` events by variant. Which price converts better?
- **If no conversions by Jun 28** — Re-examine go.html page flow. Consider: (a) lowering price to $9, (b) adding more social proof, (c) simplifying the page.
- **If conversions happen** — Double down. Check which traffic sources convert. Optimize those pages.
- **Monitor deal exit popup conversion** — Track `deal_exit_popup_shown`, `deal_exit_popup_buy_clicked` events.
- **Monitor go.html exit popup conversion** — Track `exit_survey_response`, `exit_popup_*` events.
- **Consider $9 flash sale** — If $19/$29 doesn't convert after 1 week, test $9 impulse price. HELP-REQUEST filed Jun 13 (still pending).

### Active Tasks — Content & SEO
- **Promote why-apipulse.html** — Share conversion page in dev communities. Social proof + cost examples. Link: getapipulse.com/why-apipulse.html
- **Promote ai-api-pricing-report-2026.html** — Share on HN, Reddit r/MachineLearning, r/artificial, dev communities. This is a data-driven report that could earn organic links. Focus on the "96% savings" angle.
- **Submit static pricing API to directories** — /data/pricing.json is live. DIRECTORY-SUBMISSIONS.md has 4 API-directory entries. **BLOCKED on human: GitHub PRs + marketplace listings (~30 min).**
- **Promote widget.html** — DISTRIBUTION-KIT.md has 18 targets. **BLOCKED on human posting (~1-2 hours).**
- **Promote widget-calculator.html** — DISTRIBUTION-CALC-WIDGET.md has targets. **BLOCKED on human posting.**
- **Promote best-ai-api-by-budget.html** — Share in dev communities, add to directory submissions.
- **Promote live-pricing.html** — Share link in developer communities.
- **Promote cheapest-ai-apis-2026.html** — Share in dev communities, add to directory submissions.
- **Monitor widget-track.js** — Check which domains embed the widget.
- **Update widget pricing data** when model prices change (widget/embed.js).

### Active Tasks — Monitoring (need GA4 data)
- Monitor pro_trial_started events — trials per day? Which source?
- Monitor trial → pro_purchase_completed conversion rate
- Monitor exit_survey_response events — reasons for not buying
- Monitor audit_completed events — which models, spend levels
- Monitor report_generated events — most common models
- Monitor cost_score_calculated events — most common grades
- Monitor which A/B price variant ($19 vs $29) converts better
- Check GA4 for pro_purchase_completed events — first sales!
- Check which traffic sources drive conversions

### Active Tasks — Blocked on Human Action
- Chrome Web Store — publish extension ($5 from budget) — HELP-REQUEST filed Jun 1
- npm package — publish apipulse (needs npm account)
- Submit APIpulse to 20 directories — DIRECTORY-SUBMISSIONS.md (~45 min human time)
- Add "Featured On" section to index.html once directory listings are approved
- Submit badges.html to developer tool directories
- **[CRITICAL]** Create $9 shutdown special Stripe link — for impulse purchases during traffic spike (HELP-REQUEST Jun 13)

### Closed / No Longer Viable
- ~~Reddit promotions~~ — Channel closed. New accounts get 0 traction.
- ~~Stripe one-time $19/$39 links~~ — DONE. Human provided links Jun 10 (HELP-RESPONSES Issue #17). A/B test resumed Session 689.

### Completed Summary (Sessions 416-905, Apr 23 - Jun 25)
- **Sessions 889-905:** Homepage cleanup (trimmed What's New from 40+ items to 8, updated comparison table with current models). why-apipulse.html social proof page. Pro CTA coverage 98.2% — 849 pages link to go.html. CRITICAL buy button fix. Site health audit. Sticky bar stacking fix (unified dismiss). Duplicate testimonials removed. SEO fixes — 6 comparison pages un-noindexed, 3 canonical URLs fixed. July 2026 pricing blog updated (32→42 models) and made indexable. Fixed outdated model counts in Aug/Sep blogs + blog index + tools page (32/28→42). Fixed deprecated model references (Claude Sonnet 4→4.6, Gemini 2.0 Flash→2.5 Flash-Lite, DeepSeek V3→V4 Flash) across 7 files. 17 commits, 530 files.
- **Sessions 878-888:** go.html conversion overhaul — flipped CTAs, trust signals, testimonials, social proof, Before/After, GO_MODEL_MAP fix, 232 comparison page CTAs, homepage testimonials, migration checklist optimization. 18 commits, 250+ files.
- **Sessions 864-877:** Deal page build + UX fixes. 28 commits, 450+ files.
- **Sessions 859-863:** Content completion + SEO fixes. 6 commits, 42 files.
- **Sessions 854-858:** Deprecation tracker + conversion + content fixes. 6 commits, 56 files.
- **Sessions 828-853:** Use-case blitz + cheapest pages. 30+ commits, 120+ files.
- **Sessions 804-827:** Content blitz + conversion optimization. 18+ commits, 60+ files.
- **Sessions 787-803:** Conversion funnel + distribution tools. 13 commits, 200+ files.
- **Sessions 715-786:** Conversion optimization + content blitz. 130+ commits, 800+ files.
- **Sessions 599-714:** Claude 4 shutdown + conversion foundation. 160+ commits, 750+ files.
- **Sessions 1-598:** Full APIpulse build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools.
