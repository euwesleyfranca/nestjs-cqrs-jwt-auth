import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs/dist';
import { AuthCommand } from './auth.commands';
import { LocalAuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly commandBus: CommandBus) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async auth(@Request() req) {
    return this.commandBus.execute(new AuthCommand(req.user));
  }
}
