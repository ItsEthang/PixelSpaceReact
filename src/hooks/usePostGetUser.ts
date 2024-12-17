import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { UserInfo } from "../interfaces/Entity";
import ms from "ms";

const usePostGetUser = (postId: number) => {
  const getPostUser = async () => {
    const res = await apiClient.get<UserInfo>(`/post/${postId}/user`);
    return res.data;
  };
  return useQuery({
    queryKey: ["posts", `${postId}`, "user"],
    queryFn: getPostUser,
    retry: 3,
    staleTime: ms("3m"),
  });
};

export default usePostGetUser;
