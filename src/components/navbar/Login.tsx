import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Link to="/login">
      <Button>Login</Button>
    </Link>
  );
};

export default Login;
