import {
  Box,
  Button,
  Flex,
  Separator,
  Text,
  TextField,
} from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import ErrorCallout from "../../components/ErrorCallout";
import ErrorMessage from "../../components/ErrorMessage";
import { PostInput } from "../../interfaces/PostInput";
import apiClient from "../../services/api-client";
import { useQueryClient } from "@tanstack/react-query";

const NewPostPage = () => {
  const params = useParams();
  const userId = params.userId!;
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const queryClient = useQueryClient();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PostInput>();
  const onSubmit: SubmitHandler<PostInput> = async (data) => {
    try {
      setSubmitting(true);
      const response = await apiClient.post(
        "/user/post",
        {
          post: {
            title: data.title,
            content: data.content,
          },
        },
        {
          headers: {
            userId,
          },
        }
      );
      queryClient.invalidateQueries(["user", `${userId}`, "posts"]);
      navigate("/mypost");
    } catch (error) {
      setError("Due to an error. You launch a post at this time");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Flex justify="center" mt="9">
      <Box
        className="bg-zinc-700 rounded-xl p-8"
        width={{ initial: "280px", sm: "600px", md: "800px" }}
      >
        {error && <ErrorCallout error={error} />}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <Flex align="center" justify="center" direction="column" gap="5">
            <Text className="font-extrabold text-xl">Launch a New Post</Text>
            <Box className="w-4/5">
              <Text as="label">Title</Text>

              <TextField.Root
                placeholder="Enter post title"
                {...register("title")}
              ></TextField.Root>
              <ErrorMessage>{errors.title?.message}</ErrorMessage>
            </Box>
            <Separator orientation="horizontal" size="4" />
            <Box className="w-4/5">
              <Text as="label">Content</Text>
              <Controller
                name="content"
                control={control}
                render={({ field }) => <SimpleMDE {...field} />}
              />
              <ErrorMessage>{errors.content?.message}</ErrorMessage>
            </Box>
            <Button
              size="3"
              type="submit"
              loading={isSubmitting}
              variant="soft"
            >
              Launch!
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default NewPostPage;
