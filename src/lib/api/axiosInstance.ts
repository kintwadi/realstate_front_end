// lib/api/axiosInstance.ts
// This file creates a centralized Axios instance with interceptors for request/response handling.
// Includes support for AbortController via signal and a 401 error handler.

import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { API_URLS, BASE_URL } from "./apiUrls";
import { STORAGE_KEYS } from "../localstorage/localstorage.keys";
import { localStorageUtils } from "../localstorage";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL, // Dynamically set baseURL from apiUrls (adjust if needed)
  timeout: 10000, // 10 seconds timeout, adjustable
  headers: {
    "Content-Type": "application/json",
    // Add other default headers, e.g., 'Accept': 'application/json'
  },
});

// Request Interceptor: Add auth token if available (e.g., from localStorage or cookies)
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Example: Add Bearer token from localStorage (adapt for your auth system)
    const token = typeof window !== "undefined" ? localStorageUtils.get(STORAGE_KEYS.ACCESS_TOKEN) : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Flag to avoid multiple refresh requests at once
let isRefreshing = false;
let failedQueue: {
  resolve: (value?: unknown) => void;
  reject: (error?: unknown) => void;
}[] = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Response Interceptor: Handle 401 errors (e.g., redirect to login or refresh token)
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }

        return Promise.reject(error);
      }

      if (isRefreshing) {
        // Queue the request until refresh is done
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (token) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        // Call refresh endpoint
        const refreshResponse = await axios.get(API_URLS.auth.refreshToken(), {
          headers: { Authorization: `Bearer ${refreshToken}` },
        });

        const newAccessToken = refreshResponse.data.accessToken;
        const newRefreshToken = refreshResponse.data.refreshToken;

        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem("refreshToken", newRefreshToken);

        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
        processQueue(null, newAccessToken);

        // Retry the failed request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
