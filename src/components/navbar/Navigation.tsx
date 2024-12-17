import { Flex, Separator } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import LinkText from "../LinkText";

const Navigation = () => {
  return (
    <Flex gap="3" align="center">
      <Link to="/">
        <LinkText>My Posts</LinkText>
      </Link>
      <Separator orientation="vertical" />
      <Link to="/">
        <LinkText>Profile</LinkText>
      </Link>
      <Separator orientation="vertical" />
      <Link to="/">
        <LinkText>Followers</LinkText>
      </Link>
      <Separator orientation="vertical" />
      <Link to="/">
        <LinkText>Followings</LinkText>
      </Link>
    </Flex>
  );
};

export default Navigation;
