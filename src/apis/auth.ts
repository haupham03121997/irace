import { CurrentUser } from "@/interfaces/auth";
import { loginUser } from "@/mocks/user";

import { setCookie } from "nookies";

export const authApi = {
  login: async (data: { email: string; password: string }) => {
    try {
      const response = await loginUser(data);
      const expires = new Date(Date.now() + 1 + 1000 * 60 * 60 * 24 * 365); // 365 days
      setCookie(null, "user", JSON.stringify(response), {
        expires,
      });
      return response as CurrentUser;
    } catch (error: any) {
      throw Error(error);
    }
  },
  register: async (data: { email: string; password: string }) => {
    try {
      const response = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      throw Error(error);
    }
  },
  logout: async () => {
    try {
      const response = await fetch("https://reqres.in/api/logout", {
        method: "POST",
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      throw Error(error);
    }
  },
};
