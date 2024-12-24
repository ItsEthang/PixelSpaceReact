import { Flex } from "@radix-ui/themes";
import useGiveLike from "../../hooks/useGiveLike";
import useGiveUnlike from "../../hooks/useGiveUnlike";
import CommentBtn from "../buttons/CommentBtn";
import LikeBtn from "../buttons/LikeBtn";
import useGetLikeByUserAndPost from "../../hooks/useGetLikeByUserAndPost";
import useGetPostLikeCount from "../../hooks/useGetPostLikeCount";

interface Props {
  postId: number;
  userId: string;
}

const PostActions = ({ postId, userId }: Props) => {
  const { data: isLikedByLogIn } = useGetLikeByUserAndPost(postId + "", userId);
  const { data: likeCtn } = useGetPostLikeCount(postId + "");
  const validLike =
    typeof isLikedByLogIn === "boolean" && typeof likeCtn === "number";
  return (
    <Flex justify="end" align="center" gap="7">
      {validLike && (
        <LikeBtn
          isLikedByAuthUser={isLikedByLogIn}
          likeCtn={likeCtn}
          postId={postId + ""}
          userId={userId}
        />
      )}

      <CommentBtn postId={postId} userId={userId} />
    </Flex>
  );
};

export default PostActions;
