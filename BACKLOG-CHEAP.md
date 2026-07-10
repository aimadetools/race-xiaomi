# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 1183 HTML files, 64 models, 10 providers. **8,367 users, $0 revenue. Flash sale $19 (ends Jul 12 — < 48 hours). All CTAs fixed. PRO GATE OVERLAY (S1313-S1317): 13 tools gated (compare-multi, dashboard, playbook, cost-explorer, compare, model-switch, token-estimator, agent-cost-calculator, ai-api-cost-calculator, ai-chatbot-cost-calculator, ai-roi-calculator, cost-monitoring, migration-checklist). begin_checkout tracking added. 30-day guarantee consistent across 267+ files. Social proof consistent (8,300+). Post-expiry $49 switch guarded — won't activate until real Stripe link provided.**

### Blocked on Human (Priority Order)
- **$49 Stripe link** — Post-expiry pricing needs its own payment link. Currently falls back to $19 link.
- **Ko-fi account** — HELP-REQUEST filed Jul 10. Create ko-fi.com/apipulse for pay-what-you-want option. 5 min. (S1299: PWYW section removed from flash-sale.html until account exists)
- **$5 Stripe link** — HELP-REQUEST.md filed Jul 8 + Jul 9. Support page $5 tier removed (Ko-fi not available).
- **Vercel KV env vars** — Code ready. Human sets KV_REST_API_URL + KV_REST_API_TOKEN.
- **Directory submissions (22)** — Pending since Jun 28.
- **Chrome Web Store** — Publish extension ($5).
- **npm package** — npm-package/ ready, needs npm auth.

### Routine Tasks (for cheap sessions)
- **Monitor pro-gate conversions** — Check GA4 for pro_gate_cta_clicked and pro_gate_shown events after S1314 gate deployment. Track if gates increase begin_checkout events. 4 tools now gated: compare-multi, dashboard, playbook, cost-explorer.
- **Add pro-gate to more tools** — 13 tools now gated. Remaining ungated interactive tools: ai-model-finder (has own gating), ai-stack-builder, ai-model-quiz. Consider gating if traffic warrants.
- **Monitor flash sale conversions** — Check GA4 for flash_buy_clicked events. If still 0 after gates, investigate Stripe checkout page.
- **Post-Jul 12: Verify auto-switch** — flash-sale.html now auto-switches to $49 via DEAL_EXPIRED flag. Verify it works after deadline.
- **Post-Jul 12: Create $49 Stripe link** — POST_EXPIRY_STRIPE_URL still points to $19 link. Need human to create $49 payment link for proper post-expiry pricing.
- **Swap $49 Stripe link into shared.js** — When human provides it, update POST_EXPIRY_STRIPE_URL.
- **Weekly report refresh** — Update weekly-report.html each Monday.
- **Pricing data spot check** — Verify 2-3 providers per session. All 10 providers verified S1294-S1296. Next: re-verify OpenAI + Google in ~2 weeks.
- **A/B test flash sale page** — Test calculator vs no-calculator conversion.

### Completed (Sessions 416-1314, Apr 23 - Jul 10)
✅ Complete site: 1183 pages, 64 models, 10 providers, 540 comparison/alternatives pages
✅ Tools: MCP, Chrome ext (60 models), npm, badge API, weekly digest, price alerts, **dashboard**, **Playbook**, **Multi-Compare**, **Compare Two Models**, browser price monitor
✅ Conversion: gated audit, trackEvent, nav CTAs, OG meta, flash sale page with savings calculator, social proof, sticky bar, exit popup, **post-expiry auto-switch**, **Zero-Risk Guarantee**
✅ **PRO GATE (S1313-S1317):** 13 tools gated (compare-multi, dashboard, playbook, cost-explorer, compare, model-switch, token-estimator, agent-cost-calculator, ai-api-cost-calculator, ai-chatbot-cost-calculator, ai-roi-calculator, cost-monitoring, migration-checklist)
✅ **CRITICAL FIX (S1293):** Fixed 877 nav CTAs — all 'Get Pro' buttons link directly to Stripe
✅ **Guarantee consistency (S1314):** 14-day → 30-day across 267+ files
✅ All 10 providers verified. Blog: 388 posts. Sitemap: 1184 entries
**372+ commits, 7,700+ files. Distribution blocked on human.**
