const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email sent to you
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject || `Portfolio Contact From ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif">
          <h2>New Portfolio Message</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>

          <hr>

          <p>${message}</p>
        </div>
      `,
    });

    // Auto reply to visitor
    await transporter.sendMail({
      from: `"Parth Patel" <${process.env.EMAIL_USER}>`,
      to: email,
      replyTo: process.env.EMAIL_USER,
      subject: "Thank you for contacting me",
      html: `
      <div style="
        font-family:Arial,sans-serif;
        max-width:600px;
        margin:auto;
        padding:20px;
      ">
        
        <h2>Hello ${name},</h2>

        <p>
          Thank you for reaching out through my portfolio website.
        </p>

        <p>
          I have successfully received your message and will review it shortly.
        </p>

        <p>
          I typically respond within 24-48 hours depending on project workload.
        </p>

        <p>
          Your inquiry is important to me and I appreciate your interest.
        </p>

        <br>

        <p>
          Best Regards,
        </p>

        <p>
          <strong>Parth Patel</strong><br>
          Full Stack Developer
        </p>

      </div>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
      }),
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