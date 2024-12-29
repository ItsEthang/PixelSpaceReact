import { Flex } from "@radix-ui/themes";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import Login from "../buttons/Login";
import Logout from "../buttons/Logout";
import useUserStore from "../user/store";
import Discover from "./Discover";
import DropDownNav from "./DropDownNav";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Navbar = () => {
  const { isLoggedIn: _isLoggedIn } = useUserStore();
  const isAuth = useIsAuthenticated();
  return (
    <nav className="border-b-2 mb-5 p-4 md:px-8 bg-zinc-800">
      <Flex justify="between" align="center">
        <Logo />
        <Discover />

        <div
          className={`hidden md:flex w-1/2 lg:w-4/6 ${
            isAuth ? "justify-between" : "justify-end"
          } items-center`}
        >
          {isAuth && <Navigation />}

          {isAuth ? <Logout /> : <Login />}
        </div>
        <div className="block md:hidden">
          <DropDownNav />
        </div>
      </Flex>
    </nav>
  );
};

export default Navbar;
