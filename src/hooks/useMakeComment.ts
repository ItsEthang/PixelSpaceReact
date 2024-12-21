import apiClient from "../services/api-client";

const useMakeComment = (postId: number, userId: string, content: string) => {
  return apiClient.post(
    "/user/post/comment",
    {
      postId,
      comment: {
        content,
      },
    },
    {
      headers: {
        userId: userId,
      },
    }
  );
};

export default useMakeComment;
