import { Button } from "@radix-ui/themes";
import useGetFollowing from "../../hooks/useGetFollowing";
import { useEffect, useState } from "react";

interface Props {
  user1Id: number | null;
  user2Id: number | undefined;
}

const FollowBtn = ({ user1Id, user2Id }: Props) => {
  if (user1Id === null || user1Id === user2Id) {
    return null;
  }

  const { data: followings, error } = useGetFollowing(user1Id);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  if (error) {
    return null;
  }

  useEffect(() => {
    if (followings) {
      setIsFollowing(
        followings.some((following) => following.userId === user2Id)
      );
    }
  }, []);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <>
      {isFollowing ? (
        <Button color="red" variant="surface" size="1" onClick={handleClick}>
          Unfollow
        </Button>
      ) : (
        <Button color="green" variant="surface" size="1" onClick={handleClick}>
          Follow
        </Button>
      )}
    </>
  );
};

export default FollowBtn;
