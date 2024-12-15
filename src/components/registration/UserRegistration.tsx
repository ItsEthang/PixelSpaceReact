import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";

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
  const onSubmit: SubmitHandler<Input> = (data) => {
    setSubmitting(true);
    console.log(data.username);
  };
  return (
    <Flex justify="center" mt="9">
      <Box className="bg-zinc-700 rounded-xl p-10" width="fit-content">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <Flex align="center" justify="center" direction="column" gap="5">
            <Text className="font-extrabold text-xl">Create New Account</Text>
            <Box maxWidth="800px" width={{ initial: "400px", sm: "600px" }}>
              <TextField.Root
                defaultValue=""
                placeholder="Enter your username"
                {...register("username", { required: true })}
              ></TextField.Root>
              <ErrorMessage>{errors.username?.message}</ErrorMessage>
            </Box>
            <Box maxWidth="800px" width={{ initial: "400px", sm: "600px" }}>
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
