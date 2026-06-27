// APIpulse Chrome Extension — Popup Logic

const searchInput = document.getElementById('search');
const modelList = document.getElementById('model-list');
const calculator = document.getElementById('calculator');
const calcModelName = document.getElementById('calc-model-name');
const calcClose = document.getElementById('calc-close');
const inputTokens = document.getElementById('input-tokens');
const outputTokens = document.getElementById('output-tokens');
const requestsDay = document.getElementById('requests-day');
const costRequest = document.getElementById('cost-request');
const costDaily = document.getElementById('cost-daily');
const costMonthly = document.getElementById('cost-monthly');

let activeFilter = 'all';
let selectedModel = null;

function formatCost(n) {
  if (n < 0.01) return '$' + n.toFixed(5);
  if (n < 1) return '$' + n.toFixed(4);
  if (n < 100) return '$' + n.toFixed(2);
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function renderModels(query = '') {
  const q = query.toLowerCase();
  const filtered = MODELS.filter(m => {
    const matchesQuery = !q || m.name.toLowerCase().includes(q) || m.provider.toLowerCase().includes(q);
    const matchesTier = activeFilter === 'all' || m.tier === activeFilter;
    return matchesQuery && matchesTier;
  });

  if (filtered.length === 0) {
    modelList.innerHTML = '<div class="empty-state">No models found</div>';
    return;
  }

  modelList.innerHTML = filtered.map(m => `
    <div class="model-card" data-name="${m.name}">
      <div class="model-name">${m.name}<span class="tier-badge tier-${m.tier}">${m.tier}</span>${m.deprecated ? '<span class="tier-badge tier-deprecated">deprecated</span>' : ''}</div>
      <div class="model-provider">${m.provider} &middot; ${m.context} context</div>
      <div class="model-pricing">
        <span><span class="label">In:</span> <span class="value">$${m.input}/M</span></span>
        <span><span class="label">Out:</span> <span class="value">$${m.output}/M</span></span>
      </div>
    </div>
  `).join('');

  modelList.querySelectorAll('.model-card').forEach(card => {
    card.addEventListener('click', () => {
      const name = card.dataset.name;
      selectedModel = MODELS.find(m => m.name === name);
      if (selectedModel) showCalculator();
    });
  });
}

function showCalculator() {
  calculator.style.display = 'block';
  calcModelName.textContent = selectedModel.name;
  updateCost();
}

function updateCost() {
  if (!selectedModel) return;
  const inp = parseInt(inputTokens.value) || 0;
  const out = parseInt(outputTokens.value) || 0;
  const reqs = parseInt(requestsDay.value) || 0;

  const costPerReq = (inp / 1e6) * selectedModel.input + (out / 1e6) * selectedModel.output;
  const daily = costPerReq * reqs;
  const monthly = daily * 30;

  costRequest.textContent = formatCost(costPerReq);
  costDaily.textContent = formatCost(daily);
  costMonthly.textContent = formatCost(monthly);
}

// Event listeners
searchInput.addEventListener('input', () => renderModels(searchInput.value));

document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderModels(searchInput.value);
  });
});

calcClose.addEventListener('click', () => {
  calculator.style.display = 'none';
  selectedModel = null;
});

inputTokens.addEventListener('input', updateCost);
outputTokens.addEventListener('input', updateCost);
requestsDay.addEventListener('input', updateCost);

// Initial render
renderModels();
