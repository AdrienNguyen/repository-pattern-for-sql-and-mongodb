import { ProductRepository } from './product.repository';

export class Product2Repository implements ProductRepository {
  hello() {
    return 'Hello Product 2222';
  }
}
