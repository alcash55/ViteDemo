import { Button } from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <Button
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default Home;
