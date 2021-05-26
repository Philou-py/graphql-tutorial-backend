import { Schema, model, Document } from "mongoose";
import AuthorDocument from "../interfaces/Author";

const AuthorSchema = new Schema({
  name: String,
  age: Number,
});

export default model<AuthorDocument>("Author", AuthorSchema);
