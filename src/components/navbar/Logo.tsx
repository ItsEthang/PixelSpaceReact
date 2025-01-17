import { Avatar, Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import logo from "../../assets/pixel-space-icon.webp";

const Logo = () => {
  return (
    <Link to="/">
      <Flex align="center" className="mr-5">
        <Avatar src={logo} fallback="PS" className="mr-2" />
        <Text className="font-bold text-lg hidden md:block">Rock.IT</Text>
      </Flex>
    </Link>
  );
};

export default Logo;
