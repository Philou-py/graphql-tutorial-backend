import fs from "fs";
import Query from "../resolvers/Query";
import Mutation from "../resolvers/Mutation";
import BookType from "../resolvers/BookType";
import AuthorType from "../resolvers/AuthorType";
import UserType from "../resolvers/UserType";

const typeDefs = fs.readFileSync(__dirname + "/schema.gql").toString("utf-8");

const resolvers = {
  Query,
  Mutation,
  BookType,
  AuthorType,
  UserType,
};

export { typeDefs, resolvers };
