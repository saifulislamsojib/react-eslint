import { useEffect } from "react";
import { useRouteError } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const ErrorBoundary = () => {
  const error = useRouteError();

  useTitle("Error - Vite + React + ESLint");

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return (
    <div>
      <h1>Ops!</h1>
      <h2>{error?.message || "Page not found"}</h2>
    </div>
  );
};

export default ErrorBoundary;
