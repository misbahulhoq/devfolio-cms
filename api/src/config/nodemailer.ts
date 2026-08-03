import nodemailer from 'nodemailer';

// Create a transporter using SMTP
export const transporter = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  service: 'gmail',
  port: 465,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
