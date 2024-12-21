import { useParams } from "react-router-dom";
import useGetFollowing from "../../hooks/useGetFollowing";
import { Box, Card, Flex, Heading, Separator } from "@radix-ui/themes";
import PostUser from "../../components/post/PostUser";

const UserFollowings = () => {
  const params = useParams();
  const { data: followings } = useGetFollowing(+params.userId!);
  return (
    <>
      <Flex justify="center" m="5">
        <Box>
          <Heading as="h2" size="8" mb="3">
            My Followings
          </Heading>
          <Separator size="4" />
        </Box>
      </Flex>
      <Flex direction="column" justify="center" align="center" gap="5">
        {followings?.map((following) => (
          <Card>
            <PostUser user={following} />
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default UserFollowings;
