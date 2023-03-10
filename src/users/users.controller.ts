import { Controller } from '@nestjs/common';
import { Get, UseGuards } from '@nestjs/common/decorators';
import { QueryBus } from '@nestjs/cqrs';
import { JwtAuthGuard } from '../auth/auth.guard';
import { FindAllUsersQuery } from './users.queries';

@Controller('users')
export class UsersController {
  constructor(private readonly queryBus: QueryBus) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.queryBus.execute(new FindAllUsersQuery());
  }
}
