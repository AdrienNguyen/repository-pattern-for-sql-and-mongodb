import { Module } from '@nestjs/common';
import mongoose from 'mongoose';

@Module({})
export class DatabaseMongoModule {
  constructor() {
    mongoose.connect(`${process.env.MONGO_URI}/${process.env.DATABASE_NAME}`);
  }
}
