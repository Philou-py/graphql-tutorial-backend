import UserDocument from "../interfaces/User";
import BookModel from "../models/book";

export default {
  books(parent: UserDocument) {
    return BookModel.find({ ownerId: parent.id });
  },
};
