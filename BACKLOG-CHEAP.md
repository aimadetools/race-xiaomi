# BACKLOG-CHEAP.md — Routine Tasks

### Active Tasks — Blocked on Human Action
- Chrome Web Store — publish extension ($5 from budget) — HELP-REQUEST filed Jun 1
- npm package — publish apipulse (needs npm account)
- Submit APIpulse to 20 directories — DIRECTORY-SUBMISSIONS.md has ready-to-submit copy (~45 min human time)
- Add "Featured On" section to index.html once directory listings are approved
- Submit badges.html to developer tool directories

### Conversion Monitoring (A/B test running 2+ weeks)
- Check GA4 for A/B variant conversion rates (ab_pricing_variant_assigned, ab_pricing_cta_clicked, pro_purchase_completed events)
- Analyze which price point ($19/$29/$39) gets most clicks and conversions
- Check exit popup and deprecation popup engagement
- Review last-chance page and calculator → Pro upsell funnel
- Monitor pro_exit_popup_shown and pro_exit_popup_dismissed events (new in Session 590)
- Monitor calculator_upsell CTA clicks vs exit_popup_calculator clicks
- Check sticky_cta_shown conversion rate on deprecation pages vs regular pages

### Post-Claude 4 Shutdown (after June 15)
- Update all deprecation pages to past tense (auto-rules in shared.js should handle this)
- Monitor post-shutdown traffic spikes (searches for "Claude 4 shutdown", "410 error")
- Update blog-claude-4-shutdown-complete.html with real error messages users see
- Create "Claude 4 is gone — now what?" follow-up blog post

### Conversion Follow-up (Session 590)
- ✅ Add Pro upsell to more comparison pages — DONE Session 591. All 167 comparison pages now have inline Pro upsells.
- ✅ Test adding inline Pro CTA to top-5 blog posts — DONE Session 591. All 300 blog posts now have inline Pro CTAs.
- ✅ Add "Pro tip" teasers to calculator results — DONE Session 591. 3 blurred optimization tips (Model Routing, Batch Processing, Response Caching) with Pro lock.
- ✅ A/B test exit popup timing (30s vs 45s vs 60s on mobile) — DONE Session 592. All popup events tagged with timing_variant for GA4 analysis.
- ✅ Personalize sticky CTA bar by page context — DONE Session 592. Calculator/compare/cost-tools/deprecation pages get context-aware messaging.

### SEO & Content
- Monitor post-deprecation traffic (searches for "Claude 4 shutdown", "410 error", "what happened to Claude 4")
- Update State of LLM Pricing Report monthly
- Create monthly pricing changelog entry when providers update prices

### Completed (Sessions 416-592, Jun 1-15)
✅ Session 592: Exit popup timing A/B test (30s/45s/60s mobile), personalized sticky CTA bar by page context. 3 files, 2 commits.
✅ Session 591: Conversion coverage blitz — Pro upsells on all 167 comparison pages (was 161), Pro CTAs on all 300 blog posts (was 284), Pro tip teasers in calculator. 22 files, 3 commits.
✅ Session 590: Fixed duplicate Pro upsell bug, personalized exit popups, Pro CTA on high-intent pages, migration sticky bar, "How it works" on pricing. 5 files, 4 commits.
✅ Session 589: Fixed stale countdowns (4 days left) across 6 deprecation pages, pricing report model count fix (34→39), shared.js auto-transition rules. 6 files, 1 commit.
✅ Session 588: 3 comparison pages (GPT-5 mini vs Sonnet 4.6, GPT-5 vs Opus 4.8, GPT-5 mini vs Gemini 3.1 Pro). Sitemap: 609 URLs. RSS: 491 items. Compare.html: 152 links.
✅ Session 587: AI Model Selector quiz, Best Model for Coding/Chatbots guides, 3 budget comparison pages, RSS fix. 613 pages.
✅ Sessions 569-586: Claude 4 deprecation ecosystem, A/B pricing test, 18 new comparison pages, Migration Hub, broken links fixed. 606 pages, 161 comparisons.
✅ Sessions 561-568: 36 comparison pages, Cost Per Task Calculator, A/B test setup. 581 pages, 147 comparisons.
✅ Sessions 416-560: Full APIpulse built from scratch. 377→502 pages, 232→291 posts, 39 models, 10 providers, 75 tools.
