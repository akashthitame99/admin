import { combineReducers } from "redux";
import { AuthReducer, IAuthState as AuthState } from "../reducers/authReducer";

interface RootStateType {
  readonly auth: AuthState | undefined | unknown;
}

// eslint-disable-next-line import/no-anonymous-default-export
const rootReducer: any = combineReducers<RootStateType>({
  auth: AuthReducer,
});
export default rootReducer;
