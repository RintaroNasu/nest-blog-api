import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
//指示役であるコントローラーとサービスを内包したもの。どのコントローラーを使うのか、どのサービスを使うのかを決める。
@Module({
  imports: [PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
