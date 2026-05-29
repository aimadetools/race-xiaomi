#!/usr/bin/env python3
"""Add FAQPage schema to 20 high-value blog posts (batch 4)."""
import re
import os

FAQ_SCHEMAS = {
    "blog-claude-code-cost.html": [
        ("How much does Claude Code cost?", "Claude Code uses the Anthropic API directly. With Claude Sonnet 4 ($3/$15), typical coding sessions cost $0.50-$2.00 per hour depending on usage."),
        ("Is Claude Code cheaper than GitHub Copilot?", "Claude Code costs more per request but offers superior code quality for complex tasks. GitHub Copilot at $10/month is cheaper for simple code completion. For complex refactoring, Claude Code provides better value."),
        ("Which AI coding assistant is the cheapest?", "GitHub Copilot ($10/month) is the cheapest for simple code completion. For API-based coding, DeepSeek V4 Pro ($0.44/$0.87) offers the best value for code generation tasks."),
    ],
    "blog-context-windows-2026.html": [
        ("What is the largest context window in 2026?", "Google Gemini 3.1 Pro offers the largest context window at 10M tokens. Claude Opus 4.7 and Gemini 3 Pro offer 1M tokens. Most models offer 128K-200K tokens."),
        ("Do I need a large context window?", "Most use cases work fine with 128K-200K tokens. You need 1M+ tokens only for very long document analysis, large codebase understanding, or extensive conversation histories."),
        ("How much does long context cost?", "Long context costs more per request due to higher token counts. A 1M token request on Gemini 3 Pro costs approximately $2 input + $12 output. Use smaller contexts when possible to save costs."),
    ],
    "blog-cost-calculator-budget-planning.html": [
        ("How do I calculate AI API costs?", "Use APIpulse's free cost calculator: input your expected tokens per request, requests per month, and preferred model. The calculator shows your estimated monthly cost across all major providers."),
        ("How do I plan my AI budget?", "Start by estimating your monthly request volume, choose a model based on quality needs, and calculate costs using a cost calculator. Add 20-30% buffer for unexpected usage growth."),
        ("What is the cheapest way to estimate AI costs?", "Use APIpulse's free cost calculator to compare 34 models from 10 providers. Enter your usage pattern and get instant cost comparisons to find the cheapest option for your workload."),
    ],
    "blog-cost-per-request.html": [
        ("How do I calculate cost per request?", "Multiply input tokens by input price, output tokens by output price, then add them. A typical request (1K input, 500 output) on GPT-5 costs approximately $0.00625."),
        ("Which model has the lowest cost per request?", "DeepSeek V4 Flash has the lowest cost per request at approximately $0.00028 for a typical request. Gemini 2.5 Flash is also very affordable at approximately $0.000225."),
        ("How do I reduce cost per request?", "Use shorter prompts, reduce output length, switch to a cheaper model, implement caching for repeated queries, and batch requests when possible."),
    ],
    "blog-deepseek-v4-pricing.html": [
        ("How much does DeepSeek V4 Flash cost?", "DeepSeek V4 Flash costs $0.14 per 1M input tokens and $0.28 per 1M output tokens. It is up to 93% cheaper than Claude Haiku."),
        ("Is DeepSeek V4 Flash good enough for production?", "Yes, DeepSeek V4 Flash handles most production workloads well, including chatbots, classification, and summarization. For complex reasoning, consider DeepSeek V4 Pro ($0.44/$0.87)."),
        ("How does DeepSeek compare to OpenAI and Anthropic?", "DeepSeek is significantly cheaper than OpenAI and Anthropic models. Quality is competitive for most tasks, though premium models like GPT-5 and Claude Opus still lead on complex reasoning."),
    ],
    "blog-deepseek-vs-claude-code.html": [
        ("How much does DeepSeek V4 Pro cost for coding?", "DeepSeek V4 Pro costs $0.44 per 1M input tokens and $0.87 per 1M output tokens. A typical coding session costs $0.05-$0.20."),
        ("How does DeepSeek compare to Claude for code generation?", "Claude Sonnet 4.6 produces higher quality code for complex tasks but costs 7x more. DeepSeek V4 Pro handles most coding tasks well at a fraction of the cost."),
        ("Can I use both DeepSeek and Claude together?", "Yes, a hybrid strategy uses DeepSeek for routine code generation and Claude for complex refactoring. This approach saves 80% compared to using Claude for all tasks."),
    ],
    "blog-embedding-model-rag.html": [
        ("What is the best embedding model for RAG?", "OpenAI text-embedding-3-small ($0.02/1M tokens) offers the best balance of cost and quality for most RAG applications. For free alternatives, use BGE or sentence-transformers."),
        ("How much do embedding models cost?", "Commercial embedding APIs cost $0.02-$0.10 per 1M tokens. Self-hosted models like BGE are free but require compute resources. For most workloads, commercial APIs are more cost-effective."),
        ("Which embedding model is cheapest?", "OpenAI text-embedding-3-small at $0.02/1M tokens is the cheapest commercial option. For free alternatives, use sentence-transformers or BGE models self-hosted."),
    ],
    "blog-embedding-pricing.html": [
        ("How much do embedding APIs cost?", "OpenAI text-embedding-3-small costs $0.02/1M tokens, Cohere embed-v3 costs $0.10/1M tokens, and Google text-embedding costs $0.025/1M tokens."),
        ("Which embedding API is cheapest?", "OpenAI text-embedding-3-small at $0.02/1M tokens is the cheapest. Google text-embedding is close at $0.025/1M tokens."),
        ("Are cheaper embedding models as good?", "OpenAI's cheapest model offers excellent quality for most use cases. More expensive models like Cohere offer marginal quality improvements that may not justify the cost for typical applications."),
    ],
    "blog-embed-pricing-widget.html": [
        ("What is the APIpulse pricing widget?", "The APIpulse pricing widget is an embeddable script that displays live AI API pricing tables, badges, and comparison charts on your website. It auto-updates with the latest pricing data."),
        ("How do I add AI pricing tables to my site?", "Add one script tag to your HTML: <script src=\"https://getapipulse.com/pricing-widget.js\"></script>. The widget automatically displays pricing for 34 models from 10 providers."),
        ("Is the pricing widget free?", "Yes, the APIpulse pricing widget is free to embed. It displays accurate, auto-updating pricing data for all major AI API providers."),
    ],
    "blog-estimate-costs.html": [
        ("How do I estimate AI API costs before shipping?", "Estimate your monthly request volume, multiply by expected tokens per request, then multiply by the model's per-token price. Add 20-30% buffer for growth."),
        ("What is the cheapest way to estimate AI costs?", "Use APIpulse's free cost calculator to compare models based on your expected usage. Input your tokens per request and monthly volume for instant estimates."),
        ("How accurate are AI cost estimates?", "Estimates are typically 70-80% accurate. The biggest variable is actual usage patterns. Start with conservative estimates and adjust based on real usage data after launch."),
    ],
    "blog-estimate-tokens.html": [
        ("How do I count tokens in text?", "Use your provider's tokenizer or a library like tiktoken (OpenAI). As a rule of thumb, 1 token ≈ 4 characters or 0.75 words in English."),
        ("How many tokens is a typical request?", "A typical chatbot request uses 200-500 input tokens and 100-300 output tokens. Document analysis can use 1K-10K tokens depending on document length."),
        ("How do I estimate tokens for budgeting?", "Multiply your expected word count by 1.3 to estimate tokens. For 1000 words, expect approximately 1300 tokens. Add 20% buffer for system prompts and formatting."),
    ],
    "blog-gemini-flash-lite-vs-deepseek-flash.html": [
        ("How much does Gemini 2.0 Flash Lite cost?", "Gemini 2.0 Flash Lite costs $0.075 per 1M input tokens and $0.30 per 1M output tokens."),
        ("How much does DeepSeek V4 Flash cost?", "DeepSeek V4 Flash costs $0.14 per 1M input tokens and $0.28 per 1M output tokens."),
        ("Which is cheaper, Gemini Flash Lite or DeepSeek Flash?", "Gemini Flash Lite is cheaper on input ($0.075 vs $0.14), while DeepSeek Flash is cheaper on output ($0.28 vs $0.30). For input-heavy workloads, Gemini is cheaper overall."),
    ],
    "blog-gpt4o-mini-vs-deepseek-flash.html": [
        ("How much does GPT-4o mini cost?", "GPT-4o mini costs $0.15 per 1M input tokens and $0.60 per 1M output tokens."),
        ("How much does DeepSeek V4 Flash cost?", "DeepSeek V4 Flash costs $0.14 per 1M input tokens and $0.28 per 1M output tokens. It is cheaper than GPT-4o mini, especially on output."),
        ("Which is better, GPT-4o mini or DeepSeek Flash?", "DeepSeek V4 Flash is cheaper on both input and output. GPT-4o mini has better ecosystem support and documentation. Choose DeepSeek for cost savings, GPT-4o mini for OpenAI ecosystem integration."),
    ],
    "blog-gpt4o-mini-vs-flash.html": [
        ("How much does GPT-4o mini cost?", "GPT-4o mini costs $0.15 per 1M input tokens and $0.60 per 1M output tokens."),
        ("How much does Gemini 2.0 Flash cost?", "Gemini 2.0 Flash costs $0.075 per 1M input tokens and $0.30 per 1M output tokens. It is cheaper than GPT-4o mini."),
        ("Which is better, GPT-4o mini or Gemini Flash?", "Gemini Flash is cheaper and faster. GPT-4o mini has better ecosystem support. Both offer similar quality for most tasks. Choose based on your provider preference."),
    ],
    "blog-gpt4o-mini-vs-haiku-cost-per-request.html": [
        ("How much does GPT-4o mini cost per request?", "GPT-4o mini costs approximately $0.00033 per typical request (1K input, 500 output tokens)."),
        ("How much does Claude Haiku 4.5 cost per request?", "Claude Haiku 4.5 costs approximately $0.0025 per typical request — about 7.6x more than GPT-4o mini."),
        ("Is GPT-4o mini as good as Haiku?", "GPT-4o mini offers better value at 7.6x lower cost. Haiku may have an edge on certain reasoning tasks, but GPT-4o mini handles most use cases well."),
    ],
    "blog-gpt4o-mini-vs-haiku.html": [
        ("How much does GPT-4o mini cost?", "GPT-4o mini costs $0.15 per 1M input tokens and $0.60 per 1M output tokens."),
        ("How much does Claude Haiku 4.5 cost?", "Claude Haiku 4.5 costs $1 per 1M input tokens and $5 per 1M output tokens. It is significantly more expensive than GPT-4o mini."),
        ("Which is better for budget workloads?", "GPT-4o mini offers much better value at $0.15/$0.60 vs Haiku at $1/$5. For most budget workloads, GPT-4o mini is the better choice."),
    ],
    "blog-gpt5-api-cost-calculator.html": [
        ("How much does GPT-5 cost?", "GPT-5 costs $1.25 per 1M input tokens and $10 per 1M output tokens. GPT-5 Mini costs $0.25/$2, and GPT-4o Mini costs $0.15/$0.60."),
        ("How do I calculate GPT-5 API costs?", "Use APIpulse's free GPT-5 cost calculator. Input your expected tokens per request and monthly volume to get accurate cost estimates across all GPT-5 model variants."),
        ("Which GPT-5 model is cheapest?", "GPT-4o Mini ($0.15/$0.60) is the cheapest GPT-5 ecosystem model. GPT-5 Mini ($0.25/$2) offers better quality at a moderate price increase."),
    ],
    "blog-gpt5-mini-cost-breakdown.html": [
        ("How much does GPT-5 Mini cost?", "GPT-5 Mini costs $0.25 per 1M input tokens and $2.00 per 1M output tokens."),
        ("What is the cost per request for GPT-5 Mini?", "A typical GPT-5 Mini request (1K input, 500 output) costs approximately $0.00125 — about 5x cheaper than full GPT-5."),
        ("How does GPT-5 Mini compare to alternatives?", "GPT-5 Mini ($0.25/$2) is cheaper than Claude Haiku ($1/$5) but more expensive than DeepSeek V4 Flash ($0.14/$0.28). It offers good quality at a moderate price."),
    ],
    "blog-gpt5-mini-vs-claude4-haiku.html": [
        ("How much does GPT-5 Mini cost?", "GPT-5 Mini costs $0.25 per 1M input tokens and $2.00 per 1M output tokens."),
        ("How much does Claude 4 Haiku cost?", "Claude 4 Haiku costs $1 per 1M input tokens and $5 per 1M output tokens. It is more expensive than GPT-5 Mini."),
        ("Which is better for budget workloads?", "GPT-5 Mini offers better value at $0.25/$2 vs Claude 4 Haiku at $1/$5. Both handle most budget workloads well."),
    ],
    "blog-gpt-oss-vs-llama4.html": [
        ("What is GPT-oss?", "GPT-oss is OpenAI's open-source model family, available for self-hosting or via API providers. It offers OpenAI-quality models at lower costs than proprietary APIs."),
        ("How much does GPT-oss cost?", "GPT-oss is free to self-host. Via API providers like Together AI and Fireworks, pricing ranges from $0.20-$0.90 per 1M tokens depending on the model size."),
        ("Is GPT-oss or Llama 4 better?", "Both are excellent open-source models. GPT-oss benefits from OpenAI's training methodology. Llama 4 from Meta offers a larger community and more fine-tuned variants. Choose based on your specific needs."),
    ],
}

TEMPLATE = '''    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {items}
        ]
    }}
    </script>'''

def make_question(q, a):
    return '''                {
                        "@type": "Question",
                        "name": "''' + q.replace('"', '\\"') + '''",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "''' + a.replace('"', '\\"') + '''"
                        }
                }'''

def add_faq_to_file(filepath, faqs):
    with open(filepath, 'r') as f:
        content = f.read()

    style_match = re.search(r'\n\s*<style>', content)
    if not style_match:
        print(f"  WARNING: Could not find <style> in {filepath}")
        return False

    before_style = content[:style_match.start()]
    last_script_close = before_style.rfind('</script>')
    if last_script_close == -1:
        print(f"  WARNING: Could not find </script> before <style> in {filepath}")
        return False

    items = ',\n'.join(make_question(q, a) for q, a in faqs)
    faq_block = TEMPLATE.format(items=items)

    insert_point = last_script_close + len('</script>')
    new_content = content[:insert_point] + '\n' + faq_block + content[style_match.start():]

    with open(filepath, 'w') as f:
        f.write(new_content)
    return True

if __name__ == '__main__':
    os.chdir('/home/race/race-xiaomi')
    count = 0
    for filename, faqs in FAQ_SCHEMAS.items():
        print(f"Processing {filename}...")
        if add_faq_to_file(filename, faqs):
            count += 1
            print(f"  Added {len(faqs)} FAQ entries")
        else:
            print(f"  FAILED")
    print(f"\nDone: {count}/{len(FAQ_SCHEMAS)} files updated")
