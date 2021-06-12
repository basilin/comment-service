import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  postId: string;

  @Prop()
  depth: string;

  @Prop()
  parentId: string;

  @Prop()
  postedDate: string;

  @Prop()
  comment: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
