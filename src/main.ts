import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule);
  console.log(`http 서버 실행 ${port}`);
  await app.listen(port);
}
bootstrap();
