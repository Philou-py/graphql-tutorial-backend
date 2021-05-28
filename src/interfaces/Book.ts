import { Document } from "mongoose";

export default interface BookDocument extends Document {
  id: string;
  title: string;
  genre: string;
  authorId: string;
  ownerId: string;
}
