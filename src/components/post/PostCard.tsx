import { Box, Card } from "@radix-ui/themes";
import usePostGetUser from "../../hooks/usePostGetUser";
import { Post } from "../../interfaces/Entity";
import useUserStore from "../user/store";
import PostActions from "./PostActions";
import PostContent from "./PostContent";
import PostUser from "./PostUser";
import { Link } from "react-router-dom";

const PostCard = ({ post }: { post: Post }) => {
  const { isLoggedIn, userId } = useUserStore();
  const { data: user, error } = usePostGetUser(post.postId);

  if (!user || error) {
    return null;
  }
  return (
    <Card className="w-4/5">
      <Box px="3" py="1">
        <PostUser user={user} />
        <Link to={`/post/${post.postId}`}>
          <PostContent post={post} />
        </Link>
        {isLoggedIn && (
          <PostActions postId={post.postId} userId={userId + ""} />
        )}
      </Box>
    </Card>
  );
};

export default PostCard;
