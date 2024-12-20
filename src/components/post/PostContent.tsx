import { Box, Text } from "@radix-ui/themes";
import React from "react";
import { Post } from "../../interfaces/Entity";

const PostContent = ({ post }: { post: Post }) => {
  return (
    <Box>
      <Text as="div" size="6" weight="bold" mb="2">
        {post.title}
      </Text>
      <Text as="div" size="2" color="gray">
        {post.content}
      </Text>
    </Box>
  );
};

export default PostContent;
