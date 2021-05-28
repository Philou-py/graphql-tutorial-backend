import dotenv from "dotenv";
import express from "express";
import { connect } from "mongoose";
import { ApolloServer, PubSub } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema/schema";
import { getUserId } from "./utils";

dotenv.config();

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // subscriptions: {
  //   onConnect: () => {
  //     console.log("Connected!");
  //   },
  // },
  context: ({ req }) => {
    return {
      ...req,
      pubsub,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },
});

server.start().then(() => {
  const app = express();
  server.applyMiddleware({ app });

  connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:27017/graphql-tutorial?authSource=admin`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(() => {
    console.log("Database successfully connected!");
    const httpServer = app.listen(3000, () => {
      // See https://www.apollographql.com/docs/apollo-server/data/subscriptions/#using-with-middleware-integrations
      server.installSubscriptionHandlers(httpServer);
      console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
      return { server, app };
    });
  });
});
