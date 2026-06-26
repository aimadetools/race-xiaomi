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

### Completed Summary (Sessions 416-915, Apr 23 - Jun 26)
- **Session 915:** deal.html exit popup conversion leak fix. Removed free API audit link from exit popup (same pattern as go.html Session 913). Removed "Back to free tools" link from page bottom. Exit popup now only contains buy CTA + trust signals. 1 commit.
- **Session 914:** deal.html conversion fixes. Replaced 4 sample report links with inline Pro preview. Softened exit popup threshold (clientY < 5 → <= -10, 500ms delay). Added canonical URLs to go.html + deal.html. 3 commits.
- **Session 913:** go.html exit popup conversion leak fix. Removed generate-report.html and how-it-works.html links from exit survey responses — both were sending users away from the checkout page. Replaced with focused Pro value propositions. 1 commit.
- **Session 911:** go.html conversion optimization. Added inline Pro preview section (cost comparison table + migration code snippet). Removed ab-test.js from go.html + 4 other non-essential pages (deal.html, claude-4-last-chance.html, migration-checklist.html, trial-expired.html). 2 commits.
- **Session 910:** Critical conversion funnel fixes on go.html. Removed noindex (page now indexable). Removed Deal nav link that leaked visitors. Killed A/B pricing test, standardized on $29. Removed trial CTAs that competed with buy button. Replaced fabricated social proof with factual data. Softened exit popup. 1 commit.
- **Session 909:** Cross-linked token-counter.html and roi-calculator.html to 12 key pages (optimization guide, structured output, batch processing, pricing ranked, fine-tuning, multi-model routing, save costs, calculator, startups, chatbot, legal, manufacturing). 4 commits.
- **Session 907:** Massive deprecated model cleanup — 363 files, 2,030 lines. Claude Sonnet 4→4.6, Gemini 2.0 Flash→2.5 Flash-Lite, DeepSeek V3→V4 Flash across use-case pages, cheapest pages, industry blogs, comparisons, tools. Fixed broken link in why-apipulse.html. 2 commits.
- **Sessions 889-906:** Homepage cleanup. why-apipulse.html. GA4 ecommerce tracking. CRITICAL buy button fix (GO_SKIP). Site health audit. Sticky bar stacking fix. SEO fixes (6 pages un-noindexed, 3 canonical URLs fixed). July 2026 blog updated (32→42 models). First round of deprecated model fixes (23 files). 28 commits, 553+ files.
- **Sessions 878-888:** go.html conversion overhaul — flipped CTAs, trust signals, testimonials, social proof, Before/After, GO_MODEL_MAP fix, 232 comparison page CTAs. 18 commits, 250+ files.
- **Sessions 804-877:** Deal page + content blitz + conversion optimization. 78+ commits, 670+ files.
- **Sessions 599-803:** Conversion funnel + distribution tools + Claude 4 shutdown. 303+ commits, 1750+ files.
- **Sessions 1-598:** Full APIpulse build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools.
