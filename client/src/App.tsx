import { FC } from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { CssBaseline, createTheme, ThemeProvider, Container } from "@mui/material";

import { Appbar } from "./components/appbar/Appbar";
import { applicationRoutes } from "./pages/applications/routes";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const router = createBrowserRouter([
  {
    path: "",
    element: <Navigate to="/applications" replace={true} />,
  },
  {
    path: "/applications",
    children: applicationRoutes,
  },
]);

export const App: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Appbar />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  );
};
