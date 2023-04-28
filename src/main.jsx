import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import router from "./router/router";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading />} />
  </React.StrictMode>
);
