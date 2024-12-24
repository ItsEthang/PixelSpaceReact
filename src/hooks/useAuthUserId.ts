import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { AuthUser } from "../interfaces/Entity";

const useAuthUserId = (): string => {
  const authUser = useAuthUser<AuthUser>();

  const userId = authUser ? authUser.uid + "" : "";
  return userId;
};

export default useAuthUserId;
