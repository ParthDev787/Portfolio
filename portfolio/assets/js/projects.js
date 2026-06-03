/**
 * projects.js
 * ─────────────────────────────────────────────────────────────
 * Renders project cards from CONFIG.projects.
 * Card click opens the lightbox — see lightbox.js.
 * ─────────────────────────────────────────────────────────────
 */

/** Build the HTML string for a single project card */
function buildProjectCard(project, index) {
  const tagsHtml = project.tags
    .map((tag) => `<span class="project-tag">${tag}</span>`)
    .join('');

  const excerpt = project.desc.length > 95
    ? project.desc.substring(0, 95) + '…'
    : project.desc;

  return `
    <div class="col-md-6 col-lg-4"
         data-aos="fade-up" data-aos-delay="${index * 70}">
      <div class="project-card" data-project-index="${index}">

        <div class="project-thumb">
          <span class="thumb-icon" aria-hidden="true">${project.thumb}</span>
          <div class="project-overlay" aria-hidden="true">
            <button class="open-btn">View Details ↗</button>
          </div>
        </div>

        <div class="project-body">
          <div class="project-tags" aria-label="Technologies: ${project.tags.join(', ')}">
            ${tagsHtml}
          </div>
          <div class="project-title">${project.title}</div>
          <p class="project-desc">${excerpt}</p>
        </div>

      </div>
    </div>`;
}

/** Public init — called by main.js after components are ready */
function initProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = CONFIG.projects
    .map((project, i) => buildProjectCard(project, i))
    .join('');

  // Delegate click handling to the grid container (one listener, not N)
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('[data-project-index]');
    if (!card) return;
    openLightbox(parseInt(card.dataset.projectIndex, 10));
  });
}
