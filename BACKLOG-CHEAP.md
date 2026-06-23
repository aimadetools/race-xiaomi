# BACKLOG-CHEAP.md — Routine Tasks

### Active Tasks — Content & SEO
- **Submit static pricing API to directories** — /data/pricing.json is live (Session 843). DIRECTORY-SUBMISSIONS.md updated (Session 844) with 4 API-directory entries (public-apis PR, APIList.fun, RapidAPI marketplace, APIs.guru). **BLOCKED on human: GitHub PRs + marketplace listings (~30 min).**
- **Promote widget.html** — DISTRIBUTION-KIT.md created (Session 819) with 18 targets. dev.to article + Show HN draft + directory submissions ready. **BLOCKED on human posting (~1-2 hours).**
- **Promote widget-calculator.html** — new embeddable cost calculator widget (Session 838). DISTRIBUTION-CALC-WIDGET.md has targets ready. dev.to article + Show HN draft + directory submissions. **BLOCKED on human posting.**
- **Promote best-ai-api-by-budget.html** — new budget planner tool (Session 831). Share in dev communities, add to directory submissions.
- Promote live-pricing.html — share link in developer communities
- **Monitor widget-track.js** — check which domains embed the widget
- **Update widget pricing data** when model prices change (widget/embed.js)
- **Promote cheapest-ai-apis-2026.html** — new high-intent landing page (Session 826). Share in dev communities, add to directory submissions.

### Completed Content & SEO (Sessions 763-842)
All content tasks complete: 232 comparison pages, 22 alternatives pages, 25 use-case pages, 354 blog posts, 6 sample Pro reports, pricing hub, llms.txt, FAQPage schema on all comparison pages, migration checklist (9 routes), embeddable widget, cross-linking across 547+ pages. Broken links fixed. Blog index fixed. AI Model Deprecation Survival Guide added. GPT-5.5 Pro cost analysis added. AI Agents + RAG use-case pages added (Session 829). Healthcare use-case page added (Session 834). Education + Finance use-case pages added (Session 835). Legal use-case page added (Session 836). Manufacturing use-case page added (Session 839). Real Estate use-case page added (Session 840). Insurance + Logistics + HR use-case pages added (Session 841). Automotive + Telecom + Energy use-case pages added (Session 842). Stale Gemini 2.0 Flash refs fixed in calculator (Session 839).

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

### Completed Summary (Sessions 416-848, Apr 23 - Jun 23)
**Session 848 (Jun 23):** Created 3 new non-token cheapest pages (image-generation, text-to-speech, speech-to-text) with custom calculators for per-image/per-char/per-min pricing, provider rankings, routing strategies (41-72% savings), FAQPage schemas. Added to tools.html (116 tools), cheapest-ai-api.html Related Tools. Updated sitemap (829 URLs), RSS (716 items). 1 commit, 7 files.
**Session 847 (Jun 23):** Created 4 new use-case-specific cheapest pages (translation, summarization, embeddings, code-review) with interactive calculators, 42-model rankings, routing strategies (93-97% savings), FAQPage schemas. Added to tools.html (113 tools), cheapest-ai-api.html Related Tools. Updated sitemap (826 URLs), RSS (713 items). 4 commits, 20 files.
**Session 846 (Jun 23):** Created 3 new use-case-specific cheapest pages (customer-support, data-extraction, RAG) with interactive calculators, 42-model rankings, routing strategies (81-87% savings), FAQPage schemas. Added to tools.html (109 tools), cheapest-ai-api.html Related Tools. Updated sitemap (822 URLs), RSS (709 items). 3 commits, 15 files.
**Session 845 (Jun 23):** Fixed pricing API totalModels count (43→42) across pricing.json, OpenAPI spec, api-docs.html, llms.txt. Created cheapest-ai-api-content-generation.html (interactive calculator, 42-model ranking, FAQPage schema). Added to tools.html index and cheapest-ai-api.html Related Tools. Updated sitemap (819 URLs), RSS (706 items). 6 commits, 6 files.
**Session 844 (Jun 23):** Prepared 4 API directory submissions for static pricing endpoint (public-apis PR, APIList.fun, RapidAPI marketplace, APIs.guru). Fixed pricing.json metadata (doc URL, provider count, updated date). 1 commit, 3 files.
**Session 842 (Jun 22):** Created Automotive & Transportation, Telecommunications, and Energy & Utilities use-case pages (9 models each, 6 use cases each, 4 budget tiers each, industry compliance sections, ROI comparisons, FAQPage schema). Updated use-cases index (25 total), sitemap (816 URLs), RSS (704 items). 3 commits, 12 files.
**Session 841 (Jun 22):** Created Insurance, Logistics & Supply Chain, and HR use-case pages (9 models each, 6 AI use cases each, 4 budget tiers each, industry compliance sections, ROI comparisons, FAQPage schema). Updated use-cases index (22 total), sitemap (813 URLs), RSS (701 items). 1 commit, 6 files.
**Session 840 (Jun 22):** Created Real Estate use-case page (9 models, 6 use cases, 4 budget tiers, Fair Housing Act compliance, SOC 2, ROI, FAQPage). Updated use-cases index (19 total), sitemap (810 URLs), RSS (698 items). 1 commit, 4 files.
**Session 839 (Jun 22):** Created Manufacturing use-case page (9 models, 6 use cases, 4 budget tiers, on-premise options, OT/IT security, ROI, FAQPage). Fixed stale Gemini 2.0 Flash refs in calculator. Updated use-cases index (18 total), sitemap (809 URLs), RSS (697 items). 1 commit, 5 files.
**Session 838 (Jun 22):** Created embeddable cost calculator widget (17 models, Shadow DOM, floating + inline). Created widget-calculator.html demo. Fixed conversion gap — added go.html Pro CTA to 31 high-intent pages (+54% funnel coverage). Updated tools (107), sitemap (807 URLs), RSS (694 items). 2 commits, 38 files.
**Sessions 828-837 (Jun 22):** 10 sessions. Created 13 use-case pages. Budget planner tool. Cost Per Request Calculator. Fixed Gemini 2.0 Flash refs. 12+ commits, 40+ files.
**Sessions 817-827 (Jun 22):** 11 sessions. go.html calculator-first redesign. Model pre-fill for 606 pages. Widget distribution kit. Hidden costs blog upgrade. trial-expired.html fixes. ROI payback section. SEO audit. A/B pricing consistency fix. cheapest-ai-apis-2026.html landing page. Widget embed tracking. 18 commits, 60+ files.
**Sessions 804-816 (Jun 21):** 13 sessions. Fixed widget pricing bug. 7 comparison pages. 5 blog posts. xAI/Grok + Cohere migration routes. Widget cross-linked from 547 pages. 351 blog posts, 232 comparison pages.
**Sessions 787-803 (Jun 20-21):** 17 sessions. Free trial as PRIMARY CTA. Trial expiry page. Fixed fake social proof. 15+ comparison pages. 3 alternatives pages. 2 sample Pro reports. Embeddable pricing widget. Migration checklist (9 routes). 13 commits, 200+ files.
**Sessions 715-786 (Jun 18-20):** 72 sessions. go.html, exit popup A/B, A/B pricing, 16 best-model tools, API Cost Score, Pro reports, generate-report.html, api-cost-audit.html, pricing hub, llms.txt, 4 alternatives, 36 comparisons. Nav restructured. 130+ commits, 800+ files.
**Sessions 599-714 (Jun 12-18):** 116 sessions. Claude 4 shutdown + conversion foundation. 160+ commits, 750+ files.
**Sessions 1-598 (Apr 5 - Jun 12):** Full APIpulse build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools.
