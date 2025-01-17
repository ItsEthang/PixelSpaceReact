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
  const { isLoggedIn: _isLoggedIn } = useUserStore();
  const profileImg = user.profileImg ? user.profileImg : placeholder;
  const fallback = user.name ? user.name.charAt(0) : "X";
  const isAuth = useIsAuthenticated();
  const userId = useAuthUserId();
  return (
    <Flex gap="3" align="center">
      <Link to={`/profile/${user?.userId}`}>
        <Flex
          gap="3"
          align="center"
          className="w-[140px] md:w-[180px] truncate"
        >
          <div className="hidden sm:block">
            <Avatar
              size="3"
              src={profileImg}
              radius="full"
              fallback={fallback}
            />
          </div>
          <Box>
            <Text
              as="p"
              size="2"
              weight="bold"
              className="truncate max-w-[100px] lg:max-w-[140px]"
            >
              {user.name}
            </Text>
            <Text
              as="p"
              size="1"
              color="gray"
              className="truncate max-w-[100px] lg:max-w-[150px]"
            >
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
