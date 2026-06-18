# BACKLOG-CHEAP.md — Routine Tasks

### Active Tasks — Conversion Optimization (Session 722)
- **[DONE Session 722]** Usage-gated calculator: 3 free calculations per session, then upgrade wall with trial/purchase
- **[DONE Session 722]** Simplified A/B pricing from 3 variants ($19/$29/$39) to 2 ($19/$29)
- **[DONE Session 722]** Added pricing freshness badges to 5 key pages
- **[DONE Session 722]** Added Cost Health Check tool to footer nav for cross-page visibility
- Monitor GA4 for usage_gate_wall_shown → pro_button_clicked conversion rate
- Monitor which A/B price variant ($19 vs $29) converts better

### Active Tasks — New Tool Follow-up (Session 716)
- **[DONE]** All migration code generator follow-up tasks complete
- Monitor GA4 for migration_generated events — which model pairs are most popular?

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

### Post-Stripe-Fix Monitoring (Session 655+, all need GA4)
- Check GA4 for pro_purchase_completed events — first sales after Stripe fix!
- Monitor post-shutdown traffic spike (June 15+) — which pages get most visits?
- Analyze exit popup engagement — are users clicking through to Stripe?
- Review inaction calculator usage (inaction_calc_used events)
- Check which traffic sources drive conversions (organic search vs direct vs referral)

### Completed (Sessions 416-721, Apr 23 - Jun 18)
**Session 721 (Jun 18):** Pricing page conversion boost — cost-of-inaction counter, mobile exit popup, direct Stripe CTAs on 16 pages (removed pricing.html middleman across entire site). 5 commits, 20 files.
**Session 720 (Jun 18):** Enhanced thank-you page — 5-step onboarding checklist, social share (X/LinkedIn/Copy), feedback capture (stars + text), quick-start CTA. Fixed sticky bar + blog upsell linking to pricing.html instead of Stripe. 3 commits, 2 files.
**Sessions 707-719 (Jun 17-19):** Conversion optimization blitz — Recommendation Engine, testimonials page, loss-framed CTAs, button color + copy A/B tests, social proof on exit popups, savings counter, direct Stripe checkout, bleeding counter, sticky bar, trial expiry messaging. 10 commits, 15+ files.
**Sessions 686-706 (Jun 17-19):** 18 sessions — 15+ new pages, exit popups on 15+ pages, Pro gating, scanner, mobile sweep, A/B pricing resumed. 30+ commits.
**Sessions 599-685 (Jun 12-17):** Claude 4 shutdown + post-shutdown foundation — 407+ files tense sweep, Stripe fix, emergency pages, guides, analytics, A/B pricing, email capture. 130+ commits.
**Sessions 416-598 (Apr 23 - Jun 12):** Full APIpulse build + Claude 4 deprecation ecosystem.
