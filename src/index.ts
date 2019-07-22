import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express"; 
import { createConnection } from "typeorm";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";

import { createSchema } from "./modules";

import { redis } from "./redis";

const main = async () => {
  await createConnection();
  const schema = await createSchema();

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }: any) => ({req})
  });

  const app = Express();

  const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:9999"
    })
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis as any
      }),
      name: "qid",
      secret: "asdasd456dasd4654as6d4d65as4d4asd65",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 1 * 365
      }
    })
  );

  apolloServer.applyMiddleware({app});

  app.listen(4000, () => {
    console.log('server started')
  })
}

main();