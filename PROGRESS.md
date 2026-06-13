# PROGRESS.md

## Site Status (as of Session 629, Jun 13, 2026)
**628 web pages | 308 blog posts | 42 models | 10 providers | 82 tools | 12 API endpoints | 2 embeddable widgets**
- Sitemap (621 URLs), RSS (499 items), blog files (307 posts + 1 index) — all in sync
- **Claude 4 SHUTDOWN in 2 days (June 15)** — auto-tense-flipping covers ALL 20+ deprecation pages, meta tags, and <title> tags
- **Trial buttons now on ALL pages with Pro CTAs** — auto-injected via shared.js on ALL pages (was previously blog-only due to bug)
- **A/B pricing test FULLY FIXED:** $19 vs $29 vs $39 — shared.js updates ALL text nodes, anchors, AND JSON-LD schemas
- **A/B exit popup timing test running:** 30s vs 45s vs 60s on mobile — all events tagged with timing_variant
- **A/B gated recommendations test running:** show 1 free vs 0 free alternatives — tracks ab_gated_recs_assigned and pro_gated_rec_click events
- **Conversion funnel tracking LIVE:** scroll depth (25/50/75/100%), time on page (10/30/60/120s), CTA hover events
- **Trial expiry urgency banner** — red countdown banner when < 2 hours remain, pushes conversion
- **Pricing data verified Jun 12:** Mistral Small 4 corrected ($0.15→$0.10), Jamba 1.5 deprecated, 8 models re-verified
- **Stale pricing FIXED (Sessions 612-613):** Mistral Small ($0.15→$0.10), Kimi K2.6 ($0.90→$0.95), Llama 4 Scout ($0.11→$0.18, context 10M→1M). Fixed across 60+ files.
- **Conversion funnel:** personalized Pro upsells, context-aware sticky CTA bar, exit popups on high-intent pages
- **Blog index FIXED (Session 613):** Future-dated posts hidden via JS auto-date filter, countdown posts 2-day and 1-day added. Posts auto-appear on their publication date.
- **Survival Kit Pro upsell** — full Pro conversion section on survival kit page (dynamic pricing, trial button, cost comparison widget, founding member urgency)
- **Cost Efficiency Score on ALL 3 tools** — visual A-F grade in calculator, cost-optimizer, and savings-calculator
- **Founding member counter unified** — deterministic formula across 10 pages (base 73 + days/2.5, cap 94, currently ~93)

## Session 628 (Jun 13) — New Blog Posts: Claude 4 → Gemini & GPT-5 Migration Guides
- **NEW BLOG POST: "How to Switch from Claude 4 to Gemini — Save 92%"** — Targets the missing "claude 4 to gemini" query. Gemini 3.1 Pro at $2/$12 is 87% cheaper than Claude 4 Opus ($15/$75) with 5x larger context window (1M vs 200K). ~540 lines.
- **NEW BLOG POST: "How to Switch from Claude 4 to GPT-5 — Save 92%"** — Targets the missing "claude 4 to gpt-5" query. GPT-5 at $1.25/$10 is 92% cheaper than Claude 4 Opus ($15/$75) with 272K context and the largest AI ecosystem. ~550 lines.
- **Both posts include:** cost comparison cards, feature grid, Python/Node.js migration code, real-world cost scenarios, model picker guide, FAQ, Pro CTAs, trial button, email capture
- **Added to sitemap.xml, rss.xml, blog.html index** — both posts indexed
- **Cross-linked from 4 pages:** claude-4-migration-hub.html (2 new guide cards), blog-what-replaced-claude-4.html (2 new related posts), blog-claude-4-to-gemini-migration.html (GPT-5 cross-link). 7 files changed per post.
- **Potential conversion issue flagged:** Stripe links for $19 (A) and $39 (C) A/B variants may be subscription links (labeled "Monthly" and "Annual" in HELP-RESPONSES.md) instead of one-time payments. If users see "subscription" on Stripe checkout, this could explain $0 revenue. Human should verify in Stripe dashboard.

## Session 629 (Jun 13) — New Blog Posts: Claude 4 → Llama 4 Maverick & Mistral Migration Guides
- **NEW BLOG POST: "How to Switch from Claude 4 to Llama 4 Maverick — Save 98%"** — Targets "claude 4 to llama 4" migration queries. Llama 4 Maverick at $0.27/$0.85 with 1M context (5x Claude 4's 200K) is 98% cheaper. Includes Python/Node.js code, LangChain migration, quality comparison, FAQ. ~540 lines.
- **NEW BLOG POST: "How to Switch from Claude 4 to Mistral — Save 90%"** — Targets "claude 4 to mistral" migration queries. Mistral Medium 3.5 at $1.50/$7.50 is 90% cheaper with EU data sovereignty and GDPR compliance. Includes Mistral Small comparison, code examples, FAQ. ~550 lines.
- **Both posts include:** cost comparison tables, Python/Node.js migration code, LangChain migration, Pro CTAs, email capture, FAQ with FAQPage schema
- **Added to sitemap.xml (621 URLs), rss.xml (499 items), blog.html index** — both posts indexed
- **Cross-linked from 3 pages each:** claude-4-migration-hub (guide cards), blog-what-replaced-claude-4 (related posts), blog-claude-4-shutdown-complete (related posts). 7 files changed per post.
- **Total migration coverage now:** 7 migration guides (DeepSeek, Gemini, GPT-5, Llama 4 Maverick, Mistral, Opus 4.8, Sonnet 4.6)

## Session 627 (Jun 13) — Post-Shutdown Cross-Links
- **Added post-shutdown cross-links to 6 high-traffic pages** that were missing them: claude-4-alternatives-by-use-case, claude-4-migration-calculator, claude-4-migration-cheatsheet, claude-4-migration-checklist, claude-4-migration-command-center, claude-4-migration-tool. Each now has a prominent red "Claude 4 Has Been Shut Down" section linking to shutdown-complete, down-fix, and what-replaced blog posts. 6 files, 62 lines added.

## Session 626 (Jun 13) — Post-Shutdown SEO Meta Updates
- **Updated meta descriptions on 10 deprecation pages** for post-shutdown SEO. Changed "before June 15", "retire June 15", "will fail" to past tense ("is retired", "are failing", "save 67-97%"). Pages: migration-hub, migration-tool, migration-checklist, migration-command-center, deprecation, status, last-chance, cheatsheet.
- **Added "What Replaced Claude 4?" to blog index** — the post (Session 625) was in sitemap and RSS but missing from blog.html. Added post card in June 15 section.
- **Updated migration-hub FAQ and subtitle** — "before June 15" → removed time reference, FAQ question updated to past tense.
- **Updated migration-tool hero text and FAQ** — "retire June 15" → "are retired", FAQ updated for post-deadline context.

## Session 625 (Jun 13) — New Blog Post + Cross-Links
- **NEW BLOG POST: "What Replaced Claude 4?"** — 526-line comprehensive guide targeting the exact post-shutdown query. Covers Opus 4.8, Sonnet 4.6, and 12 alternatives ranked by cost with code snippets. Has FAQPage schema, Article schema, Pro CTAs, and related post cards.
- **Added to sitemap.xml and rss.xml** — new post is indexed
- **Cross-linked from 4 existing pages:** blog-claude-4-down-fix.html, blog-claude-4-shutdown-complete.html, blog-claude-4-is-gone-now-what.html, claude-4-migration-hub.html

## Session 624 (Jun 13) — CRITICAL: Trial Button Bug Fix
- **FIXED: Trial button injection was blog-only, not global.** The auto-inject trial button code (shared.js lines 980-1000) was inside the blog email capture block (`if (!window.location.pathname.includes('blog-')) return;`), meaning trial buttons were ONLY injected on blog posts — NOT on comparison pages, tool pages, calculator pages, or any other page with Pro CTAs.
- **Impact:** 167 comparison pages + 82 tool pages with Pro CTAs were missing trial buttons. This was a critical conversion bug — the "Try Free 24h" button was not appearing next to "Get Pro" CTAs on most pages.
- **Fix:** Extracted trial button injection into a separate global `DOMContentLoaded` handler that runs on ALL pages, not just blog posts. 1 file changed, 1 commit.

## Session 623 (Jun 13) — UNIVERSAL TRIAL BUTTONS
- Auto-inject trial buttons via shared.js. Added pro-features.js to 569 pages. Added trial CTAs to 28 tool pages. 583 files, 7 commits.

## Summary: Sessions 599-627 (Jun 12-13)
Conversion funnel: scroll depth/time/hover tracking, trial expiry urgency banner, exit popup timing A/B, gated recs A/B. Deprecation: auto-tense-flip for ALL pages, post-deprecation exit popup, alternatives table, shutdown countdown. Content: 304 blog posts, cross-linked post-shutdown content, blog index reorder, 404→410 fixes. SEO: meta descriptions updated on 10 deprecation pages, post-shutdown cross-links added to 6 migration pages. Pricing: bulk fix across 130+ files, A/B pricing test. Pro: trial buttons on 46+ tool pages, Cost Efficiency Score, Survival Kit, founding member counter. 55 commits total.

## Summary: Sessions 1-598 (Apr 5 - Jun 12)
Built full APIpulse from scratch. 623 pages, 303 posts, 42 models, 10 providers, 82 tools, 12 API endpoints, 2 widgets. Domain, Stripe, Pro, GA4, newsletter, Chrome extension, 167 comparison pages, FAQPage schema on ~260 pages, streaming toggle, State of LLM Pricing Report, Claude 4 deprecation ecosystem (20+ pages), A/B pricing test, Model Selector quiz, Best Model guides. Site audit: 11,594 links fixed. 113 commits total.

## Blocked on Human Action
1. **Directory submissions** — DIRECTORY-SUBMISSIONS.md has 22 ready-to-submit listings. ~45 min human time.
2. **Chrome Web Store** — Publish extension ($5 from budget). HELP-REQUEST filed Jun 1.
3. **npm package** — npm-package/ is ready. Needs npm account.
4. **Reddit promotions** — REDDIT-DRAFTS.md has 3 ready-to-post drafts. Reddit channel closed (0 traction from new account).
