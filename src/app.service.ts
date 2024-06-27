import { Injectable } from '@nestjs/common';
//appserviceは機能の内容。
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
