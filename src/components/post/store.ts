import { create } from "zustand";

interface PostQuery {
  title?: string;
  username?: string;
}

interface PostQueryStore {
  postQuery: PostQuery;
  setTitle: (title: string) => void;
  setUsername: (username: string) => void;
}

const usePostQueryStore = create<PostQueryStore>((set) => ({
  postQuery: {},
  setTitle: (title) =>
    set((store) => ({ postQuery: { ...store.postQuery, title } })),
  setUsername: (username) =>
    set((store) => ({ postQuery: { ...store.postQuery, username } })),
}));

export default usePostQueryStore;
