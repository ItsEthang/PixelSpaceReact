import { Box, Card, Flex, Text } from "@radix-ui/themes";
import { Post } from "../../interfaces/Entity";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card className="w-3/4">
      <Flex gap="3" align="center">
        <Box>
          <Text as="div" size="4" weight="bold">
            {post.title}
          </Text>
          <Text as="div" size="2" color="gray">
            {post.content}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
};

export default PostCard;
