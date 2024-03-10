import React from "react";
import { AppTopBar } from "./components/AppTopBar";
import { StyledEngineProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <AppTopBar />
      <Container maxWidth="xl" sx={{ mt: "100px" }}>
        <Outlet />
      </Container>
    </StyledEngineProvider>
  );
}

export default App;
