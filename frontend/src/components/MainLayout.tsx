import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { AppTopBar } from "./AppTopBar";

const MainLayout: React.FC = () => {
  return (
    <Box minHeight="100vh" sx={{ backgroundColor: "#F2F2F2" }}>
      <AppTopBar />
      <Container maxWidth="xl" sx={{ mt: "100px" }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default MainLayout;
