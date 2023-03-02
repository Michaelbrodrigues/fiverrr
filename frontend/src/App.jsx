import React from "react";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import {
  Add,
  Gig,
  Gigs,
  Home,
  Login,
  Message,
  Messages,
  MyGigs,
  Orders,
  Register,
} from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const Layout = () => {
    return (
      <div className="mainApp">
        <Navbar />
        <div className="mainBody">
          <Outlet />
        </div>

        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
      ],
    },
  ]);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
