import { createTheme } from "@mui/material";
import "./font.css";

const theme = createTheme({
  typography: {
    h1: { fontFamily: "'Inter', sans-serif", fontWeight: 700 },
    h2: { fontFamily: "'Inter', sans-serif", fontWeight: 700 },
    h3: { fontFamily: "'Inter', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Inter', sans-serif", fontWeight: 700 },
    h5: { fontFamily: "'Inter', sans-serif", fontWeight: 700 },
    h6: { fontFamily: "'Inter', sans-serif", fontWeight: 700 },
    subtitle1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "16px",
    },
    subtitle2: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 300,
      fontSize: "14px",
    },
    body1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "16px",
    },
    body2: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "14px",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#e91408",
    },
  },
});

export default theme;
