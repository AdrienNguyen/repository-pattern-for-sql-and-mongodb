import { Module } from '@nestjs/common';
import { MongooseExModule } from 'src/mongoose-ex/mongoose-ex.module';
import { TypeOrmExModule } from 'src/typeorm-ex/typeorm-ex.module';
import { UserRepositoryMongo } from './repositories/user.repository.mongo';
import { UserRepositorySQL } from './repositories/user.repository.sql';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseExModule.forCustomRepository([UserRepositoryMongo]),
    TypeOrmExModule.forCustomRepository([UserRepositorySQL]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
