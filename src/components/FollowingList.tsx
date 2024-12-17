import useGetFollowing from "../hooks/useGetFollowing";
import useUserStore from "./user/store";

const FollowingList = () => {
  const { userId } = useUserStore();
  const { data: followings, error } = useGetFollowing(userId!);
  if (error) return null;
  return (
    <ul>
      {followings?.map((following) => (
        <li key={following.username}>{following.name}</li>
      ))}
    </ul>
  );
};

export default FollowingList;
