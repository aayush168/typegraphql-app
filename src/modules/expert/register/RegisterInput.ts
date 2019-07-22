import { MinLength, Length, IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";

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
  @IsEmail()
  email: string;

  @Field()
  phone: string;

  @Field()
  password: string
}
