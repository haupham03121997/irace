import { CurrentUser } from "@/interfaces/auth";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/utils";
import { create } from "zustand";

interface AuthStore {
  user: CurrentUser | null;
  setUser: (user: CurrentUser) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: getLocalStorage<CurrentUser>("currentUser") || null,
  setUser: (user) => {
    setLocalStorage("currentUser", user);
    set({ user });
  },
  logout: () => {
    set({ user: null });
    removeLocalStorage("currentUser");
  },
}));
