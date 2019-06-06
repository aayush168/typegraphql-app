import { Resolver, Query, Mutation, Arg } from "type-graphql";
import * as bcrypt from "bcryptjs";
import { User } from "../../entity/User";

@Resolver(User)
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "hello world"
  }

  @Mutation(() => User)
  async register(
    @Arg("firstname") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("username") username: string,
    @Arg("password") password: string
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 8)

    const user = await User.create({
      firstName,
      lastName,
      username,
      password: hashedPassword
    }).save()
    
    return user
  }
}