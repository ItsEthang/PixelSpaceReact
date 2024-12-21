import { Flex, Heading, Separator } from "@radix-ui/themes";
import useUserStore from "../../components/user/store";
import useGetUserPosts from "../../hooks/useGetUserPosts";

const MyPostPage = () => {
  const { userId } = useUserStore();
  if (!userId) {
    return <Heading>Please login to see your posts.</Heading>;
  }
  const {} = useGetUserPosts(userId + "");

  return (
    <Flex direction="column" justify="center" align="center" gap="4">
      <Heading as="h2">My Posts</Heading>
      <Separator size="4" orientation="horizontal" />
    </Flex>
  );
};

export default MyPostPage;
