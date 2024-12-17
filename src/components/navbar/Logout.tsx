import { Button, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const Logout = ({ logout }: { logout: () => void }) => {
  return (
    <Link to="/">
      <Button onClick={logout}>
        <Text weight="bold">Logout</Text>
      </Button>
    </Link>
  );
};

export default Logout;
