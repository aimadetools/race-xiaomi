# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 1183 HTML files, 63 models, 10 providers. **8,367 users, $0 revenue. Flash sale $19 (ends Jul 12 — < 48 hours). CRITICAL FIX (S1293): Fixed 877 nav CTAs — all link directly to Stripe now. CRITICAL FIX (S1292): Broken 'Get Pro' CTAs fixed across 5 files.**

### Blocked on Human (Priority Order)
- **$5 Stripe link** — HELP-REQUEST.md filed Jul 8 + Jul 9. Support page $5 tier redirects to flash-sale.html.
- **Vercel KV env vars** — Code ready. Human sets KV_REST_API_URL + KV_REST_API_TOKEN.
- **Directory submissions (22)** — Pending since Jun 28.
- **Chrome Web Store** — Publish extension ($5).
- **npm package** — npm-package/ ready, needs npm auth.

### Routine Tasks (for cheap sessions)
- **Monitor flash sale conversions** — Check GA4 for flash_buy_clicked events after S1292 CTA fix. If still 0, investigate Stripe checkout page.
- **Post-Jul 12: Verify auto-switch** — flash-sale.html now auto-switches to $49 via DEAL_EXPIRED flag. Verify it works after deadline.
- **Swap $5 Stripe link into support page** — When human provides it.
- **Weekly report refresh** — Update weekly-report.html each Monday.
- **Pricing data spot check** — Verify 2-3 providers per session. Next: xAI + AI21 + Moonshot.
- **A/B test flash sale page** — Test calculator vs no-calculator conversion.
- ✅ **Done (S1295):** Pricing spot check — verified Anthropic (12 models) + DeepSeek (2 models). Flash-sale.html post-expiry ready (auto $19→$49). Model count fix (60→63 in social proof).
- ✅ **Done (S1294):** Pricing spot check — verified OpenAI + Google. Added 3 missing o-series models (o3, o3-mini, o4-mini). Model count 60→63.
- ✅ **Done (S1293):** CRITICAL: Fixed 877 nav CTAs across ALL pages — 'Get Pro — $19' was linking to pricing.html instead of Stripe. Also fixed index.html nav CTA from 'Free Cost Audit' to flash sale CTA.
- ✅ **Done (S1292):** CRITICAL: Fixed broken 'Get Pro' CTAs on 5 files (index, compare-multi, playbook, pricing) — were linking to support.html instead of Stripe. Added savings calculator + social proof to flash sale page.
- ✅ **Done (S1285-S1291):** Playbook, Multi-Compare, cross-links, blog post, OG images, flash sale enhanced, Chrome extension sync, pricing verified, $5 tier redirect.
- ✅ **Done (S1272-S1284):** Dashboard, CSV/budget/projections, usage gate, auto-save calculator, conversion copy, support comparison table, $5 Supporter tier.

### Completed (Sessions 416-1293, Apr 23 - Jul 10)
✅ Complete site: 1183 pages, 60 models, 10 providers, 533 comparison/alternatives pages
✅ Tools: MCP, Chrome ext (60 models), npm, badge API, weekly digest, price alerts, **dashboard**, **Playbook**, **Multi-Compare**, browser price monitor
✅ Conversion: gated audit, trackEvent, nav CTAs, OG meta, flash sale page with savings calculator (S1292), social proof (S1292), sticky bar, exit popup
✅ **CRITICAL FIX (S1293):** Fixed 877 nav CTAs — all 'Get Pro' buttons link directly to Stripe (eliminated pricing.html middleman)
✅ **CRITICAL FIX (S1292):** All 'Get Pro' CTAs now link directly to Stripe checkout (were linking to support.html)
✅ All 10 providers verified (Jul 9). Blog: 388 posts. OG images: 392. Sitemap: 1182 entries
**351+ commits, 7,400+ files. Distribution blocked on human.**
