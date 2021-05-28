import BookModel from "../models/book";
import AuthorDocument from "../interfaces/Author";

export default {
  books(parent: AuthorDocument) {
    return BookModel.find({ authorId: parent.id });
  },
};
