import { Container } from "@radix-ui/themes";
import HomeGrid from "./pages/HomeGrid";
import Navbar from "./components/navbar/Navbar";
import UserRegistration from "./pages/user/UserRegister";
import UserLogin from "./pages/user/UserLogin";
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
