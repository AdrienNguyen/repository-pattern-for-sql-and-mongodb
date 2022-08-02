import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUserByEmail(@Query('email') email: string) {
    return this.userService.findUserByEmail(email);
  }

  @Get('/getall')
  async getAll() {
    return this.userService.getAll();
  }

  @Get('/getone')
  async getOne() {
    return this.userService.getOne();
  }
}
