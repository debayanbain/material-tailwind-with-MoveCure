import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import { userOnbording } from "@/store/userRelated"; // Zustand store

export interface RequestOptions
  extends Omit<AxiosRequestConfig, "url" | "method"> {
  url: string;
  method?: AxiosRequestConfig["method"];
}

export interface CustomHeaders extends AxiosRequestHeaders {
  Authorization?: string;
}

class ApiClient {
  private instance: AxiosInstance;

  constructor(defaultBaseUrl?: string) {
    this.instance = axios.create({
      baseURL: defaultBaseUrl,
    });

    this.instance.interceptors.request.use((config) => {
      const token = userOnbording.getState().token;
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        } as CustomHeaders;
      }
      return config;
    });

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          userOnbording.getState().logOut(); // auto logout user
        }
        return Promise.reject(error.response || error);
      }
    );
  }

  setBaseUrl(baseUrl: string) {
    this.instance.defaults.baseURL = baseUrl;
  }

  async request<T = AxiosResponse>(options: RequestOptions): Promise<T> {
    const { baseURL, url, method = "GET", params, data, headers } = options;

    if (baseURL) {
      this.setBaseUrl(baseURL);
    }

    const response: AxiosResponse<T> = await this.instance.request({
      url,
      method,
      params,
      data,
      headers,
    });

    return response.data;
  }

  get<T = AxiosResponse>(
    url: string,
    options?: Omit<RequestOptions, "url" | "method">
  ): Promise<T> {
    return this.request<T>({ ...(options || {}), url, method: "GET" });
  }

  post<T = AxiosResponse>(
    url: string,
    data?: unknown,
    options?: Omit<RequestOptions, "url" | "method" | "data">
  ): Promise<T> {
    return this.request<T>({ ...(options || {}), url, method: "POST", data });
  }

  put<T = AxiosResponse>(
    url: string,
    data?: unknown,
    options?: Omit<RequestOptions, "url" | "method" | "data">
  ): Promise<T> {
    return this.request<T>({ ...(options || {}), url, method: "PUT", data });
  }

  delete<T = AxiosResponse>(
    url: string,
    options?: Omit<RequestOptions, "url" | "method">
  ): Promise<T> {
    return this.request<T>({ ...(options || {}), url, method: "DELETE" });
  }
}

const defaultBaseUrl = process.env.NEXT_PUBLIC_API_URL || "";
export const apiClient = new ApiClient(defaultBaseUrl);

export default apiClient;