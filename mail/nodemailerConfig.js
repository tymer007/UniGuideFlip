// nodemailerConfig.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

// Default sender information
const sender = {
  name: "UniGuide",
  address: "mail@uniguideng.com"
};

export { transporter, sender };