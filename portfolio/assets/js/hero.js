/**
 * hero.js
 * ─────────────────────────────────────────────────────────────
 * Typing animation and stat counter animations for the hero
 * section. Roles are defined in CONFIG.hero.typingRoles.
 * ─────────────────────────────────────────────────────────────
 */

/* ── Typing effect ─────────────────────────────────────────── */
function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const roles    = CONFIG.hero.typingRoles;
  let roleIndex  = 0;
  let charIndex  = 0;
  let isDeleting = false;

  function tick() {
    const word = roles[roleIndex];

    if (!isDeleting) {
      el.textContent = word.slice(0, ++charIndex);
      if (charIndex === word.length) {
        isDeleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      el.textContent = word.slice(0, --charIndex);
      if (charIndex === 0) {
        isDeleting  = false;
        roleIndex   = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(tick, isDeleting ? 55 : 90);
  }

  tick();
}

/* ── Stat counters ─────────────────────────────────────────── */
function initCounters() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el  = entry.target;
        const end = parseInt(el.dataset.count, 10);
        let n     = 0;

        const timer = setInterval(() => {
          el.textContent = ++n + '+';
          if (n >= end) clearInterval(timer);
        }, 60);

        observer.unobserve(el);
      });
    },
    { threshold: 1 }
  );

  document.querySelectorAll('[data-count]').forEach((el) => observer.observe(el));
}

/** Public init — called by main.js after components are ready */
function initHero() {
  initTyping();
  initCounters();
}
