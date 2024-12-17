import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const Logout = ({ logout }: { logout: () => void }) => {
  return (
    <Link to="/">
      <Button onClick={logout}>Logout</Button>
    </Link>
  );
};

export default Logout;
