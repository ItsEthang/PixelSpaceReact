import { Box, Button, Flex, Popover, TextArea } from "@radix-ui/themes";
import { MdChat } from "react-icons/md";

const CommentBtn = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="surface">
          <MdChat width="16" height="16" />
          Comment
        </Button>
      </Popover.Trigger>
      <Popover.Content width={{ initial: "200px", sm: "360px" }}>
        <Box flexGrow="1">
          <TextArea placeholder="Write a comment…" style={{ height: 80 }} />

          <Flex justify="end" mt="2">
            <Popover.Close>
              <Button size="1" variant="surface">
                Comment
              </Button>
            </Popover.Close>
          </Flex>
        </Box>
      </Popover.Content>
    </Popover.Root>
  );
};

export default CommentBtn;
