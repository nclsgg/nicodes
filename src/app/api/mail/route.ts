import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface MailBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  const body: MailBody = await req.json();

  const { name, email, subject, message } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_FROM_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          padding: 10px 0;
          border-bottom: 1px solid #dddddd;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          color: #333333;
        }
        .content {
          padding: 20px 0;
        }
        .content h2 {
          margin: 0 0 10px 0;
          font-size: 20px;
          color: #333333;
        }
        .content p {
          margin: 0 0 15px 0;
          font-size: 16px;
          color: #666666;
          line-height: 1.5;
        }
        .footer {
          text-align: center;
          padding: 10px 0;
          border-top: 1px solid #dddddd;
          font-size: 12px;
          color: #999999;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nova Mensagem de Contato</h1>
        </div>
        <div class="content">
          <h2>Detalhes da Mensagem</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${subject}</p>
          <p><strong>Mensagem:</strong><br>${message}</p>
        </div>
        <div class="footer">
          <p>Este e-mail foi enviado do seu site.</p>
        </div>
      </div>
    </body>
    </html>
    `;

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM_USER,
      to: process.env.MAIL_TO_USER,
      subject: subject,
      html: mailTemplate,
    });

    return NextResponse.json({ message: 'Message sent' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Message not sent' }, { status: 500 });
  }
}
