import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Module({})
export class DatabaseMongoModule {
  constructor() {
    mongoose.connect(`${process.env.MONGO_URI}/${process.env.DATABASE_NAME}`);
  }
}
