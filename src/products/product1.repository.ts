import { ProductRepository } from './product.repository';

export class Product1Repository implements ProductRepository {
  hello() {
    return 'Hello Product 1111';
  }
}
