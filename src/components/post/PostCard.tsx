import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import { Post } from "../../interfaces/Entity";
import usePostGetUser from "../../hooks/usePostGetUser";
import placeholder from "../../assets/placeholder-profile.webp";
import { Link } from "react-router-dom";
import useUserStore from "../user/store";
import FollowBtn from "../buttons/FollowBtn";

const PostCard = ({ post }: { post: Post }) => {
  const { isLoggedIn, userId } = useUserStore();
  const { data: user } = usePostGetUser(post.postId);
  const profileImg = user?.profileImg ? user.profileImg : placeholder;
  const fallback = user?.name ? user.name.charAt(0) : "X";
  return (
    <Card className="w-4/5">
      <Link to={`/profile/${user?.userId}`}>
        <Flex gap="3" align="center" className="mb-2">
          <Avatar size="3" src={profileImg} radius="full" fallback={fallback} />
          <Box>
            <Text as="div" size="2" weight="bold">
              {user?.name}
            </Text>
            <Text as="div" size="1" color="gray">
              @{user?.username}
            </Text>
          </Box>
          {isLoggedIn && <FollowBtn user1Id={userId} user2Id={user?.userId} />}
        </Flex>
      </Link>
      <Flex direction="column" gap="3">
        <Box>
          <Text as="div" size="4" weight="bold">
            {post.title}
          </Text>
        </Box>
        <Box>
          <Text as="div" size="2" color="gray">
            {post.content}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
};

export default PostCard;
