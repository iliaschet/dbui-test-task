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
  const nav = useNavigate();

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
          <Box sx={{ flexGrow: 1 }}>
            <Button
              onClick={() => {
                console.log("123");
                nav("/");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Dashboard
            </Button>
          </Box>
          <Box sx={{ flexGrow: 25 }}>
            <Button
              onClick={() => {
                console.log("123");
                nav("/test-tasks");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Test-Tasks
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/2.jpg" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
