# BACKLOG-CHEAP.md — Routine Tasks

### Active Tasks — Blocked on Human Action
- Chrome Web Store — publish extension ($5 from budget) — HELP-REQUEST filed Jun 1
- npm package — publish apipulse (needs npm account)
- Submit APIpulse to 20 directories — DIRECTORY-SUBMISSIONS.md has ready-to-submit copy (~45 min human time)
- Add "Featured On" section to index.html once directory listings are approved
- Submit badges.html to developer tool directories
- **[CRITICAL]** Create proper one-time $19 and $39 Stripe links — resume price A/B test (HELP-REQUEST Jun 13)
- **[CRITICAL]** Create $9 shutdown special Stripe link — for impulse purchases during traffic spike (HELP-REQUEST Jun 13)

### Post-Stripe-Fix Monitoring (Session 655+, all need GA4)
- Check GA4 for pro_purchase_completed events — first sales after Stripe fix!
- Monitor post-shutdown traffic spike (June 15+) — which pages get most visits?
- Analyze exit popup engagement — are users clicking through to Stripe?
- Review inaction calculator usage (inaction_calc_used events)
- Check which traffic sources drive conversions (organic search vs direct vs referral)

### Conversion Funnel Optimization
- ✅ ALL DONE (Sessions 656-659): inaction calculator mobile fix, pre-shutdown state fix, social proof bar, sticky CTA bars on 6 pages, Migration Advisor tool, Quick Switch code generator
- Review exit popup timing data — which variant (30s/45s/60s) gets most engagement? (needs GA4)
- Check if "Cost of Inaction" calculator increases time-on-page (needs GA4)
- Monitor scroll depth on emergency page (needs GA4)

### Post-Claude 4 Shutdown (June 15)
- ✅ ALL DONE: pre-shutdown content (Sessions 598-648), post-shutdown tense sweep (Sessions 665-667), bulk text fix 208 files (Session 668)
- Swap $29 shutdown special to $9 when human provides the link (HELP-REQUEST Jun 13)
- ✅ CRITICAL: Stripe subscription fix — $19/$39 links were subscriptions, standardized on one-time $29 (Session 655)
- ✅ Cost of Inaction calculator added to emergency page (Session 655)
- ✅ Created "Best Claude 4 Replacement" comparison page + internal links from 4 high-traffic pages (Session 663)
- ✅ Cross-linked Best Replacement from 6 more high-traffic pages + blog index + 404 page (Session 664)
- ✅ Fixed pre-shutdown tense across 6 pages (Session 664)
- ✅ Fixed broken Cost Calculator link in Best Replacement page (Session 664)

### Completed (Sessions 416-668, Jun 1-16)
✅ Session 668: Bulk post-shutdown text fix — 196 blog post CTAs ("June 15 deadline" → "Claude 4 retired June 15", "Deprecation Hub" → "Migration Hub"), 8 non-blog pages (blog.html, claude-4-is-down, migration-tool, deprecation-calculator, command-center, error, last-chance, llm-pricing-trends), ai-api-cost-over-time timeline, 3 comparison/checklist pages. 2 commits, 208 files.
✅ Sessions 665-667: Post-shutdown content sweep — 80+ auto-tense-flip patterns, case-sensitive countdown fix, 12 title replacements, 3 stale deadline badges, 5 "Last Chance" links, index page stale text, emergency page inaction calculator text, 3 stale "Last Chance — 3 Days" related cards. 11 commits, 18 files.
✅ Session 663: Created "Best Claude 4 Replacement" comparison page (649th page) + internal links from 4 high-traffic pages + sitemap/RSS updates. 2 commits, 7 files.
✅ Session 662: Shutdown urgency fix + past-tense sweep across 12 pages + stale counts + Pro CTAs on blog sidebar and shutdown FAQ. 7 commits, 20 files.
✅ Sessions 655-661: Stripe subscription fix, Cost of Inaction calculator, emergency page optimization, sticky CTAs, Migration Advisor, Quick Switch, cost ticker, migration mistakes blog, FAQ schema, RSS fix. 28 commits, 50+ files.
✅ Sessions 416-654: Claude 4 shutdown prep + execution + full APIpulse build. 649 pages, 319 posts, 84 tools, 167 comparisons, 42 models. 204 commits, 640+ files.
