import { Flex, Heading, Separator } from "@radix-ui/themes";
import useGetPost from "../../hooks/useGetPost";
import PostCard from "./PostCard";
import PostManage from "./PostManage";
import SearchField from "./SearchField";

const AllPost = () => {
  const { data: posts, error } = useGetPost();

  if (error)
    return <Heading>Sorry, there is an error fetching the posts</Heading>;
  return (
    <Flex direction="column" justify="center" align="center" gap="4">
      <PostManage />

      <Separator size="4" orientation="horizontal" />
      <SearchField />
      {posts?.map((post) => (
        <PostCard post={post} key={post.postId} />
      ))}
    </Flex>
  );
};

export default AllPost;
