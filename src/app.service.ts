import { Injectable } from '@nestjs/common';
import { StringTypeAnnotation } from '@babel/types';
import { User,CreateUser } from './app.dto';

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

  getMethodParamsOfGet(id:number, contents: string): string{
    return `
      inserted values ${id}
      ${contents}
    `;
  }

  createUser(user:CreateUser){
    return user;
  }

}
