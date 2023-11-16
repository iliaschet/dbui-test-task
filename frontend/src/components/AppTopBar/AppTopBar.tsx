import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const AppTopBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        width: "1440px",
        mx: "auto",
        p: "0px",
        height: "64px",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              width: "52px",
              display: { xs: "none", md: "flex" },
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              marginLeft: "auto",
            }}
          >
            <Button
              component={Link}
              to="/"
              sx={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "112px",
                mr: "16px",
                px: "11px",
                my: 0,
                py: "8px",
                fontFamily: "Roboto",
                fontSize: "15px",
                fontWeight: 500,
                lineHeight: "26px",
                letterSpacing: "0.46px",
                textTransform: "uppercase",
              }}
            >
              Dashboard
            </Button>
            <Button
              component={Link}
              to="/task"
              sx={{
                my: 0,
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "112px",
                px: "11px",
                py: "8px",
                fontFamily: "Roboto",
                fontSize: "15px",
                fontWeight: 500,
                lineHeight: "26px",
                letterSpacing: "0.46px",
                textTransform: "uppercase",
              }}
            >
              TEST-TASKS
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
            <Avatar alt="Remy Sharp" src="/static/2.jpg" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
