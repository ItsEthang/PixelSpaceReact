import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { UserProfile } from "../interfaces/Entity";

const useGetLoggedInUser = (userId: string) => {
  const getLoggedInUser = async () => {
    const res = await apiClient.get<UserProfile>("/user", {
      headers: {
        userId: userId,
      },
    });
    return res.data;
  };
  return useQuery({
    queryKey: ["logged-in-user"],
    queryFn: getLoggedInUser,
  });
};

export default useGetLoggedInUser;
