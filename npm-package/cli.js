#!/usr/bin/env node

/**
 * apipulse CLI — Quick LLM pricing lookups from your terminal
 * Usage: npx apipulse [command] [options]
 */

const { getPricing, getCheapest, calculateCost } = require('./index');

const HELP = `
  apipulse — LLM API pricing from your terminal

  Usage:
    npx apipulse                    Show all models (table)
    npx apipulse cheapest           Find cheapest model for your usage
    npx apipulse cost <model>       Calculate cost for a model
    npx apipulse help               Show this help

  Options:
    --input <tokens>    Input tokens per request (default: 1000)
    --output <tokens>   Output tokens per request (default: 500)
    --rpd <requests>    Requests per day (default: 1000)

  Examples:
    npx apipulse cheapest --input 2000 --output 1000
    npx apipulse cost openai-gpt4o-mini --rpd 5000
    npx apipulse

  More: https://getapipulse.com
`;

function parseArgs(args) {
  const opts = { inputTokens: 1000, outputTokens: 500, requestsPerDay: 1000 };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--input' && args[i + 1]) opts.inputTokens = parseInt(args[++i]);
    if (args[i] === '--output' && args[i + 1]) opts.outputTokens = parseInt(args[++i]);
    if (args[i] === '--rpd' && args[i + 1]) opts.requestsPerDay = parseInt(args[++i]);
  }
  return opts;
}

function formatUSD(n) {
  if (n < 0.01) return `$${n.toFixed(4)}`;
  if (n < 1) return `$${n.toFixed(3)}`;
  return `$${n.toFixed(2)}`;
}

function pad(str, len) {
  return String(str).padEnd(len);
}

function padLeft(str, len) {
  return String(str).padStart(len);
}

async function showAll() {
  const data = await getPricing();
  const models = data.models || data;

  console.log(`\n  LLM API Pricing — ${models.length} models (via APIpulse)\n`);
  console.log(`  ${pad('Model', 28)} ${pad('Provider', 16)} ${padLeft('Input/1M', 10)} ${padLeft('Output/1M', 10)} ${padLeft('Blended', 10)}`);
  console.log(`  ${'─'.repeat(28)} ${'─'.repeat(16)} ${'─'.repeat(10)} ${'─'.repeat(10)} ${'─'.repeat(10)}`);

  const sorted = [...models].sort((a, b) => {
    const aBlend = (a.input + a.output) / 2;
    const bBlend = (b.input + b.output) / 2;
    return aBlend - bBlend;
  });

  for (const m of sorted) {
    const blend = (m.input + m.output) / 2;
    console.log(`  ${pad(m.name || m.id, 28)} ${pad(m.provider, 16)} ${padLeft(formatUSD(m.input), 10)} ${padLeft(formatUSD(m.output), 10)} ${padLeft(formatUSD(blend), 10)}`);
  }

  console.log(`\n  Data: https://getapipulse.com/pricing-index.html`);
  console.log(`  Calculator: https://getapipulse.com/calculator.html\n`);
}

async function showCheapest(args) {
  const opts = parseArgs(args);
  console.log(`\n  Finding cheapest model for:`);
  console.log(`  ${opts.inputTokens} input + ${opts.outputTokens} output tokens, ${opts.requestsPerDay} req/day\n`);

  const result = await getCheapest(opts);
  const models = result.models || result.cheapest || result;

  if (Array.isArray(models)) {
    console.log(`  ${pad('#', 4)} ${pad('Model', 28)} ${padLeft('Monthly', 12)} ${padLeft('Per Request', 12)}`);
    console.log(`  ${'─'.repeat(4)} ${'─'.repeat(28)} ${'─'.repeat(12)} ${'─'.repeat(12)}`);

    for (let i = 0; i < Math.min(10, models.length); i++) {
      const m = models[i];
      const monthly = m.monthlyCost || m.cost || 0;
      const perReq = m.costPerRequest || monthly / (opts.requestsPerDay * 30) || 0;
      console.log(`  ${padLeft(i + 1 + '.', 4)} ${pad(m.name || m.model || m.id, 28)} ${padLeft(formatUSD(monthly), 12)} ${padLeft(formatUSD(perReq), 12)}`);
    }
  } else {
    console.log(JSON.stringify(result, null, 2));
  }

  console.log(`\n  Full calculator: https://getapipulse.com/calculator.html\n`);
}

async function showCost(modelId, args) {
  if (!modelId) {
    console.error('  Error: specify a model ID (e.g., openai-gpt4o-mini)');
    process.exit(1);
  }

  const opts = parseArgs(args);
  console.log(`\n  Calculating cost for: ${modelId}`);
  console.log(`  ${opts.inputTokens} input + ${opts.outputTokens} output tokens, ${opts.requestsPerDay} req/day\n`);

  const result = await calculateCost({ model: modelId, ...opts });

  console.log(`  Model:         ${result.model || modelId}`);
  console.log(`  Provider:      ${result.provider || '—'}`);
  console.log(`  Per request:   ${formatUSD(result.costPerRequest || 0)}`);
  console.log(`  Daily:         ${formatUSD(result.dailyCost || 0)}`);
  console.log(`  Monthly:       ${formatUSD(result.monthlyCost || 0)}`);
  console.log(`\n  Details: https://getapipulse.com/calculator.html?model=${modelId}\n`);
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (command === 'help' || command === '--help' || command === '-h') {
    console.log(HELP);
    return;
  }

  try {
    if (command === 'cheapest' || command === 'cheap') {
      await showCheapest(args.slice(1));
    } else if (command === 'cost') {
      await showCost(args[1], args.slice(2));
    } else {
      await showAll();
    }
  } catch (err) {
    if (err.message.includes('fetch')) {
      console.error('\n  Error: Could not reach APIpulse API. Check your internet connection.');
      console.error('  Or visit https://getapipulse.com directly.\n');
    } else {
      console.error(`\n  Error: ${err.message}\n`);
    }
    process.exit(1);
  }
}

main();
