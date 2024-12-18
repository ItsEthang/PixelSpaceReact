import { Avatar, Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import useGetUserById from "../hooks/useGetUserById";
import { useParams } from "react-router-dom";
import FollowButtons from "../components/buttons/FollowButtons";
import EditProfileBtn from "../components/buttons/EditProfileBtn";
import useUserStore from "../components/user/store";

const ProfilePage = () => {
  const params = useParams();
  const { isLoggedIn, userId: loggedUserId } = useUserStore();
  const { data: profile, error } = useGetUserById(params.requestId!);

  if (error) {
    return (
      <>
        <Heading>Error: {error.message}</Heading>
        <Text>
          The profile you're looking for cannot be shown at this time.
        </Text>
      </>
    );
  }
  return (
    <Container mt="8">
      <Flex direction="column" align="center" gap="5">
        <Avatar
          size="8"
          src={profile?.profileImg}
          fallback={profile?.name?.charAt(0) || "X"}
          radius="full"
        />
        <FollowButtons />
        <Box>
          <Flex align="center" gap="5">
            <Heading as="h2" size="8">
              {profile?.name}
            </Heading>
            {isLoggedIn && loggedUserId + "" === params.requestId && (
              <EditProfileBtn userId={params.requestId!} />
            )}
          </Flex>
          <Text as="div" color="gray" weight="light" size="1">
            @{profile?.username}
          </Text>
        </Box>
        <Text
          className="max-h-96 w-full overflow-scroll border-double border-2 border-white p-5"
          as="p"
        >
          {profile?.bio}
        </Text>
      </Flex>
    </Container>
  );
};

export default ProfilePage;
