import { CommandHandler } from '@nestjs/cqrs';
import { ICommandHandler } from '@nestjs/cqrs/dist';
import { JwtService } from '@nestjs/jwt';
import { AuthCommand } from '../auth.commands';

@CommandHandler(AuthCommand)
export class AuthHandler implements ICommandHandler<AuthCommand> {
  constructor(private readonly jwtService: JwtService) {}

  async execute(command: AuthCommand) {
    const payload = { username: command.user.email, sub: command.user.userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
