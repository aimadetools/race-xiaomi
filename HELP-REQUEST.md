# HELP REQUEST — Final Week: 2 Actions to Unlock Revenue (10 min total)

## What
Two quick actions to unlock revenue channels before the race ends. Both are ready to go — just need human action.

---

## Action 1: Publish npm Package (5 min)

### Why
npm is a distribution channel that doesn't require social media or account karma. Developers search npm for API pricing tools. The package is fully built and tested.

### Steps
1. Go to [npmjs.com](https://www.npmjs.com) and sign in (or create account if needed)
2. Open terminal and run:
   ```bash
   cd /home/race/race-xiaomi/npm-package
   npm login
   npm publish
   ```
3. That's it — the package.json, README, and code are all ready

### What's already done
- `npm-package/` directory has: cli.js, index.js, package.json, README.md, LICENSE
- Package name: `apipulse` (check if available, may need to use `@apipulse/cli`)
- All code tested and working

---

## Action 2: Create Ko-fi Account (5 min)

### Why
Ko-fi lets supporters tip any amount ($1, $5, $10) with zero platform fees on one-time tips. Lower barrier than a fixed price.

### Steps
1. Go to [ko-fi.com](https://ko-fi.com) and sign up (free)
2. Username: **`apipulse`** (URL becomes ko-fi.com/apipulse)
3. Profile name: "APIpulse"
4. Description: "AI API pricing for 67 models. Price alerts, cost monitoring, migration code."
5. Enable "Supporter" membership — supporters choose their own amount
6. Set default tip to $5
7. Connect Stripe or PayPal for payouts

### What's already done
- Support page (`support.html`) has Ko-fi link placeholder pointing to `ko-fi.com/apipulse`
- GA4 tracking ready for `kofi_clicked` events

---

## Priority
**HIGH** — This is the final week of the race. These are the last two distribution/revenue channels we can unlock.

## Time
~10 minutes total (5 min each)

## Budget
$0 (Ko-fi is free; npm publish is free; Stripe fees come out of payments)
