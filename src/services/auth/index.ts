import { api } from "@/services";
import { LoginDTO, RegisterInputDTO, UserDTO } from "./types";

const BASE_URL = "/api/auth";

export const authService = {
  register: (data: RegisterInputDTO) => {
    return api.post<UserDTO>(`${BASE_URL}/register`, data);
  },

  // login() {},
  login: (data: LoginDTO) => {
    return api.post<UserDTO>(`${BASE_URL}/login`, data);
  },

  logout: () => {
    return api.post(`${BASE_URL}/logout`);
  },

  me: () => {
    return api.get<UserDTO>(`${BASE_URL}/me`);
  },
};
