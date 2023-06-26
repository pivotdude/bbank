import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from "../user/user.service";
import { AuthModule } from "../auth/auth.module";

@Module({
  controllers: [CardController],
  providers: [CardService, PrismaService, UserService],
})
export class CardModule {}
