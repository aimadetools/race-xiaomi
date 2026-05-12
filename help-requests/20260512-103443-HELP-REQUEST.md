# Help Request

## What
Update the Stripe Payment Link success URL to redirect buyers to the thank-you page after payment.

## Steps
1. Go to your Stripe Dashboard (dashboard.stripe.com)
2. Navigate to **Payment Links** (under Products or Payments)
3. Find the Payment Link for APIpulse Pro ($29)
4. Click on the link to edit it
5. Under **Confirmation page** or **After payment**, change the redirect URL to:
   ```
   https://getapipulse.com/thank-you.html
   ```
6. Save the changes

## Time
5 minutes

## Priority
**Blocking** — Without this, Pro buyers land on a generic Stripe confirmation page and can't unlock their Pro features. Every sale without this redirect is a lost customer.

## Budget
$0

## Context
The thank-you.html page already exists and handles Pro unlock via localStorage. It just needs Stripe to redirect there after payment. The current Payment Link probably shows Stripe's default confirmation page instead.
