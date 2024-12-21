import { useParams } from "react-router-dom";
import useGetFollowing from "../../hooks/useGetFollowing";
import { Box, Card, Flex, Heading, Separator } from "@radix-ui/themes";
import PostUser from "../../components/post/PostUser";
import useUserStore from "../../components/user/store";
import useGetUserById from "../../hooks/useGetUserById";

const UserFollowings = () => {
  const params = useParams();
  const { isLoggedIn, userId } = useUserStore();
  const { data: followings } = useGetFollowing(+params.userId!);
  const { data: profile } = useGetUserById(params.userId!);
  if (!isLoggedIn) {
    return (
      <Flex justify="center" m="5">
        <Box>
          <Heading as="h2" size="8" mb="3">
            Please log in to see your followings
          </Heading>
          <Separator size="4" />
        </Box>
      </Flex>
    );
  }
  return (
    <>
      <Flex justify="center" m="5">
        <Box>
          <Heading as="h2" size="8" mb="3">
            {userId + "" === params.userId ? "My " : profile?.name + "'s "}
            Followings
          </Heading>
          <Separator size="4" />
        </Box>
      </Flex>
      <Flex direction="column" justify="center" align="center" gap="5">
        {followings?.map((following) => (
          <Card key={following.username}>
            <PostUser user={following} />
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default UserFollowings;
