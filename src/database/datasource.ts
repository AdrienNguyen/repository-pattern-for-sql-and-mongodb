import { UserSQL } from '@users/entities/user.sql.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mongodb',
  host: '127.0.0.1',
  port: 27017,
  database: 'l2e',
  entities: [UserSQL],
  synchronize: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
