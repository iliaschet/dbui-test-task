import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { CustomLink } from "./CustomLink";
import { useNavigate } from "react-router-dom";

export const AppTopBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#2196F3",
        "& .MuiToolbar-root": {
          height: 64,
        },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CustomLink href={"/"}>
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
          </CustomLink>
          <Box>
            <Button
              onClick={() => navigate("/")}
              sx={{ my: 2, px: 2, color: "white", display: "block" }}
            >
              Dashboard
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() => navigate("/testtasks")}
              sx={{ my: 2, px: 2, color: "white", display: "block" }}
            >
              Test-Tasks
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
            <Avatar alt="Asundaram" src="/static/1.jpg" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
