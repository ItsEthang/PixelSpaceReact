import { Box } from "@radix-ui/themes";
import React from "react";

const InputBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box maxWidth="800px" width={{ initial: "200px", sm: "600px" }}>
      {children}
    </Box>
  );
};

export default InputBox;
