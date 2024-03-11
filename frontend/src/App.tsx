import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppTopBar } from "./components/AppTopBar";
import { StyledEngineProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import { Dashboard } from "./pages/Dashboard";
import Table from "./pages/Table";

function App() {
  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <AppTopBar />
        <Container maxWidth="xl" sx={{ mt: "100px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/test-task" element={<Table />} />
          </Routes>
        </Container>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;
