import { Document, model, Schema } from "mongoose";
import Book from "../interfaces/Book";

const BookSchema = new Schema({
  title: String,
  genre: String,
  authorID: String,
});

export default model<Document<Book>>("Book", BookSchema);
