import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import ms from "ms";

const useGetLikeByUserAndPost = (postId: string, userId: string) => {
  const getPostLikedByUser = async () => {
    const res = await apiClient.get<boolean>(`/like/post/${postId}`, {
      headers: {
        userId: userId,
      },
    });
    return res.data;
  };
  return useQuery({
    queryKey: [userId, "like", postId],
    queryFn: getPostLikedByUser,
    retry: 2,
    staleTime: ms("1m"),
  });
};

export default useGetLikeByUserAndPost;
