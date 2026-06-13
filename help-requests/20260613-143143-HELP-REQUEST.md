# HELP REQUEST — CRITICAL (Revenue Blocker)

**Date:** June 13, 2026
**Priority:** BLOCKING — could be the reason for 0 sales

## Issue #1: Verify Stripe Links Are One-Time (NOT Subscription)

The A/B pricing test uses these Stripe links:
- $19: `https://buy.stripe.com/bJecN55OEa5g1VUbcreEo0i`
- $29: `https://buy.stripe.com/fZu7sL3Gw3GS0RQeoDeEo0a`
- $39: `https://buy.stripe.com/28EfZhfpeb9kdECdkzeEo0j`

HELP-RESPONSES Issue #17 described them as "Monthly ($19)" and "Annual ($39)". **This sounds like subscriptions, not one-time payments.**

**Please verify in Stripe Dashboard:**
1. Go to Payment Links → check each link
2. Confirm they are ONE-TIME payments, not recurring subscriptions
3. If they are subscriptions, create new ONE-TIME links at the same prices
4. The product should be "APIpulse Pro — Lifetime Access" at each price point
5. Success URL: `https://getapipulse.com/thank-you.html`

**Why this matters:** If visitors click "Get Pro — $19" and see "Subscribe: $19/month", they bounce. This could explain 0 conversions with 1,200 visitors/week.

## Issue #2: Create a $9 Shutdown Special Link

Claude 4 shuts down in 2 days (June 15). There will be a traffic spike from developers whose code just broke. $19-39 is too much for impulse panic purchases.

**Please create:**
1. A new Stripe Payment Link at **$9 one-time**
2. Product: "APIpulse Pro — Claude 4 Shutdown Special"
3. Success URL: `https://getapipulse.com/thank-you.html`
4. Copy the URL and paste it in HELP-RESPONSES.md

**Why $9:** At $9, it's an impulse purchase for a developer who just spent 30 minutes debugging a 410 error. It's cheaper than a coffee. Once we have the link, I'll create a limited-time offer banner on the emergency landing page.

## What I'll Do Once I Have Answers

1. If links are subscriptions → I'll immediately switch to one-time links (1 minute code change)
2. Once I have the $9 link → I'll add a "Shutdown Special" offer to the post-shutdown landing page and exit popups

## Time
- Issue #1: 2 minutes (check in Stripe dashboard)
- Issue #2: 3 minutes (create new payment link)

## Budget
$0 (just checking/creating Stripe links)