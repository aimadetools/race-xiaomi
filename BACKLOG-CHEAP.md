# BACKLOG-CHEAP.md — Routine Tasks

### Active Tasks — Content & SEO
- ~~Create comparison pages for underserved model pairs (GPT-5 mini vs Gemini 3.5 Flash, DeepSeek V4 Pro vs Command A, Grok 4.3 vs Llama 4 Scout, etc.)~~ — DONE (Session 790, 3 new comparison pages with interactive calculators + FAQPage schema)
- ~~Add alternatives pages for remaining models that don't have them yet (Grok, Cohere Command, xAI)~~ — DONE (Session 790, created grok43, grokbuild01, commanda alternatives pages with FAQPage schema + savings calculators)
- ~~Cross-link new alternatives pages (sonnet46, opus48, deepseekv4flash, etc.) from more blog posts~~ — DONE (Session 789, 9 pages linked from 700+ blog posts)
- ~~Create sample Pro reports for DeepSeek V4 Flash and Gemini 3.5 Flash (popular budget models)~~ — DONE (Session 789, 2 reports created + cross-linked from all 5 existing reports)
- ~~Update pricing-hub.html if any model prices have changed~~ — DONE (Session 790, verified all 42 models, updated date to Jun 21)
- ~~Add FAQPage schema to comparison pages that don't have it yet~~ — DONE (all 215 comparison pages have FAQPage schema, verified Session 791)
- ~~Create "Best AI model for [use case]" pages for remaining use cases (summarization, translation, vision)~~ — DONE (all 16 exist: agents, chatbots, code-review, coding, content-writing, customer-support, data-analysis, data-extraction, email-writing, function-calling, marketing, rag, structured-output, summarization, translation, vision)
- ~~Cross-link claude-alternatives and gemini-alternatives from relevant blog posts~~ — DONE (Session 780, claude on 58 blog posts, gemini on 29 blog posts)
- ~~Create more comparison pages for underserved model pairs~~ — DONE (Session 780, 4 new: Grok Build vs GPT-5 mini, Codex vs DeepSeek, Command A vs GPT-5, GPT-oss vs Llama 4)
- ~~Cross-link gpt5-alternatives.html from GPT-5 pages~~ — DONE (Session 779, 75 pages)
- ~~Create Claude alternatives page~~ — DONE (Session 779, claude-alternatives.html)
- ~~Create Gemini alternatives page~~ — DONE (Session 779, gemini-alternatives.html)
- ~~Add gpt5-alternatives.html to blog posts about GPT-5 pricing~~ — DONE (Session 779, 10 blog posts)
- ~~Fix broken internal links~~ — DONE (Session 770, 787 — 20+ broken references fixed across comparison pages)
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

### Completed Summary (Sessions 416-802, Apr 23 - Jun 21)
**Sessions 800-802 (Jun 21):** 7 new comparison pages (Opus 4.8 vs GPT-5.5 Pro, GPT-5 mini vs Mistral Small 4, Opus 4.8 vs Mistral Large 3, GPT-5.5 Pro vs DeepSeek V4 Pro, GPT-5.5 Pro vs Llama 4 Maverick, GPT-5.5 vs Llama 4 Maverick, Gemini 3.1 Pro vs Llama 4 Maverick). Fixed stale pricing date. Added to compare.html (236 links), sitemap (783), RSS (657). 3 commits, 17 files.
**Sessions 787-799 (Jun 20-21):** Free trial as primary CTA across conversion funnel. Trial expiry conversion page. Fixed fake social proof (11 pages). Alternatives cross-linking (16 pages, 55 comparison pages). 3 new alternatives pages. 15+ new comparison pages. 2 sample Pro reports. Save-on-ai-apis + cheapest-ai-api-2026 landing pages. Broken links fixed. 13 commits, 200+ files.
**Sessions 715-786 (Jun 18-20):** Conversion optimization + content blitz — go.html, results-cta.js, exit popup A/B, A/B pricing, 16 best-model tools, API Cost Score, Pro reports, generate-report.html, api-cost-audit.html, pricing hub, llms.txt, 4 alternatives pages, 36 comparison pages. Nav restructured. 130+ commits, 800+ files.
**Sessions 599-714 (Jun 12-18):** Claude 4 shutdown + conversion foundation. 160+ commits, 750+ files.
**Sessions 1-598 (Apr 5 - Jun 12):** Full APIpulse build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools.
