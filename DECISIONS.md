# DECISIONS.md — Research & Analysis

## Phase 1: Brainstorming 10 Micro-SaaS Ideas

### Idea 1: WaitlistKit — Viral Waitlist Landing Page Builder
- **Description:** Create pre-launch waitlist pages with built-in referral mechanics. Users who refer friends move up the leaderboard.
- **Target:** Indie hackers, startup founders, product launches
- **Pricing:** Free (basic) / $29 one-time (launch package) / $9/mo (pro)
- **Why it works:** Every startup needs a waitlist. Referral mechanics create virality. Low competition at affordable price points.

### Idea 2: ChangelogPop — Embeddable Changelog Widget
- **Description:** A beautiful changelog widget that SaaS companies embed to announce product updates.
- **Target:** SaaS founders, product teams
- **Pricing:** Free (10 entries) / $19/mo (pro)
- **Why it works:** Beamer charges $49/mo. Room for affordable alternative.

### Idea 3: FeedbackLoop — User Feedback Board
- **Description:** Embeddable feedback board where users submit and vote on feature requests.
- **Target:** SaaS companies, indie hackers
- **Pricing:** Free (25 requests) / $19/mo (unlimited)
- **Why it works:** Canny starts at $79/mo. Huge price gap opportunity.

### Idea 4: RunwayCalc — Startup Runway Calculator
- **Description:** Track MRR, expenses, and calculate runway with beautiful charts.
- **Target:** Bootstrapped founders
- **Pricing:** Free (basic) / $9/mo (pro)
- **Why it works:** Simple but valuable. Founders check it weekly.

### Idea 5: PitchDeck Score — AI Pitch Deck Analyzer
- **Description:** Upload pitch deck, get scored on 10 dimensions with improvement tips.
- **Target:** Founders raising funding
- **Pricing:** $19 per analysis / $49 for detailed report
- **Why it works:** High willingness to pay. Unique AI angle.

### Idea 6: CompetitorWatch — Competitor Price Tracker
- **Description:** Track competitor pricing pages and get alerts when they change.
- **Target:** SaaS companies, e-commerce
- **Pricing:** $19/mo (5 competitors) / $49/mo (unlimited)
- **Why it works:** Valuable intelligence. Recurring revenue.

### Idea 7: LaunchChecklist — Product Launch Checklist Generator
- **Description:** Interactive checklist for Product Hunt, Hacker News launches with templates.
- **Target:** Product hunters, indie hackers
- **Pricing:** Free (basic) / $19 (premium templates)
- **Why it works:** One-time purchase model. High intent audience.

### Idea 8: SaaS Terms — Legal Page Generator
- **Description:** Generate Privacy Policy, Terms of Service, Cookie Policy for SaaS.
- **Target:** Startup founders
- **Pricing:** $29 one-time / $9/mo (hosted + updates)
- **Why it works:** Required for every website. Boring but necessary.

### Idea 9: PricingTable — Embeddable Pricing Table Builder
- **Description:** Beautiful pricing tables with comparison features. Embed anywhere.
- **Target:** SaaS companies
- **Pricing:** Free (basic) / $9/mo (pro features)
- **Why it works:** Every SaaS needs a pricing page.

### Idea 10: ROICalculator — Marketing ROI Calculator
- **Description:** Calculate ROI for marketing campaigns, ads, content marketing.
- **Target:** Marketers, founders
- **Pricing:** Free (basic) / $19 (advanced analytics)
- **Why it works:** Simple tool, high search volume for "marketing ROI calculator"

---

## Phase 2: Evaluation & Scoring

| Idea | Revenue (1-10) | Feasibility (1-10) | Acquisition (1-10) | Competition (1-10) | Monetization Speed (1-10) | TOTAL |
|------|---------------|-------------------|-------------------|-------------------|--------------------------|-------|
| WaitlistKit | 8 | 9 | 9 | 7 | 8 | 41 |
| ChangelogPop | 7 | 9 | 6 | 5 | 7 | 34 |
| FeedbackLoop | 8 | 7 | 7 | 5 | 6 | 33 |
| RunwayCalc | 5 | 8 | 6 | 4 | 5 | 28 |
| PitchDeck Score | 7 | 6 | 5 | 6 | 7 | 31 |
| CompetitorWatch | 8 | 5 | 6 | 6 | 5 | 30 |
| LaunchChecklist | 6 | 9 | 8 | 6 | 8 | 37 |
| SaaS Terms | 6 | 9 | 5 | 4 | 7 | 31 |
| PricingTable | 5 | 9 | 5 | 3 | 5 | 27 |
| ROICalculator | 5 | 9 | 7 | 5 | 5 | 31 |

### Eliminated (Bottom 5):
1. **RunwayCalc (28)** — Low revenue potential, founders won't pay much for a calculator
2. **PricingTable (27)** — Too many free Tailwind templates, hard to monetize
3. **ROICalculator (31)** — Many free calculators exist, low willingness to pay
4. **FeedbackLoop (33)** — Canny has free tier, GitHub Discussions is free
5. **ChangelogPop (34)** — Beamer has free tier, market is established

### Top 5 Remaining:
1. **WaitlistKit (41)** — Best overall score
2. **LaunchChecklist (37)** — Strong acquisition, fast monetization
3. **PitchDeck Score (31)** — High willingness to pay
4. **SaaS Terms (31)** — Boring but necessary
5. **CompetitorWatch (30)** — High value but technically complex

---

## Phase 2b: Mini Business Plans for Top 5

### 1. WaitlistKit — Viral Waitlist Builder

**Pricing Tiers:**
- Free: 1 waitlist, 100 signups, basic template, client-side tracking
- Launch Package: $29 one-time — 3 waitlists, 1000 signups, premium templates, CSV export, referral leaderboard
- Pro: $9/mo — Unlimited waitlists, custom branding, analytics, priority support

**First 10 Paying Customers Strategy:**
- Week 1: Post on Indie Hackers, r/SaaS, r/startups with "I built this" story
- Week 2: Share on Twitter/X with founder audience, DM indie hackers launching soon
- Week 3: Offer free Launch Package to 5 Product Hunt hunters in exchange for reviews
- Week 4: Launch on Product Hunt (target 100+ upvotes)

**User Acquisition Timeline:**
- Week 1: Community posts (IH, Reddit, Twitter) → 50 signups
- Week 4: Product Hunt launch → 500 signups, 10 paying
- Week 8: SEO content + referrals → 1000 signups, 30 paying

**Revenue Projection:**
- First dollar: Week 2 (from community posts)
- $100 MRR: Week 6
- $500 MRR: Week 12

**Static HTML Monetization:**
- Client-side waitlist builder (localStorage)
- Referral tracking via URL parameters
- Stripe payment links (no backend needed)
- CSV export (client-side)

### 2. LaunchChecklist — Launch Prep Tool

**Pricing Tiers:**
- Free: Basic 20-item checklist
- Premium: $19 one-time — 100+ items, templates for PH/HN/Twitter, timeline planner

**First 10 Customers:**
- Target people actively preparing launches (search "product hunt launch" on Twitter)
- Free tool → email capture → upsell premium

**Revenue Projection:**
- First dollar: Week 1
- $100 total: Week 3

### 3. PitchDeck Score

**Pricing:** $19 per analysis, $49 detailed report
**Challenge:** Needs AI API costs, complex PDF parsing
**Verdict:** Too technically complex for $90 budget

### 4. SaaS Terms

**Pricing:** $29 one-time, $9/mo hosted
**Challenge:** Many free generators exist (TermsFeed, FreePrivacyPolicy)
**Verdict:** Hard to differentiate

### 5. CompetitorWatch

**Pricing:** $19-49/mo
**Challenge:** Needs scraping infrastructure, complex to build
**Verdict:** Too technically complex

---

## Phase 3: FINAL DECISION

# 🏆 Winner: WaitlistKit

**Elevator Pitch:**
WaitlistKit helps founders build viral waitlists in minutes. Instead of a boring email form, each signup gets a unique referral link — refer friends to move up the list. It's the easiest way to build pre-launch buzz and guarantee a successful launch day.

**Why WaitlistKit Wins:**
1. **Clear path to revenue by Week 2** — Community-driven sales, no ad budget needed
2. **Works entirely with static HTML/JS** — localStorage + URL params for referral tracking
3. **Viral by nature** — Referral mechanics mean every user brings more users
4. **High willingness to pay** — Founders spend $500+ on launches, $29 is nothing
5. **Low competition at this price point** — Viral Loops ($35/mo), SparkLoop ($99/mo)
6. **Specific search intent** — "viral waitlist builder" has low competition keywords
7. **Perfect for the audience** — Indie hackers and startup founders ARE the target market

**Competitive Advantage:**
- 10x cheaper than Viral Loops
- Simpler than SparkLoop
- Works instantly (no setup required)
- Beautiful dark-mode UI (modern aesthetic)
- Built by an indie hacker, for indie hackers
