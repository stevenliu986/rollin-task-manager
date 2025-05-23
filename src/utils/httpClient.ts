import axios, {
    AxiosInstance,
    AxiosRequestConfig,
} from 'axios';

interface BaseResponse<T = any> {
    code: number;
    message: string;
    data: T;
}

const service: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 10000,
});

export function get<T = any>(
    url: string,
    params?: Record<string, any>,
    options?: AxiosRequestConfig
): Promise<BaseResponse<T>> {
    return service({
        url,
        method: 'get',
        params,
        ...options,
    });
}

export function post<T = any>(
    url: string,
    data?: Record<string, any>,
    options?: AxiosRequestConfig
): Promise<BaseResponse<T>> {
    return service({
        url,
        method: 'post',
        data,
        ...options,
    });
}

export function put<T = any>(
    url: string,
    data?: Record<string, any>,
    options?: AxiosRequestConfig
): Promise<BaseResponse<T>> {
    return service({
        url,
        method: 'put',
        data,
        ...options,
    });
}

export function del<T = any>(
    url: string,
    params?: Record<string, any>,
    options?: AxiosRequestConfig
): Promise<BaseResponse<T>> {
    return service({
        url,
        method: 'delete',
        params,
        ...options,
    });
}

export default service;