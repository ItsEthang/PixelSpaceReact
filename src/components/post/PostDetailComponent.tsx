import { Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import useAuthUserId from "../../hooks/useAuthUserId";
import useGetPostDetail from "../../hooks/useGetPostById";
import usePostGetUser from "../../hooks/usePostGetUser";
import PostActions from "./PostActions";
import PostUser from "./PostUser";

interface Props {
  postId: string;
}

const PostDetailComponent = ({ postId }: Props) => {
  const { data: postDetail, error } = useGetPostDetail(postId);
  const { data: user } = usePostGetUser(+postId);
  const userId = useAuthUserId();

  if (!postDetail) {
    return (
      <Heading>Sorry the post you are looking for no longer exist...</Heading>
    );
  }
  if (error) {
    return <Heading>Error: {error.message}</Heading>;
  }
  return (
    <>
      {user && <PostUser user={user} />}
      <Flex align="center" direction="column">
        <Heading as="h2">{postDetail.title}</Heading>
        <Text
          as="div"
          className="h-3/4 bg-zinc-900/50 my-7 p-8 overflow-scroll prose dark:prose-invert"
        >
          <ReactMarkdown>{postDetail.content}</ReactMarkdown>
        </Text>
      </Flex>

      {userId && <PostActions postId={+postId} userId={userId} />}
    </>
  );
};

export default PostDetailComponent;
