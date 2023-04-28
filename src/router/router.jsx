import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import Layout from "../components/Layout";
import About from "../pages/About";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <ErrorBoundary />,
      },
    ],
  },
]);

export default router;
