import { useEffect } from "react";
import useTitle from "../hooks/useTitle";

const About = () => {
  useTitle("About - Vite + React + ESLint");
  useEffect(() => {
    throw new Error("You must  go to home page");
  }, []);
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
