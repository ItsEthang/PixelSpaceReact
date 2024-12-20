import { Flex } from "@radix-ui/themes";
import CommentBtn from "../buttons/CommentBtn";
import LikeBtn from "../buttons/LikeBtn";

const PostActions = () => {
  return (
    <Flex justify="end" align="center" gap="7">
      <LikeBtn />
      <CommentBtn />
    </Flex>
  );
};

export default PostActions;
