# BACKLOG-CHEAP.md — Routine Tasks

### Active Tasks — Monitoring (need GA4 data)
- Monitor go_page_click events — which pages send most users to checkout? (Session 737 added tracking)
- Monitor checkout_page_viewed events — should increase now that all CTAs go through go.html
- Monitor checkout_cta_clicked → Stripe completion rate — go.html should improve trust and conversion
- Monitor which A/B price variant ($19 vs $29) converts better
- Monitor live_pricing_viewed events — is the new dashboard getting traffic?
- Monitor usage_gate_wall_shown → pro_button_clicked conversion rate
- Monitor quick_savings_results_shown events — conversion to Pro purchase
- Monitor which exit popup personalized hints drive most click-through
- Monitor comparison page cross-link clicks (savings-calculator + quick-savings)
- Monitor migration_generated events — which model pairs are most popular?
- Check GA4 for pro_purchase_completed events — first sales after Stripe fix!
- Monitor post-shutdown traffic spike (June 15+) — which pages get most visits?
- Analyze exit popup engagement — are users clicking through to Stripe?
- Check which traffic sources drive conversions (organic search vs direct vs referral)

### Active Tasks — Content & SEO
- Promote live-pricing.html — share link in developer communities
- Cross-link embed.html from more pages — embed widgets are under-discovered

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

### Completed Summary (Sessions 416-739, Apr 23 - Jun 19)
**Session 739 (Jun 19):** Created "Complete Guide to AI API Pricing in 2026" blog post — comprehensive 42-model, 10-provider guide with tier breakdowns, real workload costs, optimization strategies. Featured on blog index, added to sitemap + RSS. 1 commit, 4 files.
**Session 738 (Jun 19):** Cross-linked live-pricing.html from 166 comparison pages + 150 blog posts (318 new links total). Added FAQ section + FAQPage schema to live-pricing.html. 3 commits, 318 files.
**Sessions 722-737 (Jun 18-19):** Conversion optimization blitz + SEO fixes — Route ALL CTAs through go.html trust-building page (80+ pages), fixed nav CTA leak, replaced fake social proof with honest trust signals, fixed broken links and canonical URL, content quality fixes, Quick Savings page, How It Works page, pre-checkout landing page go.html, personalized Pro CTAs, nav restructured, Pro page trial-first, ROI calculator, usage-gated calculator, A/B pricing simplified ($19/$29), migration landing page, exit popups, sticky bar, trial messaging. Fixed 4 duplicate content pairs (301 redirects), cleaned sitemap, added HowTo structured data. Live Pricing Dashboard. 38+ commits, 74+ files.
**Sessions 686-721 (Jun 17-18):** Post-shutdown pages, exit popups, Pro gating, scanner funnel, mobile sweep, Recommendation Engine, testimonials, loss-framed CTAs, bleeding counter. 50+ commits, 90+ files.
**Sessions 599-685 (Jun 12-17):** Claude 4 shutdown + foundation. 130+ commits, 700+ files.
**Sessions 416-598 (Apr 23 - Jun 12):** Full APIpulse build + deprecation ecosystem.
