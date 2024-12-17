import FollowingList from "../components/FollowingList";
import AllPost from "../components/post/AllPost";
import useUserStore from "../components/user/store";

const HomeGrid = () => {
  const { isLoggedIn } = useUserStore();
  return (
    <div className="grid grid-cols-4 gap-4">
      {isLoggedIn ? (
        <div className="hidden col-span-1 lg:flex ">
          <FollowingList />
        </div>
      ) : (
        <div className="hidden col-span-1 lg:flex ">
          Log in to see your followings
        </div>
      )}
      <AllPost />
    </div>
  );
};

export default HomeGrid;
