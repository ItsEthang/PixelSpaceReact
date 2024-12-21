import { Avatar, Box, Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { UserInfo } from "../../interfaces/Entity";
import FollowBtn from "../buttons/FollowBtn";
import useUserStore from "../user/store";
import placeholder from "../../assets/placeholder-profile.webp";

interface Props {
  user: UserInfo;
}

const PostUser = ({ user }: Props) => {
  const { isLoggedIn, userId } = useUserStore();
  const profileImg = user.profileImg ? user.profileImg : placeholder;
  const fallback = user.name ? user.name.charAt(0) : "X";
  return (
    <Flex gap="3" align="center" className="mb-2">
      <Link to={`/profile/${user?.userId}`}>
        <Flex gap="3" align="center" className="mb-2">
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
      {isLoggedIn && userId && (
        <FollowBtn user1Id={userId} user2Id={user?.userId} />
      )}
    </Flex>
  );
};

export default PostUser;
