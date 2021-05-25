import { BookType, QueryBookArgs, QueryAuthorArgs, MutationAddAuthorArgs } from "./generated-types";
import fs from "fs";
import Book from "../interfaces/Book";
import Author from "../interfaces/Author";
import BookModel from "../models/book";
import AuthorModel from "../models/author";

const typeDefs = fs.readFileSync(__dirname + "/schema.gql").toString("utf-8");

const resolvers = {
  Query: {
    book(parent: undefined, args: QueryBookArgs) {
      // return books.find((book) => book.id === args.id);
    },

    books() {
      // return books;
    },

    author(parent: undefined, args: QueryAuthorArgs) {
      // return authors.find((author) => author.id === args.id);
    },

    authors() {
      // return authors;
    },
  },

  Mutation: {
    addAuthor(parent: undefined, args: MutationAddAuthorArgs) {
      let author = new AuthorModel({
        name: args.name,
        age: args.age,
      });
      return author.save();
    },
  },

  BookType: {
    author(parent: Book) {
      // return authors.find((author) => author.id === parent.authorID);
    },
  },

  AuthorType: {
    books(parent: Author) {
      // return books.filter((book) => book.authorID === parent.id);
    },
  },
};

export { typeDefs, resolvers };
