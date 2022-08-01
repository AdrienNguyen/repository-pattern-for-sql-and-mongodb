# REPOSITORY PATTERN FOR SQL AND MONGODB

## SQL (Typeorm) and MongoDB (Mongoose)

## Inject repository in class service

```js
@Injectable()
export class UserService {
  constructor(
    @Inject('USERSQL_REPOSITORY')
    private readonly userRepository: UserRepository,
  ) {}
  async findUserByEmail(email: string): Promise<any> {
    const user = await this.userRepository.findUserByEmail(email);
    return user;
  }
}

```

USERSQL_REPOSITORY = "USERSQL" + _ + "REPOSITORY" = ENTITYNAME (to uppercase) + _ + "REPOSITORY"
