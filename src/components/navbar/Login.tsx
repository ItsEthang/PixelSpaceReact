import { Button, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Link to="/login">
      <Button>
        <Text weight="bold">Login</Text>
      </Button>
    </Link>
  );
};

export default Login;
