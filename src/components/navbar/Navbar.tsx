import { Flex } from "@radix-ui/themes";
import useUserStore from "../user/store";
import Login from "./Login";
import Logo from "./Logo";
import Logout from "./Logout";
import Navigation from "./Navigation";

const Navbar = () => {
  const { isLoggedIn, logout } = useUserStore();

  return (
    <nav className="border-b-2 mb-5 py-4 px-8 bg-zinc-800">
      <Flex justify="between" align="center">
        <Flex gap="5">
          <Logo />
          {isLoggedIn && <Navigation />}
        </Flex>
        {isLoggedIn ? <Logout logout={logout} /> : <Login />}
      </Flex>
    </nav>
  );
};

export default Navbar;
