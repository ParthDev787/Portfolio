/**
 * loader.js
 * ─────────────────────────────────────────────────────────────
 * Fetches each HTML partial and injects it into its root element.
 * Fires a custom 'components:ready' event when all are loaded
 * so other modules know the DOM is fully built.
 *
 * Add a new component:
 *   1. Create components/my-section.html
 *   2. Add a <div id="root-my-section"></div> in index.html
 *   3. Add an entry to COMPONENTS below.
 * ─────────────────────────────────────────────────────────────
 */

const COMPONENTS = [
  { id: 'root-navbar',   src: 'components/navbar.html'   },
  { id: 'root-hero',     src: 'components/hero.html'     },
  { id: 'root-skills',   src: 'components/skills.html'   },
  { id: 'root-projects', src: 'components/projects.html' },
  { id: 'root-lightbox', src: 'components/lightbox.html' },
  { id: 'root-contact',  src: 'components/contact.html'  },
  { id: 'root-footer',   src: 'components/footer.html'   },
];

async function loadComponent({ id, src }) {
  const el = document.getElementById(id);
  if (!el) {
    console.warn(`[loader] Mount point #${id} not found — skipping ${src}`);
    return;
  }
  try {
    const res  = await fetch(src);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    el.innerHTML = await res.text();
  } catch (err) {
    console.error(`[loader] Failed to load ${src}:`, err);
  }
}

async function loadAllComponents() {
  await Promise.all(COMPONENTS.map(loadComponent));
  document.dispatchEvent(new CustomEvent('components:ready'));
}

loadAllComponents();
