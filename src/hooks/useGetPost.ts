import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Post } from "../interfaces/Entity";
import ms from "ms";

const useGetPost = () => {
  const getPost = async () => {
    const res = await apiClient.get<Post[]>("/post");
    const sortedPosts = res.data.sort((a, b) => b.timeCreated - a.timeCreated);
    return sortedPosts;
  };
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: getPost,
    retry: 3,
    staleTime: ms("3m"),
  });
};

export default useGetPost;
