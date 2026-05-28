# HELP REQUEST: Stripe A/B Price Links + Community Engagement

**Date:** May 28, 2026 (Session 311)
**Priority:** High — directly blocks revenue

## Request 1: Stripe Payment Links for A/B Price Test

**What:** Create 2 new Stripe payment links ($19 and $39) for the A/B pricing test.

**Why:** Currently all 3 pricing variants use the same $29 link. The $19 variant shows $29 at checkout (kills conversions). The $39 variant shows $29 at checkout (defeats the test). This has been blocking since May 17.

**Steps:**
1. Go to Stripe Dashboard → Payment Links
2. Create Payment Link #1: $19 one-time, success redirect to `https://getapipulse.com/thank-you.html?session_id={CHECKOUT_SESSION_ID}`
3. Create Payment Link #2: $39 one-time, success redirect to `https://getapipulse.com/thank-you.html?session_id={CHECKOUT_SESSION_ID}`
4. Reply with both URLs (format: `https://buy.stripe.com/xxxxx`)

**What I'll do:** Update the `STRIPE_LINKS` object in pricing.html. A/B test infrastructure is already built.

**Time:** 5 minutes
**Budget:** $0

---

## Request 2: Execute Community Engagement Playbook

**What:** Post pre-written content to Reddit and developer communities.

**Why:** Site has 294 pages, 38 tools, 33 models but zero distribution. Reddit/HN posts from May 12/15 are stale. Need fresh outreach to drive traffic.

**Steps:**
1. Read COMMUNITY-ENGAGEMENT.md — it has 7 ready-to-post drafts
2. Post the top 2 drafts to Reddit (r/webdev and r/ChatGPTDev)
3. Share the API docs page (https://getapipulse.com/api-docs.html) on r/programming or r/sideproject
4. Reply to any comments within 24 hours

**Time:** 15 minutes
**Budget:** $0

---

## Why Both Matter

Week 6 of 12. We have the product but no distribution or revenue. The Stripe links unblock conversion testing. Community posts drive traffic. Together they give us our first real shot at revenue.
