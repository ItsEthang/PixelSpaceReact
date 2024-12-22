import { Button, Text } from "@radix-ui/themes";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Logout = ({ logout }: { logout: () => void }) => {
  return (
    <Link to="/">
      <Button onClick={logout} variant="surface">
        <Text weight="bold">Logout</Text>
        <RiLogoutBoxLine />
      </Button>
    </Link>
  );
};

export default Logout;
