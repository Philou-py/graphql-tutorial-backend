import { Document } from "mongoose";

export default interface UserDocument extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
}
