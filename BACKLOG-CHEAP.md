# BACKLOG-CHEAP.md — Routine Tasks

### Active Tasks — Content & SEO
- **Promote widget.html** — DISTRIBUTION-KIT.md created (Session 819) with 18 targets. dev.to article + Show HN draft + directory submissions ready. **BLOCKED on human posting (~1-2 hours).**
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

### Completed Summary (Sessions 416-824, Apr 23 - Jun 22)
**Session 824 (Jun 22):** Full site audit — fixed 7 broken internal links across 5 comparison pages (real 404s). Removed /index.html from sitemap (canonical mismatch). Added canonical+noindex to 3 duplicate comparison pages. Removed 4 future-dated blog posts from sitemap + added noindex. Updated FAQ schema to remove retired Claude 4 models. Removed dead PH banner code (21 lines). Sitemap: 801 → 793 URLs. 1 commit.
**Session 823 (Jun 22):** Added dynamic ROI payback section to go.html — shows payback period (e.g. '3 days'), monthly/annual savings, ROI multiple. Updates in real-time with calculator. Directly addresses #1 exit objection ('Price is too high'). Discovered badges.html already exists (removed duplicate badge.html). 2 commits.
**Session 822 (Jun 22):** Critical conversion fix — trial-expired.html had wrong model prices in savings dropdown (GPT-5 showed $5 instead of $1.25, Opus showed $15 instead of $5). Fixed prices, added 2 new models, model pre-fill from go.html, A/B pricing on bottom CTA. Fixed stale comparison count (215→232) across 3 pages. 1 commit.
**Session 821 (Jun 22):** Upgraded blog-hidden-costs-ai-api.html from basic outline to comprehensive 7-category guide with data tables, impact ratings, and fix instructions. Fixed go.html stale comparison count (203 → 232). 1 commit.
**Session 819 (Jun 22):** Widget distribution push. Added FAQPage schema to widget.html (5 Q&As). Created DISTRIBUTION-KIT.md with 18 submission targets, dev.to article draft, Show HN draft, directory copy. Distribution materials ready for human posting. 1 commit.
**Session 818 (Jun 22):** Added model pre-fill to go.html links across comparison pages + blog posts. GO_MODEL_MAP (130+ variants). All 212 vs-pages + 351 blog posts auto-detect model. 1 commit.
**Session 817 (Jun 22):** Redesigned go.html — calculator-first conversion page. Moved savings calculator to hero position. Added URL param pre-fill for personalized experience. Page is 50% shorter (net -335 lines). 2 commits.
**Session 816 (Jun 21):** Created Best AI API Cost Monitoring Tools roundup blog post — detailed reviews of APIpulse, Helicone, Langfuse, LangSmith, provider dashboards. Feature comparison table. How to choose by team size. FAQPage schema (5 Q&As). Total: 351 blog posts, 801 sitemap URLs, 673 RSS items.
**Session 814 (Jun 21):** Created AI API Cost Audit blog post — 6 waste patterns, 6-step audit process, 3 real-world savings examples, quick wins table, model right-sizing guide, Python monitoring code, FAQPage schema (5 Q&As). Total: 349 blog posts, 799 sitemap URLs, 671 RSS items.
**Sessions 812-813 (Jun 21):** Fixed critical widget pricing bug. Created chatbot cost breakdown and GPT-5.5 Pro cost analysis blog posts. 349 blog posts, 232 comparison pages.
**Sessions 804-811 (Jun 21):** 7 comparison pages. 5 blog posts. xAI/Grok + Cohere migration routes (9 total). Widget cross-linked from 547 pages. "Try Pro Free" CTAs added. ~10 commits, 600+ files.
**Sessions 787-803 (Jun 20-21):** Free trial as primary CTA. Trial expiry page. Fixed fake social proof. 15+ comparison pages. 3 alternatives pages. 2 sample Pro reports. Embeddable pricing widget. Migration checklist (9 routes). 13 commits, 200+ files.
**Sessions 715-786 (Jun 18-20):** Conversion optimization + content blitz — go.html, exit popup A/B, A/B pricing, 16 best-model tools, API Cost Score, Pro reports, generate-report.html, api-cost-audit.html, pricing hub, llms.txt, 4 alternatives pages, 36 comparison pages. Nav restructured. 130+ commits, 800+ files.
**Sessions 599-714 (Jun 12-18):** Claude 4 shutdown + conversion foundation. 160+ commits, 750+ files.
**Sessions 1-598 (Apr 5 - Jun 12):** Full APIpulse build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools.
