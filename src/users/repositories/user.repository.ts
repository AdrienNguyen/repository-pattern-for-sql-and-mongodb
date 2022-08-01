export interface UserRepository {
  findUserByEmail(email: string): any;
}
