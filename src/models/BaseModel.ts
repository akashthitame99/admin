export type ApiResponse<T> = ApiDataResponse<T> | ApiErrorResponse;

export interface ApiErrorResponse {
    result: "error";
    message?: string;
    data?: any;
    error?: Error;
}

export type ApiDataResponse<T> = {
    result: "success";
    data: T;
};