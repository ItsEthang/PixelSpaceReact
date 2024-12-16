import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthInput } from "../../interfaces/AuthInput";
import apiClient from "../../services/api-client";
import ErrorCallout from "../ErrorCallout";
import ErrorMessage from "../ErrorMessage";
import useUserStore from "./store";

const UserLogin = () => {
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const { login } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInput>();
  const onSubmit: SubmitHandler<AuthInput> = async (data) => {
    try {
      setSubmitting(true);
      const response = await apiClient.post("/user/login", data);
      login(response.headers["userid"]);
    } catch (error) {
      setError("Due to an error. You cannot login at this time");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Flex justify="center" mt="9">
      <Box className="bg-zinc-700 rounded-xl p-8" width="fit-content">
        {error && <ErrorCallout error={error} />}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <Flex align="center" justify="center" direction="column" gap="5">
            <Text className="font-extrabold text-xl">
              Login to Your Account
            </Text>
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
              Login
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default UserLogin;
