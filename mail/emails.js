import { transporter, sender } from "./nodemailerConfig.js";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE
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

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = email;

  try {
    const response = await transporter.sendMail({
      from: sender, // Use the default sender from config
      to: recipient, // Directly use email as the recipient
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL).replace("{email}", email), // HTML template
      category: "Password Reset",
    })
  } catch (error) {
    console.error("Error sending password reset email:", error.message || error);
    throw new Error("Failed to send password reset email");
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = email;

  try {
    const response = await transporter.sendMail({
      from: sender, // Use the default sender from config
      to: recipient, // Directly use email as the recipient
      subject: "Password Reset Succesful", //
      html: PASSWORD_RESET_SUCCESS_TEMPLATE, // HTML template
      category: "Password Reset",
    }) 
    console.log("Password reset email sent successfully", response);
  } catch (error) {
    console.error("Error sending succesful password reset email:", error.message || error);
    throw new Error("Failed to send succesful password reset email");
  }
};