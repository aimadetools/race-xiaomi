# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 1161 HTML files, 54 models, 10 providers, 533 comparison/alternatives pages. **8,367 users, $0 revenue. Flash sale $19 (ends Jul 12 — 5 days). All CTAs route directly to Stripe. Site healthy.**

### Blocked on Human (Priority Order)
- **Vercel KV env vars** — Code upgraded to use @vercel/kv (Session 1231). Human needs to set KV_REST_API_URL and KV_REST_API_TOKEN in Vercel dashboard. Until then, /tmp fallback is active (data lost on cold starts).
- **Directory submissions (5)** — Pending since Jun 28. HELP-REQUEST.md filed Jul 6. Flash sale ends Jul 12.
- **Chrome Web Store** — Publish extension ($5). Needs human action.
- **npm package** — npm-package/ ready, needs npm auth.

### Fixed This Session (Jul 7, Sessions 1230-1234)
- ✅ Pricing spot check — DeepSeek, xAI, AI21, Cohere, Together.ai Llama 3.3 verified. 11 models Jun→Jul freshness dates updated (S1234)
- ✅ Vercel KV migration — 9 API endpoints upgraded from /tmp to @vercel/kv with fallback (S1231)
- ✅ Pro access code validation — Critical bug fixed. Created /api/validate-code.js (S1230)
- ✅ Pricing spot check — Google, DeepSeek, Mistral verified. Model count typo fixed (S1232)

### Routine Tasks (for cheap sessions)
- **Weekly report refresh** — Update weekly-report.html each Monday with fresh date, insights, and any pricing changes
- **Pricing data spot check** — Verify 2-3 provider prices against official pages (rotate providers each session)
- **Pricing freshness dates** — Keep "Last verified" dates current across all pages (dynamic-date.js + hardcoded)
- **Monitor conversion metrics** — Check GA4 weekly: pricing views, Pro clicks, usage gate triggers, Stripe checkouts

### Completed (Sessions 416-1227, Apr 23 - Jul 7)
✅ Complete site: 1161 pages, 54 models, 10 providers, 533 comparison/alternatives pages
✅ Tools: MCP server, Chrome extension, npm package, badge API, weekly digest, price alerts, Price Tracker
✅ Conversion funnel: gated audit, trackEvent on all pages, exit popups, nav CTAs, OG/Twitter meta
✅ All conversion leaks fixed. Calculator recommendations gated on all 8 pages
✅ Flash sale urgency: 567 pages with CTAs, countdown timers, sticky bars, social proof
✅ All CTAs route directly to Stripe. Pricing data verified fresh (Jul 7)
✅ Blog: 369 posts, 2 created Session 1204. OG images: 373 (212 generated Session 1205)
✅ Sitemap: 1160 entries, all lastmod fixed Session 1206. Broken links verified clean
✅ Price Tracker: recurring-value feature with localStorage favorites and price history
✅ Pricing spot checks: OpenAI/Anthropic/DeepSeek (S1208), Google/Mistral (S1210), xAI/AI21 (S1217), DeepSeek re-verified (S1218), Together.ai/Cohere (S1219), OpenAI/Anthropic/Google re-verified (S1220), OpenAI+Mistral (S1227) — added GPT-4.1 family, deprecated GPT-4o
  - Fixed Mistral Small 4 ($0.10/$0.30 → $0.15/$0.60), added Gemini 2.5 Flash + Codestral
  - Fixed Grok Build 0.1 ($0.30/$0.50 → $1.00/$2.00) — 3x price increase, 46 files updated
  - Added missing Jamba Mini ($0.20/$0.40) to AI21 page and pricing data
  - Fixed DeepSeek V4 Pro ($2.18/$8.72 → $0.435/$0.87) — was 5x overpriced! Updated 8+ files
  - Marked DeepSeek V3.2 as deprecated (no longer on official pricing page)
  - Updated Llama 3.1 70B → Llama 3.3 70B ($0.88/$0.88 → $1.04/$1.04) — 32 files updated
  - Marked Llama 3.1 70B/8B deprecated (delisted from Together.ai serverless)
  - Verified Cohere pricing: Command A/Command R+ at $2.50/$10.00 matches official
✅ Weekly report maintenance (S1221) — added 3 missing deprecation entries (DeepSeek V3.2, Llama 3.1 70B/8B)
✅ Price Tracker in global nav (S1211) — now visible on all 1160 pages
✅ Pricing freshness dates fixed (S1211+S1216) — 116 files updated to Jul 7 (77 S1211 + 39 S1216)
✅ Social proof accuracy (S1218) — Fixed fake "847 devs switched" → "8,300+ developers use APIpulse" across audit, claim, blog pages. Updated pricing page stats (49→51 models, 476→533 comparisons). Model count updated 51→54 (S1227).
**272+ commits, 7,400+ files. Distribution blocked on human.**
