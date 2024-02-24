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
import { NotFound } from "./pages/NotFound";
import { store } from "./store";
import { Provider } from "react-redux";

import "./index.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <BrowserRouter>
          <AppTopBar />
          <Container
            maxWidth="xl"
            sx={{ width: "auto", mt: "96px", mx: "88px", pb: "32px" }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/testtasks" element={<TestTasks />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </Container>
        </BrowserRouter>
      </Provider>
    </StyledEngineProvider>
  );
}

export default App;
