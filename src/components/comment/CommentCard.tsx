import { Comment } from "../../interfaces/Entity";
import { Box, Text } from "@radix-ui/themes";
import useCommentGetUser from "../../hooks/useCommentGetUser";

const CommentCard = ({ comment }: { comment: Comment }) => {
  const { data: user } = useCommentGetUser(comment.commentId);
  return (
    <Box className="my-2 bg-zinc-900/50 rounded-md p-2">
      {user && (
        <Text as="span" color="gray" ml="1">
          {user?.name}:{" "}
        </Text>
      )}
      <Text as="span" color="gray">
        {comment.content}
      </Text>
    </Box>
  );
};

export default CommentCard;
