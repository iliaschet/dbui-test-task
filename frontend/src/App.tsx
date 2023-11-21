import React from "react";
import { AppTopBar } from "./components/AppTopBar";
import { StyledEngineProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TestTasks } from "./pages/TestTasks";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <AppTopBar />
        <Container
          maxWidth="xl"
          sx={{
            mt: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/test-tasks" element={<TestTasks />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
