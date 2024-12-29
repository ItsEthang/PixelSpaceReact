import { Box, Button, Flex, Popover, TextArea } from "@radix-ui/themes";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdChat } from "react-icons/md";
import ErrorCallout from "../ErrorCallout";
import ErrorMessage from "../ErrorMessage";
import useMakeComment from "../../hooks/useMakeComment";
import { useQueryClient } from "@tanstack/react-query";

interface CommentInput {
  content: string;
}
interface Props {
  postId: number;
  userId: string;
}
const CommentBtn = ({ postId, userId }: Props) => {
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentInput>();
  const onSubmit: SubmitHandler<CommentInput> = async (data) => {
    try {
      await useMakeComment(postId, userId, data.content);
      setSubmitting(true);
    } catch (error) {
      setError("Due to an error. You launch a comment at this time");
    } finally {
      queryClient.invalidateQueries([
        "posts",
        { postId: postId + "" },
        "comments",
      ]);
      setSubmitting(false);
    }
  };
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
          {error && <ErrorCallout error={error} />}
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextArea
              placeholder="Write a comment…"
              style={{ height: 80 }}
              {...register("content")}
            />
            <ErrorMessage>{errors.content?.message}</ErrorMessage>

            <Flex justify="end" mt="2">
              <Popover.Close>
                <Button
                  size="1"
                  variant="surface"
                  type="submit"
                  loading={isSubmitting}
                >
                  Comment
                </Button>
              </Popover.Close>
            </Flex>
          </form>
        </Box>
      </Popover.Content>
    </Popover.Root>
  );
};

export default CommentBtn;
