import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { ROUTES } from "../router/Router";

export const PageNames: any = {
  DASHBOARD: "Dashboard",
  TASKS: "Test-Tasks",
};

export const AppTopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickRoute = (page: string): void => {
    const pagePath = ROUTES[page];
    if (location.pathname !== pagePath) {
      navigate(pagePath);
    }
  };

  return (
    <AppBar position="static" sx={{ p: "0 24px" }}>
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
        <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
          {Object.keys(PageNames).map((page) => (
            <Button
              key={page}
              onClick={() => handleClickRoute(page)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {PageNames[page]}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/2.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
