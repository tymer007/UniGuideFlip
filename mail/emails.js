import { transporter, sender } from "./nodemailerConfig.js";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationCode) => {
  // Ensure recipient is a string
  const recipient = email;

  try {
    const response = await transporter.sendMail({
      from: sender, // Use the default sender from config
      to: recipient, // Directly use email as the recipient
      subject: "UniGuide - Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationCode
      ).replace("{email}", email), // HTML template
      category: "Email Verification",
    });
    console.log("Email verification sent successfully", response);
  } catch (error) {
    console.error("Error sending verification email:", error.message || error);
    throw new Error("Failed to send verification email");
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = email;

  try {
    const response = await transporter.sendMail({
      from: sender, // Use the default sender from config
      to: recipient, // Directly use email as the recipient
      subject: "Welcome to UniGuide",
      html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name), // HTML template
      category: "Welcome Email",
    });
    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error("Error sending welcome email:", error.message || error);
    throw new Error("Failed to send welcome email");
  }
};
