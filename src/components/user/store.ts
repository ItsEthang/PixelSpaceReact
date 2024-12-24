import { create } from "zustand";

interface UserStore {
  isLoggedIn: boolean;
  login: (userId: number) => void;
  username: string;
  setUsername: (username: string) => void;
}

const useUserStore = create<UserStore>((set) => ({
  isLoggedIn: false,
  login: () =>
    set((store) => ({
      isLoggedIn: !store.isLoggedIn,
    })),
  username: "",
  setUsername: (username) =>
    set(() => ({
      username,
    })),
}));

export default useUserStore;
