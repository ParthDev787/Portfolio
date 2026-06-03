# Dev Portfolio — Project Structure

A clean, modular static portfolio with a proper separation of concerns.
No build tools required — pure HTML, CSS, and vanilla JS.

---

## Folder Layout

```
portfolio/
│
├── index.html                  ← Entry point. Only contains mount points + <script>/<link> tags.
│
├── components/                 ← HTML partials (one file per section)
│   ├── navbar.html
│   ├── hero.html
│   ├── skills.html
│   ├── projects.html
│   ├── lightbox.html
│   ├── contact.html
│   └── footer.html
│
└── assets/
    ├── css/                    ← One stylesheet per concern
    │   ├── variables.css       ← ALL design tokens (colours, fonts, spacing) — edit here first
    │   ├── base.css            ← Reset, scrollbar, noise overlay, shared utilities
    │   ├── navbar.css
    │   ├── hero.css
    │   ├── skills.css
    │   ├── projects.css
    │   ├── lightbox.css
    │   ├── contact.css
    │   └── footer.css
    │
    ├── js/
    │   ├── config.js           ← ALL content data (skills, projects, hero copy) — edit here
    │   ├── loader.js           ← Fetches HTML partials and injects them into index.html
    │   ├── hero.js             ← Typing animation + stat counters
    │   ├── skills.js           ← Skill card renderer + ring animations
    │   ├── projects.js         ← Project card renderer
    │   ├── lightbox.js         ← Modal open / close / populate
    │   ├── contact.js          ← Form validation + submit handler
    │   └── main.js             ← Orchestrator — inits all modules after DOM is ready
    │
    └── img/                    ← (create this folder) Place your photo here
        └── photo.jpg
```

---

## How to customise

### Personal info
Edit `components/hero.html` — update your name, description, and stats.

### Skills
Edit `assets/js/config.js` → `CONFIG.skills` array.

### Projects
Edit `assets/js/config.js` → `CONFIG.projects` array.

### Typing roles
Edit `assets/js/config.js` → `CONFIG.hero.typingRoles`.

### Colours / fonts
Edit `assets/css/variables.css` — all CSS custom properties live here.

### Contact details
Edit `components/contact.html` and `components/footer.html`.

### Real photo
In `components/hero.html`, replace:
```html
<div class="hero-photo-placeholder">
  <i class="fa-solid fa-user"></i>
</div>
```
with:
```html
<img src="assets/img/photo.jpg" alt="Your Name" class="hero-photo" />
```

---

## Adding a new section

1. Create `components/my-section.html`
2. Add `<div id="root-my-section"></div>` in `index.html`
3. Add `{ id: 'root-my-section', src: 'components/my-section.html' }` in `assets/js/loader.js`
4. Create `assets/css/my-section.css` and link it in `index.html`
5. Create `assets/js/my-section.js` with an `initMySection()` function
6. Call `initMySection()` in `assets/js/main.js`

---

