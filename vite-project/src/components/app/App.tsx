import { Pages } from "../../pages";
import { ThemeProvider } from "@mui/material";
import theme from "../../assets/theme";
import CircularProgress from "@mui/material/CircularProgress";
import { Suspense } from "react";

export const App = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ThemeProvider theme={theme}>
        <Pages.Home />
      </ThemeProvider>
    </Suspense>
  );
};
