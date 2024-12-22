import { Flex } from "@radix-ui/themes";
import { useParams } from "react-router-dom";
import PostDetailComponent from "../../components/post/PostDetailComponent";

const PostDetailPage = () => {
  const { postId } = useParams();

  return (
    <Flex justify="center">
      <div className="grid grid-cols-5 w-5/6 h-screen  p-8 bg-zinc-800">
        <div className="col-span-5 lg:col-span-4">
          <PostDetailComponent postId={postId!} />
        </div>
      </div>
    </Flex>
  );
};

export default PostDetailPage;
