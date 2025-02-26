import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";
import {
  deleteCookie,
  getCookie,
  setCookie,
} from "@/shared/lib/services/cookieConf";
import i18n from "i18next";

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(apiUrl?: string) {
    const baseURL = apiUrl || (import.meta.env.VITE_API_URL as string);

    this.axiosInstance = axios.create({
      baseURL,
      withCredentials: true,
    });

    this.setupInterceptors();
  }

  public async $get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  public async $post<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  public async $put<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return response.data;
  }

  public async $patch<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.axiosInstance.patch<T>(url, data, config);
    return response.data;
  }

  public async $delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }

  public deleteCredientials() {
    deleteCookie("__token");
    deleteCookie("__user");
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = getCookie("__token");
        const language = i18n.language || "ru";

        if (!config.headers) {
          config.headers = new AxiosHeaders();
        }
        config.headers["Accept-Language"] = language;
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        } else {
          delete config.headers.Authorization;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error: AxiosError) => {
        const statusCode = error.response?.status;

        if (statusCode === 404) {
          return Promise.reject(error);
        }
        if (statusCode === 500) {
          return Promise.reject(error);
        }

        if (statusCode === 401 || statusCode === 403) {
          const newAccessToken = getCookie("access_token");
          if (newAccessToken) {
            try {
              setCookie("__token", newAccessToken);

              if (error.config) {
                const currentHeaders = error.config.headers;
                if (currentHeaders && typeof currentHeaders === "object") {
                  Object.assign(currentHeaders, {
                    Authorization: `Bearer ${newAccessToken}`,
                  });
                }

                return this.axiosInstance.request(error.config);
              }
            } catch (refreshError) {
              this.deleteCredientials();
              window.location.href = "/Auth/login";
              return Promise.reject(refreshError);
            }
          } else {
            this.deleteCredientials();
            window.location.href = "/Auth/login";
            return Promise.reject(error);
          }
        }

        return Promise.reject(error);
      },
    );
  }
}

export const apiService = new ApiService();
