import { Injectable } from '@nestjs/common';
import { transporter } from '../config/nodemailer';
import 'dotenv/config';

@Injectable()
export class EmailService {
  constructor() {}
  async sendEmail(address: string, subject: string, messageBody: string) {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: address,
      subject: subject,
      text: messageBody,
    });
  }
}
