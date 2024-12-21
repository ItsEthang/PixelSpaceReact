import { Button } from "@radix-ui/themes";
import useGetFollowing from "../../hooks/useGetFollowing";
import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

interface Props {
  user1Id: number;
  user2Id: number | undefined;
}

const FollowBtn = ({ user1Id, user2Id }: Props) => {
  const { data: followings, error } = useGetFollowing(user1Id);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  useEffect(() => {
    if (followings) {
      setIsFollowing(
        followings.some((following) => following.userId === user2Id)
      );
    }
  }, [followings]);

  const handleClick = () => {
    if (!isFollowing) {
      apiClient
        .post(
          "/user/follow",
          { userId2: user2Id },
          {
            headers: {
              userId: user1Id,
            },
          }
        )
        .catch((error) => {
          console.log(error);
        });
    } else {
      apiClient
        .delete("/user/follow", {
          headers: {
            userId: user1Id,
          },
          data: {
            userId2: user2Id,
          },
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setIsFollowing(!isFollowing);
  };

  if (user1Id === user2Id) {
    return null;
  }
  if (error) {
    return null;
  }
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
