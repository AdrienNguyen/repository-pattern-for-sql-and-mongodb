import { Model } from 'mongoose';

export class BaseRepositoryMongo<T> {
  protected readonly model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async getAll(): Promise<T[]> {
    return this.model.find();
  }

  async getOne() {
    return 'ABC';
  }
}
