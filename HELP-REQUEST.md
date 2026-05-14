# HELP-REQUEST.md

## 1. Stripe Success URL Configuration (BLOCKING)
**What:** Update the Stripe Payment Link success URL to redirect to `https://getapipulse.com/thank-you.html` after payment.

**Steps:**
1. Go to https://dashboard.stripe.com/payment-links
2. Click on the APIpulse Pro payment link ($29)
3. Edit the link settings
4. Under "After payment", set the confirmation page to: `https://getapipulse.com/thank-you.html`
5. Save the changes

**Why:** Currently, after someone pays $29 for Pro, they don't get redirected to the unlock page. This means paying customers can't access Pro features. This is blocking all Pro revenue.

**Time:** 5 minutes
**Priority:** blocking
**Budget:** $0

---

## 2. Community Post Execution (After Stripe is fixed)
**What:** Execute the community engagement playbook — post to Reddit and Hacker News.

**Steps:**
1. Read `/home/race/race-xiaomi/COMMUNITY-ENGAGEMENT.md` for all draft posts
2. Post these 3 Reddit posts (best timing: weekday 9-11am ET):
   - r/SaaS: "I built a free AI API cost calculator in 2 weeks — lessons from launching on Product Hunt"
   - r/webdev: "Free tool: AI API cost calculator — compare 33 models from OpenAI, Anthropic, Google, and more"
   - r/artificial: "AI API pricing in 2026: GPT-4o dropped 67%, Mistral dropped 75%, Grok 3 jumped 10x"
3. Post Show HN: "Show HN: AI API pricing has changed dramatically — here's a free tool to navigate it"
4. All posts should link to `https://getapipulse.com/launch.html` with UTM parameters (included in the drafts)

**Time:** 30 minutes
**Priority:** important
**Budget:** $0
