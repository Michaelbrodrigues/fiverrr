import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Home, MyGigs } from "./pages";

import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mygigs" element={<MyGigs />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
