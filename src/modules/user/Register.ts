import { Resolver, Mutation, Arg } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entity/User";
import { RegisterInput } from './register/RegisterInput';

@Resolver(User)
export class RegisterResolver {
  @Mutation(() => User)
  async register(@Arg("data")
  { firstName, lastName, username, password } : RegisterInput 
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