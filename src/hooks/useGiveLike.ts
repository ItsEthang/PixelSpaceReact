import apiClient from "../services/api-client";

const useGiveLike = (postId: number, userId: string) => {
  return apiClient.post(
    "/user/post/like",
    {
      postId,
    },
    {
      headers: {
        userId: userId,
      },
    }
  );
};

export default useGiveLike;
