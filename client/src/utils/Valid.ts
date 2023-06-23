import { IUserRegister } from "./TypeScript";

export const validRegister = (userRegister: IUserRegister) => {
  const { account, name, confirmPassword, password } = userRegister;

  const errors: string[] = [];

  if (!name) {
    errors.push("Please add your name.");
  } else if (name.length > 20) {
    errors.push("Your name is up to 20 chars long.");
  }

  if (!account) {
    errors.push("Please add your email or phone.");
  } else if (!validEmail(account)) {
    errors.push("Email or phone number format is incorrect.");
  }

  const check = checkPassword(password, confirmPassword);
  if (check) errors.push(check);

  return { errors };
};

export const validEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const checkPassword = (password: string, confirmPassword: string) => {
  if (password.length < 6) {
    return "Password must be at least 6 chars.";
  } else if (password !== confirmPassword) {
    return "Confirm password did not match.";
  }
};
