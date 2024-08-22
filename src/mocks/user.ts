import { userLogin } from "./db";

export const loginUser = async (data: { email: string; password: string }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === "admin123" && data.password === "admin123") {
        resolve(userLogin);
      } else {
        reject({
          message: "Email hoặc mật khẩu không chính xác",
        });
      }
    }, 3000);
  });
};

export const registerUser = async (data: { email: string; password: string }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        email: data.email,
        token: "token",
        username: "username",
      });
    }, 1000);
  });
};
