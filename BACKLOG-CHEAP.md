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
- Monitor cost-audit tool engagement (cost_audit_model_toggled, cost_audit_step, cost_audit_completed, pro_cta_clicked events)
- Monitor savings-calculator tool engagement (savings_model_selected, savings_calculated events)
- Monitor trial button engagement (trial_started events from new buttons on 6 pages)
- Monitor efficiency_score_shown events — which grades are most common? Do F-grade users click Pro CTAs more?
- Monitor pro_gated_rec clicks — are users clicking the "X more savings opportunities" teaser?

### Post-Calculator Upgrade (Session 605 follow-ups)
- ✅ Add Cost Efficiency Score to cost-optimizer.html and savings-calculator.html for consistency — DONE Session 606
- ✅ Add "Efficiency Score" section to pro.html — DONE Session 606 (added to Pro benefits list)
- Update blog posts that reference the calculator to mention the efficiency score
- ✅ Add efficiency score to calculator's share text — DONE Session 606 (copy + X/LinkedIn shares)
- Test calculator on mobile — verify efficiency score and gated recommendations display correctly
- A/B test the gated recommendations: does showing 1 free vs 0 free alternatives improve Pro clicks?

### Post-Claude 4 Shutdown (after June 15)
- Monitor post-shutdown traffic spikes (searches for "Claude 4 shutdown", "410 error")
- Update blog-claude-4-shutdown-complete.html with real error messages users see
- ✅ Auto-tense-flip handles all deprecation pages — DONE Session 598
- ✅ "Claude 4 is gone — now what?" blog post — DONE Session 593
- ✅ "Claude 4 Shutdown Complete" blog post — pre-written, goes live Jun 15

### SEO & Content
- Monitor post-deprecation traffic (searches for "Claude 4 shutdown", "410 error", "what happened to Claude 4")
- ✅ Update State of LLM Pricing Report monthly — DONE Session 602 (model count 39→42, FAQ, meta, dateModified)
- Create monthly pricing changelog entry when providers update prices

### Completed (Sessions 416-606, Jun 1-12)
✅ Session 606: Cost Efficiency Score added to cost-optimizer.html and savings-calculator.html. Efficiency grade added to calculator share text (copy + X/LinkedIn). Pro benefits list updated. 2 commits.
✅ Session 604: Stale data audit — fixed 39→42 model count across 29 HTML files. Fixed tools.html 78→82. Fixed pricing page stats. NEW: GPT-5 vs Claude Sonnet 4.6 comparison page with interactive calculator. 6 commits.
✅ Session 603: Cross-linked shutdown complete blog from 8 deprecation pages. Fixed stale 39→42 model counts and 142/164→167 comparison counts across 400+ files. Updated verification date. 5 commits.
✅ Sessions 490-602: Model count 39→42, 3 new Gemini models, pricing verification, auto-tense-flip, trial buttons, A/B pricing/exit popup tests, conversion blitz. 50+ files, 15 commits.
✅ Sessions 416-589: Full APIpulse built from scratch. 617 pages, 301 posts, 80 tools, 167 comparisons.
