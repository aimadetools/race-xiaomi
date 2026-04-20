# IDENTITY.md — WaitlistKit

## Startup Identity

**Name:** WaitlistKit
**Tagline:** Build viral waitlists that grow themselves
**Domain:** waitlistkit.com (to be purchased)

## Target Audience

**Primary:** Indie hackers and solo founders preparing to launch a product
**Secondary:** Product managers at startups running beta programs
**Tertiary:** Content creators building audience before a course/product launch

**Pain Point:** "I'm launching soon but I have no audience. How do I build hype and collect emails before launch day?"

**Solution:** A dead-simple waitlist builder where every signup gets a unique referral link. Share to move up the list. Leaderboard creates FOMO and urgency.

## Pricing Tiers

### Free — $0
- 1 active waitlist
- Up to 100 signups
- 1 basic template
- Client-side referral tracking
- WaitlistKit branding

### Launch Package — $29 (one-time)
- 3 active waitlists
- Up to 1,000 signups per waitlist
- Premium templates (5+ designs)
- Referral leaderboard
- CSV export
- Remove WaitlistKit branding
- Email notifications

### Pro — $9/month
- Unlimited waitlists
- Unlimited signups
- All premium templates
- Custom colors and branding
- Analytics dashboard
- Priority support
- API access (future)

## User Acquisition Plan

### Week 1: Foundation
- Launch landing page
- Post "building in public" on Twitter/X
- Share on Indie Hackers (Show IH forum)
- Post on r/SaaS, r/startups, r/entrepreneur
- Goal: 50 signups, 0 paying customers

### Week 2: First Revenue
- DM 20 indie hackers who are "launching soon"
- Offer free Launch Package to first 10 users for testimonials
- Write "How I built a viral waitlist" blog post
- Goal: 100 signups, 3-5 paying customers

### Week 3: Content Push
- Publish 3 blog posts (SEO optimized)
- Create "Waitlist Playbook" free guide (lead magnet)
- Engage in Twitter conversations about launches
- Goal: 200 signups, 8-10 paying customers

### Week 4: Product Hunt Launch
- Prepare PH launch (assets, hunter, timing)
- Launch on Product Hunt (Tuesday or Thursday)
- Cross-promote on all channels
- Goal: 500 signups, 15-20 paying customers

### Week 5-8: Growth
- SEO content (2 posts/week)
- Guest posts on indie hacker blogs
- Referral program for WaitlistKit itself
- Partnership with launch communities
- Goal: 1000+ signups, 30-50 paying customers

### Week 9-12: Scale
- Paid ads if profitable ($5/day Twitter ads)
- Affiliate program (20% commission)
- Feature expansion based on user feedback
- Goal: 2000+ signups, 50-100 paying customers

## Monetization Strategy

**Primary:** One-time Launch Package ($29) — impulse purchase for founders
**Secondary:** Monthly Pro subscription ($9/mo) — recurring revenue
**Future:** Enterprise plans, white-label, API access

**Payment Processing:** Stripe Payment Links (no backend required)
**Revenue Target:** $500 MRR by Week 8, $1000 MRR by Week 12

## Tech Approach

**Stack:** Vanilla HTML, CSS, JavaScript (no frameworks)
**Hosting:** Vercel (free tier)
**Data Storage:** localStorage (free tier), Supabase (paid tier)
**Payments:** Stripe Payment Links
**Analytics:** Plausible or simple custom tracking

**Architecture:**
- index.html — Landing page
- app.html — Waitlist builder SPA
- w/[id].html — Public waitlist page (dynamic via JS)
- pricing.html — Pricing page
- about.html — About page
- blog/ — Blog posts (static)

**Key Technical Decisions:**
1. No build step — pure HTML/CSS/JS for simplicity
2. localStorage for free tier data (no backend needed)
3. URL parameters for referral tracking (?ref=USER_ID)
4. CSS variables for easy theming
5. Mobile-first responsive design

## 12-Week Roadmap

### Week 1: MVP Launch
- [x] Research and decide on idea
- [ ] Build landing page
- [ ] Build waitlist builder (basic)
- [ ] Build public waitlist page
- [ ] Deploy to Vercel
- [ ] First community posts

### Week 2: First Revenue
- [ ] Add Stripe payment integration
- [ ] Build premium templates
- [ ] Add CSV export
- [ ] Get first 3 paying customers
- [ ] Collect testimonials

### Week 3: Content & SEO
- [ ] Write 3 blog posts
- [ ] Optimize for search (meta tags, schema)
- [ ] Create free guide/lead magnet
- [ ] Build email list

### Week 4: Product Hunt Launch
- [ ] Prepare PH launch assets
- [ ] Launch on Product Hunt
- [ ] Handle traffic and signups
- [ ] Respond to feedback

### Week 5-6: Iterate
- [ ] Add requested features
- [ ] Improve templates
- [ ] Add analytics dashboard
- [ ] Build referral program for WaitlistKit

### Week 7-8: Growth
- [ ] Scale content marketing
- [ ] Explore partnerships
- [ ] Add Pro tier features
- [ ] Hit $500 MRR target

### Week 9-10: Expand
- [ ] Add integrations (Mailchimp, etc.)
- [ ] Build API
- [ ] Explore paid acquisition

### Week 11-12: Optimize
- [ ] Conversion optimization
- [ ] Pricing experiments
- [ ] Scale what works
- [ ] Hit $1000 MRR target
