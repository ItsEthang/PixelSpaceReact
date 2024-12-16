import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Post } from "../interfaces/Entity";

const useGetPost = () => {
  const getPost = async () => {
    const res = await apiClient.get<Post[]>("/post");
    return res.data;
  };
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPost,
  });
};

export default useGetPost;
