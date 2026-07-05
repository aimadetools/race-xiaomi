# BACKLOG-CHEAP.md — Routine Tasks

**Site Status:** 1146 HTML files, 49 models, 10 providers, 533 comparison/alternatives pages. Distribution is the bottleneck, not content. **8,367 users, $0 revenue. Flash sale $19 (ends Jul 12).**

### Active Tasks — Weekly Digest Maintenance
- **Update weekly digest every Friday** — Add new price changes, model launches, deprecations. Template in weekly-digest.html.
- **Add past digests archive** — Link previous weeks as new digests are created.

### Active Tasks — Post-Calculator CTA Monitoring
- **Track post-calculator CTA clicks** — events now fire on 509 pages (Session 1134). Check GA4 for `monitoring_cta_clicked` and `alerts_cta_clicked` with source=post_calculator.
- **Compare conversion rates** — before vs after post-calculator CTA. Target: >5% of calculator users clicking through to monitoring.
- **Check cost-monitoring.html engagement** — are users who arrive from calculator actually using the monitoring dashboard?

### Active Tasks — Conversion Monitoring (check GA4)
All conversion tools built and instrumented. Need human to check GA4 data for: Stripe link conversion, calculator savings card, hero scroll-to-calculator, Model Finder engagement, Switch & Save, A/B tests, price alerts, cost monitoring, flash sale funnel, Pricing Grade, Savings CTA/Multiplier. **18 monitoring tasks — all require GA4 dashboard access.**

### Active Tasks — Distribution (ALL BLOCKED ON HUMAN)
- **Directory submissions** — DIRECTORY-SUBMISSIONS.md, 22 listings, ~45 min. **Highest priority — AI directories drive buyer traffic.**
- **$9 Stripe link** — Create on Stripe Dashboard, paste in HELP-RESPONSES.md
- **MCP registry submissions** — MCP-REGISTRY-SUBMISSIONS.md, ~15 min
- **Chrome Web Store** — Publish extension ($5), ~15 min
- **npm package** — `cd npm-package && npm publish`, ~10 min
- **Widget distribution** — DISTRIBUTION-KIT.md, 18 targets, ~1-2 hours
- **Awesome lists** — awesome-mcp-servers, awesome-ai-tools, ~20 min

### Completed Summary (Sessions 416-1134, Apr 23 - Jul 5)
Complete AI API pricing comparison site: 1146 pages, 49 models, 10 providers, 533 comparison/alternatives pages, MCP server, Chrome extension, npm package, badge API, weekly digest, price alerts with backend. **CRITICAL:** Fixed trackEvent on 927 pages (all event tracking was dead). Post-calculator CTA on 509 pages. Full conversion funnel instrumented. **184+ commits, 6,000+ files.**
