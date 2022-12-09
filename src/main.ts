import { NestFactory } from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path';


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
  app.useStaticAssets(join(__dirname, '..', 'src', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src', 'views'));
  app.setViewEngine("ejs");
  
  await app.listen(4000);
}
bootstrap();
