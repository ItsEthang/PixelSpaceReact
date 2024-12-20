import { Flex } from "@radix-ui/themes";
import CommentBtn from "../buttons/CommentBtn";
import LikeBtn from "../buttons/LikeBtn";
import useGiveLike from "../../hooks/useGiveLike";

interface Props {
  postId: number;
  userId: string;
}

const PostActions = ({ postId, userId }: Props) => {
  const handleLikeClick = () => {
    useGiveLike(postId, userId);
  };
  return (
    <Flex justify="end" align="center" gap="7">
      <LikeBtn giveLike={handleLikeClick} />
      <CommentBtn />
    </Flex>
  );
};

export default PostActions;
