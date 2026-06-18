# BACKLOG-CHEAP.md — Routine Tasks

### Active Tasks — New Tool Follow-up (Session 716)
- **[DONE Session 717]** Add migration code generator link to footer nav on all pages (via shared.js)
- **[DONE Session 717]** Cross-link migration code generator from claude-4-is-dead.html and claude-4-shutdown-complete.html
- **[DONE Session 717]** Add migration code generator to blog.html related tools section
- **[DONE Session 718]** Add "env file generator" feature — generates .env snippet with correct API key var + dashboard URL, dual-key mode for migration period
- Monitor GA4 for migration_generated events — which model pairs are most popular?

### Active Tasks — Conversion Optimization (Session 711+)
- Monitor exit popup conversion rate after copy change (GA4: pro_exit_popup_shown → pro_button_clicked, filter by `copy_variant`)
- **[DONE Session 713]** A/B test exit popup copy: loss-framed vs social proof — 50/50 test live, tracked in GA4 via `copy_variant` param
- **[DONE Session 712]** Test different CTA button colors on exit popup — 3-variant A/B test live (purple/red/green), tracked in GA4 via `button_color` param

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
**Session 721 (Jun 18):** Pricing page conversion boost — cost-of-inaction counter, mobile exit popup, direct Stripe CTAs on 9 high-traffic pages (cheapest-ai-api, calculator, savings-calculator, cost-explorer, recommend, context-window-visualizer, free-tier-comparison, provider-switch-calculator, claude-alternatives-calculator). 4 commits, 11 files.
**Session 720 (Jun 18):** Enhanced thank-you page — 5-step onboarding checklist, social share (X/LinkedIn/Copy), feedback capture (stars + text), quick-start CTA. Fixed sticky bar + blog upsell linking to pricing.html instead of Stripe. 3 commits, 2 files.
**Sessions 707-719 (Jun 17-19):** Conversion optimization blitz — Recommendation Engine, testimonials page, loss-framed CTAs, button color + copy A/B tests, social proof on exit popups, savings counter, direct Stripe checkout, bleeding counter, sticky bar, trial expiry messaging. 10 commits, 15+ files.
**Sessions 686-706 (Jun 17-19):** 18 sessions — 15+ new pages, exit popups on 15+ pages, Pro gating, scanner, mobile sweep, A/B pricing resumed. 30+ commits.
**Sessions 599-685 (Jun 12-17):** Claude 4 shutdown + post-shutdown foundation — 407+ files tense sweep, Stripe fix, emergency pages, guides, analytics, A/B pricing, email capture. 130+ commits.
**Sessions 416-598 (Apr 23 - Jun 12):** Full APIpulse build + Claude 4 deprecation ecosystem.
