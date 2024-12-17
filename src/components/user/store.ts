import { create } from "zustand";
import { UserProfile } from "../../interfaces/Entity";

interface UserStore {
  userId: number | null;
  userProfile: UserProfile | null;
  isLoggedIn: boolean;
  login: (userId: number) => void;
  logout: () => void;
  setUserProfile: (userInput: UserProfile) => void;
}

const useUserStore = create<UserStore>((set) => ({
  userId: null,
  isLoggedIn: false,
  userProfile: null,
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
  setUserProfile: (userInput) =>
    set(() => ({
      userProfile: userInput,
    })),
}));

export default useUserStore;
