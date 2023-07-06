import { Injectable } from '@nestjs/common';
import {MailerService} from "@nestjs-modules/mailer";
import {SendEmailDto} from "./dto/SendEmail.dto";

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  async sendConfirmationEmail(sendEmailDto: SendEmailDto) {

    return this.mailerService.sendMail({
      to: sendEmailDto.email,
      subject: sendEmailDto.theme,
      template: sendEmailDto.template,
      context: sendEmailDto.context,
    });
  }
}
