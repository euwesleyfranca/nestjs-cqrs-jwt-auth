import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ValidateAuthCommand } from './auth.commands';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private commandBus: CommandBus) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = this.commandBus.execute(
      new ValidateAuthCommand(username, password),
    );

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
