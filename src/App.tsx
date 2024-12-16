import { Container } from "@radix-ui/themes";
import HomeGrid from "./components/HomeGrid";
import Navbar from "./components/Navbar";
import UserRegistration from "./components/user/UserRegister";
import UserLogin from "./components/user/UserLogin";
import axios from "axios";

axios.interceptors.response.use((response) => {
  console.log(response);
  return response;
});

function App() {
  return (
    <>
      <Navbar />

      <Container>
        {/* <UserRegistration />
        <UserLogin /> */}
        <HomeGrid />
      </Container>
    </>
  );
}

export default App;
