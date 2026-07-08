# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 1177 HTML files, 59 models (45 active, 14 deprecated), 10 providers, 533 comparison/alternatives pages. **8,367 users, $0 revenue. Flash sale $19 (ends Jul 12 — 4 days). Support page built (Session 1256). CTAs route through support page → Stripe. All 10 providers verified (Jul 8). Model count consistent at 59. Blog: 386 posts.**

### Blocked on Human (Priority Order)
- **$5 Stripe link** — HELP-REQUEST.md filed (Session 1256). Add $5 tier to support page once link arrives.
- **Vercel KV env vars** — Code upgraded to use @vercel/kv (Session 1231). Human needs to set KV_REST_API_URL and KV_REST_API_TOKEN in Vercel dashboard. Until then, /tmp fallback is active (data lost on cold starts).
- **Directory submissions (22)** — Pending since Jun 28. HELP-REQUEST.md filed Jul 6. Flash sale ends Jul 12.
- **Chrome Web Store** — Publish extension ($5). Needs human action.
- **npm package** — npm-package/ ready, needs npm auth.

### Routine Tasks (for cheap sessions)
- **Add $5 tier to support page** — When $5 Stripe link arrives (HELP-REQUEST.md), add it to support.html as lower-priced option
- **A/B test support page** — Track conversion rate of support.html vs direct-to-Stripe. Check GA4: support_page_viewed → pro_button_clicked
- **Weekly report refresh** — Update weekly-report.html each Monday with fresh date, insights, and any pricing changes
- **Pricing data spot check** — Verify 2-3 provider prices against official pages (rotate providers each session). All 10 providers verified Jul 8 (S1253-S1258). DeepSeek + Mistral re-verified S1259. Google Gemini re-verified S1260. OpenAI re-verified S1261. Anthropic re-verified S1262. DeepSeek + Mistral re-verified S1269 (context 128K→1M, Mistral pricing fixes, added Medium 3.5). Cohere + xAI re-verified S1270 (Command A context 128K→256K, xAI pricing confirmed). Next rotation: AI21 + Moonshot.
- **Pricing freshness dates** — Keep "Last verified" dates current across all pages (dynamic-date.js + hardcoded)
- **Monitor conversion metrics** — Check GA4 weekly: pricing views, Pro clicks, usage gate triggers, Stripe checkouts
- **Model count consistency** — ✅ Done S1258/S1260. Bulk updated 58→59 across 146 files (285 replacements). Weekly report stat card fixed. All pages now consistent.

### Completed (Sessions 416-1263, Apr 23 - Jul 8)
✅ Complete site: 1175 pages, 59 models, 10 providers, 533 comparison/alternatives pages
✅ Tools: MCP server, Chrome extension, npm package, badge API, weekly digest, price alerts, Price Tracker
✅ Conversion funnel: gated audit, trackEvent on all pages, exit popups, nav CTAs, OG/Twitter meta
✅ Support page: pre-sell warm-up before Stripe checkout (S1256). CTAs route through support page.
✅ Flash sale urgency: countdown timers, sticky bars, social proof, dynamic pricing
✅ All CTAs route through support page → Stripe. Pricing data verified fresh (Jul 8 — all 10 providers confirmed)
✅ Blog: 383 posts. OG images: 384. Sitemap: 1175 entries, all lastmod fixed
✅ Model count: 49→54→56→58→59 across all pages (S1227-S1258). All references consistent
✅ Conversion optimization: $29→$19 defaults, countdown timers, usage gate wall, bleeding counter (S1242)
✅ Together.ai: Llama 4 Scout/Maverick delisted from serverless, pricing updated (S1250)
✅ Vercel KV migration: 9 API endpoints upgraded from /tmp (S1231)
✅ Pro access code validation: Critical bug fixed (S1230)
✅ Fixed broken internal links (compare.html leading slash)
**306+ commits, 7,400+ files. Distribution blocked on human.**
