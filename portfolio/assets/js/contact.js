function validateContactForm({ name, email, message }) {
  if (!name) return "Please enter your name.";
  if (!email) return "Please enter your email.";
  if (!message) return "Please enter a message.";

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Please enter a valid email.";
  }

  return null;
}

function showContactSuccess() {
  document.getElementById("contactForm").style.display = "none";
  document.getElementById("formSuccess").style.display = "block";
}

async function submitContactForm() {
  const btn = document.getElementById(
    "contactSubmitBtn"
  );

  const name =
    document.getElementById("cName").value.trim();

  const email =
    document.getElementById("cEmail").value.trim();

  const subject =
    document.getElementById("cSubject").value.trim();

  const message =
    document.getElementById("cMessage").value.trim();

  const validationError =
    validateContactForm({
      name,
      email,
      message,
    });

  if (validationError) {
    alert(validationError);
    return;
  }

  btn.disabled = true;
  btn.innerHTML = "Sending...";

  try {
    const response = await fetch(
      "/.netlify/functions/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      }
    );

    const result =
      await response.json();

    if (!response.ok) {
      throw new Error(
        result.error ||
          "Failed to send message."
      );
    }

    showContactSuccess();
  } catch (error) {
    console.error(error);
    alert(error.message);
  } finally {
    btn.disabled = false;

    btn.innerHTML =
      '<i class="fa fa-paper-plane me-2"></i> Send Message';
  }
}

function initContact() {
  const btn = document.getElementById(
    "contactSubmitBtn"
  );

  if (!btn) return;

  btn.addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      submitContactForm();
    }
  );
}