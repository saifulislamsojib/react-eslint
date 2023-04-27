import { useState } from "react";
import "./App.css";
import eslintLogo from "./assets/esLint.png";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://eslint.org" target="_blank" rel="noreferrer">
          <img src={eslintLogo} className="logo eslint" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + ESLint</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React and ESLint logos to learn more
      </p>
    </>
  );
}

export default App;
