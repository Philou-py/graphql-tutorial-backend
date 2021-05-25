import dotenv from "dotenv";
import express from "express";
import { connect } from "mongoose";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema/schema";

dotenv.config();

const server = new ApolloServer({ typeDefs, resolvers });
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
    app.listen(3000, () => {
      console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
      return { server, app };
    });
  });
});
