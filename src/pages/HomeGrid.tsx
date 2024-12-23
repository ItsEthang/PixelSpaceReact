import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import FollowingList from "../components/follow/FollowingList";
import AllPost from "../components/post/AllPost";
import useUserStore from "../components/user/store";

const HomeGrid = () => {
  const { isLoggedIn } = useUserStore();
  const isAuth = useIsAuthenticated();
  return (
    <div className="grid grid-cols-5">
      <div className={`col-span-5 ${isAuth && "lg:col-span-4"} m-4`}>
        <AllPost />
      </div>
      {isAuth && (
        <div className="hidden col-span-1 lg:flex">
          <FollowingList />
        </div>
      )}
    </div>
  );
};

export default HomeGrid;
