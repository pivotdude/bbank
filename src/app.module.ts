import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './auth/roles.guard';
import { AccountModule } from './account/account.module';
import { CardModule } from './card/card.module';
import { CorsMiddleware } from './cors.middleware';

@Module({
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    CorsMiddleware,
    {
      provide: 'ROLES_GUARD',
      useClass: RolesGuard,
    },
  ],
  imports: [UserModule, AuthModule, AccountModule, CardModule],
})
export class AppModule {}
