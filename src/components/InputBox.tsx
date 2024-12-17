import { Box } from "@radix-ui/themes";
import React from "react";

const InputBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box width={{ initial: "200px", sm: "300px" }} m="2">
      {children}
    </Box>
  );
};

export default InputBox;
