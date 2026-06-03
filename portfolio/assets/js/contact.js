/**
 * contact.js
 * ─────────────────────────────────────────────────────────────
 * Contact form validation and submission handler.
 * Replace the body of submitContactForm() with a real fetch()
 * call when you have a backend or service (EmailJS, Formspree…).
 * ─────────────────────────────────────────────────────────────
 */

/** Validate form fields; return error message or null if valid */
function validateContactForm({ name, email, message }) {
  if (!name)    return 'Please enter your name.';
  if (!email)   return 'Please enter your email address.';
  if (!message) return 'Please enter a message.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address.';
  return null;
}

/** Show the success state and hide the form */
function showContactSuccess() {
  document.getElementById('contactForm').style.display  = 'none';
  document.getElementById('formSuccess').style.display  = 'block';
}

/**
 * Main submit handler.
 * Swap the TODO block for a real API call when ready.
 */
async function submitContactForm() {
  const name    = document.getElementById('cName')?.value.trim()    ?? '';
  const email   = document.getElementById('cEmail')?.value.trim()   ?? '';
  const subject = document.getElementById('cSubject')?.value.trim() ?? '';
  const message = document.getElementById('cMessage')?.value.trim() ?? '';

  const error = validateContactForm({ name, email, message });
  if (error) {
    alert(error);
    return;
  }

  // TODO: replace with fetch('/api/contact', { method:'POST', body: JSON.stringify({...}) })
  //       or an EmailJS / Formspree call.
  console.info('[contact] Payload:', { name, email, subject, message });

  showContactSuccess();
}

/** Public init — called by main.js after components are ready */
function initContact() {
  const btn = document.getElementById('contactSubmitBtn');
  if (!btn) return;
  btn.addEventListener('click', submitContactForm);
}
