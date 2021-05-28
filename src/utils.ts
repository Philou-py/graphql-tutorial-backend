import { Request } from "express";
import { verify } from "jsonwebtoken";

function getTokenPayload(token: string) {
  try {
    return verify(token, process.env.APP_SECRET!);
  } catch (error) {
    throw new Error("Could not decode the given token with the current app secret!");
  }
}

function getUserId(req: Request, authToken?: string) {
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      if (!token) {
        throw new Error("No token found!");
      }
      const { userId } = getTokenPayload(token) as { userId: string };
      return userId;
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(authToken) as { userId: string };
    return userId;
  }

  throw new Error("Not authenticated!");
}

export { getUserId };
