# Community Engagement Playbook

## Target Communities

### Reddit (highest priority)
| Subreddit | Audience | Best Content | Post Style |
|-----------|----------|--------------|------------|
| r/SaaS | SaaS founders, indie hackers | PH launch story, cost savings | "Show" posts, honest journey |
| r/webdev | Web developers | Calculator tool, comparison tables | "I built this" + link |
| r/artificial | AI enthusiasts | Pricing trends, model comparisons | Data-driven analysis |
| r/LocalLLaMA | Self-hosters, open-source | Open-source vs commercial pricing | Technical comparison |
| r/startups | Early-stage founders | $100 budget challenge, PH lessons | Journey posts |
| r/MachineLearning | ML engineers | Pricing data, cost optimization | Research/data posts |

### Hacker News
- **Show HN**: "Show HN: Free AI API cost calculator — 33 models, 10 providers"
- **Best timing**: Tuesday-Thursday, 9-11am ET
- **Angle**: Technical depth, no marketing fluff

### Discord/Slack
- AI/ML Discord servers
- Indie Hackers community
- Dev communities (Reactiflux, etc.)

---

## Content Angles (ranked by engagement potential)

### 1. Pricing Data Insights (highest share potential)
**Hook**: "Grok 3 just jumped 10x. Here's what it means for your AI budget."
- Share specific pricing changes with context
- Link to full analysis blog post
- Works on: r/artificial, r/MachineLearning, HN

### 2. Cost Optimization Tips
**Hook**: "How to cut your AI API bill by 40% (real numbers)"
- Concrete savings examples
- Model routing strategy
- Works on: r/SaaS, r/webdev, r/startups

### 3. Build in Public / Launch Story
**Hook**: "I built an AI pricing tool in 2 weeks and launched on PH. Here's what happened."
- Honest numbers, lessons learned
- Works on: r/SaaS, r/startups, Indie Hackers

### 4. Tool Announcements
**Hook**: "Free tool: Compare AI API costs across 33 models"
- Direct value proposition
- Works on: r/webdev, r/SaaS

---

## Draft Posts

### Reddit r/SaaS — Build in Public
**Title**: "I built a free AI API cost calculator in 2 weeks — lessons from launching on Product Hunt"

I was tired of manually comparing Claude vs GPT pricing in spreadsheets. So I built APIpulse — a free tool that compares 33 AI models across 10 providers.

What I learned:
- SEO content before launch = organic traffic on day one
- Free tools are the best marketing (developers bookmark and return)
- Pricing data freshness matters more than I expected
- Reddit r/SaaS feedback shaped the product (added pricing freshness badge after u/dev_startup_grind's comment)

Tech stack: Static HTML + Vercel. No backend. All calculations in JavaScript.

The tool is free: https://getapipulse.com

Happy to answer questions about the build process or the PH launch.

### Reddit r/webdev — Tool Announcement
**Title**: "Free tool: AI API cost calculator — compare 33 models from OpenAI, Anthropic, Google, and more"

I built a calculator that lets you estimate monthly AI API costs across providers. Features:
- 33 models, 10 providers
- Interactive calculator with presets (coding, research, chatbot, data analysis)
- Provider comparison table
- Cost-per-request breakdown

It's completely free, no signup required: https://getapipulse.com

Would love feedback on what features would be most useful.

### Hacker News — Show HN
**Title**: "Show HN: AI API Cost Calculator – Compare 33 Models Across 10 Providers"

Built a free tool to help developers estimate and compare AI API costs. Supports OpenAI, Anthropic, Google, DeepSeek, Mistral, and more.

Key features:
- Interactive monthly cost calculator
- Side-by-side model comparison
- Cost optimization recommendations
- 83 in-depth pricing guides

All static (HTML/JS), no backend, no signup. Deployed on Vercel.

URL: https://getapipulse.com

---

## Engagement Guidelines

1. **Be helpful first** — Answer questions, share knowledge. Don't just drop links.
2. **Be honest** — Share real numbers, admit mistakes. Authenticity builds trust.
3. **Don't spam** — One post per community per week max. Engage in comments.
4. **Add value** — Every post should teach something or solve a problem.
5. **Follow community rules** — Read sidebar rules before posting. Some subs have "Show" days.

## Timing
- **Reddit**: Weekday mornings (9-11am ET) for technical subs
- **HN**: Tuesday-Thursday, 9-11am ET
- **Discord**: Varies by community

## Tracking
Use GA4 to track referral traffic from each community:
- `utm_source=reddit&utm_medium=post&utm_campaign=r_saas`
- `utm_source=hn&utm_medium=show_hn`
