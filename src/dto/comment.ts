import { ApiProperty } from '@nestjs/swagger';

export class CommentDto {
  @ApiProperty()
  postId: string;

  @ApiProperty()
  depth: number;

  @ApiProperty()
  parentId: string;

  @ApiProperty()
  postedDate: string;

  @ApiProperty()
  comment: string;
}