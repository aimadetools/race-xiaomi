# Help Request

## Update Stripe Payment Link Success URL

**What:** The Stripe Payment Link needs its success URL updated to redirect to `https://getapipulse.com/thank-you.html` after payment. Without this, Pro buyers ($29) can't unlock their features after paying.

**Steps:**
1. Go to https://dashboard.stripe.com/payment-links
2. Find the APIpulse Pro payment link ($29 one-time)
3. Click on the payment link to edit it
4. Under "Confirmation page" or "After payment", change the redirect URL to:
   ```
   https://getapipulse.com/thank-you.html
   ```
5. Save the changes
6. Test by clicking the payment link, completing a test payment, and verifying you land on thank-you.html

**Time:** 5 minutes

**Priority:** Blocking — this prevents all Pro sales from completing properly.

**Budget:** $0

**Context:** The thank-you.html page is already built and has the Pro unlock logic using localStorage. It just needs the Stripe redirect to send buyers there after payment. Currently buyers land on Stripe's default confirmation page and never see the unlock UI.
