import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Post } from "../interfaces/Entity";
import ms from "ms";
import usePostQueryStore from "../components/post/store";

const useGetPost = () => {
  const postQuery = usePostQueryStore((s) => s.postQuery);
  const getPost = async () => {
    const params = new URLSearchParams();
    if (postQuery.title) {
      params.append("title", postQuery.title);
    }
    if (postQuery.username) {
      params.append("username", postQuery.username);
    }
    const queryString = params.toString();

    const res = await apiClient.get<Post[]>(
      `/post${queryString ? "?" + queryString : ""}`
    );

    const sortedPosts = res.data.sort((a, b) => b.timeCreated - a.timeCreated);
    return sortedPosts;
  };
  return useQuery<Post[], Error>({
    queryKey: ["posts", postQuery],
    queryFn: getPost,
    retry: 3,
    staleTime: ms("3m"),
  });
};

export default useGetPost;
