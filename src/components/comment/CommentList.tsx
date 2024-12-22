import { Box, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import useGetPostComments from "../../hooks/useGetPostComment";
import FollowingCard from "../follow/FollowingCard";
import CommentCard from "./CommentCard";

const CommentList = ({ postId }: { postId: string }) => {
  const { data: comments } = useGetPostComments(postId);
  if (!comments) {
    return null;
  }
  return (
    <>
      <Flex
        direction="column"
        className="w-full border-solid border-2 border-zinc-900/50 h-full"
        gap="4"
      >
        <Heading as="h3" mt="4" className="text-center">
          Comments
        </Heading>
        <Separator orientation="horizontal" size="4" />

        <ul className="list-none px-5 max-h-full overflow-scroll">
          {comments.map((comment) => (
            <CommentCard comment={comment} key={comment.commentId} />
          ))}
        </ul>
      </Flex>
    </>
  );
};

export default CommentList;
