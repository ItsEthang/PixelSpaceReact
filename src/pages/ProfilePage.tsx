import { Avatar, Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import useGetUserById from "../hooks/useGetUserById";
import { useParams } from "react-router-dom";
import FollowButtons from "../components/FollowButtons";

const ProfilePage = () => {
  const params = useParams();
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
    <Flex direction="column" align="center" gap="5">
      <Avatar
        size="8"
        src={profile?.profileImg}
        fallback={profile?.name?.charAt(0) || "X"}
        radius="full"
      />
      <FollowButtons />
      <Box>
        <Heading as="h2" size="8">
          {profile?.name}
        </Heading>
        <Text as="div" color="gray" weight="light" size="1">
          @{profile?.username}
        </Text>
      </Box>
      <Box>
        <Text as="p">{profile?.bio}</Text>
      </Box>
    </Flex>
  );
};

export default ProfilePage;
