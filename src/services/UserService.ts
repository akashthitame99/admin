import { User } from "models/ManageUsersModel";
import { ApiService } from "./BaseService";

export const getAllUsers = (): Promise<User[]> => {
    return ApiService.get("/users");
};

export const getUser = (id: string): Promise<User> => {
    return ApiService.get(`/users/${id}`);
};

export const getRolePermissions = (): Promise<any[]> => {
    return ApiService.get(`/user-roles`);
};

export const createUser = (user: User): Promise<void> => {
    return ApiService.post("/users", user);
};

export const editUser = (user: User): Promise<void> => {
    return ApiService.put("/users", user);
};

export const deleteUser = (id: string): Promise<void> => {
    return ApiService.post(`/users/${id}`, []);
};

export const validateEmail = (email: string): Promise<void> => {
    return ApiService.put(`/users/validate-email`, { email });
};