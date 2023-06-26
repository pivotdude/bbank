import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });
  app.useGlobalPipes(new ValidationPipe());
  // app.enableCors({
  //   origin: ['*'],
  //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //   credentials: true,
  //   allowedHeaders: ['*'],
  // });
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
