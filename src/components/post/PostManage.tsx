import { Button, Flex, Separator } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import useGetUserById from "../../hooks/useGetUserById";
import useUserStore from "../user/store";
import usePostQueryStore from "./store";

const PostManage = () => {
  const { userId: loginId, isLoggedIn } = useUserStore();
  const { setUsername } = usePostQueryStore();
  const { data: user } = isLoggedIn ? useGetUserById(loginId + "") : {};
  return (
    <Flex align="center" gap="5">
      <Button variant="outline" onClick={() => setUsername("")}>
        🌎 Latest Posts
      </Button>
      {isLoggedIn && user && (
        <>
          <Separator orientation="vertical" size="2" />
          <Button variant="outline" onClick={() => setUsername(user.username)}>
            My Posts
          </Button>
          <Separator orientation="vertical" size="2" />
          <Link to={`/new/${loginId}`}>
            <Button variant="outline" color="yellow">
              Make a Post 🚀
            </Button>
          </Link>
        </>
      )}
    </Flex>
  );
};

export default PostManage;
