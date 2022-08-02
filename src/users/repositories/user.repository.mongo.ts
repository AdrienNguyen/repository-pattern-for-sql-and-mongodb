import { User, UserSchema } from '@users/entities/user.mongo.entity';
import { Model } from 'mongoose';
import { CustomRepositoryMongo } from 'src/mongoose-ex/mongoose-ex.decorator';
import { BaseRepositoryMongo } from './base.repository.mongo';
import { UserRepository } from './user.repository';

@CustomRepositoryMongo({ name: User.name, schema: UserSchema })
export class UserRepositoryMongo
  extends BaseRepositoryMongo<User>
  implements UserRepository
{
  async findUserByEmail(email: string): Promise<User> {
    const user = await this.model.findOne({
      email,
    });
    return user;
  }

  async getAll(): Promise<User[]> {
    const users = await this.model.find();
    return users;
  }

  // async getOne(args: any): Promise<User> {
  //   const user = await this.modelUser.findOne(args);

  //   return user;
  // }
}
