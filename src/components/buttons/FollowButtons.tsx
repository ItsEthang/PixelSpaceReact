import { Button, Flex, Separator } from "@radix-ui/themes";
import useGetFollower from "../../hooks/useGetFollower";
import useGetFollowing from "../../hooks/useGetFollowing";
import { Link } from "react-router-dom";

const FollowButtons = ({ userId }: { userId: number }) => {
  const { data: followers } = useGetFollower(userId);
  const { data: followings } = useGetFollowing(userId + "");
  const followersCtn = followers ? followers.length : 0;
  const followingsCtn = followings ? followings.length : 0;
  return (
    <Flex gap="5">
      <Link to={`/followers/${userId}`}>
        <Button variant="outline" color="yellow">
          Followers {followersCtn}
        </Button>
      </Link>
      <Separator orientation="vertical" size="2" color="yellow" />
      <Link to={`/followings/${userId}`}>
        <Button variant="outline" color="yellow">
          Followings {followingsCtn}
        </Button>
      </Link>
    </Flex>
  );
};

export default FollowButtons;
