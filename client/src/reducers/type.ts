enum AlertActionType {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  LOADING = "LOADING",
}
export const { ERROR, LOADING, SUCCESS } = AlertActionType;

enum AuthActionType {
  REGISTER = "REGISTER",
  LOGIN = "LOGIN",
  REFRESH_TOKEN = "REFRESH_TOKEN",
  LOGOUT = "LOGOUT",
}
export const { LOGIN, REGISTER, REFRESH_TOKEN, LOGOUT } = AuthActionType;
