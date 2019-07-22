import { Resolver, Mutation, Arg } from "type-graphql";
import bcrypt from "bcryptjs";
import { Expert } from "../../entity/Expert";
import { RegisterInput } from './register/RegisterInput';

@Resolver(Expert)
export class ExpertRegisterResolver {
  @Mutation(() => Expert)
  async register(@Arg("data")
  { firstName, lastName, email, phone,  password } : RegisterInput 
  ): Promise<Expert> {
    const hashedPassword = await bcrypt.hash(password, 8)

    const expert = await Expert.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword
    }).save()
    
    return expert
  }
}