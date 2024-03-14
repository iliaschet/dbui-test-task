import React from "react";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppTopBar } from "./components/AppTopBar";
import { StyledEngineProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import { Dashboard } from "./pages/Dashboard";
import { TestTask } from "./pages/TestTask";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <AppTopBar />
          <Container maxWidth="xl" sx={{ mt: "100px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/test-tasks" element={<TestTask />} />
            </Routes>
          </Container>
        </StyledEngineProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
