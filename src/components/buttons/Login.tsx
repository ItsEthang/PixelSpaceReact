import { Button, Text } from "@radix-ui/themes";
import { RiLoginBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Link to="/login">
      <Button variant="surface">
        <Text weight="bold">Login</Text>
        <RiLoginBoxLine />
      </Button>
    </Link>
  );
};

export default Login;
