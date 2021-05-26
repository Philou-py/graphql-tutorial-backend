import BookDocument from "../interfaces/Book";
import AuthorModel from "../models/author";

export default {
  author(parent: BookDocument) {
    return AuthorModel.findById(parent.authorID);
  },
};
