import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import ms from "ms";

const useGetPostLikeCount = (postId: string) => {
  const getPostLikeCount = async () => {
    const res = await apiClient.get<number>(`/post/${postId}/like`);
    return res.data;
  };
  return useQuery({
    queryKey: ["post", `${postId}`, "like"],
    queryFn: getPostLikeCount,
    retry: 2,
    staleTime: ms("5s"),
  });
};

export default useGetPostLikeCount;
