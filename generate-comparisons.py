#!/usr/bin/env python3
"""Generate missing high-value comparison pages for GPT-5.6 Sol and other key models."""

import json
import os

# Load pricing data
with open('data/pricing.json') as f:
    pricing = json.load(f)

models = {m['id']: m for m in pricing.get('models', [])}

# Define comparisons to create: (model_a_id, model_b_id, tier_badge, slug)
COMPARISONS = [
    # Batch 1 (already created)
    # ("openai-gpt56-sol", "openai-gpt55", "Same Generation", "gpt56sol-vs-gpt55"),
    # ("openai-gpt56-sol", "anthropic-sonnet46", "Premium vs Mid-Tier", "gpt56sol-vs-sonnet46"),
    # ("openai-gpt55", "deepseek-v4-pro", "Premium vs Budget", "gpt55-vs-deepseekv4pro"),
    # ("openai-gpt55-pro", "anthropic-opus48", "Premium Showdown", "gpt55pro-vs-opus48"),
    # ("openai-gpt56-sol", "google-gemini3-pro", "Cross-Provider Premium", "gpt56sol-vs-gemini31pro"),
    # Batch 2 (only truly missing)
    ("openai-gpt56-sol", "deepseek-v4-flash", "Premium vs Budget Speed", "gpt56sol-vs-deepseekv4flash"),
    ("openai-gpt56-sol", "mistral-large", "Premium vs Mid-Range", "gpt56sol-vs-mistral-large3"),
]

def fmt_price(p):
    if p < 1:
        return f"${p:.3f}" if p < 0.1 else f"${p:.2f}"
    return f"${p:.2f}"

def request_cost(inp, out, inp_price, out_price):
    return (inp * inp_price + out * out_price) / 1_000_000

def monthly_cost(inp, out, inp_price, out_price, req_day):
    return request_cost(inp, out, inp_price, out_price) * req_day * 30

def pct_diff(a, b):
    if b == 0:
        return "Same price"
    diff = ((a - b) / a) * 100
    if abs(diff) < 0.5:
        return "Same price"
    direction = "cheaper" if b < a else "more expensive"
    return f"{abs(diff):.0f}% {direction}"

def generate_page(a_id, b_id, tier_badge, slug):
    a = models[a_id]
    b = models[b_id]

    a_name = a['name']
    b_name = b['name']
    a_input = a['input']
    a_output = a['output']
    a_ctx = a.get('context', 'Unknown')
    b_input = b['input']
    b_output = b['output']
    b_ctx = b.get('context', 'Unknown')

    a_std = request_cost(1500, 400, a_input, a_output)
    b_std = request_cost(1500, 400, b_input, b_output)
    a_out_heavy = request_cost(1500, 4000, a_input, a_output)
    b_out_heavy = request_cost(1500, 4000, b_input, b_output)

    cheaper_output = a_output < b_output
    cheaper_input = a_input < b_input
    larger_ctx = a_ctx > b_ctx  # rough string compare

    # Determine winner for output price
    if a_output < b_output:
        a_out_class = "cheaper"
        b_out_class = "pricier"
    elif b_output < a_output:
        a_out_class = "pricier"
        b_out_class = "cheaper"
    else:
        a_out_class = ""
        b_out_class = ""

    # Determine winner for input price
    if a_input < b_input:
        a_inp_class = "cheaper"
        b_inp_class = "pricier"
    elif b_input < a_input:
        a_inp_class = "pricier"
        b_inp_class = "cheaper"
    else:
        a_inp_class = ""
        b_inp_class = ""

    # Standard request winner
    if a_std < b_std:
        a_std_class = "cheaper"
        b_std_class = "pricier"
    elif b_std < a_std:
        a_std_class = "pricier"
        b_std_class = "cheaper"
    else:
        a_std_class = ""
        b_std_class = ""

    # Output-heavy winner
    if a_out_heavy < b_out_heavy:
        a_oh_class = "cheaper"
        b_oh_class = "pricier"
    elif b_out_heavy < a_out_heavy:
        a_oh_class = "pricier"
        b_oh_class = "cheaper"
    else:
        a_oh_class = ""
        b_oh_class = ""

    # Determine overall cheaper model
    if a_output < b_output:
        winner_name = a_name
        loser_name = b_name
        winner_id = a_id.split('-')[-1]
        loser_id = b_id.split('-')[-1]
        win_pct = ((b_output - a_output) / b_output) * 100 if b_output > 0 else 0
        win_pricing = f"{fmt_price(a_input)}/{fmt_price(a_output)}"
        lose_pricing = f"{fmt_price(b_input)}/{fmt_price(b_output)}"
    elif b_output < a_output:
        winner_name = b_name
        loser_name = a_name
        winner_id = b_id.split('-')[-1]
        lose_id = a_id.split('-')[-1]
        win_pct = ((a_output - b_output) / a_output) * 100 if a_output > 0 else 0
        win_pricing = f"{fmt_price(b_input)}/{fmt_price(b_output)}"
        lose_pricing = f"{fmt_price(a_input)}/{fmt_price(a_output)}"
    else:
        winner_name = a_name
        loser_name = b_name
        win_pct = 0
        win_pricing = f"{fmt_price(a_input)}/{fmt_price(a_output)}"
        lose_pricing = f"{fmt_price(b_input)}/{fmt_price(b_output)}"

    # Context advantage
    ctx_winner = a_name if a_ctx > b_ctx else b_name if b_ctx > a_ctx else "Tie"

    # Scenario calculations
    scenarios = [
        ("Chatbot (1,000 req/day, 1,500 input, 400 output)", 1500, 400, 1000),
        ("Code Generation (200 req/day, 3,000 input, 1,200 output)", 3000, 1200, 200),
        ("RAG Pipeline (500 queries/day, 5,000 input, 800 output)", 5000, 800, 500),
    ]

    # Build related comparisons (pick some that exist)
    related = []
    a_slug_base = a_id.split('-', 1)[1].replace('-', '')
    # Find some existing comparisons for model a
    for f in sorted(os.listdir('.')):
        if f.startswith('compare-') and f.endswith('.html') and a_slug_base[:6] in f and f != f'compare-{slug}.html':
            related_title = f.replace('compare-', '').replace('.html', '').replace('-', ' ').replace('vs', 'vs').title()
            related.append((f, related_title))
            if len(related) >= 3:
                break

    # Build comparison table rows for other models
    other_models = []
    for mid, m in models.items():
        if mid not in (a_id, b_id) and m.get('tier') == 'active':
            other_models.append(m)
    # Sort by output price
    other_models.sort(key=lambda m: m['output'])
    # Pick top 5 cheapest and 2 premium
    cheap_5 = other_models[:5]
    premium = [m for m in other_models if m['output'] > max(a_output, b_output)][:2]
    table_models = cheap_5 + premium

    # Generate cost scenario boxes
    scenario_boxes = ""
    for title, inp, out, req in scenarios:
        a_cost = monthly_cost(inp, out, a_input, a_output, req)
        b_cost = monthly_cost(inp, out, b_input, b_output, req)
        diff = a_cost - b_cost
        if diff > 0:
            cheaper_cost = b_cost
            cheaper_name = b_name
            save_amount = diff
        elif diff < 0:
            cheaper_cost = a_cost
            cheaper_name = a_name
            save_amount = -diff
        else:
            cheaper_cost = a_cost
            cheaper_name = "Tie"
            save_amount = 0

        save_pct = (save_amount / max(a_cost, b_cost)) * 100 if max(a_cost, b_cost) > 0 else 0

        scenario_boxes += f"""
            <h3>{title}</h3>
            <div class="cost-box">
                <div class="cost-row"><span>{a_name}</span><span>{fmt_price(a_cost)}/mo</span></div>
                <div class="cost-row"><span>{b_name}</span><span class="cost-total">{fmt_price(b_cost)}/mo</span></div>
                <div class="cost-row"><span>Monthly savings</span><span style="color:var(--green);font-weight:700;">{fmt_price(save_amount)}/mo ({save_pct:.0f}%)</span></div>
            </div>"""

    # Build table rows
    table_rows = f"""
                    <tr><td><strong>{a_name}</strong></td><td>{fmt_price(a_input)}</td><td>{fmt_price(a_output)}</td><td>—</td><td>{a_ctx}</td></tr>
                    <tr><td><strong>{b_name}</strong></td><td>{fmt_price(b_input)}</td><td class="winner">{fmt_price(b_output)}</td><td>{pct_diff(a_output, b_output)}</td><td>{b_ctx}</td></tr>"""
    for m in table_models:
        m_id_short = m['id'].split('-', 1)[1] if '-' in m['id'] else m['id']
        vs_a = pct_diff(a_output, m['output'])
        inp_cls = ' class="winner"' if m['input'] < a_input else ''
        out_cls = ' class="winner"' if m['output'] < a_output else ''
        table_rows += f"""
                    <tr><td><strong>{m['name']}</strong></td><td{inp_cls}>{fmt_price(m['input'])}</td><td{out_cls}>{fmt_price(m['output'])}</td><td>{vs_a}</td><td>{m.get('context', '?')}</td></tr>"""

    # Verdict
    if win_pct > 5:
        verdict_title = f"{winner_name} wins on price. {ctx_winner} wins on context." if ctx_winner != winner_name else f"{winner_name} wins on price and context."
        verdict_body = f"<strong>{winner_name} ({win_pricing})</strong> is {win_pct:.0f}% cheaper on output than {loser_name} ({lose_pricing})."
        if ctx_winner != winner_name:
            verdict_body += f" But {ctx_winner} has a larger context window ({a_ctx if ctx_winner == a_name else b_ctx} vs {b_ctx if ctx_winner == a_name else a_ctx})."
    else:
        verdict_title = f"Same price tier. Different strengths."
        verdict_body = f"Both {a_name} and {b_name} are priced similarly. Choose based on context window, ecosystem, and model strengths."

    # When to choose each
    a_is_cheaper = a_output < b_output
    if a_is_cheaper:
        when_a = f"Choose {a_name} when you want the lower output price ({fmt_price(a_output)}/1M vs {fmt_price(b_output)}/1M)."
        when_b = f"Choose {b_name} when you need the larger context window ({b_ctx} vs {a_ctx}) or prefer the {b.get('provider', 'provider')} ecosystem."
    else:
        when_a = f"Choose {a_name} when you need the larger context window ({a_ctx} vs {b_ctx}) or prefer the {a.get('provider', 'provider')} ecosystem."
        when_b = f"Choose {b_name} when you want the lower output price ({fmt_price(b_output)}/1M vs {fmt_price(a_output)}/1M)."

    # Build the page
    a_slug = a_id.split('-', 1)[1].replace('-', '') if '-' in a_id else a_id
    b_slug = b_id.split('-', 1)[1].replace('-', '') if '-' in b_id else b_id

    # Generate related links
    related_html = ""
    for href, title in related:
        related_html += f'                <a href="{href}">{title} →</a>\n'

    page = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{a_name} vs {b_name} — AI Model Pricing 2026 | APIpulse</title>
    <meta name="description" content="{a_name} ({fmt_price(a_input)}/{fmt_price(a_output)}) vs {b_name} ({fmt_price(b_input)}/{fmt_price(b_output)}) pricing comparison. Interactive calculator shows exact monthly costs.">
    <meta name="keywords" content="{a_name} vs {b_name}, {a_name} pricing, {b_name} cost, AI API cost comparison 2026">
    <meta property="og:title" content="{a_name} vs {b_name} — AI Model Pricing 2026">
    <meta property="og:description" content="Compare {a_name} and {b_name} pricing. Interactive calculator, cost scenarios, and verdict.">
    <meta property="og:type" content="article">
    <meta property="og:image" content="https://getapipulse.com/og-image.png">
    <meta property="og:url" content="https://getapipulse.com/compare-{slug}.html">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{a_name} vs {b_name} — AI Model Pricing 2026">
    <meta name="twitter:image" content="https://getapipulse.com/og-image.png">
    <meta name="twitter:description" content="Compare {a_name} and {b_name} API pricing side by side.">
    <link rel="canonical" href="https://getapipulse.com/compare-{slug}.html">
    <link rel="alternate" type="application/rss+xml" title="APIpulse Blog" href="https://getapipulse.com/rss.xml">
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <link rel="stylesheet" href="styles.css">
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-0CEP7S9Y3J"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){{dataLayer.push(arguments);}}
      gtag('js', new Date());
      gtag('config', 'G-0CEP7S9Y3J');
      window.trackEvent = function(name, params) {{ if (typeof gtag === 'function') gtag('event', name, params); }};
    </script>
    <script src="analytics.js" defer></script>
    <script src="dynamic-date.js" defer></script>
    <script src="shared.js" defer></script>
    <script src="pricing-data.js" defer></script>
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "{a_name} vs {b_name} — AI Model Pricing 2026",
        "description": "Compare {a_name} and {b_name} API pricing. Interactive calculator shows exact costs.",
        "url": "https://getapipulse.com/compare-{slug}.html",
        "publisher": {{ "@type": "Organization", "name": "APIpulse", "url": "https://getapipulse.com" }},
        "datePublished": "2026-07-13",
        "dateModified": "2026-07-13"
    }}
    </script>
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {{
                "@type": "Question",
                "name": "Is {b_name} cheaper than {a_name}?",
                "acceptedAnswer": {{
                    "@type": "Answer",
                    "text": "{'Yes' if b_output < a_output else 'No'}. {b_name} costs {fmt_price(b_output)} per 1M output tokens vs {a_name}'s {fmt_price(a_output)}. {pct_diff(a_output, b_output).capitalize()} on output."
                }}
            }},
            {{
                "@type": "Question",
                "name": "Which has a larger context window?",
                "acceptedAnswer": {{
                    "@type": "Answer",
                    "text": "{a_name} has {a_ctx} tokens, {b_name} has {b_ctx} tokens. {'Larger.' if a_ctx > b_ctx else 'Smaller.' if a_ctx < b_ctx else 'Same.'}"
                }}
            }},
            {{
                "@type": "Question",
                "name": "When should I choose {a_name} over {b_name}?",
                "acceptedAnswer": {{
                    "@type": "Answer",
                    "text": "{when_a}"
                }}
            }}
        ]
    }}
    </script>
    <style>
        .compare-hero {{ max-width: var(--max-width); margin: 0 auto; padding: 120px 24px 40px; text-align: center; }}
        .compare-hero h1 {{ font-size: clamp(28px, 4.5vw, 44px); font-weight: 800; margin-bottom: 16px; line-height: 1.2; }}
        .compare-hero h1 .vs {{ color: var(--accent); }}
        .compare-hero .subtitle {{ font-size: 18px; color: var(--text-secondary); max-width: 700px; margin: 0 auto 24px; }}
        .compare-hero .last-updated {{ font-size: 13px; color: var(--text-muted); }}
        .tier-badge {{ display: inline-block; background: linear-gradient(135deg, #8b5cf6, #6366f1); color: white; padding: 4px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; }}
        .quick-comparison {{ max-width: 900px; margin: 0 auto 48px; padding: 0 24px; }}
        .quick-table {{ width: 100%; border-collapse: collapse; background: var(--bg-secondary); border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); }}
        .quick-table th {{ padding: 16px 20px; text-align: left; font-size: 13px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; background: var(--bg-card); border-bottom: 1px solid var(--border); }}
        .quick-table td {{ padding: 14px 20px; border-bottom: 1px solid var(--border); font-size: 15px; }}
        .quick-table tr:last-child td {{ border-bottom: none; }}
        .quick-table .cheaper {{ color: var(--green); font-weight: 700; }}
        .quick-table .pricier {{ color: var(--orange); }}
        .quick-table .advantage {{ color: var(--green); font-weight: 700; }}
        .calculator-section {{ max-width: 900px; margin: 0 auto 48px; padding: 0 24px; }}
        .calculator-section h2 {{ font-size: 28px; font-weight: 800; margin-bottom: 8px; text-align: center; }}
        .calculator-section .section-sub {{ color: var(--text-secondary); text-align: center; margin-bottom: 32px; }}
        .usage-presets {{ display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-bottom: 24px; }}
        .preset-btn {{ padding: 8px 16px; border-radius: 8px; border: 1px solid var(--border); background: var(--bg-card); color: var(--text-secondary); font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }}
        .preset-btn:hover, .preset-btn.active {{ border-color: var(--accent); color: var(--accent); background: var(--accent-glow); }}
        .calc-grid {{ display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 32px; }}
        .input-group {{ margin-bottom: 16px; }}
        .input-group label {{ display: block; font-size: 12px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; font-weight: 600; }}
        .input-group input {{ width: 100%; padding: 12px 14px; border-radius: 8px; border: 1px solid var(--border); background: var(--bg-card); color: var(--text-primary); font-size: 15px; }}
        .input-group input:focus {{ outline: 2px solid var(--accent); outline-offset: 2px; }}
        .results-grid {{ display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 32px; }}
        .result-card {{ background: var(--bg-secondary); border: 1px solid var(--border); border-radius: var(--radius); padding: 28px; text-align: center; }}
        .result-card.winner {{ border-color: var(--green); box-shadow: 0 0 24px rgba(34,197,94,0.1); }}
        .result-card .provider {{ font-size: 12px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }}
        .result-card .model-name {{ font-size: 22px; font-weight: 800; margin-bottom: 16px; }}
        .result-card .price-big {{ font-size: 36px; font-weight: 800; margin-bottom: 4px; }}
        .result-card .price-label {{ font-size: 13px; color: var(--text-muted); margin-bottom: 20px; }}
        .result-card .breakdown {{ text-align: left; }}
        .result-card .breakdown-row {{ display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--border); font-size: 14px; }}
        .result-card .breakdown-row:last-child {{ border-bottom: none; }}
        .result-card .breakdown-row .label {{ color: var(--text-secondary); }}
        .result-card .breakdown-row .value {{ font-weight: 600; font-variant-numeric: tabular-nums; }}
        .savings-banner {{ background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.25); border-radius: 12px; padding: 20px; text-align: center; margin-top: 16px; }}
        .savings-banner .amount {{ font-size: 24px; font-weight: 800; color: var(--green); }}
        .savings-banner .label {{ font-size: 14px; color: var(--text-secondary); margin-top: 4px; }}
        .content-section {{ max-width: 900px; margin: 0 auto 48px; padding: 0 24px; }}
        .content-section h2 {{ font-size: 28px; font-weight: 800; margin-bottom: 16px; }}
        .content-section h3 {{ font-size: 20px; font-weight: 700; margin: 24px 0 12px; }}
        .content-section p {{ color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px; }}
        .content-section ul, .content-section ol {{ margin-bottom: 16px; padding-left: 24px; }}
        .content-section li {{ color: var(--text-secondary); line-height: 1.6; margin-bottom: 8px; }}
        .cost-box {{ background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin: 24px 0; }}
        .cost-box h3 {{ margin-top: 0; font-size: 18px; }}
        .cost-row {{ display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--border); font-size: 14px; }}
        .cost-row:last-child {{ border-bottom: none; }}
        .cost-total {{ font-weight: 700; color: var(--accent); }}
        .comparison-table {{ width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 14px; }}
        .comparison-table th {{ background: var(--bg-secondary); padding: 12px 16px; text-align: left; font-weight: 600; border-bottom: 1px solid var(--border); }}
        .comparison-table td {{ padding: 12px 16px; border-bottom: 1px solid var(--border); }}
        .comparison-table tr:last-child td {{ border-bottom: none; }}
        .winner {{ color: var(--green); font-weight: 600; }}
        .verdict {{ background: var(--accent-glow); border: 1px solid var(--accent); border-radius: 12px; padding: 24px; margin: 24px 0; }}
        .verdict h3 {{ margin-top: 0; color: var(--accent); }}
        .cta-inline {{ background: var(--bg-secondary); border: 1px solid var(--accent); border-radius: 12px; padding: 24px; margin: 32px 0; text-align: center; }}
        .cta-inline p {{ margin-bottom: 12px; }}
        .btn-primary {{ display: inline-block; }}
        .related {{ background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-top: 40px; }}
        .related h3 {{ margin-top: 0; font-size: 18px; }}
        .related a {{ display: block; padding: 8px 0; color: var(--accent); font-size: 14px; }}
        .share-section {{ margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border); text-align: center; }}
        .share-section p {{ color: var(--text-secondary); font-size: 14px; margin-bottom: 12px; }}
        .share-btn {{ display: inline-block; background: var(--bg-card); color: var(--text-primary); padding: 8px 20px; border-radius: 8px; font-size: 14px; font-weight: 500; border: 1px solid var(--border); transition: all 0.2s; }}
        .share-btn:hover {{ background: var(--accent); color: white; border-color: var(--accent); }}
        @media (max-width: 768px) {{
            .compare-hero {{ padding: 100px 20px 30px; }}
            .compare-hero h1 {{ font-size: 28px; }}
            .calc-grid, .results-grid {{ grid-template-columns: 1fr; }}
            .result-card .price-big {{ font-size: 28px; }}
            .comparison-table {{ font-size: 12px; }}
            .comparison-table th, .comparison-table td {{ padding: 8px 10px; }}
        }}
    </style>
    <meta name="theme-color" content="#6366f1">
    <link rel="preconnect" href="https://getapipulse.com">
</head>
<body>
    <a href="#main" class="skip-link">Skip to content</a>
    <nav>
        <div class="nav-inner">
            <a href="index.html" class="logo">API<span>pulse</span></a>
            <button class="hamburger" onclick="toggleMobileNav()" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
            <div class="nav-links">
                <a href="calculator.html">Calculator</a>
                <a href="compare.html">Compare</a>
                <a href="cost-explorer.html">Explorer</a>
                <a href="cost-scenarios.html">Scenarios</a>
                <a href="pricing.html">Pricing</a>
                <a href="blog.html">Blog</a>
                <a href="pricing-index.html">Pricing Index</a>
                <a href="model-matrix.html">Model Matrix</a>
                <a href="api-docs.html" style="color:var(--accent);">API</a>
                <a href="index.html#free-tools" class="nav-cta">Free Tools →</a>
                <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">🌙</button>
            </div>
        </div>
    </nav>

    <main id="main">
        <div class="compare-hero">
            <span class="tier-badge">{tier_badge}</span>
            <h1>{a_name} <span class="vs">vs</span> {b_name}</h1>
            <p class="subtitle">{'Same input price, different output costs. Which offers better value?' if a_input == b_input else f'{a_name} at {fmt_price(a_input)}/{fmt_price(a_output)} vs {b_name} at {fmt_price(b_input)}/{fmt_price(b_output)}.'}</p>
            <p class="last-updated">Last verified: Jul 13, 2026 · <a href="leaderboard.html" style="color:var(--accent);">See all 67 models ranked →</a></p>
        </div>

        <div class="quick-comparison">
            <table class="quick-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>{a_name}</th>
                        <th>{b_name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Input price (per 1M tokens)</strong></td>
                        <td class="{a_inp_class}">{fmt_price(a_input)}</td>
                        <td class="{b_inp_class}">{fmt_price(b_input)}</td>
                    </tr>
                    <tr>
                        <td><strong>Output price (per 1M tokens)</strong></td>
                        <td class="{a_out_class}">{fmt_price(a_output)}</td>
                        <td class="{b_out_class}">{fmt_price(b_output)}</td>
                    </tr>
                    <tr>
                        <td><strong>Context window</strong></td>
                        <td class="{"advantage" if a_ctx > b_ctx else ""}">{a_ctx}</td>
                        <td class="{"advantage" if b_ctx > a_ctx else ""}">{b_ctx}</td>
                    </tr>
                    <tr>
                        <td><strong>Standard request cost</strong></td>
                        <td class="{a_std_class}">{fmt_price(a_std)}</td>
                        <td class="{b_std_class}">{fmt_price(b_std)}</td>
                    </tr>
                    <tr>
                        <td><strong>Output-heavy request cost</strong></td>
                        <td class="{a_oh_class}">{fmt_price(a_out_heavy)}</td>
                        <td class="{b_oh_class}">{fmt_price(b_out_heavy)}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="calculator-section">
            <h2>Calculate your exact costs</h2>
            <p class="section-sub">Enter your usage to see which model saves you more.</p>
            <div class="usage-presets">
                <button class="preset-btn active" onclick="setPreset(1500,400,1000)">Standard</button>
                <button class="preset-btn" onclick="setPreset(3000,1200,200)">Code Gen</button>
                <button class="preset-btn" onclick="setPreset(5000,800,500)">RAG</button>
                <button class="preset-btn" onclick="setPreset(15000,1000,100)">Docs</button>
            </div>
            <div class="calc-grid">
                <div>
                    <div class="input-group">
                        <label for="input-tokens">Input tokens / request</label>
                        <input type="number" id="input-tokens" value="1500" min="0" step="100" oninput="calculate()">
                    </div>
                    <div class="input-group">
                        <label for="output-tokens">Output tokens / request</label>
                        <input type="number" id="output-tokens" value="400" min="0" step="100" oninput="calculate()">
                    </div>
                    <div class="input-group">
                        <label for="requests">Requests / day</label>
                        <input type="number" id="requests" value="1000" min="0" step="100" oninput="calculate()">
                    </div>
                </div>
                <div></div>
            </div>
            <div class="results-grid" id="results">
                <div class="result-card" id="card-a">
                    <div class="provider">{a.get('provider', '').title()}</div>
                    <div class="model-name">{a_name}</div>
                    <div class="price-big" id="price-a">$0</div>
                    <div class="price-label">estimated monthly cost</div>
                    <div class="breakdown">
                        <div class="breakdown-row"><span class="label">Input cost</span><span class="value" id="input-a">$0</span></div>
                        <div class="breakdown-row"><span class="label">Output cost</span><span class="value" id="output-a">$0</span></div>
                        <div class="breakdown-row"><span class="label">Per request</span><span class="value" id="per-req-a">$0</span></div>
                    </div>
                </div>
                <div class="result-card winner" id="card-b">
                    <div class="provider">{b.get('provider', '').title()}</div>
                    <div class="model-name">{b_name}</div>
                    <div class="price-big" id="price-b">$0</div>
                    <div class="price-label">estimated monthly cost</div>
                    <div class="breakdown">
                        <div class="breakdown-row"><span class="label">Input cost</span><span class="value" id="input-b">$0</span></div>
                        <div class="breakdown-row"><span class="label">Output cost</span><span class="value" id="output-b">$0</span></div>
                        <div class="breakdown-row"><span class="label">Per request</span><span class="value" id="per-req-b">$0</span></div>
                    </div>
                </div>
            </div>
            <div class="savings-banner" id="savings-banner">
                <div class="amount" id="savings-amount">Saving $0/mo</div>
                <div class="label" id="savings-label">{winner_name} saves you $0 per month</div>
            </div>
        </div>

        <div class="content-section">
            <h2>The Verdict</h2>

            <div class="verdict">
                <h3>{verdict_title}</h3>
                <p>{verdict_body}</p>
            </div>

            <h2>When to Choose {a_name}</h2>
            <ul>
                <li>{when_a}</li>
                <li><strong>Ecosystem:</strong> If you're already using {a.get('provider', 'this provider')}s API and want to stay in their ecosystem.</li>
            </ul>

            <h2>When to Choose {b_name}</h2>
            <ul>
                <li>{when_b}</li>
                <li><strong>Ecosystem:</strong> If you're already using {b.get('provider', 'this provider')}s API and want to stay in their ecosystem.</li>
            </ul>

            <h2>Cost Comparison: Real-World Scenarios</h2>
            {scenario_boxes}

            <h2>Full Comparison Table</h2>
            <table class="comparison-table">
                <thead>
                    <tr><th>Model</th><th>Input/1M</th><th>Output/1M</th><th>vs {a_name}</th><th>Context</th></tr>
                </thead>
                <tbody>
                    {table_rows}
                </tbody>
            </table>

            <div class="cta-inline">
                <p><strong>Calculate your exact costs.</strong> Enter your usage and compare with every alternative.</p>
                <a href="calculator.html" class="btn-primary">Try the Free Cost Calculator</a>
                <span style="margin: 0 12px; color: var(--text-muted);">or</span>
                <a href="compare.html" class="btn-primary" style="background:var(--bg-card);color:var(--text-primary);border:1px solid var(--border);">Compare All Models</a>
            </div>

            <div class="related">
                <h3>Related Comparisons</h3>
                {related_html}                <a href="leaderboard.html">Full leaderboard: all 67 models ranked →</a>
            </div>

            <div class="share-section">
                <p>Found this useful? Share it:</p>
                <a href="https://twitter.com/intent/tweet?text={a_name.replace(' ', '+')}+vs+{b_name.replace(' ', '+')}%3A+AI+Pricing+2026&url=https%3A%2F%2Fgetapipulse.com%2Fcompare-{slug}.html" target="_blank" rel="noopener" class="share-btn">Share on X</a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fgetapipulse.com%2Fcompare-{slug}.html" target="_blank" rel="noopener" class="share-btn">Share on LinkedIn</a>
            </div>
        </div>
    </main>

    <button class="back-to-top" onclick="window.scrollTo({{top:0,behavior:'smooth'}})" aria-label="Back to top">↑</button>

    <footer>
        <p>Pricing data last verified: <span class="verified-date"></span></p>
        <p>&copy; 2026 APIpulse. <a href="index.html">Home</a> &middot; <a href="use-cases.html">Use Cases</a> &middot; <a href="about.html">About</a> &middot; <a href="blog.html">Blog</a>
<a href="pricing-index.html">Pricing Index</a> &middot; <a href="model-matrix.html">Model Matrix</a> &middot; <a href="cost-scenarios.html">Scenarios</a> &middot; <a href="price-alerts.html">Price Alerts</a> &middot; <a href="pricing-changelog.html">Changelog</a> &middot; <a href="openai.html">OpenAI</a> &middot; <a href="anthropic.html">Anthropic</a> &middot; <a href="google.html">Google</a> &middot; <a href="mistral.html">Mistral</a> &middot; <a href="cohere.html">Cohere</a> &middot; <a href="deepseek.html">DeepSeek</a> &middot; <a href="xai.html">xAI</a> &middot; <a href="moonshot.html">Moonshot</a> &middot; <a href="together.html">Together.ai</a> &middot; <a href="ai21.html">AI21</a> &middot; <a href="pricing.html">Pricing</a> &middot; <a href="embed.html">Embed Widget</a> &middot; <a href="cheat-sheet.html">Cheat Sheet</a> &middot; <a href="model-switch.html">Model Switch</a> &middot; <a href="api-docs.html">API</a> &middot; <a href="https://x.com/getapipulse" target="_blank" rel="noopener">Twitter</a> &middot; <a href="unsubscribe.html">Unsubscribe</a></p>
    </footer>

    <script>
    function calculate() {{
        var inputTokens = parseInt(document.getElementById('input-tokens').value) || 1500;
        var outputTokens = parseInt(document.getElementById('output-tokens').value) || 400;
        var requests = parseInt(document.getElementById('requests').value) || 1000;
        var days = 30;

        // {a_name}: {fmt_price(a_input)} input, {fmt_price(a_output)} output
        var aInput = (inputTokens * requests * days * {a_input}) / 1000000;
        var aOutput = (outputTokens * requests * days * {a_output}) / 1000000;
        var aTotal = aInput + aOutput;
        var aPerReq = (inputTokens * {a_input} + outputTokens * {a_output}) / 1000000;

        // {b_name}: {fmt_price(b_input)} input, {fmt_price(b_output)} output
        var bInput = (inputTokens * requests * days * {b_input}) / 1000000;
        var bOutput = (outputTokens * requests * days * {b_output}) / 1000000;
        var bTotal = bInput + bOutput;
        var bPerReq = (inputTokens * {b_input} + outputTokens * {b_output}) / 1000000;

        // Update display
        document.getElementById('price-a').textContent = '$' + aTotal.toFixed(2);
        document.getElementById('input-a').textContent = '$' + aInput.toFixed(2);
        document.getElementById('output-a').textContent = '$' + aOutput.toFixed(2);
        document.getElementById('per-req-a').textContent = '$' + aPerReq.toFixed(4);

        document.getElementById('price-b').textContent = '$' + bTotal.toFixed(2);
        document.getElementById('input-b').textContent = '$' + bInput.toFixed(2);
        document.getElementById('output-b').textContent = '$' + bOutput.toFixed(2);
        document.getElementById('per-req-b').textContent = '$' + bPerReq.toFixed(4);

        // Winner
        var cardA = document.getElementById('card-a');
        var cardB = document.getElementById('card-b');
        cardA.classList.remove('winner');
        cardB.classList.remove('winner');
        if (bTotal < aTotal) {{
            cardB.classList.add('winner');
        }} else {{
            cardA.classList.add('winner');
        }}

        var savings = Math.abs(aTotal - bTotal);
        var cheaperName = aTotal < bTotal ? '{a_name}' : '{b_name}';
        document.getElementById('savings-amount').textContent = 'Saving $' + savings.toFixed(2) + '/mo';
        document.getElementById('savings-label').textContent = cheaperName + ' saves you $' + savings.toFixed(2) + ' per month';
        if (savings === 0) {{
            document.getElementById('savings-amount').textContent = 'Same price';
            document.getElementById('savings-label').textContent = 'Both models cost the same at this usage level';
        }}

        if (typeof trackEvent === 'function') trackEvent('calc_used', {{comparison: '{slug}'}});
    }}

    function setPreset(input, output, req) {{
        document.getElementById('input-tokens').value = input;
        document.getElementById('output-tokens').value = output;
        document.getElementById('requests').value = req;
        document.querySelectorAll('.preset-btn').forEach(function(b) {{ b.classList.remove('active'); }});
        event.target.classList.add('active');
        calculate();
    }}

    // Init
    calculate();
    </script>
</body>
</html>"""

    return page


# Generate all pages
generated = []
for a_id, b_id, tier_badge, slug in COMPARISONS:
    page = generate_page(a_id, b_id, tier_badge, slug)
    filename = f"compare-{slug}.html"
    with open(filename, 'w') as f:
        f.write(page)
    generated.append(filename)
    print(f"Generated: {filename}")

print(f"\nDone! Generated {len(generated)} comparison pages.")
