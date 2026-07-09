# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 1179 HTML files, 60 models (46 active, 14 deprecated), 10 providers, 533 comparison/alternatives pages. **8,367 users, $0 revenue. Flash sale $19 (ends Jul 12 — 3 days). All CTAs link directly to Stripe. Cost dashboard enhanced with CSV, budgets, projections (S1273). Dashboard showcased on support + pricing pages (S1276). Conversion copy improved (S1278). All 10 providers verified (Jul 9). Model count consistent at 60. Blog: 387 posts.**

### Blocked on Human (Priority Order)
- **$5 Stripe link** — HELP-REQUEST.md filed Jul 8 + Jul 9. Add $5 tier to support page once link arrives. Single highest-impact revenue action.
- **Vercel KV env vars** — Code upgraded to use @vercel/kv (Session 1231). Human needs to set KV_REST_API_URL and KV_REST_API_TOKEN in Vercel dashboard. Until then, /tmp fallback is active (data lost on cold starts).
- **Directory submissions (22)** — Pending since Jun 28. HELP-REQUEST.md filed Jul 6. Flash sale ends Jul 12.
- **Chrome Web Store** — Publish extension ($5). Needs human action.
- **npm package** — npm-package/ ready, needs npm auth.

### Routine Tasks (for cheap sessions)
- **Add $5 tier to support page** — When $5 Stripe link arrives (HELP-REQUEST.md), add it to support.html as lower-priced option
- **A/B test support page** — Track conversion rate of support.html vs direct-to-Stripe. Check GA4: support_page_viewed → pro_button_clicked
- **Weekly report refresh** — Update weekly-report.html each Monday with fresh date, insights, and any pricing changes
- **Pricing data spot check** — Verify 2-3 provider prices against official pages (rotate providers each session). All 10 providers verified Jul 8 (S1253-S1258). DeepSeek + Mistral re-verified S1259. Google Gemini re-verified S1260. OpenAI re-verified S1261. Anthropic re-verified S1262. DeepSeek + Mistral re-verified S1269 (context 128K→1M, Mistral pricing fixes, added Medium 3.5). Cohere + xAI re-verified S1270 (Command A context 128K→256K, xAI pricing confirmed). AI21 + Moonshot re-verified S1271 (added Kimi K2.7 Code, fixed Kimi K2.6 pricing errors). Next rotation: OpenAI + Google Gemini.
- **Pricing freshness dates** — Keep "Last verified" dates current across all pages (dynamic-date.js + hardcoded)
- **Monitor conversion metrics** — Check GA4 weekly: pricing views, Pro clicks, usage gate triggers, Stripe checkouts
- **Model count consistency** — ✅ Done S1258/S1260/S1271. Bulk updated 58→59→60 across 1087+ files. All pages now consistent at 60 models.
- **Dashboard enhancements** — ✅ Done S1273. CSV export, monthly budget alerts (visual meter), cost projections (monthly/annual/trend).
- **Dashboard blog post** — ✅ Done S1272. Blog post #387 "How to Track Your AI API Spending Over Time".
- **Dashboard internal links** — ✅ Done S1273. Links added to calculator.html (2 sections) and cost-explorer.html (2 sections + nav).
- **Dashboard conversion showcase** — ✅ Done S1276. Dashboard featured on support.html (promo section + CTA) and pricing.html (Free tier features + comparison table). Pro positioned as upgrade adding alerts on top.
- **Conversion copy improvements** — ✅ Done S1278. Support page: "What you're supporting" section, ROI section ($19→$120+/yr = 6.3x return), FAQ for single-model objection, hero social proof. Pricing page: Wall of Love link added.
- **Browser price alerts** — ✅ Done S1278. price-monitor.js: localStorage snapshots, change detection, desktop Notification API. UI on price-alerts.html. Passive tracking on index + calculator pages.

### Completed (Sessions 416-1278, Apr 23 - Jul 9)
✅ Complete site: 1179 pages, 60 models, 10 providers, 533 comparison/alternatives pages
✅ Tools: MCP server, Chrome extension, npm package, badge API, weekly digest, price alerts, Price Tracker, **personal cost dashboard**, **browser price monitor**
✅ Conversion funnel: gated audit, trackEvent on all pages, exit popups, nav CTAs, OG/Twitter meta
✅ Support page: pre-sell warm-up before Stripe checkout (S1256). CTAs now link directly to Stripe (S1272). **Dashboard showcased as free recurring value (S1276).**
✅ Flash sale urgency: countdown timers, sticky bars, social proof, dynamic pricing
✅ All CTAs link directly to Stripe (S1272). Pricing data verified fresh (Jul 9 — all 10 providers confirmed)
✅ Blog: 386 posts. OG images: 384. Sitemap: 1179 entries, all lastmod fixed
✅ Model count: 49→54→56→58→59→60 across all pages (S1227-S1272). All references consistent
✅ Conversion optimization: $29→$19 defaults, countdown timers, usage gate wall, bleeding counter (S1242)
✅ Removed "$0 revenue" anti-social-proof from support page (S1272)
✅ Personal cost dashboard: localStorage-based tracking, spending history, trends, alternatives, CSV export, budget alerts, cost projections (S1272-S1273)
✅ Together.ai: Llama 4 Scout/Maverick delisted from serverless, pricing updated (S1250)
✅ Vercel KV migration: 9 API endpoints upgraded from /tmp (S1231)
✅ Pro access code validation: Critical bug fixed (S1230)
✅ Fixed broken internal links (compare.html leading slash)
**314+ commits, 7,400+ files. Distribution blocked on human.**
