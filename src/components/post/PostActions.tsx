import { Flex } from "@radix-ui/themes";
import CommentBtn from "../buttons/CommentBtn";
import LikeBtn from "../buttons/LikeBtn";
import useGiveLike from "../../hooks/useGiveLike";
import useGiveUnlike from "../../hooks/useGiveUnlike";

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
      <LikeBtn giveLike={handleLikeClick} giveUnlike={handleUnlikeClick} />
      <CommentBtn />
    </Flex>
  );
};

export default PostActions;
