import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Post } from "../interfaces/Entity";
import ms from "ms";

const useGetUserPosts = (userId: string) => {
  const getPostByUser = async () => {
    const res = await apiClient.get<Post[]>(`/user/post`, {
      headers: {
        userId,
      },
    });
    return res.data;
  };
  return useQuery<Post[], Error>({
    queryKey: ["user", `${userId}`, "posts"],
    queryFn: getPostByUser,
    retry: 2,
    staleTime: ms("3m"),
  });
};

export default useGetUserPosts;
