import { Inject, Injectable } from '@nestjs/common';
import { UserModel } from './entities';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserModel.name)
    private readonly userRepository: UserRepository,
  ) {}
  async findUserByEmail(email: string) {
    const user = await this.userRepository.findUserByEmail(email);
    return user;
  }

  async getAll() {
    const users = await this.userRepository.getAll();
    return users;
  }

  async getOne() {
    const user = await this.userRepository.getOne({
      email: 'phuong02@gmail.com',
    });
    return user;
  }
}
