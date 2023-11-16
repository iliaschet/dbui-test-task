import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppTopBar } from "./components/AppTopBar/AppTopBar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Dashboard } from "./pages/Dashboard";
import { Task } from "./pages/Task";

const ROUTES = {
  TASK: "/task",
} as const;
function App() {
  return (
    <Router>
      <AppTopBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path={ROUTES.TASK} element={<Task />} />
      </Routes>
    </Router>
  );
}

export default App;
