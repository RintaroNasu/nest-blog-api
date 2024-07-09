import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePostDataDto, PostType } from './post.interface';

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
    const createdPost = await this.prisma.posts.create({
      data: post,
    });
  }

  async createMany(postId: string, data: CreatePostDataDto[]) {
    try {
      const dataWithPostId = data.map((entry) => ({ ...entry, postId }))
      return await this.prisma.posts.createMany({
        data: dataWithPostId,
      })
    } catch (e) {
      console.error("Error in createMany: ", e);
      throw e
    }
  }
}
