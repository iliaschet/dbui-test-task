import React from "react";
import { useFetchUsersQuery } from "../store/api";
import { Box, CircularProgress } from "@mui/material";
import TestTasksTable from "../components/TestTasksTable";

const TestTasks: React.FC = () => {
  const { data, error, isLoading } = useFetchUsersQuery("");

  if (isLoading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return <TestTasksTable data={data} />;
};

export default TestTasks;
