import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import apiClient from "../services/api-client";
import { Comment } from "../interfaces/Entity";

const useGetPostComments = (postId: string) => {
  const getPostComments = async () => {
    const res = await apiClient.get<Comment[]>(`/post/${postId}/comment`);
    return res.data;
  };
  return useQuery<Comment[], Error>({
    queryKey: ["posts", { postId }, "comments"],
    queryFn: getPostComments,
    retry: 3,
    staleTime: ms("3m"),
  });
};

export default useGetPostComments;
