import FollowingList from "../components/follow/FollowingList";
import AllPost from "../components/post/AllPost";
import useUserStore from "../components/user/store";

const HomeGrid = () => {
  const { isLoggedIn } = useUserStore();
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-5 lg:col-span-4 m-4">
        <AllPost />
      </div>
      {isLoggedIn && (
        <div className="hidden col-span-1 lg:flex">
          <FollowingList />
        </div>
      )}
    </div>
  );
};

export default HomeGrid;
