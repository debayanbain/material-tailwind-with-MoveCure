import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export interface RequestOptions extends Omit<AxiosRequestConfig, 'url | method'> {
    url: string,
    method?: AxiosRequestConfig['method']
}

class ApiClient {
    private instance: AxiosInstance;

    constructor(defaultBaseUrl?: string) {
        this.instance = axios.create({
            baseURL: defaultBaseUrl
        });

        this.instance.interceptors.response.use((response: AxiosResponse) => response, (error) => {
            return Promise.reject(error.response || error)
        })
    }

    setBaseUrl(baseUrl: string) {
        this.instance.defaults.baseURL = baseUrl;
    }

    async request<T = AxiosResponse>(options: RequestOptions): Promise<T> {
        const { baseURL, url, method = 'GET', params, data, headers } = options;

        if (baseURL) {
            this.setBaseUrl(baseURL);
        }

        const response: AxiosResponse<T> = await this.instance.request({
            url,
            method,
            params,
            data,
            headers
        });

        return response.data;
    }

    get<T = AxiosResponse>(url: string, options?: Omit<RequestOptions, 'url' | 'method'>): Promise<T> {
        return this.request<T>({ ...(options || {}), url, method: 'GET' });
    }

    post<T = AxiosResponse>(url: string, data?: RequestOptions, options?: Omit<RequestOptions, 'url' | 'method' | 'data'>): Promise<T> {
        return this.request<T>({ ...(options || {}), url, method: 'POST', data });
    }

    put<T = AxiosResponse>(url: string, data?: RequestOptions, options?: Omit<RequestOptions, 'url' | 'method' | 'data'>): Promise<T> {
        return this.request<T>({ ...(options || {}), url, method: 'PUT', data });
    }

    delete<T = AxiosResponse>(url: string, options?: Omit<RequestOptions, 'url' | 'method'>): Promise<T> {
        return this.request<T>({ ...(options || {}), url, method: 'DELETE' });
    }
}


const defaultBaseUrl = process.env.NEXT_PUBLIC_API_URL || '';
export const apiClient = new ApiClient(defaultBaseUrl);

export default apiClient;