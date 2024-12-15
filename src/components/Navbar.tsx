import { Container, Text } from "@radix-ui/themes";

const Navbar = () => {
  return (
    <nav className="border-b-2 mb-5 py-4 px-3">
      <Container>
        <Text className="font-bold">Pixel Space</Text>
      </Container>
    </nav>
  );
};

export default Navbar;
