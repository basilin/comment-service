import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';

const connectionString = process.env.MONGO_CONNECTION ?? 'mongodb://root:Password@localhost:27017/comments-db?authSource=admin&readPreference=primary&ssl=false';
@Module({
  imports: [AuthModule, UsersModule, CommentsModule, MongooseModule.forRoot(connectionString)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
