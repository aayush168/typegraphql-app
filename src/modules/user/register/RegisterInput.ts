import { MinLength, Length } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsUserAlreadyExist } from "./isUsernameAlreadyExist";

@InputType()
export class RegisterInput {
  @Field()
  @Length(2, 50)
  firstName: string;

  @Field()
  @Length(2, 50)
  lastName: string;

  @Field()
  @MinLength(6)
  @IsUserAlreadyExist({message: 'Username is already taken'})
  username: string;

  @Field()
  @MinLength(8)
  password: string;
}
