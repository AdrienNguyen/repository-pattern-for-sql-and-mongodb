import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERSQL_REPOSITORY')
    private readonly userRepository: UserRepository,
  ) {}
  async findUserByEmail(email: string): Promise<any> {
    const user = await this.userRepository.findUserByEmail(email);
    return user;
  }
}
