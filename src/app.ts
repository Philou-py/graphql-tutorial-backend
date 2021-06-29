import dotenv from "dotenv";
import { connect } from "mongoose";
import { ApolloServer, PubSub } from "apollo-server";
import { typeDefs, resolvers } from "./schema/schema";
import { getUserId } from "./utils";

dotenv.config();

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // subscriptions: {
  //   onConnect: () => {
  //     console.log("New subscription!");
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

connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:27017/graphql-tutorial`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
  }
)
  .then(() => {
    console.log("Database successfully connected!");
    server.listen().then(({ url }) => {
      console.log(`🚀 Apollo Server ready at ${url}`);
    });
  })
  .catch((error) => console.log(error));
