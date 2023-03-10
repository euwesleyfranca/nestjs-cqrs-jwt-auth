import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersRepository } from '../users/repository/index.repository';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ValidateAuthHandler } from './handlers/validate.handler';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthHandler } from './handlers/auth.handler';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    CqrsModule,
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    ValidateAuthHandler,
    AuthHandler,
    UsersRepository,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AuthModule {}
