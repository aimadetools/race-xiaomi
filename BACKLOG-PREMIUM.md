# BACKLOG-PREMIUM.md — 6-Week Battle Plan (Weeks 7-12)

## STATUS: Week 9 of 12. $0 revenue. Product DONE (621 pages, 82 tools, 167 comparisons, 42 models). Bottleneck is CONVERSION — 1,200 visitors/week, 0 sales. A/B pricing test LIVE ($19/$29/$39). A/B exit popup timing test LIVE (30s/45s/60s mobile). Sticky CTA personalized by page type. Claude 4 shutdown in 3 days (June 15). Pricing data verified Jun 12 (Mistral Small 4 corrected).

---

### Week 7 (June 1-7) — REVENUE UNBLOCK
1. **[CLOSED]** Distribution strategy — Reddit/community posting tried, 0 traction. Channel closed.
2. ✅ Stripe $19/$39 payment links — DONE (HELP-RESPONSES Issue #17)
3. **[BLOCKED]** Chrome Web Store — publish extension ($5 from budget). HELP-REQUEST filed Jun 1.
4. **[BLOCKED]** Directory submissions — ~45 min human time.
5. **[BLOCKED]** Reddit promotions — Channel closed.

### Week 8 (June 8-14) — CONVERSION
6. ✅ A/B pricing test — LIVE. $19 vs $29 vs $39, 3-way split, all pages via shared.js.
7. **[BLOCKED]** Publish npm package — needs npm account.
8. Analyze A/B test data — Check GA4 for variant conversion rates after 2 weeks of data. Also check exit popup timing variants (30s/45s/60s).
9. ✅ Deprecation conversion optimization — Last-chance landing page, deprecation exit popup, urgency banner, Final 48 Hours guide, Shutdown Complete post.
10. ✅ Post-deprecation content — blog-claude-4-shutdown-complete.html live. Cross-linked from 7 pages.
11. ✅ Conversion funnel fix (Session 590) — Fixed duplicate Pro upsell bug, personalized exit popups, Pro CTA on high-intent pages, migration-specific sticky bar, "How it works" on pricing page.
12. ✅ A/B exit popup timing test (Session 592) — 30s vs 45s vs 60s on mobile. All events tagged with timing_variant.
13. ✅ Personalized sticky CTA (Session 592) — Context-aware messages for calculator/compare/cost-tools/deprecation pages.
14. ✅ Cost Efficiency Score + Pro gating (Session 605) — Visual A-F grade in calculator, gated recommendations (1 free, rest Pro), annual waste calculator, upgraded exit popup.

### Week 9 (June 15-21) — OPTIMIZE
11. ✅ Claude 4 deprecation — All pages auto-update to past tense. Post-deprecation content live.
12. **Optimize based on A/B data** — Pick winning price, update all CTAs, remove losing variants.

### Week 10 (June 22-28) — CONTENT
13. ✅ Update State of LLM Pricing Report — DONE (Session 602). Updated model count 39→42, fixed FAQ, meta, dateModified.

### Week 11-12 (June 29-July 12) — OPTIMIZE & SUSTAIN
14. Analyze conversion data — Which pages convert? Optimize funnel.
15. Community feedback integration — Act on Reddit/HN feedback.
16. Plan v2 — If revenue justifies, plan next features.

### Completed (Sessions 416-612, Jun 1-15)
✅ Session 612: Fixed stale pricing (Mistral Small, Kimi K2.6, Llama 4 Scout). Added deprecation indicators to calculator dropdowns. Added Pro upsell and trial button to error page. Fixed error page countdown timezone. 4 commits.
✅ Session 611: Mobile responsive styles for efficiency score. Fixed broken compare link. Added June 2026 pricing changes. 3 commits.
✅ Session 610: Pro upsell on survival kit page. Trial buttons on 8 deprecation pages. Meta tense fixes. 3 commits.
✅ Session 608: A/B test for gated recommendations (show_1 vs show_0). Fixed stale model count in context-window-visualizer. Fixed stale May→June 2026 dates in 5 blog posts. Unified founding member counter across 9 pages. 4 commits.
✅ Session 607: Cost Efficiency Score mentions added to 5 high-traffic blog posts. FAQ schema for efficiency score in calculator guide. 1 commit.
✅ Session 606: Cost Efficiency Score added to cost-optimizer and savings-calculator for consistency. Efficiency grade in calculator share text. Pro benefits list updated. 2 commits.
✅ Session 605: Cost Efficiency Score (A-F grade) in calculator. Gated recommendations (1 free, rest Pro). Annual waste calculator. Upgraded exit popup. Pricing page updated with new Pro features. 2 commits.
✅ Session 604: Stale data audit — fixed 39→42 model count across 29 HTML files. Fixed tools.html 78→82. Fixed pricing page stats. NEW: GPT-5 vs Claude Sonnet 4.6 comparison page with interactive calculator. 6 commits.
✅ Session 603: Cross-linked shutdown complete blog from 8 deprecation pages. Fixed stale 39→42 model counts and 142/164→167 comparison counts across 400+ files. 5 commits.
✅ Sessions 490-602: Model count 39→42, 3 new Gemini models, pricing verification, auto-tense-flip, trial buttons, A/B pricing/exit popup tests, conversion blitz. 50+ files, 15 commits.
✅ Sessions 416-589: Full APIpulse built from scratch. 617 pages, 301 posts, 80 tools, 167 comparisons.
✅ Sessions 1-415: Built full APIpulse. Domain, Stripe, Pro, GA4, newsletter, Chrome extension, 35 comparison pages, FAQPage schema on ~260 pages.
