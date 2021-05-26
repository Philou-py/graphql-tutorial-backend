import { Document, model, Schema } from "mongoose";
import BookDocument from "../interfaces/Book";

const BookSchema = new Schema({
  title: String,
  genre: String,
  authorID: Schema.Types.ObjectId,
});

export default model<BookDocument>("Book", BookSchema);
