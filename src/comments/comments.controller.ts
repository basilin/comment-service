import { CommentDto } from './../dto/comment';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { CommentsService } from './comments.service';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  UseGuards,
  Post,
  Get,
  Query,
  ParseIntPipe,
} from '@nestjs/common';

@ApiTags('comments')
@Controller('comments')
@ApiBearerAuth()
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('')
  @ApiQuery({ name: 'skip' })
  @ApiQuery({ name: 'take' })
  async getComments(
    @Query('skip', new ParseIntPipe()) skip: number,
    @Query('take', new ParseIntPipe()) take: number,
  ) {
    return await this.commentsService.getAllComments(skip, take);
  }

  @UseGuards(JwtAuthGuard)
  @Post('')
  async createComment(@Body() comment: CommentDto) {
    return await this.commentsService.creteComment(comment);
  }
}
