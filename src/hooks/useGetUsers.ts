import { useQuery } from "@tanstack/react-query";
import useUserStore from "../components/user/store";
import { UserInfo } from "../interfaces/Entity";
import apiClient from "../services/api-client";
import ms from "ms";

const useGetUsers = () => {
  const username = useUserStore((s) => s.username);
  const getUsers = async () => {
    const params = new URLSearchParams();
    if (username) {
      params.append("username", username);
    }
    const queryString = params.toString();

    if (queryString) {
      const res = await apiClient.get<UserInfo[]>(
        `/user/all${queryString ? "?" + queryString : ""}`
      );

      return res.data;
    }
    return [];
  };
  return useQuery<UserInfo[], Error>({
    queryKey: ["users", username],
    queryFn: getUsers,
    retry: 3,
    staleTime: ms("3m"),
  });
};

export default useGetUsers;
