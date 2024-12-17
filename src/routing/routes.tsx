import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import HomeGrid from "../pages/HomeGrid";
import UserLogin from "../pages/user/UserLogin";
import UserRegistration from "../pages/user/UserRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomeGrid /> },
      { path: "login", element: <UserLogin /> },
      { path: "register", element: <UserRegistration /> },
    ],
  },
]);

export default router;
