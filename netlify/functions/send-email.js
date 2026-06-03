const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({
          success: false,
          error: "Method not allowed",
        }),
      };
    }

    const { name, email, subject, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: "Missing required fields",
        }),
      };
    }

    console.log("RESEND KEY EXISTS:", !!process.env.RESEND_API_KEY);
    console.log("EMAIL_USER:", process.env.EMAIL_USER);

    // Email sent to you
    const ownerMail = await resend.emails.send({
      from: "Parth Patel <onboarding@resend.dev>", // Change after domain verification
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

    console.log("Owner Email:", ownerMail);

    // Auto reply to visitor
    const visitorMail = await resend.emails.send({
      from: "Parth Patel <onboarding@resend.dev>", // Change after domain verification
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

    console.log("Visitor Email:", visitorMail);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Emails sent successfully",
      }),
    };
  } catch (error) {
    console.error(
      "RESEND ERROR:",
      JSON.stringify(error, null, 2)
    );

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message || "Failed to send email",
      }),
    };
  }
};