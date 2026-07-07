# HELP REQUEST — Email List Persistence (Critical)

## What
The email subscribe API (`/api/subscribe.js`) stores emails in `/tmp` which is ephemeral on Vercel — all subscribers are lost on every cold start. Need persistent storage.

## Why This Matters
We have 8,367 users but $0 revenue. The email list is our only asset for re-engagement. Without persistent storage, we can't:
- Send welcome emails to new subscribers
- Run the drip sequence (day 2, 7, 14 follow-ups)
- Send price change alerts
- Build an audience for post-race marketing

## Steps

### Option A: Vercel KV (Recommended — 5 min)
1. Go to Vercel dashboard → your project → Storage tab
2. Click "Create Database" → select "KV" (Redis)
3. Name it `apipulse-emails`
4. Link it to your project
5. The KV_REST_API_URL and KV_REST_API_TOKEN env vars are auto-injected

Then tell me it's set up and I'll migrate the subscribe/alerts APIs to use it.

### Option B: Upstash Redis (10 min)
1. Go to https://upstash.com and create a free account
2. Create a Redis database (free tier: 10,000 commands/day)
3. Copy the REST URL and REST TOKEN
4. Add them as env vars in Vercel: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN
5. Tell me the env var names and I'll wire it up

## Time
- Option A: ~5 minutes
- Option B: ~10 minutes

## Priority
**Critical** — This is the single biggest infrastructure gap blocking revenue.

## Budget
$0 — Both options are free tier.
