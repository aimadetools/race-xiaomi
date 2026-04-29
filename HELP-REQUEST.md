# HELP REQUEST — Launch Execution (Week 2)

## What
Execute the APIpulse launch across free marketing channels. All content is written and ready — just needs posting.

## Priority: BLOCKING
We're in Week 2 of 12 with zero revenue. The site is built (98 pages, 63 blog posts, 32 models) but nobody knows about it. This is the #1 bottleneck.

## Tasks (in priority order)

### 1. Set Resend Environment Variables in Vercel — 5 min
**Why:** Enables welcome emails for subscribers. Without this, email signups work but users get no confirmation.

Steps:
1. Go to https://vercel.com → your project → Settings → Environment Variables
2. Add these 3 variables:
   - `RESEND_API_KEY` — Get a free key at https://resend.com (signup → API Keys → Create)
   - `EMAIL_FROM` — Set to `APIpulse <hello@getapipulse.com>` (or `onboarding@resend.dev` if domain not verified)
   - `ADMIN_SECRET` — Set to any random string (e.g. `apipulse-admin-2026-xyz`)
3. Redeploy the site (Vercel dashboard → Deployments → Redeploy latest)

**Cost:** $0 (Resend free tier = 3,000 emails/month)

### 2. Post on Reddit r/webdev — 10 min
**Why:** 1.2M developer members. Highest potential free traffic source.

Steps:
1. Go to https://reddit.com/r/webdev/submit
2. Title: `I built a free AI API cost calculator — compare GPT-5, Claude 4, Gemini pricing in one place`
3. Copy body from: `marketing/reddit-webdev.md` (already written, just paste)
4. Flair: "Showoff Saturday" or "Project"
5. Post on Tuesday-Thursday, 9-11 AM EST for best visibility
6. Reply to every comment within first 2 hours

### 3. Post on Hacker News (Show HN) — 5 min
**Why:** Developer-heavy audience, high-quality traffic.

Steps:
1. Go to https://news.ycombinator.com/submit
2. Title: `Show HN: APIpulse – Compare AI API pricing across 32 models and 10 providers`
3. URL: `https://getapipulse.com`
4. Immediately after posting, add the first comment from `marketing/hackernews-showhn.md`
5. Best time: Tuesday-Wednesday, 10 AM - 12 PM EST

### 4. Post Twitter Launch Thread — 10 min
**Why:** @getapipulse account exists. Thread content is ready.

Steps:
1. Log into @getapipulse on X/Twitter
2. Post the 7-tweet thread from `marketing/twitter-launch-thread.md`
3. Space tweets 2-3 minutes apart
4. Pin Tweet 1 to profile
5. Quote-tweet Tweet 1 from the account
6. Best time: Tuesday-Wednesday, 9-11 AM EST

### 5. Submit to Directories — 15 min
**Why:** Free backlinks, SEO value, ongoing traffic.

Steps:
1. Open `marketing/directory-submissions.md` — has 9 directories with pre-written descriptions
2. Submit to each directory listed
3. Most are free submissions

## Content Already Prepared
All marketing content is in the `marketing/` folder:
- `reddit-webdev.md` — Reddit r/webdev post
- `reddit-saas.md` — Reddit r/SaaS post
- `reddit-chatgptdev.md` — Reddit r/ChatGPTDev post
- `hackernews-showhn.md` — Hacker News Show HN post + follow-up comments
- `twitter-launch-thread.md` — 7-tweet launch thread
- `twitter-content-calendar.md` — 2-week content calendar
- `product-hunt.md` — Product Hunt launch (can do later)
- `directory-submissions.md` — 9 directory submissions

## Time Estimate
- Total: ~45 minutes
- You have 50 minutes remaining this week

## Budget Impact
$0 — all free channels

## Expected Outcome
- Reddit: 100-500 visits in first 24h (if post gets traction)
- Hacker News: 50-200 visits (if front page)
- Twitter: 20-50 visits per thread
- Directories: Ongoing SEO traffic over weeks
- Goal: First 100 visitors, first email signups, potential first Pro sale
