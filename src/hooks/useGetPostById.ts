import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { PostDetail } from "../interfaces/PostDetail";
import apiClient from "../services/api-client";

const useGetPostDetail = (postId: string) => {
  const getPostDetail = async () => {
    const res = await apiClient.get<PostDetail>(`/post/${postId}`);
    return res.data;
  };
  return useQuery<PostDetail, Error>({
    queryKey: ["posts", { postId }, "detail"],
    queryFn: getPostDetail,
    retry: 3,
    staleTime: ms("1d"),
  });
};

export default useGetPostDetail;
