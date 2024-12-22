import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import apiClient from "../services/api-client";
import { Post } from "../interfaces/Entity";

const useGetPostDetail = (postId: string) => {
  const getPostDetail = async () => {
    const res = await apiClient.get<Post>(`/post/${postId}`);
    return res.data;
  };
  return useQuery<Post, Error>({
    queryKey: ["posts", { postId }, "detail"],
    queryFn: getPostDetail,
    retry: 3,
    staleTime: ms("1d"),
  });
};

export default useGetPostDetail;
