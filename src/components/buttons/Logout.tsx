import { Button, Text } from "@radix-ui/themes";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Logout = () => {
  const signOut = useSignOut();
  const handleClick = () => {
    signOut();
    window.location.reload();
  };
  return (
    <Link to="/">
      <Button onClick={handleClick} variant="surface">
        <Text weight="bold">Logout</Text>
        <RiLogoutBoxLine />
      </Button>
    </Link>
  );
};

export default Logout;
