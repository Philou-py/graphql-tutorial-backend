import { QueryBookArgs, QueryAuthorArgs } from "../schema/generated-types";
import BookModel from "../models/book";
import AuthorModel from "../models/author";

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
};
