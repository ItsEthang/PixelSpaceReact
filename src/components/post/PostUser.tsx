import { Avatar, Box, Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { UserInfo } from "../../interfaces/Entity";
import FollowBtn from "../buttons/FollowBtn";
import useUserStore from "../user/store";
import placeholder from "../../assets/placeholder-profile.webp";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useAuthUserId from "../../hooks/useAuthUserId";

interface Props {
  user: UserInfo;
}

const PostUser = ({ user }: Props) => {
  const { isLoggedIn } = useUserStore();
  const profileImg = user.profileImg ? user.profileImg : placeholder;
  const fallback = user.name ? user.name.charAt(0) : "X";
  const isAuth = useIsAuthenticated();
  const userId = useAuthUserId();
  return (
    <Flex gap="3" align="center">
      <Link to={`/profile/${user?.userId}`}>
        <Flex gap="3" align="center">
          <Avatar size="3" src={profileImg} radius="full" fallback={fallback} />
          <Box>
            <Text as="div" size="2" weight="bold">
              {user.name}
            </Text>
            <Text as="div" size="1" color="gray">
              @{user.username}
            </Text>
          </Box>
        </Flex>
      </Link>
      {isAuth && userId && (
        <FollowBtn user1Id={userId} user2Id={user?.userId} />
      )}
    </Flex>
  );
};

export default PostUser;
