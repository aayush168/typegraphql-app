import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entity/User";
import { MyContext } from "../../types/MyContext";


@Resolver(User)
export class UserLoginResolver {
  @Mutation(() => User, { nullable: true } )
  async login(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() ctx: MyContext
  ): Promise<User | null> {
    const user = await User.findOne({where: { username }})
    if(!user) {
      return null
    }
    const valid = bcrypt.compare(password, user.password)
    if(!valid) {
      return null
    }
    ctx.req.session!.userId = user.id 
    return user
  }
}