const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    // Send contact message to you
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject || `Portfolio Contact From ${name}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Auto-reply to visitor
    await resend.emails.send({
      from: "Parth Patel <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for contacting me",
      html: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting me through my portfolio website.</p>

        <p>
          I have received your message successfully and will get back to you
          as soon as possible.
        </p>

        <p>
          Best Regards,<br>
          Parth Patel<br>
          Full Stack Developer
        </p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};