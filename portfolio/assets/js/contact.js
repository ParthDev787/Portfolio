function validateContactForm({ name, email, message }) {
  if (!name) return "Please enter your name.";
  if (!email) return "Please enter your email address.";
  if (!message) return "Please enter a message.";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please enter a valid email address.";
  }

  return null;
}

function showContactSuccess() {
  document.getElementById("contactForm").style.display = "none";
  document.getElementById("formSuccess").style.display = "block";
}

async function submitContactForm() {
  const btn = document.getElementById("contactSubmitBtn");

  const name = document.getElementById("cName").value.trim();
  const email = document.getElementById("cEmail").value.trim();
  const subject = document.getElementById("cSubject").value.trim();
  const message = document.getElementById("cMessage").value.trim();

  const error = validateContactForm({
    name,
    email,
    message,
  });

  if (error) {
    alert(error);
    return;
  }

  btn.disabled = true;
  btn.innerHTML = "Sending...";

  try {
    const response = await fetch("/.netlify/functions/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    // Read raw response first
    const text = await response.text();

    console.log("Server Response:");
    console.log(text);

    let result;

    try {
      result = JSON.parse(text);
    } catch {
      throw new Error(text);
    }

    if (!response.ok) {
      throw new Error(result.error || "Failed to send.");
    }

    showContactSuccess();

  } catch (err) {
    console.error(err);
    alert(err.message);
  } finally {
    btn.disabled = false;
    btn.innerHTML =
      '<i class="fa fa-paper-plane me-2"></i> Send Message';
  }
}

function initContact() {
  const btn = document.getElementById("contactSubmitBtn");

  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    submitContactForm();
  });
}