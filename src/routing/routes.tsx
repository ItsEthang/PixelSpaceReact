import { createBrowserRouter } from "react-router-dom";
import EditProfilePage from "../pages/EditProfilePage";
import ErrorPage from "../pages/ErrorPage";
import HomeGrid from "../pages/HomeGrid";
import Layout from "../pages/Layout";
import MyPostPage from "../pages/post/MyPostPage";
import NewPostPage from "../pages/post/NewPostPage";
import ProfilePage from "../pages/ProfilePage";
import UserFollower from "../pages/user/UserFollower";
import UserFollowing from "../pages/user/UserFollowings";
import UserLogin from "../pages/user/UserLogin";
import UserRegistration from "../pages/user/UserRegister";
import PostDetailPage from "../pages/post/PostDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomeGrid /> },
      { path: "login", element: <UserLogin /> },
      { path: "register", element: <UserRegistration /> },
      { path: "profile/:requestId", element: <ProfilePage /> },
      { path: "profile/:requestId/edit", element: <EditProfilePage /> },
      { path: "mypost", element: <MyPostPage /> },
      { path: "new/:userId", element: <NewPostPage /> },
      { path: "followings/:userId", element: <UserFollowing /> },
      { path: "followers/:userId", element: <UserFollower /> },
    ],
  },
  {
    path: "post",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ path: ":postId", element: <PostDetailPage /> }],
  },
]);

export default router;
