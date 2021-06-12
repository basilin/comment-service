import { CommentDocument } from './../schema/comment.schema';
import { CommentDto } from './../dto/comment';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from 'src/schema/comment.schema';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}
  async creteComment(comment: CommentDto) {
    const result = await this.commentModel.create(comment);
    return result;
  }

  async getAllComments(
    skip?: number,
    take?: number,
  ): Promise<CommentDocument[]> {
    const result = await this.commentModel
      .find()
      .skip(skip ?? 0)
      .limit(take ?? 100)
      .exec();
    return result;
  }
}
