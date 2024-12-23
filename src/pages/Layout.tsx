import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { AuthUser } from "../interfaces/Entity";
import AuthContext from "../context/AuthContext";

const Layout = () => {
  const [isAuth, setIsAuth] = useState<boolean>(useIsAuthenticated());
  const [authUser, setAuthUser] = useState<AuthUser | null>(
    useAuthUser<AuthUser>()
  );
  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        setAuth: setIsAuth,
        authUser: authUser,
        setAuthUser: setAuthUser,
      }}
    >
      <Navbar />
      <Outlet />
    </AuthContext.Provider>
  );
};

export default Layout;
