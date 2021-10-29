import { Injectable } from '@nestjs/common';
import { StringTypeAnnotation } from '@babel/types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getStart(): string {
    return 'Start!!';
  }

  getPost(): string {
    return 'Post!!';
  }
}
