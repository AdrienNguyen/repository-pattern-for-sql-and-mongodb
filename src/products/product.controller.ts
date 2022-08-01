import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getHello() {
    return this.productService.hello();
  }

  // @Get('/getall')
  // async getAll() {
  //   return AppDataSource.manager.getMongoRepository(UserSQL).findOneBy({
  //     email: 'phuong02@gmail.com',
  //   });
  // }
}
