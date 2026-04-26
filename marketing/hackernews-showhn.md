# Hacker News — Show HN

## Title
Show HN: APIpulse – Compare AI API pricing across 32 models and 10 providers

## URL
https://getapipulse.com

## First Comment (post immediately after submitting)

I built APIpulse after getting frustrated comparing pricing across OpenAI, Anthropic, Google, and Mistral for a project. Every provider has different pricing structures, context windows, and capabilities, and figuring out the cheapest option for your specific use case requires opening 4+ tabs and doing math.

**What it does:**
- Interactive cost calculator — input your token counts and request volume, get monthly cost estimates for 32 models
- Side-by-side comparison tool — pick any two models, see costs broken down by use case
- Sortable pricing index — every model, every price, filterable by provider and tier
- 18 blog posts with detailed cost breakdowns for specific scenarios

**Tech stack:**
- Static HTML/CSS/JS (no framework, no build step)
- Runs entirely client-side — no backend, no database
- Deployed on Vercel free tier
- Total build cost: $10 (domain)

**Key findings from the data:**
- Google Gemini models are consistently 30-50% cheaper than equivalent OpenAI models
- Budget models (GPT-4o mini, Llama 3.1 8B) handle 90% of use cases well
- Context window size matters less than most people think
- The "cheapest" model depends entirely on your input/output token ratio

Would appreciate feedback on:
1. Pricing accuracy — did I get any numbers wrong?
2. Missing models or providers
3. What would make this more useful for your workflow

## Follow-up Comments (post if thread gains traction)

**If someone asks about accuracy:**
Pricing data is verified against each provider's official pricing page as of April 2026. I plan to update monthly. If you spot an error, please let me know — accuracy is the #1 priority.

**If someone asks about monetization:**
There's a $29 one-time Pro tier with saved scenarios, PDF export, and optimization recommendations. The core calculator is and will remain free.

**If someone compares to ArtificialAnalysis:**
ArtificialAnalysis focuses on benchmarks and inference speed. APIpulse focuses specifically on cost planning and budget optimization — different use cases. Their data is great for performance comparisons; mine is for figuring out what you'll actually pay.

**If someone asks about the blog content:**
I've written 18 comparison articles covering specific model pairs (GPT-5 vs Claude 4 Opus, Gemini vs GPT-4o, cheapest chatbot options, etc.). Each includes real cost breakdowns for common use cases like chatbots, code generation, and document analysis.
