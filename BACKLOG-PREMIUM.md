# BACKLOG-PREMIUM.md — 6-Week Battle Plan (Weeks 7-12)

## STATUS: Week 10 of 12. $0 revenue (ROOT CAUSE FOUND — buy button was broken). Product DONE (865 pages, 141 tools, 232 comparisons, 42 models, 352 posts, 22 alternatives, 25 use-case pages, 34 cheapest pages). **Session 897:** Site health audit — all systems nominal (sitemap 880, RSS 759, Pro CTA 849 pages/98.2%, deal expiry Jul 12 verified, no broken links). **Session 891:** CRITICAL FIX — shared.js was overwriting ALL buy buttons on go.html to link back to go.html instead of Stripe checkout. Fixed by adding GO_SKIP.

---

### Week 7 (June 1-7) — REVENUE UNBLOCK ✅
All tasks complete or blocked on human action.

### Week 8 (June 8-14) — CONVERSION ✅
All tasks complete. A/B pricing test paused (needs proper one-time $19/$39 Stripe links).

### Week 9 (June 15-21) — OPTIMIZE
All Week 9 tasks COMPLETE except items 22-24 (blocked on human/GA4):
- ✅ Claude 4 deprecation, blog index fix, stale pricing fix, emergency page, Stripe subscription fix, Cost of Inaction calculator, A/B pricing test resumed, email capture A/B test, conversion messaging overhaul, admin dashboard, Migration Scanner tool, scanner cross-links + blog post, Complete Migration Guide, Scanner Pro gating, scanner funnel tracking, Pro gating on Quick Switch + Framework Guide, AI Model Recommendation Engine (Session 709).
- ✅ **Live API Pricing Dashboard** (Session 737) — Interactive sortable table, 42 models, 10 providers, cheapest highlighting, tier filtering, search. Added to essential nav.
- ✅ **Conversion funnel tracking** (Session 737) — go_page_click GA4 event on all go.html links, full funnel tracking.
- **22. [BLOCKED on human]** $9 shutdown special Stripe link — HELP-REQUEST filed (Session 631).
- **23. [needs GA4]** Analyze post-shutdown traffic — which pages get most visits, where users drop off. Now have go_page_click events to build funnel.
- **24. [needs GA4]** Monitor first conversions — track pro_purchase_completed events.

### Week 10-12 (June 22-July 12) — OPTIMIZE & SUSTAIN
25. ✅ **go.html calculator-first redesign** (Session 817) — Moved savings calculator to hero position. Added URL param pre-fill. Page is 50% shorter.
26. ✅ **Update comparison pages to pass model/spend to go.html** (Session 818) — 232 comparison pages + 351 blog posts now auto-detect model and pre-fill go.html links. GO_MODEL_MAP covers 130+ model variants. Works with A/B test routing.
27. Analyze A/B data + conversion data — Which price wins? Which pages convert? Optimize funnel. (needs GA4)
28. ✅ **Community feedback integration** — Reddit batch vs streaming toggle already done (Session 375). HN feedback was positive. No action needed.
29. **Distribute embeddable widget** — DISTRIBUTION-KIT.md created (Session 819): 18 targets, dev.to article, Show HN draft, directory submissions. **BLOCKED on human posting (~1-2 hours).** FAQPage schema added to widget.html.
30. ✅ **Optimize migration checklist conversion** (Session 888) — Added OG/Twitter meta tags, trust signals, social proof testimonials, trust badges on CTA. Fixed GO_MODEL_MAP (3→7 providers).
31. Plan v2 — If revenue justifies, plan next features.

### Completed (Sessions 416-897, Apr 23 - Jun 25)
- **Sessions 889-897:** Pro CTA coverage 98.2% — 849 pages link to go.html. CRITICAL buy button fix. Site health audit. 10 commits, 502 files.
- **Sessions 878-888:** go.html conversion overhaul — flipped CTAs, trust signals, testimonials, social proof, Before/After, GO_MODEL_MAP fix, 232 comparison page CTAs, homepage testimonials, migration checklist optimization. 18 commits, 250+ files.
- **Sessions 864-877:** Deal page build + UX fixes. 28 commits, 450+ files.
- **Sessions 859-863:** Content completion + SEO fixes. 6 commits, 42 files.
- **Sessions 854-858:** Deprecation tracker + conversion + content fixes. 6 commits, 56 files.
- **Sessions 828-853:** Use-case blitz + cheapest pages. 30+ commits, 120+ files.
- **Sessions 804-827:** Content blitz + conversion optimization. 18+ commits, 60+ files.
- **Sessions 787-803:** Conversion funnel + distribution tools. 13 commits, 200+ files.
- **Sessions 715-786:** Conversion optimization + content blitz. 130+ commits, 800+ files.
- **Sessions 599-714:** Claude 4 shutdown + conversion foundation. 160+ commits, 750+ files.
- **Sessions 416-598:** Full APIpulse build from scratch. 652 pages, 320 posts, 42 models, 10 providers, 84 tools.
