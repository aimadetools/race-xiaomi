#!/usr/bin/env node
// Generate unique OG images for each blog post with title text
const fs = require('fs');
const path = require('path');
const sharp = require('/tmp/node_modules/sharp');

const SITE_DIR = '/home/race/race-xiaomi';
const OG_DIR = path.join(SITE_DIR, 'og-images');

if (!fs.existsSync(OG_DIR)) fs.mkdirSync(OG_DIR, { recursive: true });

// Wrap text into lines that fit within maxChars per line
function wrapText(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    if ((current + ' ' + word).trim().length > maxChars) {
      if (current) lines.push(current.trim());
      current = word;
    } else {
      current = current ? current + ' ' + word : word;
    }
  }
  if (current) lines.push(current.trim());
  return lines;
}

function generateSVG(title) {
  // Strip " — APIpulse" suffix if present
  let cleanTitle = title.replace(/\s*[—–]\s*APIpulse\s*$/, '').trim();

  const lines = wrapText(cleanTitle, 30);
  const lineCount = lines.length;
  const fontSize = lineCount <= 2 ? 44 : lineCount <= 3 ? 36 : 30;
  const lineHeight = fontSize * 1.3;
  const blockHeight = lineCount * lineHeight;
  const startY = 250 - (blockHeight / 2) + fontSize * 0.35;

  const textElements = lines.map((line, i) => {
    const y = startY + i * lineHeight;
    return `<text x="600" y="${y}" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="${fontSize}" font-weight="700" fill="#e8e8ed">${escapeXml(line)}</text>`;
  }).join('\n    ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0f"/>
      <stop offset="100%" style="stop-color:#1a1a2e"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#818cf8"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g opacity="0.05" stroke="#6366f1" stroke-width="1">
    <line x1="0" y1="100" x2="1200" y2="100"/>
    <line x1="0" y1="200" x2="1200" y2="200"/>
    <line x1="0" y1="300" x2="1200" y2="300"/>
    <line x1="0" y1="400" x2="1200" y2="400"/>
    <line x1="0" y1="500" x2="1200" y2="500"/>
    <line x1="200" y1="0" x2="200" y2="630"/>
    <line x1="400" y1="0" x2="400" y2="630"/>
    <line x1="600" y1="0" x2="600" y2="630"/>
    <line x1="800" y1="0" x2="800" y2="630"/>
    <line x1="1000" y1="0" x2="1000" y2="630"/>
  </g>
  <polyline points="50,315 150,315 180,250 210,380 240,280 270,350 300,315 400,315"
    fill="none" stroke="url(#accent)" stroke-width="3" opacity="0.6"/>
  <text x="600" y="160" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    font-size="28" font-weight="800" fill="#e8e8ed">API<tspan fill="#6366f1">pulse</tspan></text>
  ${textElements}
  <text x="600" y="520" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    font-size="18" fill="#6366f1" font-weight="600">getapipulse.com</text>
  <rect x="0" y="625" width="1200" height="5" fill="url(#accent)"/>
</svg>`;
}

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

async function main() {
  const htmlFiles = fs.readdirSync(SITE_DIR).filter(f => f.startsWith('blog-') && f.endsWith('.html'));
  let count = 0;

  for (const file of htmlFiles) {
    const html = fs.readFileSync(path.join(SITE_DIR, file), 'utf8');
    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    if (!titleMatch) continue;

    const title = titleMatch[1];
    const slug = file.replace('.html', '');
    const pngPath = path.join(OG_DIR, `${slug}.png`);

    if (!fs.existsSync(pngPath)) {
      const svg = generateSVG(title);
      await sharp(Buffer.from(svg)).resize(1200, 630).png().toFile(pngPath);
      count++;
    }

    // Update meta tags in HTML
    const ogUrl = `https://getapipulse.com/og-images/${slug}.png`;
    let updated = html
      .replace(/<meta property="og:image" content="[^"]*">/g, `<meta property="og:image" content="${ogUrl}">`)
      .replace(/<meta name="twitter:image" content="[^"]*">/g, `<meta name="twitter:image" content="${ogUrl}">`);

    fs.writeFileSync(path.join(SITE_DIR, file), updated);
  }

  console.log(`Generated ${count} new OG images, updated ${htmlFiles.length} HTML files`);
}

main().catch(console.error);
