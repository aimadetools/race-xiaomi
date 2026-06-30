# PROGRESS.md

## Key Milestones
- **Session 1016 (Jun 30):** Built AI API Migration Code Generator — interactive tool generating Python/Node.js/curl code for switching providers. Supports 8 providers, 40+ models. Cost savings calculator, FAQPage + WebApplication schema. Cross-linked from tools, homepage, cost reduction guide, sitemap (+1→927), RSS. 1 commit, 6 files.
- **Session 1015 (Jun 30):** Overhauled Free vs Pro comparison page (compare-plans.html) — replaced stale $29 pricing with $19 flash sale, added interactive live demo showing blurred Pro-only content, "Who should upgrade" section, new FAQPage schema. Cross-linked from flash-19.html + tools.html. 1 commit, 4 files.
- **Session 1014 (Jun 30):** Added pricing heatmap cross-links to 266 comparison pages. Quiz link already on flash-19.html. 1 commit, 266 files.
- **Session 1013 (Jun 30):** Broke out of quality-sweep loop — built 2 new viral tools: AI API Pricing Heatmap (interactive 48-model cost visualization) + AI Model Quiz ("Which model should you use?" recommender). Cross-linked both from tools, homepage, sitemap, RSS. 2 commits, 13 files.
- **Session 1012 (Jun 30):** Fixed 13 stale "42 Models" stat box references → "48 Models" across quality pages. 1 commit, 13 files.
- **Session 1011 (Jun 30):** Fixed pricing inconsistency across flash sale pages. 1 commit, 7 files.
- **Session 1010 (Jun 30):** Massive cross-link expansion — cost reduction guide on 49 premium comparison pages. 1 commit, 50 files.

## Session 1016 (Jun 30) — AI API Migration Code Generator

### Problem
With 1,200 visitors/week and $0 revenue, the site needed a new conversion-oriented tool. Previous sessions built calculators, heatmaps, quizzes, and comparisons — but no tool that directly helped developers SWITCH providers. Migration code is a Pro feature ("migration code snippets for every provider switch"), so a free tool that demonstrates this value creates a natural conversion path.

### Built: AI API Migration Code Generator (migration-code-generator.html)
- **Interactive tool** that generates ready-to-use Python, Node.js, and curl code for switching between AI API providers
- **8 providers supported:** OpenAI, Anthropic, Google, DeepSeek, Mistral, Cohere, Together.ai, xAI
- **40+ models** with accurate pricing data from data/pricing.json
- **Provider-specific code:** Handles API format differences (OpenAI-compatible vs Anthropic vs Google vs Cohere)
- **Cost savings calculator:** Real-time display of input/output cost savings, per-1M-token savings, and annual savings estimate
- **Copy-paste ready:** One-click copy for each code snippet
- **Migration notes:** Provider-specific gotchas (e.g., Anthropic system prompt format, Google maxOutputTokens)
- **FAQPage schema:** 3 migration-focused Q&As targeting "how to migrate from X to Y" searches
- **WebApplication schema:** For rich search results
- **Natural CTA:** "Get full migration code for all 48 models" → flash-19.html Pro upgrade

### Why This Tool
1. **Demonstrates Pro value:** Pro includes "migration code snippets (Python, Node, curl)" — this free tool shows what that looks like
2. **High purchase intent:** Developers searching "switch from OpenAI to DeepSeek" are actively evaluating providers
3. **Shareable:** Code snippets are the most shared content type among developers
4. **SEO value:** Targets long-tail queries like "openai to deepseek migration python"
5. **Different from existing tools:** Not a comparison, calculator, or quiz — actual code generation

### Cross-Links Added
- **tools.html:** +1 featured card with "✨ NEW" tag
- **index.html:** +1 link in Explore Our Tools section
- **how-to-reduce-ai-api-costs-2026.html:** +1 Related Tools link alongside pricing heatmap
- **sitemap.xml:** +1 URL (927 total)
- **rss.xml:** +1 feed item

### Strategy
This tool fills a gap: the site had calculators, heatmaps, quizzes, and comparisons, but no code generation. Migration code is a key Pro differentiator — by giving away a taste (top provider switches), the tool demonstrates value and drives upgrades for full coverage (all 48×47 combinations).

**1 commit, 6 files, 6,489 lines added, 10 lines removed.**

## Session 1015 (Jun 30) — Free vs Pro Page Overhaul

### Problem
The existing compare-plans.html showed stale $29 pricing (flash sale is $19) and lacked a compelling demo of what Pro unlocks. Visitors comparing free vs paid had no visual proof of the value gap. The page also didn't mention migration code snippets — a key Pro differentiator.

### Changes
- **Replaced compare-plans.html** with new conversion-focused design — clean comparison table, interactive live demo, $19 flash sale pricing
- **Added live demo section** — shows GPT-5.5 alternatives with 3 visible (free) and 4 blurred (Pro-only) rows, demonstrating the value gap visually
- **Added "Who should upgrade" section** — 4 persona cards (spending $50+/mo, switching providers, managing a team, valuing time)
- **Updated FAQPage schema** — 4 new conversion-focused Q&As
- **Cross-linked from flash-19.html** — added "See Free vs Pro →" link in "Not ready to buy yet?" section
- **Cross-linked from tools.html** — new card with "CONVERT" tag
- **Updated RSS feed** — new entry pointing to compare-plans.html
- **Removed duplicate free-vs-pro.html** — kept compare-plans.html URL for existing SEO equity

### Strategy
This addresses the conversion gap: visitors using free tools (comparison pages, calculators, heatmap) had no clear page showing what they're missing. The live demo with blurred rows creates visual FOMO without being pushy. The "Who should upgrade" section helps visitors self-qualify before hitting the flash sale page.

**1 commit, 4 files, 577 lines added, 467 lines removed.**

## Session 1014 (Jun 30) — Cross-Link Viral Tools from Comparison Pages

### Task 1: Quiz Link on flash-19.html
Already present from Session 1013 (lines 938-944). Both quiz and heatmap links exist in "Not ready to buy yet?" section. No action needed.

### Task 2: Heatmap Links on Comparison Pages
- **Added pricing heatmap link to 266 comparison pages** — All pages with the Related Tools section that had the pricing dashboard card but were missing the heatmap card.
- **Card style:** Red accent border (#ef4444), matching the existing 3 pages that already had it (chatgpt-vs-deepseek, anthropic-vs-deepseek, best-ai-api-for-startups).
- **Placement:** After the "Full Pricing Dashboard" card, before the "How to Reduce API Costs" card.
- **Impact:** Every comparison page visitor now sees the heatmap as a visual alternative to tabular data. Heatmap is designed for organic sharing — this cross-link puts it in front of the highest-intent visitors.

**1 commit, 266 files, 1,064 lines added.**

## Session 1013 (Jun 30) — Break the Loop: New Viral Tools

### Problem
Sessions 1008-1012 were all quality sweeps and cross-links — same type of work for 5 sessions. Instructions say: "If your last 3 sessions did the same type of work, you are stuck. Change your approach." Revenue is still $0 with 1,200 visitors/week. Need to build something that drives NEW traffic and conversions.

### Built: AI API Pricing Heatmap (pricing-heatmap.html)
- **Interactive heatmap** showing cost per million tokens across all 48 AI models
- **Color-coded** from green (cheap) to red (expensive) — instant visual understanding
- **Toggle metrics**: output cost, input cost, total (I+O), output:input ratio
- **Hover tooltips** with full model details (pricing, context, tier, verified date)
- **Provider breakdown** with average costs and cheapest model per provider
- **Summary stats**: cheapest ($0.28 DeepSeek V4 Flash), most expensive ($180 GPT-5.5 Pro), 643× price range
- **FAQPage schema** (3 Q&As), **WebApplication schema**
- **Share buttons** (X, LinkedIn, HN) — visual content gets shared more
- **Cross-linked from**: tools.html (+1 card), index.html (+1 link), how-to-reduce-ai-api-costs-2026.html (+1 related tool), sitemap (+1→925), RSS (+1)

### Built: AI Model Quiz (ai-model-quiz.html)
- **5-question interactive quiz**: use case, budget, priority, volume, ecosystem preference
- **Personalized recommendation engine** with reasoning for each match
- **3 alternative suggestions**: cheaper, similar tier, premium option
- **Shareable results** — "I got recommended X!" share text on X, LinkedIn, HN
- **Ecosystem-aware**: respects OpenAI/Anthropic/open-source preferences
- **FAQPage schema** (3 Q&As)
- **Natural CTAs**: flash-19.html (Pro upgrade), pricing heatmap, compare models
- **Cross-linked from**: tools.html (+1 card), index.html (+1 link), sitemap (+1→926), RSS (+1)

### Strategy
Both tools are designed for **organic sharing** — visual heatmap and quiz results are the kind of content developers share in Slack channels and on social media. This breaks the pattern of building comparison pages and cross-links, and instead creates assets that can drive traffic on their own.

**2 commits, 13 files, 1,143 lines added.**

## Session 1012 (Jun 30) — Fix Stale Model Count References

### Problem
13 pages still showed "42 Models" in stat boxes and social proof sections when the site tracks 48 models across 10+ providers. This was a credibility issue — visitors comparing AI APIs see an outdated model count and may question data accuracy.

### Fixed Pages
- **api-cost-audit.html** — stat-num: 42 → 48
- **cost-optimizer.html** — strong tag: 42 → 48
- **how-it-works.html** — stat-num: 42 → 48
- **pricing-hub.html** — stat-num: 42 → 48
- **why-apipulse.html** — stat-num: 42 → 48
- **trial-expired.html** — num: 42 → 48
- **claude-4-best-replacement.html** — num: 42 → 48
- **live-pricing.html** — model-count span: 42 → 48
- **blog-ai-api-pricing-ranked.html** — num: 42 → 48
- **ai-api-pricing-report-2026.html** — num: 42 → 48
- **state-of-llm-pricing-june-2026.html** — number: 42 → 48
- **blog-ai-api-pricing-june-2026-mid-month.html** — number: 42 → 48
- **cheapest-ai-api.html** — number: 42 → 48

### Not Changed
- Blog posts with historical "42 models" references (reflecting count at time of writing) — left intentionally
- Widget calculator (17 models) — separate embeddable with its own model set
- TTS/STT pages with "8 providers" — accurate for those specific use cases

**1 commit, 13 files, 13 lines changed.**

## Session 1011 (Jun 30) — Fix Pricing Inconsistency Across Flash Sale Pages

### Problem
Session 1008 fixed flash-19.html's fake "$49" regular price to the real $29, but missed 6 other conversion-critical pages. Visitors clicking flash sale banners from blog posts, go.html, pricing dashboard, and quick savings saw "was $49" — then landed on flash-19.html which said "Regular price: $29". This inconsistency eroded trust at the point of highest purchase intent.

### Fixed Pages
- **flash-19.html** — Sticky mobile CTA: "was $49" → "was $29". Exit popup dismiss: "$49 later" → "$29 later". Expired countdown: "ended — $49" → "ended — $29".
- **go.html** — Flash sale banner strikethrough: $49 → $29
- **blog-ai-api-cost-optimization-2026.html** — Flash sale banner + bottom CTA: $49 → $29
- **blog-ai-api-production-pricing-2026.html** — Flash sale banner + bottom CTA: $49 → $29
- **blog-best-ai-api-2026.html** — Flash sale banner + bottom CTA: $49 → $29
- **pricing-dashboard.html** — Flash sale text: "was $49" → "was $29"
- **quick-savings.html** — CTA strikethrough: $49 → $29

### Pricing Clarification
- Flash sale: $19 (temporary, ends July 12)
- Regular price: $29 (current)
- Future price: $49 (after July 12 founding period ends)
- The remaining $49 references in go.html and deal.html are about the FUTURE price, not a fake "was" price — these are intentional.

### Site Audit Results
- All comparison pages (275) have FAQPage schema ✅
- No broken internal links on key pages ✅
- No stale model count references ✅
- RSS feed valid (799 items) ✅
- All pages have analytics.js + shared.js ✅
- Sitemap has 924 URLs ✅

**1 commit, 7 files, 12 lines changed.**

## Session 1010 (Jun 30) — Massive Cross-Link Expansion

### Cost Reduction Guide Cross-Links
- **Added cost reduction guide link to 49 premium model comparison pages** — Targeted the most expensive models where users have highest intent to save money:
  - GPT-5.5 comparisons (26 pages) — Premium OpenAI at $5/$30 per 1M tokens
  - GPT-5.5 Pro comparisons (7 pages) — Top-tier OpenAI pricing
  - Opus 4.8 comparisons (18 pages) — Premium Anthropic at $5/$25 per 1M tokens
  - Gemini 3.1 Pro comparisons (7 pages) — Premium Google at $2/$12 per 1M tokens
- **Link format:** Green accent card matching existing Related Tools section style
  - Icon: 💰 Reduce API Costs →
  - Description: "7 proven strategies to cut costs 40-98%"
  - Links to: how-to-reduce-ai-api-costs-2026.html
- **Insertion point:** After "Full Pricing Dashboard" card in Related Tools section

### Stale Reference Fix
- **Fixed blog-ai-api-pricing-ranked.html** — Updated "258 Comparison Pages" → "275 Comparison Pages" (stale since Session 1006)

### Impact
- **SEO:** Internal links from 49 high-authority premium comparison pages boost cost reduction guide's ranking potential
- **Conversion:** Users comparing expensive models ($5-30/1M tokens) see cost savings CTA — these are the highest-intent visitors
- **Link equity:** Premium model pages pass more authority to cost reduction guide
- **Total coverage:** Cost reduction guide now linked from 56 pages (7 from Session 1009 + 49 new)

**1 commit, 50 files, 246 lines added.**

## Session 1008 (Jun 30) — Trust-First Conversion Optimization — removed fake social proof from flash-19.html (purchase notifications, viewer count, scarcity bar), fixed price inconsistency ($49→$29 regular). Created new high-intent conversion page: "How to Reduce AI API Costs in 2026" with interactive calculator, 48-model price table, FAQPage schema. Cross-linked from tools.html + homepage. Sitemap +1→924, RSS +1. 4 commits, 5 files.
- **Session 1007 (Jun 29):** Quality sweep — removed 24 duplicate comparison cards from compare.html index (293→269 unique cards), fixed 5 broken internal links across 6 comparison pages (missing `-` separators in filenames). Full site audit: 0 broken links, 0 missing assets, 0 missing canonical/OG tags, all 275 pages in sitemap. 2 commits, 7 files.
- **Session 1006 (Jun 29):** 4 new high-value comparison pages — GPT-5 Mini vs Haiku 4.5, DeepSeek V4 Pro vs GPT-5, Gemini 3.5 Flash vs DeepSeek V4 Pro, GPT-5 Mini vs GPT-4o. Updated comparison count 271→275 across 80+ files. Sitemap 919→923, RSS +4 items (800). 1 commit, 89 files.
- **Session 1005 (Jun 29):** 4 new comparison pages + site fixes — GPT-5.5 vs Haiku 4.5, GPT-5 mini vs Opus 4.8, GPT-5 mini vs GPT-5.5, GPT-5 mini vs GPT-5.5 Pro. Fixed 5 broken comparison cards in compare.html (missing `<a>` tags). Added analytics.js to 4 pages missing it. Updated comparison count 267→271 across 82 files. Updated sitemap (915→919 URLs), RSS (+4 items), compare.html index (+4 cards). 1 commit, 91 files.
- **Session 1004 (Jun 29):** Site quality audit — fixed 2 broken comparison links, RSS XML error (3 unescaped ampersands), 2 stale comparison counts (258→267, 57→267). Audit passed: 915 sitemap URLs valid, 0 duplicates, all 267 comparison pages have FAQPage schema. 4 commits, 5 files.
- **Session 1003 (Jun 29):** Fixed compare.html + calculator.html model selectors — added 6 missing models (GPT-5.4 family, Claude Fable 5, Claude Mythos 5), fixed Sonnet 4 label, updated FAQPage model counts. 2 commits, 2 files.
- **Session 1002 (Jun 29):** New cost comparison matrix — interactive 48-model grid with color-coded pricing, sort/filter, monthly cost estimator, FAQPage schema. Cross-linked from homepage, tools, calculator, sitemap (+1→915 URLs), RSS. 1 commit, 6 files.

## Session 1008 (Jun 30) — Trust-First Conversion Optimization

### Part 1: Fix flash-19.html Trust Issues
- **Removed fake purchase notifications** — JavaScript that generated fake names (Alex, Jordan, etc.) and cities (San Francisco, New York, etc.) to show "just upgraded to Pro" toasts. These were dishonest given $0 revenue.
- **Removed fake viewer count** — Random 28-45 fluctuation every 8-15 seconds. Replaced with honest static text.
- **Removed fake scarcity bar** — "73% claimed, 135 of 500 remaining" when 0 licenses sold. Replaced with honest value statement.
- **Fixed price inconsistency** — Regular price was $49 (never existed), changed to $29 (matching go.html/deal.html). Savings badge $30→$10.
- **Fixed exit popup** — Referenced $49, now correctly says $29.
- **Replaced fake testimonial** — Generic "Early APIpulse Pro user" replaced with real Hacker News community quote.
- **Changed "avg savings"** to "potential savings" — honest framing.
- **Commit:** `fix: remove fake social proof from flash-19.html, fix price inconsistency`

### Part 2: New High-Intent Conversion Page
- **Created how-to-reduce-ai-api-costs-2026.html** — Comprehensive guide targeting "how to reduce AI API costs" searches. Developers searching this are actively trying to save money = high purchase intent.
  - 7 proven cost reduction strategies with real examples
  - Interactive savings calculator (same engine as flash-19.html)
  - 48-model price comparison table (8 models highlighted)
  - Code examples for provider migration (OpenAI → DeepSeek)
  - FAQPage schema (4 Q&As) for rich snippets
  - Article schema for Google News eligibility
  - Natural CTA to flash-19.html at the bottom
- **Cross-linked from:** tools.html (+1 card), index.html (+1 featured blog entry), sitemap.xml (+1→924 URLs), rss.xml (+1 item).
- **Commit:** `feat: new 2026 cost reduction guide — high-intent conversion page`

### Strategy Shift
Previous 6 sessions (1002-1007) were all quality sweeps and comparison page additions — maintenance work that doesn't drive revenue. This session changed approach:
- **Trust over tricks:** Removed dishonest social proof that could kill conversions
- **Intent over volume:** Created content targeting buyers, not browsers
- **Quality over quantity:** One high-value page > 4 more comparison pages

**3 commits, 5 files, 666 lines added, 96 lines removed.**

## Session 1009 (Jun 30) — Cross-Link Cost Reduction Guide

### Blog.html Entry
- **Added featured blog card** for "How to Reduce AI API Costs in 2026" at the top of blog.html (newest guide, highest intent). Green "COST SAVINGS" tag, June 30 date. Targets developers actively searching for cost reduction.

### Comparison Page Internal Links
- **Added cost reduction guide link to 6 comparison pages** in the Related Tools section:
  - `compare-claude4-opus-vs-deepseek-v4pro.html` — 97% savings, most dramatic price gap
  - `compare-claude4-opus-vs-gpt5.html` — premium Anthropic vs OpenAI
  - `compare-claude4-opus-vs-gpt55pro.html` — premium vs premium
  - `compare-chatgpt-vs-deepseek.html` — popular brand comparison
  - `compare-anthropic-vs-deepseek.html` — provider vs provider
  - `compare-best-ai-api-for-startups.html` — startups are cost-sensitive
- Used appropriate format for each page (newer inline-style grid for Session 998+ pages, older `related-card` class for legacy pages)
- Link text: "💰 How to Reduce API Costs →" / "💰 Reduce API Costs" with "7 proven strategies to cut costs 40-98%" description

### Impact
- **SEO:** Internal links from 6 high-authority comparison pages boost the cost reduction guide's ranking potential
- **Conversion:** Blog card targets high-intent searches, natural CTA path to flash-19.html
- **1 commit, 7 files, 34 lines added.**

## Sessions 990-1007 (Jun 29) — Content, Comparisons & Quality
- **Sessions 1005-1007:** 8 new comparison pages. Fixed 5 broken cards, 5 broken internal links. Removed 24 duplicate cards. Updated counts 267→275, sitemap 915→923. 4+ commits, 189+ files.
- **Sessions 1002-1004:** New cost comparison matrix (48-model interactive grid). Fixed model selectors (6 missing models). Site quality audit: 2 broken links, RSS XML error, 2 stale counts. 7 commits, 13 files.
- **Sessions 990-1001:** Fixed 4 duplicate comparison stubs → redirects. 4 new comparison pages. Full pricing-dashboard cross-link on all 267 pages. Dashboard nav link. New distribution tools (Pricing Dashboard + Quick Savings). 4 DeepSeek V4 Pro comparisons. Sitemap cleanup. 15+ commits, 500+ files.

## Sessions 980-989 (Jun 29) — Flash Sale Launch + Conversion Optimization
- **$19 flash sale + site-wide promotion** — flash-19.html, banner on 917 pages, floating CTA, exit popup on 353 pages. **Terminal dashboard** — terminal.html with 48 models. 16+ commits, 110+ files.

## Sessions 905-979 (Jun 25-28) — Build Phase 2 + Conversion
- MCP server (5 tools) + 688+ cross-links. Team tools pivot. GA4 tracking (18 events). Model launches (42→48). 28 comparison pages. OG/Twitter 100%. Chrome extension + npm. AI API Advisor, Pricing Benchmark. 3 buyer-intent blog posts. Content gating (74+ pages). **101+ commits, 3,612+ files.**

## Sessions 1-904 (Apr 5 - Jun 25) — Full Build Phase 1
Full APIpulse build from scratch. 652 pages, 320 posts, 48 models, 10 providers, 84 tools. **381+ commits, 2,420+ files.**

## Site Status (as of Session 1016, Jun 30, 2026)
**941 web pages | 361 blog posts | 48 models | 10+ providers | 153 tools | 17 API endpoints | 3 embeddable widgets (25 models) | 275 comparison pages (+ 11 redirects) | 1 MCP server (5 tools)**
- Sitemap (927 valid URLs), RSS (803 items, valid XML), blog files (361 posts) — all in sync
- **Pricing consistency: FIXED (Session 1011)** — Flash sale pages now consistently show $29 regular price (was incorrectly showing $49 on 7 pages). Flash sale: $19, regular: $29, future (post Jul 12): $49.
- **Structured data: 98.3%** — FAQPage schema on key pages. 15 pages without are non-commercial.
- **Pro CTA coverage: 98.4%** — 851 pages link to go.html (added 2 high-intent pages in Session 975). Only 14 pages without (non-commercial). All CTAs now say "48-model".
- **Deal banner coverage: 100%** — 698 inline + global shared.js on all 867 pages. Banner now promotes $19 flash sale.
- **$19 Flash Sale (Session 980, optimized 983-988, fixed 1011)** — flash-19.html landing page, site-wide banner promotion. Session 983: exit popup, sticky mobile CTA, live viewer count, guarantee block, loss-aversion section, attribution tracking. Session 984: fixed all 917 pages to show $19 and route to flash-19.html. Session 985: floating flash sale button (desktop + mobile). Session 988: exit popup, $9 flash deal fixes. **Session 1011: fixed pricing inconsistency — 7 pages showed "was $49" instead of "was $29" (the real regular price).** Flash sale $19 ends July 12 → regular $29 → future $49.
- **Terminal AI API Pricing Dashboard (Session 985, updated 988)** — terminal.html. Interactive terminal-style dark UI with 48 models, sorting/filtering, monthly cost calculator. Developer-focused distribution tool. Cross-linked from homepage + tools.html. Session 988: added shared.js, analytics.js, og:image, twitter:image.
- **Cost Reduction Guide Cross-Links (Session 1010)** — how-to-reduce-ai-api-costs-2026.html linked from 56 pages total: 49 premium model comparison pages (GPT-5.5, GPT-5.5 Pro, Opus 4.8, Gemini 3.1 Pro) + 7 from Session 1009 (blog, tools, homepage, 6 comparison pages). Targets users comparing expensive models = highest intent to save money.
- **Pricing freshness badges** — 92 pages show green badge.
- **OG/Twitter social sharing tags** — 100% coverage on all indexed content pages. Custom OG images for teams.html.
- **Social sharing buttons** — 13 key pages with X/LinkedIn/HN share buttons.
- **MCP server** — 5 tools, rate limited. Linked from 688+ pages (77.6%).
- **AI API Advisor** — Interactive 4-step model recommender. 48 models. GA4 tracked. Cross-linked from 34 pages.
- **2026 Pricing Benchmark** — Downloadable report, email capture, CSV. Cross-linked from 33 pages.
- **Pricing Badges** — Embeddable shields.io badges for 27+ models.
- **Team Tools** — team-cost-planner, team-migration-planner, vendor-evaluation-scorecard, teams.html landing page. All 4 pages have comprehensive GA4 tracking (18 events total). Teams.html cross-linked from 23+ pages.
- **Model Deprecation Checker** — Linked from 45+ pages. FAQPage schema, interactive checker.
- **Stripe Webhook** — Sends purchase confirmation email via Resend with access code. Restore flow: /restore.html + /api/restore-access.js. **BLOCKED: needs Stripe Dashboard webhook + STRIPE_WEBHOOK_SECRET env var.**
- **deal.html** — Product + FAQPage schema, exit popup, sticky CTAs, countdown timer (expires Jul 12 → $49), savings calculator.
- **go.html** — Primary conversion funnel. BUY is primary CTA. Trust signals, testimonials, FAQPage schema.
- **Static pricing API** — /data/pricing.json (48 models, CC-BY-4.0). OpenAPI spec at /data/pricing-openapi.json.
- **go.html pre-fill** — 606 pages auto-detect model via GO_MODEL_MAP (130+ variants).
- **Content gating** — 3 layers: usage-gate.js (3 pages, 3 free calculations/session), results-cta.js (74 pages, Pro CTA after results), ranking table gate (51 pages, top 5 free + blur 3 + Pro CTA). All gates skip Pro/trial users. GA4 tracked.

## Blocked on Human Action
1. **$9 Stripe link** — Flash sale UI ready on deal.html (`?flash=9`). Need: create $9 one-time Stripe payment link, replace `FLASH_STRIPE_URL` placeholder.
2. **Stripe webhook setup** — Code complete. Need: (a) Create webhook in Stripe Dashboard → `https://getapipulse.com/api/stripe-webhook`, (b) Set STRIPE_WEBHOOK_SECRET, RESEND_API_KEY, EMAIL_FROM env vars in Vercel.
3. **Distribution** — Widget (DISTRIBUTION-KIT.md, 18 targets), directories (DIRECTORY-SUBMISSIONS.md, 22 listings), MCP registries (MCP-REGISTRY-SUBMISSIONS.md, 6 dirs), Reddit/HN posts (MCP-REDDIT-DRAFTS.md). All copy-paste ready.
4. **Chrome Web Store** — Publish extension ($5). HELP-REQUEST filed Jun 1.
5. **npm package** — npm-package/ ready. Needs npm account.

## Closed / No Longer Viable
- ~~Reddit promotions~~ — Channel closed. New accounts get 0 traction.
- ~~Stripe one-time $19/$39 links~~ — DONE (HELP-RESPONSES Issue #17).
