import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostType } from './post.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Post()
  async create(@Body() post: PostType): Promise<void> {
    await this.postsService.create(post);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<PostType | null> {
    const postId = parseInt(id, 10);
    return await this.postsService.findById(postId);
  }
}
