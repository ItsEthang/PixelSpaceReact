import { Flex } from "@radix-ui/themes";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { AuthUser } from "../../interfaces/Entity";
import Login from "../buttons/Login";
import Logout from "../buttons/Logout";
import useUserStore from "../user/store";
import DropDownNav from "./DropDownNav";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserAvatar from "./UserAvatar";

const Navbar = () => {
  const { isLoggedIn, logout } = useUserStore();
  const isAuth = useIsAuthenticated();
  const authUser = useAuthUser<AuthUser>();
  const userId = authUser ? authUser.uid + "" : "";
  return (
    <nav className="border-b-2 mb-5 p-4 md:px-8 bg-zinc-800">
      <Flex justify="between" align="center">
        <Logo />
        {isAuth && (
          <>
            <UserAvatar userId={userId} />
          </>
        )}
        <div
          className={`hidden md:flex w-5/6 ${
            isAuth ? "justify-between" : "justify-end"
          } items-center`}
        >
          {isAuth && <Navigation />}

          {isAuth ? <Logout logout={logout} /> : <Login />}
        </div>
        <div className="block md:hidden">
          <DropDownNav />
        </div>
      </Flex>
    </nav>
  );
};

export default Navbar;
