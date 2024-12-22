import { Box, Text } from "@radix-ui/themes";
import { Post } from "../../interfaces/Entity";
import ReactMarkdown from "react-markdown";

const PostContent = ({ post }: { post: Post }) => {
  return (
    <Box my="3">
      <Text as="div" size="6" weight="bold" mb="2">
        {post.title}
      </Text>
      <Text as="p" size="2" color="gray" className="line-clamp-3">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </Text>
    </Box>
  );
};

export default PostContent;
