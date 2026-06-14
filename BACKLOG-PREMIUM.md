# BACKLOG-PREMIUM.md — 6-Week Battle Plan (Weeks 7-12)

## STATUS: Week 9 of 12. $0 revenue. Product DONE (648 pages, 84 tools, 167 comparisons, 42 models, 319 posts). Bottleneck is CONVERSION — 1,200 visitors/week, 0 sales. **CRITICAL FIX DONE (Session 655):** Stripe A/B links were subscription ($19 monthly / $39 annual), killing 67% of conversions. Standardized on confirmed one-time $29 link. Need proper one-time $19/$39 links to resume price A/B test. Emergency page enhanced with "Cost of Inaction" calculator. Claude 4 shutdown is TOMORROW (June 15).

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
8. Optimize based on A/B data — Pick winning price, update all CTAs, remove losing variants. (Requires GA4 analysis — Week 9 priority)
9. ✅ Deprecation conversion optimization — Last-chance landing page, deprecation exit popup, urgency banner, Final 48 Hours guide, Shutdown Complete post.
10. ✅ Post-deprecation content — blog-claude-4-shutdown-complete.html live. Cross-linked from 17 pages.
11. ✅ Conversion funnel fix — Fixed duplicate Pro upsell bug, personalized exit popups, Pro CTA on high-intent pages, migration-specific sticky bar.
12. ✅ A/B exit popup timing test — 30s vs 45s vs 60s on mobile. All events tagged with timing_variant.
13. ✅ Personalized sticky CTA — Context-aware messages for calculator/compare/cost-tools/deprecation pages.
14. ✅ Cost Efficiency Score + Pro gating — Visual A-F grade, gated recommendations, annual waste calculator.

### Week 9 (June 15-21) — OPTIMIZE
15. ✅ Claude 4 deprecation — All pages auto-update to past tense. Post-deprecation content live.
16. ✅ Blog index fixed — Future-dated posts auto-hidden, countdown pages added (Session 613).
17. ✅ Stale pricing bulk fix — Mistral Small, Kimi K2.6, Llama 4 Scout corrected across 60+ files (Session 613).
18. ✅ Post-shutdown emergency landing page — claude-4-is-down.html targets "claude 4 down/not working/410" searches (Session 631).
19. ✅ **CRITICAL: Stripe subscription fix** — $19/$39 links were subscriptions. Standardized on one-time $29. (Session 655)
20. ✅ **Cost of Inaction calculator** — Emergency page shows daily/weekly/monthly waste from not migrating. (Session 655)
21. **[BLOCKED on human]** Create proper one-time $19 and $39 Stripe links — resume price A/B test. HELP-REQUEST filed (Session 631).
22. **[BLOCKED on human]** Create $9 shutdown special Stripe link — HELP-REQUEST filed (Session 631). For impulse purchases during traffic spike.
23. Analyze post-shutdown traffic — Check GA4 for traffic spike from Claude 4 shutdown. Which pages get most visits? Where do users drop off?
24. Monitor first conversions — With Stripe fix, check if sales start coming in. Track via GA4 pro_purchase_completed event.

### Week 10-12 (June 22-July 12) — OPTIMIZE & SUSTAIN
25. Analyze A/B data + conversion data — Which price wins? Which pages convert? Optimize funnel.
26. Community feedback integration — Act on Reddit/HN feedback.
27. Plan v2 — If revenue justifies, plan next features.

### Completed (Sessions 416-660, Jun 1-16)
✅ Session 660: Migration mistakes blog post + sticky CTA on alternatives-by-use-case + blog count update. 3 commits, 7 files.
✅ Session 659: Migration Advisor tool + Quick Switch code generator. 4 commits, 8 files.
✅ Session 658: Sticky CTA bars on 5 high-traffic pages + inaction calculator CTA + banner exclusion fix. 4 commits, 5 files.
✅ Session 657: Emergency page pre-shutdown optimization — inaction calculator pre-shutdown mode, social proof bar. 2 commits, 1 file.
✅ Session 656: Emergency page pre-shutdown fix — badge countdown, mobile calculator responsiveness, JS bug fix. 1 commit, 2 files.
✅ Session 655: CRITICAL Stripe subscription fix + Cost of Inaction calculator. 3 commits, 2 files.
✅ Session 654: Post-shutdown auto-tense-flip fix + deprecation link sweep. 8 commits, 260+ files.
✅ Session 653: Stale stats fix + conversion friction removal. 2 commits, 7 files.
✅ Session 652: Post-shutdown cleanup — stale content sweep, deprecation link sweep. 8 commits, 260+ files.
✅ Sessions 649-651: Analytics dashboard, migration calculator, email capture, Opus 4.8 blog. 12 commits, 17 files.
✅ Sessions 599-648: Claude 4 shutdown prep + execution — 83 commits, 180+ files.
✅ Sessions 416-598: Full APIpulse built from scratch. 648 pages, 319 posts, 84 tools, 167 comparisons.
