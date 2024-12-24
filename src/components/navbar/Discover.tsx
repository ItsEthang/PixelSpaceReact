import { Button, DropdownMenu, TextField } from "@radix-ui/themes";
import { FaUserFriends } from "react-icons/fa";

const Discover = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" size="2">
          Discover <FaUserFriends />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size="2" variant="soft">
        <TextField.Root placeholder="Search username…"></TextField.Root>

        <DropdownMenu.Separator />
        <DropdownMenu.Item>User 1</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Discover;
