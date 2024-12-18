import { Button } from "@radix-ui/themes";
import useGetFollowing from "../../hooks/useGetFollowing";

interface Props {
  user1Id: number | null;
  user2Id: number | undefined;
}

const FollowBtn = ({ user1Id, user2Id }: Props) => {
  if (user1Id === null || user1Id === user2Id) {
    return null;
  }
  const { data: followings, error } = useGetFollowing(user1Id);

  if (error) {
    return null;
  }

  const isFollowing = followings?.some(
    (following) => following.userId === user2Id
  );
  return (
    <>
      {isFollowing ? (
        <Button color="red" variant="surface" size="1">
          Unfollow
        </Button>
      ) : (
        <Button color="green" variant="surface" size="1">
          Follow
        </Button>
      )}
    </>
  );
};

export default FollowBtn;
