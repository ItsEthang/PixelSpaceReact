import {
  Button,
  Card,
  DropdownMenu,
  Flex,
  IconButton,
  TextField,
} from "@radix-ui/themes";
import { useRef } from "react";
import { FaUserFriends } from "react-icons/fa";
import useUserStore from "../user/store";
import useGetUsers from "../../hooks/useGetUsers";
import PostUser from "../post/PostUser";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";

const Discover = () => {
  const { username, setUsername } = useUserStore();
  const { data: users } = useGetUsers();
  const usernameRef = useRef<HTMLInputElement>(null);
  const onClear = () => {
    if (usernameRef.current) {
      usernameRef.current.value = "";
    }
    setUsername("");
  };
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" size="2">
          Discover <FaUserFriends />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size="2" variant="soft">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (usernameRef.current) {
              setUsername(usernameRef.current.value);
            }
          }}
        >
          <TextField.Root placeholder="Search username…" ref={usernameRef}>
            <TextField.Slot>
              <FaMagnifyingGlass height="16" width="16" />
            </TextField.Slot>
            <TextField.Slot>
              <IconButton
                size="1"
                variant="ghost"
                color="red"
                onClick={onClear}
                type="reset"
              >
                <MdOutlineCancel />
              </IconButton>
            </TextField.Slot>
          </TextField.Root>
        </form>
        <DropdownMenu.Separator />
        <Flex direction="column" align="center" gap="2">
          {username &&
            users?.map((user) => (
              <Card className="w-[240px] md:w-[285px]">
                <PostUser user={user} />
              </Card>
            ))}
        </Flex>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Discover;
