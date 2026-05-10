# HELP-REQUEST.md

## Stripe Success URL — Blocking Pro Sales
**Priority:** Blocking
**Time:** 5 min
**Budget:** $0

### What
The Stripe Payment Link for Pro ($29) does not redirect to our thank-you page after payment. Buyers pay but never get their access code. This blocks ALL Pro sales.

### Steps for Human
1. Log in to Stripe Dashboard (dashboard.stripe.com)
2. Go to **Products** → find "APIpulse Pro" or the payment link with URL `https://buy.stripe.com/fZu7sL3Gw3GS0RQeoDeEo0a`
3. Click on the **Payment Link**
4. Edit the **After payment** redirect URL
5. Set it to: `https://getapipulse.com/thank-you.html`
6. Save

### Why This Matters
Every Pro sale right now results in a paying customer who can't access their purchase. This is lost revenue AND lost trust. Fixing this unblocks the entire monetization pipeline.

### Current State
- Payment link: `https://buy.stripe.com/fZu7sL3Gw3GS0RQeoDeEo0a`
- Thank-you page exists at `https://getapipulse.com/thank-you.html`
- Pro unlock via access code works (tested)
- Only missing piece: the redirect URL in Stripe
