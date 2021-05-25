import { BookType, QueryBookArgs, QueryAuthorArgs } from "./generated-types";
import fs from "fs";
import Book from "../interfaces/Book";
import Author from "../interfaces/Author";

const typeDefs = fs.readFileSync(__dirname + "/schema.gql").toString("utf-8");

var books: Book[] = [
  { id: "1", title: "Name of the Wind", genre: "Fantasy", authorID: "1" },
  { id: "2", title: "The Final Empire", genre: "Fantasy", authorID: "2" },
  { id: "3", title: "The Long Earth", genre: "Sci-Fi", authorID: "3" },
];

var authors: Author[] = [
  { id: "1", name: "Patrick Rothfuss", age: 44 },
  { id: "2", name: "Brandon Sanderson", age: 42 },
  { id: "3", name: "Terry Pratchett", age: 66 },
];

const resolvers = {
  Query: {
    book(parent: undefined, args: QueryBookArgs) {
      return books.find((book) => book.id === args.id);
    },

    books() {
      return books;
    },

    author(parent: undefined, args: QueryAuthorArgs) {
      return authors.find((author) => author.id === args.id);
    },

    authors() {
      return authors;
    },
  },

  BookType: {
    author(parent: Book) {
      return authors.find((author) => author.id === parent.authorID);
    },
  },

  AuthorType: {
    books(parent: Author) {
      return books.filter((book) => book.authorID === parent.id);
    },
  },
};

export { typeDefs, resolvers };
