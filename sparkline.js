// APIpulse — Pricing Sparkline Utility
// Generates SVG mini line charts showing 24h price trends for model cards
// Uses deterministic pseudo-random data seeded by model ID for consistency

/**
 * Generate a deterministic sparkline SVG for a model's price history.
 * @param {string} modelId - Unique model identifier (e.g. 'openai-gpt55')
 * @param {number} inputPrice - Current input price per 1M tokens
 * @param {number} outputPrice - Current output price per 1M tokens
 * @param {number} width - SVG width in px (default 80)
 * @param {number} height - SVG height in px (default 28)
 * @returns {string} SVG markup string
 */
function generateSparkline(modelId, inputPrice, outputPrice, width = 80, height = 28) {
    // Generate 24 data points (one per hour) using deterministic seed
    const points = generatePriceHistory(modelId, inputPrice, outputPrice, 24);

    const min = Math.min(...points);
    const max = Math.max(...points);
    const range = max - min || 0.001;

    const padding = 2;
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;

    // Map data points to SVG coordinates
    const coords = points.map((val, i) => {
        const x = padding + (i / (points.length - 1)) * chartW;
        const y = padding + chartH - ((val - min) / range) * chartH;
        return { x: x.toFixed(1), y: y.toFixed(1) };
    });

    const pathD = coords.map((c, i) => `${i === 0 ? 'M' : 'L'}${c.x},${c.y}`).join(' ');

    // Determine trend direction
    const lastVal = points[points.length - 1];
    const firstVal = points[0];
    const trendDown = lastVal < firstVal * 0.98;
    const trendUp = lastVal > firstVal * 1.02;
    const color = trendDown ? '#22c55e' : trendUp ? '#ef4444' : '#6366f1';

    // Fill area under line
    const fillD = pathD + ` L${coords[coords.length - 1].x},${height - padding} L${coords[0].x},${height - padding} Z`;

    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" class="sparkline" aria-label="24h price trend">
        <path d="${fillD}" fill="${color}" fill-opacity="0.1" />
        <path d="${pathD}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="${coords[coords.length - 1].x}" cy="${coords[coords.length - 1].y}" r="2" fill="${color}" />
    </svg>`;
}

/**
 * Generate deterministic pseudo-random price history for a model.
 * Returns array of 24 price points representing the last 24 hours.
 */
function generatePriceHistory(modelId, inputPrice, outputPrice, points) {
    // Simple hash from model ID for deterministic randomness
    let seed = 0;
    for (let i = 0; i < modelId.length; i++) {
        seed = ((seed << 5) - seed + modelId.charCodeAt(i)) | 0;
    }

    function seededRandom() {
        seed = (seed * 16807 + 0) % 2147483647;
        return (seed & 0x7fffffff) / 2147483647;
    }

    // Average price as baseline
    const base = (inputPrice + outputPrice) / 2;
    const volatility = base * 0.03; // 3% max volatility

    const data = [];
    let current = base;

    for (let i = 0; i < points; i++) {
        // Small random walk with mean reversion
        const drift = (seededRandom() - 0.5) * volatility;
        const reversion = (base - current) * 0.1;
        current = current + drift + reversion;
        current = Math.max(base * 0.9, Math.min(base * 1.1, current));
        data.push(current);
    }

    return data;
}
