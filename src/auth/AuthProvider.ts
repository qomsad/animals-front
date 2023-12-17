import { AuthProvider, HttpError } from "react-admin";

const api = new URL(
  "/login",
  import.meta.env.DEV ? import.meta.env.VITE_API_URL : window.location.origin
);

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const response = await fetch(api, {
      method: "POST",
      body: JSON.stringify({ login: username, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const user = await response.json();
      localStorage.setItem("user", JSON.stringify(user));
      return Promise.resolve();
    }
    const msg = await response.text();
    return Promise.reject(new HttpError(msg, response.status));
  },
  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("user");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};
