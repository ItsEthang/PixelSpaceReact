import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorCallout from "../../components/ErrorCallout";
import ErrorMessage from "../../components/ErrorMessage";
import InputBox from "../../components/InputBox";
import { AuthInput } from "../../interfaces/AuthInput";
import apiClient from "../../services/api-client";

const UserRegistration = () => {
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInput>();
  const onSubmit: SubmitHandler<AuthInput> = async (data) => {
    try {
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
      <Box
        className="bg-zinc-700 rounded-xl p-8"
        width={{ initial: "280px", sm: "600px", md: "800px" }}
      >
        {error && <ErrorCallout error={error} />}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <Flex align="center" justify="center" direction="column" gap="5">
            <Text className="font-extrabold text-xl">Create New Account</Text>
            <InputBox>
              <TextField.Root
                defaultValue=""
                placeholder="Enter your username"
                {...register("username", { required: true })}
              ></TextField.Root>
              <ErrorMessage>{errors.username?.message}</ErrorMessage>
            </InputBox>
            <InputBox>
              <TextField.Root
                defaultValue=""
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              ></TextField.Root>
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </InputBox>
            <Button
              size="2"
              type="submit"
              loading={isSubmitting}
              variant="soft"
            >
              Register
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default UserRegistration;
