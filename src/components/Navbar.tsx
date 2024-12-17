import { Avatar, Button, Flex, Text } from "@radix-ui/themes";
import logo from "../assets/pixel-space-icon.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b-2 mb-5 py-4 px-8 bg-zinc-800">
      <Flex justify="between" align="center">
        <Link to="/">
          <Flex align="center">
            <Avatar src={logo} fallback="PS" className="mr-2" />
            <Text className="font-bold text-lg">Pixel Space</Text>
          </Flex>
        </Link>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </Flex>
    </nav>
  );
};

export default Navbar;
