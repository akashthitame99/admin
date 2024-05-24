import { Reducer } from "redux";
import { Action, ActionType } from "../actionTypes/authActionTypes";
import { Auth } from "models/AuthModel";

export interface IAuthState {
  authStatus: boolean;
  // user: IUser | null;
  loading: boolean;
  error?: string | null;
  errorMessage?: string | null;
  accessToken: string;
  session?: string;
}

const initialState = {
  authStatus: false,
  // user: null,
  loading: false,
  error: null,
  errorMessage: null,
  accessToken: "",
};

export const AuthReducer: Reducer<IAuthState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionType.AUTH_START:
      return { ...state, loading: true };
    case ActionType.AUTH_SUCCESS:
      const auth: Auth = action.payload;
      return {
        ...state,
        authStatus: auth.authStatus,
        // user: auth.user,
        error: null,
        loading: false,
        accessToken: auth.accessToken,
      };
    case ActionType.AUTH_FAIL:
      return {
        ...state,
        error: action.payload?.code,
        errorMessage: action.payload?.message,
        loading: false,
      };
    case ActionType.DO_LOGOUT:
      return {
        ...initialState,
      };
    case ActionType.RESET_REDUX_STATE: {
      return {
        ...initialState,
      };
    }
    case ActionType.RESET_PASSWORD:
      return {
        ...state,
        session: action.payload.session,
      };
    default:
      return state;
  }
};
