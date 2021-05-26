import { Document } from "mongoose";

export default interface AuthorDocument extends Document {
  id: string;
  name: string;
  age: number;
}
