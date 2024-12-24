import { create } from "zustand";

interface UserStore {
  isLoggedIn: boolean;
  login: (userId: number) => void;
}

const useUserStore = create<UserStore>((set) => ({
  isLoggedIn: false,
  login: () =>
    set((store) => ({
      isLoggedIn: !store.isLoggedIn,
    })),
}));

export default useUserStore;
