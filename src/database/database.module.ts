import { Module } from '@nestjs/common';
import { DatabaseMongoModule } from './database.mongo.module';
import { DatabaseSQLModule } from './database.sql.module';

@Module({
  imports: [DatabaseSQLModule, DatabaseMongoModule],
})
export class DatabaseModule {}
