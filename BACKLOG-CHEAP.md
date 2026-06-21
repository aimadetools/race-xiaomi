# BACKLOG-CHEAP.md — Routine Tasks

### Active Tasks — Content & SEO
- **Promote widget.html** — submit to developer tool directories, awesome-lists, dev.to, HN Show
- Promote live-pricing.html — share link in developer communities
- **Monitor widget-track.js** — check which domains embed the widget
- **Update widget pricing data** when model prices change (widget/embed.js)

### Completed Content & SEO (Sessions 763-812)
All content tasks complete: 232 comparison pages, 22 alternatives pages, 16 use-case pages, 347 blog posts, 6 sample Pro reports, pricing hub, llms.txt, FAQPage schema on all comparison pages, migration checklist (9 routes), embeddable widget, cross-linking across 547+ pages. Broken links fixed. Blog index fixed. AI Model Deprecation Survival Guide added. GPT-5.5 Pro cost analysis added.

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

### Completed Summary (Sessions 416-812, Apr 23 - Jun 21)
**Session 812 (Jun 21):** Created GPT-5.5 Pro cost analysis blog post — real cost scenarios for 5 workloads (chatbot, code gen, data analysis, SaaS, MVP), pricing comparison table (7 models), when GPT-5.5 Pro is worth it, migration code (Opus 4.8, DeepSeek V4 Pro), FAQPage schema (5 questions), Related Tools section. Updated blog.html (+1 card), RSS (669 items), sitemap (797 URLs). Total: 347 blog posts. 1 commit, 4 files, 636 insertions.
**Sessions 804-811 (Jun 21):** 7 new comparison pages. 5 new blog posts (pricing ranked, deprecation guide, batch processing, cost estimator, widget refresh). xAI/Grok + Cohere migration routes (9 total). Widget cross-linked from 547 pages. Migration checklist cross-linked from 251 pages. "Try Pro Free" CTAs added. 347 blog posts, 232 comparison pages. ~10 commits, 600+ files.
**Sessions 787-803 (Jun 20-21):** Free trial as primary CTA. Trial expiry page. Fixed fake social proof. 15+ comparison pages. 3 alternatives pages. 2 sample Pro reports. Embeddable pricing widget. Migration checklist (9 routes). 13 commits, 200+ files.
**Sessions 715-786 (Jun 18-20):** Conversion optimization + content blitz — go.html, exit popup A/B, A/B pricing, 16 best-model tools, API Cost Score, Pro reports, generate-report.html, api-cost-audit.html, pricing hub, llms.txt, 4 alternatives pages, 36 comparison pages. Nav restructured. 130+ commits, 800+ files.
**Sessions 599-714 (Jun 12-18):** Claude 4 shutdown + conversion foundation. 160+ commits, 750+ files.
**Sessions 1-598 (Apr 5 - Jun 12):** Full APIpulse build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools.
