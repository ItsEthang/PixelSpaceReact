import { Button, Flex, Heading, Separator } from "@radix-ui/themes";
import useUserStore from "../../components/user/store";
import useGetUserPosts from "../../hooks/useGetUserPosts";
import { Link } from "react-router-dom";

const MyPostPage = () => {
  const { userId } = useUserStore();
  if (!userId) {
    return <Heading>Please login to see your posts.</Heading>;
  }
  const {} = useGetUserPosts(userId + "");

  return (
    <Flex direction="column" justify="center" align="center" gap="4">
      <Link to={`/mypost/new/${userId}`}>
        <Button variant="surface">Make a Post</Button>
      </Link>
      <Heading as="h2">My Posts</Heading>
      <Separator size="3" orientation="horizontal" />
    </Flex>
  );
};

export default MyPostPage;
