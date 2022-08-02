import { Inject, Injectable } from '@nestjs/common';
import { UserSQL } from './entities/user.sql.entity';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserSQL.name)
    private readonly userRepository: UserRepository,
  ) {}
  async findUserByEmail(email: string) {
    const user = await this.userRepository.findUserByEmail(email);
    console.log(user);
    return user;
  }
}
