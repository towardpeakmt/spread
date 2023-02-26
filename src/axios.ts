import axios, { AxiosError, AxiosResponse } from "axios";
import { loginResponseData } from "@api/types";
import { store } from "./store";
import { logIn, logOut } from "@store/slices/authSlice/authSlice";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    baseURL: 'http://78.47.219.154'
  },
});

instance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response): Promise<AxiosResponse> => {
    return Promise.resolve(response);
  },
  async (error): Promise<AxiosError> => {
    const originalConfig = error.config;
    const { status, data } = error.response;

    if (status === 400) return Promise.reject(data.errors);

    if (status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const refr_token = window.localStorage.getItem("refresh_token") || null;
        if (refr_token) {
          const rs = await instance.post<loginResponseData>(
            "/api/v1/auth/refresh",
            {
              refresh_token: window.localStorage.getItem("refresh_token"),
            }
          );

          const { access_token, refresh_token } = rs.data;
          store.dispatch(logIn({ access_token, refresh_token }));

          return instance(originalConfig);
        } else {
          store.dispatch(logOut());
        }
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
    return Promise.reject(data);
  }
);

export default instance;
