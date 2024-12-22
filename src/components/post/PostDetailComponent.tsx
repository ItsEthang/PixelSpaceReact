import { Flex, Heading, Text } from "@radix-ui/themes";
import useGetPostDetail from "../../hooks/useGetPostById";
import usePostGetUser from "../../hooks/usePostGetUser";
import PostUser from "./PostUser";
import PostActions from "./PostActions";
import useUserStore from "../user/store";

interface Props {
  postId: string;
}

const PostDetailComponent = ({ postId }: Props) => {
  const { data: postDetail, error } = useGetPostDetail(postId);
  const { userId } = useUserStore();
  const { data: user } = usePostGetUser(+postId);

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
      <Flex justify="center">
        <Heading as="h2">{postDetail.title}</Heading>
      </Flex>
      <Text as="p" className="h-3/4 bg-zinc-900/50 my-7 p-8 overflow-scroll">
        {postDetail.content}
      </Text>
      {userId && <PostActions postId={+postId} userId={userId + ""} />}
    </>
  );
};

export default PostDetailComponent;
