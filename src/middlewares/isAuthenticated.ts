import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types/MyContext";

export const isAuthenticated: MiddlewareFn<MyContext> = ( { context }, next) => {
  if(!context.req.session!.userId) {
    throw new Error('user is not authenticated');
  }
  return next()
};