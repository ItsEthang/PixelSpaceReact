import { Box } from "@radix-ui/themes";
import HomeGrid from "./components/HomeGrid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box className="bg-zinc-700">
      <Navbar />
      <HomeGrid />
    </Box>
  );
}

export default App;
