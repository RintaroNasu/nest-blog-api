import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//根元となるところ。
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(5050);
}
bootstrap();
