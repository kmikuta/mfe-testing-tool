import { FC } from "react";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { Appbar } from "./components/appbar/Appbar";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const App: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Appbar />
    </ThemeProvider>
  );
};
