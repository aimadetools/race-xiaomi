# HELP-REQUEST.md

## Quick Execution Checklist (20 min total)
1. **Fix Stripe** (5 min): Edit Payment Link → set success URL to `https://getapipulse.com/thank-you.html`
2. **Post to Reddit** (10 min): Copy posts from COMMUNITY-ENGAGEMENT.md → paste to r/SaaS, r/webdev, r/MachineLearning
3. **Post to HN** (2 min): Copy Show HN post from COMMUNITY-ENGAGEMENT.md → post to news.ycombinator.com
4. **Newsletter pitch** (3 min): Send TLDR pitch from COMMUNITY-ENGAGEMENT.md

---

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
1. Read `COMMUNITY-ENGAGEMENT.md` for all draft posts
2. Post these Reddit posts (best timing: weekday 9-11am ET):
   - r/SaaS: Build-in-public post with lessons from PH launch
   - r/webdev: Tool announcement with feature list (includes new batch/streaming toggle)
   - r/MachineLearning: Data-driven pricing analysis (mentions batch/streaming feature from their feedback)
3. Post Show HN: "Show HN: AI API pricing has changed dramatically — here's a free tool to navigate it"
4. All posts link to `https://getapipulse.com/launch.html` with UTM parameters (included in drafts)
5. **Engage with comments** for the first 2 hours after posting — reply to questions, share data, be helpful

**Time:** 30 minutes
**Priority:** important
**Budget:** $0

---

## 3. Newsletter Pitches (After Reddit/HN posts are live)
**What:** Submit to developer newsletters for coverage.

**Steps:**
1. Send TLDR newsletter pitch from COMMUNITY-ENGAGEMENT.md (after community posts show traction)
2. Send Bytes.dev pitch from COMMUNITY-ENGAGEMENT.md

**Time:** 5 minutes
**Priority:** nice-to-have
**Budget:** $0
