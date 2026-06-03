const PROFILE = Object.freeze({

  /* ── Identity ────────────────────────────────────────────── */
  name:        'Parth Prajapati',
  nameShort:   'Parth',               // used in greetings: "Hi, I'm {nameShort}"
  brandTag:    'dev.portfolio',       // navbar brand  →  < dev.portfolio />
  footerTag:   'ParthPrajapati',      // footer brand  →  <ParthPrajapati />

  /* ── Role / tagline ─────────────────────────────────────── */
  tagline:     'Full-Stack Developer · .NET & Angular Specialist',
  heroBio:     'Full-Stack Developer specialising in <strong>.NET</strong> &amp; <strong>Angular</strong> ecosystems. Passionate about clean architecture, scalable systems, and crafting exceptional user experiences.',
  heroBadge:   '✦ Available for Hire',

  /* ── Contact details ────────────────────────────────────── */
  email:       'parth@email.com',
  phone:       '+91 8140249043',
  location:    'Surat, Gujarat, India',
  availability:'Open to Opportunities',  // shown in contact section
  openToWork:  'Open to Work',           // shown in footer badge
  workTypes:   'Available for full-time & freelance roles',

  /* ── Social links (set href to '#' to hide) ─────────────── */
  socials: [
    { icon: 'fab fa-github',        href: '#',  title: 'GitHub'         },
    { icon: 'fab fa-linkedin-in',   href: '#',  title: 'LinkedIn'       },
    { icon: 'fab fa-x-twitter',     href: '#',  title: 'Twitter / X'    },
    { icon: 'fab fa-stack-overflow',href: '#',  title: 'Stack Overflow' },
    { icon: 'fab fa-dev',           href: '#',  title: 'Dev.to'         },
    { icon: 'fa fa-envelope',       href: '#',  title: 'Email'          },
  ],

  /* ── Hero stats ─────────────────────────────────────────── */
  stats: [
    { count: 1,  label: 'Years Exp.'   },
    { count: 3, label: 'Projects'     },
    { count: 9,  label: 'Technologies' },
  ],

  /* ── Footer ─────────────────────────────────────────────── */
  copyrightYear: '2025',
  builtIn:       'Surat, India',

  /* ── Footer tech stack list ─────────────────────────────── */
  techStack: [
    'C# / .NET',
    'Angular & TypeScript',
    'SQL Server',
    'HTML / CSS / JS',
  ],

  /* ── Photo ──────────────────────────────────────────────── */
  // Set photoSrc to a path like 'assets/img/photo.jpg' to use a real photo.
  // Leave as null to show the placeholder icon.
  photoSrc: null,
  photoAlt: 'Parth Prajapati',

});


/**
 * applyProfile(data)
 * Reads the PROFILE object (or a future API response with the same shape)
 * and writes every value into the live DOM.
 *
 * Called by main.js after all components are loaded.
 * To swap in API data: call applyProfile(apiResponse) instead.
 */
function applyProfile(data) {

  /* ── Helpers ──────────────────────────────────────────── */
  const set    = (sel, val)  => { const el = document.querySelector(sel); if (el) el.textContent = val; };
  const setHTML= (sel, val)  => { const el = document.querySelector(sel); if (el) el.innerHTML   = val; };
  const setAttr= (sel, a, v) => { const el = document.querySelector(sel); if (el) el.setAttribute(a, v); };

  /* ── Navbar brand ─────────────────────────────────────── */
  setHTML('.navbar-brand', `&lt; ${data.brandTag} /&gt;`);

  /* ── Hero ─────────────────────────────────────────────── */
  setHTML('.hero-badge', data.heroBadge);
  setHTML('#hero-name-accent', data.nameShort);          // <span id="hero-name-accent">
  setHTML('.hero-desc', data.heroBio);

  /* Stats — rebuild from profile.stats */
  const statsEl = document.querySelector('.hero-stats');
  if (statsEl) {
    statsEl.innerHTML = data.stats.map(s => `
      <div class="stat-item">
        <div class="num" data-count="${s.count}">0</div>
        <div class="lbl">${s.label}</div>
      </div>`).join('');
  }

  /* Photo — swap placeholder for real img if photoSrc is set */
  const photoWrap = document.querySelector('.hero-photo-wrap');
  if (photoWrap && data.photoSrc) {
    photoWrap.innerHTML = `<img src="${data.photoSrc}" alt="${data.photoAlt}" class="hero-photo" />`;
  }

  /* ── Contact section ──────────────────────────────────── */
  set('[data-profile="email"]',        data.email);
  set('[data-profile="phone"]',        data.phone);
  set('[data-profile="location"]',     data.location);
  set('[data-profile="availability"]', '● ' + data.availability);

  /* Contact social icons */
  const contactSocials = document.querySelector('#contact .social-links');
  if (contactSocials) {
    contactSocials.innerHTML = _buildSocialLinks(data.socials.slice(0, 4));
  }

  /* ── Footer ───────────────────────────────────────────── */
  setHTML('.footer-brand', `&lt;${data.footerTag} /&gt;`);
  set('.footer-tagline', data.tagline);

  /* Footer social icons */
  const footerSocials = document.querySelector('footer .social-links');
  if (footerSocials) {
    footerSocials.innerHTML = _buildSocialLinks(data.socials);
  }

  /* Footer tech stack list */
  const stackList = document.querySelector('.footer-stack-list');
  if (stackList) {
    stackList.innerHTML = data.techStack
      .map(t => `<li><a href="#">${t}</a></li>`)
      .join('');
  }

  /* Footer availability badge */
  set('.footer-open-to-work',  data.openToWork);
  set('.footer-work-types',    data.workTypes);

  /* Footer copyright */
  set('.footer-copyright',
    `© ${data.copyrightYear} ${data.name}. Built with `);
  // The ♥ span is kept in HTML; only the text node before it is replaced.

  set('.footer-built-in', data.builtIn + '.');
}


/** Build social link HTML from the socials array */
function _buildSocialLinks(socials) {
  return socials.map(s => `
    <a href="${s.href}" class="social-link" title="${s.title}" aria-label="${s.title}">
      <i class="${s.icon}" aria-hidden="true"></i>
    </a>`).join('');
}
