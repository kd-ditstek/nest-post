import { Module } from '@nestjs/common';
import { PostsController } from 'src/posts/posts.controller';
import { PostsService } from 'src/posts/posts.service';

@Module({
    controllers: [PostsController],
    providers: [PostsService]
})
export class PostModule {}
