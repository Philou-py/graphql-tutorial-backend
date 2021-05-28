import { Types } from "mongoose";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import {
  MutationAddAuthorArgs,
  MutationAddBookArgs,
  MutationSignupArgs,
  MutationLoginArgs,
} from "../schema/generated-types";
import BookModel from "../models/book";
import AuthorModel from "../models/author";
import UserModel from "../models/user";
import { Request } from "express";

function addAuthor(
  parent: undefined,
  args: MutationAddAuthorArgs,
  context: { req: Request; userId: string | null }
) {
  if (!context.userId) {
    throw new Error("Adding an author requires authentication!");
  }
  let author = new AuthorModel({
    name: args.name,
    age: args.age,
  });
  return author.save();
}

function addBook(
  parent: undefined,
  args: MutationAddBookArgs,
  context: { req: Request; userId: string | null }
) {
  if (!context.userId) {
    throw new Error("Adding a book requires authentication!");
  }
  let book = new BookModel({
    title: args.title,
    genre: args.genre,
    authorId: Types.ObjectId(args.authorId!),
    ownerId: Types.ObjectId(context.userId),
  });
  return book.save();
}

async function signup(parent: undefined, args: MutationSignupArgs) {
  const password = await hash(args.password, 10);
  const user = new UserModel({
    name: args.name,
    email: args.email,
    password: password,
  });
  await user.save();
  const token = sign({ userId: user.id }, process.env.APP_SECRET!);
  return { token, user };
}

async function login(parent: undefined, args: MutationLoginArgs) {
  const user = await UserModel.findOne({ email: args.email });
  if (!user) {
    throw new Error("No such user found!");
  }
  const valid = await compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password!");
  }
  const token = sign({ userId: user.id }, process.env.APP_SECRET!);
  return { token, user };
}

export default {
  addAuthor,
  addBook,
  signup,
  login,
};
