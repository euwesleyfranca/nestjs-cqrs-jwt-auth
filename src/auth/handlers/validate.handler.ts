import { HttpException, HttpStatus } from '@nestjs/common';
import { CommandHandler } from '@nestjs/cqrs';
import { ICommandHandler } from '@nestjs/cqrs/dist';
import { UsersRepository } from '../../users/repository/index.repository';
import { ValidateAuthCommand } from '../auth.commands';

@CommandHandler(ValidateAuthCommand)
export class ValidateAuthHandler
  implements ICommandHandler<ValidateAuthCommand>
{
  constructor(private repository: UsersRepository) {}

  async execute(command: ValidateAuthCommand) {
    const { email, password } = command;
    const user = await this.repository.findOne(email);

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }

    throw new HttpException(
      'invalid email or password...',
      HttpStatus.BAD_REQUEST,
    );
  }
}
