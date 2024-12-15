import { Avatar, Button, Container, Flex, Text } from "@radix-ui/themes";
import logo from "../assets/pixel-space-icon.webp";

const Navbar = () => {
  return (
    <nav className="border-b-2 mb-5 py-4 px-3 bg-zinc-800">
      <Container>
        <Flex justify="between" align="center">
          <Flex align="center">
            <Avatar src={logo} fallback="PS" className="mr-2" />
            <Text className="font-bold text-lg">Pixel Space</Text>
          </Flex>
          <Button>Login</Button>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
