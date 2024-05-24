import { SignInUser, IResetPassword, IForgotPassword } from "models/AuthModel";
import { ApiService, } from "./BaseService";

export const signIn = (values: SignInUser): Promise<void> => {
    return ApiService.post(`/auth/login`, { email: values.username, password: values.password });
};

export const refreshToken = (refreshToken: string): Promise<void> => {
    return ApiService.post(`/auth/refreshToken`, { refreshToken });
};

export const resetPassword = (values: IResetPassword): Promise<any> => {
    const { uuid, newPassword, oldPassword } = values
    return ApiService.post(`/auth/change-password `, { uuid, newPassword, oldPassword });
};

export const forgotPassword = (email: string): Promise<any> => {
    return ApiService.post(`/auth/forgot-password`, { email });
};

export const confirmForgotPassword = (values: IForgotPassword): Promise<any> => {
    const { email, confirmationCode, newPassword } = values
    return ApiService.post(`/auth/confirm-forgot-password `, { email, confirmationCode, newPassword });
};