import BookDocument from "../interfaces/Book";
import AuthorModel from "../models/author";
import UserModel from "../models/user";

export default {
  author(parent: BookDocument) {
    return AuthorModel.findById(parent.authorId);
  },

  owner(parent: BookDocument) {
    return UserModel.findById(parent.ownerId);
  },
};
