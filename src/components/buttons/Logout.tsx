import { Button, Text } from "@radix-ui/themes";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Logout = ({ logout }: { logout: () => void }) => {
  const signOut = useSignOut();
  return (
    <Link to="/">
      <Button onClick={() => signOut()} variant="surface">
        <Text weight="bold">Logout</Text>
        <RiLogoutBoxLine />
      </Button>
    </Link>
  );
};

export default Logout;
