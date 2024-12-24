import { Box, Card, Flex, Heading, Separator } from "@radix-ui/themes";
import { useParams } from "react-router-dom";
import PostUser from "../../components/post/PostUser";
import useAuthUserId from "../../hooks/useAuthUserId";
import useGetFollower from "../../hooks/useGetFollower";
import useGetUserById from "../../hooks/useGetUserById";

const UserFollowers = () => {
  const params = useParams();
  const { data: followers } = useGetFollower(+params.userId!);
  const { data: profile } = useGetUserById(params.userId!);
  const userId = useAuthUserId();
  return (
    <>
      <Flex justify="center" m="5">
        <Box>
          <Heading as="h2" size="8" mb="3">
            {userId + "" === params.userId ? "My " : profile?.name + "'s "}
            Followers 🧑‍🚀
          </Heading>
          <Separator size="4" />
        </Box>
      </Flex>
      <Flex direction="column" justify="center" align="center" gap="5">
        {followers?.map((follower) => (
          <Card key={follower.username}>
            <PostUser user={follower} />
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default UserFollowers;
