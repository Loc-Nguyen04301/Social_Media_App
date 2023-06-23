export enum AlertActionType {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  LOADING = "LOADING",
}

export interface AlertState {
  loading?: boolean;
  success?: string;
  errors?: string[] | string;
}

const { ERROR, LOADING, SUCCESS } = AlertActionType;

export type AlertAction =
  | {
      type: typeof ERROR;
      payload: AlertState;
    }
  | {
      type: typeof LOADING;
      payload: AlertState;
    }
  | {
      type: typeof SUCCESS;
      payload: AlertState;
    };

export const alertReducer = (state: AlertState, action: AlertAction) => {
  switch (action.type) {
    case LOADING:
      return action.payload;
    case ERROR:
      return action.payload;
    case SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
