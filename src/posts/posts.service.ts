import { Injectable } from '@nestjs/common';
import { PostType } from './post.interface';

@Injectable()
export class PostsService {
  private readonly posts: PostType[] = [];

  findAll(): PostType[] {
    return this.posts;
  }

  create(post: PostType) {
    this.posts.push(post);
  }

  findById(id: string): PostType {
    return this.posts.find((post) => post.id === id);
  }
}
