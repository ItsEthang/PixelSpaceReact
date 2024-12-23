import React from "react";
import { AuthUser } from "../interfaces/Entity";

interface AuthContext {
  isAuth: boolean;
  setAuth: (status: boolean) => void;
  authUser: AuthUser | null;
  setAuthUser: (user: AuthUser | null) => void;
}

const AuthContext = React.createContext<AuthContext>({} as AuthContext);

export default AuthContext;
