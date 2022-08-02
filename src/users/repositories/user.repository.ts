export interface UserRepository extends BaseRepository {
  findUserByEmail(email: string);
}

export interface BaseRepository {
  getOne(args: any);
  getAll(args?: any);
}
