/**
 * skills.js
 * ─────────────────────────────────────────────────────────────
 * Renders skill cards from CONFIG.skills and animates the
 * circular progress rings when they enter the viewport.
 * ─────────────────────────────────────────────────────────────
 */

const SKILL_RING_CIRCUMFERENCE = 2 * Math.PI * 45; // r = 45 → ≈ 283

/** Build the HTML string for a single skill card */
function buildSkillCard(skill, index) {
  const offset = SKILL_RING_CIRCUMFERENCE - (skill.pct / 100) * SKILL_RING_CIRCUMFERENCE;
  const delay  = index * 50;

  return `
    <div class="col-6 col-md-4 col-lg-3"
         data-aos="zoom-in" data-aos-delay="${delay}">
      <div class="skill-card" data-pct="${skill.pct}">

        <div class="skill-circle">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <circle class="track" cx="50" cy="50" r="45"/>
            <circle class="fill"  cx="50" cy="50" r="45"
              stroke-dasharray="${SKILL_RING_CIRCUMFERENCE}"
              stroke-dashoffset="${SKILL_RING_CIRCUMFERENCE}"
              data-offset="${offset}"/>
          </svg>
          <div class="pct" aria-label="${skill.pct}%">0%</div>
        </div>

        <span class="skill-icon" aria-hidden="true">${skill.icon}</span>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-sub">${skill.sub}</div>

      </div>
    </div>`;
}

/** Animate a single card's ring and counter when it enters the viewport */
function animateSkillCard(card) {
  const fill   = card.querySelector('.fill');
  const pctEl  = card.querySelector('.pct');
  const target = parseInt(card.dataset.pct, 10);

  // Trigger CSS transition
  fill.style.strokeDashoffset = fill.dataset.offset;

  // Count-up number
  let current = 0;
  const tick  = () => {
    if (current < target) {
      pctEl.textContent = ++current + '%';
      requestAnimationFrame(tick);
    }
  };
  tick();
}

/** Observe cards and fire animation once each enters the viewport */
function observeSkillCards() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateSkillCard(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll('.skill-card').forEach((card) => observer.observe(card));
}

/** Public init — called by main.js after components are ready */
function initSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = CONFIG.skills
    .map((skill, i) => buildSkillCard(skill, i))
    .join('');

  observeSkillCards();
}
