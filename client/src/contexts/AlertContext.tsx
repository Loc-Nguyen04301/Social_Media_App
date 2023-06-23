import React, { ReactNode, createContext } from "react";
import { alertReducer } from "../reducers/AlertReducer";
import { AlertAction } from "../reducers/AlertReducer";

interface AlertContextProviderProps {
  children: ReactNode;
}

interface AlertContextDefault {
  loading?: boolean;
  success?: string;
  errors?: string[] | string;
  dispatch: React.Dispatch<AlertAction>;
}

const alertContextValueDefault = {
  loading: false,
  success: undefined,
  errors: undefined,
  dispatch: () => null,
};

const initialState = alertContextValueDefault;

export const AlertContext = React.createContext<AlertContextDefault>(
  alertContextValueDefault
);

const AlertContextProvider = ({ children }: AlertContextProviderProps) => {
  const [state, dispatch] = React.useReducer(alertReducer, initialState);
  const value = { ...state, dispatch };

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

export default AlertContextProvider;
