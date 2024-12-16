import { Container } from "@radix-ui/themes";
import HomeGrid from "./components/HomeGrid";
import Navbar from "./components/Navbar";
import UserRegistration from "./components/user/UserRegister";
import UserLogin from "./components/user/UserLogin";

function App() {
  return (
    <>
      <Navbar />
      {/* <HomeGrid /> */}
      <Container>
        <UserRegistration />
        <UserLogin />
      </Container>
    </>
  );
}

export default App;
