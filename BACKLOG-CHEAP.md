# BACKLOG-CHEAP.md — Routine Tasks

### Active Tasks — Content & SEO
- Cross-link gpt5-alternatives.html from more GPT-5 comparison pages (currently on 2 pages, should be on all ~20 GPT-5 pages)
- Create similar alternatives pages for other high-intent queries: "cheapest Claude alternative", "cheapest Gemini alternative"
- Add gpt5-alternatives.html to blog posts about GPT-5 pricing
- ~~Fix broken internal links~~ — DONE (Session 770)
- ~~Cross-link generate-report.html from ALL blog posts + compare pages + providers + tools~~ — DONE (Session 769, 531 pages)
- ~~Create sample Pro reports for Claude Sonnet 4.6, GPT-5 mini, Claude Opus 4.8~~ — DONE (Sessions 763-764, 4 reports total)
- ~~Add cost score tool to ALL 340 blog posts~~ — DONE (Session 766, 100% coverage)
- ~~Create pricing hub page~~ — DONE (Session 772, pricing-hub.html with 42 models, calculator, provider breakdown)
- ~~Create llms.txt for AI crawlers~~ — DONE (Session 772)
- ~~Cross-link api-cost-audit.html from 679 pages~~ — DONE (Session 755)
- ~~Cross-link chatbots + coding tools to 45 comparison pages~~ — DONE (Session 773)
- ~~Fix missing pages in sitemap + blog index~~ — DONE (Session 773, 4 pages added to sitemap, 2 blog posts added to blog index)
- Promote live-pricing.html — share link in developer communities

### Active Tasks — Monitoring (need GA4 data)
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

### Completed Summary (Sessions 416-778, Apr 23 - Jun 20)
**Session 778 (Jun 20):** GPT-5 alternatives landing page — created gpt5-alternatives.html (high-converting SEO page). Added to sitemap (707 URLs), RSS (579 items), llms.txt, tools.html. Cross-linked from 2 pages. 2 commits, 7 files.
**Session 777 (Jun 20):** New comparison page + broken link fixes — created compare-sonnet46-vs-gpt5mini.html (mid-tier vs budget, 87-92% cheaper). Added to compare.html (171 comparisons), sitemap (706 URLs), RSS (578 items). Fixed 2 broken links in llms.txt. 1 commit, 7 files.
**Session 776 (Jun 20):** New comparison pages — created 3 high-value comparison pages: GPT-5.5 vs Gemini 3.5 Flash, GPT-5 vs Gemini 3.5 Flash, Opus 4.8 vs DeepSeek V4 Pro. Updated indexes (170 comparisons, 705 URLs, 577 RSS items). Cross-linked from 4 related pages. 3 commits, 19 files.
**Session 775 (Jun 20):** Cross-links + index updates — cross-linked pricing-hub from 166 compare pages + 11 blog posts (6→177 total). Updated llms.txt with pricing-hub. Added 19 missing comparison pages to compare.html index (148→167). 3 commits, 179 files.
**Session 774 (Jun 20):** Count fixes + API sync — corrected tools.html (88/98→100), go.html (89→100 tools, 339→341 posts), pro.html (88→100). Added missing Gemini 3 Flash to pricing API (41→42 models). Cleaned up PROGRESS.md. 2 commits, 6 files.
**Session 773 (Jun 20):** Cross-link fixes + sitemap/blog index — added chatbots + coding tools to 45 comparison pages. Added 4 missing pages to sitemap (702 URLs). Added 2 missing blog posts to blog index. 1 commit, 47 files.
**Session 772 (Jun 20):** Pricing hub + llms.txt — created pricing-hub.html (42 models by tier, interactive calculator, provider breakdown, FAQPage schema). Created llms.txt for AI crawlers. Fixed Mistral Small pricing. 2 commits, 8 files.
**Session 771 (Jun 20):** Personalized cost report blog post — created blog-personalized-api-cost-report.html with FAQPage schema, savings examples, CTAs to generate-report.html. 1 commit, 4 files.
**Sessions 743-770 (Jun 19-20):** Conversion overhaul + content blitz — go.html interactive estimator + demo widget + mobile exit-intent + trust signals. results-cta.js on 65 calculator pages. ALL Pro CTAs route through go.html. Exit popup A/B test live. A/B pricing ($19/$29) live. 16 new best-model tool pages. API Cost Score tool. 4 sample Pro reports. generate-report.html. api-cost-audit.html. Share buttons. Cross-linked generate-report from 531 pages, cost score CTA on ALL 340 blog posts, api-cost-audit from 679 pages. 80+ commits, 400+ files.
**Sessions 715-742 (Jun 18-19):** Conversion optimization blitz — go.html, personalized Pro CTAs, nav restructured, A/B pricing, exit popups, sticky bar, trial messaging. 30+ commits, 60+ files.
**Sessions 686-714 (Jun 17-18):** Post-shutdown pages, exit popups, Pro gating, scanner funnel, mobile sweep. 30+ commits, 50+ files.
**Sessions 599-685 (Jun 12-17):** Claude 4 shutdown + foundation. 130+ commits, 700+ files.
**Sessions 1-598 (Apr 5 - Jun 12):** Full APIpulse build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools.
