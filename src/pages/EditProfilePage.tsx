import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import ErrorCallout from "../components/ErrorCallout";
import ErrorMessage from "../components/ErrorMessage";
import InputBox from "../components/InputBox";
import { ProfileInput } from "../interfaces/ProfileInput";
import apiClient from "../services/api-client";
import "easymde/dist/easymde.min.css";

const EditProfilePage = () => {
  const params = useParams();
  const userId = params.requestId!;
  const nagivate = useNavigate();
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileInput>();

  const onSubmit: SubmitHandler<ProfileInput> = async (data) => {
    try {
      setSubmitting(true);
      await apiClient.patch("/user", data, {
        headers: {
          userId: userId,
        },
      });
      nagivate(`/profile/${userId}`);
    } catch (error) {
      setError("Due to an error. Your profile update failed to complete.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Flex justify="center" my="9">
      <Box
        className="bg-zinc-700 rounded-xl p-8"
        width={{ initial: "300px", sm: "600px", md: "800px" }}
      >
        {error && <ErrorCallout error={error} />}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <Flex align="center" justify="center" direction="column" gap="5">
            <Text className="font-extrabold text-xl">Update Your Profile</Text>

            <div>
              <Box>
                <Text as="label">Display Name</Text>

                <TextField.Root
                  placeholder="Enter your new name"
                  {...register("name")}
                ></TextField.Root>
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              </Box>
              <Box>
                <Text as="label">Profile Image URL</Text>
                <TextField.Root
                  placeholder="Enter profile image url"
                  {...register("profileImg")}
                ></TextField.Root>
                <ErrorMessage>{errors.profileImg?.message}</ErrorMessage>
              </Box>
              <Box>
                <Text as="label">Email</Text>
                <TextField.Root
                  defaultValue=""
                  placeholder="Enter your new email"
                  {...register("email")}
                ></TextField.Root>
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </Box>
              <Box>
                <Text as="label">Bio</Text>
                <Controller
                  name="bio"
                  control={control}
                  render={({ field }) => <SimpleMDE {...field} />}
                />
                <ErrorMessage>{errors.bio?.message}</ErrorMessage>
              </Box>
            </div>

            <Button
              size="3"
              type="submit"
              loading={isSubmitting}
              variant="surface"
            >
              Update Profile
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default EditProfilePage;
