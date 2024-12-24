import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ErrorCallout from "../../components/ErrorCallout";
import ErrorMessage from "../../components/ErrorMessage";
import InputBox from "../../components/InputBox";
import useUserStore from "../../components/user/store";
import { AuthInput } from "../../interfaces/AuthInput";
import apiClient from "../../services/api-client";
import LinkText from "../../components/LinkText";
import useSignIn from "react-auth-kit/hooks/useSignIn";

interface TokenResponse {
  token: string;
}

const UserLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const signIn = useSignIn();
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
      const response = await apiClient.post<TokenResponse>("/user/login", data);
      login(response.headers["userid"]);
      signIn({
        auth: {
          token: response.data.token,
          type: "Bearer",
        },
        userState: {
          username: data.username,
          uid: response.headers["userid"],
        },
      });
      navigate("/");
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
            <Link to="/register">
              <LinkText>No account? Click here!</LinkText>
            </Link>
            <Button
              size="3"
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
