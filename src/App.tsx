import { Container } from "@radix-ui/themes";
import HomeGrid from "./components/HomeGrid";
import Navbar from "./components/Navbar";
import UserRegistration from "./components/registration/UserRegistration";

function App() {
  return (
    <>
      <Navbar />
      {/* <HomeGrid /> */}
      <Container>
        <UserRegistration />
      </Container>
    </>
  );
}

export default App;
