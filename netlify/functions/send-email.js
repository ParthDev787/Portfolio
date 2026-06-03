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

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: subject || `Portfolio Contact From ${name}`,
            html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Thank you for contacting me",
            html: `
                <div style="font-family:Arial,sans-serif;max-width:600px">
                <h2>Thank You, ${name}!</h2>

                <p>I have received your message successfully.</p>

                <p>
                    Thank you for reaching out. I will review your inquiry
                    and get back to you as soon as possible.
                </p>

                <p>
                    In the meantime, feel free to explore my portfolio
                    and recent projects.
                </p>

                <br>

                <p>Best Regards,</p>
                <p><strong>Your Name</strong></p>
                <p>Full Stack Developer</p>
                </div>
            `
        });

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
            }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message,
            }),
        };
    }
};