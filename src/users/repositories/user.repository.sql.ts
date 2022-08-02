import { CustomRepository } from 'src/typeorm-ex/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { UserSQL } from '../entities/user.sql.entity';
import { BaseRepositorySQL } from './base.repository.sql';
import { UserRepository } from './user.repository';

@CustomRepository(UserSQL)
export class UserRepositorySQL
  extends BaseRepositorySQL<UserSQL>
  implements UserRepository
{
  async findUserByEmail(email: string): Promise<UserSQL> {
    const user = await this.model
      .createQueryBuilder('users')
      .select([
        'users.id',
        'users.email',
        'users.password',
        'users.walletAddress',
        'users.activationCodeId',
      ])
      .where(`users.email = :email`, { email })
      .getOne();
    return user;
  }

  async getAll(args: any): Promise<UserSQL[]> {
    const users = await this.model.find(args);
    return [...users, ...users];
  }

  // async getOne(args: any): Promise<UserSQL> {
  //   const user = await this.model.findOneBy(args);

  //   return user;
  // }
}
