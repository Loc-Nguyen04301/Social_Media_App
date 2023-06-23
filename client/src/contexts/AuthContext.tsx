import React, { ReactNode } from "react";
import { IUser } from "../utils/TypeScript";
import { authReducer, AuthAction } from "../reducers/AuthReducer";

interface AuthContextProviderProps {
  children: ReactNode;
}

const initialState = {
  access_token: "",
  user: {} as IUser,
};

interface AuthContextDefault {
  access_token: string;
  user: IUser;
  dispatch: React.Dispatch<AuthAction>;
}

const authContextValueDefault = {
  access_token: initialState.access_token,
  user: initialState.user,
  dispatch: () => null,
};

export const AuthContext = React.createContext<AuthContextDefault>(
  authContextValueDefault
);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  const value = {
    ...state,
    dispatch,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
