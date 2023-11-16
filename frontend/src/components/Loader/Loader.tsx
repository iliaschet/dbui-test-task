import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loadere() {
  return (
    <Box sx={{ display: "flex", mx: "auto" }}>
      <CircularProgress />
    </Box>
  );
}
