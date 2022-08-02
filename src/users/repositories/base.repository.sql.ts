import { Repository } from 'typeorm';

export class BaseRepositorySQL<Entity> {
  protected readonly model: Repository<Entity>;

  constructor(model: Repository<Entity>) {
    this.model = model;
  }

  async getAll(args: any): Promise<Entity[]> {
    return this.model.find(args);
  }

  async getOne() {
    return 'ABC';
  }
}
