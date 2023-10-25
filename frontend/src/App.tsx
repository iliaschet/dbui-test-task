import React from "react";
import { AppTopBar } from "./components/AppTopBar";
import { StyledEngineProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <AppTopBar />
      <Container maxWidth="xl" sx={{ mt: "100px" }}>
        <Dashboard />
      </Container>
    </StyledEngineProvider>
  );
}

export default App;
