import { Button, Flex, Separator } from "@radix-ui/themes";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { Link } from "react-router-dom";
import useAuthUserId from "../../hooks/useAuthUserId";
import useGetUserById from "../../hooks/useGetUserById";
import usePostQueryStore from "./store";

const PostManage = () => {
  const isAuth = useIsAuthenticated();
  const userId = useAuthUserId();
  const { setUsername } = usePostQueryStore();
  const { data: user } = isAuth ? useGetUserById(userId) : {};
  return (
    <Flex align="center" gap="5">
      <Button variant="outline" onClick={() => setUsername("")}>
        🌎 Latest Posts
      </Button>
      {isAuth && user && (
        <>
          <Separator orientation="vertical" size="2" />
          <Button variant="outline" onClick={() => setUsername(user.username)}>
            My Posts
          </Button>
          <Separator orientation="vertical" size="2" />
          <Link to={`/new/${userId}`}>
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
