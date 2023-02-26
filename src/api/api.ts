import axios from "@/axios";
import {
  createWorkspaceArgs,
  fetchLoginArgs,
  fetchRegisterArgs,
  loginResponseData,
  registerResponseData,
  workspaceResponseData,
} from "./types";

const apiReq = {
  auth: {
    login: (obj: fetchLoginArgs) =>
      axios.post<loginResponseData>("/api/v1/auth/login", obj),
    register: (obj: fetchRegisterArgs) =>
      axios.post<registerResponseData>("/api/v1/auth/register", obj),
    getUser: () => axios.get<registerResponseData>("/api/v1/auth/user"),
  },
  workspace: {
    getAll: () => axios.get<workspaceResponseData[]>("/api/v1/workspace"),
    create: (obj: createWorkspaceArgs) =>
      axios.post<workspaceResponseData>("/api/v1/workspace", obj),
  },
};

export default apiReq;
// после логина записать токены в ls
// сразу после логина получить юзера (get)
// в mainLayout сделать useEffect с получением user (get) и сохранить в redux, но нужно проверить, есть ли token в ls
// в axios проверять на ошибку 401
