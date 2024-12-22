import { Button, Flex, IconButton, Text, TextField } from "@radix-ui/themes";
import { useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import usePostQueryStore from "./store";
import { MdClear } from "react-icons/md";

const SearchField = () => {
  const { postQuery, setTitle } = usePostQueryStore();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Flex align="center" gap="4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) {
            setTitle(ref.current.value);
          }
        }}
      >
        <TextField.Root placeholder="Search by title…" ref={ref}>
          <TextField.Slot>
            <FaMagnifyingGlass height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
      </form>
      {postQuery.title && (
        <>
          <Text as="span" color="gray" size="1">
            Title:{" " + postQuery.title}
          </Text>
          <Button
            onClick={() => setTitle("")}
            size="1"
            variant="ghost"
            color="red"
          >
            <MdClear />
          </Button>
        </>
      )}
    </Flex>
  );
};

export default SearchField;
