import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT') private readonly productRepository: ProductRepository,
  ) {}

  hello() {
    return this.productRepository.hello();
  }
}
