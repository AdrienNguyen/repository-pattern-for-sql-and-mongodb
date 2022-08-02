import { DynamicModule, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { MONGOOSE_EX_CUSTOM_REPOSITORY } from './mongoose-ex.decorator';

export class MongooseExModule {
  public static forCustomRepository<T extends new (...args: any[]) => any>(
    repositories: T[],
  ): DynamicModule {
    const providers: Provider[] = [];

    for (const repository of repositories) {
      const entityProperties = Reflect.getMetadata(
        MONGOOSE_EX_CUSTOM_REPOSITORY,
        repository,
      );

      if (!entityProperties) {
        continue;
      }

      providers.push({
        provide: entityProperties.name,
        useFactory: (): any => {
          const model = mongoose.model(
            entityProperties.name,
            entityProperties.schema,
          );

          return new repository(model);
        },
        inject: [],
      });
    }

    return {
      exports: providers,
      module: MongooseExModule,
      providers,
    };
  }
}
