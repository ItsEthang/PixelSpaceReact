import { Flex } from "@radix-ui/themes";
import Login from "../buttons/Login";
import Logout from "../buttons/Logout";
import useUserStore from "../user/store";
import DropDownNav from "./DropDownNav";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserAvatar from "./UserAvatar";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout, userId } = useUserStore();
  const { isAuth, authUser } = useContext(AuthContext);
  console.log("Auth Status " + isAuth);
  return (
    <nav className="border-b-2 mb-5 p-4 md:px-8 bg-zinc-800">
      <Flex justify="between" align="center">
        <Logo />
        {isLoggedIn && (
          <>
            <UserAvatar userId={userId + ""} />
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
