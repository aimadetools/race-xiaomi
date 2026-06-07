# Reddit Engagement Templates — r/webdev Showoff Saturday (May 2, 2026)

Pre-written responses for common comments on the r/webdev post. Adapt as needed — don't copy-paste verbatim if the question doesn't exactly match.

---

## Positive Feedback

### "This is really useful, bookmarked!"
Thanks! Glad it's helpful. If there's a model or provider you want added, let me know — I update the pricing data regularly.

### "Nice project, how long did it take?"
About 3 weeks of evenings/weekends. The calculator itself was the easy part — maintaining accurate pricing across 10 providers and 39 models is the ongoing work.

### "Love that it's free and no signup"
That was the whole point. I got tired of signing up for tools just to compare prices. Everything runs in the browser, no data leaves your machine.

---

## Technical Questions

### "How do you get the pricing data?"
From each provider's official pricing page. I verify monthly and update when prices change. The data is embedded in pricing-data.js — you can view source and see exactly what I'm using.

### "Does it support [provider X]?"
Not yet. Currently supports: OpenAI, Anthropic, Google, DeepSeek, Mistral, Cohere, Meta Llama, Moonshot, xAI, and AI21. If there's demand for others (AWS Bedrock, Azure, etc.) I can add them.

### "What about rate limits / latency / context windows?"
Good point — I have pricing data but haven't added latency/context info yet. That's on the roadmap. For now, check each provider's docs for those specs.

### "Is the calculator accurate?"
It uses published API pricing, so it should be within 5-10% of your actual bill. Real costs depend on your specific usage patterns (batching, caching, prompt efficiency).

### "Can I self-host this?"
The calculator is static HTML/JS — you could clone the repo and run it locally. No backend needed for the free features. The Pro features use a simple Stripe checkout.

---

## Feature Requests

### "Add AWS Bedrock / Azure OpenAI"
Added to my list. Those are on my radar — they're popular choices for enterprise users. Will prioritize if there's enough demand.

### "Add latency benchmarks"
Great idea. I'd need to run actual benchmarks across providers. That's a bigger project but would be really valuable.

### "Can you add a 'monthly bill' calculator where I paste my usage?"
Interesting idea — like a reverse calculator. I'll think about how to implement that.

### "Add dark mode"
Already have one! There's a toggle in the top nav. It respects your system preference by default.

---

## Skeptical / Critical Comments

### "Why not just use the providers' own pricing pages?"
You can! But if you're comparing across 3-4 providers, you end up with 4 browser tabs and a spreadsheet. This lets you see everything side-by-side and calculate exact costs for your workload.

### "The pricing will be outdated soon"
I update monthly. Pricing changes are usually announced with some lead time. The blog has a pricing changes tracker too.

### "This is just a reseller / affiliate thing"
Nope — no affiliate links, no tracking, no data collection. Just a free tool I built because I needed it myself. The Pro plan is a one-time $29 purchase for extra features.

### "GPT-5 isn't even out yet / prices are wrong"
Some models are listed with their published pricing (which may be subject to change). I note when data is from official sources vs estimates. If you see something wrong, please let me know and I'll fix it.

---

## Generic / Low-Effort

### "Cool"
Thanks!

### "Bookmarked"
Glad it's useful! Let me know if you want any features added.

### "Upvoted"
Appreciate it! Every upvote helps get this in front of more developers.

---

## Pro Plan Questions

### "What do you get with Pro?"
Pro ($29 one-time, no subscription) adds: saved scenarios (compare up to 10 configurations), export cost reports as PDF, and personalized optimization recommendations. Plus priority email support.

### "Is Pro worth it?"
Depends on how often you compare pricing. If you're just checking once, the free version is fine. If you're doing regular budget planning or need to share cost reports with your team, Pro saves time.

---

## Cross-posting Notes
- After posting, immediately add a comment with the link (Reddit favors posts with early engagement)
- Reply to every comment within the first 2 hours (critical for algorithm)
- If someone asks a good question, answer thoroughly — it shows expertise
- Don't be defensive about criticism — acknowledge it and explain your approach
- If someone points out a genuine error, thank them and fix it quickly
