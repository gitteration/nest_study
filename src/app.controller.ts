import { Controller, Get, Post, Req, Res, Query, Ip, HttpCode, Redirect, Param, Body, Render } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { CreateUser, User} from './app.dto';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}
  /*
    Controllers - 클라이언트에 들어오는 요청(req)을 처리하고 응답(res)을 클라이언트한테 반환하는 부분이다.
    컨트롤러를 사용할려면 @Controller('URLPath') 데코레이터를 정의해줘야 하며 @Get, @Post, @Put, @Delete, @All 등등을 사용하여 http 요청을 처리할 수 있다.

  
  */
  // Url('/') Get 요청의 처리
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  /**
   *   - 쿼리스트링으로 파라미터를 받는 방법은 두 방법이 있다 - 
   *   1. @Param을 이용하여 파라미터를 하나하나 받는 형식
   *   2. @Params을 이용하여 파라미터들을 한 번에 객체로 받는 형식
   *   음.. 받는 파라미터가 3개 이상 넘어가지 않으면 1번째 방법을 이용하는게 좋을 거 같다.
   */

  @Get('methodParamsOfGet/:id/:contents')
  getMethodParamsOfGet(@Param('id') id: number, @Param('contents') contents:string): string{
    return this.appService.getMethodParamsOfGet(id, contents);
  }

  //Url('/start') Get 요청의 처리
  @Get('start')
  // Request 매개변수를 가져올려면 express 모듈에서 가져오면 된다.
  getStart(@Req() req: Request, @Query() query:string, @Ip() ip:string): string{
    // 쿼리 파라미터는 req.query로 넘어온다
    console.log("request:::", req.query);
    // 하지만 nest에서는 @Query 데코레이션을 이용하면 바로 가져올 수 있다
    console.log("keys::", query);
    // ip
    console.log('ip::', ip)
    return this.appService.getStart();
  }

  // Route wildcards
  // 패턴 기반의 라우트도 지원한다. ?, +, *,() 문자는 라우터 경로에 사용될 수 있고 -(하이픈) , .(점)은 경로 문자열 기반 경로로 해석된다는데 이거는 무슨말인지 모르겠으니 함 테스트해보자
  @Get('start*')
  getStartWildCards(){
    return 'start뒤에 와일드카드!';
  }
  // ?뒤에 문자와 일치해야한다.
  @Get('test?A')
  test(){
    return 'test뒤에 물음표!'
  }
  // +뒤에 문자와 일치해야하는데 ?와 무슨 차이인지 모르겠다.
  @Get('test+B')
  test2(){
    return 'test뒤에 플러스'
  }
  
  //Status code
  @Get('status')
  @HttpCode(404)
  status(){
    return '클라이언트에 404 에러를 떨어트릴 수 있다.';
  }

  //Redirection
  @Get('redirect')
  @Redirect('https://nestjs.com', 301)// 두번 째 매개변수는 statusCode다
  getDocs(@Query() query) {
    console.log('version:::', query)
    
  }
  
  // Url('/post') Post 요청의 처리
  @Post('post')
  getPost(): string{
    return this.appService.getPost();
  }

  @Post('user/create')
  getMethodParamsOfPost(@Body() new_user: CreateUser):User{
    return this.appService.createUser(new_user);
  }

  @Get('three')
  @Render('three1.ejs')
  testThreeJs(){
    return 
  }
}

