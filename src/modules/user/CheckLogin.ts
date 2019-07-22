import { Resolver, Query, Ctx, UseMiddleware } from "type-graphql";
import { User } from "../../entity/User";
import { MyContext } from "../../types/MyContext";
import { isAuthenticated } from "../../middlewares/isAuthenticated";

@Resolver(User)
export class UserCheckLoginResolver {
  @UseMiddleware(isAuthenticated)
  @Query(() => User, { nullable: true })
  async checkLogin(@Ctx() ctx:  MyContext): Promise<User | undefined> {
    let user = ctx.req.session!.userId;
    if(!user) {
      return undefined;
    }
    return User.findOne(user);
  }
}