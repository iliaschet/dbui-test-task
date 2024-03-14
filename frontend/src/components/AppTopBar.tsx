import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const AppTopBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex", gap: "16px" }}>
            <Button
              onClick={() => {
                navigate("/");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Dashboard
            </Button>
            <Button
              onClick={() => {
                navigate("/test-tasks");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Test-tasks
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/avatar.jpeg" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
