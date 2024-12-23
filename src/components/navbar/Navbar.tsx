import { Avatar, Flex, Text } from "@radix-ui/themes";
import useUserStore from "../user/store";
import Login from "../buttons/Login";
import Logo from "./Logo";
import Logout from "../buttons/Logout";
import Navigation from "./Navigation";
import DropDownNav from "./DropDownNav";
import useGetUserById from "../../hooks/useGetUserById";

const Navbar = () => {
  const { isLoggedIn, logout, userId } = useUserStore();
  const { data: user } = isLoggedIn ? useGetUserById(userId + "") : {};

  return (
    <nav className="border-b-2 mb-5 p-4 md:px-8 bg-zinc-800">
      <Flex justify="between" align="center">
        <Logo />
        {isLoggedIn && (
          <>
            <Avatar
              src={user?.profileImg}
              fallback={user ? user.name.charAt(0) : ""}
              size="2"
            />
          </>
        )}
        <div
          className={`hidden md:flex w-5/6 ${
            isLoggedIn ? "justify-between" : "justify-end"
          } items-center`}
        >
          {isLoggedIn && <Navigation />}

          {isLoggedIn ? <Logout logout={logout} /> : <Login />}
        </div>
        <div className="block md:hidden">
          <DropDownNav />
        </div>
      </Flex>
    </nav>
  );
};

export default Navbar;
