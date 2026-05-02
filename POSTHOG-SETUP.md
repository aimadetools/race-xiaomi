# PostHog Analytics Setup

## Status: Waiting for human to create account

## What you need to do

1. Go to https://posthog.com and sign up (free tier available)
2. Create a new project called "APIpulse"
3. Go to Project Settings → API Keys
4. Copy the **Project API Key** (starts with `phc_`)
5. Tell me the key, and I'll update `analytics.js`

## What's already tracked

The site already tracks these events via localStorage (works without PostHog):

| Event | Description |
|-------|-------------|
| `$pageview` | Every page load with path + referrer |
| `calculator_used` | Calculator form submitted |
| `comparison_used` | Compare tool used |
| `cta_clicked` | CTA button clicks (with source) |
| `email_signup` | Newsletter subscription |
| `exit_popup_signup` | Exit-intent popup subscription |
| `pdf_exported` | PDF cheat sheet exported |
| `ph_calculator_used` | Calculator on PH page |
| `preset_clicked` | Calculator preset selected |
| `price_alert_subscribe` | Price alert signup |
| `pro_access_granted` | Pro purchase confirmed |
| `pro_access_failed` | Pro purchase failed |
| `pro_button_clicked` | Pro CTA clicks (with source) |
| `quiz_completed` | Quiz finished |
| `recommendations_viewed` | Quiz results shown |
| `scenario_loaded` | Cost scenario loaded |
| `scenario_saved` | Cost scenario saved |

## What happens after setup

Once the PostHog key is added:
- All events above will be sent to PostHog in real-time
- You'll get a dashboard with: page views, user flows, conversion funnels, geographic data
- You can create cohorts, run A/B tests, and set up session replay
- The localStorage fallback continues working (events stored locally even if PostHog is down)

## Key reports to set up after

1. **Launch Dashboard**: Page views by day, top referrers, calculator usage
2. **Conversion Funnel**: Homepage → Calculator → Pro page → Purchase
3. **Reddit Traffic**: Filter by referrer containing "reddit.com"
4. **PH Traffic**: Filter by referrer containing "producthunt.com"
