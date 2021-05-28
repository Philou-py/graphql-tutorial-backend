import User from "./User";

export default interface AuthPayload {
  token: string;
  user: User;
}
