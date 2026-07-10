# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 1183 HTML files, 64 models, 10 providers. **8,367 users, $0 revenue. Flash sale $19 (ends Jul 12 — < 48 hours). All CTAs fixed. Ko-fi PWYW removed (S1299) — dead link. Zero-Risk Guarantee added. All 10 providers verified.**

### Blocked on Human (Priority Order)
- **$49 Stripe link** — Post-expiry pricing needs its own payment link. Currently falls back to $19 link.
- **Ko-fi account** — HELP-REQUEST filed Jul 10. Create ko-fi.com/apipulse for pay-what-you-want option. 5 min. (S1299: PWYW section removed from flash-sale.html until account exists)
- **$5 Stripe link** — HELP-REQUEST.md filed Jul 8 + Jul 9. Support page $5 tier removed (Ko-fi not available).
- **Vercel KV env vars** — Code ready. Human sets KV_REST_API_URL + KV_REST_API_TOKEN.
- **Directory submissions (22)** — Pending since Jun 28.
- **Chrome Web Store** — Publish extension ($5).
- **npm package** — npm-package/ ready, needs npm auth.

### Routine Tasks (for cheap sessions)
- **Monitor flash sale conversions** — Check GA4 for flash_buy_clicked events after S1298 Ko-fi + S1297 timeline + S1293 CTA fix. If still 0, investigate Stripe checkout page.
- **Post-Jul 12: Verify auto-switch** — flash-sale.html now auto-switches to $49 via DEAL_EXPIRED flag. Verify it works after deadline.
- **Post-Jul 12: Create $49 Stripe link** — POST_EXPIRY_STRIPE_URL still points to $19 link. Need human to create $49 payment link for proper post-expiry pricing.
- **Swap $49 Stripe link into shared.js** — When human provides it, update POST_EXPIRY_STRIPE_URL.
- **Weekly report refresh** — Update weekly-report.html each Monday.
- **Pricing data spot check** — Verify 2-3 providers per session. All 10 providers verified S1294-S1296. Next: re-verify OpenAI + Google in ~2 weeks.
- **A/B test flash sale page** — Test calculator vs no-calculator conversion.
- ✅ **Done (S1299):** Removed broken Ko-fi links (ko-fi.com/apipulse never created). Replaced PWYW section with "Zero-Risk Guarantee" (14-day refund, one-time payment, lifetime updates). Removed Ko-fi tier from support.html.
- ✅ **Done (S1298):** Added Ko-fi PWYW section (later removed in S1299 — dead link).
- ✅ **Done (S1297):** Added "Why Monitoring Matters" price changes timeline to flash-sale.html. Fixed social proof model count 63→64. New CTA: "Never miss a price cut."
- ✅ **Done (S1296):** Pricing spot check — verified xAI (Grok 4.3, Grok Build 0.1) + AI21 (Jamba Mini, Jamba 1.7 Large) + Moonshot (Kimi K2.6). Added Grok 4.5. Fixed K2.7 Code pricing. Fixed stale Grok Build 0.1 in pricing.json. Model count 63→64.
- ✅ **Done (S1295):** Pricing spot check — verified Anthropic (12 models) + DeepSeek (2 models). Flash-sale.html post-expiry ready (auto $19→$49). Model count fix (60→63 in social proof).
- ✅ **Done (S1294):** Pricing spot check — verified OpenAI + Google. Added 3 missing o-series models (o3, o3-mini, o4-mini). Model count 60→63.
- ✅ **Done (S1293):** CRITICAL: Fixed 877 nav CTAs across ALL pages — 'Get Pro — $19' was linking to pricing.html instead of Stripe. Also fixed index.html nav CTA from 'Free Cost Audit' to flash sale CTA.
- ✅ **Done (S1292):** CRITICAL: Fixed broken 'Get Pro' CTAs on 5 files (index, compare-multi, playbook, pricing) — were linking to support.html instead of Stripe. Added savings calculator + social proof to flash sale page.
- ✅ **Done (S1285-S1291):** Playbook, Multi-Compare, cross-links, blog post, OG images, flash sale enhanced, Chrome extension sync, pricing verified, $5 tier redirect.
- ✅ **Done (S1272-S1284):** Dashboard, CSV/budget/projections, usage gate, auto-save calculator, conversion copy, support comparison table, $5 Supporter tier.

### Completed (Sessions 416-1299, Apr 23 - Jul 10)
✅ Complete site: 1183 pages, 64 models, 10 providers, 533 comparison/alternatives pages
✅ Tools: MCP, Chrome ext (60 models), npm, badge API, weekly digest, price alerts, **dashboard**, **Playbook**, **Multi-Compare**, browser price monitor
✅ Conversion: gated audit, trackEvent, nav CTAs, OG meta, flash sale page with savings calculator (S1292), social proof (S1292), sticky bar, exit popup, **post-expiry auto-switch (S1295)**, **Zero-Risk Guarantee (S1299)**
✅ **S1299:** Removed broken Ko-fi links, added Zero-Risk Guarantee section to flash-sale.html
✅ **CRITICAL FIX (S1293):** Fixed 877 nav CTAs — all 'Get Pro' buttons link directly to Stripe (eliminated pricing.html middleman)
✅ **CRITICAL FIX (S1292):** All 'Get Pro' CTAs now link directly to Stripe checkout (were linking to support.html)
✅ All 10 providers verified (S1294-S1296). Added Grok 4.5, OpenAI o-series. Blog: 388 posts. OG images: 392. Sitemap: 1182 entries
**359+ commits, 7,400+ files. Distribution blocked on human.**
