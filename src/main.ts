import { NestFactory } from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const swagger_config = new DocumentBuilder()
    .setTitle('MyTestSwag')
    .setDescription('test')
    .setVersion('1')
    .addTag('study')
    .build();
  const document = SwaggerModule.createDocument(app, swagger_config);
  SwaggerModule.setup('api-document', app, document);
  
  
  await app.listen(3000);
}
bootstrap();
