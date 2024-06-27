import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()//コントローラーはなんのメソッドを呼び出すのかの指示をするところ。
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
