import { Flex, Heading, Separator } from "@radix-ui/themes";
import useGetPost from "../../hooks/useGetPost";
import PostCard from "./PostCard";
import useGetUserPosts from "../../hooks/useGetUserPosts";
import SearchField from "./SearchField";

const AllPost = ({ userId }: { userId?: string }) => {
  const { data: posts, error } = userId
    ? useGetUserPosts(userId)
    : useGetPost();

  if (error)
    return <Heading>Sorry, there is an error fetching the posts</Heading>;
  return (
    <Flex direction="column" justify="center" align="center" gap="4">
      {!userId && (
        <Heading as="h2" size="6">
          🚀 Latest Posts 🚀
        </Heading>
      )}

      <Separator size="4" orientation="horizontal" />
      <SearchField />
      {posts?.map((post) => (
        <PostCard post={post} key={post.postId} />
      ))}
    </Flex>
  );
};

export default AllPost;
