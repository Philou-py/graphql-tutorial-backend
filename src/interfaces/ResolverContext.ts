import { Request } from "express";
import { PubSub } from "apollo-server-express";

export default interface ResolverContext {
  req: Request;
  pubsub: PubSub;
  userId: string | null;
}
