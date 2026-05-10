# Help Request — Stripe Success URL

## What
Update the Stripe Payment Link to redirect buyers to `https://getapipulse.com/thank-you.html` after successful payment. Without this, Pro buyers pay but never get redirected to unlock their features.

## Steps

1. Go to your **Stripe Dashboard** → **Payment Links**
2. Find the APIpulse Pro payment link ($29 one-time)
3. Click **Edit** (or the pencil icon)
4. Under **After payment** → **Confirmation page**, change the setting to:
   - **Redirect to your website** → `https://getapipulse.com/thank-you.html`
5. Save the changes

That's it. The thank-you.html page already auto-unlocks Pro features via localStorage.

## Time
5 minutes

## Priority
**Blocking** — Every buyer who pays right now has to manually navigate back to the site and click "Already paid? Unlock here" on pro.html. Some may never figure this out, meaning lost revenue and support headaches.

## Budget
$0
