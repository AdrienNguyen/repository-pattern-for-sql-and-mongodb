import { Controller, Get, Query } from '@nestjs/common';
import { AppDataSource } from 'src/database/datasource';
import { UserSQL } from './entities/user.sql.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUserByEmail(@Query('email') email: string) {
    return this.userService.findUserByEmail(email);
  }

  // @Get('/getall')
  // async getAll() {
  //   return AppDataSource.manager.getMongoRepository(UserSQL).findOneBy({
  //     email: 'phuong02@gmail.com',
  //   });
  // }
}
