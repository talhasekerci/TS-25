import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="logo hover:animate-spin"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-avocado mb-8">Vite + React</h1>

      <div className="card-avocado">
        <button
          className="bg-]"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4 text-avocado">
          Edit{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">src/App.jsx</code> and
          save to test HMR
        </p>
      </div>

      <p className="text-avocado-light mt-8">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
