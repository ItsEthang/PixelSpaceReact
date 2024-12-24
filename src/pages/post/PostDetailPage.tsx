import { Flex } from "@radix-ui/themes";
import { useParams } from "react-router-dom";
import PostDetailComponent from "../../components/post/PostDetailComponent";
import CommentList from "../../components/comment/CommentList";

const PostDetailPage = () => {
  const { postId } = useParams();

  return (
    <Flex justify="center">
      <div className="grid grid-cols-6 w-5/6 h-fit max-h-[1000px] p-3 lg:p-8 bg-zinc-800 gap-4">
        <div className="col-span-6 lg:col-span-4">
          <PostDetailComponent postId={postId!} />
        </div>
        <div className="col-span-6 lg:col-span-2">
          <CommentList postId={postId!} />
        </div>
      </div>
    </Flex>
  );
};

export default PostDetailPage;
