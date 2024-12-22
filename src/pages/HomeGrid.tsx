import { useState } from "react";
import FollowingList from "../components/follow/FollowingList";
import AllPost from "../components/post/AllPost";
import useUserStore from "../components/user/store";

const HomeGrid = () => {
  const { isLoggedIn } = useUserStore();
  const [userId, setUserId] = useState<string | undefined>(undefined);
  return (
    <div className="grid grid-cols-5">
      <div className={`col-span-5 ${isLoggedIn && "lg:col-span-4"} m-4`}>
        <AllPost userId={userId} />
      </div>
      {isLoggedIn && (
        <div className="hidden col-span-1 lg:flex">
          <FollowingList handleClick={setUserId} />
        </div>
      )}
    </div>
  );
};

export default HomeGrid;
