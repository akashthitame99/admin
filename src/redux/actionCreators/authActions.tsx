import {
  Action,
  ActionType,
  IAuthFail,
  IAuthResetPassword,
  IAuthSuccess,
  IAuthSuccessResponse,
} from "../actionTypes/authActionTypes";
import { Dispatch } from "redux";
// import { AxiosReq } from "../../services/axios";
// import { IResetPassword, SignInUser } from "../../models/UserModel";

// export const AuthStart =
//   (payload: SignInUser, cb: (arg: IAuthSuccessResponse) => void): any =>
//   async (dispatch: Dispatch<Action>) => {
//     try {
//       const authResponse = (await AxiosReq.post(
//         "/login",
//         payload
//       )) as IAuthSuccessResponse;
//       if (authResponse.authenticationResult.changePassword) {
//         dispatch<IAuthResetPassword>({
//           type: ActionType.RESET_PASSWORD,
//           payload: { session: authResponse.authenticationResult.session ?? "" },
//         });
//         cb(authResponse);
//         window.location.href = "/reset-password";
//       } else {
//         const isAccessToken = authResponse.authenticationResult.accessToken
//           ? true
//           : false;
//         const payloadData = {
//           ...payload,
//           authStatus: isAccessToken,
//           accessToken: authResponse.authenticationResult.accessToken,
//         };
//         dispatch<IAuthSuccess>({
//           type: ActionType.AUTH_SUCCESS,
//           payload: payloadData,
//         });
//         cb(authResponse);
//       }
//     } catch (error: any) {
//       cb(error);
//       dispatch<IAuthFail>({ type: ActionType.AUTH_FAIL, payload: null });
//     }
//   };

