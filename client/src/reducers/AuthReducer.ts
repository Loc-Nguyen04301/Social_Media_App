import { IUser } from "../utils/TypeScript";

export enum AuthActionType {
  REGISTER = "REGISTER",
  LOGIN = "LOGIN",
  REFRESH_TOKEN = "REFRESH_TOKEN",
  LOGOUT = "LOGOUT",
}

const { LOGIN, REGISTER, REFRESH_TOKEN, LOGOUT } = AuthActionType;

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
    };

export const authReducer = (state: AuthState, action: AuthAction) => {
  const { access_token, user } = action.payload;
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
        access_token,
        user,
      };
    }
    case LOGIN: {
      return {
        ...state,
        access_token,
        user,
      };
    }
    default: {
      return state;
    }
  }
};
