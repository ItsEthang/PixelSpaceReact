import { Box, Button, Callout, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";
import apiClient from "../../services/api-client";
import { BsInfoCircle } from "react-icons/bs";

interface Input {
  username: string;
  password: string;
}
const UserRegistration = () => {
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = async (data) => {
    try {
      console.log(data);
      setSubmitting(true);
      await apiClient.post("/user", data);
    } catch (error) {
      setError("Due to an error. Your registration failed to complete.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Flex justify="center" mt="9">
      <Box className="bg-zinc-700 rounded-xl p-10" width="fit-content">
        {error && (
          <Callout.Root color="red" className="mb-5">
            <Callout.Icon>
              <BsInfoCircle />
            </Callout.Icon>
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        )}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <Flex align="center" justify="center" direction="column" gap="5">
            <Text className="font-extrabold text-xl">Create New Account</Text>
            <Box maxWidth="800px" width={{ initial: "200px", sm: "600px" }}>
              <TextField.Root
                defaultValue=""
                placeholder="Enter your username"
                {...register("username", { required: true })}
              ></TextField.Root>
              <ErrorMessage>{errors.username?.message}</ErrorMessage>
            </Box>
            <Box maxWidth="800px" width={{ initial: "200px", sm: "600px" }}>
              <TextField.Root
                defaultValue=""
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              ></TextField.Root>
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </Box>
            <Button size="2" type="submit" loading={isSubmitting}>
              Register
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default UserRegistration;
