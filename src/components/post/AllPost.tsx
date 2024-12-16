import useGetPost from "../../hooks/useGetPost";
import { Flex, Heading } from "@radix-ui/themes";
import PostCard from "./PostCard";

const AllPost = () => {
  const { data: posts } = useGetPost();
  return (
    <div className="col-span-4 lg:col-span-3">
      <Heading as="h2" className="m-4">
        Posts of the Day
      </Heading>
      <Flex direction="column" justify="center" align="center" gap="4">
        {posts?.map((post) => (
          <PostCard post={post} />
        ))}
      </Flex>
    </div>
  );
};

export default AllPost;
