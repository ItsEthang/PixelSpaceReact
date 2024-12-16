import { create } from "zustand";

interface UserStore {
  userId: number | null;
  isLoggedIn: boolean;
  login: (userId: number) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  userId: null,
  isLoggedIn: false,
  login: (userId) =>
    set(() => ({
      userId: userId,
      isLoggedIn: true,
    })),
  logout: () =>
    set(() => ({
      userId: null,
      isLoggedIn: false,
    })),
}));

export default useUserStore;
