import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppTopBar } from "./components/AppTopBar";
import { Dashboard } from "./pages/Dashboard";
import { StyledEngineProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import { TestTask } from "./pages/TestTask";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <AppTopBar />
      <Container maxWidth="xl" sx={{ mt: "100px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/test-task" element={<TestTask />} />
        </Routes>
      </Container>
    </StyledEngineProvider>
  );
}

export default App;
