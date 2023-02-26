import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Kanit", "sans-serif"].join(","),
  },
  palette: {
    success: {
      light: "#49cb8f",
      main: "#1cbf73",
      dark: "#138550",
      contrastText: "#FFFFFF",
    },
    info: {
      light: "#808080",
      main: "#616161",
      dark: "#434343",
      contrastText: "#FFFFFF",
    },
  },
});

export default theme;
