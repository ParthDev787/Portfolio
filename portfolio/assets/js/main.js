/**
 * main.js
 * ─────────────────────────────────────────────────────────────
 * Application orchestrator.
 *
 * Waits for the 'components:ready' event fired by loader.js
 * (guaranteeing all HTML partials are in the DOM), then
 * initialises every module in the correct order.
 *
 * Startup order:
 *   1. AOS (third-party animation library)
 *   2. applyProfile()  ← writes PROFILE data into the DOM first
 *   3. initHero()      ← needs stats in DOM for counter observers
 *   4. initSkills()
 *   5. initProjects()
 *   6. initLightbox()
 *   7. initContact()
 *
 * Future API usage:
 *   fetch('/api/profile')
 *     .then(r => r.json())
 *     .then(data => applyProfile(data));
 * ─────────────────────────────────────────────────────────────
 */

document.addEventListener('components:ready', () => {

  /* 1. Third-party libs */
  AOS.init({
    duration: 750,
    easing:   'ease-out-cubic',
    once:     true,
    offset:   60,
  });

  /* 2. Inject all personal data from profile.js
        Must run before initHero so stats are in the DOM
        for the IntersectionObserver counter animation.     */
  applyProfile(PROFILE);

  /* 3. Section modules */
  initHero();       // hero.js     — typing animation, stat counters
  initSkills();     // skills.js   — render cards + ring animations
  initProjects();   // projects.js — render cards
  initLightbox();   // lightbox.js — bind open/close events
  initContact();    // contact.js  — bind form submit

  console.info('[main] Portfolio initialised ✓');
});
