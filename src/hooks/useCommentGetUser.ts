import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { UserInfo } from "../interfaces/Entity";
import ms from "ms";

const useCommentGetUser = (commentId: number) => {
  const getCommentUser = async () => {
    const res = await apiClient.get<UserInfo>(`/comment/${commentId}/user`);
    return res.data;
  };
  return useQuery({
    queryKey: ["comment", `${commentId}`, "user"],
    queryFn: getCommentUser,
    retry: 3,
    staleTime: ms("3h"),
  });
};

export default useCommentGetUser;
