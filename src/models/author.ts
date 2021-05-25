import { Schema, model, Document } from "mongoose";
import Author from "../interfaces/Author";

const AuthorSchema = new Schema({
  name: String,
  age: Number,
});

export default model<Document<Author>>("Author", AuthorSchema);
