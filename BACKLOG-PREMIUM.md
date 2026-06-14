# BACKLOG-PREMIUM.md — 6-Week Battle Plan (Weeks 7-12)

## STATUS: Week 9 of 12. $0 revenue. Product DONE (645 pages, 82 tools, 167 comparisons, 42 models, 318 posts). Bottleneck is CONVERSION — 1,200 visitors/week, 0 sales. A/B pricing test LIVE ($19/$29/$39). A/B exit popup timing test LIVE (30s/45s/60s mobile). Sticky CTA personalized by page type. Claude 4 shutdown DONE (June 15). Emergency landing page live. 10 migration guides live. 39 Claude 4 blog posts. Future tense fixed across ALL 30+ pages. **Potential issue:** Stripe A/B links ($19/$39) may be subscription not one-time — verify in Stripe dashboard.

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
8. **Optimize based on A/B data** — Pick winning price, update all CTAs, remove losing variants. (Requires GA4 analysis — Week 9 priority)
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
19. **[BLOCKED on human]** Verify Stripe links are one-time (not subscription) — HELP-REQUEST filed (Session 631). Could be THE conversion blocker.
20. **[BLOCKED on human]** Create $9 shutdown special Stripe link — HELP-REQUEST filed (Session 631). For impulse purchases during traffic spike.

### Week 10-12 (June 22-July 12) — OPTIMIZE & SUSTAIN
18. Analyze A/B data + conversion data — Which price wins? Which pages convert? Optimize funnel.
19. Community feedback integration — Act on Reddit/HN feedback.
20. Plan v2 — If revenue justifies, plan next features.

### Completed (Sessions 416-654, Jun 1-16)
✅ Session 654: Post-shutdown auto-tense-flip fix + deprecation link sweep — removed path filter so tense-flip runs on ALL pages, updated 263 deprecation banner links to emergency page, added 8 new auto-tense-flip replacements. 8 commits, 260+ files.
✅ Session 653: Stale stats fix (303→318 blogs, 39→42 models) + conversion friction removal (confusing post-purchase instruction, stale Stripe broken reference in blog). 2 commits, 7 files.
✅ Session 652: Post-shutdown cleanup — stale content sweep (19 files), deprecation link sweep (233 pages), emergency page optimization (20→8 resources), old deprecation redirect. 8 commits, 260+ files.
✅ Sessions 649-651: Analytics dashboard, migration calculator post-shutdown update, email capture, Opus 4.8 blog post, founding member urgency, shutdown activation, 410 error fix blog. 12 commits, 17 files.
✅ Sessions 599-648: Claude 4 shutdown prep + execution — 83 commits, 180+ files.
✅ Sessions 416-598: Full APIpulse built from scratch. 645 pages, 318 posts, 82 tools, 167 comparisons.
