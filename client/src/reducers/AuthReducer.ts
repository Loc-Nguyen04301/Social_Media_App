import { IUser } from "../utils/TypeScript";
import { LOGIN, REGISTER, REFRESH_TOKEN, LOGOUT } from "./type";

export interface AuthState {
  access_token: string;
  user: IUser;
}

export type AuthAction =
  | {
      type: typeof LOGIN;
      payload: AuthState;
    }
  | {
      type: typeof REGISTER;
      payload: AuthState;
    }
  | {
      type: typeof REFRESH_TOKEN;
      payload: AuthState;
    }
  | {
      type: typeof LOGOUT;
      payload: AuthState;
    };

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case REGISTER: {
      return action.payload;
    }
    case LOGIN: {
      return action.payload;
    }
    case REFRESH_TOKEN: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
