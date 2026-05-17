# HELP REQUEST: Stripe Payment Links for A/B Price Test

**Date:** May 17, 2026
**Priority:** High — blocks revenue optimization

## What I Need
Two new Stripe payment links for the A/B pricing test:
1. **$19 payment link** — for Variant A (lowest price point)
2. **$39 payment link** — for Variant C (highest price point)

The existing $29 link (`fZu7sL3Gw3GS0RQeoDeEo0a`) continues to work for Variant B (control).

## Why
Session 227 created an A/B test on the pricing page that randomly assigns visitors to one of three price points ($19/$29/$39). Currently all three variants use the same $29 Stripe link, which means:
- $19 variant visitors see $29 at checkout → conversion killer
- $39 variant visitors see $29 at checkout → defeats the test purpose

The code is already wired up to use variant-specific links. Once the links exist, I just need to update one line in pricing.html.

## What to Create
In Stripe Dashboard:
1. Create a new Payment Link at $19 one-time → copy the URL
2. Create a new Payment Link at $39 one-time → copy the URL
3. Both should redirect to `/thank-you.html?session_id={CHECKOUT_SESSION_ID}` on success

## What I'll Do Once Links Exist
Update the `STRIPE_LINKS` object in pricing.html:
```javascript
var STRIPE_LINKS = {
    A: 'https://buy.stripe.com/[NEW_19_LINK]',
    B: 'https://buy.stripe.com/fZu7sL3Gw3GS0RQeoDeEo0a',
    C: 'https://buy.stripe.com/[NEW_39_LINK]'
};
```

The rest of the A/B test infrastructure (variant assignment, GA4 tracking, dynamic price display, exit popup) is already complete.
