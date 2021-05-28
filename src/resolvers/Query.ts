import { QueryBookArgs, QueryAuthorArgs } from "../schema/generated-types";
import BookModel from "../models/book";
import AuthorModel from "../models/author";
import UserModel from "../models/user";
import { Request } from "express";

export default {
  book(parent: undefined, args: QueryBookArgs) {
    return BookModel.findById(args.id);
  },

  books() {
    return BookModel.find();
  },

  author(parent: undefined, args: QueryAuthorArgs) {
    return AuthorModel.findById(args.id);
  },

  authors() {
    return AuthorModel.find();
  },

  currentUser(
    parent: undefined,
    args: undefined,
    context: { req: Request; userId: string | null }
  ) {
    if (context.userId) {
      return UserModel.findById(context.userId);
    }
  },
};
