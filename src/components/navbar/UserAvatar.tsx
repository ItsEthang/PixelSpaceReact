import { Avatar } from "@radix-ui/themes";
import useGetUserById from "../../hooks/useGetUserById";

const UserAvatar = ({ userId }: { userId: string }) => {
  const { data: user } = useGetUserById(userId);
  return (
    <Avatar
      src={user?.profileImg}
      fallback={user ? user.name.charAt(0) : ""}
      size="2"
    />
  );
};

export default UserAvatar;
