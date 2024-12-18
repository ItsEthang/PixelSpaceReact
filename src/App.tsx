import { Container } from "@radix-ui/themes";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import HomeGrid from "./pages/HomeGrid";

axios.interceptors.response.use((response) => {
  console.log(response);
  return response;
});

function App() {
  return (
    <>
      <Navbar />

      <Container>
        <HomeGrid />
      </Container>
    </>
  );
}

export default App;
