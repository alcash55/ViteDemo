import { Button, Typography } from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">Vite + React</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>

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
    </>
  );
};

export default Home;
