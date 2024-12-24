import { Box, Card, Flex, Heading, Separator } from "@radix-ui/themes";
import { useParams } from "react-router-dom";
import PostUser from "../../components/post/PostUser";
import useAuthUserId from "../../hooks/useAuthUserId";
import useGetFollowing from "../../hooks/useGetFollowing";
import useGetUserById from "../../hooks/useGetUserById";

const UserFollowings = () => {
  const params = useParams();
  const { data: followings } = useGetFollowing(params.userId!);
  const { data: profile } = useGetUserById(params.userId!);
  const userId = useAuthUserId();
  return (
    <>
      <Flex justify="center" m="5">
        <Box>
          <Heading as="h2" size="8" mb="3">
            {userId + "" === params.userId ? "My " : profile?.name + "'s "}
            Followings ⭐
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
