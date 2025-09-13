// email-sender.js
// Sends an email using Nodemailer

const nodemailer = require("nodemailer");

// Transporter setup (use Gmail for testing)
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",     // ⚠️ replace with your test email
    pass: "your-app-password",        // ⚠️ use an App Password, not your real one
  },
});

// Mail options
let mailOptions = {
  from: "your-email@gmail.com",
  to: "recipient@gmail.com",
  subject: "Hello from Node.js",
  text: "This is a test email sent using Node.js!",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});
