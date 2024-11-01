import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Function to send a test email
async function sendTestEmail() {
  try {
    let info = await transporter.sendMail({
      from: {
        name: "UniGuide",
        address: "mail@uniguideng.com",
      }, // Replace with your ImprovMX alias
      to: "ty.freeman47@gmail.com", // Test recipient email
      subject: "Test Email with name from Nodemailer",
      text: "Hello Ty, this is a test email sent using Nodemailer with my ImprovMX alias.",
    });
    console.log("Test email sent: " + info.response);
  } catch (error) {
    console.error("Error sending test email: ", error);
  }
}

// Test route to trigger the email
app.get("/send-test-email", async (req, res) => {
  await sendTestEmail();
  res.send("no reply Test email sent to ty.freeman47@gmail.com");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
