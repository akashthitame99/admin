export interface AuthUser {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password?: string;
    active: boolean;
}

export enum USER_STATUS {
    Active = "Active",
    InActive = "In Active"
}

export interface SignInUser {
    username: string;
    password: string;
}

export interface IResetPassword {
    uuid?: string;
    newPassword: string;
    oldPassword?: string;
    confirmPassword?: string;
}

export interface IForgotPassword {
    email?: string;
    newPassword: string;
    confirmationCode?: string;
    confirmPassword?: string;
}

export interface Auth {
    authStatus: boolean,
    user?: AuthUser;
    error?: string | null;
    accessToken: string;
}