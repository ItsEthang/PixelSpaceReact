import { Box, Button, Flex, Separator } from "@radix-ui/themes";

const FollowButtons = () => {
  return (
    <Flex gap="5">
      <Button variant="outline" color="yellow">
        Followers
      </Button>
      <Separator orientation="vertical" size="2" color="yellow" />
      <Button variant="outline" color="yellow">
        Followings
      </Button>
    </Flex>
  );
};

export default FollowButtons;
