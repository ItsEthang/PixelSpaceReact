import useGetPost from "../../hooks/useGetPost";
import { Flex, Heading } from "@radix-ui/themes";
import PostCard from "./PostCard";

const AllPost = () => {
  const { data: posts, error } = useGetPost();
  if (error)
    return <Heading>Sorry, there is an error fetching the posts</Heading>;
  return (
    <div className="col-span-4 lg:col-span-3 m-4">
      <Heading as="h2" className="mb-4">
        Posts of the Day
      </Heading>
      <Flex direction="column" justify="center" align="start" gap="4">
        {posts?.map((post) => (
          <PostCard post={post} key={post.postId} />
        ))}
      </Flex>
    </div>
  );
};

export default AllPost;
