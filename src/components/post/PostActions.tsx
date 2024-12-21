import { Flex } from "@radix-ui/themes";
import useGiveLike from "../../hooks/useGiveLike";
import useGiveUnlike from "../../hooks/useGiveUnlike";
import CommentBtn from "../buttons/CommentBtn";
import LikeBtn from "../buttons/LikeBtn";

interface Props {
  postId: number;
  userId: string;
}

const PostActions = ({ postId, userId }: Props) => {
  const handleLikeClick = () => {
    useGiveLike(postId, userId);
  };
  const handleUnlikeClick = () => {
    useGiveUnlike(postId, userId);
  };
  return (
    <Flex justify="end" align="center" gap="7">
      <LikeBtn
        giveLike={handleLikeClick}
        giveUnlike={handleUnlikeClick}
        postId={postId + ""}
        userId={userId}
      />

      <CommentBtn postId={postId} userId={userId} />
    </Flex>
  );
};

export default PostActions;
