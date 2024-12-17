import useGetPost from "../../hooks/useGetPost";
import { Flex, Heading, Separator } from "@radix-ui/themes";
import PostCard from "./PostCard";

const AllPost = () => {
  const { data: posts, error } = useGetPost();
  if (error)
    return <Heading>Sorry, there is an error fetching the posts</Heading>;
  return (
    <div className="col-span-5 lg:col-span-4 m-4">
      <Flex direction="column" justify="center" align="center" gap="4">
        <Heading as="h2">Posts of the Day</Heading>
        <Separator size="4" orientation="horizontal" />
        {posts?.map((post) => (
          <PostCard post={post} key={post.postId} />
        ))}
      </Flex>
    </div>
  );
};

export default AllPost;
