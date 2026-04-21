// ============================================
// WAITLISTKIT — WAITLIST BUILDER
// ============================================

// State
let currentStep = 1;
let selectedTemplate = 'dark';
let waitlistData = {
    name: '',
    tagline: '',
    description: '',
    template: 'dark',
    primaryColor: '#6366f1',
    bgColor: '',
    logoUrl: '',
    hideBranding: false
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

function getFromStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Storage error:', e);
        return null;
    }
}

function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Storage error:', e);
        return false;
    }
}

function getWaitlists() {
    return getFromStorage('waitlistkit_waitlists') || {};
}

function saveWaitlist(id, data) {
    const waitlists = getWaitlists();
    waitlists[id] = data;
    return saveToStorage('waitlistkit_waitlists', waitlists);
}

// ============================================
// STEP NAVIGATION
// ============================================

function nextStep(step) {
    // Validate current step
    if (currentStep === 1 && step === 2) {
        const name = document.getElementById('waitlist-name').value.trim();
        const tagline = document.getElementById('waitlist-tagline').value.trim();
        
        if (!name) {
            alert('Please enter a product name');
            return;
        }
        if (!tagline) {
            alert('Please enter a tagline');
            return;
        }
        
        waitlistData.name = name;
        waitlistData.tagline = tagline;
        waitlistData.description = document.getElementById('waitlist-description').value.trim();
    }

    // Update step indicators
    document.querySelectorAll('.step-dot').forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (index + 1 < step) {
            dot.classList.add('completed');
        } else if (index + 1 === step) {
            dot.classList.add('active');
        }
    });

    // Show correct step
    document.querySelectorAll('.builder-step').forEach((stepEl, index) => {
        stepEl.classList.remove('active');
        if (index + 1 === step) {
            stepEl.classList.add('active');
        }
    });

    currentStep = step;

    // Update preview if on step 3
    if (step === 3) {
        updatePreview();
    }
}

// ============================================
// TEMPLATE SELECTION
// ============================================

function selectTemplate(template) {
    selectedTemplate = template;
    waitlistData.template = template;

    // Update UI
    document.querySelectorAll('.template-card').forEach(card => {
        card.classList.remove('selected');
        if (card.dataset.template === template) {
            card.classList.add('selected');
        }
    });

    // Set default colors based on template
    const templates = {
        dark: { primary: '#6366f1', bg: '#0a0a0f' },
        gradient: { primary: '#ffffff', bg: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' },
        minimal: { primary: '#333333', bg: '#ffffff' },
        neon: { primary: '#00ff88', bg: '#0a0a0f' }
    };

    if (templates[template]) {
        document.getElementById('primary-color').value = templates[template].primary;
        document.getElementById('primary-color-text').value = templates[template].primary;
        waitlistData.primaryColor = templates[template].primary;
        waitlistData.bgColor = templates[template].bg;
    }
}

// Color input sync
document.getElementById('primary-color')?.addEventListener('input', (e) => {
    document.getElementById('primary-color-text').value = e.target.value;
    waitlistData.primaryColor = e.target.value;
    updatePreview();
});

document.getElementById('primary-color-text')?.addEventListener('input', (e) => {
    if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value)) {
        document.getElementById('primary-color').value = e.target.value;
        waitlistData.primaryColor = e.target.value;
        updatePreview();
    }
});

// ============================================
// PREVIEW
// ============================================

function updatePreview() {
    const previewName = document.getElementById('preview-name');
    const previewTagline = document.getElementById('preview-tagline');
    const previewBtn = document.getElementById('preview-btn');
    const previewFrame = document.getElementById('preview-frame');

    previewName.textContent = waitlistData.name || 'Your Product';
    previewName.style.color = waitlistData.primaryColor;
    previewTagline.textContent = waitlistData.tagline || 'Your amazing tagline';
    previewBtn.style.backgroundColor = waitlistData.primaryColor;

    // Apply template background
    const bgColors = {
        dark: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a25 100%)',
        gradient: `linear-gradient(135deg, ${waitlistData.primaryColor} 0%, #a855f7 100%)`,
        minimal: '#ffffff',
        neon: '#0a0a0f'
    };
    previewFrame.style.background = bgColors[selectedTemplate] || bgColors.dark;

    // Adjust text color for light templates
    if (selectedTemplate === 'minimal') {
        previewName.style.color = waitlistData.primaryColor;
        previewTagline.style.color = '#666';
    } else {
        previewTagline.style.color = '';
    }
}

// ============================================
// CREATE WAITLIST
// ============================================

function createWaitlist() {
    const btn = document.getElementById('create-btn');
    btn.disabled = true;
    btn.textContent = 'Creating...';

    // Generate unique ID
    const waitlistId = generateId();

    // Create waitlist object
    const waitlist = {
        id: waitlistId,
        name: waitlistData.name,
        tagline: waitlistData.tagline,
        description: waitlistData.description,
        template: waitlistData.template,
        primaryColor: waitlistData.primaryColor,
        bgColor: waitlistData.bgColor,
        logoUrl: waitlistData.logoUrl,
        hideBranding: waitlistData.hideBranding,
        signups: [],
        createdAt: new Date().toISOString()
    };

    // Save to localStorage
    if (saveWaitlist(waitlistId, waitlist)) {
        showSuccess(waitlistId);
    } else {
        alert('Error creating waitlist. Please try again.');
        btn.disabled = false;
        btn.textContent = '🚀 Launch Waitlist';
    }
}

function showSuccess(waitlistId) {
    // Hide builder, show success
    document.getElementById('builder-view').style.display = 'none';
    document.getElementById('success-view').style.display = 'block';

    // Set URL
    const baseUrl = window.location.origin;
    const waitlistUrl = `${baseUrl}/w/index.html?id=${waitlistId}`;
    document.getElementById('waitlist-url').value = waitlistUrl;

    // Set links
    document.getElementById('view-waitlist').href = waitlistUrl;
    
    const shareText = encodeURIComponent(
        `I just created a waitlist for ${waitlistData.name}! Join the waitlist and get early access.`
    );
    const shareUrl = encodeURIComponent(waitlistUrl);
    document.getElementById('share-twitter').href = 
        `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;

    // Render waitlist list
    renderWaitlistList();
}

function copyUrl() {
    const urlInput = document.getElementById('waitlist-url');
    navigator.clipboard.writeText(urlInput.value).then(() => {
        const btn = event.target;
        btn.textContent = '✓ Copied!';
        setTimeout(() => {
            btn.textContent = 'Copy';
        }, 2000);
    }).catch(() => {
        prompt('Copy this link:', urlInput.value);
    });
}

function showBuilder() {
    // Reset form
    document.getElementById('waitlist-name').value = '';
    document.getElementById('waitlist-tagline').value = '';
    document.getElementById('waitlist-description').value = '';
    
    // Reset state
    currentStep = 1;
    waitlistData = {
        name: '',
        tagline: '',
        description: '',
        template: 'dark',
        primaryColor: '#6366f1',
        bgColor: '',
        logoUrl: '',
        hideBranding: false
    };

    // Show builder
    document.getElementById('success-view').style.display = 'none';
    document.getElementById('builder-view').style.display = 'block';
    
    // Reset steps
    nextStep(1);
    selectTemplate('dark');
}

// ============================================
// WAITLIST LIST
// ============================================

function renderWaitlistList() {
    const container = document.getElementById('waitlist-list');
    const waitlists = getWaitlists();
    const waitlistArray = Object.values(waitlists);

    if (waitlistArray.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📋</div>
                <p>No waitlists yet. Create your first one!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = waitlistArray.map(w => `
        <div class="waitlist-item">
            <div class="waitlist-item-info">
                <h3>${escapeHtml(w.name)}</h3>
                <p>${w.signups ? w.signups.length : 0} signups • Created ${formatDate(w.createdAt)}</p>
            </div>
            <div class="waitlist-item-actions">
                <a href="w/index.html?id=${w.id}" class="btn btn-secondary btn-small" target="_blank">View</a>
                <button class="btn btn-secondary btn-small" onclick="copyWaitlistUrl('${w.id}')">Copy Link</button>
                <button class="btn btn-secondary btn-small" onclick="deleteWaitlist('${w.id}')" style="color: #ef4444;">Delete</button>
            </div>
        </div>
    `).join('');
}

function copyWaitlistUrl(id) {
    const baseUrl = window.location.origin;
    const url = `${baseUrl}/w/index.html?id=${id}`;
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copied!');
    }).catch(() => {
        prompt('Copy this link:', url);
    });
}

function deleteWaitlist(id) {
    if (!confirm('Are you sure you want to delete this waitlist? This cannot be undone.')) {
        return;
    }

    const waitlists = getWaitlists();
    delete waitlists[id];
    saveToStorage('waitlistkit_waitlists', waitlists);
    renderWaitlistList();
}

// ============================================
// HELPERS
// ============================================

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Check if we should show success view (has waitlists)
    const waitlists = getWaitlists();
    if (Object.keys(waitlists).length > 0) {
        // Could show the list, but let's default to builder
    }

    // Initialize preview
    updatePreview();
});
