import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { UserInfo } from "../interfaces/Entity";
import ms from "ms";

const useGetFollowing = (userId: number) => {
  const getFollowing = async () => {
    const res = await apiClient.get<UserInfo[]>(`/user/following`, {
      headers: {
        userId: `${userId}`,
      },
    });
    return res.data;
  };
  return useQuery({
    queryKey: ["user", `${userId}`, "followings"],
    queryFn: getFollowing,
    retry: 2,
    staleTime: ms("6h"),
  });
};

export default useGetFollowing;
