import { CustomRepository } from 'src/typeorm-ex/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { UserSQL } from '../entities/user.sql.entity';
import { UserRepository } from './user.repository';

@CustomRepository(UserSQL)
export class UserRepositorySQL
  extends Repository<UserSQL>
  implements UserRepository
{
  async findUserByEmail(email: string): Promise<UserSQL> {
    const user = await this.createQueryBuilder('users')
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
}
