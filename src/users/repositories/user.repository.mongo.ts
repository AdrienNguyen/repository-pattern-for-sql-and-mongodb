import { User, UserSchema } from '@users/entities/user.mongo.entity';
import { Model } from 'mongoose';
import { CustomRepositoryMongo } from 'src/mongoose-ex/mongoose-ex.decorator';
import { UserRepository } from './user.repository';

@CustomRepositoryMongo({ name: User.name, schema: UserSchema })
export class UserRepositoryMongo implements UserRepository {
  private readonly modelUser: Model<User>;
  constructor(modelUser: Model<User>) {
    this.modelUser = modelUser;
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.modelUser.findOne({
      email,
    });
    return user;
  }
}
