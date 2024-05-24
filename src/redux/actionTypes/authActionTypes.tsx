import { Auth } from "models/AuthModel";


export enum ActionType {
  AUTH_START = "AUTH_START",
  AUTH_SUCCESS = "AUTH_SUCCESS",
  AUTH_FAIL = "AUTH_FAIL",
  DO_LOGOUT = "DO_LOGOUT",
  DO_SIGNIN = "DO_SIGNIN",
  RESET_REDUX_STATE = "RESET_REDUX_STATE",
  RESET_PASSWORD = "RESET_PASSWORD",
}

export interface IAuthStart {
  type: ActionType.AUTH_START;
}

export interface IAuthSuccess {
  type: ActionType.AUTH_SUCCESS;
  payload: Auth;
}

export interface IAuthResult {
  session?: string;
  accessToken: string;
  refreshToken: string;
  TokenType?: string;
  idToken?: string;
  changePassword?: boolean;
}

export interface IAuthSuccessResponse {
  authenticationResult: IAuthResult;
  message?: string;
}

export interface IAuthFailPayload {
  code: string | null;
  message: string | null;
}

export interface IAuthFail {
  type: ActionType.AUTH_FAIL;
  payload: IAuthFailPayload | null;
}

export interface ILogout {
  type: ActionType.DO_LOGOUT;
}

export interface IResetReduxState {
  type: ActionType.RESET_REDUX_STATE;
}

export interface IAuthResetPassword {
  type: ActionType.RESET_PASSWORD;
  payload: { session: string };
}

export type Action =
  | IAuthStart
  | IAuthSuccess
  | IAuthFail
  | ILogout
  | IResetReduxState
  | IAuthResetPassword;
