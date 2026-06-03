const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        success: false,
        error: "Method not allowed",
      }),
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: "All required fields must be filled.",
        }),
      };
    }

    console.log("RESEND KEY EXISTS:", !!process.env.RESEND_API_KEY);
    console.log("EMAIL_USER:", process.env.EMAIL_USER);

    // Send email to site owner
    const ownerResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject || `Portfolio Contact From ${name}`,
      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject || "No Subject"}</p>

        <h3>Message</h3>
        <p>${message}</p>
      `,
    });

    console.log(
      "OWNER RESPONSE:",
      JSON.stringify(ownerResponse, null, 2)
    );

    // Auto-reply
    try {
      const visitorResponse = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: email,
        subject: "Thank you for contacting me",
        html: `
          <h2>Hello ${name},</h2>

          <p>
            Thank you for contacting me through my portfolio website.
          </p>

          <p>
            I have received your message successfully and will get back to you soon.
          </p>

          <br>

          <p>
            Regards,<br>
            Parth Patel
          </p>
        `,
      });

      console.log(
        "VISITOR RESPONSE:",
        JSON.stringify(visitorResponse, null, 2)
      );
    } catch (autoReplyError) {
      console.error(
        "AUTO REPLY FAILED:",
        JSON.stringify(autoReplyError, null, 2)
      );

      // Don't fail entire request
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Message sent successfully",
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
        error:
          error.message || "Failed to send email",
      }),
    };
  }
};