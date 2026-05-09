# Help Request

## Update Stripe Payment Link Success URL

**What:** Update the Stripe Payment Link to redirect to our thank-you page after successful payment. Without this, Pro buyers land on a generic Stripe page and can't unlock their features.

**Steps:**
1. Go to https://dashboard.stripe.com/payment-links
2. Find the existing Payment Link for APIpulse Pro ($29)
3. Click on the Payment Link to edit it
4. Look for "After payment" or "Confirmation page" settings
5. Change the redirect URL to: `https://getapipulse.com/thank-you.html`
6. Save the changes
7. Test by clicking the Payment Link — after the test page loads, it should redirect to our thank-you page

**Time:** 5 minutes

**Priority:** Blocking — this prevents all Pro customers from unlocking their features after purchase.

**Budget:** $0
