import { Box, Card } from "@radix-ui/themes";
import usePostGetUser from "../../hooks/usePostGetUser";
import { Post } from "../../interfaces/Entity";
import PostActions from "./PostActions";
import PostContent from "./PostContent";
import PostUser from "./PostUser";
import useUserStore from "../user/store";

const PostCard = ({ post }: { post: Post }) => {
  const { isLoggedIn } = useUserStore();
  const { data: user, error } = usePostGetUser(post.postId);
  if (!user || error) {
    return null;
  }
  return (
    <Card className="w-4/5">
      <Box px="3" py="1">
        <PostUser user={user} />
        <PostContent post={post} />
        {isLoggedIn && <PostActions />}
      </Box>
    </Card>
  );
};

export default PostCard;
