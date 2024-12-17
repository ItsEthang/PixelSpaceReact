import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { UserProfile } from "../interfaces/Entity";
import ms from "ms";

const useGetUserById = (userId: string) => {
  const getUserById = async () => {
    const res = await apiClient.get<UserProfile>(`/user`, {
      headers: {
        userId: userId,
      },
    });
    return res.data;
  };
  return useQuery<UserProfile, Error>({
    queryKey: ["user", `${userId}`],
    queryFn: getUserById,
    retry: 2,
    staleTime: ms("1m"),
  });
};

export default useGetUserById;
