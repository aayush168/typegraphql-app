import { buildSchema } from "type-graphql";
import { UserCheckLoginResolver } from "../modules/user/CheckLogin";
import { UserLoginResolver } from "../modules/user/Login";
import { UserRegisterResolver } from "../modules/user/Register";

export const createSchema = () =>
  buildSchema({
    resolvers: [
      UserCheckLoginResolver,
      UserLoginResolver,
      UserRegisterResolver
    ],
  });