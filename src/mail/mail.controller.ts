import {Body, Controller, Get, Post} from '@nestjs/common';
import {Public} from "../auth/pubilc.decorator";
import {MailService} from "./mail.service";
import {SendEmailDto} from "./dto/SendEmail.dto";

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}
  @Public()
  @Post()
  testEmail(@Body() sendEmailDto: SendEmailDto) {
    return this.mailService.sendConfirmationEmail(sendEmailDto);
  }

}
