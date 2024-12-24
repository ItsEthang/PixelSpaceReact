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
import RequireAuth from "@auth-kit/react-router/RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomeGrid /> },
      { path: "login", element: <UserLogin /> },
      { path: "register", element: <UserRegistration /> },
      {
        path: "profile/:requestId",
        element: (
          <RequireAuth fallbackPath={"/login"}>
            <ProfilePage />
          </RequireAuth>
        ),
      },
      {
        path: "profile/:requestId/edit",
        element: <EditProfilePage />,
      },
      {
        path: "mypost",
        element: (
          <RequireAuth fallbackPath={"/login"}>
            <MyPostPage />
          </RequireAuth>
        ),
      },
      {
        path: "new/:userId",
        element: (
          <RequireAuth fallbackPath={"/login"}>
            <NewPostPage />
          </RequireAuth>
        ),
      },
      {
        path: "followings/:userId",
        element: (
          <RequireAuth fallbackPath={"/login"}>
            <UserFollowing />
          </RequireAuth>
        ),
      },
      {
        path: "followers/:userId",
        element: (
          <RequireAuth fallbackPath={"/login"}>
            <UserFollower />
          </RequireAuth>
        ),
      },
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
