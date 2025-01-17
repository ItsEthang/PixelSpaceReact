import { Avatar, Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import EditProfileBtn from "../components/buttons/EditProfileBtn";
import FollowButtons from "../components/buttons/FollowButtons";
import useAuthUserId from "../hooks/useAuthUserId";
import useGetUserById from "../hooks/useGetUserById";

const ProfilePage = () => {
  const params = useParams();
  const { data: profile, error } = useGetUserById(params.requestId!);
  const isAuth = useIsAuthenticated();
  const userId = useAuthUserId();

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
  if (!profile) {
    return (
      <>
        <Heading>Sorry :(</Heading>
        <Text>
          The profile you're looking for cannot be shown at this time.
        </Text>
      </>
    );
  }
  return (
    <Container my="8">
      <Flex direction="column" align="center" gap="5">
        <Avatar
          size="8"
          src={profile.profileImg}
          fallback={profile.name.charAt(0) || "X"}
          radius="full"
        />
        <FollowButtons userId={+params.requestId!} />
        <Box>
          <Flex align="center" gap="5">
            <Heading as="h2" size="8">
              {profile?.name}
            </Heading>
            {isAuth && userId === params.requestId && (
              <EditProfileBtn userId={userId} />
            )}
          </Flex>
          <Text as="div" color="gray" weight="light" size="1">
            @{profile.username}
          </Text>
        </Box>
        <Text
          className="max-h-96 w-full overflow-scroll border-solid border-2 border-slate-500 p-5 prose dark:prose-invert"
          as="div"
        >
          <ReactMarkdown>{profile.bio}</ReactMarkdown>
        </Text>
      </Flex>
    </Container>
  );
};

export default ProfilePage;
