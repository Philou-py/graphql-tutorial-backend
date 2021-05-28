import { model, Schema } from "mongoose";
import UserDocument from "../interfaces/User";

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

export default model<UserDocument>("User", UserSchema);
