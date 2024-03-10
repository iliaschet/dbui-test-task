import { Route, Routes, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Dashboard } from "./pages/Dashboard";
import { TestTask } from "./pages/TestTask";

const AppRoutes = createBrowserRouter([
  {
    path: "*",
    element: (
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Dashboard />} />
          <Route path="test-tasks" element={<TestTask />} />
        </Route>
      </Routes>
    ),
  },
]);

export default AppRoutes;
