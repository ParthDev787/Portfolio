/**
 * lightbox.js
 * ─────────────────────────────────────────────────────────────
 * Controls the project detail modal.
 * openLightbox(index) is called by projects.js on card click.
 * ─────────────────────────────────────────────────────────────
 */

const BADGE_CLASS_MAP = {
  blue:   'lb-badge-blue',
  purple: 'lb-badge-purple',
  green:  'lb-badge-green',
};

/** Populate and open the lightbox for a given project index */
function openLightbox(index) {
  const project = CONFIG.projects[index];
  if (!project) return;

  // Populate fields
  document.getElementById('lb-eyebrow').textContent = project.eyebrow;
  document.getElementById('lb-title').textContent   = project.title;
  document.getElementById('lb-desc').textContent    = project.desc;
  document.getElementById('lb-role').textContent    = project.role;

  document.getElementById('lb-thumb').innerHTML =
    `<span aria-hidden="true" style="font-size:4rem">${project.thumb}</span>`;

  document.getElementById('lb-tags').innerHTML = project.tags
    .map((t) => `<span class="lb-badge lb-badge-blue">${t}</span>`)
    .join('');

  document.getElementById('lb-features').innerHTML = project.features
    .map((f) => `
      <div class="lb-feature">
        <i class="fa fa-check-circle fa-sm" aria-hidden="true"></i>
        <span style="font-size:.9rem;color:var(--muted)">${f}</span>
      </div>`)
    .join('');

  document.getElementById('lb-stack').innerHTML = project.stack
    .map(([name, colour]) => {
      const cls = BADGE_CLASS_MAP[colour] || 'lb-badge-blue';
      return `<span class="lb-badge ${cls}">${name}</span>`;
    })
    .join('');

  document.getElementById('lb-status').innerHTML =
    `<span style="font-size:.9rem">${project.status}</span>`;

  // Show overlay
  document.getElementById('lbOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

/** Close the lightbox */
function closeLightbox() {
  document.getElementById('lbOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

/** Public init — called by main.js after components are ready */
function initLightbox() {
  const overlay = document.getElementById('lbOverlay');
  if (!overlay) return;

  document.getElementById('lbClose')
    .addEventListener('click', closeLightbox);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}
