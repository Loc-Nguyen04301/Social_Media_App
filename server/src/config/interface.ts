import { Document } from "mongoose";
import { Request } from "express";

export interface IUser extends Document {
  name: string;
  account: string;
  password: string;
  avatar: string;
  role: string;
  type: string;
  _doc: object;
}

export interface IUserRegister {
  name: string;
  account: string;
  password: string;
}

export interface IDecodedToken {
  _id?: string;
  newUser?: IUserRegister;
  iat: number;
  exp: number;
}
