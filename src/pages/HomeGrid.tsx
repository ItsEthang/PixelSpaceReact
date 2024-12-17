import { Separator } from "@radix-ui/themes";
import FollowingList from "../components/FollowingList";
import AllPost from "../components/post/AllPost";
import useUserStore from "../components/user/store";

const HomeGrid = () => {
  const { isLoggedIn } = useUserStore();
  return (
    <div className="grid grid-cols-5">
      <AllPost />

      {isLoggedIn && (
        <div className="hidden col-span-1 lg:flex">
          <FollowingList />
        </div>
      )}
    </div>
  );
};

export default HomeGrid;
