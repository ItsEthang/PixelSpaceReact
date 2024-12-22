import { Box, Button, Flex, Heading, Separator } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import AllPost from "../../components/post/AllPost";
import useUserStore from "../../components/user/store";

const MyPostPage = () => {
  const { userId } = useUserStore();
  if (!userId) {
    return <Heading>Please login to see your posts.</Heading>;
  }

  return (
    <>
      <Flex direction="column" justify="center" align="center" gap="4">
        <Flex align="center" gap="5">
          <Heading as="h2" size="8">
            🚀 My Posts 🚀
          </Heading>
          <Separator orientation="vertical" size="2" />
          <Link to={`/mypost/new/${userId}`}>
            <Button variant="surface">Make a Post</Button>
          </Link>
        </Flex>
        <Box className="w-1/2">
          <Separator size="4" orientation="horizontal" />
        </Box>
      </Flex>
      <AllPost userId={userId + ""} />
    </>
  );
};

export default MyPostPage;
