import { ChangeEvent, FormEvent } from "react";

export type InputChange = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export type FormSubmit = FormEvent<HTMLFormElement>;

export interface IUserLogin {
  account: string;
  password: string;
}

export interface IUserRegister extends IUserLogin {
  name: string;
  confirmPassword: string;
}

export interface IUser extends IUserLogin {
  _id: string;
  name: string;
  avatar: string;
  role: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}
