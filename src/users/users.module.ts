import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { FindAllUsersHandler } from './handlers/findAll/index.handler';
import { UsersRepository } from './repository/index.repository';
import { UsersController } from './users.controller';

@Module({
  imports: [CqrsModule],
  providers: [UsersRepository, FindAllUsersHandler],
  exports: [UsersRepository],
  controllers: [UsersController],
})
export class UsersModule {}
