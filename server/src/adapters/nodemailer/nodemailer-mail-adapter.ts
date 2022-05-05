import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
      user: "ef9f85a076627e",
      pass: "717b9bb1db086b"
   }
});

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({ subject, body }: SendMailData) {
      await transport.sendMail({
         from: 'Equipe Feedget <oi@feedget.com>',
         to: 'Fernando R Silva <fernando100ribeirosilva@gmail.com>',
         subject,
         html: body
      });
   }
}

