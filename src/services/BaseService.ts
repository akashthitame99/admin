import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
});

export const setAuthorizationToken = (token: string | null) => {
    if (token) {
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common.Authorization;
    }
};

const handleError = (error: any) => {
    if (error.response) {
        throw error.response.data;
    } else {
        throw error;
    }
};

const makeRequest = async <T>(
    method: string,
    url: string,
    data?: Record<string, any>,
): Promise<T> => {
    const fullUrl = `${process.env.NEXT_PUBLIC_BACKEND_APP_URL}${url}`
    try {
        const response = await axiosInstance.request<T>({
            method,
            url: fullUrl,
            data,
        });
        return response.data;
    } catch (error) {
        handleError(error);
        throw error;
    }
};

export const ApiService = {
    post: async <T>(url: string, data: Record<string, any>,): Promise<T> =>
        makeRequest<T>('post', url, data),

    put: async <T>(url: string, data: Record<string, any>,): Promise<T> =>
        makeRequest<T>('put', url, data),

    get: async <T>(url: string,): Promise<T> =>
        makeRequest<T>('get', url, undefined),

    patch: async <T>(url: string, data: Record<string, any>,): Promise<T> =>
        makeRequest<T>('patch', url, data),

    delete: async <T>(url: string,): Promise<T> =>
        makeRequest<T>('delete', url, undefined),
};
