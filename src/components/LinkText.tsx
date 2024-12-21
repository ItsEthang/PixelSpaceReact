import { Text } from "@radix-ui/themes";
import React from "react";

const LinkText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text
      className="underline-offset-3 hover:underline hover:text-white"
      weight="medium"
      color="plum"
    >
      {children}
    </Text>
  );
};

export default LinkText;
