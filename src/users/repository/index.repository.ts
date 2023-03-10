import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersRepository {
  private readonly users = [
    {
      userId: 1,
      email: 'wesleyfranca@atendaz.io',
      password: 'changeme',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async findAll() {
    return this.users;
  }
}
