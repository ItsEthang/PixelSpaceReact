import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthInput } from "../../interfaces/AuthInput";
import InputBox from "../../components/InputBox";
import apiClient from "../../services/api-client";
import ErrorCallout from "../../components/ErrorCallout";
import ErrorMessage from "../../components/ErrorMessage";
import useUserStore from "../../components/user/store";
import { Link } from "react-router-dom";

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
      <Box
        className="bg-zinc-700 rounded-xl p-8"
        width={{ initial: "280px", sm: "600px", md: "800px" }}
      >
        {error && <ErrorCallout error={error} />}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <Flex align="center" justify="center" direction="column" gap="5">
            <Text className="font-extrabold text-xl">
              Login to Your Account
            </Text>
            <InputBox>
              <TextField.Root
                size="3"
                defaultValue=""
                placeholder="Enter your username"
                {...register("username", { required: true })}
              ></TextField.Root>
              <ErrorMessage>{errors.username?.message}</ErrorMessage>
            </InputBox>
            <InputBox>
              <TextField.Root
                size="3"
                defaultValue=""
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              ></TextField.Root>
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </InputBox>
            <Link
              to="/register"
              className="underline-offset-3 text-fuchsia-400 hover:underline hover:text-white"
            >
              No account? Click here!
            </Link>
            <Button
              size="2"
              type="submit"
              loading={isSubmitting}
              variant="soft"
            >
              Login
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default UserLogin;
