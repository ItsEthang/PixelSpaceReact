import { TabNav } from "@radix-ui/themes";
import { Link, useLocation } from "react-router-dom";
import useUserStore from "../user/store";

const Navigation = () => {
  const { userId } = useUserStore();
  const location = useLocation();

  return (
    <TabNav.Root highContrast justify="start">
      <TabNav.Link active={location.pathname === "/mypost"}>
        <Link to="/mypost">My Posts</Link>
      </TabNav.Link>
      <TabNav.Link active={location.pathname === `/profile/${userId}`}>
        <Link to={`/profile/${userId}`}>Profile</Link>
      </TabNav.Link>
      <TabNav.Link active={location.pathname === `/followers/${userId}`}>
        <Link to={`/followers/${userId}`}>Followers</Link>
      </TabNav.Link>
      <TabNav.Link active={location.pathname === `/followings/${userId}`}>
        <Link to={`/followings/${userId}`}>Followings</Link>
      </TabNav.Link>
    </TabNav.Root>
  );
};

export default Navigation;
