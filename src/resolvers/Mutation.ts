import { MutationAddAuthorArgs, MutationAddBookArgs } from "../schema/generated-types";
import BookModel from "../models/book";
import AuthorModel from "../models/author";
// import { hash, compare } from "bcryptjs";
// import { sign } from "jsonwebtoken";
import { Types } from "mongoose";

function addAuthor(parent: undefined, args: MutationAddAuthorArgs) {
  let author = new AuthorModel({
    name: args.name,
    age: args.age,
  });
  return author.save();
}

function addBook(parent: undefined, args: MutationAddBookArgs) {
  let book = new BookModel({
    title: args.title,
    genre: args.genre,
    authorID: Types.ObjectId(args.authorID!),
  });
  return book.save();
}

export default {
  addAuthor,
  addBook,
};
