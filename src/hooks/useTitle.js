import { useEffect } from "react";

const useTitle = (title = "") => {
  useEffect(() => {
    if (title) {
      document.title = title;

      return () => {
        document.title = "Vite + React + ESLint";
      };
    }
  }, [title]);
};

export default useTitle;
