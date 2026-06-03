const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({
          error: "Method not allowed",
        }),
      };
    }

    const { name, email, subject, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Missing required fields",
        }),
      };
    }

    console.log("Sending contact email...");
    console.log("EMAIL_USER:", process.env.EMAIL_USER);

    // Send message to you
    const ownerMail = await resend.emails.send({
      from: "Portfolio <noreply@parthpatel.dev>",
      to: [process.env.EMAIL_USER],
      replyTo: email,
      subject: subject || `Portfolio Contact From ${name}`,
      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <h3>Message</h3>
        <p>${message}</p>
      `,
    });

    console.log("Owner Email Result:", ownerMail);

    // Auto reply
    const visitorMail = await resend.emails.send({
      from: "Portfolio <noreply@parthpatel.dev>",
      to: [email],
      subject: "Thank you for contacting me",
      html: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting me through my portfolio website.</p>

        <p>
          I have received your message successfully and will get back to you as soon as possible.
        </p>

        <br>

        <p>
          Best Regards,<br>
          Parth Patel<br>
          Full Stack Developer
        </p>
      `,
    });

    console.log("Visitor Email Result:", visitorMail);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        ownerMail,
        visitorMail,
      }),
    };
  } catch (error) {
    console.error("RESEND ERROR:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
        details: error,
      }),
    };
  }
};