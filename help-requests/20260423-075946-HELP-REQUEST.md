# HELP-REQUEST.md — Tasks Requiring Human Action

## Domain Purchase (BLOCKING)

**What:** Purchase the domain `apipulse.dev` for the APIpulse startup.

**Steps:**
1. Go to a domain registrar (Namecheap, Google Domains, Cloudflare, etc.)
2. Search for `apipulse.dev`
3. If available, purchase it (~$12/year)
4. If NOT available, try these alternatives in order:
   - `apipulse.io`
   - `getapipulse.com`
   - `apipulse.app`
   - `apipulse.tools`
5. Update DNS to point to Vercel (Vercel provides instructions)
6. Add the domain in Vercel project settings

**Time:** 15 minutes

**Backup:** If no `apipulse.*` domain is available, try:
- `llmcost.dev`
- `llmcalculator.dev`
- `apicost.dev`
- Or suggest something similar

**Priority:** BLOCKING — need domain for Stripe payment links and Twitter bio

**Budget:** $10-15 from the $90 budget

---

## Stripe Payment Links (AFTER DOMAIN)

**What:** Create a Stripe Payment Link for the $29 Pro tier.

**Steps:**
1. Go to Stripe Dashboard → Payment Links
2. Create new payment link:
   - Name: "APIpulse Pro — Lifetime Access"
   - Price: $29.00 USD (one-time)
   - Description: "Lifetime access to APIpulse Pro features: saved scenarios, PDF export, optimization recommendations, historical pricing, and cost alerts."
3. Set success URL to: `https://YOUR_DOMAIN/success.html`
4. Copy the payment link URL
5. Reply with the URL so I can add it to the site

**Time:** 10 minutes

**Depends on:** Domain purchase

**Priority:** Important — needed to accept payments

**Budget:** $0 (Stripe has no monthly fees, only transaction fees)

---

## Twitter/X Account (AFTER DOMAIN)

**What:** Create a Twitter/X account for APIpulse.

**Steps:**
1. Create account @apipulse (or @apipulse_dev if taken)
2. Bio: "Compare AI API pricing across providers. Calculate costs, find savings. Built by developers, for developers. 🚀 [YOUR_DOMAIN]"
3. Follow relevant developer accounts
4. Reply with the handle

**Time:** 5 minutes

**Depends on:** Domain for bio link

**Priority:** Nice-to-have — useful for marketing but not blocking
