# Help Request — Stripe Payment Link Success URL

## What
Update the Stripe Payment Link to redirect customers to a thank-you page after successful payment. Currently, customers pay $29 but never get access to Pro features because there's no redirect.

## Steps

1. Go to [Stripe Dashboard](https://dashboard.stripe.com) → **Payment Links**
2. Find the existing payment link for APIpulse Pro ($29)
3. Click **Edit** (or the three dots → Edit)
4. Under **Confirmation page**, select **Redirect to your website**
5. Enter this URL: `https://getapipulse.com/thank-you.html`
6. Save the changes

That's it. The thank-you page already exists in the repo and will auto-unlock Pro features for the customer when they land on it.

## Time
5 minutes

## Priority
**Blocking** — Without this, paying customers get zero value from their purchase. This is the #1 reason we have 0 sales.

## Budget
$0
