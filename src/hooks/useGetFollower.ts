import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { UserInfo } from "../interfaces/Entity";
import ms from "ms";

const useGetFollower = (userId: number) => {
  const getFollower = async () => {
    const res = await apiClient.get<UserInfo[]>(`/user/follower`, {
      headers: {
        userId: `${userId}`,
      },
    });
    return res.data;
  };
  return useQuery({
    queryKey: ["user", `${userId}`, "followers"],
    queryFn: getFollower,
    retry: 2,
    staleTime: ms("30s"),
  });
};

export default useGetFollower;
