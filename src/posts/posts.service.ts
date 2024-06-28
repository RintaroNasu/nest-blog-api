import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { PostType } from './post.interface';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<PostType[]> {
    const posts = await this.prisma.posts.findMany();
    return posts as PostType[];
  }

  async findById(id: number): Promise<PostType | null> {
    const post = await this.prisma.posts.findUnique({
      where: { id },
    });
    return post as PostType | null;
  }

  async create(post: PostType): Promise<void> {
    await this.prisma.posts.create({
      data: post,
    });
  }
}
