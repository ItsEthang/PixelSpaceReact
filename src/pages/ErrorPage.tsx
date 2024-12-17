import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { Box, Heading } from "@radix-ui/themes";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box p="5">
        <Heading>Oops</Heading>
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "Sorry, an unexpected Error occurred."}
      </Box>
    </>
  );
};

export default ErrorPage;
