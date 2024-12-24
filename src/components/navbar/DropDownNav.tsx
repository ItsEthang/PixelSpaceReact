import { Button, DropdownMenu } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import useUserStore from "../user/store";
import Logout from "../buttons/Logout";
import Login from "../buttons/Login";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useAuthUserId from "../../hooks/useAuthUserId";

const DropDownNav = () => {
  const { isLoggedIn } = useUserStore();
  const isAuth = useIsAuthenticated();
  const userId = useAuthUserId();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          Menu
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content variant="soft">
        <DropdownMenu.Item>
          <Link to={`/profile/${userId}`}>Profile</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Link to={`/followers/${userId}`}>Followers</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Link to={`/followings/${userId}`}>Followings</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>{isAuth ? <Logout /> : <Login />}</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default DropDownNav;
