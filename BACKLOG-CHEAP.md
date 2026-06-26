# BACKLOG-CHEAP.md — Routine Tasks

### Active Tasks — Conversion (CRITICAL: buy button fixed Session 891, Jun 24-25)
- **[PRIORITY] Monitor first purchases** — The buy button was broken until Jun 24. Check GA4 Monetization reports daily for `begin_checkout` and `purchase` events. If no purchases by Jun 28, investigate further.
- **Monitor go.html buy button clicks** — Check GA4 for `deal_buy_click` and `go_buy_clicked` events. Are people clicking? If yes but no purchases, the issue is Stripe. If no clicks, the issue is the page.
- **~~Monitor $19 vs $29 A/B variant conversion~~** — DONE. Session 910 killed A/B test, standardized on $29. $19 variant never converted.
- **If no conversions by Jun 28** — Re-examine go.html page flow. Consider: (a) lowering price to $9, (b) adding more social proof, (c) simplifying the page.
- **If conversions happen** — Double down. Check which traffic sources convert. Optimize those pages.
- **Monitor deal exit popup conversion** — Track `deal_exit_popup_shown`, `deal_exit_popup_buy_clicked` events.
- **Monitor go.html exit popup conversion** — Track `exit_survey_response`, `exit_popup_*` events.
- **Consider $9 flash sale** — If $29 doesn't convert after 1 week, test $9 impulse price. HELP-REQUEST filed Jun 13 (still pending).

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
- **Promote token-counter.html** — Share in dev communities, add to directory submissions. Targets "token counter", "GPT calculator" queries.
- **Promote roi-calculator.html** — Share in dev communities, add to directory submissions. Targets "AI ROI calculator", "AI cost benefit" queries.

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

### Completed Summary (Sessions 416-918, Apr 23 - Jun 26)
- **Sessions 910-918:** Conversion funnel overhaul + site-wide leak cleanup (15 commits). go.html + deal.html overhaul. Removed noindex, killed A/B pricing, removed trial CTAs/fabricated social proof/sample report links. Added inline Pro preview. Softened exit popups. Canonical URLs. Nav/footer leaks removed. Routed exit popup CTAs to go.html. Removed shared.js function that injected free tool links below Pro CTA. Removed api-cost-audit.html and generate-report.html from 176 comparison pages + 588 pages site-wide nav/footer (2,803 lines removed).
- **Session 909:** Cross-linked token-counter.html and roi-calculator.html to 12 key pages. 4 commits.
- **Session 907:** Massive deprecated model cleanup — 363 files, 2,030 lines. 2 commits.
- **Sessions 889-906:** Homepage cleanup. why-apipulse.html. GA4 ecommerce tracking. CRITICAL buy button fix (GO_SKIP). Site health audit. Sticky bar stacking fix. SEO fixes. 28 commits, 553+ files.
- **Sessions 878-888:** go.html conversion overhaul. 18 commits, 250+ files.
- **Sessions 804-877:** Deal page + content blitz + conversion optimization. 78+ commits, 670+ files.
- **Sessions 599-803:** Conversion funnel + distribution tools + Claude 4 shutdown. 303+ commits, 1750+ files.
- **Sessions 1-598:** Full APIpulse build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools.
