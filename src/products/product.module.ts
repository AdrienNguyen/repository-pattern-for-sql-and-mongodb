import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product1Repository } from './product1.repository';
import { Product2Repository } from './product2.repository';

const getProductRepository = (productType: Number): any => {
  switch (productType) {
    case 1:
      return Product1Repository;
    default:
      return Product2Repository;
  }
};

@Module({
  imports: [ConfigModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: 'PRODUCT',
      useFactory: (configService: ConfigService) => {
        const Class = getProductRepository(
          +configService.get<number>('PRODUCT_TYPE'),
        );
        return new Class();
      },
      inject: [ConfigService],
    },
  ],
})
export class ProductModule {}
