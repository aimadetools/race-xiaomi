/**
 * apipulse — LLM API pricing data from APIpulse
 * https://getapipulse.com
 *
 * Compare costs across 56 models from 10 providers.
 * CLI: npx apipulse
 */

const API_BASE = 'https://getapipulse.com/api';

/**
 * Fetch all pricing data from APIpulse
 * @returns {Promise<{models: Array, snapshotDate: string}>}
 */
async function getPricing() {
  const res = await fetch(`${API_BASE}/pricing`);
  if (!res.ok) throw new Error(`APIpulse API error: ${res.status}`);
  return res.json();
}

/**
 * Get the cheapest model for a given workload
 * @param {Object} opts
 * @param {number} opts.inputTokens - Input tokens per request
 * @param {number} opts.outputTokens - Output tokens per request
 * @param {number} opts.requestsPerDay - Requests per day
 * @returns {Promise<Object>}
 */
async function getCheapest({ inputTokens = 1000, outputTokens = 500, requestsPerDay = 1000 } = {}) {
  const params = new URLSearchParams({
    input_tokens: inputTokens,
    output_tokens: outputTokens,
    requests: requestsPerDay
  });
  const res = await fetch(`${API_BASE}/cheapest?${params}`);
  if (!res.ok) throw new Error(`APIpulse API error: ${res.status}`);
  return res.json();
}

/**
 * Calculate cost for a specific model
 * @param {Object} opts
 * @param {string} opts.model - Model ID (e.g., 'openai-gpt4o-mini')
 * @param {number} opts.inputTokens - Input tokens per request
 * @param {number} opts.outputTokens - Output tokens per request
 * @param {number} opts.requestsPerDay - Requests per day
 * @returns {Promise<Object>}
 */
async function calculateCost({ model = 'openai-gpt4o-mini', inputTokens = 1000, outputTokens = 500, requestsPerDay = 1000 } = {}) {
  const params = new URLSearchParams({
    model,
    input_tokens: inputTokens,
    output_tokens: outputTokens,
    requests: requestsPerDay
  });
  const res = await fetch(`${API_BASE}/calculate?${params}`);
  if (!res.ok) throw new Error(`APIpulse API error: ${res.status}`);
  return res.json();
}

/**
 * Compare multiple models side by side
 * @param {Object} opts
 * @param {string[]} opts.models - Array of model IDs
 * @param {number} opts.inputTokens - Input tokens per request
 * @param {number} opts.outputTokens - Output tokens per request
 * @param {number} opts.requestsPerDay - Requests per day
 * @returns {Promise<Object>}
 */
async function compare({ models = [], inputTokens = 1000, outputTokens = 500, requestsPerDay = 1000 } = {}) {
  const params = new URLSearchParams({
    models: models.join(','),
    input_tokens: inputTokens,
    output_tokens: outputTokens,
    requests: requestsPerDay
  });
  const res = await fetch(`${API_BASE}/compare?${params}`);
  if (!res.ok) throw new Error(`APIpulse API error: ${res.status}`);
  return res.json();
}

/**
 * Get a pricing badge (SVG) for a model
 * @param {string} modelId - Model ID
 * @returns {Promise<string>} SVG markup
 */
async function getBadge(modelId) {
  const res = await fetch(`${API_BASE}/badge?model=${encodeURIComponent(modelId)}`);
  if (!res.ok) throw new Error(`APIpulse API error: ${res.status}`);
  return res.text();
}

module.exports = { getPricing, getCheapest, calculateCost, compare, getBadge };
