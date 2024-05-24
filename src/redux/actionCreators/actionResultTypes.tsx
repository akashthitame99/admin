import { ThunkAction } from "redux-thunk";

import { RootState } from "../store/store";
import { Action as AuthActions } from "../actionTypes/authActionTypes";

export type RootActions = AuthActions;

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;
