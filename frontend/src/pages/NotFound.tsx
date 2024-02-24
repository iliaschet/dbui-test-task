import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h2" component="h2" textAlign={"center"}>
        {"Page not found :("}
      </Typography>
      <Button sx={{ width: "fit-content" }} onClick={() => navigate("/")}>
        {"Go to main page"}
      </Button>
    </Box>
  );
};
