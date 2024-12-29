import { Flex, Heading, Separator } from "@radix-ui/themes";
import useGetFollowing from "../../hooks/useGetFollowing";
import FollowingCard from "./FollowingCard";
import useUserStore from "../user/store";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { AuthUser } from "../../interfaces/Entity";

const FollowingList = () => {
  const { isLoggedIn: _isLoggedIn } = useUserStore();
  const authUser = useAuthUser<AuthUser>();
  const uid = authUser ? authUser.uid + "" : "";

  const { data: followings, error } = useGetFollowing(uid);
  if (error) return null;
  return (
    <>
      <Separator orientation="vertical" size="4" className="hidden lg:block" />

      <Flex direction="column" align="center" className="w-full px-3" gap="4">
        <Heading as="h3" mt="4">
          Your Followings
        </Heading>
        <Separator orientation="horizontal" size="4" />

        <ul className="list-none">
          {followings?.map((following) => (
            <FollowingCard following={following} key={following.username} />
          ))}
        </ul>
      </Flex>
    </>
  );
};

export default FollowingList;
