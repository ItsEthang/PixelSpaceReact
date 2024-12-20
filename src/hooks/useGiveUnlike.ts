import apiClient from "../services/api-client";

const useGiveUnlike = (postId: number, userId: string) => {
  return apiClient.delete(
    "/user/post/like",

    {
      headers: {
        userId: userId,
      },
      data: {
        postId,
      },
    }
  );
};

export default useGiveUnlike;
