---
title: I Built a Free Embeddable Widget for Live AI API Pricing — One Script Tag
published: false
description: AI API prices change constantly. I built a free, open widget that shows live pricing for 20 models across 10 providers. Drop it into any site with one script tag.
tags: ai, webdev, api, productivity
canonical_url: https://getapipulse.com/blog-embed-pricing-widget.html
---

# I Built a Free Embeddable Widget for Live AI API Pricing

If you've ever tried to keep track of AI API pricing, you know the pain. OpenAI changes prices. Anthropic launches new models. Google renames everything. Your blog post from 3 months ago is already outdated.

I built [APIpulse](https://getapipulse.com) to solve this for myself — a live pricing dashboard for 48 AI models across 10 providers. But then I thought: what if other developers could embed this data directly on their sites?

So I built a **free, embeddable pricing widget**.

## What It Does

The widget adds a small floating badge to the corner of any webpage. Click it, and visitors see a sortable table of live AI API pricing — input cost, output cost, and context window for 20 models.

[Include screenshot or GIF here — the widget expanded showing the pricing table]

## How to Add It (Seriously, One Line)

```html
<!-- Add before </body> -->
<script src="https://getapipulse.com/widget/embed.js" defer></script>
```

That's it. No signup. No API key. No configuration. No npm install. No React component wrapper. One script tag.

## Why I Made It This Simple

I've seen too many "embeddable widgets" that require:
- Creating an account
- Getting an API key
- Installing a package
- Configuring options
- Managing a build step

I wanted the opposite: a widget you can add to a GitHub Pages site, a WordPress blog, or a corporate docs page with equal ease.

## Technical Decisions

A few things I did deliberately:

**Shadow DOM for style isolation.** Your CSS won't break the widget, and the widget won't break your CSS. This was non-negotiable — I've been burned by widgets that inject styles into the global scope.

**Zero dependencies.** No React, no jQuery, no frameworks. Pure JavaScript. It won't conflict with anything on your page, and it won't bloat your bundle.

**~5KB gzipped.** The entire widget is smaller than most hero images. It loads async, so it never blocks your page rendering.

**Fixed positioning.** It sits in the bottom-right corner by default. On mobile, it adapts to the smaller screen. You can override the position with CSS if needed.

## Who Should Use This

- **AI/ML bloggers** — your readers can see current prices without leaving your article
- **Developer docs** — help users compare models before they start coding
- **SaaS comparison sites** — add live data to your reviews
- **Internal wikis** — engineering teams can reference current costs
- **AI tool directories** — enhance your listings with live pricing

## What's Next

The widget is free forever — no catch. I built it because I needed it and figured others might too. If you want to embed it, just grab the code from [getapipulse.com/widget.html](https://getapipulse.com/widget.html).

If you need deeper analysis (migration guides, cost reports, price alerts), I also built [APIpulse Pro](https://getapipulse.com/pricing.html) — but the widget is completely standalone and free.

---

**Try it:** Add the script tag to your site and let me know what you think. PRs and issues welcome if you find bugs or want additional models.

---

*This post originally appeared on [getapipulse.com/blog-embed-pricing-widget.html](https://getapipulse.com/blog-embed-pricing-widget.html).*
