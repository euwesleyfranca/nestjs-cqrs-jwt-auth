import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UsersRepository } from '../../../users/repository/index.repository';
import { FindAllUsersQuery } from '../../../users/users.queries';

@QueryHandler(FindAllUsersQuery)
export class FindAllUsersHandler implements IQueryHandler<FindAllUsersQuery> {
  constructor(private usersRepository: UsersRepository) {}

  async execute(query: FindAllUsersQuery) {
    return this.usersRepository.findAll();
  }
}
