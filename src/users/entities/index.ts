import { User } from './user.mongo.entity';
import { UserSQL } from './user.sql.entity';
require('dotenv').config();

const models = {
  mysql: UserSQL,
  mongodb: User,
  // add new model here if change database
};
export const UserModel = models[process.env.DB_TYPE];
