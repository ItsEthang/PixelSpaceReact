import { Box, Card } from "@radix-ui/themes";
import usePostGetUser from "../../hooks/usePostGetUser";
import { Post } from "../../interfaces/Entity";
import useUserStore from "../user/store";
import PostActions from "./PostActions";
import PostContent from "./PostContent";
import PostUser from "./PostUser";
import { Link } from "react-router-dom";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useAuthUserId from "../../hooks/useAuthUserId";

const PostCard = ({ post }: { post: Post }) => {
  const { isLoggedIn } = useUserStore();
  const isAuth = useIsAuthenticated();
  const userId = useAuthUserId();
  const { data: user, error } = usePostGetUser(post.postId);

  if (!user || error) {
    return null;
  }
  return (
    <Card className="w-11/12 md:w-4/5">
      <Box px="3" py="1">
        <PostUser user={user} />
        <Link to={`/post/${post.postId}`}>
          <PostContent post={post} />
        </Link>
        {isAuth && <PostActions postId={post.postId} userId={userId} />}
      </Box>
    </Card>
  );
};

export default PostCard;
