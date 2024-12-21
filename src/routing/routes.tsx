import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import HomeGrid from "../pages/HomeGrid";
import UserLogin from "../pages/user/UserLogin";
import UserRegistration from "../pages/user/UserRegister";
import ProfilePage from "../pages/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage";
import MyPostPage from "../pages/post/MyPostPage";
import NewPostPage from "../pages/post/NewPostPage";
import UserFollowing from "../pages/user/UserFollowings";

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
      { path: "mypost/new/:userId", element: <NewPostPage /> },
      { path: "followings/:userId", element: <UserFollowing /> },
    ],
  },
]);

export default router;
