import { Type } from 'class-transformer'
import { IsArray, IsString, ValidateNested } from 'class-validator'

export interface PostType{
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

export class CreatePostDataDto{
  @IsString()
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

export class CreatManyPostDataDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostDataDto)
  entries: CreatePostDataDto[]
}
