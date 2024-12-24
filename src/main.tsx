import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes.tsx";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";

const queryClient = new QueryClient();

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Theme appearance="dark" accentColor="plum" grayColor="slate">
        <AuthProvider store={store}>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </AuthProvider>
      </Theme>
    </QueryClientProvider>
  </React.StrictMode>
);
